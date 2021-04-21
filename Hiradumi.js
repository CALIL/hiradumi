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
        define(["require", "exports", "whatwg-fetch", "react", "./HiradumiRow", "./component/Book"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("whatwg-fetch");
    var react_1 = __importDefault(require("react"));
    var HiradumiRow_1 = __importDefault(require("./HiradumiRow"));
    var Book_1 = __importDefault(require("./component/Book"));
    var styles = "\n.row {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap\n}\n";
    var bookStyles = "\n.row .book {\n    box-sizing: border-box;\n    animation: fadeIn 1s ease 0s 1 normal;\n    overflow: hidden\n}\n\n.row .book.nocover {\n    border: 1px solid #eee\n}\n\n.row .book.nocover .bg {\n    position: absolute;\n    background-color: #eee;\n    width: 80%;\n    height: 100%;\n    top: 0;\n    left: 10%;\n    z-index: -1\n}\n\n.row .book.nocover .textCover {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    padding: 30% 0 0\n}\n\n.row .book.nocover .textCover .title {\n    position: relative;\n    width: 90%;\n    margin: 0 auto;\n    color: #333;\n    font-weight: bold;\n    margin-bottom: 5px;\n    line-height: 120%;\n    z-index: 1;\n    word-wrap: break-word;\n    overflow-wrap: break-word\n}\n\n.row .book.nocover .textCover .author {\n    position: relative;\n    width: 90%;\n    margin: 0 auto;\n    font-size: 80%;\n    color: #e00;\n    font-weight: bold;\n    z-index: 1\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0\n    }\n\n    100% {\n        opacity: 1\n    }\n}\n";
    var Hiradumi = /** @class */ (function (_super) {
        __extends(Hiradumi, _super);
        function Hiradumi(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                size: _this.props.size ? _this.props.size : 200,
                rowsData: []
            };
            _this.factors = [];
            _this.hiradumiDiv = null;
            _this.setHiradumiDiv = function (element) {
                _this.hiradumiDiv = element;
            };
            return _this;
        }
        Hiradumi.prototype.componentDidMount = function () {
            var _this = this;
            this.setRowData();
            // PC版のスクロールバー対応
            // コンテンツがないとスクロールバーが出ないので、追加後に再計算
            setTimeout(function () {
                var scrollBarWidth = window.innerWidth - document.body.clientWidth;
                if (scrollBarWidth > 0)
                    _this.setRowData();
            }, 10);
            window.addEventListener('resize', this.setRowData.bind(this));
        };
        Hiradumi.prototype.setRowData = function () {
            var _this = this;
            this.factors = [];
            Array.from({ length: this.props.rowCount }).map(function (notValue, i) {
                var index = i % _this.props.rowFactors.length;
                _this.factors.push(_this.props.rowFactors[index]);
            });
            // 計算している本のindex
            var currentIndex = 0;
            var scrollBarWidth = window.innerWidth - document.body.clientWidth;
            var hiradumiWidth = this.hiradumiDiv.clientWidth - scrollBarWidth;
            var rowsData = [];
            this.factors.some(function (notValue, index) {
                // 行の横幅
                var rowWidth = 0;
                // 行の高さ
                var height = _this.state.size * _this.factors[index];
                // 一行に入る数
                var columnCount = 0;
                var currentIndexData = _this.props.data.slice(currentIndex);
                currentIndexData.some(function (item) {
                    var width;
                    var isRowLastItem = false;
                    if (item.properties && item.properties.aspect) {
                        width = Math.floor(height * item.properties.aspect);
                        isRowLastItem = hiradumiWidth <= rowWidth + width;
                    }
                    else {
                        width = Math.floor(height * 0.66666);
                        isRowLastItem = hiradumiWidth <= rowWidth + width;
                    }
                    // 行の最後のアイテムなら終了
                    if (isRowLastItem)
                        return true;
                    item.height = height;
                    item.width = width;
                    rowWidth += width;
                    columnCount += 1;
                });
                if (columnCount === 0)
                    return true;
                // 残りの横幅分、サイズを調整
                var scaleUpRatio = hiradumiWidth / rowWidth;
                // 最後の行の縦が大きすぎないように規制
                if (scaleUpRatio < 2) {
                    currentIndexData.some(function (item, index) {
                        if (index === columnCount)
                            return true;
                        item.width = Math.floor(item.width * scaleUpRatio);
                        item.height = Math.floor(item.height * scaleUpRatio);
                    });
                    var rowData = _this.props.data.slice(currentIndex, currentIndex + columnCount);
                    rowsData.push(rowData);
                }
                else {
                    // 前の行の調整
                    var prevRowData = _this.props.data.slice(currentIndex - rowsData[rowsData.length - 1].length, currentIndex);
                    // rowWidth分詰めたい
                    var scaleDownWidth_1 = rowWidth / prevRowData.length;
                    prevRowData.some(function (item, index) {
                        item.width = Math.floor(item.width - scaleDownWidth_1);
                        var scaleDownRatio = item.width / (item.width + scaleDownWidth_1);
                        item.height = Math.floor(item.height * scaleDownRatio);
                    });
                    // 今の行のサイズを調整
                    var rowData = _this.props.data.slice(currentIndex, currentIndex + columnCount);
                    var scaleRatio_1 = prevRowData[0].height / rowData[0].height;
                    rowData.some(function (item, index) {
                        item.width = Math.floor(item.width * scaleRatio_1);
                        item.height = Math.floor(item.height * scaleRatio_1);
                    });
                    rowsData.pop();
                    var newRowData = _this.props.data.slice(currentIndex - prevRowData.length, currentIndex + columnCount);
                    rowsData.push(newRowData);
                }
                currentIndex += columnCount;
            });
            this.setState({ rowsData: rowsData });
        };
        Hiradumi.prototype.render = function () {
            var _this = this;
            if (this.props.data.length === 0)
                return null;
            var css = styles;
            if (!this.props.itemComponent) {
                css += bookStyles;
            }
            return (react_1.default.createElement("div", { className: "hiradumi", ref: this.setHiradumiDiv },
                react_1.default.createElement("style", null, css),
                Array.from({ length: this.state.rowsData.length }).map(function (notValue, index) {
                    return react_1.default.createElement(HiradumiRow_1.default, { rowData: _this.state.rowsData[index], margin: _this.props.margin, itemComponent: _this.props.itemComponent ? _this.props.itemComponent : Book_1.default });
                })));
        };
        return Hiradumi;
    }(react_1.default.Component));
    exports.default = Hiradumi;
});
//# sourceMappingURL=Hiradumi.js.map