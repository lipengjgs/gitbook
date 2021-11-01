let id: number = 0
function newEvent(desc: string): string {
    id = id + 1;
    return 'e_' + desc + "_" + id;
}

const eventKeys = {
    // ui_login_load_end: newEvent('ui_login_load_end'),   // 登陆界面加载完成
    ui_share_wxcircle_end: newEvent('ui_share_wxcircle_end'), // 大厅分享朋友圈完成
    ui_record_game_choose: newEvent('ui_record_game_choose'),  // 大厅战绩选择玩法
    ui_create_room_item_clicked: newEvent('ui_create_room_item_clicked'),   // 创建房间，点击了可选项
    ui_create_room_game_clicked: newEvent('ui_create_room_game_clicked'),   // 创建房间，点击了某个游戏
    ui_club_common_menu_clicked: newEvent('ui_club_common_menu_clicked'),   // 俱乐部，点击了菜单项
    ui_page_change: newEvent('ui_page_change'),                             // 公用翻页改变

    pulic_game_free2begin: newEvent('public_game_free2begin'),              // 牌局未开始到开始状态改变
    // 参数:{index: index, card: card}
    ui_hand_select_change: newEvent('ui_hand_card_select'),                 // 手牌被选中
    ui_club_list_show: newEvent('ui_club_list_show'),
    ui_club_list_hide: newEvent('ui_club_list_hide'),

    ui_club_scheme_color_show: newEvent('ui_club_scheme_color_show'),
    ui_club_scheme_color_hide: newEvent('ui_club_scheme_color_hide'),

    ui_date_selector_change: newEvent('ui_date_selector_change'),           // 日期选择选择日期改变
    ui_create_room_note_show: newEvent('ui_create_room_note_show'),         // 创建房间note
    ui_create_room_note_hide: newEvent('ui_create_room_note_hide'),         // 创建房间note

    data_card_num_change: newEvent('data_card_num_change'),                 // 房卡数量改变了。
    data_invite_change: newEvent('data_invite_change'),                     // 邀请状态改变
    data_marquee_change: newEvent('data_marquee_change'),                   // 跑马灯更新
    //  参数：空
    data_hand_select_clean: newEvent('data_hand_select_clean'),             // 清空选中
    data_dismiss_data_change: newEvent('data_dismiss_data_change'),         // 游戏-解散房间数据改变了

    // 参数:{ o: oData, n: nData}
    data_game_status_change: newEvent('data_game_status_change'),           // 游戏-状态改变
    data_player_update: newEvent('data_player_update'),                     // 游戏-玩家信息改变

    data_game_step_change: newEvent('data_game_step_change'),               // 游戏-局数改变
    // 参数：{o:true/false, n: true/false}
    data_dismiss_state_change: newEvent('data_dismiss_state_change'),       // 游戏-解散房间状态发生改变

    data_game_total_end: newEvent('data_game_total_end'),                   // 游戏-整局结束
    data_game_view_changed: newEvent('data_game_view_changed'),             // 游戏-视角改变了
    // 参数：{ reason: reason }
    data_room_destroyed: newEvent('data_room_destroyed'),                   // 游戏-房间倍解散了
    // 参数:{ o: data }
    data_player_add: newEvent('data_player_add'),                           // 游戏-玩家加入
    data_player_remove: newEvent('data_player_remove'),                     // 游戏-玩家离开
    data_chat_msg: newEvent('data_chat_msg'),                               // 游戏-聊天消息
    // 参数:{pos: pos, index: index}
    data_pai_dun_change: newEvent('data_pai_dun_change'),                   // 游戏-牌墩里的牌发生改变
    data_operated_change: newEvent('data_operated_change'),                 // 游戏-玩家已操作的：吃、碰、杠、胡、亮癞 等行为改变了
    // 参数:{pos: pos, card: card}
    data_get_card: newEvent('data_get_card'),                               // 游戏-起牌消息
    data_put_card: newEvent('data_put_card'),                               // 游戏-打牌消息
    // 参数：{pos: pos, dt: dt}
    data_game_score_change: newEvent('data_game_score_change'),             // 打牌中途分数变化
    // 参数:{pos: pos}
    data_choose_operate_change: newEvent('data_choose_operate_change'),     // 游戏-玩家可以操作的：吃、碰、杠、胡等状态改变了
    data_player_pointer_change: newEvent('data_player_pointer_change'),     // 游戏-玩家牌权改变了
    data_card_pointer_change: newEvent('data_card_pointer_change'),         // 游戏-牌的指针改变了
    data_out_card_change: newEvent('data_out_card_change'),                 // 游戏-出牌数据改变
    data_paidun_card_change: newEvent('data_paidun_card_change'),           // 游戏-牌墩牌数据改变
    // 参数:{pos: pos, card: card}
    data_hand_card_add: newEvent('data_hand_card_add'),                     // 游戏-手牌数据改变
    // 参数:{pos: pos, cards: cards}
    data_hand_card_remove: newEvent('data_hand_card_remove'),               // 游戏-手牌数据改变
    data_club_focus_change: newEvent('data_club_focus_change'),             // 俱乐部焦点改变

    data_club_list_change: newEvent('data_club_list_change'),
    // 参数:{o: member, clubID: clubID}
    data_club_member_add: newEvent('data_club_member_add'),
    data_club_member_update: newEvent('data_club_member_update'),
    data_club_member_remove: newEvent('data_club_member_remove'),
    // 参数:{o: table}
    data_club_table_add: newEvent('data_club_table_add'),
    data_club_table_update: newEvent('data_club_table_update'),
    data_club_table_remove: newEvent('data_club_table_remove'),

    data_club_scheme_add: newEvent('data_club_scheme_add'),
    data_club_scheme_update: newEvent('data_club_scheme_update'),
    data_club_scheme_remove: newEvent('data_club_scheme_remove'),

    data_club_invite_msg_add: newEvent('data_club_invite_msg_add'),
    data_club_invite_msg_update: newEvent('data_club_invite_msg_update'),
    data_club_invite_msg_remove: newEvent('data_club_invite_msg_remove'),

    data_club_setting_update: newEvent('data_club_setting_update'),
    data_club_setting_empty_change: newEvent('data_club_setting_empty_change'),
    data_club_setting_notice_change: newEvent('data_club_setting_notice_change'),
    data_club_setting_name_change: newEvent('data_club_setting_name_change'),

    todo_voice_stop_play: newEvent('todo_voice_stop_play'),                 // 停止播放语音
    todo_voice_real_time_change: newEvent('todo_voice_real_time_change'),   // 实时语音状态改变了
    todo_club_list_search: newEvent('todo_club_list_search'),               // 俱乐部-搜索

    data_club_isolategroup_update: newEvent('data_club_isolategroup_update'),  //更新隔离列表界面

    data_club_member_manager_update: newEvent('data_club_member_manager_update'),    //管理权限修改成功后，更新成员列表界面
    data_club_apply_list_update: newEvent('data_club_apply_list_update'),    //俱乐部更新申请列表界面
    data_club_inviteuser_list_update: newEvent('data_club_inviteuser_list_update'),    //俱乐部更新邀请列表界面

    data_club_table_scheme_update: newEvent('data_club_table_scheme_update'),       // 俱乐部玩法修改保存 刷新桌子显示
    data_club_record_list_update: newEvent('data_club_record_list_update'),    //俱乐部战绩修改时间列表刷新
    data_club_get_scheme_list: newEvent('data_club_get_scheme_list'),           //获取开房方案列表数据
    data_reconnect_club: newEvent('data_reconnect_club'), //重连拉去开房方案数据
}

export default eventKeys;
