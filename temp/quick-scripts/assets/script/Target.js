(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Target.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8d135chgqBN/6GnU8WWRXXw', 'Target', __filename);
// script/Target.ts

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
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ????????????
        _this.speed = 4;
        _this.isLeft = true;
        _this.flag = 1;
        _this.no = 1; //??????????????????
        return _this;
    }
    Target.prototype.onLoad = function () {
        //??????????????????,??????-800??????<?????????????????????,???????????????
        console.log("???????????????x???" + this.node.x);
        if (this.node.x == -899) {
            this.isLeft = false;
        }
        if (this.node.x == 899) {
            this.isLeft = true;
        }
        var a = window["data"];
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
    };
    Target.prototype.start = function () {
    };
    Target.prototype.update = function (dt) {
        //console.log("x???" + this.node.x);
        // console.log("x???" + this.node.x);
        if (this.node.x <= -900) { //???????????????-800?????????800??????
            //  console.log("0???node.x<0")
            this.isLeft = false;
        }
        if (this.node.x >= 900) {
            //  console.log("0???node.x>0")
            this.isLeft = true;
        }
        var dx = this.speed;
        if (this.isLeft) {
            dx = 0 - dx;
        }
        this.node.x += dx;
        // var node1 = cc.find('Canvas/??????');
        // var node2 = cc.find('Canvas/??????2');
        // var node3 = cc.find('Canvas/??????3');
        // if (this.isLeft && this.node.x <= -800) {//??????????????????,????????????????????????????????????2s,?????????????????????
        //     this.isLeft = false;
        // }
        // if (!this.isLeft && this.node.x >= 800) {
        //     this.isLeft = true;
        // }
    };
    Target.prototype.random = function (lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    };
    Target = __decorate([
        ccclass
    ], Target);
    return Target;
}(cc.Component));
exports.default = Target;

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
        //# sourceMappingURL=Target.js.map
        