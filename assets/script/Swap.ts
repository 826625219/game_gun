// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import Common from "./Common";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property([cc.SpriteFrame])
    public myNodes: cc.SpriteFrame[] = [];

    @property([cc.AudioSource])
    public myNodes1: cc.AudioSource[] = [];
    // number = 0
    // @property(cc.SpriteFrame)
    // bulletIcon: cc.SpriteFrame = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    swap() {
        Common.number++;
        Common.number %= 3;
        var node = cc.find('Canvas/切换子弹');
        console.log(Common.number);
        node.getComponent(cc.Sprite).spriteFrame = this.myNodes[Common.number];
        var node1 = cc.find('Canvas/弹仓');
        var node2 = cc.find('Canvas/弹仓1');
        var node3 = cc.find('Canvas/弹仓2');
        // var node4 = cc.find('Canvas/弹仓之子');
        // var node5 = cc.find('Canvas/弹仓之子1');
        // var node6 = cc.find('Canvas/弹仓之子2');

        if (Common.number == 0) {
            node1.active = true;
            node2.active = false;
            node3.active = false;
            // node4.active = true;
            // node5.active = false;
            // node6.active = false;
        }
        if (Common.number == 1) {
            node1.active = false;
            node2.active = true;
            node3.active = false;
            // node4.active = false;
            // node5.active = true;
            // node6.active = false;
        }
        if (Common.number == 2) {
            node1.active = false;
            node2.active = false;
            node3.active = true;
            // node4.active = false;
            // node5.active = false;
            // node6.active = true;
        }
    }
    soud1() {
        var node = cc.find('其他/music/上膛').getComponent(cc.AudioSource);
        node.play();
    }
    soud2() {
        var node = cc.find('其他/music/点击').getComponent(cc.AudioSource);
        node.play();
    }


    // update (dt) {}
}
