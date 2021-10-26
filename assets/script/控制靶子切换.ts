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
    @property([cc.Node])
    public myNodes: cc.Node[] = [];
    // 运动方向
    isLeft: boolean = true;
    flag = 0;
    no = 1;//是一个身份证
    //1.得到现在被激活的那个靶子是哪个,用no,得到它什么时候到达边界,用随机数设置新节点激活与灭杀即现在的灭杀
    //新的激活,其余不用管因为是没激发状态,新的激活要设置节点的坐标点
    //2.


    onLoad() {
        //Common.number=this.random(0,2);

    }

    start() {

    }



    update(dt) {//1.得到现在被激活的那个靶子是哪个,用no,得到它什么时候到达边界,用随机数设置新节点激活与灭杀即现在的灭杀
        //新的激活,其余不用管因为是没激发状态,新的激活要设置节点的坐标点
        var node_active = this.myNodes[Common.no];
        var x = node_active.x;
        if (x <= -900) {//左边
            console.log("x==-800,调用了切换");
            this.myNodes[Common.no].active = false;//灭杀老节点
            //新节点和老的一定不同
            var a = this.random(0, 2);
            while (a == Common.no) {//出来就不同啦
                a = this.random(0, 2);
            }
            Common.no = a;//新的激活的节点,变成2了
            this.myNodes[Common.no].setPosition(cc.v2(-899, 138));
            this.myNodes[Common.no].active = true;
            // this.myNodes[Common.no].setPosition(cc.v2(-800, 138));//设置好又向左啦

        }
        if (x >= 900) {//右边
            this.myNodes[Common.no].active = false;
            Common.no = this.random(0, 2);//新的激活的节点,需要控制新节点的那个left
            this.myNodes[Common.no].setPosition(cc.v2(899, 138));
            this.myNodes[Common.no].active = true;
            // this.myNodes[Common.no].setPosition(cc.v2(800, 138));
            //不然你就手动来设置left


        }
    }

    random(lower, upper) { //在区间生产随机数
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }


}
