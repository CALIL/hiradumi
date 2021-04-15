"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("whatwg-fetch");

var _react = _interopRequireDefault(require("react"));

var _HiradumiRow = _interopRequireDefault(require("./HiradumiRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Hiradumi = /*#__PURE__*/function (_React$Component) {
  _inherits(Hiradumi, _React$Component);

  var _super = _createSuper(Hiradumi);

  function Hiradumi(props) {
    var _this;

    _classCallCheck(this, Hiradumi);

    _this = _super.call(this, props);
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

  _createClass(Hiradumi, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setRowData(); // PC版のスクロールバー対応
      // コンテンツがないとスクロールバーが出ないので、追加後に再計算

      setTimeout(function () {
        var scrollBarWidth = window.innerWidth - document.body.clientWidth;
        if (scrollBarWidth > 0) _this2.setRowData();
      }, 10);
      window.addEventListener('resize', this.setRowData.bind(this));
    }
  }, {
    key: "setRowData",
    value: function setRowData() {
      var _this3 = this;

      this.factors = [];
      Array.from({
        length: this.props.rowCount
      }).map(function (notValue, i) {
        var index = i % _this3.props.rowFactors.length;

        _this3.factors.push(_this3.props.rowFactors[index]);
      }); // 計算している本のindex

      var currentIndex = 0;
      var scrollBarWidth = window.innerWidth - document.body.clientWidth;
      var hiradumiWidth = this.hiradumiDiv.clientWidth - scrollBarWidth;
      var rowsData = [];
      this.factors.some(function (notValue, index) {
        // 行の横幅
        var rowWidth = 0; // 行の高さ

        var height = _this3.state.size * _this3.factors[index]; // 一行に入る数

        var columnCount = 0;

        var currentIndexData = _this3.props.data.slice(currentIndex);

        currentIndexData.some(function (item) {
          var width;
          var isRowLastItem = false;

          if (item.properties && item.properties.aspect) {
            width = Math.floor(height * item.properties.aspect);
            isRowLastItem = hiradumiWidth <= rowWidth + width;
          } else {
            width = Math.floor(height * 0.66666);
            isRowLastItem = hiradumiWidth <= rowWidth + width;
          } // 行の最後のアイテムなら終了


          if (isRowLastItem) return true;
          item.height = height;
          item.width = width;
          rowWidth += width;
          columnCount += 1;
        });
        if (columnCount === 0) return true; // 残りの横幅分、サイズを調整

        var scaleUpRatio = hiradumiWidth / rowWidth; // 最後の行の縦が大きすぎないように規制

        if (scaleUpRatio < 2) {
          currentIndexData.some(function (item, index) {
            if (index === columnCount) return true;
            item.width = Math.floor(item.width * scaleUpRatio);
            item.height = Math.floor(item.height * scaleUpRatio);
          });

          var rowData = _this3.props.data.slice(currentIndex, currentIndex + columnCount);

          rowsData.push(rowData);
        } else {
          // 前の行の調整
          var prevRowData = _this3.props.data.slice(currentIndex - rowsData[rowsData.length - 1].length, currentIndex); // rowWidth分詰めたい


          var scaleDownWidth = rowWidth / prevRowData.length;
          prevRowData.some(function (item, index) {
            item.width = Math.floor(item.width - scaleDownWidth);
            var scaleDownRatio = item.width / (item.width + scaleDownWidth);
            item.height = Math.floor(item.height * scaleDownRatio);
          }); // 今の行のサイズを調整

          var _rowData = _this3.props.data.slice(currentIndex, currentIndex + columnCount);

          var scaleRatio = prevRowData[0].height / _rowData[0].height;

          _rowData.some(function (item, index) {
            item.width = Math.floor(item.width * scaleRatio);
            item.height = Math.floor(item.height * scaleRatio);
          });

          rowsData.pop();

          var newRowData = _this3.props.data.slice(currentIndex - prevRowData.length, currentIndex + columnCount);

          rowsData.push(newRowData);
        }

        currentIndex += columnCount;
      });
      this.setState({
        rowsData: rowsData
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.data.length === 0) return null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "hiradumi",
        ref: this.setHiradumiDiv
      }, Array.from({
        length: this.state.rowsData.length
      }).map(function (notValue, index) {
        return /*#__PURE__*/_react.default.createElement(_HiradumiRow.default, {
          rowData: _this4.state.rowsData[index],
          margin: _this4.props.margin,
          itemComponent: _this4.props.itemComponent
        });
      }));
    }
  }]);

  return Hiradumi;
}(_react.default.Component);

var _default = Hiradumi;
exports.default = _default;