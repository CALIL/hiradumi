"use strict";

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    (function () {
      var xf = Object.create,
          wo = Object.defineProperty,
          Cf = Object.getPrototypeOf,
          jf = Object.prototype.hasOwnProperty,
          bf = Object.getOwnPropertyNames,
          Pf = Object.getOwnPropertyDescriptor;

      var Nf = function Nf(e) {
        return wo(e, "__esModule", {
          value: !0
        });
      };

      var ot = function ot(e, t) {
        return function () {
          return t || (t = {
            exports: {}
          }, e(t.exports, t)), t.exports;
        };
      };

      var Tf = function Tf(e, t, n) {
        if (t && _typeof(t) == "object" || typeof t == "function") {
          var _iterator = _createForOfIteratorHelper(bf(t)),
              _step;

          try {
            var _loop = function _loop() {
              var r = _step.value;
              !jf.call(e, r) && r !== "default" && wo(e, r, {
                get: function get() {
                  return t[r];
                },
                enumerable: !(n = Pf(t, r)) || n.enumerable
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return e;
      },
          lt = function lt(e) {
        return Tf(Nf(wo(e != null ? xf(Cf(e)) : {}, "default", e && e.__esModule && "default" in e ? {
          get: function get() {
            return e.default;
          },
          enumerable: !0
        } : {
          value: e,
          enumerable: !0
        })), e);
      };

      var _o = ot(function (Xp, Bi) {
        "use strict";

        var Vi = Object.getOwnPropertySymbols,
            Of = Object.prototype.hasOwnProperty,
            Lf = Object.prototype.propertyIsEnumerable;

        function Df(e) {
          if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e);
        }

        function Rf() {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;

            for (var t = {}, n = 0; n < 10; n++) {
              t["_" + String.fromCharCode(n)] = n;
            }

            var r = Object.getOwnPropertyNames(t).map(function (l) {
              return t[l];
            });
            if (r.join("") !== "0123456789") return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (l) {
              o[l] = l;
            }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
          } catch (l) {
            return !1;
          }
        }

        Bi.exports = Rf() ? Object.assign : function (e, t) {
          for (var n, r = Df(e), o, l = 1; l < arguments.length; l++) {
            n = Object(arguments[l]);

            for (var i in n) {
              Of.call(n, i) && (r[i] = n[i]);
            }

            if (Vi) {
              o = Vi(n);

              for (var u = 0; u < o.length; u++) {
                Lf.call(n, o[u]) && (r[o[u]] = n[o[u]]);
              }
            }
          }

          return r;
        };
      });

      var ou = ot(function (N) {
        "use strict";

        var ko = _o(),
            Et = 60103,
            Wi = 60106;

        N.Fragment = 60107;
        N.StrictMode = 60108;
        N.Profiler = 60114;
        var Hi = 60109,
            qi = 60110,
            $i = 60112;
        N.Suspense = 60113;
        var Ji = 60115,
            Qi = 60116;
        typeof Symbol == "function" && Symbol.for && (ue = Symbol.for, Et = ue("react.element"), Wi = ue("react.portal"), N.Fragment = ue("react.fragment"), N.StrictMode = ue("react.strict_mode"), N.Profiler = ue("react.profiler"), Hi = ue("react.provider"), qi = ue("react.context"), $i = ue("react.forward_ref"), N.Suspense = ue("react.suspense"), Ji = ue("react.memo"), Qi = ue("react.lazy"));
        var ue,
            Xi = typeof Symbol == "function" && Symbol.iterator;

        function Mf(e) {
          return e === null || _typeof(e) != "object" ? null : (e = Xi && e[Xi] || e["@@iterator"], typeof e == "function" ? e : null);
        }

        function nn(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) {
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          }

          return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }

        var Yi = {
          isMounted: function isMounted() {
            return !1;
          },
          enqueueForceUpdate: function enqueueForceUpdate() {},
          enqueueReplaceState: function enqueueReplaceState() {},
          enqueueSetState: function enqueueSetState() {}
        },
            Gi = {};

        function xt(e, t, n) {
          this.props = e, this.context = t, this.refs = Gi, this.updater = n || Yi;
        }

        xt.prototype.isReactComponent = {};

        xt.prototype.setState = function (e, t) {
          if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error(nn(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        };

        xt.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        };

        function Ki() {}

        Ki.prototype = xt.prototype;

        function So(e, t, n) {
          this.props = e, this.context = t, this.refs = Gi, this.updater = n || Yi;
        }

        var Eo = So.prototype = new Ki();
        Eo.constructor = So;
        ko(Eo, xt.prototype);
        Eo.isPureReactComponent = !0;
        var xo = {
          current: null
        },
            Zi = Object.prototype.hasOwnProperty,
            eu = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

        function tu(e, t, n) {
          var r,
              o = {},
              l = null,
              i = null;
          if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) {
            Zi.call(t, r) && !eu.hasOwnProperty(r) && (o[r] = t[r]);
          }
          var u = arguments.length - 2;
          if (u === 1) o.children = n;else if (1 < u) {
            for (var s = Array(u), p = 0; p < u; p++) {
              s[p] = arguments[p + 2];
            }

            o.children = s;
          }
          if (e && e.defaultProps) for (r in u = e.defaultProps, u) {
            o[r] === void 0 && (o[r] = u[r]);
          }
          return {
            $$typeof: Et,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: xo.current
          };
        }

        function zf(e, t) {
          return {
            $$typeof: Et,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          };
        }

        function Co(e) {
          return _typeof(e) == "object" && e !== null && e.$$typeof === Et;
        }

        function If(e) {
          var t = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + e.replace(/[=:]/g, function (n) {
            return t[n];
          });
        }

        var nu = /\/+/g;

        function jo(e, t) {
          return _typeof(e) == "object" && e !== null && e.key != null ? If("" + e.key) : t.toString(36);
        }

        function or(e, t, n, r, o) {
          var l = _typeof(e);

          (l === "undefined" || l === "boolean") && (e = null);
          var i = !1;
          if (e === null) i = !0;else switch (l) {
            case "string":
            case "number":
              i = !0;
              break;

            case "object":
              switch (e.$$typeof) {
                case Et:
                case Wi:
                  i = !0;
              }

          }
          if (i) return i = e, o = o(i), e = r === "" ? "." + jo(i, 0) : r, Array.isArray(o) ? (n = "", e != null && (n = e.replace(nu, "$&/") + "/"), or(o, t, n, "", function (p) {
            return p;
          })) : o != null && (Co(o) && (o = zf(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(nu, "$&/") + "/") + e)), t.push(o)), 1;
          if (i = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var u = 0; u < e.length; u++) {
            l = e[u];
            var s = r + jo(l, u);
            i += or(l, t, n, s, o);
          } else if (s = Mf(e), typeof s == "function") for (e = s.call(e), u = 0; !(l = e.next()).done;) {
            l = l.value, s = r + jo(l, u++), i += or(l, t, n, s, o);
          } else if (l === "object") throw t = "" + e, Error(nn(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
          return i;
        }

        function lr(e, t, n) {
          if (e == null) return e;
          var r = [],
              o = 0;
          return or(e, r, "", "", function (l) {
            return t.call(n, l, o++);
          }), r;
        }

        function Ff(e) {
          if (e._status === -1) {
            var t = e._result;
            t = t(), e._status = 0, e._result = t, t.then(function (n) {
              e._status === 0 && (n = n.default, e._status = 1, e._result = n);
            }, function (n) {
              e._status === 0 && (e._status = 2, e._result = n);
            });
          }

          if (e._status === 1) return e._result;
          throw e._result;
        }

        var ru = {
          current: null
        };

        function be() {
          var e = ru.current;
          if (e === null) throw Error(nn(321));
          return e;
        }

        var Uf = {
          ReactCurrentDispatcher: ru,
          ReactCurrentBatchConfig: {
            transition: 0
          },
          ReactCurrentOwner: xo,
          IsSomeRendererActing: {
            current: !1
          },
          assign: ko
        };
        N.Children = {
          map: lr,
          forEach: function forEach(e, t, n) {
            lr(e, function () {
              t.apply(this, arguments);
            }, n);
          },
          count: function count(e) {
            var t = 0;
            return lr(e, function () {
              t++;
            }), t;
          },
          toArray: function toArray(e) {
            return lr(e, function (t) {
              return t;
            }) || [];
          },
          only: function only(e) {
            if (!Co(e)) throw Error(nn(143));
            return e;
          }
        };
        N.Component = xt;
        N.PureComponent = So;
        N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;

        N.cloneElement = function (e, t, n) {
          if (e == null) throw Error(nn(267, e));
          var r = ko({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;

          if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = xo.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;

            for (s in t) {
              Zi.call(t, s) && !eu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
            }
          }

          var s = arguments.length - 2;
          if (s === 1) r.children = n;else if (1 < s) {
            u = Array(s);

            for (var p = 0; p < s; p++) {
              u[p] = arguments[p + 2];
            }

            r.children = u;
          }
          return {
            $$typeof: Et,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
          };
        };

        N.createContext = function (e, t) {
          return t === void 0 && (t = null), e = {
            $$typeof: qi,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }, e.Provider = {
            $$typeof: Hi,
            _context: e
          }, e.Consumer = e;
        };

        N.createElement = tu;

        N.createFactory = function (e) {
          var t = tu.bind(null, e);
          return t.type = e, t;
        };

        N.createRef = function () {
          return {
            current: null
          };
        };

        N.forwardRef = function (e) {
          return {
            $$typeof: $i,
            render: e
          };
        };

        N.isValidElement = Co;

        N.lazy = function (e) {
          return {
            $$typeof: Qi,
            _payload: {
              _status: -1,
              _result: e
            },
            _init: Ff
          };
        };

        N.memo = function (e, t) {
          return {
            $$typeof: Ji,
            type: e,
            compare: t === void 0 ? null : t
          };
        };

        N.useCallback = function (e, t) {
          return be().useCallback(e, t);
        };

        N.useContext = function (e, t) {
          return be().useContext(e, t);
        };

        N.useDebugValue = function () {};

        N.useEffect = function (e, t) {
          return be().useEffect(e, t);
        };

        N.useImperativeHandle = function (e, t, n) {
          return be().useImperativeHandle(e, t, n);
        };

        N.useLayoutEffect = function (e, t) {
          return be().useLayoutEffect(e, t);
        };

        N.useMemo = function (e, t) {
          return be().useMemo(e, t);
        };

        N.useReducer = function (e, t, n) {
          return be().useReducer(e, t, n);
        };

        N.useRef = function (e) {
          return be().useRef(e);
        };

        N.useState = function (e) {
          return be().useState(e);
        };

        N.version = "17.0.2";
      });
      var ze = ot(function (Gp, lu) {
        "use strict";

        lu.exports = ou();
      });
      var cu = ot(function (T) {
        "use strict";

        var _Ct, rn, ir, bo;

        (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && typeof performance.now == "function" ? (iu = performance, T.unstable_now = function () {
          return iu.now();
        }) : (Po = Date, uu = Po.now(), T.unstable_now = function () {
          return Po.now() - uu;
        });
        var iu, Po, uu;
        typeof window == "undefined" || typeof MessageChannel != "function" ? (jt = null, No = null, _To = function To() {
          if (jt !== null) try {
            var e = T.unstable_now();
            jt(!0, e), jt = null;
          } catch (t) {
            throw setTimeout(_To, 0), t;
          }
        }, _Ct = function Ct(e) {
          jt !== null ? setTimeout(_Ct, 0, e) : (jt = e, setTimeout(_To, 0));
        }, rn = function rn(e, t) {
          No = setTimeout(e, t);
        }, ir = function ir() {
          clearTimeout(No);
        }, T.unstable_shouldYield = function () {
          return !1;
        }, bo = T.unstable_forceFrameRate = function () {}) : (su = window.setTimeout, au = window.clearTimeout, typeof console != "undefined" && (fu = window.cancelAnimationFrame, typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof fu != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), on = !1, ln = null, ur = -1, Oo = 5, Lo = 0, T.unstable_shouldYield = function () {
          return T.unstable_now() >= Lo;
        }, bo = function bo() {}, T.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Oo = 0 < e ? Math.floor(1e3 / e) : 5;
        }, Do = new MessageChannel(), sr = Do.port2, Do.port1.onmessage = function () {
          if (ln !== null) {
            var e = T.unstable_now();
            Lo = e + Oo;

            try {
              ln(!0, e) ? sr.postMessage(null) : (on = !1, ln = null);
            } catch (t) {
              throw sr.postMessage(null), t;
            }
          } else on = !1;
        }, _Ct = function _Ct(e) {
          ln = e, on || (on = !0, sr.postMessage(null));
        }, rn = function rn(e, t) {
          ur = su(function () {
            e(T.unstable_now());
          }, t);
        }, ir = function ir() {
          au(ur), ur = -1;
        });

        var jt, No, _To, su, au, fu, on, ln, ur, Oo, Lo, Do, sr;

        function Ro(e, t) {
          var n = e.length;
          e.push(t);

          e: for (;;) {
            var r = n - 1 >>> 1,
                o = e[r];
            if (o !== void 0 && 0 < ar(o, t)) e[r] = t, e[n] = o, n = r;else break e;
          }
        }

        function me(e) {
          return e = e[0], e === void 0 ? null : e;
        }

        function fr(e) {
          var t = e[0];

          if (t !== void 0) {
            var n = e.pop();

            if (n !== t) {
              e[0] = n;

              e: for (var r = 0, o = e.length; r < o;) {
                var l = 2 * (r + 1) - 1,
                    i = e[l],
                    u = l + 1,
                    s = e[u];
                if (i !== void 0 && 0 > ar(i, n)) s !== void 0 && 0 > ar(s, i) ? (e[r] = s, e[u] = n, r = u) : (e[r] = i, e[l] = n, r = l);else if (s !== void 0 && 0 > ar(s, n)) e[r] = s, e[u] = n, r = u;else break e;
              }
            }

            return t;
          }

          return null;
        }

        function ar(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return n !== 0 ? n : e.id - t.id;
        }

        var we = [],
            Ie = [],
            Af = 1,
            se = null,
            q = 3,
            cr = !1,
            it = !1,
            un = !1;

        function Mo(e) {
          for (var t = me(Ie); t !== null;) {
            if (t.callback === null) fr(Ie);else if (t.startTime <= e) fr(Ie), t.sortIndex = t.expirationTime, Ro(we, t);else break;
            t = me(Ie);
          }
        }

        function zo(e) {
          if (un = !1, Mo(e), !it) if (me(we) !== null) it = !0, _Ct(Io);else {
            var t = me(Ie);
            t !== null && rn(zo, t.startTime - e);
          }
        }

        function Io(e, t) {
          it = !1, un && (un = !1, ir()), cr = !0;
          var n = q;

          try {
            for (Mo(t), se = me(we); se !== null && (!(se.expirationTime > t) || e && !T.unstable_shouldYield());) {
              var r = se.callback;

              if (typeof r == "function") {
                se.callback = null, q = se.priorityLevel;
                var o = r(se.expirationTime <= t);
                t = T.unstable_now(), typeof o == "function" ? se.callback = o : se === me(we) && fr(we), Mo(t);
              } else fr(we);

              se = me(we);
            }

            if (se !== null) var l = !0;else {
              var i = me(Ie);
              i !== null && rn(zo, i.startTime - t), l = !1;
            }
            return l;
          } finally {
            se = null, q = n, cr = !1;
          }
        }

        var Bf = bo;
        T.unstable_IdlePriority = 5;
        T.unstable_ImmediatePriority = 1;
        T.unstable_LowPriority = 4;
        T.unstable_NormalPriority = 3;
        T.unstable_Profiling = null;
        T.unstable_UserBlockingPriority = 2;

        T.unstable_cancelCallback = function (e) {
          e.callback = null;
        };

        T.unstable_continueExecution = function () {
          it || cr || (it = !0, _Ct(Io));
        };

        T.unstable_getCurrentPriorityLevel = function () {
          return q;
        };

        T.unstable_getFirstCallbackNode = function () {
          return me(we);
        };

        T.unstable_next = function (e) {
          switch (q) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;

            default:
              t = q;
          }

          var n = q;
          q = t;

          try {
            return e();
          } finally {
            q = n;
          }
        };

        T.unstable_pauseExecution = function () {};

        T.unstable_requestPaint = Bf;

        T.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;

            default:
              e = 3;
          }

          var n = q;
          q = e;

          try {
            return t();
          } finally {
            q = n;
          }
        };

        T.unstable_scheduleCallback = function (e, t, n) {
          var r = T.unstable_now();

          switch (_typeof(n) == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? r + n : r) : n = r, e) {
            case 1:
              var o = -1;
              break;

            case 2:
              o = 250;
              break;

            case 5:
              o = 1073741823;
              break;

            case 4:
              o = 1e4;
              break;

            default:
              o = 5e3;
          }

          return o = n + o, e = {
            id: Af++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: o,
            sortIndex: -1
          }, n > r ? (e.sortIndex = n, Ro(Ie, e), me(we) === null && e === me(Ie) && (un ? ir() : un = !0, rn(zo, n - r))) : (e.sortIndex = o, Ro(we, e), it || cr || (it = !0, _Ct(Io))), e;
        };

        T.unstable_wrapCallback = function (e) {
          var t = q;
          return function () {
            var n = q;
            q = t;

            try {
              return e.apply(this, arguments);
            } finally {
              q = n;
            }
          };
        };
      });
      var du = ot(function (Zp, pu) {
        "use strict";

        pu.exports = cu();
      });
      var ef = ot(function (ae) {
        "use strict";

        var pr = ze(),
            R = _o(),
            B = du();

        function v(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) {
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          }

          return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }

        if (!pr) throw Error(v(227));
        var hu = new Set(),
            sn = {};

        function ut(e, t) {
          bt(e, t), bt(e + "Capture", t);
        }

        function bt(e, t) {
          for (sn[e] = t, e = 0; e < t.length; e++) {
            hu.add(t[e]);
          }
        }

        var Pe = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
            Vf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            mu = Object.prototype.hasOwnProperty,
            vu = {},
            gu = {};

        function Wf(e) {
          return mu.call(gu, e) ? !0 : mu.call(vu, e) ? !1 : Vf.test(e) ? gu[e] = !0 : (vu[e] = !0, !1);
        }

        function Hf(e, t, n, r) {
          if (n !== null && n.type === 0) return !1;

          switch (_typeof(t)) {
            case "function":
            case "symbol":
              return !0;

            case "boolean":
              return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");

            default:
              return !1;
          }
        }

        function qf(e, t, n, r) {
          if (t === null || typeof t == "undefined" || Hf(e, t, n, r)) return !0;
          if (r) return !1;
          if (n !== null) switch (n.type) {
            case 3:
              return !t;

            case 4:
              return t === !1;

            case 5:
              return isNaN(t);

            case 6:
              return isNaN(t) || 1 > t;
          }
          return !1;
        }

        function K(e, t, n, r, o, l, i) {
          this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
        }

        var V = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
          V[e] = new K(e, 0, !1, e, null, !1, !1);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
          var t = e[0];
          V[t] = new K(t, 1, !1, e[1], null, !1, !1);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
          V[e] = new K(e, 2, !1, e.toLowerCase(), null, !1, !1);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
          V[e] = new K(e, 2, !1, e, null, !1, !1);
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
          V[e] = new K(e, 3, !1, e.toLowerCase(), null, !1, !1);
        });
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          V[e] = new K(e, 3, !0, e, null, !1, !1);
        });
        ["capture", "download"].forEach(function (e) {
          V[e] = new K(e, 4, !1, e, null, !1, !1);
        });
        ["cols", "rows", "size", "span"].forEach(function (e) {
          V[e] = new K(e, 6, !1, e, null, !1, !1);
        });
        ["rowSpan", "start"].forEach(function (e) {
          V[e] = new K(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
        var Fo = /[\-:]([a-z])/g;

        function Uo(e) {
          return e[1].toUpperCase();
        }

        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
          var t = e.replace(Fo, Uo);
          V[t] = new K(t, 1, !1, e, null, !1, !1);
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
          var t = e.replace(Fo, Uo);
          V[t] = new K(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(Fo, Uo);
          V[t] = new K(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
        });
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          V[e] = new K(e, 1, !1, e.toLowerCase(), null, !1, !1);
        });
        V.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        ["src", "href", "action", "formAction"].forEach(function (e) {
          V[e] = new K(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });

        function Ao(e, t, n, r) {
          var o = V.hasOwnProperty(t) ? V[t] : null,
              l = o !== null ? o.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
          l || (qf(t, n, o, r) && (n = null), r || o === null ? Wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }

        var st = pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            an = 60103,
            at = 60106,
            Fe = 60107,
            Bo = 60108,
            fn = 60114,
            Vo = 60109,
            Wo = 60110,
            dr = 60112,
            cn = 60113,
            hr = 60120,
            mr = 60115,
            Ho = 60116,
            qo = 60121,
            $o = 60128,
            yu = 60129,
            Jo = 60130,
            Qo = 60131;
        typeof Symbol == "function" && Symbol.for && (F = Symbol.for, an = F("react.element"), at = F("react.portal"), Fe = F("react.fragment"), Bo = F("react.strict_mode"), fn = F("react.profiler"), Vo = F("react.provider"), Wo = F("react.context"), dr = F("react.forward_ref"), cn = F("react.suspense"), hr = F("react.suspense_list"), mr = F("react.memo"), Ho = F("react.lazy"), qo = F("react.block"), F("react.scope"), $o = F("react.opaque.id"), yu = F("react.debug_trace_mode"), Jo = F("react.offscreen"), Qo = F("react.legacy_hidden"));
        var F,
            wu = typeof Symbol == "function" && Symbol.iterator;

        function pn(e) {
          return e === null || _typeof(e) != "object" ? null : (e = wu && e[wu] || e["@@iterator"], typeof e == "function" ? e : null);
        }

        var Xo;

        function dn(e) {
          if (Xo === void 0) try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Xo = t && t[1] || "";
          }
          return "\n" + Xo + e;
        }

        var Yo = !1;

        function vr(e, t) {
          if (!e || Yo) return "";
          Yo = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;

          try {
            if (t) {
              if (t = function t() {
                throw Error();
              }, Object.defineProperty(t.prototype, "props", {
                set: function set() {
                  throw Error();
                }
              }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }

                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }

                e.call(t.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }

              e();
            }
          } catch (s) {
            if (s && r && typeof s.stack == "string") {
              for (var o = s.stack.split("\n"), l = r.stack.split("\n"), i = o.length - 1, u = l.length - 1; 1 <= i && 0 <= u && o[i] !== l[u];) {
                u--;
              }

              for (; 1 <= i && 0 <= u; i--, u--) {
                if (o[i] !== l[u]) {
                  if (i !== 1 || u !== 1) do {
                    if (i--, u--, 0 > u || o[i] !== l[u]) return "\n" + o[i].replace(" at new ", " at ");
                  } while (1 <= i && 0 <= u);
                  break;
                }
              }
            }
          } finally {
            Yo = !1, Error.prepareStackTrace = n;
          }

          return (e = e ? e.displayName || e.name : "") ? dn(e) : "";
        }

        function $f(e) {
          switch (e.tag) {
            case 5:
              return dn(e.type);

            case 16:
              return dn("Lazy");

            case 13:
              return dn("Suspense");

            case 19:
              return dn("SuspenseList");

            case 0:
            case 2:
            case 15:
              return e = vr(e.type, !1), e;

            case 11:
              return e = vr(e.type.render, !1), e;

            case 22:
              return e = vr(e.type._render, !1), e;

            case 1:
              return e = vr(e.type, !0), e;

            default:
              return "";
          }
        }

        function Pt(e) {
          if (e == null) return null;
          if (typeof e == "function") return e.displayName || e.name || null;
          if (typeof e == "string") return e;

          switch (e) {
            case Fe:
              return "Fragment";

            case at:
              return "Portal";

            case fn:
              return "Profiler";

            case Bo:
              return "StrictMode";

            case cn:
              return "Suspense";

            case hr:
              return "SuspenseList";
          }

          if (_typeof(e) == "object") switch (e.$$typeof) {
            case Wo:
              return (e.displayName || "Context") + ".Consumer";

            case Vo:
              return (e._context.displayName || "Context") + ".Provider";

            case dr:
              var t = e.render;
              return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");

            case mr:
              return Pt(e.type);

            case qo:
              return Pt(e._render);

            case Ho:
              t = e._payload, e = e._init;

              try {
                return Pt(e(t));
              } catch (n) {}

          }
          return null;
        }

        function Ue(e) {
          switch (_typeof(e)) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;

            default:
              return "";
          }
        }

        function _u(e) {
          var t = e.type;
          return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }

        function Jf(e) {
          var t = _u(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];

          if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
            var o = n.get,
                l = n.set;
            return Object.defineProperty(e, t, {
              configurable: !0,
              get: function get() {
                return o.call(this);
              },
              set: function set(i) {
                r = "" + i, l.call(this, i);
              }
            }), Object.defineProperty(e, t, {
              enumerable: n.enumerable
            }), {
              getValue: function getValue() {
                return r;
              },
              setValue: function setValue(i) {
                r = "" + i;
              },
              stopTracking: function stopTracking() {
                e._valueTracker = null, delete e[t];
              }
            };
          }
        }

        function gr(e) {
          e._valueTracker || (e._valueTracker = Jf(e));
        }

        function ku(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
              r = "";
          return e && (r = _u(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
        }

        function yr(e) {
          if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;

          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }

        function Go(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n !== null && n !== void 0 ? n : e._wrapperState.initialChecked
          });
        }

        function Su(e, t) {
          var n = t.defaultValue == null ? "" : t.defaultValue,
              r = t.checked != null ? t.checked : t.defaultChecked;
          n = Ue(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
          };
        }

        function Eu(e, t) {
          t = t.checked, t != null && Ao(e, "checked", t, !1);
        }

        function Zo(e, t) {
          Eu(e, t);
          var n = Ue(t.value),
              r = t.type;
          if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
          }
          t.hasOwnProperty("value") ? Ko(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ko(e, t.type, Ue(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
        }

        function xu(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
          }

          n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
        }

        function Ko(e, t, n) {
          (t !== "number" || yr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }

        function Qf(e) {
          var t = "";
          return pr.Children.forEach(e, function (n) {
            n != null && (t += n);
          }), t;
        }

        function el(e, t) {
          return e = R({
            children: void 0
          }, t), (t = Qf(t.children)) && (e.children = t), e;
        }

        function Nt(e, t, n, r) {
          if (e = e.options, t) {
            t = {};

            for (var o = 0; o < n.length; o++) {
              t["$" + n[o]] = !0;
            }

            for (n = 0; n < e.length; n++) {
              o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
            }
          } else {
            for (n = "" + Ue(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return;
              }

              t !== null || e[o].disabled || (t = e[o]);
            }

            t !== null && (t.selected = !0);
          }
        }

        function tl(e, t) {
          if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
          });
        }

        function Cu(e, t) {
          var n = t.value;

          if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
              if (t != null) throw Error(v(92));

              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(v(93));
                n = n[0];
              }

              t = n;
            }

            t == null && (t = ""), n = t;
          }

          e._wrapperState = {
            initialValue: Ue(n)
          };
        }

        function ju(e, t) {
          var n = Ue(t.value),
              r = Ue(t.defaultValue);
          n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
        }

        function bu(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
        }

        var nl = {
          html: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg"
        };

        function Pu(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";

            case "math":
              return "http://www.w3.org/1998/Math/MathML";

            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }

        function rl(e, t) {
          return e == null || e === "http://www.w3.org/1999/xhtml" ? Pu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
        }

        var wr,
            Nu = function (e) {
          return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          } : e;
        }(function (e, t) {
          if (e.namespaceURI !== nl.svg || "innerHTML" in e) e.innerHTML = t;else {
            for (wr = wr || document.createElement("div"), wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wr.firstChild; e.firstChild;) {
              e.removeChild(e.firstChild);
            }

            for (; t.firstChild;) {
              e.appendChild(t.firstChild);
            }
          }
        });

        function hn(e, t) {
          if (t) {
            var n = e.firstChild;

            if (n && n === e.lastChild && n.nodeType === 3) {
              n.nodeValue = t;
              return;
            }
          }

          e.textContent = t;
        }

        var mn = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
            Xf = ["Webkit", "ms", "Moz", "O"];
        Object.keys(mn).forEach(function (e) {
          Xf.forEach(function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), mn[t] = mn[e];
          });
        });

        function Tu(e, t, n) {
          return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mn.hasOwnProperty(e) && mn[e] ? ("" + t).trim() : t + "px";
        }

        function Ou(e, t) {
          e = e.style;

          for (var n in t) {
            if (t.hasOwnProperty(n)) {
              var r = n.indexOf("--") === 0,
                  o = Tu(n, t[n], r);
              n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
            }
          }
        }

        var Yf = R({
          menuitem: !0
        }, {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
        });

        function ol(e, t) {
          if (t) {
            if (Yf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(v(137, e));

            if (t.dangerouslySetInnerHTML != null) {
              if (t.children != null) throw Error(v(60));
              if (!(_typeof(t.dangerouslySetInnerHTML) == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(v(61));
            }

            if (t.style != null && _typeof(t.style) != "object") throw Error(v(62));
          }
        }

        function ll(e, t) {
          if (e.indexOf("-") === -1) return typeof t.is == "string";

          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;

            default:
              return !0;
          }
        }

        function il(e) {
          return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }

        var ul = null,
            Tt = null,
            Ot = null;

        function Lu(e) {
          if (e = vn(e)) {
            if (typeof ul != "function") throw Error(v(280));
            var t = e.stateNode;
            t && (t = _r(t), ul(e.stateNode, e.type, t));
          }
        }

        function Du(e) {
          Tt ? Ot ? Ot.push(e) : Ot = [e] : Tt = e;
        }

        function Ru() {
          if (Tt) {
            var e = Tt,
                t = Ot;
            if (Ot = Tt = null, Lu(e), t) for (e = 0; e < t.length; e++) {
              Lu(t[e]);
            }
          }
        }

        function sl(e, t) {
          return e(t);
        }

        function Mu(e, t, n, r, o) {
          return e(t, n, r, o);
        }

        function al() {}

        var zu = sl,
            ft = !1,
            fl = !1;

        function cl() {
          (Tt !== null || Ot !== null) && (al(), Ru());
        }

        function Gf(e, t, n) {
          if (fl) return e(t, n);
          fl = !0;

          try {
            return zu(e, t, n);
          } finally {
            fl = !1, cl();
          }
        }

        function gn(e, t) {
          var n = e.stateNode;
          if (n === null) return null;

          var r = _r(n);

          if (r === null) return null;
          n = r[t];

          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
              break e;

            default:
              e = !1;
          }

          if (e) return null;
          if (n && typeof n != "function") throw Error(v(231, t, _typeof(n)));
          return n;
        }

        var pl = !1;
        if (Pe) try {
          Lt = {}, Object.defineProperty(Lt, "passive", {
            get: function get() {
              pl = !0;
            }
          }), window.addEventListener("test", Lt, Lt), window.removeEventListener("test", Lt, Lt);
        } catch (e) {
          pl = !1;
        }
        var Lt;

        function Kf(e, t, n, r, o, l, i, u, s) {
          var p = Array.prototype.slice.call(arguments, 3);

          try {
            t.apply(n, p);
          } catch (y) {
            this.onError(y);
          }
        }

        var yn = !1,
            kr = null,
            Sr = !1,
            dl = null,
            Zf = {
          onError: function onError(e) {
            yn = !0, kr = e;
          }
        };

        function ec(e, t, n, r, o, l, i, u, s) {
          yn = !1, kr = null, Kf.apply(Zf, arguments);
        }

        function tc(e, t, n, r, o, l, i, u, s) {
          if (ec.apply(this, arguments), yn) {
            if (yn) {
              var p = kr;
              yn = !1, kr = null;
            } else throw Error(v(198));

            Sr || (Sr = !0, dl = p);
          }
        }

        function ct(e) {
          var t = e,
              n = e;
          if (e.alternate) for (; t.return;) {
            t = t.return;
          } else {
            e = t;

            do {
              t = e, (t.flags & 1026) != 0 && (n = t.return), e = t.return;
            } while (e);
          }
          return t.tag === 3 ? n : null;
        }

        function Iu(e) {
          if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
          }

          return null;
        }

        function Fu(e) {
          if (ct(e) !== e) throw Error(v(188));
        }

        function nc(e) {
          var t = e.alternate;

          if (!t) {
            if (t = ct(e), t === null) throw Error(v(188));
            return t !== e ? null : e;
          }

          for (var n = e, r = t;;) {
            var o = n.return;
            if (o === null) break;
            var l = o.alternate;

            if (l === null) {
              if (r = o.return, r !== null) {
                n = r;
                continue;
              }

              break;
            }

            if (o.child === l.child) {
              for (l = o.child; l;) {
                if (l === n) return Fu(o), e;
                if (l === r) return Fu(o), t;
                l = l.sibling;
              }

              throw Error(v(188));
            }

            if (n.return !== r.return) n = o, r = l;else {
              for (var i = !1, u = o.child; u;) {
                if (u === n) {
                  i = !0, n = o, r = l;
                  break;
                }

                if (u === r) {
                  i = !0, r = o, n = l;
                  break;
                }

                u = u.sibling;
              }

              if (!i) {
                for (u = l.child; u;) {
                  if (u === n) {
                    i = !0, n = l, r = o;
                    break;
                  }

                  if (u === r) {
                    i = !0, r = l, n = o;
                    break;
                  }

                  u = u.sibling;
                }

                if (!i) throw Error(v(189));
              }
            }
            if (n.alternate !== r) throw Error(v(190));
          }

          if (n.tag !== 3) throw Error(v(188));
          return n.stateNode.current === n ? e : t;
        }

        function Uu(e) {
          if (e = nc(e), !e) return null;

          for (var t = e;;) {
            if (t.tag === 5 || t.tag === 6) return t;
            if (t.child) t.child.return = t, t = t.child;else {
              if (t === e) break;

              for (; !t.sibling;) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }

              t.sibling.return = t.return, t = t.sibling;
            }
          }

          return null;
        }

        function Au(e, t) {
          for (var n = e.alternate; t !== null;) {
            if (t === e || t === n) return !0;
            t = t.return;
          }

          return !1;
        }

        var Bu,
            hl,
            Vu,
            Wu,
            ml = !1,
            _e = [],
            Ae = null,
            Be = null,
            Ve = null,
            wn = new Map(),
            _n = new Map(),
            kn = [],
            Hu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

        function vl(e, t, n, r, o) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: n | 16,
            nativeEvent: o,
            targetContainers: [r]
          };
        }

        function qu(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ae = null;
              break;

            case "dragenter":
            case "dragleave":
              Be = null;
              break;

            case "mouseover":
            case "mouseout":
              Ve = null;
              break;

            case "pointerover":
            case "pointerout":
              wn.delete(t.pointerId);
              break;

            case "gotpointercapture":
            case "lostpointercapture":
              _n.delete(t.pointerId);

          }
        }

        function Sn(e, t, n, r, o, l) {
          return e === null || e.nativeEvent !== l ? (e = vl(t, n, r, o, l), t !== null && (t = vn(t), t !== null && hl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
        }

        function rc(e, t, n, r, o) {
          switch (t) {
            case "focusin":
              return Ae = Sn(Ae, e, t, n, r, o), !0;

            case "dragenter":
              return Be = Sn(Be, e, t, n, r, o), !0;

            case "mouseover":
              return Ve = Sn(Ve, e, t, n, r, o), !0;

            case "pointerover":
              var l = o.pointerId;
              return wn.set(l, Sn(wn.get(l) || null, e, t, n, r, o)), !0;

            case "gotpointercapture":
              return l = o.pointerId, _n.set(l, Sn(_n.get(l) || null, e, t, n, r, o)), !0;
          }

          return !1;
        }

        function oc(e) {
          var t = pt(e.target);

          if (t !== null) {
            var n = ct(t);

            if (n !== null) {
              if (t = n.tag, t === 13) {
                if (t = Iu(n), t !== null) {
                  e.blockedOn = t, Wu(e.lanePriority, function () {
                    B.unstable_runWithPriority(e.priority, function () {
                      Vu(n);
                    });
                  });
                  return;
                }
              } else if (t === 3 && n.stateNode.hydrate) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
              }
            }
          }

          e.blockedOn = null;
        }

        function Er(e) {
          if (e.blockedOn !== null) return !1;

          for (var t = e.targetContainers; 0 < t.length;) {
            var n = gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n !== null) return t = vn(n), t !== null && hl(t), e.blockedOn = n, !1;
            t.shift();
          }

          return !0;
        }

        function $u(e, t, n) {
          Er(e) && n.delete(t);
        }

        function lc() {
          for (ml = !1; 0 < _e.length;) {
            var e = _e[0];

            if (e.blockedOn !== null) {
              e = vn(e.blockedOn), e !== null && Bu(e);
              break;
            }

            for (var t = e.targetContainers; 0 < t.length;) {
              var n = gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);

              if (n !== null) {
                e.blockedOn = n;
                break;
              }

              t.shift();
            }

            e.blockedOn === null && _e.shift();
          }

          Ae !== null && Er(Ae) && (Ae = null), Be !== null && Er(Be) && (Be = null), Ve !== null && Er(Ve) && (Ve = null), wn.forEach($u), _n.forEach($u);
        }

        function En(e, t) {
          e.blockedOn === t && (e.blockedOn = null, ml || (ml = !0, B.unstable_scheduleCallback(B.unstable_NormalPriority, lc)));
        }

        function Ju(e) {
          function t(o) {
            return En(o, e);
          }

          if (0 < _e.length) {
            En(_e[0], e);

            for (var n = 1; n < _e.length; n++) {
              var r = _e[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }

          for (Ae !== null && En(Ae, e), Be !== null && En(Be, e), Ve !== null && En(Ve, e), wn.forEach(t), _n.forEach(t), n = 0; n < kn.length; n++) {
            r = kn[n], r.blockedOn === e && (r.blockedOn = null);
          }

          for (; 0 < kn.length && (n = kn[0], n.blockedOn === null);) {
            oc(n), n.blockedOn === null && kn.shift();
          }
        }

        function xr(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
        }

        var Dt = {
          animationend: xr("Animation", "AnimationEnd"),
          animationiteration: xr("Animation", "AnimationIteration"),
          animationstart: xr("Animation", "AnimationStart"),
          transitionend: xr("Transition", "TransitionEnd")
        },
            yl = {},
            Qu = {};
        Pe && (Qu = document.createElement("div").style, "AnimationEvent" in window || (delete Dt.animationend.animation, delete Dt.animationiteration.animation, delete Dt.animationstart.animation), "TransitionEvent" in window || delete Dt.transitionend.transition);

        function Cr(e) {
          if (yl[e]) return yl[e];
          if (!Dt[e]) return e;
          var t = Dt[e],
              n;

          for (n in t) {
            if (t.hasOwnProperty(n) && n in Qu) return yl[e] = t[n];
          }

          return e;
        }

        var Xu = Cr("animationend"),
            Yu = Cr("animationiteration"),
            Gu = Cr("animationstart"),
            Ku = Cr("transitionend"),
            Zu = new Map(),
            wl = new Map(),
            ic = ["abort", "abort", Xu, "animationEnd", Yu, "animationIteration", Gu, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ku, "transitionEnd", "waiting", "waiting"];

        function _l(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
                o = e[n + 1];
            o = "on" + (o[0].toUpperCase() + o.slice(1)), wl.set(r, t), Zu.set(r, o), ut(o, [r]);
          }
        }

        var uc = B.unstable_now;
        uc();
        var O = 8;

        function Rt(e) {
          if ((1 & e) != 0) return O = 15, 1;
          if ((2 & e) != 0) return O = 14, 2;
          if ((4 & e) != 0) return O = 13, 4;
          var t = 24 & e;
          return t !== 0 ? (O = 12, t) : (e & 32) != 0 ? (O = 11, 32) : (t = 192 & e, t !== 0 ? (O = 10, t) : (e & 256) != 0 ? (O = 9, 256) : (t = 3584 & e, t !== 0 ? (O = 8, t) : (e & 4096) != 0 ? (O = 7, 4096) : (t = 4186112 & e, t !== 0 ? (O = 6, t) : (t = 62914560 & e, t !== 0 ? (O = 5, t) : e & 67108864 ? (O = 4, 67108864) : (e & 134217728) != 0 ? (O = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (O = 2, t) : (1073741824 & e) != 0 ? (O = 1, 1073741824) : (O = 8, e))))));
        }

        function sc(e) {
          switch (e) {
            case 99:
              return 15;

            case 98:
              return 10;

            case 97:
            case 96:
              return 8;

            case 95:
              return 2;

            default:
              return 0;
          }
        }

        function ac(e) {
          switch (e) {
            case 15:
            case 14:
              return 99;

            case 13:
            case 12:
            case 11:
            case 10:
              return 98;

            case 9:
            case 8:
            case 7:
            case 6:
            case 4:
            case 5:
              return 97;

            case 3:
            case 2:
            case 1:
              return 95;

            case 0:
              return 90;

            default:
              throw Error(v(358, e));
          }
        }

        function xn(e, t) {
          var n = e.pendingLanes;
          if (n === 0) return O = 0;
          var r = 0,
              o = 0,
              l = e.expiredLanes,
              i = e.suspendedLanes,
              u = e.pingedLanes;
          if (l !== 0) r = l, o = O = 15;else if (l = n & 134217727, l !== 0) {
            var s = l & ~i;
            s !== 0 ? (r = Rt(s), o = O) : (u &= l, u !== 0 && (r = Rt(u), o = O));
          } else l = n & ~i, l !== 0 ? (r = Rt(l), o = O) : u !== 0 && (r = Rt(u), o = O);
          if (r === 0) return 0;

          if (r = 31 - We(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && (t & i) == 0) {
            if (Rt(t), o <= O) return t;
            O = o;
          }

          if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) {
            n = 31 - We(t), o = 1 << n, r |= e[n], t &= ~o;
          }
          return r;
        }

        function es(e) {
          return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
        }

        function jr(e, t) {
          switch (e) {
            case 15:
              return 1;

            case 14:
              return 2;

            case 12:
              return e = Mt(24 & ~t), e === 0 ? jr(10, t) : e;

            case 10:
              return e = Mt(192 & ~t), e === 0 ? jr(8, t) : e;

            case 8:
              return e = Mt(3584 & ~t), e === 0 && (e = Mt(4186112 & ~t), e === 0 && (e = 512)), e;

            case 2:
              return t = Mt(805306368 & ~t), t === 0 && (t = 268435456), t;
          }

          throw Error(v(358, e));
        }

        function Mt(e) {
          return e & -e;
        }

        function kl(e) {
          for (var t = [], n = 0; 31 > n; n++) {
            t.push(e);
          }

          return t;
        }

        function br(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - We(t), e[t] = n;
        }

        var We = Math.clz32 ? Math.clz32 : fc,
            cc = Math.log,
            pc = Math.LN2;

        function fc(e) {
          return e === 0 ? 32 : 31 - (cc(e) / pc | 0) | 0;
        }

        var dc = B.unstable_UserBlockingPriority,
            hc = B.unstable_runWithPriority,
            Pr = !0;

        function mc(e, t, n, r) {
          ft || al();
          var o = Sl,
              l = ft;
          ft = !0;

          try {
            Mu(o, e, t, n, r);
          } finally {
            (ft = l) || cl();
          }
        }

        function vc(e, t, n, r) {
          hc(dc, Sl.bind(null, e, t, n, r));
        }

        function Sl(e, t, n, r) {
          if (Pr) {
            var o;
            if ((o = (t & 4) == 0) && 0 < _e.length && -1 < Hu.indexOf(e)) e = vl(null, e, t, n, r), _e.push(e);else {
              var l = gl(e, t, n, r);
              if (l === null) o && qu(e, r);else {
                if (o) {
                  if (-1 < Hu.indexOf(e)) {
                    e = vl(l, e, t, n, r), _e.push(e);
                    return;
                  }

                  if (rc(l, e, t, n, r)) return;
                  qu(e, r);
                }

                ts(e, t, r, null, n);
              }
            }
          }
        }

        function gl(e, t, n, r) {
          var o = il(r);

          if (o = pt(o), o !== null) {
            var l = ct(o);
            if (l === null) o = null;else {
              var i = l.tag;

              if (i === 13) {
                if (o = Iu(l), o !== null) return o;
                o = null;
              } else if (i === 3) {
                if (l.stateNode.hydrate) return l.tag === 3 ? l.stateNode.containerInfo : null;
                o = null;
              } else l !== o && (o = null);
            }
          }

          return ts(e, t, r, o, n), null;
        }

        var He = null,
            El = null,
            Nr = null;

        function ns() {
          if (Nr) return Nr;
          var e,
              t = El,
              n = t.length,
              r,
              o = "value" in He ? He.value : He.textContent,
              l = o.length;

          for (e = 0; e < n && t[e] === o[e]; e++) {
            ;
          }

          var i = n - e;

          for (r = 1; r <= i && t[n - r] === o[l - r]; r++) {
            ;
          }

          return Nr = o.slice(e, 1 < r ? 1 - r : void 0);
        }

        function Tr(e) {
          var t = e.keyCode;
          return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }

        function Or() {
          return !0;
        }

        function rs() {
          return !1;
        }

        function le(e) {
          function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;

            for (var u in e) {
              e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
            }

            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Or : rs, this.isPropagationStopped = rs, this;
          }

          return R(t.prototype, {
            preventDefault: function preventDefault() {
              this.defaultPrevented = !0;
              var n = this.nativeEvent;
              n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Or);
            },
            stopPropagation: function stopPropagation() {
              var n = this.nativeEvent;
              n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Or);
            },
            persist: function persist() {},
            isPersistent: Or
          }), t;
        }

        var zt = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function timeStamp(e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
            xl = le(zt),
            Cn = R({}, zt, {
          view: 0,
          detail: 0
        }),
            gc = le(Cn),
            Cl,
            jl,
            jn,
            Lr = R({}, Cn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: bl,
          button: 0,
          buttons: 0,
          relatedTarget: function relatedTarget(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
          },
          movementX: function movementX(e) {
            return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (Cl = e.screenX - jn.screenX, jl = e.screenY - jn.screenY) : jl = Cl = 0, jn = e), Cl);
          },
          movementY: function movementY(e) {
            return "movementY" in e ? e.movementY : jl;
          }
        }),
            os = le(Lr),
            yc = R({}, Lr, {
          dataTransfer: 0
        }),
            wc = le(yc),
            _c = R({}, Cn, {
          relatedTarget: 0
        }),
            Pl = le(_c),
            kc = R({}, zt, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        }),
            Sc = le(kc),
            Ec = R({}, zt, {
          clipboardData: function clipboardData(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
          }
        }),
            xc = le(Ec),
            Cc = R({}, zt, {
          data: 0
        }),
            ls = le(Cc),
            jc = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        },
            bc = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        },
            Pc = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };

        function Nc(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : (e = Pc[e]) ? !!t[e] : !1;
        }

        function bl() {
          return Nc;
        }

        var Tc = R({}, Cn, {
          key: function key(e) {
            if (e.key) {
              var t = jc[e.key] || e.key;
              if (t !== "Unidentified") return t;
            }

            return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bc[e.keyCode] || "Unidentified" : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: bl,
          charCode: function charCode(e) {
            return e.type === "keypress" ? Tr(e) : 0;
          },
          keyCode: function keyCode(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
          },
          which: function which(e) {
            return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
          }
        }),
            Oc = le(Tc),
            Lc = R({}, Lr, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        }),
            is = le(Lc),
            Dc = R({}, Cn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: bl
        }),
            Rc = le(Dc),
            Mc = R({}, zt, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        }),
            zc = le(Mc),
            Ic = R({}, Lr, {
          deltaX: function deltaX(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function deltaY(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
          },
          deltaZ: 0,
          deltaMode: 0
        }),
            Fc = le(Ic),
            Uc = [9, 13, 27, 32],
            Nl = Pe && "CompositionEvent" in window,
            bn = null;
        Pe && "documentMode" in document && (bn = document.documentMode);
        var Ac = Pe && "TextEvent" in window && !bn,
            us = Pe && (!Nl || bn && 8 < bn && 11 >= bn),
            ss = String.fromCharCode(32),
            as = !1;

        function fs(e, t) {
          switch (e) {
            case "keyup":
              return Uc.indexOf(t.keyCode) !== -1;

            case "keydown":
              return t.keyCode !== 229;

            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;

            default:
              return !1;
          }
        }

        function cs(e) {
          return e = e.detail, _typeof(e) == "object" && "data" in e ? e.data : null;
        }

        var It = !1;

        function Bc(e, t) {
          switch (e) {
            case "compositionend":
              return cs(t);

            case "keypress":
              return t.which !== 32 ? null : (as = !0, ss);

            case "textInput":
              return e = t.data, e === ss && as ? null : e;

            default:
              return null;
          }
        }

        function Vc(e, t) {
          if (It) return e === "compositionend" || !Nl && fs(e, t) ? (e = ns(), Nr = El = He = null, It = !1, e) : null;

          switch (e) {
            case "paste":
              return null;

            case "keypress":
              if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
              }

              return null;

            case "compositionend":
              return us && t.locale !== "ko" ? null : t.data;

            default:
              return null;
          }
        }

        var Wc = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0
        };

        function ps(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t === "input" ? !!Wc[e.type] : t === "textarea";
        }

        function ds(e, t, n, r) {
          Du(r), t = Dr(t, "onChange"), 0 < t.length && (n = new xl("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
          }));
        }

        var Pn = null,
            Nn = null;

        function Hc(e) {
          hs(e, 0);
        }

        function Rr(e) {
          var t = Ft(e);
          if (ku(t)) return e;
        }

        function qc(e, t) {
          if (e === "change") return t;
        }

        var ms = !1;
        Pe && (Pe ? (zr = "oninput" in document, zr || (Tl = document.createElement("div"), Tl.setAttribute("oninput", "return;"), zr = typeof Tl.oninput == "function"), Mr = zr) : Mr = !1, ms = Mr && (!document.documentMode || 9 < document.documentMode));
        var Mr, zr, Tl;

        function gs() {
          Pn && (Pn.detachEvent("onpropertychange", vs), Nn = Pn = null);
        }

        function vs(e) {
          if (e.propertyName === "value" && Rr(Nn)) {
            var t = [];
            if (ds(t, Nn, e, il(e)), e = Hc, ft) e(t);else {
              ft = !0;

              try {
                sl(e, t);
              } finally {
                ft = !1, cl();
              }
            }
          }
        }

        function $c(e, t, n) {
          e === "focusin" ? (gs(), Pn = t, Nn = n, Pn.attachEvent("onpropertychange", vs)) : e === "focusout" && gs();
        }

        function Jc(e) {
          if (e === "selectionchange" || e === "keyup" || e === "keydown") return Rr(Nn);
        }

        function Qc(e, t) {
          if (e === "click") return Rr(t);
        }

        function Xc(e, t) {
          if (e === "input" || e === "change") return Rr(t);
        }

        function Yc(e, t) {
          return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
        }

        var fe = typeof Object.is == "function" ? Object.is : Yc,
            Gc = Object.prototype.hasOwnProperty;

        function Tn(e, t) {
          if (fe(e, t)) return !0;
          if (_typeof(e) != "object" || e === null || _typeof(t) != "object" || t === null) return !1;
          var n = Object.keys(e),
              r = Object.keys(t);
          if (n.length !== r.length) return !1;

          for (r = 0; r < n.length; r++) {
            if (!Gc.call(t, n[r]) || !fe(e[n[r]], t[n[r]])) return !1;
          }

          return !0;
        }

        function ys(e) {
          for (; e && e.firstChild;) {
            e = e.firstChild;
          }

          return e;
        }

        function ws(e, t) {
          var n = ys(e);
          e = 0;

          for (var r; n;) {
            if (n.nodeType === 3) {
              if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
              };
              e = r;
            }

            e: {
              for (; n;) {
                if (n.nextSibling) {
                  n = n.nextSibling;
                  break e;
                }

                n = n.parentNode;
              }

              n = void 0;
            }

            n = ys(n);
          }
        }

        function _s(e, t) {
          return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _s(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }

        function ks() {
          for (var e = window, t = yr(); t instanceof e.HTMLIFrameElement;) {
            try {
              var n = typeof t.contentWindow.location.href == "string";
            } catch (r) {
              n = !1;
            }

            if (n) e = t.contentWindow;else break;
            t = yr(e.document);
          }

          return t;
        }

        function Ol(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }

        var Kc = Pe && "documentMode" in document && 11 >= document.documentMode,
            Ut = null,
            Ll = null,
            On = null,
            Dl = !1;

        function Ss(e, t, n) {
          var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
          Dl || Ut == null || Ut !== yr(r) || (r = Ut, "selectionStart" in r && Ol(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
          } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
          }), On && Tn(On, r) || (On = r, r = Dr(Ll, "onSelect"), 0 < r.length && (t = new xl("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
          }), t.target = Ut)));
        }

        _l("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);

        _l("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);

        _l(ic, 2);

        for (var Es = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Rl = 0; Rl < Es.length; Rl++) {
          wl.set(Es[Rl], 0);
        }

        bt("onMouseEnter", ["mouseout", "mouseover"]);
        bt("onMouseLeave", ["mouseout", "mouseover"]);
        bt("onPointerEnter", ["pointerout", "pointerover"]);
        bt("onPointerLeave", ["pointerout", "pointerover"]);
        ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            xs = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));

        function Cs(e, t, n) {
          var r = e.type || "unknown-event";
          e.currentTarget = n, tc(r, t, void 0, e), e.currentTarget = null;
        }

        function hs(e, t) {
          t = (t & 4) != 0;

          for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = r.event;
            r = r.listeners;

            e: {
              var l = void 0;
              if (t) for (var i = r.length - 1; 0 <= i; i--) {
                var u = r[i],
                    s = u.instance,
                    p = u.currentTarget;
                if (u = u.listener, s !== l && o.isPropagationStopped()) break e;
                Cs(o, u, p), l = s;
              } else for (i = 0; i < r.length; i++) {
                if (u = r[i], s = u.instance, p = u.currentTarget, u = u.listener, s !== l && o.isPropagationStopped()) break e;
                Cs(o, u, p), l = s;
              }
            }
          }

          if (Sr) throw e = dl, Sr = !1, dl = null, e;
        }

        function L(e, t) {
          var n = bs(t),
              r = e + "__bubble";
          n.has(r) || (js(t, e, 2, !1), n.add(r));
        }

        var Ps = "_reactListening" + Math.random().toString(36).slice(2);

        function Ts(e) {
          e[Ps] || (e[Ps] = !0, hu.forEach(function (t) {
            xs.has(t) || Ns(t, !1, e, null), Ns(t, !0, e, null);
          }));
        }

        function Ns(e, t, n, r) {
          var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
              l = n;

          if (e === "selectionchange" && n.nodeType !== 9 && (l = n.ownerDocument), r !== null && !t && xs.has(e)) {
            if (e !== "scroll") return;
            o |= 2, l = r;
          }

          var i = bs(l),
              u = e + "__" + (t ? "capture" : "bubble");
          i.has(u) || (t && (o |= 4), js(l, e, o, t), i.add(u));
        }

        function js(e, t, n, r) {
          var o = wl.get(t);

          switch (o === void 0 ? 2 : o) {
            case 0:
              o = mc;
              break;

            case 1:
              o = vc;
              break;

            default:
              o = Sl;
          }

          n = o.bind(null, t, n, e), o = void 0, !pl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
          }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
          }) : e.addEventListener(t, n, !1);
        }

        function ts(e, t, n, r, o) {
          var l = r;
          if ((t & 1) == 0 && (t & 2) == 0 && r !== null) e: for (;;) {
            if (r === null) return;
            var i = r.tag;

            if (i === 3 || i === 4) {
              var u = r.stateNode.containerInfo;
              if (u === o || u.nodeType === 8 && u.parentNode === o) break;
              if (i === 4) for (i = r.return; i !== null;) {
                var s = i.tag;
                if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o)) return;
                i = i.return;
              }

              for (; u !== null;) {
                if (i = pt(u), i === null) return;

                if (s = i.tag, s === 5 || s === 6) {
                  r = l = i;
                  continue e;
                }

                u = u.parentNode;
              }
            }

            r = r.return;
          }
          Gf(function () {
            var p = l,
                y = il(n),
                E = [];

            e: {
              var h = Zu.get(e);

              if (h !== void 0) {
                var g = xl,
                    k = e;

                switch (e) {
                  case "keypress":
                    if (Tr(n) === 0) break e;

                  case "keydown":
                  case "keyup":
                    g = Oc;
                    break;

                  case "focusin":
                    k = "focus", g = Pl;
                    break;

                  case "focusout":
                    k = "blur", g = Pl;
                    break;

                  case "beforeblur":
                  case "afterblur":
                    g = Pl;
                    break;

                  case "click":
                    if (n.button === 2) break e;

                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    g = os;
                    break;

                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    g = wc;
                    break;

                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    g = Rc;
                    break;

                  case Xu:
                  case Yu:
                  case Gu:
                    g = Sc;
                    break;

                  case Ku:
                    g = zc;
                    break;

                  case "scroll":
                    g = gc;
                    break;

                  case "wheel":
                    g = Fc;
                    break;

                  case "copy":
                  case "cut":
                  case "paste":
                    g = xc;
                    break;

                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    g = is;
                }

                var S = (t & 4) != 0,
                    c = !S && e === "scroll",
                    a = S ? h !== null ? h + "Capture" : null : h;
                S = [];

                for (var f = p, d; f !== null;) {
                  d = f;
                  var m = d.stateNode;
                  if (d.tag === 5 && m !== null && (d = m, a !== null && (m = gn(f, a), m != null && S.push(Dn(f, m, d)))), c) break;
                  f = f.return;
                }

                0 < S.length && (h = new g(h, k, null, n, y), E.push({
                  event: h,
                  listeners: S
                }));
              }
            }

            if ((t & 7) == 0) {
              e: {
                if (h = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", h && (t & 16) == 0 && (k = n.relatedTarget || n.fromElement) && (pt(k) || k[Bt])) break e;

                if ((g || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (k = n.relatedTarget || n.toElement, g = p, k = k ? pt(k) : null, k !== null && (c = ct(k), k !== c || k.tag !== 5 && k.tag !== 6) && (k = null)) : (g = null, k = p), g !== k)) {
                  if (S = os, m = "onMouseLeave", a = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (S = is, m = "onPointerLeave", a = "onPointerEnter", f = "pointer"), c = g == null ? h : Ft(g), d = k == null ? h : Ft(k), h = new S(m, f + "leave", g, n, y), h.target = c, h.relatedTarget = d, m = null, pt(y) === p && (S = new S(a, f + "enter", k, n, y), S.target = d, S.relatedTarget = c, m = S), c = m, g && k) t: {
                    for (S = g, a = k, f = 0, d = S; d; d = At(d)) {
                      f++;
                    }

                    for (d = 0, m = a; m; m = At(m)) {
                      d++;
                    }

                    for (; 0 < f - d;) {
                      S = At(S), f--;
                    }

                    for (; 0 < d - f;) {
                      a = At(a), d--;
                    }

                    for (; f--;) {
                      if (S === a || a !== null && S === a.alternate) break t;
                      S = At(S), a = At(a);
                    }

                    S = null;
                  } else S = null;
                  g !== null && Os(E, h, g, S, !1), k !== null && c !== null && Os(E, c, k, S, !0);
                }
              }

              e: {
                if (h = p ? Ft(p) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file") var C = qc;else if (ps(h)) {
                  if (ms) C = Xc;else {
                    C = Jc;
                    var _ = $c;
                  }
                } else (g = h.nodeName) && g.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = Qc);

                if (C && (C = C(e, p))) {
                  ds(E, C, n, y);
                  break e;
                }

                _ && _(e, h, p), e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && Ko(h, "number", h.value);
              }

              switch (_ = p ? Ft(p) : window, e) {
                case "focusin":
                  (ps(_) || _.contentEditable === "true") && (Ut = _, Ll = p, On = null);
                  break;

                case "focusout":
                  On = Ll = Ut = null;
                  break;

                case "mousedown":
                  Dl = !0;
                  break;

                case "contextmenu":
                case "mouseup":
                case "dragend":
                  Dl = !1, Ss(E, n, y);
                  break;

                case "selectionchange":
                  if (Kc) break;

                case "keydown":
                case "keyup":
                  Ss(E, n, y);
              }

              var j;
              if (Nl) e: {
                switch (e) {
                  case "compositionstart":
                    var P = "onCompositionStart";
                    break e;

                  case "compositionend":
                    P = "onCompositionEnd";
                    break e;

                  case "compositionupdate":
                    P = "onCompositionUpdate";
                    break e;
                }

                P = void 0;
              } else It ? fs(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
              P && (us && n.locale !== "ko" && (It || P !== "onCompositionStart" ? P === "onCompositionEnd" && It && (j = ns()) : (He = y, El = "value" in He ? He.value : He.textContent, It = !0)), _ = Dr(p, P), 0 < _.length && (P = new ls(P, e, null, n, y), E.push({
                event: P,
                listeners: _
              }), j ? P.data = j : (j = cs(n), j !== null && (P.data = j)))), (j = Ac ? Bc(e, n) : Vc(e, n)) && (p = Dr(p, "onBeforeInput"), 0 < p.length && (y = new ls("onBeforeInput", "beforeinput", null, n, y), E.push({
                event: y,
                listeners: p
              }), y.data = j));
            }

            hs(E, t);
          });
        }

        function Dn(e, t, n) {
          return {
            instance: e,
            listener: t,
            currentTarget: n
          };
        }

        function Dr(e, t) {
          for (var n = t + "Capture", r = []; e !== null;) {
            var o = e,
                l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = gn(e, n), l != null && r.unshift(Dn(e, l, o)), l = gn(e, t), l != null && r.push(Dn(e, l, o))), e = e.return;
          }

          return r;
        }

        function At(e) {
          if (e === null) return null;

          do {
            e = e.return;
          } while (e && e.tag !== 5);

          return e || null;
        }

        function Os(e, t, n, r, o) {
          for (var l = t._reactName, i = []; n !== null && n !== r;) {
            var u = n,
                s = u.alternate,
                p = u.stateNode;
            if (s !== null && s === r) break;
            u.tag === 5 && p !== null && (u = p, o ? (s = gn(n, l), s != null && i.unshift(Dn(n, s, u))) : o || (s = gn(n, l), s != null && i.push(Dn(n, s, u)))), n = n.return;
          }

          i.length !== 0 && e.push({
            event: t,
            listeners: i
          });
        }

        function Ir() {}

        var Ml = null,
            zl = null;

        function Ls(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }

          return !1;
        }

        function Il(e, t) {
          return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || _typeof(t.dangerouslySetInnerHTML) == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }

        var Ds = typeof setTimeout == "function" ? setTimeout : void 0,
            Zc = typeof clearTimeout == "function" ? clearTimeout : void 0;

        function Fl(e) {
          e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
        }

        function Vt(e) {
          for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
          }

          return e;
        }

        function Rs(e) {
          e = e.previousSibling;

          for (var t = 0; e;) {
            if (e.nodeType === 8) {
              var n = e.data;

              if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
              } else n === "/$" && t++;
            }

            e = e.previousSibling;
          }

          return null;
        }

        var Ul = 0;

        function ep(e) {
          return {
            $$typeof: $o,
            toString: e,
            valueOf: e
          };
        }

        var Fr = Math.random().toString(36).slice(2),
            qe = "__reactFiber$" + Fr,
            Ur = "__reactProps$" + Fr,
            Bt = "__reactContainer$" + Fr,
            Ms = "__reactEvents$" + Fr;

        function pt(e) {
          var t = e[qe];
          if (t) return t;

          for (var n = e.parentNode; n;) {
            if (t = n[Bt] || n[qe]) {
              if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Rs(e); e !== null;) {
                if (n = e[qe]) return n;
                e = Rs(e);
              }
              return t;
            }

            e = n, n = e.parentNode;
          }

          return null;
        }

        function vn(e) {
          return e = e[qe] || e[Bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
        }

        function Ft(e) {
          if (e.tag === 5 || e.tag === 6) return e.stateNode;
          throw Error(v(33));
        }

        function _r(e) {
          return e[Ur] || null;
        }

        function bs(e) {
          var t = e[Ms];
          return t === void 0 && (t = e[Ms] = new Set()), t;
        }

        var Al = [],
            Wt = -1;

        function $e(e) {
          return {
            current: e
          };
        }

        function D(e) {
          0 > Wt || (e.current = Al[Wt], Al[Wt] = null, Wt--);
        }

        function M(e, t) {
          Wt++, Al[Wt] = e.current, e.current = t;
        }

        var Je = {},
            $ = $e(Je),
            ee = $e(!1),
            dt = Je;

        function Ht(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Je;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
          var o = {},
              l;

          for (l in n) {
            o[l] = t[l];
          }

          return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
        }

        function te(e) {
          return e = e.childContextTypes, e != null;
        }

        function Ar() {
          D(ee), D($);
        }

        function zs(e, t, n) {
          if ($.current !== Je) throw Error(v(168));
          M($, t), M(ee, n);
        }

        function Is(e, t, n) {
          var r = e.stateNode;
          if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
          r = r.getChildContext();

          for (var o in r) {
            if (!(o in e)) throw Error(v(108, Pt(t) || "Unknown", o));
          }

          return R({}, n, r);
        }

        function Br(e) {
          return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Je, dt = $.current, M($, e), M(ee, ee.current), !0;
        }

        function Fs(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(v(169));
          n ? (e = Is(e, t, dt), r.__reactInternalMemoizedMergedChildContext = e, D(ee), D($), M($, e)) : D(ee), M(ee, n);
        }

        var Bl = null,
            ht = null,
            tp = B.unstable_runWithPriority,
            Vl = B.unstable_scheduleCallback,
            Wl = B.unstable_cancelCallback,
            np = B.unstable_shouldYield,
            Us = B.unstable_requestPaint,
            Hl = B.unstable_now,
            rp = B.unstable_getCurrentPriorityLevel,
            Vr = B.unstable_ImmediatePriority,
            As = B.unstable_UserBlockingPriority,
            Bs = B.unstable_NormalPriority,
            Vs = B.unstable_LowPriority,
            Ws = B.unstable_IdlePriority,
            ql = {},
            op = Us !== void 0 ? Us : function () {},
            Ne = null,
            Wr = null,
            $l = !1,
            Hs = Hl(),
            J = 1e4 > Hs ? Hl : function () {
          return Hl() - Hs;
        };

        function qt() {
          switch (rp()) {
            case Vr:
              return 99;

            case As:
              return 98;

            case Bs:
              return 97;

            case Vs:
              return 96;

            case Ws:
              return 95;

            default:
              throw Error(v(332));
          }
        }

        function qs(e) {
          switch (e) {
            case 99:
              return Vr;

            case 98:
              return As;

            case 97:
              return Bs;

            case 96:
              return Vs;

            case 95:
              return Ws;

            default:
              throw Error(v(332));
          }
        }

        function mt(e, t) {
          return e = qs(e), tp(e, t);
        }

        function Rn(e, t, n) {
          return e = qs(e), Vl(e, t, n);
        }

        function ke() {
          if (Wr !== null) {
            var e = Wr;
            Wr = null, Wl(e);
          }

          $s();
        }

        function $s() {
          if (!$l && Ne !== null) {
            $l = !0;
            var e = 0;

            try {
              var t = Ne;
              mt(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];

                  do {
                    n = n(!0);
                  } while (n !== null);
                }
              }), Ne = null;
            } catch (n) {
              throw Ne !== null && (Ne = Ne.slice(e + 1)), Vl(Vr, ke), n;
            } finally {
              $l = !1;
            }
          }
        }

        var lp = st.ReactCurrentBatchConfig;

        function ve(e, t) {
          if (e && e.defaultProps) {
            t = R({}, t), e = e.defaultProps;

            for (var n in e) {
              t[n] === void 0 && (t[n] = e[n]);
            }

            return t;
          }

          return t;
        }

        var Hr = $e(null),
            qr = null,
            $t = null,
            $r = null;

        function Jl() {
          $r = $t = qr = null;
        }

        function Ql(e) {
          var t = Hr.current;
          D(Hr), e.type._context._currentValue = t;
        }

        function Js(e, t) {
          for (; e !== null;) {
            var n = e.alternate;

            if ((e.childLanes & t) === t) {
              if (n === null || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else e.childLanes |= t, n !== null && (n.childLanes |= t);

            e = e.return;
          }
        }

        function Jt(e, t) {
          qr = e, $r = $t = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) != 0 && (ge = !0), e.firstContext = null);
        }

        function ce(e, t) {
          if ($r !== e && t !== !1 && t !== 0) if ((typeof t != "number" || t === 1073741823) && ($r = e, t = 1073741823), t = {
            context: e,
            observedBits: t,
            next: null
          }, $t === null) {
            if (qr === null) throw Error(v(308));
            $t = t, qr.dependencies = {
              lanes: 0,
              firstContext: t,
              responders: null
            };
          } else $t = $t.next = t;
          return e._currentValue;
        }

        var Qe = !1;

        function Xl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null
            },
            effects: null
          };
        }

        function Qs(e, t) {
          e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
          });
        }

        function Xe(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
          };
        }

        function Ye(e, t) {
          if (e = e.updateQueue, e !== null) {
            e = e.shared;
            var n = e.pending;
            n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
          }
        }

        function Xs(e, t) {
          var n = e.updateQueue,
              r = e.alternate;

          if (r !== null && (r = r.updateQueue, n === r)) {
            var o = null,
                l = null;

            if (n = n.firstBaseUpdate, n !== null) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
                };
                l === null ? o = l = i : l = l.next = i, n = n.next;
              } while (n !== null);

              l === null ? o = l = t : l = l.next = t;
            } else o = l = t;

            n = {
              baseState: r.baseState,
              firstBaseUpdate: o,
              lastBaseUpdate: l,
              shared: r.shared,
              effects: r.effects
            }, e.updateQueue = n;
            return;
          }

          e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
        }

        function zn(e, t, n, r) {
          var o = e.updateQueue;
          Qe = !1;
          var l = o.firstBaseUpdate,
              i = o.lastBaseUpdate,
              u = o.shared.pending;

          if (u !== null) {
            o.shared.pending = null;
            var s = u,
                p = s.next;
            s.next = null, i === null ? l = p : i.next = p, i = s;
            var y = e.alternate;

            if (y !== null) {
              y = y.updateQueue;
              var E = y.lastBaseUpdate;
              E !== i && (E === null ? y.firstBaseUpdate = p : E.next = p, y.lastBaseUpdate = s);
            }
          }

          if (l !== null) {
            E = o.baseState, i = 0, y = p = s = null;

            do {
              u = l.lane;
              var h = l.eventTime;

              if ((r & u) === u) {
                y !== null && (y = y.next = {
                  eventTime: h,
                  lane: 0,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null
                });

                e: {
                  var g = e,
                      k = l;

                  switch (u = t, h = n, k.tag) {
                    case 1:
                      if (g = k.payload, typeof g == "function") {
                        E = g.call(h, E, u);
                        break e;
                      }

                      E = g;
                      break e;

                    case 3:
                      g.flags = g.flags & -4097 | 64;

                    case 0:
                      if (g = k.payload, u = typeof g == "function" ? g.call(h, E, u) : g, u == null) break e;
                      E = R({}, E, u);
                      break e;

                    case 2:
                      Qe = !0;
                  }
                }

                l.callback !== null && (e.flags |= 32, u = o.effects, u === null ? o.effects = [l] : u.push(l));
              } else h = {
                eventTime: h,
                lane: u,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
              }, y === null ? (p = y = h, s = E) : y = y.next = h, i |= u;

              if (l = l.next, l === null) {
                if (u = o.shared.pending, u === null) break;
                l = u.next, u.next = null, o.lastBaseUpdate = u, o.shared.pending = null;
              }
            } while (1);

            y === null && (s = E), o.baseState = s, o.firstBaseUpdate = p, o.lastBaseUpdate = y, Mn |= i, e.lanes = i, e.memoizedState = E;
          }
        }

        function Ys(e, t, n) {
          if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;

            if (o !== null) {
              if (r.callback = null, r = n, typeof o != "function") throw Error(v(191, o));
              o.call(r);
            }
          }
        }

        var Gs = new pr.Component().refs;

        function Jr(e, t, n, r) {
          t = e.memoizedState, n = n(r, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
        }

        var Qr = {
          isMounted: function isMounted(e) {
            return (e = e._reactInternals) ? ct(e) === e : !1;
          },
          enqueueSetState: function enqueueSetState(e, t, n) {
            e = e._reactInternals;
            var r = ie(),
                o = Ge(e),
                l = Xe(r, o);
            l.payload = t, n != null && (l.callback = n), Ye(e, l), Ke(e, o, r);
          },
          enqueueReplaceState: function enqueueReplaceState(e, t, n) {
            e = e._reactInternals;
            var r = ie(),
                o = Ge(e),
                l = Xe(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), Ye(e, l), Ke(e, o, r);
          },
          enqueueForceUpdate: function enqueueForceUpdate(e, t) {
            e = e._reactInternals;
            var n = ie(),
                r = Ge(e),
                o = Xe(n, r);
            o.tag = 2, t != null && (o.callback = t), Ye(e, o), Ke(e, r, n);
          }
        };

        function Ks(e, t, n, r, o, l, i) {
          return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Tn(n, r) || !Tn(o, l) : !0;
        }

        function Zs(e, t, n) {
          var r = !1,
              o = Je,
              l = t.contextType;
          return _typeof(l) == "object" && l !== null ? l = ce(l) : (o = te(t) ? dt : $.current, r = t.contextTypes, l = (r = r != null) ? Ht(e, o) : Je), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qr, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
        }

        function ea(e, t, n, r) {
          e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Qr.enqueueReplaceState(t, t.state, null);
        }

        function Yl(e, t, n, r) {
          var o = e.stateNode;
          o.props = n, o.state = e.memoizedState, o.refs = Gs, Xl(e);
          var l = t.contextType;
          _typeof(l) == "object" && l !== null ? o.context = ce(l) : (l = te(t) ? dt : $.current, o.context = Ht(e, l)), zn(e, n, o, r), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Jr(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Qr.enqueueReplaceState(o, o.state, null), zn(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4);
        }

        var Xr = Array.isArray;

        function In(e, t, n) {
          if (e = n.ref, e !== null && typeof e != "function" && _typeof(e) != "object") {
            if (n._owner) {
              if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(v(309));
                var r = n.stateNode;
              }

              if (!r) throw Error(v(147, e));
              var o = "" + e;
              return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function t(l) {
                var i = r.refs;
                i === Gs && (i = r.refs = {}), l === null ? delete i[o] : i[o] = l;
              }, t._stringRef = o, t);
            }

            if (typeof e != "string") throw Error(v(284));
            if (!n._owner) throw Error(v(290, e));
          }

          return e;
        }

        function Yr(e, t) {
          if (e.type !== "textarea") throw Error(v(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
        }

        function ta(e) {
          function t(c, a) {
            if (e) {
              var f = c.lastEffect;
              f !== null ? (f.nextEffect = a, c.lastEffect = a) : c.firstEffect = c.lastEffect = a, a.nextEffect = null, a.flags = 8;
            }
          }

          function n(c, a) {
            if (!e) return null;

            for (; a !== null;) {
              t(c, a), a = a.sibling;
            }

            return null;
          }

          function r(c, a) {
            for (c = new Map(); a !== null;) {
              a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
            }

            return c;
          }

          function o(c, a) {
            return c = Ze(c, a), c.index = 0, c.sibling = null, c;
          }

          function l(c, a, f) {
            return c.index = f, e ? (f = c.alternate, f !== null ? (f = f.index, f < a ? (c.flags = 2, a) : f) : (c.flags = 2, a)) : a;
          }

          function i(c) {
            return e && c.alternate === null && (c.flags = 2), c;
          }

          function u(c, a, f, d) {
            return a === null || a.tag !== 6 ? (a = Gl(f, c.mode, d), a.return = c, a) : (a = o(a, f), a.return = c, a);
          }

          function s(c, a, f, d) {
            return a !== null && a.elementType === f.type ? (d = o(a, f.props), d.ref = In(c, a, f), d.return = c, d) : (d = Gr(f.type, f.key, f.props, null, c.mode, d), d.ref = In(c, a, f), d.return = c, d);
          }

          function p(c, a, f, d) {
            return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = Kl(f, c.mode, d), a.return = c, a) : (a = o(a, f.children || []), a.return = c, a);
          }

          function y(c, a, f, d, m) {
            return a === null || a.tag !== 7 ? (a = Qt(f, c.mode, d, m), a.return = c, a) : (a = o(a, f), a.return = c, a);
          }

          function E(c, a, f) {
            if (typeof a == "string" || typeof a == "number") return a = Gl("" + a, c.mode, f), a.return = c, a;

            if (_typeof(a) == "object" && a !== null) {
              switch (a.$$typeof) {
                case an:
                  return f = Gr(a.type, a.key, a.props, null, c.mode, f), f.ref = In(c, null, a), f.return = c, f;

                case at:
                  return a = Kl(a, c.mode, f), a.return = c, a;
              }

              if (Xr(a) || pn(a)) return a = Qt(a, c.mode, f, null), a.return = c, a;
              Yr(c, a);
            }

            return null;
          }

          function h(c, a, f, d) {
            var m = a !== null ? a.key : null;
            if (typeof f == "string" || typeof f == "number") return m !== null ? null : u(c, a, "" + f, d);

            if (_typeof(f) == "object" && f !== null) {
              switch (f.$$typeof) {
                case an:
                  return f.key === m ? f.type === Fe ? y(c, a, f.props.children, d, m) : s(c, a, f, d) : null;

                case at:
                  return f.key === m ? p(c, a, f, d) : null;
              }

              if (Xr(f) || pn(f)) return m !== null ? null : y(c, a, f, d, null);
              Yr(c, f);
            }

            return null;
          }

          function g(c, a, f, d, m) {
            if (typeof d == "string" || typeof d == "number") return c = c.get(f) || null, u(a, c, "" + d, m);

            if (_typeof(d) == "object" && d !== null) {
              switch (d.$$typeof) {
                case an:
                  return c = c.get(d.key === null ? f : d.key) || null, d.type === Fe ? y(a, c, d.props.children, m, d.key) : s(a, c, d, m);

                case at:
                  return c = c.get(d.key === null ? f : d.key) || null, p(a, c, d, m);
              }

              if (Xr(d) || pn(d)) return c = c.get(f) || null, y(a, c, d, m, null);
              Yr(a, d);
            }

            return null;
          }

          function k(c, a, f, d) {
            for (var m = null, C = null, _ = a, j = a = 0, P = null; _ !== null && j < f.length; j++) {
              _.index > j ? (P = _, _ = null) : P = _.sibling;
              var b = h(c, _, f[j], d);

              if (b === null) {
                _ === null && (_ = P);
                break;
              }

              e && _ && b.alternate === null && t(c, _), a = l(b, a, j), C === null ? m = b : C.sibling = b, C = b, _ = P;
            }

            if (j === f.length) return n(c, _), m;

            if (_ === null) {
              for (; j < f.length; j++) {
                _ = E(c, f[j], d), _ !== null && (a = l(_, a, j), C === null ? m = _ : C.sibling = _, C = _);
              }

              return m;
            }

            for (_ = r(c, _); j < f.length; j++) {
              P = g(_, c, j, f[j], d), P !== null && (e && P.alternate !== null && _.delete(P.key === null ? j : P.key), a = l(P, a, j), C === null ? m = P : C.sibling = P, C = P);
            }

            return e && _.forEach(function (Me) {
              return t(c, Me);
            }), m;
          }

          function S(c, a, f, d) {
            var m = pn(f);
            if (typeof m != "function") throw Error(v(150));
            if (f = m.call(f), f == null) throw Error(v(151));

            for (var C = m = null, _ = a, j = a = 0, P = null, b = f.next(); _ !== null && !b.done; j++, b = f.next()) {
              _.index > j ? (P = _, _ = null) : P = _.sibling;
              var Me = h(c, _, b.value, d);

              if (Me === null) {
                _ === null && (_ = P);
                break;
              }

              e && _ && Me.alternate === null && t(c, _), a = l(Me, a, j), C === null ? m = Me : C.sibling = Me, C = Me, _ = P;
            }

            if (b.done) return n(c, _), m;

            if (_ === null) {
              for (; !b.done; j++, b = f.next()) {
                b = E(c, b.value, d), b !== null && (a = l(b, a, j), C === null ? m = b : C.sibling = b, C = b);
              }

              return m;
            }

            for (_ = r(c, _); !b.done; j++, b = f.next()) {
              b = g(_, c, j, b.value, d), b !== null && (e && b.alternate !== null && _.delete(b.key === null ? j : b.key), a = l(b, a, j), C === null ? m = b : C.sibling = b, C = b);
            }

            return e && _.forEach(function (Ef) {
              return t(c, Ef);
            }), m;
          }

          return function (c, a, f, d) {
            var m = _typeof(f) == "object" && f !== null && f.type === Fe && f.key === null;
            m && (f = f.props.children);
            var C = _typeof(f) == "object" && f !== null;
            if (C) switch (f.$$typeof) {
              case an:
                e: {
                  for (C = f.key, m = a; m !== null;) {
                    if (m.key === C) {
                      switch (m.tag) {
                        case 7:
                          if (f.type === Fe) {
                            n(c, m.sibling), a = o(m, f.props.children), a.return = c, c = a;
                            break e;
                          }

                          break;

                        default:
                          if (m.elementType === f.type) {
                            n(c, m.sibling), a = o(m, f.props), a.ref = In(c, m, f), a.return = c, c = a;
                            break e;
                          }

                      }

                      n(c, m);
                      break;
                    } else t(c, m);

                    m = m.sibling;
                  }

                  f.type === Fe ? (a = Qt(f.props.children, c.mode, d, f.key), a.return = c, c = a) : (d = Gr(f.type, f.key, f.props, null, c.mode, d), d.ref = In(c, a, f), d.return = c, c = d);
                }

                return i(c);

              case at:
                e: {
                  for (m = f.key; a !== null;) {
                    if (a.key === m) {
                      if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                        n(c, a.sibling), a = o(a, f.children || []), a.return = c, c = a;
                        break e;
                      } else {
                        n(c, a);
                        break;
                      }
                    } else t(c, a);
                    a = a.sibling;
                  }

                  a = Kl(f, c.mode, d), a.return = c, c = a;
                }

                return i(c);
            }
            if (typeof f == "string" || typeof f == "number") return f = "" + f, a !== null && a.tag === 6 ? (n(c, a.sibling), a = o(a, f), a.return = c, c = a) : (n(c, a), a = Gl(f, c.mode, d), a.return = c, c = a), i(c);
            if (Xr(f)) return k(c, a, f, d);
            if (pn(f)) return S(c, a, f, d);
            if (C && Yr(c, f), typeof f == "undefined" && !m) switch (c.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(v(152, Pt(c.type) || "Component"));
            }
            return n(c, a);
          };
        }

        var Kr = ta(!0),
            na = ta(!1),
            Fn = {},
            Se = $e(Fn),
            Un = $e(Fn),
            An = $e(Fn);

        function vt(e) {
          if (e === Fn) throw Error(v(174));
          return e;
        }

        function Zl(e, t) {
          switch (M(An, t), M(Un, e), M(Se, Fn), e = t.nodeType, e) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : rl(null, "");
              break;

            default:
              e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = rl(t, e);
          }

          D(Se), M(Se, t);
        }

        function Xt() {
          D(Se), D(Un), D(An);
        }

        function ra(e) {
          vt(An.current);
          var t = vt(Se.current),
              n = rl(t, e.type);
          t !== n && (M(Un, e), M(Se, n));
        }

        function ei(e) {
          Un.current === e && (D(Se), D(Un));
        }

        var z = $e(0);

        function Zr(e) {
          for (var t = e; t !== null;) {
            if (t.tag === 13) {
              var n = t.memoizedState;
              if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
              if ((t.flags & 64) != 0) return t;
            } else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }

            if (t === e) break;

            for (; t.sibling === null;) {
              if (t.return === null || t.return === e) return null;
              t = t.return;
            }

            t.sibling.return = t.return, t = t.sibling;
          }

          return null;
        }

        var Te = null,
            et = null,
            Ee = !1;

        function oa(e, t) {
          var n = pe(5, null, null, 0);
          n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
        }

        function la(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, !0) : !1;

            case 6:
              return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, !0) : !1;

            case 13:
              return !1;

            default:
              return !1;
          }
        }

        function ti(e) {
          if (Ee) {
            var t = et;

            if (t) {
              var n = t;

              if (!la(e, t)) {
                if (t = Vt(n.nextSibling), !t || !la(e, t)) {
                  e.flags = e.flags & -1025 | 2, Ee = !1, Te = e;
                  return;
                }

                oa(Te, n);
              }

              Te = e, et = Vt(t.firstChild);
            } else e.flags = e.flags & -1025 | 2, Ee = !1, Te = e;
          }
        }

        function ia(e) {
          for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) {
            e = e.return;
          }

          Te = e;
        }

        function eo(e) {
          if (e !== Te) return !1;
          if (!Ee) return ia(e), Ee = !0, !1;
          var t = e.type;
          if (e.tag !== 5 || t !== "head" && t !== "body" && !Il(t, e.memoizedProps)) for (t = et; t;) {
            oa(e, t), t = Vt(t.nextSibling);
          }

          if (ia(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));

            e: {
              for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                  var n = e.data;

                  if (n === "/$") {
                    if (t === 0) {
                      et = Vt(e.nextSibling);
                      break e;
                    }

                    t--;
                  } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                }

                e = e.nextSibling;
              }

              et = null;
            }
          } else et = Te ? Vt(e.stateNode.nextSibling) : null;

          return !0;
        }

        function ni() {
          et = Te = null, Ee = !1;
        }

        var Yt = [];

        function ri() {
          for (var e = 0; e < Yt.length; e++) {
            Yt[e]._workInProgressVersionPrimary = null;
          }

          Yt.length = 0;
        }

        var Bn = st.ReactCurrentDispatcher,
            de = st.ReactCurrentBatchConfig,
            Vn = 0,
            I = null,
            Q = null,
            W = null,
            to = !1,
            Wn = !1;

        function ne() {
          throw Error(v(321));
        }

        function oi(e, t) {
          if (t === null) return !1;

          for (var n = 0; n < t.length && n < e.length; n++) {
            if (!fe(e[n], t[n])) return !1;
          }

          return !0;
        }

        function li(e, t, n, r, o, l) {
          if (Vn = l, I = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bn.current = e === null || e.memoizedState === null ? ip : up, e = n(r, o), Wn) {
            l = 0;

            do {
              if (Wn = !1, !(25 > l)) throw Error(v(301));
              l += 1, W = Q = null, t.updateQueue = null, Bn.current = sp, e = n(r, o);
            } while (Wn);
          }

          if (Bn.current = no, t = Q !== null && Q.next !== null, Vn = 0, W = Q = I = null, to = !1, t) throw Error(v(300));
          return e;
        }

        function gt() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
          };
          return W === null ? I.memoizedState = W = e : W = W.next = e, W;
        }

        function yt() {
          if (Q === null) {
            var e = I.alternate;
            e = e !== null ? e.memoizedState : null;
          } else e = Q.next;

          var t = W === null ? I.memoizedState : W.next;
          if (t !== null) W = t, Q = e;else {
            if (e === null) throw Error(v(310));
            Q = e, e = {
              memoizedState: Q.memoizedState,
              baseState: Q.baseState,
              baseQueue: Q.baseQueue,
              queue: Q.queue,
              next: null
            }, W === null ? I.memoizedState = W = e : W = W.next = e;
          }
          return W;
        }

        function xe(e, t) {
          return typeof t == "function" ? t(e) : t;
        }

        function Hn(e) {
          var t = yt(),
              n = t.queue;
          if (n === null) throw Error(v(311));
          n.lastRenderedReducer = e;
          var r = Q,
              o = r.baseQueue,
              l = n.pending;

          if (l !== null) {
            if (o !== null) {
              var i = o.next;
              o.next = l.next, l.next = i;
            }

            r.baseQueue = o = l, n.pending = null;
          }

          if (o !== null) {
            o = o.next, r = r.baseState;
            var u = i = l = null,
                s = o;

            do {
              var p = s.lane;
              if ((Vn & p) === p) u !== null && (u = u.next = {
                lane: 0,
                action: s.action,
                eagerReducer: s.eagerReducer,
                eagerState: s.eagerState,
                next: null
              }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);else {
                var y = {
                  lane: p,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null
                };
                u === null ? (i = u = y, l = r) : u = u.next = y, I.lanes |= p, Mn |= p;
              }
              s = s.next;
            } while (s !== null && s !== o);

            u === null ? l = r : u.next = i, fe(r, t.memoizedState) || (ge = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
          }

          return [t.memoizedState, n.dispatch];
        }

        function qn(e) {
          var t = yt(),
              n = t.queue;
          if (n === null) throw Error(v(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
              o = n.pending,
              l = t.memoizedState;

          if (o !== null) {
            n.pending = null;
            var i = o = o.next;

            do {
              l = e(l, i.action), i = i.next;
            } while (i !== o);

            fe(l, t.memoizedState) || (ge = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
          }

          return [l, r];
        }

        function ua(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (o !== null ? e = o === r : (e = e.mutableReadLanes, (e = (Vn & e) === e) && (t._workInProgressVersionPrimary = r, Yt.push(t))), e) return n(t._source);
          throw Yt.push(t), Error(v(350));
        }

        function sa(e, t, n, r) {
          var o = Z;
          if (o === null) throw Error(v(349));
          var l = t._getVersion,
              i = l(t._source),
              u = Bn.current,
              s = u.useState(function () {
            return ua(o, t, n);
          }),
              p = s[1],
              y = s[0];
          s = W;
          var E = e.memoizedState,
              h = E.refs,
              g = h.getSnapshot,
              k = E.source;
          E = E.subscribe;
          var S = I;
          return e.memoizedState = {
            refs: h,
            source: t,
            subscribe: r
          }, u.useEffect(function () {
            h.getSnapshot = n, h.setSnapshot = p;
            var c = l(t._source);

            if (!fe(i, c)) {
              c = n(t._source), fe(y, c) || (p(c), c = Ge(S), o.mutableReadLanes |= c & o.pendingLanes), c = o.mutableReadLanes, o.entangledLanes |= c;

              for (var a = o.entanglements, f = c; 0 < f;) {
                var d = 31 - We(f),
                    m = 1 << d;
                a[d] |= c, f &= ~m;
              }
            }
          }, [n, t, r]), u.useEffect(function () {
            return r(t._source, function () {
              var c = h.getSnapshot,
                  a = h.setSnapshot;

              try {
                a(c(t._source));
                var f = Ge(S);
                o.mutableReadLanes |= f & o.pendingLanes;
              } catch (d) {
                a(function () {
                  throw d;
                });
              }
            });
          }, [t, r]), fe(g, n) && fe(k, t) && fe(E, r) || (e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: xe,
            lastRenderedState: y
          }, e.dispatch = p = ii.bind(null, I, e), s.queue = e, s.baseQueue = null, y = ua(o, t, n), s.memoizedState = s.baseState = y), y;
        }

        function aa(e, t, n) {
          var r = yt();
          return sa(r, e, t, n);
        }

        function $n(e) {
          var t = gt();
          return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: xe,
            lastRenderedState: e
          }, e = e.dispatch = ii.bind(null, I, e), [t.memoizedState, e];
        }

        function ro(e, t, n, r) {
          return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
          }, t = I.updateQueue, t === null ? (t = {
            lastEffect: null
          }, I.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
        }

        function fa(e) {
          var t = gt();
          return e = {
            current: e
          }, t.memoizedState = e;
        }

        function oo() {
          return yt().memoizedState;
        }

        function ui(e, t, n, r) {
          var o = gt();
          I.flags |= e, o.memoizedState = ro(1 | t, n, void 0, r === void 0 ? null : r);
        }

        function si(e, t, n, r) {
          var o = yt();
          r = r === void 0 ? null : r;
          var l = void 0;

          if (Q !== null) {
            var i = Q.memoizedState;

            if (l = i.destroy, r !== null && oi(r, i.deps)) {
              ro(t, n, l, r);
              return;
            }
          }

          I.flags |= e, o.memoizedState = ro(1 | t, n, l, r);
        }

        function ca(e, t) {
          return ui(516, 4, e, t);
        }

        function lo(e, t) {
          return si(516, 4, e, t);
        }

        function pa(e, t) {
          return si(4, 2, e, t);
        }

        function da(e, t) {
          if (typeof t == "function") return e = e(), t(e), function () {
            t(null);
          };
          if (t != null) return e = e(), t.current = e, function () {
            t.current = null;
          };
        }

        function ha(e, t, n) {
          return n = n != null ? n.concat([e]) : null, si(4, 2, da.bind(null, t, e), n);
        }

        function ai() {}

        function ma(e, t) {
          var n = yt();
          t = t === void 0 ? null : t;
          var r = n.memoizedState;
          return r !== null && t !== null && oi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
        }

        function va(e, t) {
          var n = yt();
          t = t === void 0 ? null : t;
          var r = n.memoizedState;
          return r !== null && t !== null && oi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
        }

        function ap(e, t) {
          var n = qt();
          mt(98 > n ? 98 : n, function () {
            e(!0);
          }), mt(97 < n ? 97 : n, function () {
            var r = de.transition;
            de.transition = 1;

            try {
              e(!1), t();
            } finally {
              de.transition = r;
            }
          });
        }

        function ii(e, t, n) {
          var r = ie(),
              o = Ge(e),
              l = {
            lane: o,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
          },
              i = t.pending;
          if (i === null ? l.next = l : (l.next = i.next, i.next = l), t.pending = l, i = e.alternate, e === I || i !== null && i === I) Wn = to = !0;else {
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
              var u = t.lastRenderedState,
                  s = i(u, n);
              if (l.eagerReducer = i, l.eagerState = s, fe(s, u)) return;
            } catch (p) {} finally {}
            Ke(e, o, r);
          }
        }

        var no = {
          readContext: ce,
          useCallback: ne,
          useContext: ne,
          useEffect: ne,
          useImperativeHandle: ne,
          useLayoutEffect: ne,
          useMemo: ne,
          useReducer: ne,
          useRef: ne,
          useState: ne,
          useDebugValue: ne,
          useDeferredValue: ne,
          useTransition: ne,
          useMutableSource: ne,
          useOpaqueIdentifier: ne,
          unstable_isNewReconciler: !1
        },
            ip = {
          readContext: ce,
          useCallback: function useCallback(e, t) {
            return gt().memoizedState = [e, t === void 0 ? null : t], e;
          },
          useContext: ce,
          useEffect: ca,
          useImperativeHandle: function useImperativeHandle(e, t, n) {
            return n = n != null ? n.concat([e]) : null, ui(4, 2, da.bind(null, t, e), n);
          },
          useLayoutEffect: function useLayoutEffect(e, t) {
            return ui(4, 2, e, t);
          },
          useMemo: function useMemo(e, t) {
            var n = gt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
          },
          useReducer: function useReducer(e, t, n) {
            var r = gt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
            }, e = e.dispatch = ii.bind(null, I, e), [r.memoizedState, e];
          },
          useRef: fa,
          useState: $n,
          useDebugValue: ai,
          useDeferredValue: function useDeferredValue(e) {
            var t = $n(e),
                n = t[0],
                r = t[1];
            return ca(function () {
              var o = de.transition;
              de.transition = 1;

              try {
                r(e);
              } finally {
                de.transition = o;
              }
            }, [e]), n;
          },
          useTransition: function useTransition() {
            var e = $n(!1),
                t = e[0];
            return e = ap.bind(null, e[1]), fa(e), [e, t];
          },
          useMutableSource: function useMutableSource(e, t, n) {
            var r = gt();
            return r.memoizedState = {
              refs: {
                getSnapshot: t,
                setSnapshot: null
              },
              source: e,
              subscribe: n
            }, sa(r, e, t, n);
          },
          useOpaqueIdentifier: function useOpaqueIdentifier() {
            if (Ee) {
              var e = !1,
                  t = ep(function () {
                throw e || (e = !0, n("r:" + (Ul++).toString(36))), Error(v(355));
              }),
                  n = $n(t)[1];
              return (I.mode & 2) == 0 && (I.flags |= 516, ro(5, function () {
                n("r:" + (Ul++).toString(36));
              }, void 0, null)), t;
            }

            return t = "r:" + (Ul++).toString(36), $n(t), t;
          },
          unstable_isNewReconciler: !1
        },
            up = {
          readContext: ce,
          useCallback: ma,
          useContext: ce,
          useEffect: lo,
          useImperativeHandle: ha,
          useLayoutEffect: pa,
          useMemo: va,
          useReducer: Hn,
          useRef: oo,
          useState: function useState() {
            return Hn(xe);
          },
          useDebugValue: ai,
          useDeferredValue: function useDeferredValue(e) {
            var t = Hn(xe),
                n = t[0],
                r = t[1];
            return lo(function () {
              var o = de.transition;
              de.transition = 1;

              try {
                r(e);
              } finally {
                de.transition = o;
              }
            }, [e]), n;
          },
          useTransition: function useTransition() {
            var e = Hn(xe)[0];
            return [oo().current, e];
          },
          useMutableSource: aa,
          useOpaqueIdentifier: function useOpaqueIdentifier() {
            return Hn(xe)[0];
          },
          unstable_isNewReconciler: !1
        },
            sp = {
          readContext: ce,
          useCallback: ma,
          useContext: ce,
          useEffect: lo,
          useImperativeHandle: ha,
          useLayoutEffect: pa,
          useMemo: va,
          useReducer: qn,
          useRef: oo,
          useState: function useState() {
            return qn(xe);
          },
          useDebugValue: ai,
          useDeferredValue: function useDeferredValue(e) {
            var t = qn(xe),
                n = t[0],
                r = t[1];
            return lo(function () {
              var o = de.transition;
              de.transition = 1;

              try {
                r(e);
              } finally {
                de.transition = o;
              }
            }, [e]), n;
          },
          useTransition: function useTransition() {
            var e = qn(xe)[0];
            return [oo().current, e];
          },
          useMutableSource: aa,
          useOpaqueIdentifier: function useOpaqueIdentifier() {
            return qn(xe)[0];
          },
          unstable_isNewReconciler: !1
        },
            fp = st.ReactCurrentOwner,
            ge = !1;

        function re(e, t, n, r) {
          t.child = e === null ? na(t, null, n, r) : Kr(t, e.child, n, r);
        }

        function ga(e, t, n, r, o) {
          n = n.render;
          var l = t.ref;
          return Jt(t, o), r = li(e, t, n, r, l, o), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, Oe(e, t, o)) : (t.flags |= 1, re(e, t, r, o), t.child);
        }

        function wa(e, t, n, r, o, l) {
          if (e === null) {
            var i = n.type;
            return typeof i == "function" && !fi(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ya(e, t, i, r, o, l)) : (e = Gr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
          }

          return i = e.child, (o & l) == 0 && (o = i.memoizedProps, n = n.compare, n = n !== null ? n : Tn, n(o, r) && e.ref === t.ref) ? Oe(e, t, l) : (t.flags |= 1, e = Ze(i, r), e.ref = t.ref, e.return = t, t.child = e);
        }

        function ya(e, t, n, r, o, l) {
          if (e !== null && Tn(e.memoizedProps, r) && e.ref === t.ref) if (ge = !1, (l & o) != 0) (e.flags & 16384) != 0 && (ge = !0);else return t.lanes = e.lanes, Oe(e, t, l);
          return ci(e, t, n, r, l);
        }

        function pi(e, t, n) {
          var r = t.pendingProps,
              o = r.children,
              l = e !== null ? e.memoizedState : null;
          if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") {
            if ((t.mode & 4) == 0) t.memoizedState = {
              baseLanes: 0
            }, io(t, n);else if ((n & 1073741824) != 0) t.memoizedState = {
              baseLanes: 0
            }, io(t, l !== null ? l.baseLanes : n);else return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
              baseLanes: e
            }, io(t, e), null;
          } else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, io(t, r);
          return re(e, t, o, n), t.child;
        }

        function _a(e, t) {
          var n = t.ref;
          (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
        }

        function ci(e, t, n, r, o) {
          var l = te(n) ? dt : $.current;
          return l = Ht(t, l), Jt(t, o), n = li(e, t, n, r, l, o), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, Oe(e, t, o)) : (t.flags |= 1, re(e, t, n, o), t.child);
        }

        function ka(e, t, n, r, o) {
          if (te(n)) {
            var l = !0;
            Br(t);
          } else l = !1;

          if (Jt(t, o), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), Zs(t, n, r), Yl(t, n, r, o), r = !0;else if (e === null) {
            var i = t.stateNode,
                u = t.memoizedProps;
            i.props = u;
            var s = i.context,
                p = n.contextType;
            _typeof(p) == "object" && p !== null ? p = ce(p) : (p = te(n) ? dt : $.current, p = Ht(t, p));
            var y = n.getDerivedStateFromProps,
                E = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            E || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== p) && ea(t, i, r, p), Qe = !1;
            var h = t.memoizedState;
            i.state = h, zn(t, r, i, o), s = t.memoizedState, u !== r || h !== s || ee.current || Qe ? (typeof y == "function" && (Jr(t, n, y, r), s = t.memoizedState), (u = Qe || Ks(t, n, u, r, h, s, p)) ? (E || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4)) : (typeof i.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = p, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4), r = !1);
          } else {
            i = t.stateNode, Qs(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : ve(t.type, u), i.props = p, E = t.pendingProps, h = i.context, s = n.contextType, _typeof(s) == "object" && s !== null ? s = ce(s) : (s = te(n) ? dt : $.current, s = Ht(t, s));
            var g = n.getDerivedStateFromProps;
            (y = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== E || h !== s) && ea(t, i, r, s), Qe = !1, h = t.memoizedState, i.state = h, zn(t, r, i, o);
            var k = t.memoizedState;
            u !== E || h !== k || ee.current || Qe ? (typeof g == "function" && (Jr(t, n, g, r), k = t.memoizedState), (p = Qe || Ks(t, n, p, r, h, k, s)) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), r = !1);
          }
          return di(e, t, n, r, l, o);
        }

        function di(e, t, n, r, o, l) {
          _a(e, t);

          var i = (t.flags & 64) != 0;
          if (!r && !i) return o && Fs(t, n, !1), Oe(e, t, l);
          r = t.stateNode, fp.current = t;
          var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
          return t.flags |= 1, e !== null && i ? (t.child = Kr(t, e.child, null, l), t.child = Kr(t, null, u, l)) : re(e, t, u, l), t.memoizedState = r.state, o && Fs(t, n, !0), t.child;
        }

        function Sa(e) {
          var t = e.stateNode;
          t.pendingContext ? zs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zs(e, t.context, !1), Zl(e, t.containerInfo);
        }

        var uo = {
          dehydrated: null,
          retryLane: 0
        };

        function ja(e, t, n) {
          var r = t.pendingProps,
              o = z.current,
              l = !1,
              i;
          return (i = (t.flags & 64) != 0) || (i = e !== null && e.memoizedState === null ? !1 : (o & 2) != 0), i ? (l = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (o |= 1), M(z, o & 1), e === null ? (r.fallback !== void 0 && ti(t), e = r.children, o = r.fallback, l ? (e = Ea(t, e, o, n), t.child.memoizedState = {
            baseLanes: n
          }, t.memoizedState = uo, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Ea(t, e, o, n), t.child.memoizedState = {
            baseLanes: n
          }, t.memoizedState = uo, t.lanes = 33554432, e) : (n = hi({
            mode: "visible",
            children: e
          }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? l ? (r = Ca(e, t, r.children, r.fallback, n), l = t.child, o = e.child.memoizedState, l.memoizedState = o === null ? {
            baseLanes: n
          } : {
            baseLanes: o.baseLanes | n
          }, l.childLanes = e.childLanes & ~n, t.memoizedState = uo, r) : (n = xa(e, t, r.children, n), t.memoizedState = null, n) : l ? (r = Ca(e, t, r.children, r.fallback, n), l = t.child, o = e.child.memoizedState, l.memoizedState = o === null ? {
            baseLanes: n
          } : {
            baseLanes: o.baseLanes | n
          }, l.childLanes = e.childLanes & ~n, t.memoizedState = uo, r) : (n = xa(e, t, r.children, n), t.memoizedState = null, n);
        }

        function Ea(e, t, n, r) {
          var o = e.mode,
              l = e.child;
          return t = {
            mode: "hidden",
            children: t
          }, (o & 2) == 0 && l !== null ? (l.childLanes = 0, l.pendingProps = t) : l = hi(t, o, 0, null), n = Qt(n, o, r, null), l.return = e, n.return = e, l.sibling = n, e.child = l, n;
        }

        function xa(e, t, n, r) {
          var o = e.child;
          return e = o.sibling, n = Ze(o, {
            mode: "visible",
            children: n
          }), (t.mode & 2) == 0 && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
        }

        function Ca(e, t, n, r, o) {
          var l = t.mode,
              i = e.child;
          e = i.sibling;
          var u = {
            mode: "hidden",
            children: n
          };
          return (l & 2) == 0 && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = u, i = n.lastEffect, i !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = i, i.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Ze(i, u), e !== null ? r = Ze(e, r) : (r = Qt(r, l, o, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
        }

        function ba(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          n !== null && (n.lanes |= t), Js(e.return, t);
        }

        function mi(e, t, n, r, o, l) {
          var i = e.memoizedState;
          i === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: o,
            lastEffect: l
          } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o, i.lastEffect = l);
        }

        function Pa(e, t, n) {
          var r = t.pendingProps,
              o = r.revealOrder,
              l = r.tail;
          if (re(e, t, r.children, n), r = z.current, (r & 2) != 0) r = r & 1 | 2, t.flags |= 64;else {
            if (e !== null && (e.flags & 64) != 0) e: for (e = t.child; e !== null;) {
              if (e.tag === 13) e.memoizedState !== null && ba(e, n);else if (e.tag === 19) ba(e, n);else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break e;

              for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return;
              }

              e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
          }
          if (M(z, r), (t.mode & 2) == 0) t.memoizedState = null;else switch (o) {
            case "forwards":
              for (n = t.child, o = null; n !== null;) {
                e = n.alternate, e !== null && Zr(e) === null && (o = n), n = n.sibling;
              }

              n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), mi(t, !1, o, n, l, t.lastEffect);
              break;

            case "backwards":
              for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Zr(e) === null) {
                  t.child = o;
                  break;
                }

                e = o.sibling, o.sibling = n, n = o, o = e;
              }

              mi(t, !0, n, null, l, t.lastEffect);
              break;

            case "together":
              mi(t, !1, null, null, void 0, t.lastEffect);
              break;

            default:
              t.memoizedState = null;
          }
          return t.child;
        }

        function Oe(e, t, n) {
          if (e !== null && (t.dependencies = e.dependencies), Mn |= t.lanes, (n & t.childLanes) != 0) {
            if (e !== null && t.child !== e.child) throw Error(v(153));

            if (t.child !== null) {
              for (e = t.child, n = Ze(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) {
                e = e.sibling, n = n.sibling = Ze(e, e.pendingProps), n.return = t;
              }

              n.sibling = null;
            }

            return t.child;
          }

          return null;
        }

        var Na, vi, Ta, Oa;

        Na = function Na(e, t) {
          for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);else if (n.tag !== 4 && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === t) break;

            for (; n.sibling === null;) {
              if (n.return === null || n.return === t) return;
              n = n.return;
            }

            n.sibling.return = n.return, n = n.sibling;
          }
        };

        vi = function vi() {};

        Ta = function Ta(e, t, n, r) {
          var o = e.memoizedProps;

          if (o !== r) {
            e = t.stateNode, vt(Se.current);
            var l = null;

            switch (n) {
              case "input":
                o = Go(e, o), r = Go(e, r), l = [];
                break;

              case "option":
                o = el(e, o), r = el(e, r), l = [];
                break;

              case "select":
                o = R({}, o, {
                  value: void 0
                }), r = R({}, r, {
                  value: void 0
                }), l = [];
                break;

              case "textarea":
                o = tl(e, o), r = tl(e, r), l = [];
                break;

              default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ir);
            }

            ol(n, r);
            var i;
            n = null;

            for (p in o) {
              if (!r.hasOwnProperty(p) && o.hasOwnProperty(p) && o[p] != null) if (p === "style") {
                var u = o[p];

                for (i in u) {
                  u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
                }
              } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (sn.hasOwnProperty(p) ? l || (l = []) : (l = l || []).push(p, null));
            }

            for (p in r) {
              var s = r[p];
              if (u = o != null ? o[p] : void 0, r.hasOwnProperty(p) && s !== u && (s != null || u != null)) if (p === "style") {
                if (u) {
                  for (i in u) {
                    !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                  }

                  for (i in s) {
                    s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
                  }
                } else n || (l || (l = []), l.push(p, n)), n = s;
              } else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (l = l || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (sn.hasOwnProperty(p) ? (s != null && p === "onScroll" && L("scroll", e), l || u === s || (l = [])) : _typeof(s) == "object" && s !== null && s.$$typeof === $o ? s.toString() : (l = l || []).push(p, s));
            }

            n && (l = l || []).push("style", n);
            var p = l;
            (t.updateQueue = p) && (t.flags |= 4);
          }
        };

        Oa = function Oa(e, t, n, r) {
          n !== r && (t.flags |= 4);
        };

        function Jn(e, t) {
          if (!Ee) switch (e.tailMode) {
            case "hidden":
              t = e.tail;

              for (var n = null; t !== null;) {
                t.alternate !== null && (n = t), t = t.sibling;
              }

              n === null ? e.tail = null : n.sibling = null;
              break;

            case "collapsed":
              n = e.tail;

              for (var r = null; n !== null;) {
                n.alternate !== null && (r = n), n = n.sibling;
              }

              r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
          }
        }

        function cp(e, t, n) {
          var r = t.pendingProps;

          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;

            case 1:
              return te(t.type) && Ar(), null;

            case 3:
              return Xt(), D(ee), D($), ri(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (eo(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), vi(t), null;

            case 5:
              ei(t);
              var o = vt(An.current);
              if (n = t.type, e !== null && t.stateNode != null) Ta(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);else {
                if (!r) {
                  if (t.stateNode === null) throw Error(v(166));
                  return null;
                }

                if (e = vt(Se.current), eo(t)) {
                  r = t.stateNode, n = t.type;
                  var l = t.memoizedProps;

                  switch (r[qe] = t, r[Ur] = l, n) {
                    case "dialog":
                      L("cancel", r), L("close", r);
                      break;

                    case "iframe":
                    case "object":
                    case "embed":
                      L("load", r);
                      break;

                    case "video":
                    case "audio":
                      for (e = 0; e < Ln.length; e++) {
                        L(Ln[e], r);
                      }

                      break;

                    case "source":
                      L("error", r);
                      break;

                    case "img":
                    case "image":
                    case "link":
                      L("error", r), L("load", r);
                      break;

                    case "details":
                      L("toggle", r);
                      break;

                    case "input":
                      Su(r, l), L("invalid", r);
                      break;

                    case "select":
                      r._wrapperState = {
                        wasMultiple: !!l.multiple
                      }, L("invalid", r);
                      break;

                    case "textarea":
                      Cu(r, l), L("invalid", r);
                  }

                  ol(n, l), e = null;

                  for (var i in l) {
                    l.hasOwnProperty(i) && (o = l[i], i === "children" ? typeof o == "string" ? r.textContent !== o && (e = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (e = ["children", "" + o]) : sn.hasOwnProperty(i) && o != null && i === "onScroll" && L("scroll", r));
                  }

                  switch (n) {
                    case "input":
                      gr(r), xu(r, l, !0);
                      break;

                    case "textarea":
                      gr(r), bu(r);
                      break;

                    case "select":
                    case "option":
                      break;

                    default:
                      typeof l.onClick == "function" && (r.onclick = Ir);
                  }

                  r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
                } else {
                  switch (i = o.nodeType === 9 ? o : o.ownerDocument, e === nl.html && (e = Pu(n)), e === nl.html ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script></script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                  }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[qe] = t, e[Ur] = r, Na(e, t, !1, !1), t.stateNode = e, i = ll(n, r), n) {
                    case "dialog":
                      L("cancel", e), L("close", e), o = r;
                      break;

                    case "iframe":
                    case "object":
                    case "embed":
                      L("load", e), o = r;
                      break;

                    case "video":
                    case "audio":
                      for (o = 0; o < Ln.length; o++) {
                        L(Ln[o], e);
                      }

                      o = r;
                      break;

                    case "source":
                      L("error", e), o = r;
                      break;

                    case "img":
                    case "image":
                    case "link":
                      L("error", e), L("load", e), o = r;
                      break;

                    case "details":
                      L("toggle", e), o = r;
                      break;

                    case "input":
                      Su(e, r), o = Go(e, r), L("invalid", e);
                      break;

                    case "option":
                      o = el(e, r);
                      break;

                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, o = R({}, r, {
                        value: void 0
                      }), L("invalid", e);
                      break;

                    case "textarea":
                      Cu(e, r), o = tl(e, r), L("invalid", e);
                      break;

                    default:
                      o = r;
                  }

                  ol(n, o);
                  var u = o;

                  for (l in u) {
                    if (u.hasOwnProperty(l)) {
                      var s = u[l];
                      l === "style" ? Ou(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Nu(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && hn(e, s) : typeof s == "number" && hn(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (sn.hasOwnProperty(l) ? s != null && l === "onScroll" && L("scroll", e) : s != null && Ao(e, l, s, i));
                    }
                  }

                  switch (n) {
                    case "input":
                      gr(e), xu(e, r, !1);
                      break;

                    case "textarea":
                      gr(e), bu(e);
                      break;

                    case "option":
                      r.value != null && e.setAttribute("value", "" + Ue(r.value));
                      break;

                    case "select":
                      e.multiple = !!r.multiple, l = r.value, l != null ? Nt(e, !!r.multiple, l, !1) : r.defaultValue != null && Nt(e, !!r.multiple, r.defaultValue, !0);
                      break;

                    default:
                      typeof o.onClick == "function" && (e.onclick = Ir);
                  }

                  Ls(n, r) && (t.flags |= 4);
                }

                t.ref !== null && (t.flags |= 128);
              }
              return null;

            case 6:
              if (e && t.stateNode != null) Oa(e, t, e.memoizedProps, r);else {
                if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
                n = vt(An.current), vt(Se.current), eo(t) ? (r = t.stateNode, n = t.memoizedProps, r[qe] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qe] = t, t.stateNode = r);
              }
              return null;

            case 13:
              return D(z), r = t.memoizedState, (t.flags & 64) != 0 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && eo(t) : n = e.memoizedState !== null, r && !n && (t.mode & 2) != 0 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || (z.current & 1) != 0 ? H === 0 && (H = 3) : ((H === 0 || H === 3) && (H = 4), Z === null || (Mn & 134217727) == 0 && (Gt & 134217727) == 0 || Kt(Z, X))), (r || n) && (t.flags |= 4), null);

            case 4:
              return Xt(), vi(t), e === null && Ts(t.stateNode.containerInfo), null;

            case 10:
              return Ql(t), null;

            case 17:
              return te(t.type) && Ar(), null;

            case 19:
              if (D(z), r = t.memoizedState, r === null) return null;
              if (l = (t.flags & 64) != 0, i = r.rendering, i === null) {
                if (l) Jn(r, !1);else {
                  if (H !== 0 || e !== null && (e.flags & 64) != 0) for (e = t.child; e !== null;) {
                    if (i = Zr(e), i !== null) {
                      for (t.flags |= 64, Jn(r, !1), l = i.updateQueue, l !== null && (t.updateQueue = l, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null;) {
                        l = n, e = r, l.flags &= 2, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                          lanes: e.lanes,
                          firstContext: e.firstContext
                        }), n = n.sibling;
                      }

                      return M(z, z.current & 1 | 2), t.child;
                    }

                    e = e.sibling;
                  }
                  r.tail !== null && J() > gi && (t.flags |= 64, l = !0, Jn(r, !1), t.lanes = 33554432);
                }
              } else {
                if (!l) if (e = Zr(i), e !== null) {
                  if (t.flags |= 64, l = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jn(r, !0), r.tail === null && r.tailMode === "hidden" && !i.alternate && !Ee) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
                } else 2 * J() - r.renderingStartTime > gi && n !== 1073741824 && (t.flags |= 64, l = !0, Jn(r, !1), t.lanes = 33554432);
                r.isBackwards ? (i.sibling = t.child, t.child = i) : (n = r.last, n !== null ? n.sibling = i : t.child = i, r.last = i);
              }
              return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = J(), n.sibling = null, t = z.current, M(z, l ? t & 1 | 2 : t & 1), n) : null;

            case 23:
            case 24:
              return yi(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
          }

          throw Error(v(156, t.tag));
        }

        function pp(e) {
          switch (e.tag) {
            case 1:
              te(e.type) && Ar();
              var t = e.flags;
              return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;

            case 3:
              if (Xt(), D(ee), D($), ri(), t = e.flags, (t & 64) != 0) throw Error(v(285));
              return e.flags = t & -4097 | 64, e;

            case 5:
              return ei(e), null;

            case 13:
              return D(z), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;

            case 19:
              return D(z), null;

            case 4:
              return Xt(), null;

            case 10:
              return Ql(e), null;

            case 23:
            case 24:
              return yi(), null;

            default:
              return null;
          }
        }

        function wi(e, t) {
          try {
            var n = "",
                r = t;

            do {
              n += $f(r), r = r.return;
            } while (r);

            var o = n;
          } catch (l) {
            o = "\nError generating stack: " + l.message + "\n" + l.stack;
          }

          return {
            value: e,
            source: t,
            stack: o
          };
        }

        function _i(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }

        var dp = typeof WeakMap == "function" ? WeakMap : Map;

        function La(e, t, n) {
          n = Xe(-1, n), n.tag = 3, n.payload = {
            element: null
          };
          var r = t.value;
          return n.callback = function () {
            so || (so = !0, ki = r), _i(e, t);
          }, n;
        }

        function Da(e, t, n) {
          n = Xe(-1, n), n.tag = 3;
          var r = e.type.getDerivedStateFromError;

          if (typeof r == "function") {
            var o = t.value;

            n.payload = function () {
              return _i(e, t), r(o);
            };
          }

          var l = e.stateNode;
          return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function () {
            typeof r != "function" && (Ce === null ? Ce = new Set([this]) : Ce.add(this), _i(e, t));
            var i = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: i !== null ? i : ""
            });
          }), n;
        }

        var hp = typeof WeakSet == "function" ? WeakSet : Set;

        function Ra(e) {
          var t = e.ref;
          if (t !== null) if (typeof t == "function") try {
            t(null);
          } catch (n) {
            tt(e, n);
          } else t.current = null;
        }

        function mp(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              return;

            case 1:
              if (t.flags & 256 && e !== null) {
                var n = e.memoizedProps,
                    r = e.memoizedState;
                e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : ve(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
              }

              return;

            case 3:
              t.flags & 256 && Fl(t.stateNode.containerInfo);
              return;

            case 5:
            case 6:
            case 4:
            case 17:
              return;
          }

          throw Error(v(163));
        }

        function gp(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                e = t = t.next;

                do {
                  if ((e.tag & 3) == 3) {
                    var r = e.create;
                    e.destroy = r();
                  }

                  e = e.next;
                } while (e !== t);
              }

              if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                e = t = t.next;

                do {
                  var o = e;
                  r = o.next, o = o.tag, (o & 4) != 0 && (o & 1) != 0 && (Ma(n, e), vp(n, e)), e = r;
                } while (e !== t);
              }

              return;

            case 1:
              e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : ve(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), t = n.updateQueue, t !== null && Ys(n, t, e);
              return;

            case 3:
              if (t = n.updateQueue, t !== null) {
                if (e = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;

                  case 1:
                    e = n.child.stateNode;
                }
                Ys(n, t, e);
              }

              return;

            case 5:
              e = n.stateNode, t === null && n.flags & 4 && Ls(n.type, n.memoizedProps) && e.focus();
              return;

            case 6:
              return;

            case 4:
              return;

            case 12:
              return;

            case 13:
              n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && Ju(n))));
              return;

            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
          }

          throw Error(v(163));
        }

        function za(e, t) {
          for (var n = e;;) {
            if (n.tag === 5) {
              var r = n.stateNode;
              if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                o = o != null && o.hasOwnProperty("display") ? o.display : null, r.style.display = Tu("display", o);
              }
            } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;else if ((n.tag !== 23 && n.tag !== 24 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }

            if (n === e) break;

            for (; n.sibling === null;) {
              if (n.return === null || n.return === e) return;
              n = n.return;
            }

            n.sibling.return = n.return, n = n.sibling;
          }
        }

        function Fa(e, t) {
          if (ht && typeof ht.onCommitFiberUnmount == "function") try {
            ht.onCommitFiberUnmount(Bl, t);
          } catch (l) {}

          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                var n = e = e.next;

                do {
                  var r = n,
                      o = r.destroy;
                  if (r = r.tag, o !== void 0) if ((r & 4) != 0) Ma(t, n);else {
                    r = t;

                    try {
                      o();
                    } catch (l) {
                      tt(r, l);
                    }
                  }
                  n = n.next;
                } while (n !== e);
              }

              break;

            case 1:
              if (Ra(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
              } catch (l) {
                tt(t, l);
              }
              break;

            case 5:
              Ra(t);
              break;

            case 4:
              Ia(e, t);
          }
        }

        function Ua(e) {
          e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
        }

        function Aa(e) {
          return e.tag === 5 || e.tag === 3 || e.tag === 4;
        }

        function Ba(e) {
          e: {
            for (var t = e.return; t !== null;) {
              if (Aa(t)) break e;
              t = t.return;
            }

            throw Error(v(160));
          }

          var n = t;

          switch (t = n.stateNode, n.tag) {
            case 5:
              var r = !1;
              break;

            case 3:
              t = t.containerInfo, r = !0;
              break;

            case 4:
              t = t.containerInfo, r = !0;
              break;

            default:
              throw Error(v(161));
          }

          n.flags & 16 && (hn(t, ""), n.flags &= -17);

          e: t: for (n = e;;) {
            for (; n.sibling === null;) {
              if (n.return === null || Aa(n.return)) {
                n = null;
                break e;
              }

              n = n.return;
            }

            for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
              if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
              n.child.return = n, n = n.child;
            }

            if (!(n.flags & 2)) {
              n = n.stateNode;
              break e;
            }
          }

          r ? Si(e, n, t) : Ei(e, n, t);
        }

        function Si(e, t, n) {
          var r = e.tag,
              o = r === 5 || r === 6;
          if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ir));else if (r !== 4 && (e = e.child, e !== null)) for (Si(e, t, n), e = e.sibling; e !== null;) {
            Si(e, t, n), e = e.sibling;
          }
        }

        function Ei(e, t, n) {
          var r = e.tag,
              o = r === 5 || r === 6;
          if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);else if (r !== 4 && (e = e.child, e !== null)) for (Ei(e, t, n), e = e.sibling; e !== null;) {
            Ei(e, t, n), e = e.sibling;
          }
        }

        function Ia(e, t) {
          for (var n = t, r = !1, o, l;;) {
            if (!r) {
              r = n.return;

              e: for (;;) {
                if (r === null) throw Error(v(160));

                switch (o = r.stateNode, r.tag) {
                  case 5:
                    l = !1;
                    break e;

                  case 3:
                    o = o.containerInfo, l = !0;
                    break e;

                  case 4:
                    o = o.containerInfo, l = !0;
                    break e;
                }

                r = r.return;
              }

              r = !0;
            }

            if (n.tag === 5 || n.tag === 6) {
              e: for (var i = e, u = n, s = u;;) {
                if (Fa(i, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;else {
                  if (s === u) break e;

                  for (; s.sibling === null;) {
                    if (s.return === null || s.return === u) break e;
                    s = s.return;
                  }

                  s.sibling.return = s.return, s = s.sibling;
                }
              }

              l ? (i = o, u = n.stateNode, i.nodeType === 8 ? i.parentNode.removeChild(u) : i.removeChild(u)) : o.removeChild(n.stateNode);
            } else if (n.tag === 4) {
              if (n.child !== null) {
                o = n.stateNode.containerInfo, l = !0, n.child.return = n, n = n.child;
                continue;
              }
            } else if (Fa(e, n), n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }

            if (n === t) break;

            for (; n.sibling === null;) {
              if (n.return === null || n.return === t) return;
              n = n.return, n.tag === 4 && (r = !1);
            }

            n.sibling.return = n.return, n = n.sibling;
          }
        }

        function Ci(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;

              if (n = n !== null ? n.lastEffect : null, n !== null) {
                var r = n = n.next;

                do {
                  (r.tag & 3) == 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
                } while (r !== n);
              }

              return;

            case 1:
              return;

            case 5:
              if (n = t.stateNode, n != null) {
                r = t.memoizedProps;
                var o = e !== null ? e.memoizedProps : r;
                e = t.type;
                var l = t.updateQueue;

                if (t.updateQueue = null, l !== null) {
                  for (n[Ur] = r, e === "input" && r.type === "radio" && r.name != null && Eu(n, r), ll(e, o), t = ll(e, r), o = 0; o < l.length; o += 2) {
                    var i = l[o],
                        u = l[o + 1];
                    i === "style" ? Ou(n, u) : i === "dangerouslySetInnerHTML" ? Nu(n, u) : i === "children" ? hn(n, u) : Ao(n, i, u, t);
                  }

                  switch (e) {
                    case "input":
                      Zo(n, r);
                      break;

                    case "textarea":
                      ju(n, r);
                      break;

                    case "select":
                      e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, l = r.value, l != null ? Nt(n, !!r.multiple, l, !1) : e !== !!r.multiple && (r.defaultValue != null ? Nt(n, !!r.multiple, r.defaultValue, !0) : Nt(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }

              return;

            case 6:
              if (t.stateNode === null) throw Error(v(162));
              t.stateNode.nodeValue = t.memoizedProps;
              return;

            case 3:
              n = t.stateNode, n.hydrate && (n.hydrate = !1, Ju(n.containerInfo));
              return;

            case 12:
              return;

            case 13:
              t.memoizedState !== null && (xi = J(), za(t.child, !0)), Va(t);
              return;

            case 19:
              Va(t);
              return;

            case 17:
              return;

            case 23:
            case 24:
              za(t, t.memoizedState !== null);
              return;
          }

          throw Error(v(163));
        }

        function Va(e) {
          var t = e.updateQueue;

          if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new hp()), t.forEach(function (r) {
              var o = yp.bind(null, e, r);
              n.has(r) || (n.add(r), r.then(o, o));
            });
          }
        }

        function wp(e, t) {
          return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
        }

        var _p = Math.ceil,
            ao = st.ReactCurrentDispatcher,
            ji = st.ReactCurrentOwner,
            x = 0,
            Z = null,
            U = null,
            X = 0,
            wt = 0,
            bi = $e(0),
            H = 0,
            fo = null,
            Zt = 0,
            Mn = 0,
            Gt = 0,
            Pi = 0,
            Ni = null,
            xi = 0,
            gi = Infinity;

        function en() {
          gi = J() + 500;
        }

        var w = null,
            so = !1,
            ki = null,
            Ce = null,
            nt = !1,
            Qn = null,
            Xn = 90,
            Ti = [],
            Oi = [],
            Le = null,
            Yn = 0,
            Li = null,
            co = -1,
            De = 0,
            po = 0,
            Gn = null,
            ho = !1;

        function ie() {
          return (x & 48) != 0 ? J() : co !== -1 ? co : co = J();
        }

        function Ge(e) {
          if (e = e.mode, (e & 2) == 0) return 1;
          if ((e & 4) == 0) return qt() === 99 ? 1 : 2;

          if (De === 0 && (De = Zt), lp.transition !== 0) {
            po !== 0 && (po = Ni !== null ? Ni.pendingLanes : 0), e = De;
            var t = 4186112 & ~po;
            return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
          }

          return e = qt(), (x & 4) != 0 && e === 98 ? e = jr(12, De) : (e = sc(e), e = jr(e, De)), e;
        }

        function Ke(e, t, n) {
          if (50 < Yn) throw Yn = 0, Li = null, Error(v(185));
          if (e = mo(e, t), e === null) return null;
          br(e, t, n), e === Z && (Gt |= t, H === 4 && Kt(e, X));
          var r = qt();
          t === 1 ? (x & 8) != 0 && (x & 48) == 0 ? Di(e) : (he(e, n), x === 0 && (en(), ke())) : ((x & 4) == 0 || r !== 98 && r !== 99 || (Le === null ? Le = new Set([e]) : Le.add(e)), he(e, n)), Ni = e;
        }

        function mo(e, t) {
          e.lanes |= t;
          var n = e.alternate;

          for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) {
            e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
          }

          return n.tag === 3 ? n.stateNode : null;
        }

        function he(e, t) {
          for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
            var u = 31 - We(i),
                s = 1 << u,
                p = l[u];

            if (p === -1) {
              if ((s & r) == 0 || (s & o) != 0) {
                p = t, Rt(s);
                var y = O;
                l[u] = 10 <= y ? p + 250 : 6 <= y ? p + 5e3 : -1;
              }
            } else p <= t && (e.expiredLanes |= s);

            i &= ~s;
          }

          if (r = xn(e, e === Z ? X : 0), t = O, r === 0) n !== null && (n !== ql && Wl(n), e.callbackNode = null, e.callbackPriority = 0);else {
            if (n !== null) {
              if (e.callbackPriority === t) return;
              n !== ql && Wl(n);
            }

            t === 15 ? (n = Di.bind(null, e), Ne === null ? (Ne = [n], Wr = Vl(Vr, $s)) : Ne.push(n), n = ql) : t === 14 ? n = Rn(99, Di.bind(null, e)) : (n = ac(t), n = Rn(n, Wa.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
          }
        }

        function Wa(e) {
          if (co = -1, po = De = 0, (x & 48) != 0) throw Error(v(327));
          var t = e.callbackNode;
          if (rt() && e.callbackNode !== t) return null;
          var n = xn(e, e === Z ? X : 0);
          if (n === 0) return null;
          var r = n,
              o = x;
          x |= 16;
          var l = qa();
          (Z !== e || X !== r) && (en(), tn(e, r));

          do {
            try {
              kp();
              break;
            } catch (u) {
              Ha(e, u);
            }
          } while (1);

          if (Jl(), ao.current = l, x = o, U !== null ? r = 0 : (Z = null, X = 0, r = H), (Zt & Gt) != 0) tn(e, 0);else if (r !== 0) {
            if (r === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, Fl(e.containerInfo)), n = es(e), n !== 0 && (r = Kn(e, n))), r === 1) throw t = fo, tn(e, 0), Kt(e, n), he(e, J()), t;

            switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
              case 0:
              case 1:
                throw Error(v(345));

              case 2:
                _t(e);

                break;

              case 3:
                if (Kt(e, n), (n & 62914560) === n && (r = xi + 500 - J(), 10 < r)) {
                  if (xn(e, 0) !== 0) break;

                  if (o = e.suspendedLanes, (o & n) !== n) {
                    ie(), e.pingedLanes |= e.suspendedLanes & o;
                    break;
                  }

                  e.timeoutHandle = Ds(_t.bind(null, e), r);
                  break;
                }

                _t(e);

                break;

              case 4:
                if (Kt(e, n), (n & 4186112) === n) break;

                for (r = e.eventTimes, o = -1; 0 < n;) {
                  var i = 31 - We(n);
                  l = 1 << i, i = r[i], i > o && (o = i), n &= ~l;
                }

                if (n = o, n = J() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * _p(n / 1960)) - n, 10 < n) {
                  e.timeoutHandle = Ds(_t.bind(null, e), n);
                  break;
                }

                _t(e);

                break;

              case 5:
                _t(e);

                break;

              default:
                throw Error(v(329));
            }
          }
          return he(e, J()), e.callbackNode === t ? Wa.bind(null, e) : null;
        }

        function Kt(e, t) {
          for (t &= ~Pi, t &= ~Gt, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - We(t),
                r = 1 << n;
            e[n] = -1, t &= ~r;
          }
        }

        function Di(e) {
          if ((x & 48) != 0) throw Error(v(327));

          if (rt(), e === Z && (e.expiredLanes & X) != 0) {
            var t = X,
                n = Kn(e, t);
            (Zt & Gt) != 0 && (t = xn(e, t), n = Kn(e, t));
          } else t = xn(e, 0), n = Kn(e, t);

          if (e.tag !== 0 && n === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, Fl(e.containerInfo)), t = es(e), t !== 0 && (n = Kn(e, t))), n === 1) throw n = fo, tn(e, 0), Kt(e, t), he(e, J()), n;
          return e.finishedWork = e.current.alternate, e.finishedLanes = t, _t(e), he(e, J()), null;
        }

        function Sp() {
          if (Le !== null) {
            var e = Le;
            Le = null, e.forEach(function (t) {
              t.expiredLanes |= 24 & t.pendingLanes, he(t, J());
            });
          }

          ke();
        }

        function $a(e, t) {
          var n = x;
          x |= 1;

          try {
            return e(t);
          } finally {
            x = n, x === 0 && (en(), ke());
          }
        }

        function Ja(e, t) {
          var n = x;
          x &= -2, x |= 8;

          try {
            return e(t);
          } finally {
            x = n, x === 0 && (en(), ke());
          }
        }

        function io(e, t) {
          M(bi, wt), wt |= t, Zt |= t;
        }

        function yi() {
          wt = bi.current, D(bi);
        }

        function tn(e, t) {
          e.finishedWork = null, e.finishedLanes = 0;
          var n = e.timeoutHandle;
          if (n !== -1 && (e.timeoutHandle = -1, Zc(n)), U !== null) for (n = U.return; n !== null;) {
            var r = n;

            switch (r.tag) {
              case 1:
                r = r.type.childContextTypes, r != null && Ar();
                break;

              case 3:
                Xt(), D(ee), D($), ri();
                break;

              case 5:
                ei(r);
                break;

              case 4:
                Xt();
                break;

              case 13:
                D(z);
                break;

              case 19:
                D(z);
                break;

              case 10:
                Ql(r);
                break;

              case 23:
              case 24:
                yi();
            }

            n = n.return;
          }
          Z = e, U = Ze(e.current, null), X = wt = Zt = t, H = 0, fo = null, Pi = Gt = Mn = 0;
        }

        function Ha(e, t) {
          do {
            var n = U;

            try {
              if (Jl(), Bn.current = no, to) {
                for (var r = I.memoizedState; r !== null;) {
                  var o = r.queue;
                  o !== null && (o.pending = null), r = r.next;
                }

                to = !1;
              }

              if (Vn = 0, W = Q = I = null, Wn = !1, ji.current = null, n === null || n.return === null) {
                H = 1, fo = t, U = null;
                break;
              }

              e: {
                var l = e,
                    i = n.return,
                    u = n,
                    s = t;

                if (t = X, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && _typeof(s) == "object" && typeof s.then == "function") {
                  var p = s;

                  if ((u.mode & 2) == 0) {
                    var y = u.alternate;
                    y ? (u.updateQueue = y.updateQueue, u.memoizedState = y.memoizedState, u.lanes = y.lanes) : (u.updateQueue = null, u.memoizedState = null);
                  }

                  var E = (z.current & 1) != 0,
                      h = i;

                  do {
                    var g;

                    if (g = h.tag === 13) {
                      var k = h.memoizedState;
                      if (k !== null) g = k.dehydrated !== null;else {
                        var S = h.memoizedProps;
                        g = S.fallback === void 0 ? !1 : S.unstable_avoidThisFallback !== !0 ? !0 : !E;
                      }
                    }

                    if (g) {
                      var c = h.updateQueue;

                      if (c === null) {
                        var a = new Set();
                        a.add(p), h.updateQueue = a;
                      } else c.add(p);

                      if ((h.mode & 2) == 0) {
                        if (h.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) if (u.alternate === null) u.tag = 17;else {
                          var f = Xe(-1, 1);
                          f.tag = 2, Ye(u, f);
                        }
                        u.lanes |= 1;
                        break e;
                      }

                      s = void 0, u = t;
                      var d = l.pingCache;

                      if (d === null ? (d = l.pingCache = new dp(), s = new Set(), d.set(p, s)) : (s = d.get(p), s === void 0 && (s = new Set(), d.set(p, s))), !s.has(u)) {
                        s.add(u);
                        var m = Ep.bind(null, l, p, u);
                        p.then(m, m);
                      }

                      h.flags |= 4096, h.lanes = t;
                      break e;
                    }

                    h = h.return;
                  } while (h !== null);

                  s = Error((Pt(u.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
                }

                H !== 5 && (H = 2), s = wi(s, u), h = i;

                do {
                  switch (h.tag) {
                    case 3:
                      l = s, h.flags |= 4096, t &= -t, h.lanes |= t;
                      var C = La(h, l, t);
                      Xs(h, C);
                      break e;

                    case 1:
                      l = s;
                      var _ = h.type,
                          j = h.stateNode;

                      if ((h.flags & 64) == 0 && (typeof _.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (Ce === null || !Ce.has(j)))) {
                        h.flags |= 4096, t &= -t, h.lanes |= t;
                        var P = Da(h, l, t);
                        Xs(h, P);
                        break e;
                      }

                  }

                  h = h.return;
                } while (h !== null);
              }

              Qa(n);
            } catch (b) {
              t = b, U === n && n !== null && (U = n = n.return);
              continue;
            }

            break;
          } while (1);
        }

        function qa() {
          var e = ao.current;
          return ao.current = no, e === null ? no : e;
        }

        function Kn(e, t) {
          var n = x;
          x |= 16;
          var r = qa();
          Z === e && X === t || tn(e, t);

          do {
            try {
              xp();
              break;
            } catch (o) {
              Ha(e, o);
            }
          } while (1);

          if (Jl(), x = n, ao.current = r, U !== null) throw Error(v(261));
          return Z = null, X = 0, H;
        }

        function xp() {
          for (; U !== null;) {
            Xa(U);
          }
        }

        function kp() {
          for (; U !== null && !np();) {
            Xa(U);
          }
        }

        function Xa(e) {
          var t = Ya(e.alternate, e, wt);
          e.memoizedProps = e.pendingProps, t === null ? Qa(e) : U = t, ji.current = null;
        }

        function Qa(e) {
          var t = e;

          do {
            var n = t.alternate;

            if (e = t.return, (t.flags & 2048) == 0) {
              if (n = cp(n, t, wt), n !== null) {
                U = n;
                return;
              }

              if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || (wt & 1073741824) != 0 || (n.mode & 4) == 0) {
                for (var r = 0, o = n.child; o !== null;) {
                  r |= o.lanes | o.childLanes, o = o.sibling;
                }

                n.childLanes = r;
              }

              e !== null && (e.flags & 2048) == 0 && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
            } else {
              if (n = pp(t), n !== null) {
                n.flags &= 2047, U = n;
                return;
              }

              e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
            }

            if (t = t.sibling, t !== null) {
              U = t;
              return;
            }

            U = t = e;
          } while (t !== null);

          H === 0 && (H = 5);
        }

        function _t(e) {
          var t = qt();
          return mt(99, Cp.bind(null, e, t)), null;
        }

        function Cp(e, t) {
          do {
            rt();
          } while (Qn !== null);

          if ((x & 48) != 0) throw Error(v(327));
          var n = e.finishedWork;
          if (n === null) return null;
          if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(v(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
              o = r,
              l = e.pendingLanes & ~o;
          e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= o, e.mutableReadLanes &= o, e.entangledLanes &= o, o = e.entanglements;

          for (var i = e.eventTimes, u = e.expirationTimes; 0 < l;) {
            var s = 31 - We(l),
                p = 1 << s;
            o[s] = 0, i[s] = -1, u[s] = -1, l &= ~p;
          }

          if (Le !== null && (r & 24) == 0 && Le.has(e) && Le.delete(e), e === Z && (U = Z = null, X = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
            if (o = x, x |= 32, ji.current = null, Ml = Pr, i = ks(), Ol(i)) {
              if ("selectionStart" in i) u = {
                start: i.selectionStart,
                end: i.selectionEnd
              };else e: if (u = (u = i.ownerDocument) && u.defaultView || window, (p = u.getSelection && u.getSelection()) && p.rangeCount !== 0) {
                u = p.anchorNode, l = p.anchorOffset, s = p.focusNode, p = p.focusOffset;

                try {
                  u.nodeType, s.nodeType;
                } catch (b) {
                  u = null;
                  break e;
                }

                var y = 0,
                    E = -1,
                    h = -1,
                    g = 0,
                    k = 0,
                    S = i,
                    c = null;

                t: for (;;) {
                  for (var a; S !== u || l !== 0 && S.nodeType !== 3 || (E = y + l), S !== s || p !== 0 && S.nodeType !== 3 || (h = y + p), S.nodeType === 3 && (y += S.nodeValue.length), (a = S.firstChild) !== null;) {
                    c = S, S = a;
                  }

                  for (;;) {
                    if (S === i) break t;
                    if (c === u && ++g === l && (E = y), c === s && ++k === p && (h = y), (a = S.nextSibling) !== null) break;
                    S = c, c = S.parentNode;
                  }

                  S = a;
                }

                u = E === -1 || h === -1 ? null : {
                  start: E,
                  end: h
                };
              } else u = null;
              u = u || {
                start: 0,
                end: 0
              };
            } else u = null;

            zl = {
              focusedElem: i,
              selectionRange: u
            }, Pr = !1, Gn = null, ho = !1, w = r;

            do {
              try {
                jp();
              } catch (b) {
                if (w === null) throw Error(v(330));
                tt(w, b), w = w.nextEffect;
              }
            } while (w !== null);

            Gn = null, w = r;

            do {
              try {
                for (i = e; w !== null;) {
                  var f = w.flags;

                  if (f & 16 && hn(w.stateNode, ""), f & 128) {
                    var d = w.alternate;

                    if (d !== null) {
                      var m = d.ref;
                      m !== null && (typeof m == "function" ? m(null) : m.current = null);
                    }
                  }

                  switch (f & 1038) {
                    case 2:
                      Ba(w), w.flags &= -3;
                      break;

                    case 6:
                      Ba(w), w.flags &= -3, Ci(w.alternate, w);
                      break;

                    case 1024:
                      w.flags &= -1025;
                      break;

                    case 1028:
                      w.flags &= -1025, Ci(w.alternate, w);
                      break;

                    case 4:
                      Ci(w.alternate, w);
                      break;

                    case 8:
                      u = w, Ia(i, u);
                      var C = u.alternate;
                      Ua(u), C !== null && Ua(C);
                  }

                  w = w.nextEffect;
                }
              } catch (b) {
                if (w === null) throw Error(v(330));
                tt(w, b), w = w.nextEffect;
              }
            } while (w !== null);

            if (m = zl, d = ks(), f = m.focusedElem, i = m.selectionRange, d !== f && f && f.ownerDocument && _s(f.ownerDocument.documentElement, f)) {
              for (i !== null && Ol(f) && (d = i.start, m = i.end, m === void 0 && (m = d), ("selectionStart" in f) ? (f.selectionStart = d, f.selectionEnd = Math.min(m, f.value.length)) : (m = (d = f.ownerDocument || document) && d.defaultView || window, m.getSelection && (m = m.getSelection(), u = f.textContent.length, C = Math.min(i.start, u), i = i.end === void 0 ? C : Math.min(i.end, u), !m.extend && C > i && (u = i, i = C, C = u), u = ws(f, C), l = ws(f, i), u && l && (m.rangeCount !== 1 || m.anchorNode !== u.node || m.anchorOffset !== u.offset || m.focusNode !== l.node || m.focusOffset !== l.offset) && (d = d.createRange(), d.setStart(u.node, u.offset), m.removeAllRanges(), C > i ? (m.addRange(d), m.extend(l.node, l.offset)) : (d.setEnd(l.node, l.offset), m.addRange(d)))))), d = [], m = f; m = m.parentNode;) {
                m.nodeType === 1 && d.push({
                  element: m,
                  left: m.scrollLeft,
                  top: m.scrollTop
                });
              }

              for (typeof f.focus == "function" && f.focus(), f = 0; f < d.length; f++) {
                m = d[f], m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
              }
            }

            Pr = !!Ml, zl = Ml = null, e.current = n, w = r;

            do {
              try {
                for (f = e; w !== null;) {
                  var _ = w.flags;

                  if (_ & 36 && gp(f, w.alternate, w), _ & 128) {
                    d = void 0;
                    var j = w.ref;

                    if (j !== null) {
                      var P = w.stateNode;

                      switch (w.tag) {
                        case 5:
                          d = P;
                          break;

                        default:
                          d = P;
                      }

                      typeof j == "function" ? j(d) : j.current = d;
                    }
                  }

                  w = w.nextEffect;
                }
              } catch (b) {
                if (w === null) throw Error(v(330));
                tt(w, b), w = w.nextEffect;
              }
            } while (w !== null);

            w = null, op(), x = o;
          } else e.current = n;

          if (nt) nt = !1, Qn = e, Xn = t;else for (w = r; w !== null;) {
            t = w.nextEffect, w.nextEffect = null, w.flags & 8 && (_ = w, _.sibling = null, _.stateNode = null), w = t;
          }
          if (r = e.pendingLanes, r === 0 && (Ce = null), r === 1 ? e === Li ? Yn++ : (Yn = 0, Li = e) : Yn = 0, n = n.stateNode, ht && typeof ht.onCommitFiberRoot == "function") try {
            ht.onCommitFiberRoot(Bl, n, void 0, (n.current.flags & 64) == 64);
          } catch (b) {}
          if (he(e, J()), so) throw so = !1, e = ki, ki = null, e;
          return (x & 8) != 0 || ke(), null;
        }

        function jp() {
          for (; w !== null;) {
            var e = w.alternate;
            ho || Gn === null || ((w.flags & 8) != 0 ? Au(w, Gn) && (ho = !0) : w.tag === 13 && wp(e, w) && Au(w, Gn) && (ho = !0));
            var t = w.flags;
            (t & 256) != 0 && mp(e, w), (t & 512) == 0 || nt || (nt = !0, Rn(97, function () {
              return rt(), null;
            })), w = w.nextEffect;
          }
        }

        function rt() {
          if (Xn !== 90) {
            var e = 97 < Xn ? 97 : Xn;
            return Xn = 90, mt(e, bp);
          }

          return !1;
        }

        function vp(e, t) {
          Ti.push(t, e), nt || (nt = !0, Rn(97, function () {
            return rt(), null;
          }));
        }

        function Ma(e, t) {
          Oi.push(t, e), nt || (nt = !0, Rn(97, function () {
            return rt(), null;
          }));
        }

        function bp() {
          if (Qn === null) return !1;
          var e = Qn;
          if (Qn = null, (x & 48) != 0) throw Error(v(331));
          var t = x;
          x |= 32;
          var n = Oi;
          Oi = [];

          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
                l = n[r + 1],
                i = o.destroy;
            if (o.destroy = void 0, typeof i == "function") try {
              i();
            } catch (s) {
              if (l === null) throw Error(v(330));
              tt(l, s);
            }
          }

          for (n = Ti, Ti = [], r = 0; r < n.length; r += 2) {
            o = n[r], l = n[r + 1];

            try {
              var u = o.create;
              o.destroy = u();
            } catch (s) {
              if (l === null) throw Error(v(330));
              tt(l, s);
            }
          }

          for (u = e.current.firstEffect; u !== null;) {
            e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
          }

          return x = t, ke(), !0;
        }

        function Ga(e, t, n) {
          t = wi(n, t), t = La(e, t, 1), Ye(e, t), t = ie(), e = mo(e, 1), e !== null && (br(e, 1, t), he(e, t));
        }

        function tt(e, t) {
          if (e.tag === 3) Ga(e, e, t);else for (var n = e.return; n !== null;) {
            if (n.tag === 3) {
              Ga(n, e, t);
              break;
            } else if (n.tag === 1) {
              var r = n.stateNode;

              if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ce === null || !Ce.has(r))) {
                e = wi(t, e);
                var o = Da(n, e, 1);
                if (Ye(n, o), o = ie(), n = mo(n, 1), n !== null) br(n, 1, o), he(n, o);else if (typeof r.componentDidCatch == "function" && (Ce === null || !Ce.has(r))) try {
                  r.componentDidCatch(t, e);
                } catch (l) {}
                break;
              }
            }

            n = n.return;
          }
        }

        function Ep(e, t, n) {
          var r = e.pingCache;
          r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, Z === e && (X & n) === n && (H === 4 || H === 3 && (X & 62914560) === X && 500 > J() - xi ? tn(e, 0) : Pi |= n), he(e, t);
        }

        function yp(e, t) {
          var n = e.stateNode;
          n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, (t & 2) == 0 ? t = 1 : (t & 4) == 0 ? t = qt() === 99 ? 1 : 2 : (De === 0 && (De = Zt), t = Mt(62914560 & ~De), t === 0 && (t = 4194304))), n = ie(), e = mo(e, t), e !== null && (br(e, t, n), he(e, n));
        }

        var Ya;

        Ya = function Ya(e, t, n) {
          var r = t.lanes;
          if (e !== null) {
            if (e.memoizedProps !== t.pendingProps || ee.current) ge = !0;else if ((n & r) != 0) ge = (e.flags & 16384) != 0;else {
              switch (ge = !1, t.tag) {
                case 3:
                  Sa(t), ni();
                  break;

                case 5:
                  ra(t);
                  break;

                case 1:
                  te(t.type) && Br(t);
                  break;

                case 4:
                  Zl(t, t.stateNode.containerInfo);
                  break;

                case 10:
                  r = t.memoizedProps.value;
                  var o = t.type._context;
                  M(Hr, o._currentValue), o._currentValue = r;
                  break;

                case 13:
                  if (t.memoizedState !== null) return (n & t.child.childLanes) != 0 ? ja(e, t, n) : (M(z, z.current & 1), t = Oe(e, t, n), t !== null ? t.sibling : null);
                  M(z, z.current & 1);
                  break;

                case 19:
                  if (r = (n & t.childLanes) != 0, (e.flags & 64) != 0) {
                    if (r) return Pa(e, t, n);
                    t.flags |= 64;
                  }

                  if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), M(z, z.current), r) break;
                  return null;

                case 23:
                case 24:
                  return t.lanes = 0, pi(e, t, n);
              }

              return Oe(e, t, n);
            }
          } else ge = !1;

          switch (t.lanes = 0, t.tag) {
            case 2:
              if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = Ht(t, $.current), Jt(t, n), o = li(null, t, r, e, o, n), t.flags |= 1, _typeof(o) == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) {
                if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, te(r)) {
                  var l = !0;
                  Br(t);
                } else l = !1;

                t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Xl(t);
                var i = r.getDerivedStateFromProps;
                typeof i == "function" && Jr(t, r, i, e), o.updater = Qr, t.stateNode = o, o._reactInternals = t, Yl(t, r, e, n), t = di(null, t, r, !0, l, n);
              } else t.tag = 0, re(null, t, o, n), t = t.child;

              return t;

            case 16:
              o = t.elementType;

              e: {
                switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, l = o._init, o = l(o._payload), t.type = o, l = t.tag = Pp(o), e = ve(o, e), l) {
                  case 0:
                    t = ci(null, t, o, e, n);
                    break e;

                  case 1:
                    t = ka(null, t, o, e, n);
                    break e;

                  case 11:
                    t = ga(null, t, o, e, n);
                    break e;

                  case 14:
                    t = wa(null, t, o, ve(o.type, e), r, n);
                    break e;
                }

                throw Error(v(306, o, ""));
              }

              return t;

            case 0:
              return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ve(r, o), ci(e, t, r, o, n);

            case 1:
              return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ve(r, o), ka(e, t, r, o, n);

            case 3:
              if (Sa(t), r = t.updateQueue, e === null || r === null) throw Error(v(282));
              if (r = t.pendingProps, o = t.memoizedState, o = o !== null ? o.element : null, Qs(e, t), zn(t, r, null, n), r = t.memoizedState.element, r === o) ni(), t = Oe(e, t, n);else {
                if (o = t.stateNode, (l = o.hydrate) && (et = Vt(t.stateNode.containerInfo.firstChild), Te = t, l = Ee = !0), l) {
                  if (e = o.mutableSourceEagerHydrationData, e != null) for (o = 0; o < e.length; o += 2) {
                    l = e[o], l._workInProgressVersionPrimary = e[o + 1], Yt.push(l);
                  }

                  for (n = na(t, null, r, n), t.child = n; n;) {
                    n.flags = n.flags & -3 | 1024, n = n.sibling;
                  }
                } else re(e, t, r, n), ni();

                t = t.child;
              }
              return t;

            case 5:
              return ra(t), e === null && ti(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Il(r, o) ? i = null : l !== null && Il(r, l) && (t.flags |= 16), _a(e, t), re(e, t, i, n), t.child;

            case 6:
              return e === null && ti(t), null;

            case 13:
              return ja(e, t, n);

            case 4:
              return Zl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kr(t, null, r, n) : re(e, t, r, n), t.child;

            case 11:
              return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ve(r, o), ga(e, t, r, o, n);

            case 7:
              return re(e, t, t.pendingProps, n), t.child;

            case 8:
              return re(e, t, t.pendingProps.children, n), t.child;

            case 12:
              return re(e, t, t.pendingProps.children, n), t.child;

            case 10:
              e: {
                r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value;
                var u = t.type._context;
                if (M(Hr, u._currentValue), u._currentValue = l, i !== null) if (u = i.value, l = fe(u, l) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, l) : 1073741823) | 0, l === 0) {
                  if (i.children === o.children && !ee.current) {
                    t = Oe(e, t, n);
                    break e;
                  }
                } else for (u = t.child, u !== null && (u.return = t); u !== null;) {
                  var s = u.dependencies;

                  if (s !== null) {
                    i = u.child;

                    for (var p = s.firstContext; p !== null;) {
                      if (p.context === r && (p.observedBits & l) != 0) {
                        u.tag === 1 && (p = Xe(-1, n & -n), p.tag = 2, Ye(u, p)), u.lanes |= n, p = u.alternate, p !== null && (p.lanes |= n), Js(u.return, n), s.lanes |= n;
                        break;
                      }

                      p = p.next;
                    }
                  } else i = u.tag === 10 && u.type === t.type ? null : u.child;

                  if (i !== null) i.return = u;else for (i = u; i !== null;) {
                    if (i === t) {
                      i = null;
                      break;
                    }

                    if (u = i.sibling, u !== null) {
                      u.return = i.return, i = u;
                      break;
                    }

                    i = i.return;
                  }
                  u = i;
                }
                re(e, t, o.children, n), t = t.child;
              }

              return t;

            case 9:
              return o = t.type, l = t.pendingProps, r = l.children, Jt(t, n), o = ce(o, l.unstable_observedBits), r = r(o), t.flags |= 1, re(e, t, r, n), t.child;

            case 14:
              return o = t.type, l = ve(o, t.pendingProps), l = ve(o.type, l), wa(e, t, o, l, r, n);

            case 15:
              return ya(e, t, t.type, t.pendingProps, r, n);

            case 17:
              return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ve(r, o), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, te(r) ? (e = !0, Br(t)) : e = !1, Jt(t, n), Zs(t, r, o), Yl(t, r, o, n), di(null, t, r, !0, e, n);

            case 19:
              return Pa(e, t, n);

            case 23:
              return pi(e, t, n);

            case 24:
              return pi(e, t, n);
          }

          throw Error(v(156, t.tag));
        };

        function Np(e, t, n, r) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }

        function pe(e, t, n, r) {
          return new Np(e, t, n, r);
        }

        function fi(e) {
          return e = e.prototype, !(!e || !e.isReactComponent);
        }

        function Pp(e) {
          if (typeof e == "function") return fi(e) ? 1 : 0;

          if (e != null) {
            if (e = e.$$typeof, e === dr) return 11;
            if (e === mr) return 14;
          }

          return 2;
        }

        function Ze(e, t) {
          var n = e.alternate;
          return n === null ? (n = pe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
          }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
        }

        function Gr(e, t, n, r, o, l) {
          var i = 2;
          if (r = e, typeof e == "function") fi(e) && (i = 1);else if (typeof e == "string") i = 5;else e: switch (e) {
            case Fe:
              return Qt(n.children, o, l, t);

            case yu:
              i = 8, o |= 16;
              break;

            case Bo:
              i = 8, o |= 1;
              break;

            case fn:
              return e = pe(12, n, t, o | 8), e.elementType = fn, e.type = fn, e.lanes = l, e;

            case cn:
              return e = pe(13, n, t, o), e.type = cn, e.elementType = cn, e.lanes = l, e;

            case hr:
              return e = pe(19, n, t, o), e.elementType = hr, e.lanes = l, e;

            case Jo:
              return hi(n, o, l, t);

            case Qo:
              return e = pe(24, n, t, o), e.elementType = Qo, e.lanes = l, e;

            default:
              if (_typeof(e) == "object" && e !== null) switch (e.$$typeof) {
                case Vo:
                  i = 10;
                  break e;

                case Wo:
                  i = 9;
                  break e;

                case dr:
                  i = 11;
                  break e;

                case mr:
                  i = 14;
                  break e;

                case Ho:
                  i = 16, r = null;
                  break e;

                case qo:
                  i = 22;
                  break e;
              }
              throw Error(v(130, e == null ? e : _typeof(e), ""));
          }
          return t = pe(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
        }

        function Qt(e, t, n, r) {
          return e = pe(7, e, r, t), e.lanes = n, e;
        }

        function hi(e, t, n, r) {
          return e = pe(23, e, r, t), e.elementType = Jo, e.lanes = n, e;
        }

        function Gl(e, t, n) {
          return e = pe(6, e, null, t), e.lanes = n, e;
        }

        function Kl(e, t, n) {
          return t = pe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
          }, t;
        }

        function Tp(e, t, n) {
          this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = kl(0), this.expirationTimes = kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kl(0), this.mutableSourceEagerHydrationData = null;
        }

        function Op(e, t, n) {
          var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return {
            $$typeof: at,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
          };
        }

        function vo(e, t, n, r) {
          var o = t.current,
              l = ie(),
              i = Ge(o);

          e: if (n) {
            n = n._reactInternals;

            t: {
              if (ct(n) !== n || n.tag !== 1) throw Error(v(170));
              var u = n;

              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;

                  case 1:
                    if (te(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }

                }

                u = u.return;
              } while (u !== null);

              throw Error(v(171));
            }

            if (n.tag === 1) {
              var s = n.type;

              if (te(s)) {
                n = Is(n, s, u);
                break e;
              }
            }

            n = u;
          } else n = Je;

          return t.context === null ? t.context = n : t.pendingContext = n, t = Xe(l, i), t.payload = {
            element: e
          }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Ye(o, t), Ke(o, i, l), i;
        }

        function Ri(e) {
          if (e = e.current, !e.child) return null;

          switch (e.child.tag) {
            case 5:
              return e.child.stateNode;

            default:
              return e.child.stateNode;
          }
        }

        function Ka(e, t) {
          if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
          }
        }

        function Mi(e, t) {
          Ka(e, t), (e = e.alternate) && Ka(e, t);
        }

        function Lp() {
          return null;
        }

        function zi(e, t, n) {
          var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
          if (n = new Tp(e, t, n != null && n.hydrate === !0), t = pe(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, Xl(t), e[Bt] = n.current, Ts(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
            t = r[e];
            var o = t._getVersion;
            o = o(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o);
          }
          this._internalRoot = n;
        }

        zi.prototype.render = function (e) {
          vo(e, this._internalRoot, null, null);
        };

        zi.prototype.unmount = function () {
          var e = this._internalRoot,
              t = e.containerInfo;
          vo(null, e, null, function () {
            t[Bt] = null;
          });
        };

        function Zn(e) {
          return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
        }

        function Dp(e, t) {
          if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) {
            e.removeChild(n);
          }
          return new zi(e, 0, t ? {
            hydrate: !0
          } : void 0);
        }

        function go(e, t, n, r, o) {
          var l = n._reactRootContainer;

          if (l) {
            var i = l._internalRoot;

            if (typeof o == "function") {
              var u = o;

              o = function o() {
                var p = Ri(i);
                u.call(p);
              };
            }

            vo(t, i, e, o);
          } else {
            if (l = n._reactRootContainer = Dp(n, r), i = l._internalRoot, typeof o == "function") {
              var s = o;

              o = function o() {
                var p = Ri(i);
                s.call(p);
              };
            }

            Ja(function () {
              vo(t, i, e, o);
            });
          }

          return Ri(i);
        }

        Bu = function Bu(e) {
          if (e.tag === 13) {
            var t = ie();
            Ke(e, 4, t), Mi(e, 4);
          }
        };

        hl = function hl(e) {
          if (e.tag === 13) {
            var t = ie();
            Ke(e, 67108864, t), Mi(e, 67108864);
          }
        };

        Vu = function Vu(e) {
          if (e.tag === 13) {
            var t = ie(),
                n = Ge(e);
            Ke(e, n, t), Mi(e, n);
          }
        };

        Wu = function Wu(e, t) {
          return t();
        };

        ul = function ul(e, t, n) {
          switch (t) {
            case "input":
              if (Zo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) {
                  n = n.parentNode;
                }

                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                  var r = n[t];

                  if (r !== e && r.form === e.form) {
                    var o = _r(r);

                    if (!o) throw Error(v(90));
                    ku(r), Zo(r, o);
                  }
                }
              }

              break;

            case "textarea":
              ju(e, n);
              break;

            case "select":
              t = n.value, t != null && Nt(e, !!n.multiple, t, !1);
          }
        };

        sl = $a;

        Mu = function Mu(e, t, n, r, o) {
          var l = x;
          x |= 4;

          try {
            return mt(98, e.bind(null, t, n, r, o));
          } finally {
            x = l, x === 0 && (en(), ke());
          }
        };

        al = function al() {
          (x & 49) == 0 && (Sp(), rt());
        };

        zu = function zu(e, t) {
          var n = x;
          x |= 2;

          try {
            return e(t);
          } finally {
            x = n, x === 0 && (en(), ke());
          }
        };

        function Za(e, t) {
          var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!Zn(t)) throw Error(v(200));
          return Op(e, t, null, n);
        }

        var Rp = {
          Events: [vn, Ft, _r, Du, Ru, rt, {
            current: !1
          }]
        },
            er = {
          findFiberByHostInstance: pt,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom"
        },
            Mp = {
          bundleType: er.bundleType,
          version: er.version,
          rendererPackageName: er.rendererPackageName,
          rendererConfig: er.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: st.ReactCurrentDispatcher,
          findHostInstanceByFiber: function findHostInstanceByFiber(e) {
            return e = Uu(e), e === null ? null : e.stateNode;
          },
          findFiberByHostInstance: er.findFiberByHostInstance || Lp,
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && (tr = __REACT_DEVTOOLS_GLOBAL_HOOK__, !tr.isDisabled && tr.supportsFiber)) try {
          Bl = tr.inject(Mp), ht = tr;
        } catch (e) {}
        var tr;
        ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rp;
        ae.createPortal = Za;

        ae.findDOMNode = function (e) {
          if (e == null) return null;
          if (e.nodeType === 1) return e;
          var t = e._reactInternals;
          if (t === void 0) throw typeof e.render == "function" ? Error(v(188)) : Error(v(268, Object.keys(e)));
          return e = Uu(t), e = e === null ? null : e.stateNode, e;
        };

        ae.flushSync = function (e, t) {
          var n = x;
          if ((n & 48) != 0) return e(t);
          x |= 1;

          try {
            if (e) return mt(99, e.bind(null, t));
          } finally {
            x = n, ke();
          }
        };

        ae.hydrate = function (e, t, n) {
          if (!Zn(t)) throw Error(v(200));
          return go(null, e, t, !0, n);
        };

        ae.render = function (e, t, n) {
          if (!Zn(t)) throw Error(v(200));
          return go(null, e, t, !1, n);
        };

        ae.unmountComponentAtNode = function (e) {
          if (!Zn(e)) throw Error(v(40));
          return e._reactRootContainer ? (Ja(function () {
            go(null, null, e, !1, function () {
              e._reactRootContainer = null, e[Bt] = null;
            });
          }), !0) : !1;
        };

        ae.unstable_batchedUpdates = $a;

        ae.unstable_createPortal = function (e, t) {
          return Za(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
        };

        ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!Zn(n)) throw Error(v(200));
          if (e == null || e._reactInternals === void 0) throw Error(v(38));
          return go(e, t, n, !1, r);
        };

        ae.version = "17.0.2";
      });
      var rf = ot(function (td, tf) {
        "use strict";

        function nf() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nf);
          } catch (e) {
            console.error(e);
          }
        }

        nf(), tf.exports = ef();
      });
      var kf = lt(ze()),
          Sf = lt(rf());
      var Re = lt(ze());
      var Y = typeof globalThis != "undefined" && globalThis || typeof self != "undefined" && self || typeof Y != "undefined" && Y,
          oe = {
        searchParams: "URLSearchParams" in Y,
        iterable: "Symbol" in Y && "iterator" in Symbol,
        blob: "FileReader" in Y && "Blob" in Y && function () {
          try {
            return new Blob(), !0;
          } catch (e) {
            return !1;
          }
        }(),
        formData: "FormData" in Y,
        arrayBuffer: "ArrayBuffer" in Y
      };

      function zp(e) {
        return e && DataView.prototype.isPrototypeOf(e);
      }

      oe.arrayBuffer && (of = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], lf = ArrayBuffer.isView || function (e) {
        return e && of.indexOf(Object.prototype.toString.call(e)) > -1;
      });
      var of, lf;

      function nr(e) {
        if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "") throw new TypeError('Invalid character in header field name: "' + e + '"');
        return e.toLowerCase();
      }

      function Ii(e) {
        return typeof e != "string" && (e = String(e)), e;
      }

      function Fi(e) {
        var t = {
          next: function next() {
            var n = e.shift();
            return {
              done: n === void 0,
              value: n
            };
          }
        };
        return oe.iterable && (t[Symbol.iterator] = function () {
          return t;
        }), t;
      }

      function A(e) {
        this.map = {}, e instanceof A ? e.forEach(function (t, n) {
          this.append(n, t);
        }, this) : Array.isArray(e) ? e.forEach(function (t) {
          this.append(t[0], t[1]);
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
          this.append(t, e[t]);
        }, this);
      }

      A.prototype.append = function (e, t) {
        e = nr(e), t = Ii(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t;
      };

      A.prototype.delete = function (e) {
        delete this.map[nr(e)];
      };

      A.prototype.get = function (e) {
        return e = nr(e), this.has(e) ? this.map[e] : null;
      };

      A.prototype.has = function (e) {
        return this.map.hasOwnProperty(nr(e));
      };

      A.prototype.set = function (e, t) {
        this.map[nr(e)] = Ii(t);
      };

      A.prototype.forEach = function (e, t) {
        for (var n in this.map) {
          this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }
      };

      A.prototype.keys = function () {
        var e = [];
        return this.forEach(function (t, n) {
          e.push(n);
        }), Fi(e);
      };

      A.prototype.values = function () {
        var e = [];
        return this.forEach(function (t) {
          e.push(t);
        }), Fi(e);
      };

      A.prototype.entries = function () {
        var e = [];
        return this.forEach(function (t, n) {
          e.push([n, t]);
        }), Fi(e);
      };

      oe.iterable && (A.prototype[Symbol.iterator] = A.prototype.entries);

      function Ui(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }

      function uf(e) {
        return new Promise(function (t, n) {
          e.onload = function () {
            t(e.result);
          }, e.onerror = function () {
            n(e.error);
          };
        });
      }

      function Ip(e) {
        var t = new FileReader(),
            n = uf(t);
        return t.readAsArrayBuffer(e), n;
      }

      function Fp(e) {
        var t = new FileReader(),
            n = uf(t);
        return t.readAsText(e), n;
      }

      function Up(e) {
        for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) {
          n[r] = String.fromCharCode(t[r]);
        }

        return n.join("");
      }

      function sf(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }

      function af() {
        return this.bodyUsed = !1, this._initBody = function (e) {
          this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : oe.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : oe.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : oe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : oe.arrayBuffer && oe.blob && zp(e) ? (this._bodyArrayBuffer = sf(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : oe.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || lf(e)) ? this._bodyArrayBuffer = sf(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : oe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, oe.blob && (this.blob = function () {
          var e = Ui(this);
          if (e) return e;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            var e = Ui(this);
            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
          } else return this.blob().then(Ip);
        }), this.text = function () {
          var e = Ui(this);
          if (e) return e;
          if (this._bodyBlob) return Fp(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(Up(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, oe.formData && (this.formData = function () {
          return this.text().then(Ap);
        }), this.json = function () {
          return this.text().then(JSON.parse);
        }, this;
      }

      var Bp = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

      function Vp(e) {
        var t = e.toUpperCase();
        return Bp.indexOf(t) > -1 ? t : e;
      }

      function kt(e, t) {
        if (!(this instanceof kt)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t = t || {};
        var n = t.body;

        if (e instanceof kt) {
          if (e.bodyUsed) throw new TypeError("Already read");
          this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new A(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
        } else this.url = String(e);

        if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new A(t.headers)), this.method = Vp(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n) throw new TypeError("Body not allowed for GET or HEAD requests");

        if (this._initBody(n), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
          var r = /([?&])_=[^&]*/;
          if (r.test(this.url)) this.url = this.url.replace(r, "$1_=" + new Date().getTime());else {
            var o = /\?/;
            this.url += (o.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }

      kt.prototype.clone = function () {
        return new kt(this, {
          body: this._bodyInit
        });
      };

      function Ap(e) {
        var t = new FormData();
        return e.trim().split("&").forEach(function (n) {
          if (n) {
            var r = n.split("="),
                o = r.shift().replace(/\+/g, " "),
                l = r.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(o), decodeURIComponent(l));
          }
        }), t;
      }

      function Wp(e) {
        var t = new A(),
            n = e.replace(/\r?\n[\t ]+/g, " ");
        return n.split("\r").map(function (r) {
          return r.indexOf("\n") === 0 ? r.substr(1, r.length) : r;
        }).forEach(function (r) {
          var o = r.split(":"),
              l = o.shift().trim();

          if (l) {
            var i = o.join(":").trim();
            t.append(l, i);
          }
        }), t;
      }

      af.call(kt.prototype);

      function je(e, t) {
        if (!(this instanceof je)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new A(t.headers), this.url = t.url || "", this._initBody(e);
      }

      af.call(je.prototype);

      je.prototype.clone = function () {
        return new je(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new A(this.headers),
          url: this.url
        });
      };

      je.error = function () {
        var e = new je(null, {
          status: 0,
          statusText: ""
        });
        return e.type = "error", e;
      };

      var Hp = [301, 302, 303, 307, 308];

      je.redirect = function (e, t) {
        if (Hp.indexOf(t) === -1) throw new RangeError("Invalid status code");
        return new je(null, {
          status: t,
          headers: {
            location: e
          }
        });
      };

      var St = Y.DOMException;

      try {
        new St();
      } catch (e) {
        St = function St(t, n) {
          this.message = t, this.name = n;
          var r = Error(t);
          this.stack = r.stack;
        }, St.prototype = Object.create(Error.prototype), St.prototype.constructor = St;
      }

      function ff(e, t) {
        return new Promise(function (n, r) {
          var o = new kt(e, t);
          if (o.signal && o.signal.aborted) return r(new St("Aborted", "AbortError"));
          var l = new XMLHttpRequest();

          function i() {
            l.abort();
          }

          l.onload = function () {
            var s = {
              status: l.status,
              statusText: l.statusText,
              headers: Wp(l.getAllResponseHeaders() || "")
            };
            s.url = "responseURL" in l ? l.responseURL : s.headers.get("X-Request-URL");
            var p = "response" in l ? l.response : l.responseText;
            setTimeout(function () {
              n(new je(p, s));
            }, 0);
          }, l.onerror = function () {
            setTimeout(function () {
              r(new TypeError("Network request failed"));
            }, 0);
          }, l.ontimeout = function () {
            setTimeout(function () {
              r(new TypeError("Network request failed"));
            }, 0);
          }, l.onabort = function () {
            setTimeout(function () {
              r(new St("Aborted", "AbortError"));
            }, 0);
          };

          function u(s) {
            try {
              return s === "" && Y.location.href ? Y.location.href : s;
            } catch (p) {
              return s;
            }
          }

          l.open(o.method, u(o.url), !0), o.credentials === "include" ? l.withCredentials = !0 : o.credentials === "omit" && (l.withCredentials = !1), "responseType" in l && (oe.blob ? l.responseType = "blob" : oe.arrayBuffer && o.headers.get("Content-Type") && o.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (l.responseType = "arraybuffer")), t && _typeof(t.headers) == "object" && !(t.headers instanceof A) ? Object.getOwnPropertyNames(t.headers).forEach(function (s) {
            l.setRequestHeader(s, Ii(t.headers[s]));
          }) : o.headers.forEach(function (s, p) {
            l.setRequestHeader(p, s);
          }), o.signal && (o.signal.addEventListener("abort", i), l.onreadystatechange = function () {
            l.readyState === 4 && o.signal.removeEventListener("abort", i);
          }), l.send(typeof o._bodyInit == "undefined" ? null : o._bodyInit);
        });
      }

      ff.polyfill = !0;
      Y.fetch || (Y.fetch = ff, Y.Headers = A, Y.Request = kt, Y.Response = je);
      var rr = lt(ze());

      var yo = lt(ze()),
          cf = /*#__PURE__*/function (_yo$default$Component) {
        _inherits(cf, _yo$default$Component);

        var _super = _createSuper(cf);

        function cf(t) {
          _classCallCheck(this, cf);

          return _super.call(this, t);
        }

        _createClass(cf, [{
          key: "render",
          value: function render() {
            var _this = this;

            var t = [];
            return yo.default.createElement("div", {
              className: "row"
            }, this.props.rowData.map(function (n) {
              return yo.default.createElement(_this.props.itemComponent, {
                item: n,
                margin: _this.props.margin
              });
            }));
          }
        }]);

        return cf;
      }(yo.default.Component),
          pf = cf;

      var ye = lt(ze()),
          Ai = /*#__PURE__*/function (_ye$Component) {
        _inherits(Ai, _ye$Component);

        var _super2 = _createSuper(Ai);

        function Ai(t) {
          _classCallCheck(this, Ai);

          return _super2.call(this, t);
        }

        _createClass(Ai, [{
          key: "onClick",
          value: function onClick() {
            window.open("https://calil.jp/book/" + this.props.item.isbn, "_parent");
          }
        }, {
          key: "render",
          value: function render() {
            var t = this.props.item,
                n = (this.props.item.width - this.props.margin) / 14;
            return ye.default.createElement("div", {
              className: "book " + (this.props.item.cover ? "" : "nocover"),
              ref: "item",
              id: t.id,
              style: {
                width: t.width - this.props.margin + "px",
                height: t.height - this.props.margin + "px",
                margin: this.props.margin / 2 + "px",
                cursor: "pointer",
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              },
              onClick: this.onClick.bind(this)
            }, this.props.item.cover ? ye.default.createElement("img", {
              src: t.cover,
              alt: t.title,
              "data-aspect": t.properties.aspect,
              ref: "cover",
              style: {
                height: t.height - this.props.margin + "px",
                width: t.width - this.props.margin + "px",
                margin: this.props.margin / 2 + "px"
              }
            }) : ye.default.createElement(ye.default.Fragment, null, ye.default.createElement("div", {
              className: "bg"
            }), ye.default.createElement("div", {
              className: "textCover"
            }, ye.default.createElement("div", {
              className: "title",
              style: {
                fontSize: n + "px"
              }
            }, t.title), ye.default.createElement("div", {
              className: "author",
              style: {
                fontSize: n * 0.7 + "px"
              }
            }, t.author))));
          }
        }]);

        return Ai;
      }(ye.Component),
          df = Ai;

      var qp = "\n.row {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap\n}\n",
          $p = "\n.row .book {\n    box-sizing: border-box;\n    animation: fadeIn 1s ease 0s 1 normal;\n    overflow: hidden\n}\n\n.row .book.nocover {\n    border: 1px solid #eee\n}\n\n.row .book.nocover .bg {\n    position: absolute;\n    background-color: #eee;\n    width: 80%;\n    height: 100%;\n    top: 0;\n    left: 10%;\n    z-index: -1\n}\n\n.row .book.nocover .textCover {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    padding: 30% 0 0\n}\n\n.row .book.nocover .textCover .title {\n    position: relative;\n    width: 90%;\n    margin: 0 auto;\n    color: #333;\n    font-weight: bold;\n    margin-bottom: 5px;\n    line-height: 120%;\n    z-index: 1;\n    word-wrap: break-word;\n    overflow-wrap: break-word\n}\n\n.row .book.nocover .textCover .author {\n    position: relative;\n    width: 90%;\n    margin: 0 auto;\n    font-size: 80%;\n    color: #e00;\n    font-weight: bold;\n    z-index: 1\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0\n    }\n\n    100% {\n        opacity: 1\n    }\n}\n",
          hf = /*#__PURE__*/function (_rr$default$Component) {
        _inherits(hf, _rr$default$Component);

        var _super3 = _createSuper(hf);

        function hf(t) {
          var _this2;

          _classCallCheck(this, hf);

          _this2 = _super3.call(this, t);
          _this2.state = {
            size: _this2.props.size ? _this2.props.size : 200,
            rowsData: []
          }, _this2.factors = [], _this2.hiradumiDiv = null, _this2.setHiradumiDiv = function (n) {
            _this2.hiradumiDiv = n;
          };
          return _this2;
        }

        _createClass(hf, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this3 = this;

            this.setRowData(), setTimeout(function () {
              window.innerWidth - document.body.clientWidth > 0 && _this3.setRowData();
            }, 10), window.addEventListener("resize", this.setRowData.bind(this));
          }
        }, {
          key: "setRowData",
          value: function setRowData() {
            var _this4 = this;

            this.factors = [], Array.from({
              length: this.props.rowCount
            }).map(function (l, i) {
              var u = i % _this4.props.rowFactors.length;

              _this4.factors.push(_this4.props.rowFactors[u]);
            });
            var t = 0,
                n = window.innerWidth - document.body.clientWidth,
                r = this.hiradumiDiv.clientWidth - n,
                o = [];
            this.factors.some(function (l, i) {
              var u = 0,
                  s = _this4.state.size * _this4.factors[i],
                  p = 0,
                  y = _this4.props.data.slice(t);

              if (y.some(function (h) {
                var g,
                    k = !1;
                if (h.properties && h.properties.aspect ? (g = Math.floor(s * h.properties.aspect), k = r <= u + g) : (g = Math.floor(s * 0.66666), k = r <= u + g), k) return !0;
                h.height = s, h.width = g, u += g, p += 1;
              }), p === 0) return !0;
              var E = r / u;

              if (E < 2) {
                y.some(function (g, k) {
                  if (k === p) return !0;
                  g.width = Math.floor(g.width * E), g.height = Math.floor(g.height * E);
                });

                var h = _this4.props.data.slice(t, t + p);

                o.push(h);
              } else {
                var _h = _this4.props.data.slice(t - o[o.length - 1].length, t),
                    g = u / _h.length;

                _h.some(function (a, f) {
                  a.width = Math.floor(a.width - g);
                  var d = a.width / (a.width + g);
                  a.height = Math.floor(a.height * d);
                });

                var k = _this4.props.data.slice(t, t + p),
                    S = _h[0].height / k[0].height;

                k.some(function (a, f) {
                  a.width = Math.floor(a.width * S), a.height = Math.floor(a.height * S);
                }), o.pop();

                var c = _this4.props.data.slice(t - _h.length, t + p);

                o.push(c);
              }

              t += p;
            }), this.setState({
              rowsData: o
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this5 = this;

            if (this.props.data.length === 0) return null;
            var t = qp;
            return this.props.itemComponent || (t += $p), rr.default.createElement("div", {
              className: "hiradumi",
              ref: this.setHiradumiDiv
            }, rr.default.createElement("style", null, t), Array.from({
              length: this.state.rowsData.length
            }).map(function (n, r) {
              return rr.default.createElement(pf, {
                rowData: _this5.state.rowsData[r],
                margin: _this5.props.margin,
                itemComponent: _this5.props.itemComponent ? _this5.props.itemComponent : df
              });
            }));
          }
        }]);

        return hf;
      }(rr.default.Component),
          mf = hf;

      var G = lt(ze());

      function Jp(e) {
        var t = document.createElement("div"),
            n = document.createElement("pre");
        n.style.webkitUserSelect = "auto", n.style.userSelect = "auto", t.appendChild(n).textContent = e;
        var r = t.style;
        r.position = "fixed", r.right = "200%", document.body.appendChild(t), document.getSelection().selectAllChildren(t);
        var o = document.execCommand("copy");
        return document.body.removeChild(t), o;
      }

      var vf = /*#__PURE__*/function (_G$Component) {
        _inherits(vf, _G$Component);

        var _super4 = _createSuper(vf);

        function vf(t) {
          _classCallCheck(this, vf);

          return _super4.call(this, t);
        }

        _createClass(vf, [{
          key: "setRowHeight",
          value: function setRowHeight() {
            var t = [];
            Array.prototype.slice.call(document.querySelectorAll(".rowHeight")).map(function (n) {
              n.value !== "" ? t.push(parseInt(n.value)) : t.push(parseInt(n.placeholder));
            }), this.props.onChange({
              rowHeightList: t
            });
          }
        }, {
          key: "copy",
          value: function copy() {
            var t = [];
            Array.prototype.slice.call(document.querySelectorAll(".rowHeight")).map(function (n) {
              n.value !== "" ? t.push(n.value) : t.push(parseFloat(n.placeholder));
            }), Jp(t.toString());
          }
        }, {
          key: "setRowFactors",
          value: function setRowFactors() {
            var t = [];
            Array.prototype.slice.call(document.querySelectorAll('input[type="number"]')).map(function (n) {
              t.push(n.value);
            }), this.props.onChange({
              rowFactors: t
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this6 = this;

            return G.default.createElement("div", {
              style: {
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "10px"
              }
            }, G.default.createElement("div", null, G.default.createElement("label", {
              htmlFor: "width"
            }, "Width:"), G.default.createElement("input", {
              type: "range",
              id: "width",
              name: "width",
              min: "10",
              max: "100",
              step: "10",
              defaultValue: "100",
              onChange: function onChange(t) {
                return _this6.props.onChange({
                  width: t.target.value
                });
              }
            }), this.props.width, "% \xA0", G.default.createElement("label", {
              htmlFor: "margin"
            }, "Margin:"), G.default.createElement("input", {
              type: "range",
              id: "margin",
              name: "width",
              min: "0",
              max: "30",
              value: this.props.margin,
              onChange: function onChange(t) {
                return _this6.props.onChange({
                  margin: parseInt(t.target.value)
                });
              }
            }), this.props.margin, "\xA0", G.default.createElement("label", {
              htmlFor: "margin"
            }, "RowCount:"), G.default.createElement("input", {
              type: "range",
              id: "maxRow",
              name: "width",
              min: "1",
              max: "30",
              value: this.props.rowCount,
              onChange: function onChange(t) {
                return _this6.props.onChange({
                  rowCount: parseInt(t.target.value)
                });
              }
            }), this.props.rowCount), G.default.createElement("br", null), G.default.createElement("div", null, G.default.createElement("label", null, "RowFactors:"), this.props.rowFactors.map(function (t, n) {
              return G.default.createElement("input", {
                type: "number",
                placeholder: String(t),
                value: String(t),
                step: "0.1",
                className: "rowHeight",
                key: n,
                onChange: _this6.setRowFactors.bind(_this6),
                style: {
                  width: "3rem"
                }
              });
            }), G.default.createElement("button", {
              onClick: this.copy.bind(this)
            }, "Copy")));
          }
        }]);

        return vf;
      }(G.Component),
          gf = vf;

      var yf = [{
        asin: "4575242896",
        term_popular_count: 28,
        isbn: "9784575242898",
        author: "\u9752\u67F3 \u78A7\u4EBA",
        popular_count: 158,
        title: "\u8D64\u305A\u304D\u3093\u3001\u65C5\u306E\u9014\u4E2D\u3067\u6B7B\u4F53\u3068\u51FA\u4F1A\u3046\u3002",
        status: "\u8CB8\u51FA\u53EF",
        cover: "https://cover.openbd.jp/9784575242898.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#c8b340", 0.49984745762711863], ["#286b31", 0.2905762711864407], ["#d5dece", 0.20957627118644068]],
          background: "#166c37",
          dhash: "84e9d0186db498d9",
          brisque: 2.016625655889328,
          blurhash: "JRKx8_,10fSt5[b_",
          aspect: 0.6779661016949152
        }
      }, {
        asin: "4478014582",
        term_popular_count: 6,
        isbn: "9784478014585",
        author: "\u5C71\u5D0E \u5EB7\u53F8",
        popular_count: 66,
        title: "\u5165\u9580 \u8003\u3048\u308B\u6280\u8853\u30FB\u66F8\u304F\u6280\u8853\u2015\u2015\u65E5\u672C\u4EBA\u306E\u30ED\u30B8\u30AB\u30EB\u30B7\u30F3\u30AD\u30F3\u30B0\u5B9F\u8DF5\u6CD5",
        status: "\u8CB8\u51FA\u53EF",
        cover: "https://cover.openbd.jp/9784478014585.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#0965a4", 0.9216608391608392], ["#bce1f0", 0.04559440559440559], ["#030d20", 0.032744755244755244]],
          background: "#0763a4",
          dhash: "8201b2a232028292",
          brisque: 16.10113172171222,
          blurhash: "J75QxcXr%Iae4pof",
          aspect: 0.6993006993006993
        }
      }, {
        asin: "4822289605",
        term_popular_count: 6,
        isbn: "9784822289607",
        author: "\u30CF\u30F3\u30B9\u30FB\u30ED\u30B9\u30EA\u30F3\u30B0",
        popular_count: 1122,
        title: "FACTFULNESS(\u30D5\u30A1\u30AF\u30C8\u30D5\u30EB\u30CD\u30B9) 10\u306E\u601D\u3044\u8FBC\u307F\u3092\u4E57\u308A\u8D8A\u3048\u3001\u30C7\u30FC\u30BF\u3092\u57FA\u306B\u4E16\u754C\u3092\u6B63\u3057\u304F\u898B\u308B\u7FD2\u6163",
        status: "\u8CB8\u51FA\u53EF",
        cover: "https://cover.openbd.jp/9784822289607.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f8f8d8", 0.5237543859649123], ["#bb9d34", 0.3126842105263158], ["#1e334b", 0.16356140350877194]],
          background: "#f6f6d7",
          dhash: "3c54acaea414d513",
          brisque: 35.999146798246414,
          blurhash: "J+OWZfWC_Nayngoe",
          aspect: 0.7017543859649122
        }
      }, {
        asin: "4575241660",
        term_popular_count: 6,
        isbn: "9784575241662",
        author: "\u9752\u67F3 \u78A7\u4EBA",
        popular_count: 146,
        title: "\u3080\u304B\u3057\u3080\u304B\u3057\u3042\u308B\u3068\u3053\u308D\u306B\u3001\u6B7B\u4F53\u304C\u3042\u308A\u307E\u3057\u305F\u3002",
        status: "\u8CB8\u51FA\u53EF",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "4492533877",
        term_popular_count: 5,
        isbn: "9784492533871",
        author: "\u30EA\u30F3\u30C0 \u30B0\u30E9\u30C3\u30C8\u30F3",
        popular_count: 276,
        title: "LIFE SHIFT(\u30E9\u30A4\u30D5\u30FB\u30B7\u30D5\u30C8)",
        status: "\u8CB8\u51FA\u53EF",
        cover: "https://cover.openbd.jp/9784492533871.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fdfdfd", 0.74328125], ["#cfc5d0", 0.1901736111111111], ["#1e1819", 0.06654513888888888]],
          background: "#fdfdfd",
          dhash: "4b4b8a3617558e8e",
          brisque: 1.095457841040087,
          blurhash: "JERV^Nt8xbWB~qbF",
          aspect: 0.6944444444444444
        }
      }, {
        asin: "4864106266",
        term_popular_count: 4,
        isbn: "9784864106269",
        author: "\u6B66\u7530\u53CB\u7D00",
        popular_count: 475,
        title: "\u300C\u6C17\u304C\u3064\u304D\u3059\u304E\u3066\u75B2\u308C\u308B\u300D\u304C\u9A5A\u304F\u307B\u3069\u306A\u304F\u306A\u308B \u300C\u7E4A\u7D30\u3055\u3093\u300D\u306E\u672C",
        status: "\u8CB8\u51FA\u53EF",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "434403435X",
        term_popular_count: 3,
        isbn: "9784344034358",
        author: "\u4F4F\u91CE \u3088\u308B",
        popular_count: 63,
        title: "\u9EA6\u672C\u4E09\u6B69\u306E\u597D\u304D\u306A\u3082\u306E",
        status: "\u8CB8\u51FA\u53EF",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "4800289203",
        term_popular_count: 3,
        isbn: "9784800289209",
        author: "\u4F0A\u85E4 \u4EAE\u592A",
        popular_count: 53,
        title: "\u30BC\u30ED\u304B\u3089\u306F\u3058\u3081\u308B! \u304A\u91D1\u306E\u3057\u304F\u307F\u898B\u308B\u3060\u3051\u30CE\u30FC\u30C8\u3010100\u4E07\u90E8\u7A81\u7834! \u300C\u898B\u308B\u3060\u3051\u30CE\u30FC\u30C8\u300D\u30B7\u30EA\u30FC\u30BA\u3011 (\u898B\u308B\u3060\u3051\u30CE\u30FC\u30C8\u30B7\u30EA\u30FC\u30BA)",
        status: "\u8CB8\u51FA\u53EF",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "4120053407",
        term_popular_count: 3,
        isbn: "9784120053405",
        author: "\u51EA\u826F \u3086\u3046",
        popular_count: 211,
        title: "\u6EC5\u3073\u306E\u524D\u306E\u30B7\u30E3\u30F3\u30B0\u30EA\u30E9 (\u5358\u884C\u672C)",
        status: "\u8CB8\u51FA\u53EF",
        cover: "https://cover.openbd.jp/9784120053405.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#e7e3e9", 0.8030716723549488], ["#bdaa98", 0.12017064846416382], ["#343e22", 0.07675767918088737]],
          background: "#e6e4ed",
          dhash: "931a3e1b7004000c",
          brisque: 11.597798076174143,
          blurhash: "JNPP[ro}4mX8oij[",
          aspect: 0.6825938566552902
        }
      }, {
        asin: "4103526815",
        term_popular_count: 3,
        isbn: "9784103526810",
        author: "\u30D6\u30EC\u30A4\u30C7\u30A3 \u307F\u304B\u3053",
        popular_count: 589,
        title: "\u307C\u304F\u306F\u30A4\u30A8\u30ED\u30FC\u3067\u30DB\u30EF\u30A4\u30C8\u3067\u3001\u3061\u3087\u3063\u3068\u30D6\u30EB\u30FC",
        status: "\u8CB8\u51FA\u53EF",
        cover: "https://cover.openbd.jp/9784103526810.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f5da09", 0.7359310344827587], ["#694307", 0.16827586206896553], ["#f7f6f0", 0.09579310344827587]],
          background: "#f6db05",
          dhash: "190b4324064d991c",
          brisque: 46.29108963830808,
          blurhash: "JPQbyL%h?DN2m~Z|",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4492046771",
        term_popular_count: 3,
        isbn: "9784492046777",
        author: "\u5CA1\u672C \u7D14\u5B50",
        popular_count: 195,
        title: "\u4E16\u754C\u6700\u9AD8\u306E\u8A71\u3057\u65B9\u2015\u20151000\u4EBA\u4EE5\u4E0A\u306E\u793E\u9577\u30FB\u4F01\u696D\u5E79\u90E8\u306E\u8A71\u3057\u65B9\u3092\u5909\u3048\u305F! \u300C\u4F1D\u8AAC\u306E\u5BB6\u5EAD\u6559\u5E2B\u300D\u304C\u6559\u3048\u308B\u9580\u5916\u4E0D\u51FA\u306E50\u306E\u30EB\u30FC\u30EB",
        status: "\u8CB8\u51FA\u53EF",
        cover: "https://cover.openbd.jp/9784492046777.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f7f7f3", 0.7052758620689655], ["#191a25", 0.1556551724137931], ["#9c8f89", 0.13906896551724138]],
          background: "#f7f6ef",
          dhash: "785b3333690dedcb",
          brisque: 12.565932214760863,
          blurhash: "JGPZljr=Hqr=?Hni",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4093865973",
        term_popular_count: 7,
        isbn: "9784093865975",
        author: "\u82F1\u96C4, \u76F8\u5834",
        popular_count: 80,
        title: "\u30A2\u30F3\u30C0\u30FC\u30AF\u30E9\u30B9",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784093865975.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#21211c", 0.8589827586206896], ["#f2ec1c", 0.08075862068965517], ["#a09c97", 0.06025862068965517]],
          background: "#11120d",
          dhash: "6dcccaccd0b0a424",
          brisque: 13.802636855745703,
          blurhash: "JBAw9Gob~maw4ray",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4822288668",
        term_popular_count: 6,
        isbn: "9784822288662",
        author: "\u5409\u68EE \u4FDD",
        popular_count: 153,
        title: "LIFE SCIENCE(\u30E9\u30A4\u30D5\u30B5\u30A4\u30A8\u30F3\u30B9) \u9577\u751F\u304D\u305B\u3056\u308B\u3092\u3048\u306A\u3044\u6642\u4EE3\u306E\u751F\u547D\u79D1\u5B66\u8B1B\u7FA9",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784822288662.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fafaf5", 0.6504421768707483], ["#e1d428", 0.20642857142857143], ["#121210", 0.14312925170068028]],
          background: "#fdfdfa",
          dhash: "a9b1646949575b5a",
          brisque: 1.5267761664684656,
          blurhash: "JPQm37W7^r%K?doI",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4776210193",
        term_popular_count: 5,
        isbn: "9784776210191",
        author: "\u9752\u6728 \u539A",
        popular_count: 170,
        title: "\u300C\u7A7A\u8179\u300D\u3053\u305D\u6700\u5F37\u306E\u30AF\u30B9\u30EA",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784776210191.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fbf7f5", 0.6739225589225589], ["#e05540", 0.2291919191919192], ["#191b1e", 0.09688552188552188]],
          background: "#fcfbfa",
          dhash: "1616ded59959a092",
          brisque: 22.129706909058513,
          blurhash: "JxRCA1$+*JNaQ-r=",
          aspect: 0.6734006734006734
        }
      }, {
        asin: "4576201891",
        term_popular_count: 4,
        isbn: "9784576201894",
        author: "\u6DE8\u5713, \u4ECA\u4E95",
        popular_count: 31,
        title: "\u304A\u5BFA\u306E\u3069\u3046\u3076\u3064\u56F3\u9451",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784576201894.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f6f7f5", 0.48352112676056336], ["#c4d4bb", 0.35110915492957745], ["#ad5830", 0.16536971830985916]],
          background: "#f7f7f6",
          dhash: "296f555469693b55",
          brisque: 16.877439042947543,
          blurhash: "J6Pst.lTB_Vq-asj",
          aspect: 0.704225352112676
        }
      }, {
        asin: "4309029426",
        term_popular_count: 4,
        isbn: "9784309029429",
        author: "\u6069\u7530\u9678",
        popular_count: 113,
        title: "\u7070\u306E\u5287\u5834",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "4822289060",
        term_popular_count: 4,
        isbn: "9784822289065",
        author: "\u85E4\u5409 \u8C4A",
        popular_count: 184,
        title: "\u300C\u6587\u7AE0\u8853\u306E\u30D9\u30B9\u30C8\u30BB\u30E9\u30FC100\u518A\u300D\u306E\u30DD\u30A4\u30F3\u30C8\u30921\u518A\u306B\u307E\u3068\u3081\u3066\u307F\u305F\u3002",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784822289065.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#6ec7ef", 0.5433673469387755], ["#f3f4f7", 0.3739625850340136], ["#1f1519", 0.08267006802721089]],
          background: "#6cc8f1",
          dhash: "4fe8e8e8861ea627",
          brisque: 26.54489566018387,
          blurhash: "JoKMLxkW1jaexCbI",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "408781694X",
        term_popular_count: 4,
        isbn: "9784087816945",
        author: "\u5C0F\u5DDD \u6D0B\u5B50",
        popular_count: 71,
        title: "\u305D\u3053\u306B\u5DE5\u5834\u304C\u3042\u308B\u304B\u304E\u308A",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784087816945.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f3eee6", 0.6364583333333333], ["#f5d914", 0.2010096153846154], ["#4e483d", 0.16253205128205128]],
          background: "#f8f6ec",
          dhash: "1a53252353537069",
          brisque: 32.87887614216331,
          blurhash: "JbQSx6x^XYj;$^M~",
          aspect: 0.6410256410256411
        }
      }, {
        asin: "4488565093",
        term_popular_count: 3,
        isbn: "9784488565091",
        author: "\u5EE3\u5D8B \u73B2\u5B50",
        popular_count: 9,
        title: "\u5996\u602A\u5949\u884C\u6240\u306E\u591A\u5FD9\u306A\u6BCE\u65E5 (\u5996\u602A\u306E\u5B50\u9810\u304B\u308A\u307E\u30597) (\u5275\u5143\u63A8\u7406\u6587\u5EAB)",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784488565091.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f3ecdd", 0.4365780141843972], ["#8e8f8d", 0.37292553191489364], ["#3a3028", 0.1904964539007092]],
          background: "#f4f7f5",
          dhash: "c7a7eb7b4b656e4f",
          brisque: 29.73073590035048,
          blurhash: "JMM7cG4=0J%NPDs*",
          aspect: 0.7092198581560284
        }
      }, {
        asin: "4863134789",
        term_popular_count: 3,
        isbn: "9784863134782",
        author: "\u30DD\u30FC\u30EB\u30FBA\u30FB\u30AA\u30D5\u30A3\u30C3\u30C8",
        popular_count: 153,
        title: "\u798D\u3044\u306E\u79D1\u5B66 \u6B63\u7FA9\u304C\u611A\u884C\u306B\u5909\u308F\u308B\u3068\u304D",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784863134782.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f0f6f6", 0.42962328767123287], ["#72b6b3", 0.413458904109589], ["#0e1116", 0.15691780821917808]],
          background: "#69b9b5",
          dhash: "e0a94f726ccc6849",
          brisque: 14.940284690653897,
          blurhash: "JjKx|]ay0eoLs:t7",
          aspect: 0.684931506849315
        }
      }, {
        asin: "4471191314",
        term_popular_count: 3,
        isbn: "9784471191313",
        author: "\u5C0F\u5DDD \u4EC1\u5FD7",
        popular_count: 20,
        title: "\u3080\u304B\u3057\u3080\u304B\u3057\u3042\u308B\u3068\u3053\u308D\u306B\u3001\u54F2\u5B66\u8005\u304C\u3084\u3063\u3066\u304D\u305F\u3002 7\u3064\u306E\u6614\u8A71\u3067\u5B66\u3076\u54F2\u5B66\u5165\u9580",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784471191313.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#ecf3df", 0.6838907849829352], ["#3d9f5e", 0.22315699658703073], ["#142113", 0.09295221843003414]],
          background: "#f2f4ed",
          dhash: "9bc3c4620119193c",
          brisque: 40.866635028570585,
          blurhash: "JQNd%9_M^PoxpIE0",
          aspect: 0.6825938566552902
        }
      }, {
        asin: "4299012364",
        term_popular_count: 3,
        isbn: "9784299012364",
        author: "\u65B0\u5DDD \u5E06\u7ACB",
        popular_count: 347,
        title: "\u30102021\u5E74\u30FB\u7B2C19\u56DE\u300C\u3053\u306E\u30DF\u30B9\u30C6\u30EA\u30FC\u304C\u3059\u3054\u3044! \u5927\u8CDE\u300D\u5927\u8CDE\u53D7\u8CDE\u4F5C\u3011\u5143\u5F7C\u306E\u907A\u8A00\u72B6 (\u300E\u3053\u306E\u30DF\u30B9\u300F\u5927\u8CDE\u30B7\u30EA\u30FC\u30BA)",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784299012364.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#d31a23", 0.6720847457627118], ["#303c4d", 0.18477966101694915], ["#e6c8b4", 0.14313559322033897]],
          background: "#d61822",
          dhash: "d2650d860e63b754",
          brisque: 7.643923655083512,
          blurhash: "JIMz2z{f]QB6zVo|",
          aspect: 0.6779661016949152
        }
      }, {
        asin: "4121101154",
        term_popular_count: 3,
        isbn: "9784121101150",
        author: "\u5742\u53E3 \u5B89\u7D00",
        popular_count: 22,
        title: "\u30D9\u30CD\u30BA\u30A8\u30E9-\u6EB6\u89E3\u3059\u308B\u6C11\u4E3B\u4E3B\u7FA9\u3001\u7834\u7DBB\u3059\u308B\u7D4C\u6E08 (\u4E2D\u516C\u9078\u66F8 115)",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "4041092698",
        term_popular_count: 3,
        isbn: "9784041092699",
        author: "\u6DF1\u7DD1 \u91CE\u5206",
        popular_count: 209,
        title: "\u3053\u306E\u672C\u3092\u76D7\u3080\u8005\u306F",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784041092699.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#2a3663", 0.6079729729729729], ["#947c97", 0.266722972972973], ["#e1e0eb", 0.12530405405405406]],
          background: "#273763",
          dhash: "682893b3b189c7b3",
          brisque: 7.9365529952924305,
          blurhash: "JOECeGx[o}oz0foL",
          aspect: 0.6756756756756757
        }
      }, {
        asin: "4591167984",
        term_popular_count: 3,
        isbn: "9784591167984",
        author: "\u7F8E\u667A\u5B50, \u9752\u5C71",
        popular_count: 362,
        title: "\u304A\u63A2\u3057\u7269\u306F\u56F3\u66F8\u5BA4\u307E\u3067",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784591167984.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#886f58", 0.5337414965986395], ["#c7b39e", 0.26879251700680273], ["#2f3230", 0.1974659863945578]],
          background: "#94745b",
          dhash: "cff473699cdde625",
          brisque: 7.6827126788305975,
          blurhash: "JKHd{U0fEgtQZ#xa",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4152100060",
        term_popular_count: 3,
        isbn: "9784152100061",
        author: "\u30AB\u30BA\u30AA\u30FB\u30A4\u30B7\u30B0\u30ED",
        popular_count: 245,
        title: "\u30AF\u30E9\u30E9\u3068\u304A\u65E5\u3055\u307E",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784152100061.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f8f8ef", 0.5572931034482759], ["#4c5225", 0.2219655172413793], ["#bea056", 0.22074137931034482]],
          background: "#f9f9f3",
          dhash: "c59a1c9cacda5313",
          brisque: 15.621050195765605,
          blurhash: "JVOplEVs~WV@ELtR",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4761270438",
        term_popular_count: 3,
        isbn: "9784761270438",
        author: "\u30B0\u30EC\u30C3\u30B0 \u30DE\u30AD\u30E5\u30FC\u30F3",
        popular_count: 418,
        title: "\u30A8\u30C3\u30BB\u30F3\u30B7\u30E3\u30EB\u601D\u8003 \u6700\u5C11\u306E\u6642\u9593\u3067\u6210\u679C\u3092\u6700\u5927\u306B\u3059\u308B",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784761270438.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fcfcfb", 0.8197909407665506], ["#454643", 0.1152787456445993], ["#9f9f9d", 0.06493031358885018]],
          background: "#fbfbfa",
          dhash: "311e333633000e4c",
          brisque: 10.799742345953604,
          blurhash: "JIR3TWIU9FRj~q-;",
          aspect: 0.6968641114982579
        }
      }, {
        asin: "4106108828",
        term_popular_count: 3,
        isbn: "9784106108822",
        author: "\u30A2\u30F3\u30C7\u30B7\u30E5\u30FB\u30CF\u30F3\u30BB\u30F3",
        popular_count: 448,
        title: "\u30B9\u30DE\u30DB\u8133 (\u65B0\u6F6E\u65B0\u66F8)",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784106108822.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#d5b37c", 0.5248753894080996], ["#f9e10b", 0.3054828660436137], ["#2b443b", 0.1696417445482866]],
          background: "#fbe105",
          dhash: "100b86f279910d69",
          brisque: 7.734939756668922,
          blurhash: "JOOo,h$vDBNg9G$y",
          aspect: 0.6230529595015576
        }
      }, {
        asin: "4309288391",
        term_popular_count: 3,
        isbn: "9784309288390",
        author: "\u30BF\u30B5\u30F3\u5FD7\u9EBB",
        popular_count: 71,
        title: "\u5FD7\u9EBB\u3055\u3093\u306E\u53F0\u6240\u30EB\u30FC\u30EB: \u6BCE\u65E5\u306E\u3054\u306F\u3093\u4F5C\u308A\u304C\u30E9\u30AF\u306B\u306A\u308B\u3001\u4E00\u751F\u3082\u306E\u306E\u6599\u7406\u306E\u30B3\u30C4",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "430922671X",
        term_popular_count: 3,
        isbn: "9784309226712",
        author: "\u30E6\u30F4\u30A1\u30EB\u30FB\u30CE\u30A2\u30FB\u30CF\u30E9\u30EA",
        popular_count: 249,
        title: "\u30B5\u30D4\u30A8\u30F3\u30B9\u5168\u53F2(\u4E0A)\u6587\u660E\u306E\u69CB\u9020\u3068\u4EBA\u985E\u306E\u5E78\u798F",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "479932599X",
        term_popular_count: 3,
        isbn: "9784799325995",
        author: "\u5CF6\u6751 \u83EF\u5B50",
        popular_count: 280,
        title: "\u30E2\u30F3\u30C6\u30C3\u30BD\u30FC\u30EA\u6559\u80B2\u30FB\u30EC\u30C3\u30B8\u30E7\u30FB\u30A8\u30DF\u30EA\u30A2\u6559\u80B2\u3092\u77E5\u308A\u5C3D\u304F\u3057\u305F \u30AA\u30C3\u30AF\u30B9\u30D5\u30A9\u30FC\u30C9\u5150\u7AE5\u767A\u9054\u5B66\u535A\u58EB\u304C\u8A9E\u308B \u81EA\u5206\u3067\u3067\u304D\u308B\u5B50\u306B\u80B2\u3064 \u307B\u3081\u65B9 \u53F1\u308A\u65B9 3\u6B73 \u301C 12\u6B73 \u306E\u5B50\u3069\u3082\u5BFE\u8C61",
        status: "\u8CB8\u51FA\u4E2D",
        cover: null,
        flag: 1,
        properties: null
      }, {
        asin: "4478108196",
        term_popular_count: 3,
        isbn: "9784478108192",
        author: "\u30B8\u30A7\u30A4\u30A8\u30EB\u30FB\u30B3\u30EA\u30F3\u30BA",
        popular_count: 175,
        title: "\u7236\u304C\u5A18\u306B\u4F1D\u3048\u308B\u81EA\u7531\u306B\u751F\u304D\u308B\u305F\u3081\u306E30\u306E\u6295\u8CC7\u306E\u6559\u3048",
        status: "\u8CB8\u51FA\u4E2D",
        cover: "https://cover.openbd.jp/9784478108192.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f6f9fb", 0.8816379310344827], ["#9f8b94", 0.07179310344827586], ["#101011", 0.04656896551724138]],
          background: "#fdfdfd",
          dhash: "5c3d70172704330f",
          brisque: 32.55882482756553,
          blurhash: "JLRMh}M{~VM{D+WB",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "447977226X",
        term_popular_count: 8,
        isbn: "9784479772262",
        author: "\u3082\u306E\u3059\u3054\u3044\u611B",
        popular_count: 27,
        title: "\u4ECA\u65E5\u3082\u3075\u305F\u308A\u3001\u30B9\u30AD\u30C3\u30D7\u3067~\u7D50\u5A5A\u3063\u3066 \u2036\u306A\u3093\u304B\u3044\u3044\u2033",
        status: "",
        cover: "https://cover.openbd.jp/9784479772262.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f8f4f5", 0.8163103448275862], ["#d07787", 0.11943103448275862], ["#303f49", 0.06425862068965517]],
          background: "#f9f4f5",
          dhash: "92ed6d0d5b63256d",
          brisque: 15.083640659494307,
          blurhash: "JBRM9]eU@YrDQ7sC",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4815602662",
        term_popular_count: 7,
        isbn: "9784815602666",
        author: "\u5C0F\u91CE\u96C5\u88D5",
        popular_count: 26,
        title: "\u5B87\u5B99\u306E\u8A71\u3092\u3057\u3088\u3046",
        status: "",
        cover: "https://cover.openbd.jp/9784815602666.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#2a3f3f", 0.44399647887323945], ["#c4bb8c", 0.3090492957746479], ["#9d070d", 0.24695422535211267]],
          background: "#a00710",
          dhash: "e996a2b2f4f0f196",
          brisque: 36.95906463636615,
          blurhash: "JHG*f;kD^6W=:gjY",
          aspect: 0.704225352112676
        }
      }, {
        asin: "4781680585",
        term_popular_count: 6,
        isbn: "9784781680583",
        author: "\u4E2D\u5C3E\u9686\u8056",
        popular_count: 11,
        title: "\u58F0\u512A\u3068\u3044\u3046\u751F\u304D\u65B9 (\u30A4\u30FC\u30B9\u30C8\u65B0\u66F8Q)",
        status: "",
        cover: "https://cover.openbd.jp/9784781680583.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f4efe7", 0.6133644859813084], ["#102863", 0.24797507788161993], ["#bd9169", 0.13866043613707166]],
          background: "#f8f7f4",
          dhash: "5945055b59a296ce",
          brisque: 47.794780987208895,
          blurhash: "JoO3,@ad~Vt7E3R*",
          aspect: 0.6230529595015576
        }
      }, {
        asin: "4098700298",
        term_popular_count: 6,
        isbn: "9784098700295",
        author: "\u7530\u6751 \u7531\u7F8E",
        popular_count: 27,
        title: "\u30DF\u30B9\u30C6\u30EA\u3068\u8A00\u3046\u52FF\u308C (1) (\u30D5\u30E9\u30EF\u30FC\u30B3\u30DF\u30C3\u30AF\u30B9\u30A2\u30EB\u30D5\u30A1)",
        status: "",
        cover: "https://cover.openbd.jp/9784098700295.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#241911", 0.43314285714285716], ["#a37b20", 0.31542857142857145], ["#eee1d5", 0.25142857142857145]],
          background: "#9c771d",
          dhash: "3317ce8f9b3932ee",
          brisque: 15.854084027489051,
          blurhash: "JPIqV}4ncaRN0JI[",
          aspect: 0.6349206349206349
        }
      }, {
        asin: "4757123779",
        term_popular_count: 6,
        isbn: "9784757123779",
        author: "\u30DE\u30B7\u30E5\u30FC\u30FB\u30CF\u30A4\u30F3\u30C9\u30DE\u30F3",
        popular_count: 35,
        title: "\u30C7\u30B8\u30BF\u30EB\u30A8\u30B3\u30CE\u30DF\u30FC\u306E\u7F60",
        status: "",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "434403760X",
        term_popular_count: 6,
        isbn: "9784344037601",
        author: "\u5C0F\u91CE \u4E00\u5149",
        popular_count: 23,
        title: "\u51B7\u9177 \u5EA7\u95939\u4EBA\u6BBA\u5BB3\u4E8B\u4EF6",
        status: "",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "4046050071",
        term_popular_count: 6,
        isbn: "9784046050076",
        author: "\u661F \u6E09",
        popular_count: 79,
        title: "99.9%\u306F\u5E78\u305B\u306E\u7D20\u4EBA",
        status: "",
        cover: "https://cover.openbd.jp/9784046050076.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f6f1f5", 0.5577891156462585], ["#c47b9f", 0.2992687074829932], ["#302621", 0.1429421768707483]],
          background: "#efecf1",
          dhash: "31e90957d2430458",
          brisque: 6.15701180357766,
          blurhash: "JGPF+mpa53rHD4pb",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4861528208",
        term_popular_count: 5,
        isbn: "9784861528200",
        author: "\u5CA1\u6839\u8C37 \u5B9F\u91CC",
        popular_count: 51,
        title: "\u4E16\u754C\u306E\u53F0\u6240\u63A2\u691C \u6599\u7406\u304B\u3089\u66AE\u3089\u3057\u3068\u793E\u4F1A\u304C\u307F\u3048\u308B",
        status: "",
        cover: null,
        flag: 1,
        properties: null
      }, {
        asin: "4788921332",
        term_popular_count: 5,
        isbn: "9784788921337",
        author: "\u7A42\u9AD8 \u552F\u5E0C",
        popular_count: 119,
        title: "\u672C\u6C17\u3067FIRE\u3092\u3081\u3056\u3059\u4EBA\u306E\u305F\u3081\u306E\u8CC7\u7523\u5F62\u6210\u5165\u9580  30\u6B73\u3067\u30BB\u30DF\u30EA\u30BF\u30A4\u30A2\u3057\u305F\u79C1\u306E\u9AD8\u914D\u5F53\u30FB\u5897\u914D\u682A\u6295\u8CC7\u6CD5",
        status: "",
        cover: "https://cover.openbd.jp/9784788921337.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f7f7f3", 0.5853071672354949], ["#efe719", 0.22921501706484643], ["#262117", 0.1854778156996587]],
          background: "#f1f1f1",
          dhash: "8e2e0a156f165569",
          brisque: 35.37456089273948,
          blurhash: "JoQ9=TRj-@xtV:WC",
          aspect: 0.6825938566552902
        }
      }, {
        asin: "4478109206",
        term_popular_count: 5,
        isbn: "9784478109205",
        author: "\u5E73\u585A \u77E5\u771F\u5B50",
        popular_count: 106,
        title: "Google\u5F0F10X\u30EA\u30E2\u30FC\u30C8\u4ED5\u4E8B\u8853\u2015\u2015\u3042\u306A\u305F\u306F\u307E\u3060\u30DB\u30F3\u30C8\u306EGoogle\u3092\u77E5\u3089\u306A\u3044",
        status: "",
        cover: "https://cover.openbd.jp/9784478109205.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fafafa", 0.47498239436619716], ["#211714", 0.37746478873239436], ["#ab9f5d", 0.14755281690140845]],
          background: "#fcfcfc",
          dhash: "650f1b61f1e89696",
          brisque: 32.15707802190215,
          blurhash: "J@MQw{WA_4ogt6WA",
          aspect: 0.704225352112676
        }
      }, {
        asin: "4103538619",
        term_popular_count: 5,
        isbn: "9784103538615",
        author: "\u65E9\u91CE \u9F8D\u4E94",
        popular_count: 68,
        title: "\u300C\u79D1\u5B66\u7684\u300D\u306F\u6B66\u5668\u306B\u306A\u308B \u4E16\u754C\u3092\u751F\u304D\u629C\u304F\u305F\u3081\u306E\u601D\u8003\u6CD5",
        status: "",
        cover: "https://cover.openbd.jp/9784103538615.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#e8fa05", 0.8809966216216216], ["#213207", 0.07076013513513514], ["#f8fab2", 0.04824324324324324]],
          background: "#e9fb03",
          dhash: "a54f535bac110190",
          brisque: 53.38258930290041,
          blurhash: "JDQAh7RX0BRoxnxt",
          aspect: 0.6756756756756757
        }
      }, {
        asin: "4344037286",
        term_popular_count: 5,
        isbn: "9784344037281",
        author: "\u68EE \u529F",
        popular_count: 34,
        title: "\u9B3C\u624D \u4F1D\u8AAC\u306E\u7DE8\u96C6\u4EBA \u9F4B\u85E4\u5341\u4E00",
        status: "",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "486651342X",
        term_popular_count: 5,
        isbn: "9784866513423",
        author: "\u5185\u6751\u9451\u4E09",
        popular_count: 30,
        title: "\u4EBA\u751F\u3001\u4F55\u3092\u6210\u3057\u305F\u304B\u3088\u308A\u3069\u3046\u751F\u304D\u308B\u304B",
        status: "",
        cover: "https://cover.openbd.jp/9784866513423.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#0b3a72", 0.5653169014084507], ["#a38c68", 0.24170774647887325], ["#f7f7f5", 0.19297535211267605]],
          background: "#0a3b75",
          dhash: "7270696969111616",
          brisque: 42.15042127603837,
          blurhash: "JRGbuKsl9+Wr8^jY",
          aspect: 0.704225352112676
        }
      }, {
        asin: "4761275340",
        term_popular_count: 5,
        isbn: "9784761275341",
        author: "\u53CA\u5DDD \u5E78\u4E45",
        popular_count: 21,
        title: "\u4F1D\u3048\u65B9\u306E\u9B54\u8853 \u96C6\u3081\u308B\u30FB\u898B\u629C\u304F\u30FB\u8868\u73FE\u3059\u308B",
        status: "",
        cover: "https://cover.openbd.jp/9784761275341.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fbfafa", 0.5599137931034482], ["#976078", 0.2623620689655172], ["#1e1413", 0.17772413793103448]],
          background: "#fcfbfb",
          dhash: "4d6969494bcbc1c1",
          brisque: 25.005101671791607,
          blurhash: "JoOM$}$N?]OEaKs9",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4023319287",
        term_popular_count: 4,
        isbn: "9784023319288",
        author: "\u6625\u98A8\u4EAD \u4E00\u4E4B\u8F14",
        popular_count: 17,
        title: "\u307E\u304F\u3089\u304C\u6765\u308A\u3066\u7B1B\u3092\u5439\u304F",
        status: "",
        cover: "https://cover.openbd.jp/9784023319288.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#937f64", 0.5830267558528428], ["#faf8f4", 0.2759030100334448], ["#4b4545", 0.14107023411371236]],
          background: "#fdfdfd",
          dhash: "6b6b735333294d5d",
          brisque: 16.234547814273668,
          blurhash: "JPKnC.t7OFj[~qof",
          aspect: 0.6688963210702341
        }
      }, {
        asin: "4087861260",
        term_popular_count: 4,
        isbn: "9784087861266",
        author: "\u30B8\u30E7\u30F3\u30FB\u30AD\u30E3\u30EA\u30FC\u30EB\u30FC",
        popular_count: 25,
        title: "BAD BLOOD \u30B7\u30EA\u30B3\u30F3\u30D0\u30EC\u30FC\u6700\u5927\u306E\u634F\u9020\u30B9\u30AD\u30E3\u30F3\u30C0\u30EB \u5168\u771F\u76F8",
        status: "",
        cover: "https://cover.openbd.jp/9784087861266.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#1e1b19", 0.42947368421052634], ["#ea3b3a", 0.3007017543859649], ["#f6f4ef", 0.26982456140350874]],
          background: "#1e1d1d",
          dhash: "f2f0e1d9f970770d",
          brisque: 20.08763830979271,
          blurhash: "JlL:1RNG4UoyTcxb",
          aspect: 0.7017543859649122
        }
      }, {
        asin: "4910063137",
        term_popular_count: 4,
        isbn: "9784910063133",
        author: "\u30D4\u30FC\u30BF\u30FC\u30FB\u30C7\u30A3\u30A2\u30DE\u30F3\u30C7\u30A3\u30B9",
        popular_count: 240,
        title: "2030\u5E74:\u3059\u3079\u3066\u304C\u300C\u52A0\u901F\u300D\u3059\u308B\u4E16\u754C\u306B\u5099\u3048\u3088",
        status: "",
        cover: "https://cover.openbd.jp/9784910063133.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#020403", 0.768639455782313], ["#44c640", 0.15681972789115647], ["#185616", 0.07454081632653062]],
          background: "#040604",
          dhash: "515a5e5a4e2a24bc",
          brisque: 25.841280356839974,
          blurhash: "J33UJ4l}R7c8Znp=",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4000614134",
        term_popular_count: 4,
        isbn: "9784000614139",
        author: "\u30C7\u30F4\u30A3\u30C3\u30C9\u30FB\u30B0\u30EC\u30FC\u30D0\u30FC",
        popular_count: 431,
        title: "\u30D6\u30EB\u30B7\u30C3\u30C8\u30FB\u30B8\u30E7\u30D6\u2015\u2015\u30AF\u30BD\u3069\u3046\u3067\u3082\u3044\u3044\u4ED5\u4E8B\u306E\u7406\u8AD6",
        status: "",
        cover: "https://cover.openbd.jp/9784000614139.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#d1d1d1", 0.8275880281690141], ["#fbfbfb", 0.12873239436619718], ["#1f1f1f", 0.04367957746478873]],
          background: "#d0d0d0",
          dhash: "0c6c6c4cca4c484a",
          brisque: 24.708851549091463,
          blurhash: "JAOWvn-;ofof00Rj",
          aspect: 0.704225352112676
        }
      }, {
        asin: "4087211355",
        term_popular_count: 4,
        isbn: "9784087211351",
        author: "\u658E\u85E4 \u5E78\u5E73",
        popular_count: 275,
        title: "\u4EBA\u65B0\u4E16\u306E\u300C\u8CC7\u672C\u8AD6\u300D (\u96C6\u82F1\u793E\u65B0\u66F8)",
        status: "",
        cover: "https://cover.openbd.jp/9784087211351.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#050303", 0.7478947368421053], ["#9a6b61", 0.1376315789473684], ["#eae7e6", 0.11447368421052631]],
          background: "#020202",
          dhash: "8e8c8db8b0a5b3b0",
          brisque: 86.35466805463736,
          blurhash: "JCCY~}_30ebHt,RP",
          aspect: 0.6191950464396285
        }
      }, {
        asin: "4309029272",
        term_popular_count: 4,
        isbn: "9784309029276",
        author: "\u4E45\u80FD\u9756",
        popular_count: 11,
        title: "\u5B9F\u9332 \u662D\u548C\u306E\u5927\u4E8B\u4EF6\u300C\u4E2D\u7D99\u73FE\u5834\u300D",
        status: "",
        cover: "",
        flag: 1,
        properties: null
      }, {
        asin: "4797680679",
        term_popular_count: 4,
        isbn: "9784797680676",
        author: "\u6A4B\u672C \u5E78\u58EB",
        popular_count: 96,
        title: "\u7269\u7406\u5B66\u8005\u306E\u3059\u3054\u3044\u601D\u8003\u6CD5 (\u30A4\u30F3\u30BF\u30FC\u30CA\u30B7\u30E7\u30CA\u30EB\u65B0\u66F8)",
        status: "",
        cover: "https://cover.openbd.jp/9784797680676.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f4f6f6", 0.44337920489296634], ["#ca0913", 0.4346024464831804], ["#2b5d6d", 0.12201834862385322]],
          background: "#fbfafa",
          dhash: "4243516993336f64",
          brisque: 29.890766856914496,
          blurhash: "J%OoYYoyUbkWt7jt",
          aspect: 0.6116207951070336
        }
      }, {
        asin: "4478108579",
        term_popular_count: 4,
        isbn: "9784478108574",
        author: "\u30AF\u30EA\u30B9\u30C6\u30A3\u30FC\u30FB\u30B7\u30A7\u30F3",
        popular_count: 213,
        title: "FIRE \u6700\u5F37\u306E\u65E9\u671F\u30EA\u30BF\u30A4\u30A2\u8853 \u6700\u901F\u3067\u304A\u91D1\u304B\u3089\u81EA\u7531\u306B\u306A\u308C\u308B\u7A76\u6975\u30E1\u30BD\u30C3\u30C9",
        status: "",
        cover: "https://cover.openbd.jp/9784478108574.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#faf7f4", 0.5633793103448276], ["#bb9c84", 0.23320689655172414], ["#611e1e", 0.2034137931034483]],
          background: "#faf9f7",
          dhash: "29289fb64fe4c455",
          brisque: 16.676041571996308,
          blurhash: "JMPPlvxu9Dxuk7x]",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4594086926",
        term_popular_count: 4,
        isbn: "9784594086923",
        author: "\u5C71\u8C37 \u3048\u308A\u5B50",
        popular_count: 5,
        title: "\u65B0\u3057\u3044\u300C\u65E5\u672C\u306E\u6B69\u304D\u65B9\u300D\u2015\u2015\u307E\u3060\u307E\u3060\u77E5\u3089\u306A\u3044\u9B45\u529B\u304C\u3044\u3063\u3071\u3044\u3001\u65C5\u3067\u5143\u6C17\u306B\u306A\u308D\u3046",
        status: "",
        cover: "https://cover.openbd.jp/9784594086923.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#e79285", 0.5113265306122449], ["#f7f5f4", 0.4654251700680272], ["#6a3f37", 0.02324829931972789]],
          background: "#ee9487",
          dhash: "1296849cd755d9f9",
          brisque: 19.680519691829062,
          blurhash: "JrRUmyaeQ8ofxZay",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4627880812",
        term_popular_count: 3,
        isbn: "9784627880818",
        author: "\u30B9\u30BF\u30CB\u30B9\u30E9\u30B9\u30FB\u30C9\u30A5\u30A2\u30F3\u30CC",
        popular_count: 14,
        title: "\u8133\u306F\u3053\u3046\u3057\u3066\u5B66\u3076:\u5B66\u7FD2\u306E\u795E\u7D4C\u79D1\u5B66\u3068\u6559\u80B2\u306E\u672A\u6765",
        status: "",
        cover: "https://cover.openbd.jp/9784627880818.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fbfdfd", 0.8421979865771813], ["#06208f", 0.10533557046979866], ["#84aeaa", 0.05246644295302014]],
          background: "#fbfcfc",
          dhash: "ebe646c686a0848c",
          brisque: 23.76336503285981,
          blurhash: "JOR3cxMz0LD*ofD*",
          aspect: 0.6711409395973155
        }
      }, {
        asin: "4065222346",
        term_popular_count: 3,
        isbn: "9784065222348",
        author: "\u3044\u3068\u3046 \u305B\u3044\u3053\u3046",
        popular_count: 20,
        title: "\u30AC\u30B6\u3001\u897F\u5CB8\u5730\u533A\u3001\u30A2\u30F3\u30DE\u30F3 \u300C\u56FD\u5883\u306A\u304D\u533B\u5E2B\u56E3\u300D\u3092\u898B\u306B\u884C\u304F",
        status: "",
        cover: "https://cover.openbd.jp/9784065222348.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#ececf0", 0.5846539792387543], ["#938580", 0.307318339100346], ["#1e1918", 0.10802768166089965]],
          background: "#fbfbfb",
          dhash: "4775555b4d2d315d",
          brisque: 16.554926273007794,
          blurhash: "JGNTqC%gsrWA01oz",
          aspect: 0.6920415224913494
        }
      }, {
        asin: "4087880486",
        term_popular_count: 3,
        isbn: "9784087880489",
        author: "\u91CE\u539F \u5E83\u5B50",
        popular_count: 88,
        title: "\u59BB\u304C\u53E3\u3092\u304D\u3044\u3066\u304F\u308C\u307E\u305B\u3093",
        status: "",
        cover: "https://cover.openbd.jp/9784087880489.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fbfcf9", 0.6077272727272728], ["#76bbe6", 0.20482517482517482], ["#516438", 0.18744755244755246]],
          background: "#fdfdfd",
          dhash: "15551313531d8c55",
          brisque: 27.468224854106523,
          blurhash: "JwOX8us:~TogESWU",
          aspect: 0.6993006993006993
        }
      }, {
        asin: "4478109699",
        term_popular_count: 3,
        isbn: "9784478109694",
        author: "\u85E4\u539F \u9EBB\u91CC\u83DC",
        popular_count: 106,
        title: "\u8003\u3048\u308B\u8853\u2500\u2500\u4EBA\u3068\u9055\u3046\u3053\u3068\u304C\u6B21\u3005\u3072\u3089\u3081\u304F\u3059\u3054\u3044\u601D\u8003\u30EF\u30B671",
        status: "",
        cover: "https://cover.openbd.jp/9784478109694.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fbf9f9", 0.8108965517241379], ["#130f0e", 0.1129655172413793], ["#a1484d", 0.07613793103448276]],
          background: "#fcfcfb",
          dhash: "0055552eaf0f0d49",
          brisque: 56.298250445977004,
          blurhash: "JRQ]sPx]?^RPROo}",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4798161918",
        term_popular_count: 3,
        isbn: "9784798161914",
        author: "\u68EE \u5DE7\u5C1A",
        popular_count: 46,
        title: "Python2\u5E74\u751F \u30B9\u30AF\u30EC\u30A4\u30D4\u30F3\u30B0\u306E\u3057\u304F\u307F \u4F53\u9A13\u3057\u3066\u308F\u304B\u308B\uFF01\u4F1A\u8A71\u3067\u307E\u306A\u3079\u308B\uFF01",
        status: "",
        cover: "https://cover.openbd.jp/9784798161914.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f7f7f2", 0.4164822134387352], ["#9b9a68", 0.3417391304347826], ["#386c2b", 0.24177865612648222]],
          background: "#fbfbf9",
          dhash: "2a4f4b0c4a52f2c6",
          brisque: 51.56801048683164,
          blurhash: "JsMHVvt8~EofoxM{",
          aspect: 0.7905138339920948
        }
      }, {
        asin: "4074453630",
        term_popular_count: 3,
        isbn: "9784074453634",
        author: "\u7D30\u5DDD\u30E2\u30E2",
        popular_count: 18,
        title: "\u6210\u529F\u3059\u308B\u5B50\u306F\u98DF\u3079\u7269\u304C9\u5272 \u5E7C\u5150\u98DF",
        status: "",
        cover: "https://cover.openbd.jp/9784074453634.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f8f4f2", 0.4998653846153846], ["#da907f", 0.31848076923076923], ["#42332c", 0.18165384615384617]],
          background: "#faf5f2",
          dhash: "445c4c6c6d3232c0",
          brisque: -10.815030144765416,
          blurhash: "JePY*eI^uhRoQnxa",
          aspect: 0.7692307692307693
        }
      }, {
        asin: "4478107327",
        term_popular_count: 3,
        isbn: "9784478107324",
        author: "\u6A3A\u6CA2 \u7D2B\u82D1",
        popular_count: 398,
        title: "\u7CBE\u795E\u79D1\u533B\u304C\u6559\u3048\u308B \u30B9\u30C8\u30EC\u30B9\u30D5\u30EA\u30FC\u8D85\u5927\u5168 \u2015\u2015 \u4EBA\u751F\u306E\u3042\u3089\u3086\u308B\u300C\u60A9\u307F\u30FB\u4E0D\u5B89\u30FB\u75B2\u308C\u300D\u3092\u306A\u304F\u3059\u305F\u3081\u306E\u30EA\u30B9\u30C8",
        status: "",
        cover: "https://cover.openbd.jp/9784478107324.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#faf9f7", 0.5126056338028169], ["#07165d", 0.27984154929577465], ["#907761", 0.20755281690140845]],
          background: "#03176f",
          dhash: "f0d8b8a8a88aecb0",
          brisque: 26.48398281435513,
          blurhash: "JJMtN^tRtRSj01j?",
          aspect: 0.704225352112676
        }
      }, {
        asin: "447811272X",
        term_popular_count: 3,
        isbn: "9784478112724",
        author: "\u5DE6\u5DFB \u5065\u7537",
        popular_count: 130,
        title: "\u7D76\u5BFE\u306B\u9762\u767D\u3044\u5316\u5B66\u5165\u9580 \u4E16\u754C\u53F2\u306F\u5316\u5B66\u3067\u3067\u304D\u3066\u3044\u308B",
        status: "",
        cover: "https://cover.openbd.jp/9784478112724.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#e5f1f1", 0.7587586206896552], ["#f3f513", 0.12855172413793103], ["#4c503b", 0.11268965517241379]],
          background: "#d8ecef",
          dhash: "2d295b614b655361",
          brisque: 59.723975725579265,
          blurhash: "JQPjlJS,9@bejQoF",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4065225469",
        term_popular_count: 3,
        isbn: "9784065225462",
        author: "\u30AF\u30FC\u30EA\u30A8\u30FB\u30B8\u30E3\u30DD\u30F3",
        popular_count: 91,
        title: "\u65B0\u3057\u3044\u4E16\u754C \u4E16\u754C\u306E\u8CE2\u4EBA16\u4EBA\u304C\u8A9E\u308B\u672A\u6765 (\u8B1B\u8AC7\u793E\u73FE\u4EE3\u65B0\u66F8)",
        status: "",
        cover: "https://cover.openbd.jp/9784065225462.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#0b5d69", 0.49384848484848487], ["#1b1612", 0.2932575757575758], ["#bea699", 0.21289393939393939]],
          background: "#04616f",
          dhash: "b1a89696b6b272a8",
          brisque: 7.708800267639475,
          blurhash: "JEBza:EhtStRG^-o",
          aspect: 0.6060606060606061
        }
      }, {
        asin: "4866801158",
        term_popular_count: 3,
        isbn: "9784866801155",
        author: "\u8449\u4E00",
        popular_count: 133,
        title: "\u587E\u3078\u884C\u304B\u306A\u304F\u3066\u3082\u6210\u7E3E\u304C\u8D85\u30A2\u30C3\u30D7! \u81EA\u5B85\u5B66\u7FD2\u306E\u5F37\u5316\u66F8",
        status: "",
        cover: "https://cover.openbd.jp/9784866801155.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f7f1e9", 0.539795918367347], ["#ae7b73", 0.30420068027210884], ["#33181d", 0.15600340136054422]],
          background: "#f9f5f0",
          dhash: "241e3c9515151567",
          brisque: 26.054524424622826,
          blurhash: "JLOMmW%$9WQ.rCx]",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4492223428",
        term_popular_count: 3,
        isbn: "9784492223420",
        author: "\u96C5\u88D5, \u5C0F\u91CE",
        popular_count: 9,
        title: "\u5B87\u5B99\u3092\u76EE\u6307\u3057\u3066\u6D77\u3092\u6E21\u308B MIT\u3067\u5F97\u305F\u5B66\u3073\u3001NASA\u8EE2\u8077\u3092\u6C7A\u3081\u305F\u7406\u7531",
        status: "",
        cover: "https://cover.openbd.jp/9784492223420.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f5f8f5", 0.48205574912891985], ["#4ca0d4", 0.4355226480836237], ["#49454e", 0.08242160278745644]],
          background: "#fbfbf9",
          dhash: "674103654d5d5f63",
          brisque: 32.66786410040592,
          blurhash: "JjLhuks.0*s:^iWX",
          aspect: 0.6968641114982579
        }
      }, {
        asin: "4140818492",
        term_popular_count: 3,
        isbn: "9784140818497",
        author: "\u548C\u6A39, \u85E4\u539F",
        popular_count: 11,
        title: "\u671D\u9BAE\u6226\u4E89\u3092\u6226\u3063\u305F\u65E5\u672C\u4EBA",
        status: "",
        cover: "https://cover.openbd.jp/9784140818497.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f6f3f2", 0.5553938356164384], ["#d63e24", 0.313236301369863], ["#452a25", 0.13136986301369863]],
          background: "#fbfafa",
          dhash: "cccccc969644843c",
          brisque: 21.084484295076066,
          blurhash: "J;P=sYb^.mniv#WV",
          aspect: 0.684931506849315
        }
      }, {
        asin: "4492800905",
        term_popular_count: 3,
        isbn: "9784492800904",
        author: "\u30B8\u30E0\u30FB\u30AF\u30A6\u30A3\u30C3\u30AF",
        popular_count: 76,
        title: "LIMITLESS \u8D85\u52A0\u901F\u5B66\u7FD2: \u4EBA\u751F\u3092\u5909\u3048\u308B\u300C\u5B66\u3073\u65B9\u300D\u306E\u6388\u696D",
        status: "",
        cover: "https://cover.openbd.jp/9784492800904.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#201614", 0.5316551724137931], ["#3c3332", 0.398], ["#d3c1c4", 0.0703448275862069]],
          background: "#211615",
          dhash: "4682818c525068a6",
          brisque: 46.054187842320374,
          blurhash: "JA9GzD%M00WB.7of",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4106108968",
        term_popular_count: 3,
        isbn: "9784106108969",
        author: "\u4E2D\u6751 \u9038\u90CE",
        popular_count: 15,
        title: "\u30ED\u30B7\u30A2\u3092\u6C7A\u3057\u3066\u4FE1\u3058\u308B\u306A (\u65B0\u6F6E\u65B0\u66F8)",
        status: "",
        cover: "https://cover.openbd.jp/9784106108969.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#debc8b", 0.6194704049844236], ["#f69809", 0.2120093457943925], ["#22110f", 0.1685202492211838]],
          background: "#d1a464",
          dhash: "10cc1769f0165d4f",
          brisque: 6.860689648161582,
          blurhash: "JQOendWBFss,8wof",
          aspect: 0.6230529595015576
        }
      }, {
        asin: "4798165077",
        term_popular_count: 3,
        isbn: "9784798165073",
        author: "\u4E09\u6FA4 \u76F4\u52A0",
        popular_count: 20,
        title: "\u30D3\u30B8\u30E5\u30A2\u30EB\u601D\u8003\u5927\u5168 \u554F\u984C\u89E3\u6C7A\u306E\u30A2\u30A4\u30C7\u30A2\u304C\u6E67\u304D\u51FA\u308B37\u306E\u6280\u6CD5",
        status: "",
        cover: "https://cover.openbd.jp/9784798165073.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f4f2ed", 0.6472727272727272], ["#db472b", 0.2853679653679654], ["#140e0c", 0.06735930735930735]],
          background: "#f6f8f5",
          dhash: "9c6917162f458786",
          brisque: 32.02412767875168,
          blurhash: "JzQuyzs.qFbYVDWX",
          aspect: 0.8658008658008658
        }
      }, {
        asin: "4828422552",
        term_popular_count: 3,
        isbn: "9784828422558",
        author: "\u5C71\u5D0E \u62D3\u5DF3",
        popular_count: 13,
        title: "\u5F15\u304D\u51FA\u3059\u529B \u3042\u306A\u305F\u306E\u4E2D\u306E\u300C\u5B9D\u300D\u3092\u6398\u308A\u304A\u3053\u3059!",
        status: "",
        cover: "https://cover.openbd.jp/9784828422558.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f7ec0a", 0.6038945578231293], ["#0d0b05", 0.3407823129251701], ["#b9b79f", 0.05532312925170068]],
          background: "#f8ec06",
          dhash: "3c4f5c595b389084",
          brisque: 57.71581648925323,
          blurhash: "J%NmeCbH~MN1IYt3",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4023318523",
        term_popular_count: 3,
        isbn: "9784023318526",
        author: "\u30B0\u30E9\u30F3\u30C8\u30FB\u30B5\u30D0\u30C6\u30A3\u30A8",
        popular_count: 68,
        title: "FIRE \u6700\u901F\u3067\u7D4C\u6E08\u7684\u81EA\u7ACB\u3092\u5B9F\u73FE\u3059\u308B\u65B9\u6CD5",
        status: "",
        cover: "https://cover.openbd.jp/9784023318526.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#edfd5f", 0.9332482993197279], ["#203106", 0.04840136054421769], ["#8ca627", 0.01835034013605442]],
          background: "#ecfd5e",
          dhash: "b24d4d18a200104c",
          brisque: 56.104676561792274,
          blurhash: "JAQmyRt64aa#ayj[",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4532358639",
        term_popular_count: 3,
        isbn: "9784532358631",
        author: "\u30D5\u30A1\u30EA\u30FC\u30C9\u30FB\u30B6\u30AB\u30EA\u30A2",
        popular_count: 26,
        title: "\u30D1\u30F3\u30C7\u30DF\u30C3\u30AF\u5F8C\u306E\u4E16\u754C 10\u306E\u6559\u8A13",
        status: "",
        cover: "https://cover.openbd.jp/9784532358631.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f8fbfb", 0.8340344827586207], ["#2d8eb9", 0.09222413793103448], ["#95c8d9", 0.07374137931034483]],
          background: "#fbfcfc",
          dhash: "6d69197567655951",
          brisque: 3.2735446897901,
          blurhash: "JDQ,m]pJ~VVYITkX",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4121017900",
        term_popular_count: 3,
        isbn: "9784121017901",
        author: "\u5EE3\u91CE \u7531\u7F8E\u5B50",
        popular_count: 69,
        title: "\u6279\u8A55\u7406\u8AD6\u5165\u9580\u2015\u300E\u30D5\u30E9\u30F3\u30B1\u30F3\u30B7\u30E5\u30BF\u30A4\u30F3\u300F\u89E3\u5256\u8B1B\u7FA9 (\u4E2D\u516C\u65B0\u66F8)",
        status: "",
        cover: "https://cover.openbd.jp/9784121017901.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#0c2123", 0.5307301587301587], ["#f5edea", 0.27236507936507937], ["#db8871", 0.19690476190476192]],
          background: "#f3f4f4",
          dhash: "4d45555d317e66e6",
          brisque: 39.73923841683185,
          blurhash: "JgJtMDX81foL~Vaz",
          aspect: 0.6349206349206349
        }
      }, {
        asin: "4860114558",
        term_popular_count: 3,
        isbn: "9784860114558",
        author: "\u7530\u53E3\u4FCA\u6A39",
        popular_count: 19,
        title: "\u65E5\u3005\u7FFB\u8A33\u3056\u3093\u3052 \u30A8\u30F3\u30BF\u30E1\u7FFB\u8A33\u3053\u306E\u56DB\u5341\u5E74",
        status: "",
        cover: "https://cover.openbd.jp/9784860114558.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#fdfcfc", 0.8806462585034014], ["#272323", 0.06200680272108844], ["#9d867b", 0.057346938775510205]],
          background: "#fdfdfd",
          dhash: "15551935078c2908",
          brisque: 5.844995355015698,
          blurhash: "JDR:E8-;4ToL_NM{",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4296105353",
        term_popular_count: 3,
        isbn: "9784296105359",
        author: "\u65E5\u7D4C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF",
        popular_count: 115,
        title: "\u307F\u305A\u307B\u9280\u884C\u30B7\u30B9\u30C6\u30E0\u7D71\u5408\u3001\u82E6\u95D8\u306E19\u5E74\u53F2 \u53F2\u4E0A\u6700\u5927\u306EIT\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u300C3\u5EA6\u76EE\u306E\u6B63\u76F4\u300D",
        status: "",
        cover: "https://cover.openbd.jp/9784296105359.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#292c4e", 0.6346768707482994], ["#7a7a7c", 0.24564625850340135], ["#f0f1f3", 0.11967687074829932]],
          background: "#282b51",
          dhash: "c4e8c8baba923676",
          brisque: 35.29916765610923,
          blurhash: "JDDJSJD%4|t801xu",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4478112223",
        term_popular_count: 3,
        isbn: "9784478112229",
        author: "\u9060\u85E4 \u6D0B",
        popular_count: 47,
        title: "10\u4E07\u5186\u304B\u3089\u59CB\u3081\u308B! \u5C0F\u578B\u682A\u96C6\u4E2D\u6295\u8CC7\u30671\u5104\u5186 \u5B9F\u8DF5\u30D0\u30A4\u30D6\u30EB",
        status: "",
        cover: "https://cover.openbd.jp/9784478112229.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f5f6f6", 0.48293103448275865], ["#754d41", 0.31453448275862067], ["#0f5795", 0.20253448275862068]],
          background: "#f8fafb",
          dhash: "574525494dd7f662",
          brisque: 20.449528775676725,
          blurhash: "JdMH7Hog_Nt7NZjb",
          aspect: 0.6896551724137931
        }
      }, {
        asin: "4284204785",
        term_popular_count: 3,
        isbn: "9784284204781",
        author: "\u6C60\u8C37\u88D5\u4E8C",
        popular_count: 49,
        title: "\u6771\u5927\u6559\u6388\u304C\u6559\u3048\u308B! \u30C7\u30AD\u308B\u5927\u4EBA\u306E\u52C9\u5F37\u8133\u306E\u4F5C\u308A\u65B9",
        status: "",
        cover: "https://cover.openbd.jp/9784284204781.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f9f4f3", 0.598080985915493], ["#292220", 0.2012676056338028], ["#d55c54", 0.20065140845070423]],
          background: "#f9f7f1",
          dhash: "3e73574f6f54b088",
          brisque: 11.540075479032197,
          blurhash: "JhPPcXaJ?^NGMcxZ",
          aspect: 0.704225352112676
        }
      }, {
        asin: "4101036160",
        term_popular_count: 3,
        isbn: "9784101036168",
        author: "\u8A60\u7F8E, \u5C71\u7530",
        popular_count: 34,
        title: "\u307C\u304F\u306F\u52C9\u5F37\u304C\u3067\u304D\u306A\u3044 (\u65B0\u6F6E\u6587\u5EAB)",
        status: "",
        cover: "https://cover.openbd.jp/9784101036168.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#d3eadf", 0.8074216027874564], ["#c4a876", 0.12365853658536585], ["#5f3426", 0.0689198606271777]],
          background: "#d2e1dd",
          dhash: "913ad87a2e8bd593",
          brisque: 11.734837915357133,
          blurhash: "JGNw};x?ROoIUb$w",
          aspect: 0.6968641114982579
        }
      }, {
        asin: "4046047976",
        term_popular_count: 3,
        isbn: "9784046047977",
        author: "\u9234\u6728 \u5149",
        popular_count: 66,
        title: "\u5922\u3092\u53F6\u3048\u308B\u305F\u3081\u306E\u52C9\u5F37\u6CD5",
        status: "",
        cover: "https://cover.openbd.jp/9784046047977.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f2f6f8", 0.8447959183673469], ["#8bbcc4", 0.09435374149659864], ["#313033", 0.06085034013605442]],
          background: "#f7f8f9",
          dhash: "665d66632b4d5d47",
          brisque: 25.2203661597118,
          blurhash: "J7Qc*dyEPCFx?]Dh",
          aspect: 0.6802721088435374
        }
      }, {
        asin: "4798153192",
        term_popular_count: 3,
        isbn: "9784798153193",
        author: "\u68EE \u5DE7\u5C1A",
        popular_count: 47,
        title: "Python 1\u5E74\u751F \u4F53\u9A13\u3057\u3066\u308F\u304B\u308B\uFF01\u4F1A\u8A71\u3067\u307E\u306A\u3079\u308B\uFF01\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u3057\u304F\u307F",
        status: "",
        cover: "https://cover.openbd.jp/9784798153193.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#f8f8f4", 0.3978260869565217], ["#a2b662", 0.32146245059288536], ["#2b772b", 0.28071146245059286]],
          background: "#fbfcf9",
          dhash: "2b0fc6e064628286",
          brisque: 47.43419744319951,
          blurhash: "JyL#p|WC~EjZs;f*",
          aspect: 0.7905138339920948
        }
      }, {
        asin: "400023742X",
        term_popular_count: 3,
        isbn: "9784000237420",
        author: "Solnit,Rebecca",
        popular_count: 52,
        title: "\u305D\u308C\u3092,\u771F\u306E\u540D\u3067\u547C\u3076\u306A\u3089\u3070: \u5371\u6A5F\u306E\u6642\u4EE3\u3068\u8A00\u8449\u306E\u529B",
        status: "",
        cover: "https://cover.openbd.jp/9784000237420.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#d60c16", 0.8244501718213059], ["#e26354", 0.10764604810996564], ["#fbc7b5", 0.06790378006872852]],
          background: "#ce151a",
          dhash: "d2929296dc88b8da",
          brisque: 22.381169451463705,
          blurhash: "J1PKcd?uTetl01S#",
          aspect: 0.6872852233676976
        }
      }, {
        asin: "4480017208",
        term_popular_count: 3,
        isbn: "9784480017208",
        author: "\u5FB9, \u6B66\u7530",
        popular_count: 7,
        title: "\u305A\u3070\u308A\u6771\u4EAC2020 (\u7B51\u6469\u9078\u66F8)",
        status: "",
        cover: "https://cover.openbd.jp/9784480017208.jpg",
        flag: 1,
        properties: {
          version: 1,
          dominant: [["#e8ebef", 0.4974310344827586], ["#2d2e37", 0.2716206896551724], ["#737276", 0.23094827586206895]],
          background: "#fdfdfd",
          dhash: "4d65396961313060",
          brisque: 24.27176022883131,
          blurhash: "JlK-wjoyx]Rk_4t6",
          aspect: 0.6896551724137931
        }
      }];

      var wf = /*#__PURE__*/function (_Re$Component) {
        _inherits(wf, _Re$Component);

        var _super5 = _createSuper(wf);

        function wf(t) {
          var _this7;

          _classCallCheck(this, wf);

          _this7 = _super5.call(this, t);
          _this7.state = {
            items: yf,
            size: 200,
            width: 100,
            margin: 10,
            rowCount: 10,
            rowFactors: null
          }, _this7.hiradumi = null, _this7.setHiradumi = function (n) {
            _this7.hiradumi = n;
          };
          return _this7;
        }

        _createClass(wf, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            document.body.clientWidth > 767 ? this.setState({
              rowFactors: [1, 0.9, 0.8, 0.7]
            }) : this.setState({
              rowFactors: [0.97, 0.75, 0.65, 0.55]
            });
          }
        }, {
          key: "onChange",
          value: function onChange(t) {
            var _this8 = this;

            this.setState(t, function () {
              _this8.hiradumi.setRowData();
            });
          }
        }, {
          key: "render",
          value: function render() {
            return this.state.items ? Re.default.createElement("div", null, this.state.rowFactors ? Re.default.createElement(Re.default.Fragment, null, Re.default.createElement(gf, {
              size: this.state.size,
              width: this.state.width,
              margin: this.state.margin,
              rowCount: this.state.rowCount,
              rowFactors: this.state.rowFactors,
              onChange: this.onChange.bind(this)
            }), Re.default.createElement("div", {
              style: {
                width: this.state.width + "%",
                margin: "0 auto"
              }
            }, Re.default.createElement(mf, {
              ref: this.setHiradumi,
              data: this.state.items,
              size: this.state.size,
              margin: this.state.margin,
              rowCount: this.state.rowCount,
              rowFactors: this.state.rowFactors,
              itemComponent: null
            }))) : null) : null;
          }
        }]);

        return wf;
      }(Re.Component),
          _f = wf;

      Sf.default.render(kf.default.createElement(_f, null), document.getElementById("root"));
    })();
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */

    /** @license React v0.20.2
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    /** @license React v17.0.2
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

  }, {}]
}, {}, [1]);