(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Swap.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0661ekwZ8pBWa2L9qYqV03z', 'Swap', __filename);
// script/Swap.ts

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
var Common_1 = require("./Common");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.myNodes = [];
        _this.myNodes1 = [];
        return _this;
        // update (dt) {}
    }
    // number = 0
    // @property(cc.SpriteFrame)
    // bulletIcon: cc.SpriteFrame = null;
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.swap = function () {
        Common_1.default.number++;
        Common_1.default.number %= 3;
        var node = cc.find('Canvas/切换子弹');
        console.log(Common_1.default.number);
        node.getComponent(cc.Sprite).spriteFrame = this.myNodes[Common_1.default.number];
        var node1 = cc.find('Canvas/弹仓');
        var node2 = cc.find('Canvas/弹仓1');
        var node3 = cc.find('Canvas/弹仓2');
        // var node4 = cc.find('Canvas/弹仓之子');
        // var node5 = cc.find('Canvas/弹仓之子1');
        // var node6 = cc.find('Canvas/弹仓之子2');
        if (Common_1.default.number == 0) {
            node1.active = true;
            node2.active = false;
            node3.active = false;
            // node4.active = true;
            // node5.active = false;
            // node6.active = false;
        }
        if (Common_1.default.number == 1) {
            node1.active = false;
            node2.active = true;
            node3.active = false;
            // node4.active = false;
            // node5.active = true;
            // node6.active = false;
        }
        if (Common_1.default.number == 2) {
            node1.active = false;
            node2.active = false;
            node3.active = true;
            // node4.active = false;
            // node5.active = false;
            // node6.active = true;
        }
    };
    NewClass.prototype.soud1 = function () {
        var node = cc.find('其他/music/上膛').getComponent(cc.AudioSource);
        node.play();
    };
    NewClass.prototype.soud2 = function () {
        var node = cc.find('其他/music/点击').getComponent(cc.AudioSource);
        node.play();
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "myNodes", void 0);
    __decorate([
        property([cc.AudioSource])
    ], NewClass.prototype, "myNodes1", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
        //# sourceMappingURL=Swap.js.map
        