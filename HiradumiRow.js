var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(require("react"));
    var HiradumiRow = /** @class */ (function (_super) {
        __extends(HiradumiRow, _super);
        function HiradumiRow(props) {
            return _super.call(this, props) || this;
        }
        HiradumiRow.prototype.render = function () {
            var _this = this;
            var items = [];
            return react_1.default.createElement("div", { className: "row" }, this.props.rowData.map(function (item) {
                return react_1.default.createElement(_this.props.itemComponent, { item: item, margin: _this.props.margin });
            }));
        };
        return HiradumiRow;
    }(react_1.default.Component));
    exports.default = HiradumiRow;
});
//# sourceMappingURL=HiradumiRow.js.map