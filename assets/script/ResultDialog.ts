// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Common from "./Common";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultDialog extends cc.Component {

    onLoad() {
        // let replayNode: cc.Node = cc.find('replay', this.node);
        // replayNode.on('touchstart', this.onReplay, this);

        // 拦截触摸事件
        this.node.on('touchstart', this.onTouchDisable, this);
        this.node.on('touchmove', this.onTouchDisable, this);
        this.node.on('touchend', this.onTouchDisable, this);
    }

    start() {
    }

    // 显示提示框
    show() {
        this.node.active = true;
        // 显示最终得分
        let scoreNode: cc.Node = cc.find('Canvas/结果提示框/分数框/分数');
        let scoreLabel: cc.Label = scoreNode.getComponent(cc.Label);
        scoreLabel.string = Common.score + '分';

    }

    // 隐藏提示框
    dismiss() {
        this.node.active = false;
    }

    // 添加一个onReplay来响应事件吧
    onReplay() {
        cc.director.resume();
        this.dismiss();
        cc.director.resume();
        // 重置游戏
        Common.resetGame();
        cc.director.loadScene("场景1");

    }

    onTouchDisable(e: cc.Event.EventTouch) {
        e.stopPropagation();
    }
    showresult() {//就是给称号赋值


        var name = cc.find("Canvas/结果提示框/称号");
        //没问题  console.log(component.string);
        switch (true) {
            case Common.score <= 30:
                name.getComponent(cc.Label).string = "正常人";
                break;
            case Common.score <= 60:
                name.getComponent(cc.Label).string = "小枪手";
                break;
            case Common.score <= 90:
                name.getComponent(cc.Label).string = "大枪手";
                break;
            case Common.score <= 120:
                name.getComponent(cc.Label).string = "枪械师";
                break;
            case Common.score <= 150:
                name.getComponent(cc.Label).string = "枪魂";
                break;
            case Common.score <= 180:
                name.getComponent(cc.Label).string = "枪尊";
                break;
            case Common.score <= 210:
                name.getComponent(cc.Label).string = "枪皇";
                break;
            case Common.score <= 240:
                name.getComponent(cc.Label).string = "枪帝";
                break;
            case Common.score <= 270:
                name.getComponent(cc.Label).string = "暗夜猎手";
                break;
            case Common.score <= 300:
                name.getComponent(cc.Label).string = "卢锡安";
                break;
            case Common.score <= 330:
                name.getComponent(cc.Label).string = "德莱文";
                break;
            case Common.score <= 360:
                name.getComponent(cc.Label).string = "法外狂徒";
                break;
            case Common.score <= 390:
                name.getComponent(cc.Label).string = "暗影岛枪神";
                break;
            case Common.score <= 420:
                name.getComponent(cc.Label).string = "巨神峰枪神";
                break;
            case Common.score <= 430:
                name.getComponent(cc.Label).string = "黑色玫瑰枪神";
                break;
            case Common.score <= 440://就是有天罚
                name.getComponent(cc.Label).string = "艾欧尼亚枪神";
                break;

            case Common.score == 450://就是无天罚
                name.getComponent(cc.Label).string = "创世枪神";
                break;




        }
        //  var node6 = cc.find("Canvas/Main Camera/弹窗");


        //    node6.active = true;//弹窗显示ok

        //    cc.director.pause();

    }
}
