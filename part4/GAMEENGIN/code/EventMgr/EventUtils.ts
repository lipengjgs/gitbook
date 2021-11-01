import EventUtilsComponent from "./EventUtilsComponent";
let eventMap = {};
/**
 * 收到事件监听的回掉函数。
 */
export type eventCallback = (event: string, param?: any) => void;

/**
 * 事件每一项
 */
interface IEventCell {
    callback: eventCallback,
    target?: Object
}

/**
 * 监听事件 eventUtils.on 返回的事件ID，用于在不需要监听的事件关闭。
 */
export interface IEventID {
    events: Array<string | number>,
    callback: eventCallback
}

export enum eOffType {
    OnDisable = 0,
    OnDestroy,
    Manual
}

const { ccclass, property } = cc._decorator;
@ccclass
export default class EventUtils extends cc.Component {
    private _datas = [];

    update() {
        for (let i = 0, len = this._datas.length; i < len; i++) {
            const event = this._datas[i].event;
            const param = this._datas[i].param;
            this._emit(event, param);
        }
        this._datas = [];
    }
    /**
     * 获取event监听者数量
     * @param event 
     */
    public ListenerCount(event: string | number): number {
        return (eventMap[event] || []).length || 0;
    }

    /**
     * 移除一个监听（将eventMap里面的event对应下面的callback项移除掉。）
     * 
     * @param event eventMap 里面的event
     * @param callback eventMap 映射的event对应的callback
     */
    private _off(event: string | number, callback: eventCallback) {
        let eventCell: Array<IEventCell> = eventMap[event];
        if (eventCell) {
            for (let i = 0; i < eventCell.length; i++) {
                let element: IEventCell = eventCell[i];
                if (element.callback == callback) {
                    eventCell.splice(i, 1);
                    break;
                }
            }
            // 此种类型的事件监听没有关联的回掉了。
            if (eventCell.length < 1) {
                delete eventMap[event];
            }
        }
    }

    /**
     * 添加事件监听，如果target是 cc.Component 组件，默认会在onDisable关闭监听，如不关闭，需要重写onDisable。
     * 
     * @param events 事件的 主键 或者 主键数组
     * @param callback 收到事件后的回掉函数function(target, event, param)
     * @param target 回掉关联的对象，一般传入this与之绑定（绑定后根据off参数自动管理监听开和关）, 全局则传null（需要自行管理开关）
     * 
     * @returns ID 用于后面不需要监听时，关闭。
     */
    on(events: string | Array<string>, callback: eventCallback, target: Object, off = eOffType.OnDisable): IEventID {
        let getEvents = function (events: string | Array<string>) {
            let newEvents = [];
            if (typeof (events) == "string") {
                newEvents.push(events);
            } else {
                newEvents = events;
            }
            return newEvents;
        }

        let _events: Array<string | number> = getEvents(events);

        _events.forEach(element => {
            if (eventMap[element]) {
            } else {
                eventMap[element] = new Array<IEventCell>();
            }
            let eventCell: Array<IEventCell> = eventMap[element];
            eventCell.push({ callback: callback, target: target });
        });

        const eventId = { events: _events, callback: callback };

        if (target && target instanceof cc.Component) {
            if (off === eOffType.OnDisable || off === eOffType.OnDestroy) {
                let s = target.node.getComponent(EventUtilsComponent);
                if (s) {
                } else {
                    s = target.node.addComponent(EventUtilsComponent);
                }
                if (off === eOffType.OnDisable) {
                    // 如果节点不是激活状态，会导致添加上去的组件不走
                    if (target.node.activeInHierarchy) {
                        s.pushDisableId(eventId);
                    } else {
                        cc.warn("Event Utils warning: node is not active, event id:", eventId);
                        const old = target.node.active;
                        target.node.active = true;
                        s.pushDisableId(eventId);
                        target.node.active = old;
                    }
                } else if (off == eOffType.OnDestroy) {
                    if (target.node.activeInHierarchy) {
                        s.pushDestroyId(eventId);
                    } else {
                        cc.warn("Event Utils warning: node is not active, event id:", eventId);
                        const old = target.node.active;
                        target.node.active = true;
                        s.pushDestroyId(eventId);
                        target.node.active = old;
                    }
                }
            }
        }
        return eventId;
    }

    /**
     * 关闭事件监听
     * 
     * @param ID 开启监听时的ID
     */
    off(ID: IEventID) {
        if (!ID) {
            return;
        }
        let events = ID.events;
        let callback = ID.callback;
        events.forEach(element => {
            this._off(element, callback);
        });
    }

    

    /********************************************************
     * 发送事件
     * @param event 事件 主键
     * @param param 参数，会传给事件回掉函数，具体事件具体处理。
     *********************************************************/
    public emit(event: string | number, param?: any) {
        this._datas.push({
            event: event,
            param: param
        });
        // this._emit(event, param)
    }

    private _emit(event: string | number, param?: any) {
        let eventCell: Array<IEventCell> = [];
        const old = eventMap[event];
        if (!old) { return; }

        // 拷贝一份，防止在做事件回调函数的时候，事件数组有删减操作，部分事件监听不到。
        // 后面可以用check函数在检测是否还存在此事件，目前暂时不做此检查。
        for (let i = 0; i < old.length; i++) {
            eventCell.push(old[i]);
        }
        // 检查拷贝事件是否被删除
        const check = function (event: number | string, callback: Function) {
            let eventCell: Array<IEventCell> = eventMap[event];
            if (eventCell) {
                for (let i = 0; i < eventCell.length; i++) {
                    let element: IEventCell = eventCell[i];
                    if (element.callback == callback) {
                        return true;
                    }
                }
            }
            return false;
        }
        eventCell.forEach(element => {
            if ((element.target instanceof cc.Component) && (!element.target.isValid)) {
                console.warn("事件处理异常：绑定事件的component已无效，但是监听没关闭");
                console.warn("event is:" + event);
                console.warn("event target is:" + element.target);
            } else {
                try {
                    element.callback.call(element.target, event, param);
                } catch (error) {
                    console.error(error);
                }
            }
        });
    }
}
