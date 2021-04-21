var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "react-dom", "./component/App"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(require("react"));
    var react_dom_1 = __importDefault(require("react-dom"));
    var App_1 = __importDefault(require("./component/App"));
    react_dom_1.default.render(react_1.default.createElement(App_1.default, null), document.getElementById('root'));
});
//# sourceMappingURL=index.js.map