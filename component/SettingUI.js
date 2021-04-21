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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
    var react_1 = __importStar(require("react"));
    function execCopy(string) {
        var tmp = document.createElement('div');
        var pre = document.createElement('pre');
        pre.style.webkitUserSelect = 'auto';
        pre.style.userSelect = 'auto';
        tmp.appendChild(pre).textContent = string;
        var s = tmp.style;
        s.position = 'fixed';
        s.right = '200%';
        document.body.appendChild(tmp);
        document.getSelection().selectAllChildren(tmp);
        var result = document.execCommand("copy");
        document.body.removeChild(tmp);
        return result;
    }
    var SettingUI = /** @class */ (function (_super) {
        __extends(SettingUI, _super);
        function SettingUI(props) {
            return _super.call(this, props) || this;
        }
        SettingUI.prototype.setRowHeight = function () {
            var rowHeightList = [];
            Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map(function (rowHeight) {
                if (rowHeight.value !== '') {
                    rowHeightList.push(parseInt(rowHeight.value));
                }
                else {
                    rowHeightList.push(parseInt(rowHeight.placeholder));
                }
            });
            this.props.onChange({ rowHeightList: rowHeightList });
        };
        SettingUI.prototype.copy = function () {
            var rowHeightList = [];
            Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map(function (rowHeight) {
                if (rowHeight.value !== '') {
                    rowHeightList.push(rowHeight.value);
                }
                else {
                    rowHeightList.push(parseFloat(rowHeight.placeholder));
                }
            });
            execCopy(rowHeightList.toString());
        };
        SettingUI.prototype.setRowFactors = function () {
            var rowFactors = [];
            Array.prototype.slice.call(document.querySelectorAll('input[type="number"]')).map(function (input) {
                rowFactors.push(input.value);
            });
            this.props.onChange({ rowFactors: rowFactors });
        };
        SettingUI.prototype.render = function () {
            var _this = this;
            return (react_1.default.createElement("div", { style: { maxWidth: '1400px', margin: '0 auto', padding: '10px' } },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: "width" }, "Width:"),
                    react_1.default.createElement("input", { type: "range", id: "width", name: "width", min: "10", max: "100", step: "10", defaultValue: "100", onChange: function (e) { return _this.props.onChange({ width: e.target.value }); } }),
                    this.props.width,
                    "% \u00A0",
                    react_1.default.createElement("label", { htmlFor: "margin" }, "Margin:"),
                    react_1.default.createElement("input", { type: "range", id: "margin", name: "width", min: "0", max: "30", value: this.props.margin, onChange: function (e) { return _this.props.onChange({ margin: parseInt(e.target.value) }); } }),
                    this.props.margin,
                    "\u00A0",
                    react_1.default.createElement("label", { htmlFor: "margin" }, "RowCount:"),
                    react_1.default.createElement("input", { type: "range", id: "maxRow", name: "width", min: "1", max: "30", value: this.props.rowCount, onChange: function (e) { return _this.props.onChange({ rowCount: parseInt(e.target.value) }); } }),
                    this.props.rowCount),
                react_1.default.createElement("br", null),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", null, "RowFactors:"),
                    this.props.rowFactors.map(function (rowHeight, i) {
                        return react_1.default.createElement("input", { type: "number", placeholder: String(rowHeight), value: String(rowHeight), step: "0.1", className: "rowHeight", key: i, onChange: _this.setRowFactors.bind(_this), style: { width: '3rem' } });
                    }),
                    react_1.default.createElement("button", { onClick: this.copy.bind(this) }, "Copy"))));
        };
        return SettingUI;
    }(react_1.Component));
    exports.default = SettingUI;
});
//# sourceMappingURL=SettingUI.js.map