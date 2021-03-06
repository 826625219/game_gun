(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Bullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ba4f8f2EmNLkp66AcaTykaa', 'Bullet', __filename);
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
        // ??????????????? (???????????????)
        _this.direction = null;
        // ??????,???????????????????????????number???target????????????,???no,????????????????????????????????????????????????????????????
        _this.target = null;
        // ????????????
        _this.explodeEffect = null;
        // ??????
        _this.audioExplode = null;
        return _this;
    }
    Bullet.prototype.onLoad = function () {
    };
    Bullet.prototype.start = function () {
        if (this.target == null) {
            cc.log('??????????????? target ??????!');
            return;
        }
        if (this.explodeEffect == null) {
            cc.log('????????????????????? explodeEffect ??????!');
            return;
        }
        this.schedule(this.onTimer, 0.016);
    };
    Bullet.prototype.onTimer = function () {
        if (this.node.y > 300) // ????????????????????????????????????
         {
            this.unschedule(this.onTimer);
            if (this.isHit())
                this.success();
            else
                this.failed();
            return;
        }
        var speed = 15; // ??????
        var dx = speed * this.direction.x;
        var dy = speed * this.direction.y;
        this.node.x += dx;
        this.node.y += dy;
    };
    Bullet.prototype.dismiss = function () {
        this.node.destroy();
    };
    // ????????????????????????,???????????????????
    Bullet.prototype.isHit = function () {
        var flag = 0; //??????????????????(number???)target??????????????????
        //??????
        console.log("comm?????????" + Common_1.default.number); //?????????,?????????
        //????????????,?????????0
        console.log("no?????????" + Common_1.default.no);
        if (Common_1.default.no == Common_1.default.number) {
            console.log("????????????");
            flag = 1;
        }
        var targetPos = this.getWorldLocation(this.target); //?????????
        var selfPos = this.getWorldLocation(this.node); //?????????????????????
        var distance = Math.abs(targetPos.x - selfPos.x); // x????????????
        // let distance : number = cc.Vec2.distance(targetPos, selfPos);
        cc.log('??????x=' + targetPos.x + ', ??????x=' + selfPos.x);
        if (distance < 50 && flag == 1)
            return true;
        return false;
    };
    // ?????????????????????????????????
    Bullet.prototype.getWorldLocation = function (node) {
        var pos = node.getPosition(); //???????????????(??????)?????????
        return node.parent.convertToWorldSpaceAR(pos); //????????????????????????????????????
    };
    Bullet.prototype.success = function () {
        // ?????????????????????
        this.change_score(10);
        cc.log('????????????');
        // this.dismiss();   
        this.explode();
        this.cheer();
        // ??????,??????????????????????????????var scr=?????????
        Common_1.default.score += 10;
        // ??????
        if (this.audioExplode != null)
            cc.audioEngine.play(this.audioExplode, false, 1);
    };
    Bullet.prototype.failed = function () {
        cc.log('??????!');
        this.soud2();
        this.change_score(-5);
        Common_1.default.score -= 5;
        this.uncheer();
        this.dismiss(); // ????????????
    };
    // ????????????
    Bullet.prototype.explode = function () {
        cc.log('????????????..');
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
    // ????????????
    Bullet.prototype.cheer = function () {
        var labelNode = new cc.Node();
        var label = labelNode.addComponent(cc.Label);
        label.string = "+10???";
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
        label.string = "-5???";
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
    //     cc.log("???????????????");
    // }
    Bullet.prototype.soud2 = function () {
        var node = cc.find('??????/music/?????????').getComponent(cc.AudioSource);
        node.play();
    };
    Bullet.prototype.change_score = function (a) {
        var node = cc.find("Canvas/??????/??????");
        node.getComponent(cc.Label).string = Common_1.default.score + a + "???";
    };
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Bullet.js.map
        