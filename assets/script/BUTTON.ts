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
import Common from "./Common";
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    flag = 1;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let a = window["data"];
        console.log("datas此时的值是" + a.datas);
    }

    start() {

    }
    closefor0() {
        //   重新来,那个右上
        //  cc.director.resume();
        //  Common.resetGame(); 
        //怕a重复赋值啊
        // let a = window["data"];
        //  a.datas = 2;
        //  cc.director.resume();
        //  Common.resetGame();
        cc.director.loadScene("场景0");//切换场景会重置数据的
    }
    closeBtn() {
        //   重新来,那个右上
        //  cc.director.resume();
        //  Common.resetGame(); 

        let a = window["data"];
        a.datas = 1;
        // Common.resetGame();
        // Common.resetGame();
        cc.director.loadScene("场景1");//切换场景会重置数据的
    }
    closeBtnb() {
        //   重新来,那个右上
        //  cc.director.resume();
        //  Common.resetGame(); 

        let a = window["data"];
        a.datas = 2;
        // Common.resetGame();
        // Common.resetGame();
        cc.director.loadScene("场景1");//切换场景会重置数据的
    }
    closeBtnc() {
        //   重新来,那个右上
        //cc.director.resume();
        //  Common.resetGame(); 

        let a = window["data"];
        a.datas = 3;
        // Common.resetGame();
        // Common.resetGame();//下面这条不会对分数和时间重置
        cc.director.loadScene("场景1");//切换场景会重置数据的
    }
    closeBtn1() {
        //  显示结果结束游戏,那个左上

        Common.resultDialog.showresult();//赋值
        Common.resultDialog.show();//结束之前给赋值
        Common.resetGame();
        cc.director.pause();



        //  cc.director.pause();
        //   cc.director.pause();
        //激活弹窗,后续操作
        //   cc.director.pause();
    }
    closeBtn2() {//退出
        cc.game.end();
        wx.exitMiniProgram();
    }
    closeBtn3() {//音效

        var node = cc.find("Canvas/Main Camera");
        if (this.flag == 1) {
            node.getComponent(cc.AudioSource).pause();
            this.flag = 0;
        }

        else {
            node.getComponent(cc.AudioSource).play();
            this.flag = 1;
        }
    }
    // update (dt) {}
}
