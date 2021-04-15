"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var SettingUI = /*#__PURE__*/function (_Component) {
  _inherits(SettingUI, _Component);

  var _super = _createSuper(SettingUI);

  function SettingUI(props) {
    _classCallCheck(this, SettingUI);

    return _super.call(this, props);
  }

  _createClass(SettingUI, [{
    key: "setRowHeight",
    value: function setRowHeight() {
      var rowHeightList = [];
      Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map(function (rowHeight) {
        if (rowHeight.value !== '') {
          rowHeightList.push(parseInt(rowHeight.value));
        } else {
          rowHeightList.push(parseInt(rowHeight.placeholder));
        }
      });
      this.props.onChange({
        rowHeightList: rowHeightList
      });
    }
  }, {
    key: "copy",
    value: function copy() {
      var rowHeightList = [];
      Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map(function (rowHeight) {
        if (rowHeight.value !== '') {
          rowHeightList.push(rowHeight.value);
        } else {
          rowHeightList.push(parseFloat(rowHeight.placeholder));
        }
      });
      execCopy(rowHeightList.toString());
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '10px'
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "width"
      }, "Width:"), /*#__PURE__*/_react.default.createElement("input", {
        type: "range",
        id: "width",
        name: "width",
        min: "10",
        max: "100",
        step: "10",
        defaultValue: "100",
        onChange: function onChange(e) {
          return _this.props.onChange({
            width: e.target.value
          });
        }
      }), this.props.width, "% \xA0", /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "margin"
      }, "Margin:"), /*#__PURE__*/_react.default.createElement("input", {
        type: "range",
        id: "margin",
        name: "width",
        min: "0",
        max: "30",
        value: this.props.margin,
        onChange: function onChange(e) {
          return _this.props.onChange({
            margin: parseInt(e.target.value)
          });
        }
      }), this.props.margin, "\xA0", /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "margin"
      }, "RowCount:"), /*#__PURE__*/_react.default.createElement("input", {
        type: "range",
        id: "maxRow",
        name: "width",
        min: "1",
        max: "30",
        value: this.props.rowCount,
        onChange: function onChange(e) {
          return _this.props.onChange({
            rowCount: parseInt(e.target.value)
          });
        }
      }), this.props.rowCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "RowFactors:"), this.props.rowFactors.map(function (rowHeight, i) {
        return /*#__PURE__*/_react.default.createElement("input", {
          type: "number",
          placeholder: String(rowHeight),
          className: "rowHeight",
          key: i,
          onChange: _this.setRowHeight.bind(_this),
          style: {
            width: '3rem'
          }
        });
      }), /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.copy.bind(this)
      }, "Copy")));
    }
  }]);

  return SettingUI;
}(_react.Component);

var _default = SettingUI;
exports.default = _default;