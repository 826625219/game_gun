"use strict";
cc._RF.push(module, '4f6ae8fpltDVpLZZmd7bIwt', 'BUTTON');
// script/BUTTON.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Common_1 = require("./Common");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.flag = 1;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var a = window["data"];
        console.log("datas此时的值是" + a.datas);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.closefor0 = function () {
        //   重新来,那个右上
        //  cc.director.resume();
        //  Common.resetGame(); 
        //怕a重复赋值啊
        // let a = window["data"];
        //  a.datas = 2;
        //  cc.director.resume();
        //  Common.resetGame();
        cc.director.loadScene("场景0"); //切换场景会重置数据的
    };
    NewClass.prototype.closeBtn = function () {
        //   重新来,那个右上
        //  cc.director.resume();
        //  Common.resetGame(); 
        var a = window["data"];
        a.datas = 1;
        // Common.resetGame();
        // Common.resetGame();
        cc.director.loadScene("场景1"); //切换场景会重置数据的
    };
    NewClass.prototype.closeBtnb = function () {
        //   重新来,那个右上
        //  cc.director.resume();
        //  Common.resetGame(); 
        var a = window["data"];
        a.datas = 2;
        // Common.resetGame();
        // Common.resetGame();
        cc.director.loadScene("场景1"); //切换场景会重置数据的
    };
    NewClass.prototype.closeBtnc = function () {
        //   重新来,那个右上
        //cc.director.resume();
        //  Common.resetGame(); 
        var a = window["data"];
        a.datas = 3;
        // Common.resetGame();
        // Common.resetGame();//下面这条不会对分数和时间重置
        cc.director.loadScene("场景1"); //切换场景会重置数据的
    };
    NewClass.prototype.closeBtn1 = function () {
        //  显示结果结束游戏,那个左上
        Common_1.default.resultDialog.showresult(); //赋值
        Common_1.default.resultDialog.show(); //结束之前给赋值
        Common_1.default.resetGame();
        cc.director.pause();
        //  cc.director.pause();
        //   cc.director.pause();
        //激活弹窗,后续操作
        //   cc.director.pause();
    };
    NewClass.prototype.closeBtn2 = function () {
        cc.game.end();
        wx.exitMiniProgram();
    };
    NewClass.prototype.closeBtn3 = function () {
        var node = cc.find("Canvas/Main Camera");
        if (this.flag == 1) {
            node.getComponent(cc.AudioSource).pause();
            this.flag = 0;
        }
        else {
            node.getComponent(cc.AudioSource).play();
            this.flag = 1;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();