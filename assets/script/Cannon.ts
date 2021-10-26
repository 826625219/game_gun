// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Bullet from "./Bullet";
import Common from "./Common";
import Magazine from "./Magazine";



const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // 子弹图片

    @property([cc.SpriteFrame])
    public myNodes: cc.SpriteFrame[] = [];

    // 爆炸特效
    @property(cc.SpriteFrame)
    explodeEffect: cc.SpriteFrame = null;

    // 音效
    @property(cc.AudioClip)
    audioFire: cc.AudioClip = null;
    @property(cc.AudioClip)
    audioExplode: cc.AudioClip = null;

    // 炮塔图片
    @property(cc.SpriteFrame)
    iconNormal: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    iconActive: cc.SpriteFrame = null;

    // 内部属性    
    startPos: cc.Vec2 = null;
    startAngle: number = null;
    flag = 1;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        let a = window["data"];
        if (a.datas == 1) {
            Common.time = 100;
            //  a.datas = null;
        }
        if (a.datas == 2) {
            Common.time = 80;//难道是用了这个?
            //   a.datas = null;

        }
        if (a.datas == 3) {
            Common.time = 60;
            // a.datas = null;

        }
        var node1 = cc.find("Canvas/结果提示框");
        node1.active = false;


        //只在这里开会不会其他地方没接受到呢
        // var manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // 初始角度设为90度
        this.node.angle = 90;
        //因为只挂在这个炮塔的节点下面所以才会对触摸时间炮塔有影响
        this.node.on('touchstart', this.onTouchStart, this);//开始触摸
        this.node.on('touchmove', this.onTouchMove, this);//触摸移动控制炮塔方向
        this.node.on('touchend', this.onTouchEnd, this);//发射
        this.node.on('touchcancel', this.onTouchEnd, this);//?
    }

    start() {
        this.schedule(this.onTimer, 1);
    }
    onTimer() {
        Common.time--;
        var node = cc.find("Canvas/倒计时/时间");
        node.getComponent(cc.Label).string = Common.time + 's';
        if (Common.time == 0)  // 靶标与射击基准之间的距离
        {
            this.unschedule(this.onTimer);
            return;
        }
    }
    onTimer1() {
        var time = 2;
        time--;
        console.log("time为" + time);
        // var node = cc.find("Canvas/倒计时/时间");
        // node.getComponent(cc.Label).string = Common.time + 's';
        if (time == 1)  // 靶标与射击基准之间的距离
        {
            Common.resultDialog.showresult();
            Common.resultDialog.show();
            cc.director.pause();
            this.unschedule(this.onTimer1);
            return;
        }
    }

    update(dt) {
        if (this.flag == 1 && Common.time == 0) {
            console.log("子弹完了");
            this.flag = 0;

            //不然就计时器拖延时间给它赋值 
            //   this.schedule(this.onTimer1, 1);
            Common.resultDialog.showresult();
            Common.resultDialog.show();
            cc.director.pause();
        }
        if ((Common.magazine.count <= 0) && (Common.magazine1.count <= 0) && (Common.magazine2.count <= 0)) {
            this.flag = 0;
            this.schedule(this.onTimer1, 1);

        }
    }

    onTouchStart(e: cc.Event.EventTouch) {
        //把this.node改一下不就好了..
        // startPos : 触点开始的位置
        var node = cc.find('其他/music/蓄力').getComponent(cc.AudioSource);
        node.play();
        this.startPos = this.node.parent.convertToNodeSpaceAR(e.getLocation());
        // startAngle : 炮口的初始角度 (x轴方向为0度)
        this.startAngle = this.node.angle;

        // 激发时的图片显示
        this.node.getComponent(cc.Sprite).spriteFrame = this.iconActive;
    }

    onTouchMove(e: cc.Event.EventTouch) {
        // 触点的当前位置
        let pos = this.node.parent.convertToNodeSpaceAR(e.getLocation());

        // 摆动的角度 a.signAngle(b) 即 a向量与b向量之前的夹角(弧度)
        let sweep_radian = pos.signAngle(this.startPos);
        let sweep_angle = 180 * sweep_radian / Math.PI; // 弧度radian -> 角度 angle

        // 炮口的新指向
        // 比如，原来炮口90度，向右摆动15度，则炮口应指向75度
        let angle = this.startAngle - sweep_angle;
        // 炮口角度限制在45~135度之间
        if (angle < 45) angle = 30;
        if (angle > 135) angle = 150;

        //cc.log("炮口摆动: " + sweep_angle + ', 修正后的角度: ' + angle);

        this.node.angle = angle;
    }

    onTouchEnd(e: cc.Event.EventTouch) {

        // this.fire();

        // 普通状态的图片显示
        this.node.getComponent(cc.Sprite).spriteFrame = this.iconNormal;
    }

    // 开火
    fire() {
        if (Common.number == 1) {//看还有没有子弹
            var node1 = cc.find('Canvas/弹仓1').getComponent("Magazine1");
            if (node1.count == 0) {
                this.soud2();
                var node = cc.find('其他/music/无子弹').getComponent(cc.AudioSource);
                node.play();
                return;

            }
        }
        if (Common.number == 0) {//看还有没有子弹
            var node1 = cc.find('Canvas/弹仓').getComponent("Magazine");
            if (node1.count == 0) {
                this.soud2();
                var node = cc.find('其他/music/无子弹').getComponent(cc.AudioSource);
                node.play();
                return;

            }
        }
        if (Common.number == 2) {//看还有没有子弹
            var node1 = cc.find('Canvas/弹仓2').getComponent("Magazine2");
            if (node1.count == 0) {
                this.soud2();
                var node = cc.find('其他/music/无子弹').getComponent(cc.AudioSource);
                node.play();
                return;

            }
        }
        if (this.myNodes[Common.number] == null) { cc.log('请设置bulletIcon图片'); return; }

        // 炮口的指向，应是子弹的运行方向
        let angle: number = this.node.angle; // 子弹运行的方向 
        let radian = angle * Math.PI / 180;
        let direction = cc.v2(Math.cos(radian), Math.sin(radian)); // 标准化向量

        // 动态创建一个子弹Node，添加Sprite组件
        let bulletNode: cc.Node = new cc.Node();
        // bulletNode.group = "子弹";//添加动态碰撞,无法edit碰撞边缘...,可以动态加一个碰撞组件,等下试试看
        let sprite: cc.Sprite = bulletNode.addComponent(cc.Sprite);
        sprite.spriteFrame = this.myNodes[Common.number];   // 设置子弹的图片     

        bulletNode.parent = this.node.parent; // 指定父节点

        // 角度及初始位置  
        bulletNode.angle = this.node.angle; // 子弹的角度
        let r = 120; // 子弹与射击基准的距离
        let bullet_x = r * direction.x;//rcosx
        let bullet_y = r * direction.y;
        bulletNode.setPosition(cc.v3(bullet_x, bullet_y, 0));    // 子弹的初始位置       

        // // 给子弹附加脚本组件
        // let bullet: Bullet  = bulletNode.addComponent( Bullet );
        // bullet.direction = direction; // 子弹的飞行方向
        // 给子弹附加脚本组件
        let bullet: Bullet = bulletNode.addComponent(Bullet);//bulletNode下挂一个脚本Bullet,返回脚本
        bullet.direction = direction;
        //根据枪来找靶子,动态绑定,不可以在这更新的
        if (Common.no == 0)
            bullet.target = cc.find('Canvas/靶子');

        if (Common.no == 1)//如果玩家知道切的换就会正确绑定啊!
            bullet.target = cc.find('Canvas/靶子1');

        if (Common.no == 2)
            bullet.target = cc.find('Canvas/靶子2');

        bullet.explodeEffect = this.explodeEffect; // 爆炸特效
        bullet.audioExplode = this.audioExplode;

        // let magazine : Magazine = cc.find('Canvas/弹仓').getComponent('Magazine');
        // magazine.consume(1);
        if (Common.number == 0) {
            Common.magazine.consume(1);
            console.log(Common.magazine.count);
        }

        if (Common.number == 1) {
            Common.magazine1.consume(1);
            console.log(Common.magazine1.count);
        }
        if (Common.number == 2) {
            Common.magazine2.consume(1);
            console.log(Common.magazine2.count);
        }


        // 音效
        if (this.audioFire != null)
            cc.audioEngine.play(this.audioFire, false, 1);
    }
    soud2() {
        var node = cc.find('其他/music/无子弹').getComponent(cc.AudioSource);
        node.play();
    }

}
