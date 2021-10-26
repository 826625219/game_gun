"use strict";
cc._RF.push(module, '8e8a18mrHVJR59U24wtOKFJ', '控制靶子切换');
// script/控制靶子切换.ts

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
var Common_1 = require("./Common");
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myNodes = [];
        // 运动方向
        _this.isLeft = true;
        _this.flag = 0;
        _this.no = 1; //是一个身份证
        return _this;
    }
    //1.得到现在被激活的那个靶子是哪个,用no,得到它什么时候到达边界,用随机数设置新节点激活与灭杀即现在的灭杀
    //新的激活,其余不用管因为是没激发状态,新的激活要设置节点的坐标点
    //2.
    Target.prototype.onLoad = function () {
        //Common.number=this.random(0,2);
    };
    Target.prototype.start = function () {
    };
    Target.prototype.update = function (dt) {
        //新的激活,其余不用管因为是没激发状态,新的激活要设置节点的坐标点
        var node_active = this.myNodes[Common_1.default.no];
        var x = node_active.x;
        if (x <= -900) { //左边
            console.log("x==-800,调用了切换");
            this.myNodes[Common_1.default.no].active = false; //灭杀老节点
            //新节点和老的一定不同
            var a = this.random(0, 2);
            while (a == Common_1.default.no) { //出来就不同啦
                a = this.random(0, 2);
            }
            Common_1.default.no = a; //新的激活的节点,变成2了
            this.myNodes[Common_1.default.no].setPosition(cc.v2(-899, 138));
            this.myNodes[Common_1.default.no].active = true;
            // this.myNodes[Common.no].setPosition(cc.v2(-800, 138));//设置好又向左啦
        }
        if (x >= 900) { //右边
            this.myNodes[Common_1.default.no].active = false;
            Common_1.default.no = this.random(0, 2); //新的激活的节点,需要控制新节点的那个left
            this.myNodes[Common_1.default.no].setPosition(cc.v2(899, 138));
            this.myNodes[Common_1.default.no].active = true;
            // this.myNodes[Common.no].setPosition(cc.v2(800, 138));
            //不然你就手动来设置left
        }
    };
    Target.prototype.random = function (lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    };
    __decorate([
        property([cc.Node])
    ], Target.prototype, "myNodes", void 0);
    Target = __decorate([
        ccclass
    ], Target);
    return Target;
}(cc.Component));
exports.default = Target;

cc._RF.pop();