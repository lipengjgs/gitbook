import { IEventID } from "./EventUtils";
import gContext from "../../gContext";

const {ccclass, property} = cc._decorator;
@ccclass
export default class EventUtilsComponent extends cc.Component {
    private disableOffIds: Array<IEventID> = [];
    private destroyOffIds: Array<IEventID> = [];

    pushDisableId(id: IEventID) {
        this.disableOffIds.push(id);
    }

    pushDestroyId(id: IEventID) {
        this.destroyOffIds.push(id);
    }

    onDisable() {
        for (let i = 0; i < this.disableOffIds.length; i ++) {
            const id = this.disableOffIds[i];
            gContext.eventUtils.off(id);
        }
        this.disableOffIds = [];
    }

    onDestroy() {
        this.onDisable();
        for (let i = 0; i < this.destroyOffIds.length; i ++) {
            const id = this.destroyOffIds[i];
            gContext.eventUtils.off(id);
        }
        this.destroyOffIds = [];
    }
}