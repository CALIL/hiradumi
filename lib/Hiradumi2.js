"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.reflect.construct.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireDefault(require("react"));

require("whatwg-fetch");

var _reactVirtualized = require("react-virtualized");

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

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var shuffle = function shuffle(_ref) {
  var _ref2 = _toArray(_ref),
      array = _ref2.slice(0);

  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref3 = [array[j], array[i]];
    array[i] = _ref3[0];
    array[j] = _ref3[1];
  }

  return array;
};

var BookWalk = /*#__PURE__*/function (_React$Component) {
  _inherits(BookWalk, _React$Component);

  var _super = _createSuper(BookWalk);

  function BookWalk(props) {
    var _this;

    _classCallCheck(this, BookWalk);

    _this = _super.call(this, props);
    var sizeLabel = 'hiradumi';

    var size = _this.getSize(sizeLabel);

    _this.currentCount = 1;
    _this.state = {
      size: size,
      sizeLabel: sizeLabel,
      sort: 'random',
      data: [],
      menuOpen: false
    };
    _this.hiradumiRowCount = 200000;
    _this.hiradumiFactors = [];
    Array.from({
      length: 4
    }).map(function (notValue, index) {
      _this.hiradumiFactors.push(_this.getHiradumiFactor(index));
    });

    _this.initHiradumi();

    return _this;
  }

  _createClass(BookWalk, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetch();
      window.addEventListener('resize', this.resize.bind(this));
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function () {
      var _this2 = this;

      // console.log('fetch')
      var sort = this.state.sort === 'random' ? 'isbn' : this.state.sort;
      var url = 'https://nxc.calil.dev/bibs/' + sort + '.json';
      fetch(url).then(function (r) {
        return r.json();
      }).then(function (data) {
        if (_this2.state.sort === 'random') data = shuffle(data);

        _this2.setState({
          data: data
        });
      });
    })
  }, {
    key: "resize",
    value: function resize() {
      // console.log('resize')
      this.initHiradumi();
      this.forceUpdate();
    } // 各行のrender

  }, {
    key: "rowRenderer",
    value: function rowRenderer(_ref4) {
      var _this3 = this;

      var key = _ref4.key,
          index = _ref4.index,
          isScrolling = _ref4.isScrolling,
          isVisible = _ref4.isVisible,
          style = _ref4.style;
      // console.log('rowRenderer')
      // 書影の高さ・幅 一行に入る数の計算
      var height = this.state.size;
      var width = height / 1.5;
      var columnCount = Math.floor(window.innerWidth / width) - 1; // 書影APIのサイズ

      var size = window.devicePixelRatio === 1 ? '200' : '400';
      if (isScrolling || columnCount >= 20) size = '120';
      var items = [];
      var i;
      Array.from({
        length: columnCount
      }).map(function (notValue, columnIndex) {
        i = index * columnCount + columnIndex;

        if (i < _this3.state.data.length) {
          var imageUrl = 'https://nxc.calil.dev/' + size + '/' + _this3.state.data[i] + '.jpg';
          items.push( /*#__PURE__*/_react.default.createElement("a", {
            key: key + _this3.state.data[i],
            href: 'https://calil.jp/book/' + _this3.state.data[i],
            target: "_blank"
          }, /*#__PURE__*/_react.default.createElement("img", {
            src: imageUrl,
            style: {
              'width': width + 'px',
              'height': height + 'px'
            }
          })));
        }
      }); // 現在の冊数の更新

      this.currentCount = i;
      if (this.currentCount > this.state.data.length - 100) this.currentCount = this.state.data.length;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: key,
        style: style,
        className: "row"
      }, items);
    } // Hiradumi の 縦サイズの係数

  }, {
    key: "getHiradumiFactor",
    value: function getHiradumiFactor(i) {
      // console.log('getHiradumiFactor')
      var index = i % 4; // 0 1 2 3

      var hiradumiFactor;
      if (index === 0) hiradumiFactor = 1;
      if (index === 1) hiradumiFactor = 0.9;
      if (index === 2) hiradumiFactor = 0.8;
      if (index === 3) hiradumiFactor = 0.7;

      if (window.innerWidth <= 767) {
        if (index === 0) hiradumiFactor = 0.97;
        if (index === 1) hiradumiFactor = 0.75;
        if (index === 2) hiradumiFactor = 0.65;
        if (index === 3) hiradumiFactor = 0.55;
      }

      return hiradumiFactor;
    }
  }, {
    key: "initHiradumi",
    value: function initHiradumi() {
      this.setHiradumiRowHeight();
      this.setHiradumiRowParams();
    }
  }, {
    key: "setHiradumiRowHeight",
    value: function setHiradumiRowHeight() {
      var _this4 = this;

      this.hiradumiRowHeight = 0;
      this.hiradumiFactors.map(function (factor) {
        var height = _this4.getSize('hiradumi') * factor;
        _this4.hiradumiRowHeight += height;
      });
    }
  }, {
    key: "setHiradumiRowParams",
    value: function setHiradumiRowParams() {
      var _this5 = this;

      this.hiradumiColumnCount = 0;
      this.hiradumiRowParams = [];
      Array.from({
        length: 4
      }).map(function (notValue, index) {
        // 書影の高さ・幅 一行に入る数の計算
        var height = _this5.state.size * _this5.hiradumiFactors[index];
        var width = height / 1.5;
        var columnCount = Math.floor(window.innerWidth / width) - 1;
        _this5.hiradumiColumnCount += columnCount;

        _this5.hiradumiRowParams.push({
          columnCount: columnCount,
          width: width,
          height: height
        });
      });
    } // 各行のrender

  }, {
    key: "hiradumiRowRenderer",
    value: function hiradumiRowRenderer(_ref5) {
      var _this6 = this;

      var key = _ref5.key,
          index = _ref5.index,
          isScrolling = _ref5.isScrolling,
          isVisible = _ref5.isVisible,
          style = _ref5.style;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: key,
        style: style,
        className: "row"
      }, /*#__PURE__*/_react.default.createElement(Hiradumi, {
        data: this.state.data,
        size: this.state.size,
        rowIndex: index,
        isScrolling: isScrolling,
        hiradumiFactors: this.hiradumiFactors,
        hiradumiColumnCount: this.hiradumiColumnCount,
        hiradumiRowParams: this.hiradumiRowParams,
        onRender: function onRender(i) {
          // 現在の冊数の更新
          _this6.currentCount = i - _this6.hiradumiColumnCount;
          if (_this6.currentCount > _this6.state.data.length - 100) _this6.currentCount = _this6.state.data.length;
        }
      }));
    } // 書影の高さの基準を返す

  }, {
    key: "getSize",
    value: function getSize(sizeLabel) {
      // console.log('getSize')
      var size;
      if (sizeLabel === 'hiradumi') size = 200;
      if (sizeLabel === 'large') size = 150;
      if (sizeLabel === 'medium') size = 100;
      if (sizeLabel === 'small') size = 75;

      if (window.innerWidth <= 767) {
        if (sizeLabel === 'hiradumi') size = window.innerWidth * 0.38;
        if (sizeLabel === 'large') size = window.innerWidth * 0.28;
        if (sizeLabel === 'medium') size = window.innerWidth * 0.18;
        if (sizeLabel === 'small') size = window.innerWidth * 0.12;
      }

      return size;
    } // コントロールUIでサイズが変更されたときに呼ばれる関数

  }, {
    key: "setSize",
    value: function setSize(sizeLabel) {
      // console.log('setSize')
      var size = this.getSize(sizeLabel);
      this.setState({
        size: size,
        sizeLabel: sizeLabel
      });
    } // コントロールUIで並び順が変更されたときに呼ばれる関数

  }, {
    key: "setSort",
    value: function setSort(sort) {
      // console.log('setSort')
      this.setState({
        'sort': sort
      }, this.fetch);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      // console.log('render')
      // ヘッダーとコントロールUIぶんの高さを表示領域からひく
      var headerHeight = document.querySelector('header') ? document.querySelector('header').clientHeight : 0;

      if (window.innerWidth <= 767 && (this.state.sizeLabel === 'small' || this.state.sizeLabel === 'medium')) {
        headerHeight += document.querySelector('nav') ? document.querySelector('nav').clientHeight : 0;
      } //　表示領域の幅と高さを求める


      var width = window.innerWidth - 20;
      if (window.innerWidth <= 767) width = window.innerWidth * 0.96;
      var height = window.innerHeight - 43 - document.querySelector('.covidHeader').clientHeight - headerHeight; // 行数を求める

      var rowCount;

      if (this.state.sizeLabel === 'hiradumi') {
        rowCount = Math.ceil(this.state.data.length / this.hiradumiColumnCount);
      } else {
        var columnCount = Math.floor(window.innerWidth / Math.floor(this.getSize(this.state.sizeLabel) / 1.5)) - 1;
        rowCount = Math.floor(this.state.data.length / columnCount);
      }

      return /*#__PURE__*/_react.default.createElement("div", null, this.state.data.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactVirtualized.List, {
        className: "items",
        width: width,
        height: height,
        rowCount: rowCount,
        rowHeight: this.state.sizeLabel === 'hiradumi' ? this.hiradumiRowHeight : this.state.size,
        rowRenderer: this.state.sizeLabel === 'hiradumi' ? this.hiradumiRowRenderer.bind(this) : this.rowRenderer.bind(this),
        overscanRowCount: 2,
        onScroll: function onScroll() {
          if (_this7.timer) clearTimeout(_this7.timer);
          _this7.timer = setTimeout(function () {
            return _this7.setState({});
          }, 50);
        }
      }), /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "itemCount"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "./assets/icon-book.svg",
        alt: ""
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "currentCount"
      }, this.currentCount), "/", /*#__PURE__*/_react.default.createElement("span", {
        className: "totalCount"
      }, this.state.data.length, "\u518A"), /*#__PURE__*/_react.default.createElement("div", {
        onClick: function onClick() {
          return _this7.setState({
            menuOpen: !_this7.state.menuOpen
          });
        }
      }, this.state.menuOpen ? /*#__PURE__*/_react.default.createElement("img", {
        className: "close",
        src: "./assets/times.svg"
      }) : /*#__PURE__*/_react.default.createElement("img", {
        className: "open",
        src: "./assets/hamburger.svg"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: 'control' + (this.state.menuOpen ? ' open' : '')
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "sort"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: 'random' + (this.state.sort === 'random' ? ' select' : ''),
        onClick: this.setSort.bind(this, 'random')
      }, "\u30E9\u30F3\u30C0\u30E0"), /*#__PURE__*/_react.default.createElement("button", {
        className: 'library' + (this.state.sort === 'library' ? ' select' : ''),
        onClick: this.setSort.bind(this, 'library')
      }, "\u56F3\u66F8\u9928\u304C\u6240\u8535"), /*#__PURE__*/_react.default.createElement("button", {
        className: 'yomitai' + (this.state.sort === 'yomitai' ? ' select' : ''),
        onClick: this.setSort.bind(this, 'yomitai')
      }, "\u307F\u3093\u306A\u304C\u8AAD\u307F\u305F\u3044"), /*#__PURE__*/_react.default.createElement("button", {
        className: 'isbn' + (this.state.sort === 'isbn' ? ' select' : ''),
        onClick: this.setSort.bind(this, 'isbn')
      }, "\u51FA\u7248\u793E")), /*#__PURE__*/_react.default.createElement("div", {
        className: "size"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: 'small' + (this.state.sizeLabel === 'small' ? ' select' : ''),
        onClick: this.setSize.bind(this, 'small')
      }, "S"), /*#__PURE__*/_react.default.createElement("button", {
        className: 'medium' + (this.state.sizeLabel === 'medium' ? ' select' : ''),
        onClick: this.setSize.bind(this, 'medium')
      }, "M"), /*#__PURE__*/_react.default.createElement("button", {
        className: 'large' + (this.state.sizeLabel === 'large' ? ' select' : ''),
        onClick: this.setSize.bind(this, 'large')
      }, "L"), /*#__PURE__*/_react.default.createElement("button", {
        className: 'hiradumi' + (this.state.sizeLabel === 'hiradumi' ? ' select' : ''),
        onClick: this.setSize.bind(this, 'hiradumi')
      }, "H"))))) : /*#__PURE__*/_react.default.createElement("div", {
        className: "message"
      }, "Now Loading..."));
    }
  }]);

  return BookWalk;
}(_react.default.Component);

