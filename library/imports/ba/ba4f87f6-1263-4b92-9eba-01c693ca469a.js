"use strict";
cc._RF.push(module, 'ba4f8f2EmNLkp66AcaTykaa', 'Bullet');
// script/Bullet.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("./Common");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 飞行的方位 (标准化向量)
        _this.direction = null;
        // 靶标,如何检验呢这个切的number与target的对应性,用no,得到了标靶然后可以得到标靶挂的脚本的数据
        _this.target = null;
        // 爆炸特效
        _this.explodeEffect = null;
        // 音效
        _this.audioExplode = null;
        return _this;
    }
    Bullet.prototype.onLoad = function () {
    };
    Bullet.prototype.start = function () {
        if (this.target == null) {
            cc.log('未设置靶标 target 属性!');
            return;
        }
        if (this.explodeEffect == null) {
            cc.log('未设置爆炸特效 explodeEffect 属性!');
            return;
        }
        this.schedule(this.onTimer, 0.016);
    };
    Bullet.prototype.onTimer = function () {
        if (this.node.y > 300) // 靶标与射击基准之间的距离
         {
            this.unschedule(this.onTimer);
            if (this.isHit())
                this.success();
            else
                this.failed();
            return;
        }
        var speed = 15; // 步长
        var dx = speed * this.direction.x;
        var dy = speed * this.direction.y;
        this.node.x += dx;
        this.node.y += dy;
    };
    Bullet.prototype.dismiss = function () {
        this.node.destroy();
    };
    // 检查是否命中目标,改为碰撞检查?
    Bullet.prototype.isHit = function () {
        var flag = 0; //检测类型匹配(number和)target随机出来的把
        //比对
        console.log("comm的值是" + Common_1.default.number); //没问题,切的枪
        //有问题的,应该是0
        console.log("no的值是" + Common_1.default.no);
        if (Common_1.default.no == Common_1.default.number) {
            console.log("验证成功");
            flag = 1;
        }
        var targetPos = this.getWorldLocation(this.target); //有问题
        var selfPos = this.getWorldLocation(this.node); //子弹的世界坐标
        var distance = Math.abs(targetPos.x - selfPos.x); // x方向距离
        // let distance : number = cc.Vec2.distance(targetPos, selfPos);
        cc.log('靶标x=' + targetPos.x + ', 子弹x=' + selfPos.x);
        if (distance < 50 && flag == 1)
            return true;
        return false;
    };
    // 获取一个节点的世界坐标
    Bullet.prototype.getWorldLocation = function (node) {
        var pos = node.getPosition(); //相对于父亲(炮塔)来说的
        return node.parent.convertToWorldSpaceAR(pos); //父亲再把这个点转为世界点
    };
    Bullet.prototype.success = function () {
        // 此处应添加特效
        this.change_score(10);
        cc.log('命中目标');
        // this.dismiss();   
        this.explode();
        this.cheer();
        // 得分,以后就不用那么麻烦去var scr=什么了
        Common_1.default.score += 10;
        // 音效
        if (this.audioExplode != null)
            cc.audioEngine.play(this.audioExplode, false, 1);
    };
    Bullet.prototype.failed = function () {
        cc.log('脱靶!');
        this.soud2();
        this.change_score(-5);
        Common_1.default.score -= 5;
        this.uncheer();
        this.dismiss(); // 直接销毁
    };
    // 爆炸特效
    Bullet.prototype.explode = function () {
        cc.log('爆炸效果..');
        var sp = this.node.getComponent(cc.Sprite);
        sp.spriteFrame = this.explodeEffect;
        this.node.scale = 0.1;
        var self = this;
        cc.tween(this.node)
            .to(0.4, { scale: 1 })
            .to(0.2, { opacity: 0 })
            .call(function () { self.dismiss(); })
            .start();
    };
    // 加分效果
    Bullet.prototype.cheer = function () {
        var labelNode = new cc.Node();
        var label = labelNode.addComponent(cc.Label);
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
    };
    Bullet.prototype.uncheer = function () {
        var labelNode = new cc.Node();
        var label = labelNode.addComponent(cc.Label);
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
    };
    // onCollisionEnter() {
    //     cc.log("调用撞到了");
    // }
    Bullet.prototype.soud2 = function () {
        var node = cc.find('其他/music/无子弹').getComponent(cc.AudioSource);
        node.play();
    };
    Bullet.prototype.change_score = function (a) {
        var node = cc.find("Canvas/得分/分数");
        node.getComponent(cc.Label).string = Common_1.default.score + a + "分";
    };
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

cc._RF.pop();