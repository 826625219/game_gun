(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Magazine1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3e99b5WnVlAAp9yQdrItl53', 'Magazine1', __filename);
// script/Magazine1.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// 弹匣
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 子弹图片
        _this.bulletIcon = null;
        _this.capacity = 15; // 最大弹药
        _this.count = 15; // 现有弹药数量
        return _this;
    }
    Magazine.prototype.onLoad = function () {
        // 子弹的水平间距
        var space = (this.node.width - 60) / this.capacity;
        // 创建10个子弹
        var i = 0;
        for (i = 0; i < this.capacity; i++) //循环创建
         {
            var bulletNode = new cc.Node();
            var bulletSprite = bulletNode.addComponent(cc.Sprite);
            bulletSprite.spriteFrame = this.bulletIcon;
            this.node.addChild(bulletNode);
            bulletNode.x = space * i + 38; // 向右偏移一些,直接局部坐标
            bulletNode.y = -3;
        }
    };
    Magazine.prototype.start = function () {
    };
    Magazine.prototype.update = function (dt) {
    };
    // 重置
    Magazine.prototype.reset = function () {
        this.count = this.capacity;
        this.display();
    };
    // 消耗n个子弹
    Magazine.prototype.consume = function (n) {
        this.count -= n;
        if (this.count < 0)
            this.count = 0;
        this.display();
    };
    // 显示剩余的子弹
    // active的表示剩下的子弹
    Magazine.prototype.display = function () {
        var nodes = this.node.children; //有几个子节点
        var i = 0;
        for (i = 0; i < nodes.length; i++) {
            if (this.count > i)
                nodes[i].active = true;
            else
                nodes[i].active = false;
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Magazine.prototype, "bulletIcon", void 0);
    Magazine = __decorate([
        ccclass
    ], Magazine);
    return Magazine;
}(cc.Component));
exports.default = Magazine;

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
        //# sourceMappingURL=Magazine1.js.map
        