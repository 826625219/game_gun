(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Common.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dd7f1w5Ve1NX7S3NDkMI9YW', 'Common', __filename);
// script/Common.ts

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
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    function Common() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Common_1 = Common;
    Common.prototype.onLoad = function () {
        cc.log('Common.onLoad()被调用');
        Common_1.magazine = cc.find('Canvas/弹仓').getComponent('Magazine'); //脚本
        Common_1.magazine1 = cc.find('Canvas/弹仓1').getComponent('Magazine1'); //脚本
        Common_1.magazine2 = cc.find('Canvas/弹仓2').getComponent('Magazine2'); //脚本
        Common_1.resultDialog = cc.find('Canvas/结果提示框').getComponent('ResultDialog'); //脚本
    };
    Common.resetGame = function () {
        Common_1.no = 0;
        Common_1.number = 0;
        Common_1.score = 0;
        //  Common.time = 90;
        Common_1.magazine.reset();
        Common_1.magazine1.reset();
        Common_1.magazine2.reset();
    };
    var Common_1;
    Common.random = 0; //产生target的随机数
    Common.magazine = null;
    Common.magazine1 = null;
    Common.magazine2 = null;
    // 得分统计
    Common.score = 0;
    //
    Common.no = 0; //替代string进行验证
    Common.time = 90;
    //static speed;算了
    // 结果提示框
    Common.resultDialog = null;
    //切的枪
    Common.number = 0;
    Common = Common_1 = __decorate([
        ccclass
    ], Common);
    return Common;
}(cc.Component));
exports.default = Common;

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
        //# sourceMappingURL=Common.js.map
        