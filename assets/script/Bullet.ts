// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Common from "./Common";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    // 飞行的方位 (标准化向量)
    direction: cc.Vec2 = null;

    // 靶标,如何检验呢这个切的number与target的对应性,用no,得到了标靶然后可以得到标靶挂的脚本的数据
    target: cc.Node = null;

    // 爆炸特效
    explodeEffect: cc.SpriteFrame = null;

    // 音效
    audioExplode: cc.AudioClip = null;

    onLoad() {

    }

    start() {
        if (this.target == null) { cc.log('未设置靶标 target 属性!'); return; }
        if (this.explodeEffect == null) { cc.log('未设置爆炸特效 explodeEffect 属性!'); return; }

        this.schedule(this.onTimer, 0.016);
    }

    onTimer() {
        if (this.node.y > 300)  // 靶标与射击基准之间的距离
        {
            this.unschedule(this.onTimer);

            if (this.isHit())
                this.success();
            else
                this.failed();

            return;
        }

        let speed: number = 15; // 步长
        let dx = speed * this.direction.x;
        let dy = speed * this.direction.y;

        this.node.x += dx;
        this.node.y += dy;
    }

    dismiss() {
        this.node.destroy();
    }

    // 检查是否命中目标,改为碰撞检查?
    isHit(): boolean {
        var flag = 0;//检测类型匹配(number和)target随机出来的把
        //比对
        console.log("comm的值是" + Common.number);//没问题,切的枪
        //有问题的,应该是0
        console.log("no的值是" + Common.no);
        if (Common.no == Common.number) {
            console.log("验证成功");
            flag = 1;
        }

        let targetPos: cc.Vec2 = this.getWorldLocation(this.target);//有问题
        let selfPos: cc.Vec2 = this.getWorldLocation(this.node);//子弹的世界坐标
        let distance: number = Math.abs(targetPos.x - selfPos.x);  // x方向距离
        // let distance : number = cc.Vec2.distance(targetPos, selfPos);
        cc.log('靶标x=' + targetPos.x + ', 子弹x=' + selfPos.x);

        if (distance < 50 && flag == 1) return true;
        return false;
    }

    // 获取一个节点的世界坐标
    getWorldLocation(node: cc.Node): cc.Vec2 {
        let pos = node.getPosition();//相对于父亲(炮塔)来说的
        return node.parent.convertToWorldSpaceAR(pos);//父亲再把这个点转为世界点
    }

    success() {
        // 此处应添加特效
        this.change_score(10);
        cc.log('命中目标');
        // this.dismiss();   

        this.explode();
        this.cheer();

        // 得分,以后就不用那么麻烦去var scr=什么了
        Common.score += 10;

        // 音效
        if (this.audioExplode != null)
            cc.audioEngine.play(this.audioExplode, false, 1);
    }

    failed() {
        cc.log('脱靶!');
        this.soud2();
        this.change_score(-5);
        Common.score -= 5;

        this.uncheer();
        this.dismiss(); // 直接销毁
    }

    // 爆炸特效
    explode() {
        cc.log('爆炸效果..');
        let sp: cc.Sprite = this.node.getComponent(cc.Sprite);
        sp.spriteFrame = this.explodeEffect;

        this.node.scale = 0.1;

        let self = this;
        cc.tween(this.node)
            .to(0.4, { scale: 1 })
            .to(0.2, { opacity: 0 })
            .call(function () { self.dismiss(); })
            .start();
    }

    // 加分效果
    cheer() {
        let labelNode: cc.Node = new cc.Node();
        let label: cc.Label = labelNode.addComponent(cc.Label);
        label.string = "+10分";
        labelNode.color = new cc.Color(255, 0, 255);
        labelNode.parent = this.node.parent;
        labelNode.setPosition(cc.v3(0, 250, 0));
        labelNode.opacity = 200;

        cc.tween(labelNode)
            .to(0.5, { scale: 1.5 })
            .to(0.2, { opacity: 0 })
            .call(function () { labelNode.destroy(); })
            .start();
    }
    uncheer() {
        let labelNode: cc.Node = new cc.Node();
        let label: cc.Label = labelNode.addComponent(cc.Label);
        label.string = "-5分";
        labelNode.color = new cc.Color(255, 0, 0);
        labelNode.parent = this.node.parent;
        labelNode.setPosition(cc.v3(0, 250, 0));
        labelNode.opacity = 200;

        cc.tween(labelNode)
            .to(0.5, { scale: 1.5 })
            .to(0.2, { opacity: 0 })
            .call(function () { labelNode.destroy(); })
            .start();
    }
    // onCollisionEnter() {
    //     cc.log("调用撞到了");
    // }
    soud2() {
        var node = cc.find('其他/music/无子弹').getComponent(cc.AudioSource);
        node.play();
    }
    change_score(a: number) {
        var node = cc.find("Canvas/得分/分数");
        node.getComponent(cc.Label).string = Common.score + a + "分";

    }
}
