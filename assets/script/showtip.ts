// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    index = 0;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var node = cc.find("Canvas/游戏引入/介绍");

        this.text = node.getComponent(cc.Label).string;//保存下来
        node.getComponent(cc.Label).string = ' ';//清空
        this.schedule(this.timeer, 0.075);
    }

    timeer() {
        var node = cc.find("Canvas/游戏引入/介绍");
        node.getComponent(cc.Label).string = ' ';//清空
        this.index++;
        let str = this.text.substr(0, this.index);
        node.getComponent(cc.Label).string = str;
        if (this.index > this.text.length)
            this.unschedule(this.timeer);

    }

    start() {

    }

    // update (dt) {}
}
