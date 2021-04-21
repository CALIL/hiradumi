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
    var item = /** @class */ (function (_super) {
        __extends(item, _super);
        function item(props) {
            return _super.call(this, props) || this;
        }
        item.prototype.onClick = function () {
            window.open('https://calil.jp/book/' + this.props.item.isbn, '_parent');
        };
        item.prototype.render = function () {
            var item = this.props.item;
            var fontSize = (this.props.item.width - this.props.margin) / 14;
            return (react_1.default.createElement("div", { className: 'book ' + (!this.props.item.cover ? 'nocover' : ''), ref: "item", id: item.id, style: {
                    width: item.width - this.props.margin + 'px',
                    height: item.height - this.props.margin + 'px',
                    margin: this.props.margin / 2 + 'px',
                    cursor: 'pointer',
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }, onClick: this.onClick.bind(this) }, this.props.item.cover ? (react_1.default.createElement("img", { src: item.cover, alt: item.title, "data-aspect": item.properties.aspect, ref: "cover", style: {
                    height: item.height - this.props.margin + 'px',
                    width: item.width - this.props.margin + 'px',
                    margin: this.props.margin / 2 + 'px'
                } })) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "bg" }),
                react_1.default.createElement("div", { className: "textCover" },
                    react_1.default.createElement("div", { className: "title", style: { fontSize: fontSize + 'px' } }, item.title),
                    react_1.default.createElement("div", { className: "author", style: { fontSize: fontSize * 0.7 + 'px' } }, item.author))))));
        };
        return item;
    }(react_1.Component));
    exports.default = item;
});
//# sourceMappingURL=Book.js.map