var _default = BookWalk;
exports.default = _default;

var Hiradumi = /*#__PURE__*/function (_React$Component2) {
  _inherits(Hiradumi, _React$Component2);

  var _super2 = _createSuper(Hiradumi);

  function Hiradumi(props) {
    var _this8;

    _classCallCheck(this, Hiradumi);

    _this8 = _super2.call(this, props);
    _this8.lastCount = 0;
    _this8.size = window.devicePixelRatio === 1 ? '200' : '400';
    return _this8;
  }

  _createClass(Hiradumi, [{
    key: "rowRender",
    value: function rowRender(rowIndex) {
      var _this9 = this;

      // console.log('rowRender')
      var _this$props$hiradumiR = this.props.hiradumiRowParams[rowIndex],
          height = _this$props$hiradumiR.height,
          width = _this$props$hiradumiR.width,
          columnCount = _this$props$hiradumiR.columnCount; // 書影APIのサイズ

      var size = this.size;
      if (this.props.isScrolling || columnCount >= 20) size = '120';
      var items = [];
      var i;
      Array.from({
        length: columnCount
      }).map(function (notValue, columnIndex) {
        i = _this9.props.hiradumiColumnCount * _this9.props.rowIndex + _this9.totalCount + columnIndex;

        if (i < _this9.props.data.length) {
          var imageUrl = 'https://nxc.calil.dev/' + size + '/' + _this9.props.data[i] + '.jpg';
          items.push( /*#__PURE__*/_react.default.createElement("a", {
            key: _this9.props.data[i],
            href: 'https://calil.jp/book/' + _this9.props.data[i],
            target: "_blank",
            style: {
              'width': width + 'px',
              'height': height + 'px'
            }
          }, /*#__PURE__*/_react.default.createElement("img", {
            src: imageUrl,
            style: {
              'width': width * 0.96 + 'px',
              'height': height * 0.96 + 'px'
            }
          })));
        }
      });
      this.totalCount += columnCount;
      this.lastCount = i;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: 'hiradumiRow' + i
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      this.totalCount = 0;
      var rows = [];
      Array.from({
        length: this.props.hiradumiRowParams.length
      }).map(function (notValue, index) {
        var items = _this10.rowRender(index);

        rows.push(items);
      });
      this.props.onRender(this.lastCount);
      return rows;
    }
  }]);

  return Hiradumi;
}(_react.default.Component);