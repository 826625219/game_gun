"use strict";
cc._RF.push(module, '28330YB1FBFCKCG1vsjrn9x', 'ResultDialog');
// script/ResultDialog.ts

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
var ResultDialog = /** @class */ (function (_super) {
    __extends(ResultDialog, _super);
    function ResultDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultDialog.prototype.onLoad = function () {
        // let replayNode: cc.Node = cc.find('replay', this.node);
        // replayNode.on('touchstart', this.onReplay, this);
        // 拦截触摸事件
        this.node.on('touchstart', this.onTouchDisable, this);
        this.node.on('touchmove', this.onTouchDisable, this);
        this.node.on('touchend', this.onTouchDisable, this);
    };
    ResultDialog.prototype.start = function () {
    };
    // 显示提示框
    ResultDialog.prototype.show = function () {
        this.node.active = true;
        // 显示最终得分
        var scoreNode = cc.find('Canvas/结果提示框/分数框/分数');
        var scoreLabel = scoreNode.getComponent(cc.Label);
        scoreLabel.string = Common_1.default.score + '分';
    };
    // 隐藏提示框
    ResultDialog.prototype.dismiss = function () {
        this.node.active = false;
    };
    // 添加一个onReplay来响应事件吧
    ResultDialog.prototype.onReplay = function () {
        cc.director.resume();
        this.dismiss();
        cc.director.resume();
        // 重置游戏
        Common_1.default.resetGame();
        cc.director.loadScene("场景1");
    };
    ResultDialog.prototype.onTouchDisable = function (e) {
        e.stopPropagation();
    };
    ResultDialog.prototype.showresult = function () {
        var name = cc.find("Canvas/结果提示框/称号");
        //没问题  console.log(component.string);
        switch (true) {
            case Common_1.default.score <= 30:
                name.getComponent(cc.Label).string = "正常人";
                break;
            case Common_1.default.score <= 60:
                name.getComponent(cc.Label).string = "小枪手";
                break;
            case Common_1.default.score <= 90:
                name.getComponent(cc.Label).string = "大枪手";
                break;
            case Common_1.default.score <= 120:
                name.getComponent(cc.Label).string = "枪械师";
                break;
            case Common_1.default.score <= 150:
                name.getComponent(cc.Label).string = "枪魂";
                break;
            case Common_1.default.score <= 180:
                name.getComponent(cc.Label).string = "枪尊";
                break;
            case Common_1.default.score <= 210:
                name.getComponent(cc.Label).string = "枪皇";
                break;
            case Common_1.default.score <= 240:
                name.getComponent(cc.Label).string = "枪帝";
                break;
            case Common_1.default.score <= 270:
                name.getComponent(cc.Label).string = "暗夜猎手";
                break;
            case Common_1.default.score <= 300:
                name.getComponent(cc.Label).string = "卢锡安";
                break;
            case Common_1.default.score <= 330:
                name.getComponent(cc.Label).string = "德莱文";
                break;
            case Common_1.default.score <= 360:
                name.getComponent(cc.Label).string = "法外狂徒";
                break;
            case Common_1.default.score <= 390:
                name.getComponent(cc.Label).string = "暗影岛枪神";
                break;
            case Common_1.default.score <= 420:
                name.getComponent(cc.Label).string = "巨神峰枪神";
                break;
            case Common_1.default.score <= 430:
                name.getComponent(cc.Label).string = "黑色玫瑰枪神";
                break;
            case Common_1.default.score <= 440: //就是有天罚
                name.getComponent(cc.Label).string = "艾欧尼亚枪神";
                break;
            case Common_1.default.score == 450: //就是无天罚
                name.getComponent(cc.Label).string = "创世枪神";
                break;
        }
        //  var node6 = cc.find("Canvas/Main Camera/弹窗");
        //    node6.active = true;//弹窗显示ok
        //    cc.director.pause();
    };
    ResultDialog = __decorate([
        ccclass
    ], ResultDialog);
    return ResultDialog;
}(cc.Component));
exports.default = ResultDialog;

cc._RF.pop();