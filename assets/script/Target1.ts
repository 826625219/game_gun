// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import Common from "./Common";
@ccclass
export default class Target extends cc.Component {

    // 运动方向
    speed = 4;
    isLeft = true;
    flag = 1;
    no = 1;//是一个身份证
    onLoad() {
        //等下打印看看,或者-800的值<一定范围也可以,先降低要求
        console.log("激活后我的x为" + this.node.x);
        if (this.node.x == -899) {
            this.isLeft = false;
        }
        if (this.node.x == 899) {
            this.isLeft = true;
        }

        let a = window["data"];
        var b = a.datas;

        if (b == 1) {
            this.speed = 4;
        }
        if (b == 2) {
            this.speed = 6;
        }
        if (b == 3) {
            this.speed = 8;
        }

    }

    start() {

    }



    update(dt) {
        //console.log("x为" + this.node.x);
        // console.log("x为" + this.node.x);
        if (this.node.x <= -900) {//运动范围在-800附近到800附近
            //  console.log("0号node.x<0")
            this.isLeft = false;
        }
        if (this.node.x >= 900) {
            //  console.log("0号node.x>0")
            this.isLeft = true;
        }


        let dx = this.speed;
        if (this.isLeft) {
            dx = 0 - dx;
        }
        this.node.x += dx;
        // var node1 = cc.find('Canvas/靶子');
        // var node2 = cc.find('Canvas/靶子2');
        // var node3 = cc.find('Canvas/靶子3');

        // if (this.isLeft && this.node.x <= -800) {//可以用计时器,要执行这个条件的话得至少2s,然后更新计时器

        //     this.isLeft = false;

        // }

        // if (!this.isLeft && this.node.x >= 800) {
        //     this.isLeft = true;


        // }
    }
    random(lower, upper) { //在区间生产随机数
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }


}
