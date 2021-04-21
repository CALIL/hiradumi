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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "../Hiradumi", "./SettingUI"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importStar(require("react"));
    var Hiradumi_1 = __importDefault(require("../Hiradumi"));
    var SettingUI_1 = __importDefault(require("./SettingUI"));
    // import items from '../Kochi_Motoyama_plus.json';
    // import items from '../../Gifu_Nakatsugawa_plus.json';
    var items = [];
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                items: items,
                size: 200,
                width: 100,
                margin: 10,
                rowCount: 10,
                rowFactors: null
            };
            _this.hiradumi = null;
            _this.setHiradumi = function (element) {
                _this.hiradumi = element;
            };
            return _this;
        }
        App.prototype.componentDidMount = function () {
            if (document.body.clientWidth > 767) {
                this.setState({ rowFactors: [1, 0.9, 0.8, 0.7] });
            }
            else {
                this.setState({ rowFactors: [0.97, 0.75, 0.65, 0.55] });
            }
        };
        App.prototype.onChange = function (state) {
            var _this = this;
            this.setState(state, function () {
                _this.hiradumi.setRowData();
            });
        };
        App.prototype.render = function () {
            if (!this.state.items)
                return null;
            return (react_1.default.createElement("div", null, this.state.rowFactors ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(SettingUI_1.default, { size: this.state.size, width: this.state.width, margin: this.state.margin, rowCount: this.state.rowCount, rowFactors: this.state.rowFactors, onChange: this.onChange.bind(this) }),
                react_1.default.createElement("div", { style: { width: this.state.width + '%', margin: '0 auto' } },
                    react_1.default.createElement(Hiradumi_1.default, { ref: this.setHiradumi, data: this.state.items, size: this.state.size, margin: this.state.margin, rowCount: this.state.rowCount, rowFactors: this.state.rowFactors, itemComponent: null })))) : null));
        };
        return App;
    }(react_1.Component));
    exports.default = App;
});
//# sourceMappingURL=App.js.map