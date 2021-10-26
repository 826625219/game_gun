// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Magazine from "./Magazine";
import magazine2 from "./Magazine2";
import ResultDialog from "./ResultDialog";
import Target from "./Target";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Common extends cc.Component {
    static random = 0;//产生target的随机数
    static magazine = null;
    static magazine1 = null;
    static magazine2 = null;
    // 得分统计
    static score: number = 0;
    //
    static no = 0;//替代string进行验证
    static time: number = 90;
    //static speed;算了
    // 结果提示框
    static resultDialog: ResultDialog = null;
    //切的枪
    static number: number = 0;

    onLoad() {
        cc.log('Common.onLoad()被调用');
        Common.magazine = cc.find('Canvas/弹仓').getComponent('Magazine');//脚本
        Common.magazine1 = cc.find('Canvas/弹仓1').getComponent('Magazine1');//脚本
        Common.magazine2 = cc.find('Canvas/弹仓2').getComponent('Magazine2');//脚本

        Common.resultDialog = cc.find('Canvas/结果提示框').getComponent('ResultDialog');//脚本
    }
    static resetGame() {
        Common.no = 0;
        Common.number = 0;
        Common.score = 0;
        //  Common.time = 90;
        Common.magazine.reset();
        Common.magazine1.reset();
        Common.magazine2.reset();
    }

    // update (dt) {}
}
