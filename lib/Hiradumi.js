"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/stable");

require("regenerator-runtime/runtime");

require("resize-observer-polyfill/dist/ResizeObserver.global");

require("whatwg-fetch");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AspectPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(AspectPanel, _Component);

  function AspectPanel(props) {
    var _this;

    _classCallCheck(this, AspectPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AspectPanel).call(this, props));
    _this.state = {
      items: props.items,
      width: null
    };
    return _this;
  }

  _createClass(AspectPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        width: this.refs.items.clientWidth
      });
      window.addEventListener('resize', function () {
        return _this2.setState({
          width: _this2.refs.items.clientWidth
        });
      });
      var resizeObserver = new ResizeObserver(function (entries) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var entry = _step.value;

            _this2.setState({
              width: parseInt(entry.contentRect.width)
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      resizeObserver.observe(this.refs.items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var rows = [];
      var rowCount = 1;
      var itemIndex = 0;

      var _loop = function _loop() {
        var rowHeight = void 0;
        rowHeight = _this3.props.rowHeightList[rowCount - 1];
        if (!rowHeight) rowHeight = _this3.props.rowHeightList[_this3.props.rowHeightList.length - 1];
        var rowItems = [];
        var x = 0; // 行数指定

        if (_this3.props.maxRows && rowCount > _this3.props.maxRows) return "break";

        _this3.state.items.slice(itemIndex).some(function (item) {
          item.width = rowHeight * item.aspect;
          item.height = rowHeight;
          item.margin = _this3.props.margin;
          item.row = rowCount;
          x += item.width + _this3.props.margin; // 横幅を超えたら行の終わり

          if (_this3.state.width && x > _this3.state.width) {
            // 全体の余白のあまり分、大きくする
            x = x - (item.width + _this3.props.margin);
            var scale = _this3.state.width / x;
            rowItems.map(function (item) {
              if (rowItems.length === 1) {
                item.width = _this3.state.width;
                item.height = _this3.state.width / item.aspect;
                item.fullWidth = true;
              } else {
                item.width = item.width * scale;
                item.height = item.height * scale;
                item.fullWidth = false;
              }
            });
            rows.push(rowItems);
            rowCount += 1;
            return true;
          }

          rowItems.push(item);
          itemIndex += 1;
        });
      };

      while (this.state.items.length - 1 > itemIndex) {
        var _ret = _loop();

        if (_ret === "break") break;
      }

      var items = [];
      rows.map(function (rowItems) {
        items = items.concat(rowItems);
      });
      var View = this.props.view;
      return _react.default.createElement("div", {
        className: this.props.className,
        ref: "items",
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }
      }, items.map(function (item) {
        return _react.default.createElement("div", {
          key: item.id,
          style: {
            width: item.width + 'px',
            height: item.height + 'px',
            margin: '0 ' + item.margin / 2 + 'px ' + item.margin + 'px',
            transition: 'width 0.075s linear, height 0.075s linear',
            willChange: 'width, height'
          }
        }, _react.default.createElement(View, {
          item: item
        }));
      }));
    }
  }]);

  return AspectPanel;
}(_react.Component);

exports.default = AspectPanel;