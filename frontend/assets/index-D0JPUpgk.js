(function () {
  const P = document.createElement("link").relList;
  if (P && P.supports && P.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) U(R);
  new MutationObserver((R) => {
    for (const I of R)
      if (I.type === "childList")
        for (const G of I.addedNodes)
          G.tagName === "LINK" && G.rel === "modulepreload" && U(G);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(R) {
    const I = {};
    return (
      R.integrity && (I.integrity = R.integrity),
      R.referrerPolicy && (I.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (I.credentials = "include")
        : R.crossOrigin === "anonymous"
          ? (I.credentials = "omit")
          : (I.credentials = "same-origin"),
      I
    );
  }
  function U(R) {
    if (R.ep) return;
    R.ep = !0;
    const I = m(R);
    fetch(R.href, I);
  }
})();
function If(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default")
    ? S.default
    : S;
}
var _u = { exports: {} },
  kr = {},
  ju = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Df() {
  if (Na) return F;
  Na = 1;
  var S = Symbol.for("react.element"),
    P = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    U = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    I = Symbol.for("react.provider"),
    G = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    ge = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    le = Symbol.iterator;
  function ee(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (le && f[le]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var $e = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qe = Object.assign,
    te = {};
  function X(f, y, D) {
    ((this.props = f),
      (this.context = y),
      (this.refs = te),
      (this.updater = D || $e));
  }
  ((X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (f, y) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, f, y, "setState");
    }),
    (X.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    }));
  function yt() {}
  yt.prototype = X.prototype;
  function at(f, y, D) {
    ((this.props = f),
      (this.context = y),
      (this.refs = te),
      (this.updater = D || $e));
  }
  var be = (at.prototype = new yt());
  ((be.constructor = at), Qe(be, X.prototype), (be.isPureReactComponent = !0));
  var Se = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    je = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(f, y, D) {
    var A,
      B = {},
      H = null,
      Z = null;
    if (y != null)
      for (A in (y.ref !== void 0 && (Z = y.ref),
      y.key !== void 0 && (H = "" + y.key),
      y))
        et.call(y, A) && !Le.hasOwnProperty(A) && (B[A] = y[A]);
    var K = arguments.length - 2;
    if (K === 1) B.children = D;
    else if (1 < K) {
      for (var ne = Array(K), Ue = 0; Ue < K; Ue++) ne[Ue] = arguments[Ue + 2];
      B.children = ne;
    }
    if (f && f.defaultProps)
      for (A in ((K = f.defaultProps), K)) B[A] === void 0 && (B[A] = K[A]);
    return {
      $$typeof: S,
      type: f,
      key: H,
      ref: Z,
      props: B,
      _owner: je.current,
    };
  }
  function Nt(f, y) {
    return {
      $$typeof: S,
      type: f.type,
      key: y,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function gt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === S;
  }
  function Yt(f) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (D) {
        return y[D];
      })
    );
  }
  var ct = /\/+/g;
  function Ae(f, y) {
    return typeof f == "object" && f !== null && f.key != null
      ? Yt("" + f.key)
      : y.toString(36);
  }
  function tt(f, y, D, A, B) {
    var H = typeof f;
    (H === "undefined" || H === "boolean") && (f = null);
    var Z = !1;
    if (f === null) Z = !0;
    else
      switch (H) {
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case S:
            case P:
              Z = !0;
          }
      }
    if (Z)
      return (
        (Z = f),
        (B = B(Z)),
        (f = A === "" ? "." + Ae(Z, 0) : A),
        Se(B)
          ? ((D = ""),
            f != null && (D = f.replace(ct, "$&/") + "/"),
            tt(B, y, D, "", function (Ue) {
              return Ue;
            }))
          : B != null &&
            (gt(B) &&
              (B = Nt(
                B,
                D +
                  (!B.key || (Z && Z.key === B.key)
                    ? ""
                    : ("" + B.key).replace(ct, "$&/") + "/") +
                  f,
              )),
            y.push(B)),
        1
      );
    if (((Z = 0), (A = A === "" ? "." : A + ":"), Se(f)))
      for (var K = 0; K < f.length; K++) {
        H = f[K];
        var ne = A + Ae(H, K);
        Z += tt(H, y, D, ne, B);
      }
    else if (((ne = ee(f)), typeof ne == "function"))
      for (f = ne.call(f), K = 0; !(H = f.next()).done; )
        ((H = H.value), (ne = A + Ae(H, K++)), (Z += tt(H, y, D, ne, B)));
    else if (H === "object")
      throw (
        (y = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Z;
  }
  function ft(f, y, D) {
    if (f == null) return f;
    var A = [],
      B = 0;
    return (
      tt(f, A, "", "", function (H) {
        return y.call(D, H, B++);
      }),
      A
    );
  }
  function Te(f) {
    if (f._status === -1) {
      var y = f._result;
      ((y = y()),
        y.then(
          function (D) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = D));
          },
          function (D) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = D));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = y)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var oe = { current: null },
    x = { transition: null },
    O = {
      ReactCurrentDispatcher: oe,
      ReactCurrentBatchConfig: x,
      ReactCurrentOwner: je,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (F.Children = {
      map: ft,
      forEach: function (f, y, D) {
        ft(
          f,
          function () {
            y.apply(this, arguments);
          },
          D,
        );
      },
      count: function (f) {
        var y = 0;
        return (
          ft(f, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (f) {
        return (
          ft(f, function (y) {
            return y;
          }) || []
        );
      },
      only: function (f) {
        if (!gt(f))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return f;
      },
    }),
    (F.Component = X),
    (F.Fragment = m),
    (F.Profiler = R),
    (F.PureComponent = at),
    (F.StrictMode = U),
    (F.Suspense = V),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (F.act = _),
    (F.cloneElement = function (f, y, D) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            ".",
        );
      var A = Qe({}, f.props),
        B = f.key,
        H = f.ref,
        Z = f._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((H = y.ref), (Z = je.current)),
          y.key !== void 0 && (B = "" + y.key),
          f.type && f.type.defaultProps)
        )
          var K = f.type.defaultProps;
        for (ne in y)
          et.call(y, ne) &&
            !Le.hasOwnProperty(ne) &&
            (A[ne] = y[ne] === void 0 && K !== void 0 ? K[ne] : y[ne]);
      }
      var ne = arguments.length - 2;
      if (ne === 1) A.children = D;
      else if (1 < ne) {
        K = Array(ne);
        for (var Ue = 0; Ue < ne; Ue++) K[Ue] = arguments[Ue + 2];
        A.children = K;
      }
      return { $$typeof: S, type: f.type, key: B, ref: H, props: A, _owner: Z };
    }),
    (F.createContext = function (f) {
      return (
        (f = {
          $$typeof: G,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: I, _context: f }),
        (f.Consumer = f)
      );
    }),
    (F.createElement = Ke),
    (F.createFactory = function (f) {
      var y = Ke.bind(null, f);
      return ((y.type = f), y);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (f) {
      return { $$typeof: Q, render: f };
    }),
    (F.isValidElement = gt),
    (F.lazy = function (f) {
      return { $$typeof: he, _payload: { _status: -1, _result: f }, _init: Te };
    }),
    (F.memo = function (f, y) {
      return { $$typeof: ge, type: f, compare: y === void 0 ? null : y };
    }),
    (F.startTransition = function (f) {
      var y = x.transition;
      x.transition = {};
      try {
        f();
      } finally {
        x.transition = y;
      }
    }),
    (F.unstable_act = _),
    (F.useCallback = function (f, y) {
      return oe.current.useCallback(f, y);
    }),
    (F.useContext = function (f) {
      return oe.current.useContext(f);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (f) {
      return oe.current.useDeferredValue(f);
    }),
    (F.useEffect = function (f, y) {
      return oe.current.useEffect(f, y);
    }),
    (F.useId = function () {
      return oe.current.useId();
    }),
    (F.useImperativeHandle = function (f, y, D) {
      return oe.current.useImperativeHandle(f, y, D);
    }),
    (F.useInsertionEffect = function (f, y) {
      return oe.current.useInsertionEffect(f, y);
    }),
    (F.useLayoutEffect = function (f, y) {
      return oe.current.useLayoutEffect(f, y);
    }),
    (F.useMemo = function (f, y) {
      return oe.current.useMemo(f, y);
    }),
    (F.useReducer = function (f, y, D) {
      return oe.current.useReducer(f, y, D);
    }),
    (F.useRef = function (f) {
      return oe.current.useRef(f);
    }),
    (F.useState = function (f) {
      return oe.current.useState(f);
    }),
    (F.useSyncExternalStore = function (f, y, D) {
      return oe.current.useSyncExternalStore(f, y, D);
    }),
    (F.useTransition = function () {
      return oe.current.useTransition();
    }),
    (F.version = "18.3.1"),
    F
  );
}
var za;
function Tu() {
  return (za || ((za = 1), (ju.exports = Df())), ju.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Ff() {
  if (Pa) return kr;
  Pa = 1;
  var S = Tu(),
    P = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    U = Object.prototype.hasOwnProperty,
    R = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function G(Q, V, ge) {
    var he,
      le = {},
      ee = null,
      $e = null;
    (ge !== void 0 && (ee = "" + ge),
      V.key !== void 0 && (ee = "" + V.key),
      V.ref !== void 0 && ($e = V.ref));
    for (he in V) U.call(V, he) && !I.hasOwnProperty(he) && (le[he] = V[he]);
    if (Q && Q.defaultProps)
      for (he in ((V = Q.defaultProps), V))
        le[he] === void 0 && (le[he] = V[he]);
    return {
      $$typeof: P,
      type: Q,
      key: ee,
      ref: $e,
      props: le,
      _owner: R.current,
    };
  }
  return ((kr.Fragment = m), (kr.jsx = G), (kr.jsxs = G), kr);
}
var La;
function Af() {
  return (La || ((La = 1), (_u.exports = Ff())), _u.exports);
}
var c = Af(),
  Pe = Tu();
const Uf = If(Pe);
var Tl = {},
  Nu = { exports: {} },
  Fe = {},
  zu = { exports: {} },
  Pu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Vf() {
  return (
    Ta ||
      ((Ta = 1),
      (function (S) {
        function P(x, O) {
          var _ = x.length;
          x.push(O);
          e: for (; 0 < _; ) {
            var f = (_ - 1) >>> 1,
              y = x[f];
            if (0 < R(y, O)) ((x[f] = O), (x[_] = y), (_ = f));
            else break e;
          }
        }
        function m(x) {
          return x.length === 0 ? null : x[0];
        }
        function U(x) {
          if (x.length === 0) return null;
          var O = x[0],
            _ = x.pop();
          if (_ !== O) {
            x[0] = _;
            e: for (var f = 0, y = x.length, D = y >>> 1; f < D; ) {
              var A = 2 * (f + 1) - 1,
                B = x[A],
                H = A + 1,
                Z = x[H];
              if (0 > R(B, _))
                H < y && 0 > R(Z, B)
                  ? ((x[f] = Z), (x[H] = _), (f = H))
                  : ((x[f] = B), (x[A] = _), (f = A));
              else if (H < y && 0 > R(Z, _)) ((x[f] = Z), (x[H] = _), (f = H));
              else break e;
            }
          }
          return O;
        }
        function R(x, O) {
          var _ = x.sortIndex - O.sortIndex;
          return _ !== 0 ? _ : x.id - O.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var I = performance;
          S.unstable_now = function () {
            return I.now();
          };
        } else {
          var G = Date,
            Q = G.now();
          S.unstable_now = function () {
            return G.now() - Q;
          };
        }
        var V = [],
          ge = [],
          he = 1,
          le = null,
          ee = 3,
          $e = !1,
          Qe = !1,
          te = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(x) {
          for (var O = m(ge); O !== null; ) {
            if (O.callback === null) U(ge);
            else if (O.startTime <= x)
              (U(ge), (O.sortIndex = O.expirationTime), P(V, O));
            else break;
            O = m(ge);
          }
        }
        function Se(x) {
          if (((te = !1), be(x), !Qe))
            if (m(V) !== null) ((Qe = !0), Te(et));
            else {
              var O = m(ge);
              O !== null && oe(Se, O.startTime - x);
            }
        }
        function et(x, O) {
          ((Qe = !1), te && ((te = !1), yt(Ke), (Ke = -1)), ($e = !0));
          var _ = ee;
          try {
            for (
              be(O), le = m(V);
              le !== null && (!(le.expirationTime > O) || (x && !Yt()));
            ) {
              var f = le.callback;
              if (typeof f == "function") {
                ((le.callback = null), (ee = le.priorityLevel));
                var y = f(le.expirationTime <= O);
                ((O = S.unstable_now()),
                  typeof y == "function"
                    ? (le.callback = y)
                    : le === m(V) && U(V),
                  be(O));
              } else U(V);
              le = m(V);
            }
            if (le !== null) var D = !0;
            else {
              var A = m(ge);
              (A !== null && oe(Se, A.startTime - O), (D = !1));
            }
            return D;
          } finally {
            ((le = null), (ee = _), ($e = !1));
          }
        }
        var je = !1,
          Le = null,
          Ke = -1,
          Nt = 5,
          gt = -1;
        function Yt() {
          return !(S.unstable_now() - gt < Nt);
        }
        function ct() {
          if (Le !== null) {
            var x = S.unstable_now();
            gt = x;
            var O = !0;
            try {
              O = Le(!0, x);
            } finally {
              O ? Ae() : ((je = !1), (Le = null));
            }
          } else je = !1;
        }
        var Ae;
        if (typeof at == "function")
          Ae = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            ft = tt.port2;
          ((tt.port1.onmessage = ct),
            (Ae = function () {
              ft.postMessage(null);
            }));
        } else
          Ae = function () {
            X(ct, 0);
          };
        function Te(x) {
          ((Le = x), je || ((je = !0), Ae()));
        }
        function oe(x, O) {
          Ke = X(function () {
            x(S.unstable_now());
          }, O);
        }
        ((S.unstable_IdlePriority = 5),
          (S.unstable_ImmediatePriority = 1),
          (S.unstable_LowPriority = 4),
          (S.unstable_NormalPriority = 3),
          (S.unstable_Profiling = null),
          (S.unstable_UserBlockingPriority = 2),
          (S.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (S.unstable_continueExecution = function () {
            Qe || $e || ((Qe = !0), Te(et));
          }),
          (S.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Nt = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (S.unstable_getCurrentPriorityLevel = function () {
            return ee;
          }),
          (S.unstable_getFirstCallbackNode = function () {
            return m(V);
          }),
          (S.unstable_next = function (x) {
            switch (ee) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = ee;
            }
            var _ = ee;
            ee = O;
            try {
              return x();
            } finally {
              ee = _;
            }
          }),
          (S.unstable_pauseExecution = function () {}),
          (S.unstable_requestPaint = function () {}),
          (S.unstable_runWithPriority = function (x, O) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var _ = ee;
            ee = x;
            try {
              return O();
            } finally {
              ee = _;
            }
          }),
          (S.unstable_scheduleCallback = function (x, O, _) {
            var f = S.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? f + _ : f))
                : (_ = f),
              x)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = _ + y),
              (x = {
                id: he++,
                callback: O,
                priorityLevel: x,
                startTime: _,
                expirationTime: y,
                sortIndex: -1,
              }),
              _ > f
                ? ((x.sortIndex = _),
                  P(ge, x),
                  m(V) === null &&
                    x === m(ge) &&
                    (te ? (yt(Ke), (Ke = -1)) : (te = !0), oe(Se, _ - f)))
                : ((x.sortIndex = y), P(V, x), Qe || $e || ((Qe = !0), Te(et))),
              x
            );
          }),
          (S.unstable_shouldYield = Yt),
          (S.unstable_wrapCallback = function (x) {
            var O = ee;
            return function () {
              var _ = ee;
              ee = O;
              try {
                return x.apply(this, arguments);
              } finally {
                ee = _;
              }
            };
          }));
      })(Pu)),
    Pu
  );
}
var Ra;
function Wf() {
  return (Ra || ((Ra = 1), (zu.exports = Vf())), zu.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function Bf() {
  if (Oa) return Fe;
  Oa = 1;
  var S = Tu(),
    P = Wf();
  function m(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var U = new Set(),
    R = {};
  function I(e, t) {
    (G(e, t), G(e + "Capture", t));
  }
  function G(e, t) {
    for (R[e] = t, e = 0; e < t.length; e++) U.add(t[e]);
  }
  var Q = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    V = Object.prototype.hasOwnProperty,
    ge =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    he = {},
    le = {};
  function ee(e) {
    return V.call(le, e)
      ? !0
      : V.call(he, e)
        ? !1
        : ge.test(e)
          ? (le[e] = !0)
          : ((he[e] = !0), !1);
  }
  function $e(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Qe(e, t, n, r) {
    if (t === null || typeof t > "u" || $e(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
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
  function te(e, t, n, r, l, i, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u));
  }
  var X = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      X[e] = new te(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      X[t] = new te(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        X[e] = new te(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      X[e] = new te(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        X[e] = new te(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      X[e] = new te(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      X[e] = new te(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      X[e] = new te(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      X[e] = new te(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      X[t] = new te(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        X[t] = new te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
      X[t] = new te(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      X[e] = new te(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (X.xlinkHref = new te(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      X[e] = new te(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = X.hasOwnProperty(t) ? X[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Qe(t, n, l, r) && (n = null),
      r || l === null
        ? ee(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Se = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    je = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    Nt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Te = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    x = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (x && e[x]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    f;
  function y(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var D = !1;
  function A(e, t) {
    if (!e || D) return "";
    D = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            i = r.stack.split(`
`),
            u = l.length - 1,
            o = i.length - 1;
          1 <= u && 0 <= o && l[u] !== i[o];
        )
          o--;
        for (; 1 <= u && 0 <= o; u--, o--)
          if (l[u] !== i[o]) {
            if (u !== 1 || o !== 1)
              do
                if ((u--, o--, 0 > o || l[u] !== i[o])) {
                  var s =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= u && 0 <= o);
            break;
          }
      }
    } finally {
      ((D = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = A(e.type, !1)), e);
      case 11:
        return ((e = A(e.type.render, !1)), e);
      case 1:
        return ((e = A(e.type, !0)), e);
      default:
        return "";
    }
  }
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case je:
        return "Portal";
      case Nt:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
          return (e.displayName || "Context") + ".Consumer";
        case gt:
          return (e._context.displayName || "Context") + ".Provider";
        case ct:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ft:
          return (
            (t = e.displayName || null),
            t !== null ? t : H(e.type) || "Memo"
          );
        case Te:
          ((t = e._payload), (e = e._init));
          try {
            return H(e(t));
          } catch {}
      }
    return null;
  }
  function Z(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return H(t);
      case 8:
        return t === Ke ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function K(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ne(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ue(e) {
    var t = ne(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            ((r = "" + u), i.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Ru(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ne(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function xr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ou(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = K(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Mu(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function Ol(e, t) {
    Mu(e, t);
    var n = K(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Ml(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, K(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Iu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Ml(e, t, n) {
    (t !== "number" || xr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + K(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Du(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: K(n) };
  }
  function Fu(e, t) {
    var n = K(t.value),
      r = K(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Au(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Uu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Uu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Er,
    Vu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Er = Er || document.createElement("div"),
            Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Er.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function In(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
      animationIterationCount: !0,
      aspectRatio: !0,
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
      strokeWidth: !0,
    },
    Aa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function (e) {
    Aa.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]));
    });
  });
  function Wu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Bu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Wu(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ua = _(
    { menuitem: !0 },
    {
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
      wbr: !0,
    },
  );
  function Fl(e, t) {
    if (t) {
      if (Ua[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Al(e, t) {
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
  var Ul = null;
  function Vl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wl = null,
    cn = null,
    fn = null;
  function Hu(e) {
    if ((e = lr(e))) {
      if (typeof Wl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Wl(e.stateNode, e.type, t));
    }
  }
  function $u(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Qu() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Hu(e), t)) for (e = 0; e < t.length; e++) Hu(t[e]);
    }
  }
  function Ku(e, t) {
    return e(t);
  }
  function Yu() {}
  var Bl = !1;
  function Xu(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Ku(e, t, n);
    } finally {
      ((Bl = !1), (cn !== null || fn !== null) && (Yu(), Qu()));
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Kr(n);
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (Q)
    try {
      var An = {};
      (Object.defineProperty(An, "passive", {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener("test", An, An),
        window.removeEventListener("test", An, An));
    } catch {
      Hl = !1;
    }
  function Va(e, t, n, r, l, i, u, o, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (g) {
      this.onError(g);
    }
  }
  var Un = !1,
    Cr = null,
    _r = !1,
    $l = null,
    Wa = {
      onError: function (e) {
        ((Un = !0), (Cr = e));
      },
    };
  function Ba(e, t, n, r, l, i, u, o, s) {
    ((Un = !1), (Cr = null), Va.apply(Wa, arguments));
  }
  function Ha(e, t, n, r, l, i, u, o, s) {
    if ((Ba.apply(this, arguments), Un)) {
      if (Un) {
        var h = Cr;
        ((Un = !1), (Cr = null));
      } else throw Error(m(198));
      _r || ((_r = !0), ($l = h));
    }
  }
  function Xt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Gu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Zu(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function $a(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (Zu(l), e);
          if (i === r) return (Zu(l), t);
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var u = !1, o = l.child; o; ) {
          if (o === n) {
            ((u = !0), (n = l), (r = i));
            break;
          }
          if (o === r) {
            ((u = !0), (r = l), (n = i));
            break;
          }
          o = o.sibling;
        }
        if (!u) {
          for (o = i.child; o; ) {
            if (o === n) {
              ((u = !0), (n = i), (r = l));
              break;
            }
            if (o === r) {
              ((u = !0), (r = i), (n = l));
              break;
            }
            o = o.sibling;
          }
          if (!u) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function qu(e) {
    return ((e = $a(e)), e !== null ? Ju(e) : null);
  }
  function Ju(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ju(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bu = P.unstable_scheduleCallback,
    eo = P.unstable_cancelCallback,
    Qa = P.unstable_shouldYield,
    Ka = P.unstable_requestPaint,
    ae = P.unstable_now,
    Ya = P.unstable_getCurrentPriorityLevel,
    Ql = P.unstable_ImmediatePriority,
    to = P.unstable_UserBlockingPriority,
    jr = P.unstable_NormalPriority,
    Xa = P.unstable_LowPriority,
    no = P.unstable_IdlePriority,
    Nr = null,
    dt = null;
  function Ga(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : Ja,
    Za = Math.log,
    qa = Math.LN2;
  function Ja(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Za(e) / qa) | 0)) | 0);
  }
  var zr = 64,
    Pr = 4194304;
  function Vn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var o = u & ~l;
      o !== 0 ? (r = Vn(o)) : ((i &= u), i !== 0 && (r = Vn(i)));
    } else ((u = n & ~l), u !== 0 ? (r = Vn(u)) : i !== 0 && (r = Vn(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function ba(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ec(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var u = 31 - nt(i),
        o = 1 << u,
        s = l[u];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[u] = ba(o, t))
        : s <= t && (e.expiredLanes |= o),
        (i &= ~o));
    }
  }
  function Kl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ro() {
    var e = zr;
    return ((zr <<= 1), (zr & 4194240) === 0 && (zr = 64), e);
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n));
  }
  function tc(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - nt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var Y = 0;
  function lo(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var io,
    Gl,
    uo,
    oo,
    so,
    Zl = !1,
    Tr = [],
    zt = null,
    Pt = null,
    Lt = null,
    Bn = new Map(),
    Hn = new Map(),
    Tt = [],
    nc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ao(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Pt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        Bn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Gl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function rc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = $n(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Pt = $n(Pt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = $n(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Bn.set(i, $n(Bn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          Hn.set(i, $n(Hn.get(i) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function co(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Gu(n)), t !== null)) {
            ((e.blockedOn = t),
              so(e.priority, function () {
                uo(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ul = r), n.target.dispatchEvent(r), (Ul = null));
      } else return ((t = lr(n)), t !== null && Gl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function fo(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function lc() {
    ((Zl = !1),
      zt !== null && Rr(zt) && (zt = null),
      Pt !== null && Rr(Pt) && (Pt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Bn.forEach(fo),
      Hn.forEach(fo));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl ||
        ((Zl = !0),
        P.unstable_scheduleCallback(P.unstable_NormalPriority, lc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Tr.length) {
      Qn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Qn(zt, e),
        Pt !== null && Qn(Pt, e),
        Lt !== null && Qn(Lt, e),
        Bn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
      (co(n), n.blockedOn === null && Tt.shift());
  }
  var dn = Se.ReactCurrentBatchConfig,
    Or = !0;
  function ic(e, t, n, r) {
    var l = Y,
      i = dn.transition;
    dn.transition = null;
    try {
      ((Y = 1), ql(e, t, n, r));
    } finally {
      ((Y = l), (dn.transition = i));
    }
  }
  function uc(e, t, n, r) {
    var l = Y,
      i = dn.transition;
    dn.transition = null;
    try {
      ((Y = 4), ql(e, t, n, r));
    } finally {
      ((Y = l), (dn.transition = i));
    }
  }
  function ql(e, t, n, r) {
    if (Or) {
      var l = Jl(e, t, n, r);
      if (l === null) (mi(e, t, r, Mr, n), ao(e, r));
      else if (rc(l, e, t, n, r)) r.stopPropagation();
      else if ((ao(e, r), t & 4 && -1 < nc.indexOf(e))) {
        for (; l !== null; ) {
          var i = lr(l);
          if (
            (i !== null && io(i),
            (i = Jl(e, t, n, r)),
            i === null && mi(e, t, r, Mr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else mi(e, t, r, null, n);
    }
  }
  var Mr = null;
  function Jl(e, t, n, r) {
    if (((Mr = null), (e = Vl(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Gu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Mr = e), null);
  }
  function po(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ya()) {
          case Ql:
            return 1;
          case to:
            return 4;
          case jr:
          case Xa:
            return 16;
          case no:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    bl = null,
    Ir = null;
  function ho() {
    if (Ir) return Ir;
    var e,
      t = bl,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fr() {
    return !0;
  }
  function mo() {
    return !1;
  }
  function Ve(e) {
    function t(n, r, l, i, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var o in e)
        e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Fr
          : mo),
        (this.isPropagationStopped = mo),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Fr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fr));
        },
        persist: function () {},
        isPersistent: Fr,
      }),
      t
    );
  }
  var pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ei = Ve(pn),
    Yn = _({}, pn, { view: 0, detail: 0 }),
    oc = Ve(Yn),
    ti,
    ni,
    Xn,
    Ar = _({}, Yn, {
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
      getModifierState: li,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Xn &&
              (Xn && e.type === "mousemove"
                ? ((ti = e.screenX - Xn.screenX), (ni = e.screenY - Xn.screenY))
                : (ni = ti = 0),
              (Xn = e)),
            ti);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ni;
      },
    }),
    vo = Ve(Ar),
    sc = _({}, Ar, { dataTransfer: 0 }),
    ac = Ve(sc),
    cc = _({}, Yn, { relatedTarget: 0 }),
    ri = Ve(cc),
    fc = _({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dc = Ve(fc),
    pc = _({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hc = Ve(pc),
    mc = _({}, pn, { data: 0 }),
    yo = Ve(mc),
    vc = {
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
      MozPrintableKey: "Unidentified",
    },
    yc = {
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
      224: "Meta",
    },
    gc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function kc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gc[e])
        ? !!t[e]
        : !1;
  }
  function li() {
    return kc;
  }
  var wc = _({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = vc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? yc[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: li,
      charCode: function (e) {
        return e.type === "keypress" ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Dr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Sc = Ve(wc),
    xc = _({}, Ar, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    go = Ve(xc),
    Ec = _({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: li,
    }),
    Cc = Ve(Ec),
    _c = _({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jc = Ve(_c),
    Nc = _({}, Ar, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zc = Ve(Nc),
    Pc = [9, 13, 27, 32],
    ii = Q && "CompositionEvent" in window,
    Gn = null;
  Q && "documentMode" in document && (Gn = document.documentMode);
  var Lc = Q && "TextEvent" in window && !Gn,
    ko = Q && (!ii || (Gn && 8 < Gn && 11 >= Gn)),
    wo = " ",
    So = !1;
  function xo(e, t) {
    switch (e) {
      case "keyup":
        return Pc.indexOf(t.keyCode) !== -1;
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
  function Eo(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var hn = !1;
  function Tc(e, t) {
    switch (e) {
      case "compositionend":
        return Eo(t);
      case "keypress":
        return t.which !== 32 ? null : ((So = !0), wo);
      case "textInput":
        return ((e = t.data), e === wo && So ? null : e);
      default:
        return null;
    }
  }
  function Rc(e, t) {
    if (hn)
      return e === "compositionend" || (!ii && xo(e, t))
        ? ((e = ho()), (Ir = bl = Rt = null), (hn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ko && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Oc = {
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
    week: !0,
  };
  function Co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Oc[e.type] : t === "textarea";
  }
  function _o(e, t, n, r) {
    ($u(r),
      (t = Hr(t, "onChange")),
      0 < t.length &&
        ((n = new ei("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    qn = null;
  function Mc(e) {
    Ho(e, 0);
  }
  function Ur(e) {
    var t = kn(e);
    if (Ru(t)) return e;
  }
  function Ic(e, t) {
    if (e === "change") return t;
  }
  var jo = !1;
  if (Q) {
    var ui;
    if (Q) {
      var oi = "oninput" in document;
      if (!oi) {
        var No = document.createElement("div");
        (No.setAttribute("oninput", "return;"),
          (oi = typeof No.oninput == "function"));
      }
      ui = oi;
    } else ui = !1;
    jo = ui && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    Zn && (Zn.detachEvent("onpropertychange", Po), (qn = Zn = null));
  }
  function Po(e) {
    if (e.propertyName === "value" && Ur(qn)) {
      var t = [];
      (_o(t, qn, e, Vl(e)), Xu(Mc, t));
    }
  }
  function Dc(e, t, n) {
    e === "focusin"
      ? (zo(), (Zn = t), (qn = n), Zn.attachEvent("onpropertychange", Po))
      : e === "focusout" && zo();
  }
  function Fc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ur(qn);
  }
  function Ac(e, t) {
    if (e === "click") return Ur(t);
  }
  function Uc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Vc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : Vc;
  function Jn(e, t) {
    if (rt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!V.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Lo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function To(e, t) {
    var n = Lo(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Lo(n);
    }
  }
  function Ro(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ro(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Oo() {
    for (var e = window, t = xr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xr(e.document);
    }
    return t;
  }
  function si(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Wc(e) {
    var t = Oo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ro(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && si(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = To(n, i)));
          var u = To(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Bc = Q && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    ai = null,
    bn = null,
    ci = !1;
  function Mo(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ci ||
      mn == null ||
      mn !== xr(r) ||
      ((r = mn),
      "selectionStart" in r && si(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && Jn(bn, r)) ||
        ((bn = r),
        (r = Hr(ai, "onSelect")),
        0 < r.length &&
          ((t = new ei("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
  }
  function Vr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var vn = {
      animationend: Vr("Animation", "AnimationEnd"),
      animationiteration: Vr("Animation", "AnimationIteration"),
      animationstart: Vr("Animation", "AnimationStart"),
      transitionend: Vr("Transition", "TransitionEnd"),
    },
    fi = {},
    Io = {};
  Q &&
    ((Io = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Wr(e) {
    if (fi[e]) return fi[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Io) return (fi[e] = t[n]);
    return e;
  }
  var Do = Wr("animationend"),
    Fo = Wr("animationiteration"),
    Ao = Wr("animationstart"),
    Uo = Wr("transitionend"),
    Vo = new Map(),
    Wo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    (Vo.set(e, t), I(t, [e]));
  }
  for (var di = 0; di < Wo.length; di++) {
    var pi = Wo[di],
      Hc = pi.toLowerCase(),
      $c = pi[0].toUpperCase() + pi.slice(1);
    Ot(Hc, "on" + $c);
  }
  (Ot(Do, "onAnimationEnd"),
    Ot(Fo, "onAnimationIteration"),
    Ot(Ao, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Uo, "onTransitionEnd"),
    G("onMouseEnter", ["mouseout", "mouseover"]),
    G("onMouseLeave", ["mouseout", "mouseover"]),
    G("onPointerEnter", ["pointerout", "pointerover"]),
    G("onPointerLeave", ["pointerout", "pointerover"]),
    I(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    I(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    I("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    I(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    I(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    I(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Qc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(er),
    );
  function Bo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ha(r, t, void 0, e), (e.currentTarget = null));
  }
  function Ho(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var o = r[u],
              s = o.instance,
              h = o.currentTarget;
            if (((o = o.listener), s !== i && l.isPropagationStopped()))
              break e;
            (Bo(l, o, h), (i = s));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((o = r[u]),
              (s = o.instance),
              (h = o.currentTarget),
              (o = o.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            (Bo(l, o, h), (i = s));
          }
      }
    }
    if (_r) throw ((e = $l), (_r = !1), ($l = null), e);
  }
  function J(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = new Set());
    var r = e + "__bubble";
    n.has(r) || ($o(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    (t && (r |= 4), $o(n, e, r, t));
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Br]) {
      ((e[Br] = !0),
        U.forEach(function (n) {
          n !== "selectionchange" && (Qc.has(n) || hi(n, !1, e), hi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), hi("selectionchange", !1, t));
    }
  }
  function $o(e, t, n, r) {
    switch (po(t)) {
      case 1:
        var l = ic;
        break;
      case 4:
        l = uc;
        break;
      default:
        l = ql;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Hl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function mi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var s = u.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = u.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; o !== null; ) {
            if (((u = Gt(o)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = i = u;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Xu(function () {
      var h = i,
        g = Vl(n),
        k = [];
      e: {
        var v = Vo.get(e);
        if (v !== void 0) {
          var E = ei,
            j = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Sc;
              break;
            case "focusin":
              ((j = "focus"), (E = ri));
              break;
            case "focusout":
              ((j = "blur"), (E = ri));
              break;
            case "beforeblur":
            case "afterblur":
              E = ri;
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
              E = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = ac;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Cc;
              break;
            case Do:
            case Fo:
            case Ao:
              E = dc;
              break;
            case Uo:
              E = jc;
              break;
            case "scroll":
              E = oc;
              break;
            case "wheel":
              E = zc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = go;
          }
          var N = (t & 4) !== 0,
            ce = !N && e === "scroll",
            d = N ? (v !== null ? v + "Capture" : null) : v;
          N = [];
          for (var a = h, p; a !== null; ) {
            p = a;
            var w = p.stateNode;
            if (
              (p.tag === 5 &&
                w !== null &&
                ((p = w),
                d !== null &&
                  ((w = Fn(a, d)), w != null && N.push(nr(a, w, p)))),
              ce)
            )
              break;
            a = a.return;
          }
          0 < N.length &&
            ((v = new E(v, j, null, n, g)), k.push({ event: v, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            v &&
              n !== Ul &&
              (j = n.relatedTarget || n.fromElement) &&
              (Gt(j) || j[kt]))
          )
            break e;
          if (
            (E || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            E
              ? ((j = n.relatedTarget || n.toElement),
                (E = h),
                (j = j ? Gt(j) : null),
                j !== null &&
                  ((ce = Xt(j)), j !== ce || (j.tag !== 5 && j.tag !== 6)) &&
                  (j = null))
              : ((E = null), (j = h)),
            E !== j)
          ) {
            if (
              ((N = vo),
              (w = "onMouseLeave"),
              (d = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((N = go),
                (w = "onPointerLeave"),
                (d = "onPointerEnter"),
                (a = "pointer")),
              (ce = E == null ? v : kn(E)),
              (p = j == null ? v : kn(j)),
              (v = new N(w, a + "leave", E, n, g)),
              (v.target = ce),
              (v.relatedTarget = p),
              (w = null),
              Gt(g) === h &&
                ((N = new N(d, a + "enter", j, n, g)),
                (N.target = p),
                (N.relatedTarget = ce),
                (w = N)),
              (ce = w),
              E && j)
            )
              t: {
                for (N = E, d = j, a = 0, p = N; p; p = yn(p)) a++;
                for (p = 0, w = d; w; w = yn(w)) p++;
                for (; 0 < a - p; ) ((N = yn(N)), a--);
                for (; 0 < p - a; ) ((d = yn(d)), p--);
                for (; a--; ) {
                  if (N === d || (d !== null && N === d.alternate)) break t;
                  ((N = yn(N)), (d = yn(d)));
                }
                N = null;
              }
            else N = null;
            (E !== null && Qo(k, v, E, N, !1),
              j !== null && ce !== null && Qo(k, ce, j, N, !0));
          }
        }
        e: {
          if (
            ((v = h ? kn(h) : window),
            (E = v.nodeName && v.nodeName.toLowerCase()),
            E === "select" || (E === "input" && v.type === "file"))
          )
            var z = Ic;
          else if (Co(v))
            if (jo) z = Uc;
            else {
              z = Fc;
              var L = Dc;
            }
          else
            (E = v.nodeName) &&
              E.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (z = Ac);
          if (z && (z = z(e, h))) {
            _o(k, z, n, g);
            break e;
          }
          (L && L(e, v, h),
            e === "focusout" &&
              (L = v._wrapperState) &&
              L.controlled &&
              v.type === "number" &&
              Ml(v, "number", v.value));
        }
        switch (((L = h ? kn(h) : window), e)) {
          case "focusin":
            (Co(L) || L.contentEditable === "true") &&
              ((mn = L), (ai = h), (bn = null));
            break;
          case "focusout":
            bn = ai = mn = null;
            break;
          case "mousedown":
            ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ci = !1), Mo(k, n, g));
            break;
          case "selectionchange":
            if (Bc) break;
          case "keydown":
          case "keyup":
            Mo(k, n, g);
        }
        var T;
        if (ii)
          e: {
            switch (e) {
              case "compositionstart":
                var M = "onCompositionStart";
                break e;
              case "compositionend":
                M = "onCompositionEnd";
                break e;
              case "compositionupdate":
                M = "onCompositionUpdate";
                break e;
            }
            M = void 0;
          }
        else
          hn
            ? xo(e, n) && (M = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (M = "onCompositionStart");
        (M &&
          (ko &&
            n.locale !== "ko" &&
            (hn || M !== "onCompositionStart"
              ? M === "onCompositionEnd" && hn && (T = ho())
              : ((Rt = g),
                (bl = "value" in Rt ? Rt.value : Rt.textContent),
                (hn = !0))),
          (L = Hr(h, M)),
          0 < L.length &&
            ((M = new yo(M, e, null, n, g)),
            k.push({ event: M, listeners: L }),
            T ? (M.data = T) : ((T = Eo(n)), T !== null && (M.data = T)))),
          (T = Lc ? Tc(e, n) : Rc(e, n)) &&
            ((h = Hr(h, "onBeforeInput")),
            0 < h.length &&
              ((g = new yo("onBeforeInput", "beforeinput", null, n, g)),
              k.push({ event: g, listeners: h }),
              (g.data = T))));
      }
      Ho(k, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Fn(e, n)),
        i != null && r.unshift(nr(e, i, l)),
        (i = Fn(e, t)),
        i != null && r.push(nr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qo(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var o = n,
        s = o.alternate,
        h = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        h !== null &&
        ((o = h),
        l
          ? ((s = Fn(n, i)), s != null && u.unshift(nr(n, s, o)))
          : l || ((s = Fn(n, i)), s != null && u.push(nr(n, s, o)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Kc = /\r\n?/g,
    Yc = /\u0000|\uFFFD/g;
  function Ko(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Kc,
        `
`,
      )
      .replace(Yc, "");
  }
  function $r(e, t, n) {
    if (((t = Ko(t)), Ko(e) !== t && n)) throw Error(m(425));
  }
  function Qr() {}
  var vi = null,
    yi = null;
  function gi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ki = typeof setTimeout == "function" ? setTimeout : void 0,
    Xc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yo = typeof Promise == "function" ? Promise : void 0,
    Gc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yo < "u"
          ? function (e) {
              return Yo.resolve(null).then(e).catch(Zc);
            }
          : ki;
  function Zc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Kn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function Mt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Xo(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
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
  var gn = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + gn,
    rr = "__reactProps$" + gn,
    kt = "__reactContainer$" + gn,
    Si = "__reactEvents$" + gn,
    qc = "__reactListeners$" + gn,
    Jc = "__reactHandles$" + gn;
  function Gt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[kt] || n[pt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Xo(e); e !== null; ) {
            if ((n = e[pt])) return n;
            e = Xo(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[pt] || e[kt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Kr(e) {
    return e[rr] || null;
  }
  var xi = [],
    wn = -1;
  function It(e) {
    return { current: e };
  }
  function b(e) {
    0 > wn || ((e.current = xi[wn]), (xi[wn] = null), wn--);
  }
  function q(e, t) {
    (wn++, (xi[wn] = e.current), (e.current = t));
  }
  var Dt = {},
    xe = It(Dt),
    Re = It(!1),
    Zt = Dt;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Oe(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yr() {
    (b(Re), b(xe));
  }
  function Go(e, t, n) {
    if (xe.current !== Dt) throw Error(m(168));
    (q(xe, t), q(Re, n));
  }
  function Zo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, Z(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Xr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Dt),
      (Zt = xe.current),
      q(xe, e),
      q(Re, Re.current),
      !0
    );
  }
  function qo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Zo(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        b(Re),
        b(xe),
        q(xe, e))
      : b(Re),
      q(Re, n));
  }
  var wt = null,
    Gr = !1,
    Ei = !1;
  function Jo(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function bc(e) {
    ((Gr = !0), Jo(e));
  }
  function Ft() {
    if (!Ei && wt !== null) {
      Ei = !0;
      var e = 0,
        t = Y;
      try {
        var n = wt;
        for (Y = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((wt = null), (Gr = !1));
      } catch (l) {
        throw (wt !== null && (wt = wt.slice(e + 1)), bu(Ql, Ft), l);
      } finally {
        ((Y = t), (Ei = !1));
      }
    }
    return null;
  }
  var xn = [],
    En = 0,
    Zr = null,
    qr = 0,
    Ye = [],
    Xe = 0,
    qt = null,
    St = 1,
    xt = "";
  function Jt(e, t) {
    ((xn[En++] = qr), (xn[En++] = Zr), (Zr = e), (qr = t));
  }
  function bo(e, t, n) {
    ((Ye[Xe++] = St), (Ye[Xe++] = xt), (Ye[Xe++] = qt), (qt = e));
    var r = St;
    e = xt;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - nt(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      ((i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (St = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (xt = i + e));
    } else ((St = (1 << i) | (n << l) | r), (xt = e));
  }
  function Ci(e) {
    e.return !== null && (Jt(e, 1), bo(e, 1, 0));
  }
  function _i(e) {
    for (; e === Zr; )
      ((Zr = xn[--En]), (xn[En] = null), (qr = xn[--En]), (xn[En] = null));
    for (; e === qt; )
      ((qt = Ye[--Xe]),
        (Ye[Xe] = null),
        (xt = Ye[--Xe]),
        (Ye[Xe] = null),
        (St = Ye[--Xe]),
        (Ye[Xe] = null));
  }
  var We = null,
    Be = null,
    re = !1,
    lt = null;
  function es(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (We = e), (Be = Mt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (We = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = qt !== null ? { id: St, overflow: xt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (We = e),
              (Be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ji(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ni(e) {
    if (re) {
      var t = Be;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (ji(e)) throw Error(m(418));
          t = Mt(n.nextSibling);
          var r = We;
          t && ts(e, t)
            ? es(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (re = !1), (We = e));
        }
      } else {
        if (ji(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (re = !1), (We = e));
      }
    }
  }
  function ns(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    We = e;
  }
  function Jr(e) {
    if (e !== We) return !1;
    if (!re) return (ns(e), (re = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (ji(e)) throw (rs(), Error(m(418)));
      for (; t; ) (es(e, t), (t = Mt(t.nextSibling)));
    }
    if ((ns(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Be = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = We ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = Be; e; ) e = Mt(e.nextSibling);
  }
  function Cn() {
    ((Be = We = null), (re = !1));
  }
  function zi(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var ef = Se.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var o = l.refs;
              u === null ? delete o[i] : (o[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function br(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function ls(e) {
    var t = e._init;
    return t(e._payload);
  }
  function is(e) {
    function t(d, a) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) (t(d, a), (a = a.sibling));
      return null;
    }
    function r(d, a) {
      for (d = new Map(); a !== null; )
        (a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling));
      return d;
    }
    function l(d, a) {
      return ((d = Qt(d, a)), (d.index = 0), (d.sibling = null), d);
    }
    function i(d, a, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null
              ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p)
              : ((d.flags |= 2), a))
          : ((d.flags |= 1048576), a)
      );
    }
    function u(d) {
      return (e && d.alternate === null && (d.flags |= 2), d);
    }
    function o(d, a, p, w) {
      return a === null || a.tag !== 6
        ? ((a = ku(p, d.mode, w)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a);
    }
    function s(d, a, p, w) {
      var z = p.type;
      return z === Le
        ? g(d, a, p.props.children, w, p.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" &&
                z !== null &&
                z.$$typeof === Te &&
                ls(z) === a.type))
          ? ((w = l(a, p.props)), (w.ref = ir(d, a, p)), (w.return = d), w)
          : ((w = El(p.type, p.key, p.props, null, d.mode, w)),
            (w.ref = ir(d, a, p)),
            (w.return = d),
            w);
    }
    function h(d, a, p, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== p.containerInfo ||
        a.stateNode.implementation !== p.implementation
        ? ((a = wu(p, d.mode, w)), (a.return = d), a)
        : ((a = l(a, p.children || [])), (a.return = d), a);
    }
    function g(d, a, p, w, z) {
      return a === null || a.tag !== 7
        ? ((a = on(p, d.mode, w, z)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a);
    }
    function k(d, a, p) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = ku("" + a, d.mode, p)), (a.return = d), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (p = El(a.type, a.key, a.props, null, d.mode, p)),
              (p.ref = ir(d, null, a)),
              (p.return = d),
              p
            );
          case je:
            return ((a = wu(a, d.mode, p)), (a.return = d), a);
          case Te:
            var w = a._init;
            return k(d, w(a._payload), p);
        }
        if (Mn(a) || O(a))
          return ((a = on(a, d.mode, p, null)), (a.return = d), a);
        br(d, a);
      }
      return null;
    }
    function v(d, a, p, w) {
      var z = a !== null ? a.key : null;
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return z !== null ? null : o(d, a, "" + p, w);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case et:
            return p.key === z ? s(d, a, p, w) : null;
          case je:
            return p.key === z ? h(d, a, p, w) : null;
          case Te:
            return ((z = p._init), v(d, a, z(p._payload), w));
        }
        if (Mn(p) || O(p)) return z !== null ? null : g(d, a, p, w, null);
        br(d, p);
      }
      return null;
    }
    function E(d, a, p, w, z) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((d = d.get(p) || null), o(a, d, "" + w, z));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case et:
            return (
              (d = d.get(w.key === null ? p : w.key) || null),
              s(a, d, w, z)
            );
          case je:
            return (
              (d = d.get(w.key === null ? p : w.key) || null),
              h(a, d, w, z)
            );
          case Te:
            var L = w._init;
            return E(d, a, p, L(w._payload), z);
        }
        if (Mn(w) || O(w)) return ((d = d.get(p) || null), g(a, d, w, z, null));
        br(a, w);
      }
      return null;
    }
    function j(d, a, p, w) {
      for (
        var z = null, L = null, T = a, M = (a = 0), ye = null;
        T !== null && M < p.length;
        M++
      ) {
        T.index > M ? ((ye = T), (T = null)) : (ye = T.sibling);
        var $ = v(d, T, p[M], w);
        if ($ === null) {
          T === null && (T = ye);
          break;
        }
        (e && T && $.alternate === null && t(d, T),
          (a = i($, a, M)),
          L === null ? (z = $) : (L.sibling = $),
          (L = $),
          (T = ye));
      }
      if (M === p.length) return (n(d, T), re && Jt(d, M), z);
      if (T === null) {
        for (; M < p.length; M++)
          ((T = k(d, p[M], w)),
            T !== null &&
              ((a = i(T, a, M)),
              L === null ? (z = T) : (L.sibling = T),
              (L = T)));
        return (re && Jt(d, M), z);
      }
      for (T = r(d, T); M < p.length; M++)
        ((ye = E(T, d, M, p[M], w)),
          ye !== null &&
            (e &&
              ye.alternate !== null &&
              T.delete(ye.key === null ? M : ye.key),
            (a = i(ye, a, M)),
            L === null ? (z = ye) : (L.sibling = ye),
            (L = ye)));
      return (
        e &&
          T.forEach(function (Kt) {
            return t(d, Kt);
          }),
        re && Jt(d, M),
        z
      );
    }
    function N(d, a, p, w) {
      var z = O(p);
      if (typeof z != "function") throw Error(m(150));
      if (((p = z.call(p)), p == null)) throw Error(m(151));
      for (
        var L = (z = null), T = a, M = (a = 0), ye = null, $ = p.next();
        T !== null && !$.done;
        M++, $ = p.next()
      ) {
        T.index > M ? ((ye = T), (T = null)) : (ye = T.sibling);
        var Kt = v(d, T, $.value, w);
        if (Kt === null) {
          T === null && (T = ye);
          break;
        }
        (e && T && Kt.alternate === null && t(d, T),
          (a = i(Kt, a, M)),
          L === null ? (z = Kt) : (L.sibling = Kt),
          (L = Kt),
          (T = ye));
      }
      if ($.done) return (n(d, T), re && Jt(d, M), z);
      if (T === null) {
        for (; !$.done; M++, $ = p.next())
          (($ = k(d, $.value, w)),
            $ !== null &&
              ((a = i($, a, M)),
              L === null ? (z = $) : (L.sibling = $),
              (L = $)));
        return (re && Jt(d, M), z);
      }
      for (T = r(d, T); !$.done; M++, $ = p.next())
        (($ = E(T, d, M, $.value, w)),
          $ !== null &&
            (e && $.alternate !== null && T.delete($.key === null ? M : $.key),
            (a = i($, a, M)),
            L === null ? (z = $) : (L.sibling = $),
            (L = $)));
      return (
        e &&
          T.forEach(function (Mf) {
            return t(d, Mf);
          }),
        re && Jt(d, M),
        z
      );
    }
    function ce(d, a, p, w) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === Le &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case et:
            e: {
              for (var z = p.key, L = a; L !== null; ) {
                if (L.key === z) {
                  if (((z = p.type), z === Le)) {
                    if (L.tag === 7) {
                      (n(d, L.sibling),
                        (a = l(L, p.props.children)),
                        (a.return = d),
                        (d = a));
                      break e;
                    }
                  } else if (
                    L.elementType === z ||
                    (typeof z == "object" &&
                      z !== null &&
                      z.$$typeof === Te &&
                      ls(z) === L.type)
                  ) {
                    (n(d, L.sibling),
                      (a = l(L, p.props)),
                      (a.ref = ir(d, L, p)),
                      (a.return = d),
                      (d = a));
                    break e;
                  }
                  n(d, L);
                  break;
                } else t(d, L);
                L = L.sibling;
              }
              p.type === Le
                ? ((a = on(p.props.children, d.mode, w, p.key)),
                  (a.return = d),
                  (d = a))
                : ((w = El(p.type, p.key, p.props, null, d.mode, w)),
                  (w.ref = ir(d, a, p)),
                  (w.return = d),
                  (d = w));
            }
            return u(d);
          case je:
            e: {
              for (L = p.key; a !== null; ) {
                if (a.key === L)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === p.containerInfo &&
                    a.stateNode.implementation === p.implementation
                  ) {
                    (n(d, a.sibling),
                      (a = l(a, p.children || [])),
                      (a.return = d),
                      (d = a));
                    break e;
                  } else {
                    n(d, a);
                    break;
                  }
                else t(d, a);
                a = a.sibling;
              }
              ((a = wu(p, d.mode, w)), (a.return = d), (d = a));
            }
            return u(d);
          case Te:
            return ((L = p._init), ce(d, a, L(p._payload), w));
        }
        if (Mn(p)) return j(d, a, p, w);
        if (O(p)) return N(d, a, p, w);
        br(d, p);
      }
      return (typeof p == "string" && p !== "") || typeof p == "number"
        ? ((p = "" + p),
          a !== null && a.tag === 6
            ? (n(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
            : (n(d, a), (a = ku(p, d.mode, w)), (a.return = d), (d = a)),
          u(d))
        : n(d, a);
    }
    return ce;
  }
  var _n = is(!0),
    us = is(!1),
    el = It(null),
    tl = null,
    jn = null,
    Pi = null;
  function Li() {
    Pi = jn = tl = null;
  }
  function Ti(e) {
    var t = el.current;
    (b(el), (e._currentValue = t));
  }
  function Ri(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Nn(e, t) {
    ((tl = e),
      (Pi = jn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Me = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (Pi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
        if (tl === null) throw Error(m(308));
        ((jn = e), (tl.dependencies = { lanes: 0, firstContext: e }));
      } else jn = jn.next = e;
    return t;
  }
  var bt = null;
  function Oi(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Oi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Et(e, r)
    );
  }
  function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var At = !1;
  function Mi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ss(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Ct(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (W & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Oi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function nl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function as(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = u) : (i = i.next = u), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function rl(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        h = s.next;
      ((s.next = null), u === null ? (i = h) : (u.next = h), (u = s));
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (o = g.lastBaseUpdate),
        o !== u &&
          (o === null ? (g.firstBaseUpdate = h) : (o.next = h),
          (g.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var k = l.baseState;
      ((u = 0), (g = h = s = null), (o = i));
      do {
        var v = o.lane,
          E = o.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: E,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var j = e,
              N = o;
            switch (((v = t), (E = n), N.tag)) {
              case 1:
                if (((j = N.payload), typeof j == "function")) {
                  k = j.call(E, k, v);
                  break e;
                }
                k = j;
                break e;
              case 3:
                j.flags = (j.flags & -65537) | 128;
              case 0:
                if (
                  ((j = N.payload),
                  (v = typeof j == "function" ? j.call(E, k, v) : j),
                  v == null)
                )
                  break e;
                k = _({}, k, v);
                break e;
              case 2:
                At = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [o]) : v.push(o));
        } else
          ((E = {
            eventTime: E,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((h = g = E), (s = k)) : (g = g.next = E),
            (u |= v));
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          ((v = o),
            (o = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (g === null && (s = k),
        (l.baseState = s),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((u |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((nn |= u), (e.lanes = u), (e.memoizedState = k));
    }
  }
  function cs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ur = {},
    ht = It(ur),
    or = It(ur),
    sr = It(ur);
  function en(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Ii(e, t) {
    switch ((q(sr, t), q(or, e), q(ht, ur), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Dl(t, e)));
    }
    (b(ht), q(ht, t));
  }
  function zn() {
    (b(ht), b(or), b(sr));
  }
  function fs(e) {
    en(sr.current);
    var t = en(ht.current),
      n = Dl(t, e.type);
    t !== n && (q(or, e), q(ht, n));
  }
  function Di(e) {
    or.current === e && (b(ht), b(or));
  }
  var ie = It(0);
  function ll(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Fi = [];
  function Ai() {
    for (var e = 0; e < Fi.length; e++)
      Fi[e]._workInProgressVersionPrimary = null;
    Fi.length = 0;
  }
  var il = Se.ReactCurrentDispatcher,
    Ui = Se.ReactCurrentBatchConfig,
    tn = 0,
    ue = null,
    de = null,
    me = null,
    ul = !1,
    ar = !1,
    cr = 0,
    tf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Vi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Wi(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (il.current = e === null || e.memoizedState === null ? uf : of),
      (e = n(r, l)),
      ar)
    ) {
      i = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= i)) throw Error(m(301));
        ((i += 1),
          (me = de = null),
          (t.updateQueue = null),
          (il.current = sf),
          (e = n(r, l)));
      } while (ar);
    }
    if (
      ((il.current = al),
      (t = de !== null && de.next !== null),
      (tn = 0),
      (me = de = ue = null),
      (ul = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Bi() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (me === null ? (ue.memoizedState = me = e) : (me = me.next = e), me);
  }
  function Ze() {
    if (de === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = me === null ? ue.memoizedState : me.next;
    if (t !== null) ((me = t), (de = e));
    else {
      if (e === null) throw Error(m(310));
      ((de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        me === null ? (ue.memoizedState = me = e) : (me = me.next = e));
    }
    return me;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hi(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = de,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = i.next), (i.next = u));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var o = (u = null),
        s = null,
        h = i;
      do {
        var g = h.lane;
        if ((tn & g) === g)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action)));
        else {
          var k = {
            lane: g,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (s === null ? ((o = s = k), (u = r)) : (s = s.next = k),
            (ue.lanes |= g),
            (nn |= g));
        }
        h = h.next;
      } while (h !== null && h !== i);
      (s === null ? (u = r) : (s.next = o),
        rt(r, t.memoizedState) || (Me = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (ue.lanes |= i), (nn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $i(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== l);
      (rt(i, t.memoizedState) || (Me = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function ds() {}
  function ps(e, t) {
    var n = ue,
      r = Ze(),
      l = t(),
      i = !rt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Me = !0)),
      (r = r.queue),
      Qi(vs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (me !== null && me.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        dr(9, ms.bind(null, n, r, l, t), void 0, null),
        ve === null)
      )
        throw Error(m(349));
      (tn & 30) !== 0 || hs(n, t, l);
    }
    return l;
  }
  function hs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ue.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ms(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ys(t) && gs(e));
  }
  function vs(e, t, n) {
    return n(function () {
      ys(t) && gs(e);
    });
  }
  function ys(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var t = Et(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function ks(e) {
    var t = mt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = lf.bind(null, ue, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ue.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ws() {
    return Ze().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = mt();
    ((ue.flags |= e),
      (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function sl(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (de !== null) {
      var u = de.memoizedState;
      if (((i = u.destroy), r !== null && Vi(r, u.deps))) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    ((ue.flags |= e), (l.memoizedState = dr(1 | t, n, i, r)));
  }
  function Ss(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Qi(e, t) {
    return sl(2048, 8, e, t);
  }
  function xs(e, t) {
    return sl(4, 2, e, t);
  }
  function Es(e, t) {
    return sl(4, 4, e, t);
  }
  function Cs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function _s(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      sl(4, 4, Cs.bind(null, t, e), n)
    );
  }
  function Ki() {}
  function js(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ns(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function zs(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n))
      : (rt(n, t) ||
          ((n = ro()), (ue.lanes |= n), (nn |= n), (e.baseState = !0)),
        t);
  }
  function nf(e, t) {
    var n = Y;
    ((Y = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Ui.transition;
    Ui.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Y = n), (Ui.transition = r));
    }
  }
  function Ps() {
    return Ze().memoizedState;
  }
  function rf(e, t, n) {
    var r = Ht(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ls(e))
    )
      Ts(t, n);
    else if (((n = os(e, t, n, r)), n !== null)) {
      var l = ze();
      (st(n, e, r, l), Rs(n, t, r));
    }
  }
  function lf(e, t, n) {
    var r = Ht(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ls(e)) Ts(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            o = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = o), rt(o, u))) {
            var s = t.interleaved;
            (s === null
              ? ((l.next = l), Oi(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = os(e, t, l, r)),
        n !== null && ((l = ze()), st(n, e, r, l), Rs(n, t, r)));
    }
  }
  function Ls(e) {
    var t = e.alternate;
    return e === ue || (t !== null && t === ue);
  }
  function Ts(e, t) {
    ar = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Rs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var al = {
      readContext: Ge,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((mt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: Ss,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ol(4194308, 4, Cs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ol(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ol(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = mt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = mt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = rf.bind(null, ue, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ks,
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e);
      },
      useTransition: function () {
        var e = ks(!1),
          t = e[0];
        return ((e = nf.bind(null, e[1])), (mt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ue,
          l = mt();
        if (re) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(m(349));
          (tn & 30) !== 0 || hs(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Ss(vs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          dr(9, ms.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = mt(),
          t = ve.identifierPrefix;
        if (re) {
          var n = xt,
            r = St;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = tf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: Ge,
      useCallback: js,
      useContext: Ge,
      useEffect: Qi,
      useImperativeHandle: _s,
      useInsertionEffect: xs,
      useLayoutEffect: Es,
      useMemo: Ns,
      useReducer: Hi,
      useRef: ws,
      useState: function () {
        return Hi(fr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Ze();
        return zs(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Hi(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: Ge,
      useCallback: js,
      useContext: Ge,
      useEffect: Qi,
      useImperativeHandle: _s,
      useInsertionEffect: xs,
      useLayoutEffect: Es,
      useMemo: Ns,
      useReducer: $i,
      useRef: ws,
      useState: function () {
        return $i(fr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Ze();
        return de === null ? (t.memoizedState = e) : zs(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = $i(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Ht(e),
        i = Ct(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Ut(e, i, l)),
        t !== null && (st(t, e, l, r), nl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Ht(e),
        i = Ct(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Ut(e, i, l)),
        t !== null && (st(t, e, l, r), nl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ze(),
        r = Ht(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (st(t, e, r, n), nl(t, e, r)));
    },
  };
  function Os(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, i)
          : !0
    );
  }
  function Ms(e, t, n) {
    var r = !1,
      l = Dt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = Oe(t) ? Zt : xe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Sn(e, l) : Dt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Is(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null));
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mi(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = Oe(t) ? Zt : xe.current), (l.context = Sn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Yi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && cl.enqueueReplaceState(l, l.state, null),
        rl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Pn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += B(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Gi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Zi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var af = typeof WeakMap == "function" ? WeakMap : Map;
  function Ds(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (yl || ((yl = !0), (fu = r)), Zi(e, t));
      }),
      n
    );
  }
  function Fs(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Zi(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Zi(e, t),
            typeof r != "function" &&
              (Wt === null ? (Wt = new Set([this])) : Wt.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function As(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new af();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Ef.bind(null, e, t, n)), t.then(e, e));
  }
  function Us(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ct(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var cf = Se.ReactCurrentOwner,
    Me = !1;
  function Ne(e, t, n, r) {
    t.child = e === null ? us(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Ws(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Nn(t, l),
      (r = Wi(e, t, n, r, i, l)),
      (n = Bi()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (re && n && Ci(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !gu(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Hs(e, t, i, r, l))
        : ((e = El(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Jn), n(u, r) && e.ref === t.ref)
      )
        return _t(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Qt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Jn(i, r) && e.ref === t.ref)
        if (((Me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Me = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return qi(e, t, n, r, l);
  }
  function $s(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          q(Tn, He),
          (He |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            q(Tn, He),
            (He |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          q(Tn, He),
          (He |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        q(Tn, He),
        (He |= r));
    return (Ne(e, t, l, n), t.child);
  }
  function Qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qi(e, t, n, r, l) {
    var i = Oe(n) ? Zt : xe.current;
    return (
      (i = Sn(t, i)),
      Nn(t, l),
      (n = Wi(e, t, n, r, i, l)),
      (r = Bi()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (re && r && Ci(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (Oe(n)) {
      var i = !0;
      Xr(t);
    } else i = !1;
    if ((Nn(t, l), t.stateNode === null))
      (dl(e, t), Ms(t, n, r), Xi(t, n, r, l), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        o = t.memoizedProps;
      u.props = o;
      var s = u.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = Ge(h))
        : ((h = Oe(n) ? Zt : xe.current), (h = Sn(t, h)));
      var g = n.getDerivedStateFromProps,
        k =
          typeof g == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      (k ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o !== r || s !== h) && Is(t, u, r, h)),
        (At = !1));
      var v = t.memoizedState;
      ((u.state = v),
        rl(t, r, u, l),
        (s = t.memoizedState),
        o !== r || v !== s || Re.current || At
          ? (typeof g == "function" && (Yi(t, n, g, r), (s = t.memoizedState)),
            (o = At || Os(t, n, o, r, v, s, h))
              ? (k ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (u.props = r),
            (u.state = s),
            (u.context = h),
            (r = o))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((u = t.stateNode),
        ss(e, t),
        (o = t.memoizedProps),
        (h = t.type === t.elementType ? o : it(t.type, o)),
        (u.props = h),
        (k = t.pendingProps),
        (v = u.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Oe(n) ? Zt : xe.current), (s = Sn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((g =
        typeof E == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o !== k || v !== s) && Is(t, u, r, s)),
        (At = !1),
        (v = t.memoizedState),
        (u.state = v),
        rl(t, r, u, l));
      var j = t.memoizedState;
      o !== k || v !== j || Re.current || At
        ? (typeof E == "function" && (Yi(t, n, E, r), (j = t.memoizedState)),
          (h = At || Os(t, n, h, r, v, j, s) || !1)
            ? (g ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, j, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, j, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = j)),
          (u.props = r),
          (u.state = j),
          (u.context = s),
          (r = h))
        : (typeof u.componentDidUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ji(e, t, n, r, i, l);
  }
  function Ji(e, t, n, r, l, i) {
    Qs(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (l && qo(t, n, !1), _t(e, t, i));
    ((r = t.stateNode), (cf.current = t));
    var o =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = _n(t, e.child, null, i)), (t.child = _n(t, null, o, i)))
        : Ne(e, t, o, i),
      (t.memoizedState = r.state),
      l && qo(t, n, !0),
      t.child
    );
  }
  function Ys(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Go(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Go(e, t.context, !1),
      Ii(e, t.containerInfo));
  }
  function Xs(e, t, n, r, l) {
    return (Cn(), zi(l), (t.flags |= 256), Ne(e, t, n, r), t.child);
  }
  var bi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function eu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = ie.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      o;
    if (
      ((o = u) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      q(ie, l & 1),
      e === null)
    )
      return (
        Ni(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = Cl(u, r, 0, null)),
                (e = on(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = eu(n)),
                (t.memoizedState = bi),
                e)
              : tu(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return ff(e, t, u, r, o, l, n);
    if (i) {
      ((i = r.fallback), (u = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (i = Qt(o, i)) : ((i = on(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? eu(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = bi),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Qt(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function tu(e, t) {
    return (
      (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && zi(r),
      _n(t, e.child, null, n),
      (e = tu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ff(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Gi(Error(m(422)))), fl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
            (i = on(i, l, u, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && _n(t, e.child, null, u),
            (t.child.memoizedState = eu(u)),
            (t.memoizedState = bi),
            i);
    if ((t.mode & 1) === 0) return fl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o),
        (i = Error(m(419))),
        (r = Gi(i, r, void 0)),
        fl(e, t, u, r)
      );
    }
    if (((o = (u & e.childLanes) !== 0), Me || o)) {
      if (((r = ve), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Et(e, l), st(r, e, l, -1)));
      }
      return (yu(), (r = Gi(Error(m(421)))), fl(e, t, u, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Cf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Be = Mt(l.nextSibling)),
        (We = t),
        (re = !0),
        (lt = null),
        e !== null &&
          ((Ye[Xe++] = St),
          (Ye[Xe++] = xt),
          (Ye[Xe++] = qt),
          (St = e.id),
          (xt = e.overflow),
          (qt = t)),
        (t = tu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Zs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ri(e.return, t, n));
  }
  function nu(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function qs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ne(e, t, r.children, n), (r = ie.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Zs(e, n, t);
          else if (e.tag === 19) Zs(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((q(ie, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && ll(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            nu(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          nu(t, !0, n, null, i);
          break;
        case "together":
          nu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function dl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Qt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function df(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ys(t), Cn());
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Oe(t.type) && Xr(t);
        break;
      case 4:
        Ii(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (q(el, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (q(ie, ie.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Gs(e, t, n)
              : (q(ie, ie.current & 1),
                (e = _t(e, t, n)),
                e !== null ? e.sibling : null);
        q(ie, ie.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return qs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          q(ie, ie.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), $s(e, t, n));
    }
    return _t(e, t, n);
  }
  var Js, ru, bs, ea;
  ((Js = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (ru = function () {}),
    (bs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(ht.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (i = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((l = Il(e, l)), (r = Il(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Qr);
        }
        Fl(n, r);
        var u;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var o = l[h];
              for (u in o) o.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (R.hasOwnProperty(h)
                  ? i || (i = [])
                  : (i = i || []).push(h, null));
        for (h in r) {
          var s = r[h];
          if (
            ((o = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && s !== o && (s != null || o != null))
          )
            if (h === "style")
              if (o) {
                for (u in o)
                  !o.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in s)
                  s.hasOwnProperty(u) &&
                    o[u] !== s[u] &&
                    (n || (n = {}), (n[u] = s[u]));
              } else (n || (i || (i = []), i.push(h, n)), (n = s));
            else
              h === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (i = i || []).push(h, s))
                : h === "children"
                  ? (typeof s != "string" && typeof s != "number") ||
                    (i = i || []).push(h, "" + s)
                  : h !== "suppressContentEditableWarning" &&
                    h !== "suppressHydrationWarning" &&
                    (R.hasOwnProperty(h)
                      ? (s != null && h === "onScroll" && J("scroll", e),
                        i || o === s || (i = []))
                      : (i = i || []).push(h, s));
        }
        n && (i = i || []).push("style", n);
        var h = i;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (ea = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function pr(e, t) {
    if (!re)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function pf(e, t, n) {
    var r = t.pendingProps;
    switch ((_i(t), t.tag)) {
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
        return (Ce(t), null);
      case 1:
        return (Oe(t.type) && Yr(), Ce(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          b(Re),
          b(xe),
          Ai(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (hu(lt), (lt = null)))),
          ru(e, t),
          Ce(t),
          null
        );
      case 5:
        Di(t);
        var l = en(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bs(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ce(t), null);
          }
          if (((e = en(ht.current)), Jr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (J("cancel", r), J("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) J(er[l], r);
                break;
              case "source":
                J("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (J("error", r), J("load", r));
                break;
              case "details":
                J("toggle", r);
                break;
              case "input":
                (Ou(r, i), J("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }),
                  J("invalid", r));
                break;
              case "textarea":
                (Du(r, i), J("invalid", r));
            }
            (Fl(n, i), (l = null));
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var o = i[u];
                u === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (i.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (i.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : R.hasOwnProperty(u) &&
                    o != null &&
                    u === "onScroll" &&
                    J("scroll", r);
              }
            switch (n) {
              case "input":
                (Sr(r), Iu(r, i, !0));
                break;
              case "textarea":
                (Sr(r), Au(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Qr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Uu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === "select" &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[pt] = t),
              (e[rr] = r),
              Js(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = Al(n, r)), n)) {
                case "dialog":
                  (J("cancel", e), J("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (J("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) J(er[l], e);
                  l = r;
                  break;
                case "source":
                  (J("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (J("error", e), J("load", e), (l = r));
                  break;
                case "details":
                  (J("toggle", e), (l = r));
                  break;
                case "input":
                  (Ou(e, r), (l = Rl(e, r)), J("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    J("invalid", e));
                  break;
                case "textarea":
                  (Du(e, r), (l = Il(e, r)), J("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Fl(n, l), (o = l));
              for (i in o)
                if (o.hasOwnProperty(i)) {
                  var s = o[i];
                  i === "style"
                    ? Bu(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Vu(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && In(e, s)
                          : typeof s == "number" && In(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (R.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && J("scroll", e)
                            : s != null && be(e, i, s, u));
                }
              switch (n) {
                case "input":
                  (Sr(e), Iu(e, r, !1));
                  break;
                case "textarea":
                  (Sr(e), Au(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + K(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? an(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        an(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ce(t), null);
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(sr.current)), en(ht.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = We), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ce(t), null);
      case 13:
        if (
          (b(ie),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (re && Be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (rs(), Cn(), (t.flags |= 98560), (i = !1));
          else if (((i = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(m(317));
              i[pt] = t;
            } else
              (Cn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ce(t), (i = !1));
          } else (lt !== null && (hu(lt), (lt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ie.current & 1) !== 0
                  ? pe === 0 && (pe = 3)
                  : yu())),
            t.updateQueue !== null && (t.flags |= 4),
            Ce(t),
            null);
      case 4:
        return (
          zn(),
          ru(e, t),
          e === null && tr(t.stateNode.containerInfo),
          Ce(t),
          null
        );
      case 10:
        return (Ti(t.type._context), Ce(t), null);
      case 17:
        return (Oe(t.type) && Yr(), Ce(t), null);
      case 19:
        if ((b(ie), (i = t.memoizedState), i === null)) return (Ce(t), null);
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) pr(i, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = ll(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      pr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (q(ie, (ie.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ae() > Rn &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !re)
              )
                return (Ce(t), null);
            } else
              2 * ae() - i.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ae()),
            (t.sibling = null),
            (n = ie.current),
            q(ie, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ce(t), null);
      case 22:
      case 23:
        return (
          vu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (He & 1073741824) !== 0 &&
              (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ce(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function hf(e, t) {
    switch ((_i(t), t.tag)) {
      case 1:
        return (
          Oe(t.type) && Yr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          b(Re),
          b(xe),
          Ai(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Di(t), null);
      case 13:
        if (
          (b(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Cn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (b(ie), null);
      case 4:
        return (zn(), null);
      case 10:
        return (Ti(t.type._context), null);
      case 22:
      case 23:
        return (vu(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    _e = !1,
    mf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          se(e, t, r);
        }
      else n.current = null;
  }
  function lu(e, t, n) {
    try {
      n();
    } catch (r) {
      se(e, t, r);
    }
  }
  var ta = !1;
  function vf(e, t) {
    if (((vi = Or), (e = Oo()), si(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              o = -1,
              s = -1,
              h = 0,
              g = 0,
              k = e,
              v = null;
            t: for (;;) {
              for (
                var E;
                k !== n || (l !== 0 && k.nodeType !== 3) || (o = u + l),
                  k !== i || (r !== 0 && k.nodeType !== 3) || (s = u + r),
                  k.nodeType === 3 && (u += k.nodeValue.length),
                  (E = k.firstChild) !== null;
              )
                ((v = k), (k = E));
              for (;;) {
                if (k === e) break t;
                if (
                  (v === n && ++h === l && (o = u),
                  v === i && ++g === r && (s = u),
                  (E = k.nextSibling) !== null)
                )
                  break;
                ((k = v), (v = k.parentNode));
              }
              k = E;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      yi = { focusedElem: e, selectionRange: n }, Or = !1, C = t;
      C !== null;
    )
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e));
      else
        for (; C !== null; ) {
          t = C;
          try {
            var j = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (j !== null) {
                    var N = j.memoizedProps,
                      ce = j.memoizedState,
                      d = t.stateNode,
                      a = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? N : it(t.type, N),
                        ce,
                      );
                    d.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = "")
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            se(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (C = e));
            break;
          }
          C = t.return;
        }
    return ((j = ta), (ta = !1), j);
  }
  function hr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && lu(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function iu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function na(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), na(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[pt],
          delete t[rr],
          delete t[Si],
          delete t[qc],
          delete t[Jc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function la(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ra(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Qr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uu(e, t, n), e = e.sibling; e !== null; )
        (uu(e, t, n), (e = e.sibling));
  }
  function ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ou(e, t, n), e = e.sibling; e !== null; )
        (ou(e, t, n), (e = e.sibling));
  }
  var ke = null,
    ut = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) (ia(e, t, n), (n = n.sibling));
  }
  function ia(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || Ln(n, t);
      case 6:
        var r = ke,
          l = ut;
        ((ke = null),
          Vt(e, t, n),
          (ke = r),
          (ut = l),
          ke !== null &&
            (ut
              ? ((e = ke),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ke.removeChild(n.stateNode)));
        break;
      case 18:
        ke !== null &&
          (ut
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8
                ? wi(e.parentNode, n)
                : e.nodeType === 1 && wi(e, n),
              Kn(e))
            : wi(ke, n.stateNode));
        break;
      case 4:
        ((r = ke),
          (l = ut),
          (ke = n.stateNode.containerInfo),
          (ut = !0),
          Vt(e, t, n),
          (ke = r),
          (ut = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !_e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            ((i = i.tag),
              u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && lu(n, t, u),
              (l = l.next));
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (
          !_e &&
          (Ln(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (o) {
            se(n, t, o);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((_e = (r = _e) || n.memoizedState !== null), Vt(e, t, n), (_e = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function ua(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new mf()),
        t.forEach(function (r) {
          var l = _f.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            u = t,
            o = u;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                ((ke = o.stateNode), (ut = !1));
                break e;
              case 3:
                ((ke = o.stateNode.containerInfo), (ut = !0));
                break e;
              case 4:
                ((ke = o.stateNode.containerInfo), (ut = !0));
                break e;
            }
            o = o.return;
          }
          if (ke === null) throw Error(m(160));
          (ia(i, u, l), (ke = null), (ut = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (h) {
          se(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (oa(t, e), (t = t.sibling));
  }
  function oa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ot(t, e), vt(e), r & 4)) {
          try {
            (hr(3, e, e.return), hl(3, e));
          } catch (N) {
            se(e, e.return, N);
          }
          try {
            hr(5, e, e.return);
          } catch (N) {
            se(e, e.return, N);
          }
        }
        break;
      case 1:
        (ot(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if (
          (ot(t, e),
          vt(e),
          r & 512 && n !== null && Ln(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (N) {
            se(e, e.return, N);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" &&
                i.type === "radio" &&
                i.name != null &&
                Mu(l, i),
                Al(o, u));
              var h = Al(o, i);
              for (u = 0; u < s.length; u += 2) {
                var g = s[u],
                  k = s[u + 1];
                g === "style"
                  ? Bu(l, k)
                  : g === "dangerouslySetInnerHTML"
                    ? Vu(l, k)
                    : g === "children"
                      ? In(l, k)
                      : be(l, g, k, h);
              }
              switch (o) {
                case "input":
                  Ol(l, i);
                  break;
                case "textarea":
                  Fu(l, i);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var E = i.value;
                  E != null
                    ? an(l, !!i.multiple, E, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[rr] = i;
            } catch (N) {
              se(e, e.return, N);
            }
        }
        break;
      case 6:
        if ((ot(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (N) {
            se(e, e.return, N);
          }
        }
        break;
      case 3:
        if (
          (ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Kn(t.containerInfo);
          } catch (N) {
            se(e, e.return, N);
          }
        break;
      case 4:
        (ot(t, e), vt(e));
        break;
      case 13:
        (ot(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (cu = ae())),
          r & 4 && ua(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (h = _e) || g), ot(t, e), (_e = h)) : ot(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !g && (e.mode & 1) !== 0)
          )
            for (C = e, g = e.child; g !== null; ) {
              for (k = C = g; C !== null; ) {
                switch (((v = C), (E = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hr(4, v, v.return);
                    break;
                  case 1:
                    Ln(v, v.return);
                    var j = v.stateNode;
                    if (typeof j.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (j.props = t.memoizedProps),
                          (j.state = t.memoizedState),
                          j.componentWillUnmount());
                      } catch (N) {
                        se(r, n, N);
                      }
                    }
                    break;
                  case 5:
                    Ln(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      ca(k);
                      continue;
                    }
                }
                E !== null ? ((E.return = v), (C = E)) : ca(k);
              }
              g = g.sibling;
            }
          e: for (g = null, k = e; ; ) {
            if (k.tag === 5) {
              if (g === null) {
                g = k;
                try {
                  ((l = k.stateNode),
                    h
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((o = k.stateNode),
                        (s = k.memoizedProps.style),
                        (u =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (o.style.display = Wu("display", u))));
                } catch (N) {
                  se(e, e.return, N);
                }
              }
            } else if (k.tag === 6) {
              if (g === null)
                try {
                  k.stateNode.nodeValue = h ? "" : k.memoizedProps;
                } catch (N) {
                  se(e, e.return, N);
                }
            } else if (
              ((k.tag !== 22 && k.tag !== 23) ||
                k.memoizedState === null ||
                k === e) &&
              k.child !== null
            ) {
              ((k.child.return = k), (k = k.child));
              continue;
            }
            if (k === e) break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e) break e;
              (g === k && (g = null), (k = k.return));
            }
            (g === k && (g = null),
              (k.sibling.return = k.return),
              (k = k.sibling));
          }
        }
        break;
      case 19:
        (ot(t, e), vt(e), r & 4 && ua(e));
        break;
      case 21:
        break;
      default:
        (ot(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ra(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (In(l, ""), (r.flags &= -33));
            var i = la(e);
            ou(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              o = la(e);
            uu(e, o, u);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        se(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yf(e, t, n) {
    ((C = e), sa(e));
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || pl;
        if (!u) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || _e;
          o = pl;
          var h = _e;
          if (((pl = u), (_e = s) && !h))
            for (C = l; C !== null; )
              ((u = C),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? fa(l)
                  : s !== null
                    ? ((s.return = u), (C = s))
                    : fa(l));
          for (; i !== null; ) ((C = i), sa(i), (i = i.sibling));
          ((C = l), (pl = o), (_e = h));
        }
        aa(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (C = i))
          : aa(e);
    }
  }
  function aa(e) {
    for (; C !== null; ) {
      var t = C;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                _e || hl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !_e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : it(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && cs(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  cs(t, u, n);
                }
                break;
              case 5:
                var o = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = o;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var h = t.alternate;
                  if (h !== null) {
                    var g = h.memoizedState;
                    if (g !== null) {
                      var k = g.dehydrated;
                      k !== null && Kn(k);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          _e || (t.flags & 512 && iu(t));
        } catch (v) {
          se(t, t.return, v);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (C = n));
        break;
      }
      C = t.return;
    }
  }
  function ca(e) {
    for (; C !== null; ) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (C = n));
        break;
      }
      C = t.return;
    }
  }
  function fa(e) {
    for (; C !== null; ) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
            } catch (s) {
              se(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                se(t, l, s);
              }
            }
            var i = t.return;
            try {
              iu(t);
            } catch (s) {
              se(t, i, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              iu(t);
            } catch (s) {
              se(t, u, s);
            }
        }
      } catch (s) {
        se(t, t.return, s);
      }
      if (t === e) {
        C = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (C = o));
        break;
      }
      C = t.return;
    }
  }
  var gf = Math.ceil,
    ml = Se.ReactCurrentDispatcher,
    su = Se.ReactCurrentOwner,
    qe = Se.ReactCurrentBatchConfig,
    W = 0,
    ve = null,
    fe = null,
    we = 0,
    He = 0,
    Tn = It(0),
    pe = 0,
    mr = null,
    nn = 0,
    vl = 0,
    au = 0,
    vr = null,
    Ie = null,
    cu = 0,
    Rn = 1 / 0,
    jt = null,
    yl = !1,
    fu = null,
    Wt = null,
    gl = !1,
    Bt = null,
    kl = 0,
    yr = 0,
    du = null,
    wl = -1,
    Sl = 0;
  function ze() {
    return (W & 6) !== 0 ? ae() : wl !== -1 ? wl : (wl = ae());
  }
  function Ht(e) {
    return (e.mode & 1) === 0
      ? 1
      : (W & 2) !== 0 && we !== 0
        ? we & -we
        : ef.transition !== null
          ? (Sl === 0 && (Sl = ro()), Sl)
          : ((e = Y),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : po(e.type))),
            e);
  }
  function st(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (du = null), Error(m(185)));
    (Wn(e, n, r),
      ((W & 2) === 0 || e !== ve) &&
        (e === ve && ((W & 2) === 0 && (vl |= n), pe === 4 && $t(e, we)),
        De(e, r),
        n === 1 &&
          W === 0 &&
          (t.mode & 1) === 0 &&
          ((Rn = ae() + 500), Gr && Ft())));
  }
  function De(e, t) {
    var n = e.callbackNode;
    ec(e, t);
    var r = Lr(e, e === ve ? we : 0);
    if (r === 0)
      (n !== null && eo(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eo(n), t === 1))
        (e.tag === 0 ? bc(pa.bind(null, e)) : Jo(pa.bind(null, e)),
          Gc(function () {
            (W & 6) === 0 && Ft();
          }),
          (n = null));
      else {
        switch (lo(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = to;
            break;
          case 16:
            n = jr;
            break;
          case 536870912:
            n = no;
            break;
          default:
            n = jr;
        }
        n = Sa(n, da.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function da(e, t) {
    if (((wl = -1), (Sl = 0), (W & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ve ? we : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = W;
      W |= 2;
      var i = ma();
      (ve !== e || we !== t) && ((jt = null), (Rn = ae() + 500), ln(e, t));
      do
        try {
          Sf();
          break;
        } catch (o) {
          ha(e, o);
        }
      while (!0);
      (Li(),
        (ml.current = i),
        (W = l),
        fe !== null ? (t = 0) : ((ve = null), (we = 0), (t = pe)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = pu(e, l)))),
        t === 1)
      )
        throw ((n = mr), ln(e, 0), $t(e, r), De(e, ae()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !kf(l) &&
            ((t = xl(e, r)),
            t === 2 && ((i = Kl(e)), i !== 0 && ((r = i), (t = pu(e, i)))),
            t === 1))
        )
          throw ((n = mr), ln(e, 0), $t(e, r), De(e, ae()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, Ie, jt);
            break;
          case 3:
            if (
              ($t(e, r),
              (r & 130023424) === r && ((t = cu + 500 - ae()), 10 < t))
            ) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ki(un.bind(null, e, Ie, jt), t);
              break;
            }
            un(e, Ie, jt);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - nt(r);
              ((i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i));
            }
            if (
              ((r = l),
              (r = ae() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * gf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ki(un.bind(null, e, Ie, jt), r);
              break;
            }
            un(e, Ie, jt);
            break;
          case 5:
            un(e, Ie, jt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (De(e, ae()), e.callbackNode === n ? da.bind(null, e) : null);
  }
  function pu(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = xl(e, t)),
      e !== 2 && ((t = Ie), (Ie = n), t !== null && hu(t)),
      e
    );
  }
  function hu(e) {
    Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
  }
  function kf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!rt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function $t(e, t) {
    for (
      t &= ~au,
        t &= ~vl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function pa(e) {
    if ((W & 6) !== 0) throw Error(m(327));
    On();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (De(e, ae()), null);
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = pu(e, r)));
    }
    if (n === 1) throw ((n = mr), ln(e, 0), $t(e, t), De(e, ae()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Ie, jt),
      De(e, ae()),
      null
    );
  }
  function mu(e, t) {
    var n = W;
    W |= 1;
    try {
      return e(t);
    } finally {
      ((W = n), W === 0 && ((Rn = ae() + 500), Gr && Ft()));
    }
  }
  function rn(e) {
    Bt !== null && Bt.tag === 0 && (W & 6) === 0 && On();
    var t = W;
    W |= 1;
    var n = qe.transition,
      r = Y;
    try {
      if (((qe.transition = null), (Y = 1), e)) return e();
    } finally {
      ((Y = r), (qe.transition = n), (W = t), (W & 6) === 0 && Ft());
    }
  }
  function vu() {
    ((He = Tn.current), b(Tn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Xc(n)), fe !== null))
      for (n = fe.return; n !== null; ) {
        var r = n;
        switch ((_i(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Yr());
            break;
          case 3:
            (zn(), b(Re), b(xe), Ai());
            break;
          case 5:
            Di(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            b(ie);
            break;
          case 19:
            b(ie);
            break;
          case 10:
            Ti(r.type._context);
            break;
          case 22:
          case 23:
            vu();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Qt(e.current, null)),
      (we = He = t),
      (pe = 0),
      (mr = null),
      (au = vl = nn = 0),
      (Ie = vr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            ((i.next = l), (r.next = u));
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function ha(e, t) {
    do {
      var n = fe;
      try {
        if ((Li(), (il.current = al), ul)) {
          for (var r = ue.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((tn = 0),
          (me = de = ue = null),
          (ar = !1),
          (cr = 0),
          (su.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (mr = t), (fe = null));
          break;
        }
        e: {
          var i = e,
            u = n.return,
            o = n,
            s = t;
          if (
            ((t = we),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var h = s,
              g = o,
              k = g.tag;
            if ((g.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var v = g.alternate;
              v
                ? ((g.updateQueue = v.updateQueue),
                  (g.memoizedState = v.memoizedState),
                  (g.lanes = v.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var E = Us(u);
            if (E !== null) {
              ((E.flags &= -257),
                Vs(E, u, o, i, t),
                E.mode & 1 && As(i, h, t),
                (t = E),
                (s = h));
              var j = t.updateQueue;
              if (j === null) {
                var N = new Set();
                (N.add(s), (t.updateQueue = N));
              } else j.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (As(i, h, t), yu());
                break e;
              }
              s = Error(m(426));
            }
          } else if (re && o.mode & 1) {
            var ce = Us(u);
            if (ce !== null) {
              ((ce.flags & 65536) === 0 && (ce.flags |= 256),
                Vs(ce, u, o, i, t),
                zi(Pn(s, o)));
              break e;
            }
          }
          ((i = s = Pn(s, o)),
            pe !== 4 && (pe = 2),
            vr === null ? (vr = [i]) : vr.push(i),
            (i = u));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var d = Ds(i, s, t);
                as(i, d);
                break e;
              case 1:
                o = s;
                var a = i.type,
                  p = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (p !== null &&
                      typeof p.componentDidCatch == "function" &&
                      (Wt === null || !Wt.has(p))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var w = Fs(i, o, t);
                  as(i, w);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ya(n);
      } catch (z) {
        ((t = z), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = ml.current;
    return ((ml.current = al), e === null ? al : e);
  }
  function yu() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null ||
        ((nn & 268435455) === 0 && (vl & 268435455) === 0) ||
        $t(ve, we));
  }
  function xl(e, t) {
    var n = W;
    W |= 2;
    var r = ma();
    (ve !== e || we !== t) && ((jt = null), ln(e, t));
    do
      try {
        wf();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if ((Li(), (W = n), (ml.current = r), fe !== null)) throw Error(m(261));
    return ((ve = null), (we = 0), pe);
  }
  function wf() {
    for (; fe !== null; ) va(fe);
  }
  function Sf() {
    for (; fe !== null && !Qa(); ) va(fe);
  }
  function va(e) {
    var t = wa(e.alternate, e, He);
    ((e.memoizedProps = e.pendingProps),
      t === null ? ya(e) : (fe = t),
      (su.current = null));
  }
  function ya(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = pf(n, t, He)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = hf(n, t)), n !== null)) {
          ((n.flags &= 32767), (fe = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((pe = 6), (fe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    pe === 0 && (pe = 5);
  }
  function un(e, t, n) {
    var r = Y,
      l = qe.transition;
    try {
      ((qe.transition = null), (Y = 1), xf(e, t, n, r));
    } finally {
      ((qe.transition = l), (Y = r));
    }
    return null;
  }
  function xf(e, t, n, r) {
    do On();
    while (Bt !== null);
    if ((W & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (tc(e, i),
      e === ve && ((fe = ve = null), (we = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        gl ||
        ((gl = !0),
        Sa(jr, function () {
          return (On(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = qe.transition), (qe.transition = null));
      var u = Y;
      Y = 1;
      var o = W;
      ((W |= 4),
        (su.current = null),
        vf(e, n),
        oa(n, e),
        Wc(yi),
        (Or = !!vi),
        (yi = vi = null),
        (e.current = n),
        yf(n),
        Ka(),
        (W = o),
        (Y = u),
        (qe.transition = i));
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Bt = e), (kl = l)),
      (i = e.pendingLanes),
      i === 0 && (Wt = null),
      Ga(n.stateNode),
      De(e, ae()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (yl) throw ((yl = !1), (e = fu), (fu = null), e);
    return (
      (kl & 1) !== 0 && e.tag !== 0 && On(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === du ? yr++ : ((yr = 0), (du = e))) : (yr = 0),
      Ft(),
      null
    );
  }
  function On() {
    if (Bt !== null) {
      var e = lo(kl),
        t = qe.transition,
        n = Y;
      try {
        if (((qe.transition = null), (Y = 16 > e ? 16 : e), Bt === null))
          var r = !1;
        else {
          if (((e = Bt), (Bt = null), (kl = 0), (W & 6) !== 0))
            throw Error(m(331));
          var l = W;
          for (W |= 4, C = e.current; C !== null; ) {
            var i = C,
              u = i.child;
            if ((C.flags & 16) !== 0) {
              var o = i.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var h = o[s];
                  for (C = h; C !== null; ) {
                    var g = C;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hr(8, g, i);
                    }
                    var k = g.child;
                    if (k !== null) ((k.return = g), (C = k));
                    else
                      for (; C !== null; ) {
                        g = C;
                        var v = g.sibling,
                          E = g.return;
                        if ((na(g), g === h)) {
                          C = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = E), (C = v));
                          break;
                        }
                        C = E;
                      }
                  }
                }
                var j = i.alternate;
                if (j !== null) {
                  var N = j.child;
                  if (N !== null) {
                    j.child = null;
                    do {
                      var ce = N.sibling;
                      ((N.sibling = null), (N = ce));
                    } while (N !== null);
                  }
                }
                C = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null)
              ((u.return = i), (C = u));
            else
              e: for (; C !== null; ) {
                if (((i = C), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(9, i, i.return);
                  }
                var d = i.sibling;
                if (d !== null) {
                  ((d.return = i.return), (C = d));
                  break e;
                }
                C = i.return;
              }
          }
          var a = e.current;
          for (C = a; C !== null; ) {
            u = C;
            var p = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && p !== null)
              ((p.return = u), (C = p));
            else
              e: for (u = a; C !== null; ) {
                if (((o = C), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hl(9, o);
                    }
                  } catch (z) {
                    se(o, o.return, z);
                  }
                if (o === u) {
                  C = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  ((w.return = o.return), (C = w));
                  break e;
                }
                C = o.return;
              }
          }
          if (
            ((W = l), Ft(), dt && typeof dt.onPostCommitFiberRoot == "function")
          )
            try {
              dt.onPostCommitFiberRoot(Nr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Y = n), (qe.transition = t));
      }
    }
    return !1;
  }
  function ga(e, t, n) {
    ((t = Pn(n, t)),
      (t = Ds(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = ze()),
      e !== null && (Wn(e, 1, t), De(e, t)));
  }
  function se(e, t, n) {
    if (e.tag === 3) ga(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ga(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Wt === null || !Wt.has(r)))
          ) {
            ((e = Pn(n, e)),
              (e = Fs(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = ze()),
              t !== null && (Wn(t, 1, e), De(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (we & n) === n &&
        (pe === 4 || (pe === 3 && (we & 130023424) === we && 500 > ae() - cu)
          ? ln(e, 0)
          : (au |= n)),
      De(e, t));
  }
  function ka(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Pr), (Pr <<= 1), (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = ze();
    ((e = Et(e, t)), e !== null && (Wn(e, t, n), De(e, n)));
  }
  function Cf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ka(e, n));
  }
  function _f(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    (r !== null && r.delete(t), ka(e, n));
  }
  var wa;
  wa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Re.current) Me = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Me = !1), df(e, t, n));
        Me = (e.flags & 131072) !== 0;
      }
    else ((Me = !1), re && (t.flags & 1048576) !== 0 && bo(t, qr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (dl(e, t), (e = t.pendingProps));
        var l = Sn(t, xe.current);
        (Nn(t, n), (l = Wi(null, t, r, e, l, n)));
        var i = Bi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Oe(r) ? ((i = !0), Xr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Mi(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xi(t, r, e, n),
              (t = Ji(null, t, r, !0, i, n)))
            : ((t.tag = 0), re && i && Ci(t), Ne(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (dl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Nf(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Ws(null, t, r, e, n);
              break e;
            case 14:
              t = Bs(null, t, r, it(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          qi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ys(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            ss(e, t),
            rl(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = Pn(Error(m(423)), t)), (t = Xs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Pn(Error(m(424)), t)), (t = Xs(e, t, r, n, l)));
              break e;
            } else
              for (
                Be = Mt(t.stateNode.containerInfo.firstChild),
                  We = t,
                  re = !0,
                  lt = null,
                  n = us(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Cn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            Ne(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          fs(t),
          e === null && Ni(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          gi(r, l) ? (u = null) : i !== null && gi(r, i) && (t.flags |= 32),
          Qs(e, t),
          Ne(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && Ni(t), null);
      case 13:
        return Gs(e, t, n);
      case 4:
        return (
          Ii(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : Ne(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Ws(e, t, r, l, n)
        );
      case 7:
        return (Ne(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ne(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ne(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (u = l.value),
            q(el, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (rt(i.value, u)) {
              if (i.children === l.children && !Re.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var o = i.dependencies;
                if (o !== null) {
                  u = i.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        ((s = Ct(-1, n & -n)), (s.tag = 2));
                        var h = i.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var g = h.pending;
                          (g === null
                            ? (s.next = s)
                            : ((s.next = g.next), (g.next = s)),
                            (h.pending = s));
                        }
                      }
                      ((i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Ri(i.return, n, t),
                        (o.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(m(341));
                  ((u.lanes |= n),
                    (o = u.alternate),
                    o !== null && (o.lanes |= n),
                    Ri(u, n, t),
                    (u = i.sibling));
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      ((i.return = u.return), (u = i));
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          (Ne(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Nn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ne(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = it(r, t.pendingProps)),
          (l = it(r.type, l)),
          Bs(e, t, r, l, n)
        );
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          dl(e, t),
          (t.tag = 1),
          Oe(r) ? ((e = !0), Xr(t)) : (e = !1),
          Nn(t, n),
          Ms(t, r, l),
          Xi(t, r, l, n),
          Ji(null, t, r, !0, e, n)
        );
      case 19:
        return qs(e, t, n);
      case 22:
        return $s(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function Sa(e, t) {
    return bu(e, t);
  }
  function jf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Je(e, t, n, r) {
    return new jf(e, t, n, r);
  }
  function gu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Nf(e) {
    if (typeof e == "function") return gu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Je(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function El(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) gu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case Le:
          return on(n.children, l, i, t);
        case Ke:
          ((u = 8), (l |= 8));
          break;
        case Nt:
          return (
            (e = Je(12, n, t, l | 2)),
            (e.elementType = Nt),
            (e.lanes = i),
            e
          );
        case Ae:
          return (
            (e = Je(13, n, t, l)),
            (e.elementType = Ae),
            (e.lanes = i),
            e
          );
        case tt:
          return (
            (e = Je(19, n, t, l)),
            (e.elementType = tt),
            (e.lanes = i),
            e
          );
        case oe:
          return Cl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                u = 10;
                break e;
              case Yt:
                u = 9;
                break e;
              case ct:
                u = 11;
                break e;
              case ft:
                u = 14;
                break e;
              case Te:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Je(u, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function on(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function Cl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = oe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ku(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function wu(e, t, n) {
    return (
      (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function zf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Su(e, t, n, r, l, i, u, o, s) {
    return (
      (e = new zf(e, t, n, o, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Je(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Mi(i),
      e
    );
  }
  function Pf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: je,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function xa(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Oe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Oe(n)) return Zo(e, n, t);
    }
    return t;
  }
  function Ea(e, t, n, r, l, i, u, o, s) {
    return (
      (e = Su(n, r, !0, e, l, i, u, o, s)),
      (e.context = xa(null)),
      (n = e.current),
      (r = ze()),
      (l = Ht(n)),
      (i = Ct(r, l)),
      (i.callback = t ?? null),
      Ut(n, i, l),
      (e.current.lanes = l),
      Wn(e, l, r),
      De(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      i = ze(),
      u = Ht(l);
    return (
      (n = xa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, u)),
      e !== null && (st(e, l, u, i), nl(e, l, u)),
      u
    );
  }
  function jl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ca(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function xu(e, t) {
    (Ca(e, t), (e = e.alternate) && Ca(e, t));
  }
  function Lf() {
    return null;
  }
  var _a =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Eu(e) {
    this._internalRoot = e;
  }
  ((Nl.prototype.render = Eu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      _l(e, t, null, null);
    }),
    (Nl.prototype.unmount = Eu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            _l(null, e, null, null);
          }),
            (t[kt] = null));
        }
      }));
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && co(e));
    }
  };
  function Cu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ja() {}
  function Tf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var h = jl(u);
          i.call(h);
        };
      }
      var u = Ea(t, r, e, 0, null, !1, !1, "", ja);
      return (
        (e._reactRootContainer = u),
        (e[kt] = u.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var h = jl(s);
        o.call(h);
      };
    }
    var s = Su(e, 0, !1, null, null, !1, !1, "", ja);
    return (
      (e._reactRootContainer = s),
      (e[kt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        _l(t, s, n, r);
      }),
      s
    );
  }
  function Pl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = jl(u);
          o.call(s);
        };
      }
      _l(t, u, e, l);
    } else u = Tf(n, t, e, l, r);
    return jl(u);
  }
  ((io = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 &&
            (Xl(t, n | 1),
            De(t, ae()),
            (W & 6) === 0 && ((Rn = ae() + 500), Ft()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = ze();
            st(r, e, 1, l);
          }
        }),
          xu(e, 1));
    }
  }),
    (Gl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = ze();
          st(t, e, 134217728, n);
        }
        xu(e, 134217728);
      }
    }),
    (uo = function (e) {
      if (e.tag === 13) {
        var t = Ht(e),
          n = Et(e, t);
        if (n !== null) {
          var r = ze();
          st(n, e, t, r);
        }
        xu(e, t);
      }
    }),
    (oo = function () {
      return Y;
    }),
    (so = function (e, t) {
      var n = Y;
      try {
        return ((Y = e), t());
      } finally {
        Y = n;
      }
    }),
    (Wl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Kr(r);
                if (!l) throw Error(m(90));
                (Ru(r), Ol(r, l));
              }
            }
          }
          break;
        case "textarea":
          Fu(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Ku = mu),
    (Yu = rn));
  var Rf = { usingClientEntryPoint: !1, Events: [lr, kn, Kr, $u, Qu, mu] },
    gr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Of = {
      bundleType: gr.bundleType,
      version: gr.version,
      rendererPackageName: gr.rendererPackageName,
      rendererConfig: gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = qu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Lf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        ((Nr = Ll.inject(Of)), (dt = Ll));
      } catch {}
  }
  return (
    (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf),
    (Fe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Cu(t)) throw Error(m(200));
      return Pf(e, t, null, n);
    }),
    (Fe.createRoot = function (e, t) {
      if (!Cu(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = _a;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Su(e, 1, !1, null, null, n, !1, r, l)),
        (e[kt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Eu(t)
      );
    }),
    (Fe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = qu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Fe.flushSync = function (e) {
      return rn(e);
    }),
    (Fe.hydrate = function (e, t, n) {
      if (!zl(t)) throw Error(m(200));
      return Pl(null, e, t, !0, n);
    }),
    (Fe.hydrateRoot = function (e, t, n) {
      if (!Cu(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = _a;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Ea(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[kt] = t.current),
        tr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Nl(t);
    }),
    (Fe.render = function (e, t, n) {
      if (!zl(t)) throw Error(m(200));
      return Pl(null, e, t, !1, n);
    }),
    (Fe.unmountComponentAtNode = function (e) {
      if (!zl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            Pl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[kt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Fe.unstable_batchedUpdates = mu),
    (Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!zl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Pl(e, t, n, !1, r);
    }),
    (Fe.version = "18.3.1-next-f1338f8080-20240426"),
    Fe
  );
}
var Ma;
function Hf() {
  if (Ma) return Nu.exports;
  Ma = 1;
  function S() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (P) {
        console.error(P);
      }
  }
  return (S(), (Nu.exports = Bf()), Nu.exports);
}
var Ia;
function $f() {
  if (Ia) return Tl;
  Ia = 1;
  var S = Hf();
  return ((Tl.createRoot = S.createRoot), (Tl.hydrateRoot = S.hydrateRoot), Tl);
}
var Qf = $f();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = (S) => S.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Da = (...S) =>
    S.filter((P, m, U) => !!P && P.trim() !== "" && U.indexOf(P) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Yf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = Pe.forwardRef(
  (
    {
      color: S = "currentColor",
      size: P = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: U,
      className: R = "",
      children: I,
      iconNode: G,
      ...Q
    },
    V,
  ) =>
    Pe.createElement(
      "svg",
      {
        ref: V,
        ...Yf,
        width: P,
        height: P,
        stroke: S,
        strokeWidth: U ? (Number(m) * 24) / Number(P) : m,
        className: Da("lucide", R),
        ...Q,
      },
      [
        ...G.map(([ge, he]) => Pe.createElement(ge, he)),
        ...(Array.isArray(I) ? I : [I]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sn = (S, P) => {
  const m = Pe.forwardRef(({ className: U, ...R }, I) =>
    Pe.createElement(Xf, {
      ref: I,
      iconNode: P,
      className: Da(`lucide-${Kf(S)}`, U),
      ...R,
    }),
  );
  return ((m.displayName = `${S}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = sn("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = sn("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lu = sn("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = sn("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = sn("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = sn("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fa = sn("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  wr = [
    {
      title: "Meeting Intelligence",
      description:
        "A meeting assistant concept for turning conversations into clear notes and follow-up actions.",
      stack: ["Whisper", "Sarvam AI", "FastAPI", "LLM"],
      features: [
        "Transcription",
        "Summarization",
        "Action item extraction",
        "PDF export",
      ],
    },
    {
      title: "AI Resume Analyser",
      description:
        "An AI powered resume analysis project. More project details will be added here.",
      stack: ["AI", "Full Stack"],
      features: ["Resume analysis", "Structured feedback"],
    },
    {
      title: "Multi-Agent Research System",
      description:
        "A multi-agent research project. Implementation details will be added here.",
      stack: ["Agents", "LLM"],
      features: ["Research workflow", "Source synthesis"],
    },
    {
      title: "Mental Health Predictor",
      description:
        "A project exploring machine learning for mental health prediction.",
      stack: ["Machine Learning"],
      features: ["Predictive modeling"],
    },
    {
      title: "PhysioPath",
      description: "A project in progress. More details will be added here.",
      stack: ["Full Stack"],
      features: ["Project details coming soon"],
    },
  ];
function ed({ open: S }) {
  return c.jsxs("svg", {
    className: "scene",
    viewBox: "0 0 1100 700",
    role: "img",
    "aria-label":
      "Warm developer desk with monitor, keyboard, headphones, books and floating interface panels",
    children: [
      c.jsxs("defs", {
        children: [
          c.jsxs("linearGradient", {
            id: "wall",
            y2: "1",
            children: [
              c.jsx("stop", { stopColor: "#f4f0e5" }),
              c.jsx("stop", { offset: "1", stopColor: "#e8e1d1" }),
            ],
          }),
          c.jsxs("linearGradient", {
            id: "desk",
            y2: "1",
            children: [
              c.jsx("stop", { stopColor: "#f3eddd" }),
              c.jsx("stop", { offset: "1", stopColor: "#d6cbb8" }),
            ],
          }),
          c.jsxs("linearGradient", {
            id: "screen",
            x2: "1",
            y2: "1",
            children: [
              c.jsx("stop", { stopColor: "#514338" }),
              c.jsx("stop", { offset: "1", stopColor: "#251e1b" }),
            ],
          }),
          c.jsx("filter", {
            id: "sh",
            children: c.jsx("feGaussianBlur", { stdDeviation: "12" }),
          }),
        ],
      }),
      c.jsx("path", { fill: "url(#wall)", d: "M0 0h1100v480L0 583z" }),
      c.jsx("path", { d: "M0 410 1100 316v384H0z", fill: "#dbd1be" }),
      c.jsx("path", {
        d: "m160 427 610-190 410 140v323H126z",
        fill: "#968773",
        opacity: ".2",
        filter: "url(#sh)",
      }),
      c.jsx("path", {
        d: "M0 580 699 363l401 82v255H0z",
        fill: "url(#desk)",
        stroke: "#c9bca6",
        strokeWidth: "2",
      }),
      c.jsx("path", { d: "M0 249q39-26 81 1v296L0 570z", fill: "#554b3d" }),
      c.jsx("path", { d: "M0 292q33-17 65 1v208L0 526z", fill: "#786b58" }),
      c.jsxs("g", {
        className: "float p1",
        children: [
          c.jsx("path", {
            d: "m783 101 113 30v129l-113-29z",
            fill: "#342a24",
            stroke: "#806f5c",
            strokeWidth: "2",
          }),
          c.jsx("path", {
            d: "m794 115 91 24v92l-91-24z",
            fill: "none",
            stroke: "#c4b69e",
            opacity: ".6",
          }),
          c.jsx("path", {
            d: "m797 144 82 22m-82-11 82 22m-82-11 44 12",
            stroke: "#aa9a82",
            strokeWidth: "2",
            opacity: ".6",
          }),
        ],
      }),
      c.jsxs("g", {
        className: "float p2",
        children: [
          c.jsx("path", {
            d: "m914 202 125 35v112l-125-36z",
            fill: "#40352d",
            stroke: "#8b7b65",
            strokeWidth: "2",
          }),
          c.jsx("path", {
            d: "m926 218 101 29v79l-101-29z",
            fill: "none",
            stroke: "#b9a98e",
            opacity: ".55",
          }),
          c.jsx("path", {
            d: "m930 244 90 25m-90-10 54 15",
            stroke: "#b8aa91",
            strokeWidth: "2",
            opacity: ".6",
          }),
        ],
      }),
      c.jsx("path", {
        d: "M764 193 732 207 733 311",
        fill: "none",
        stroke: "#978873",
      }),
      c.jsxs("g", {
        className: "monitor",
        children: [
          c.jsx("path", {
            d: "m567 179 291 81q10 3 10 14v242q0 10-10 7L565 441q-9-3-9-13V188q0-12 11-9z",
            fill: "#302822",
            stroke: "#493d33",
            strokeWidth: "5",
          }),
          c.jsx("path", {
            d: "m580 197 266 73v220L580 416z",
            fill: "url(#screen)",
          }),
          c.jsx("path", {
            d: "m593 215 39 11v3l-39-11zm0 13 39 11v3l-39-11zm50 7 150 42v3l-150-42zm0 14 129 36v3l-129-36zm0 14 169 47v3l-169-47z",
            fill: "#b7a78c",
            opacity: ".7",
          }),
          c.jsx("path", {
            d: "m643 282 84 24v72l-84-24z",
            fill: "#392f28",
            stroke: "#97866e",
          }),
          c.jsx("path", {
            d: "m653 296 63 18m-63-8 45 13m-45 8 59 17",
            stroke: "#c0ad8d",
            strokeWidth: "2",
          }),
          c.jsx("path", {
            d: "m745 293 87 24v78l-87-24z",
            fill: "#302923",
            stroke: "#7d6c58",
          }),
          c.jsx("path", {
            d: "m633 431 162 45-17 58-138-39z",
            fill: "#332b25",
          }),
          c.jsx("path", {
            d: "m605 534 176 48q20 8 24 18l-3 7-229-65q5-8 32-8z",
            fill: "#2f2823",
          }),
        ],
      }),
      c.jsx("path", {
        d: "M507 282c22-40 77-45 102-4",
        fill: "none",
        stroke: "#b7a990",
        strokeWidth: "2",
      }),
      c.jsxs("g", {
        className: "orb",
        children: [
          c.jsx("circle", {
            cx: "535",
            cy: "287",
            r: "28",
            fill: "#dfd4c1",
            opacity: ".65",
          }),
          c.jsx("circle", {
            cx: "535",
            cy: "284",
            r: "21",
            fill: "#fbf8ef",
            stroke: "#c4b69d",
            strokeWidth: "2",
          }),
          c.jsx("circle", { cx: "535", cy: "284", r: "12", fill: "#b3a48d" }),
          c.jsx("circle", { cx: "535", cy: "284", r: "7", fill: "#665849" }),
        ],
      }),
      c.jsx("path", {
        d: "m450 455 205 57 89-3-201-61z",
        fill: "#d4c9b6",
        stroke: "#b9aa92",
      }),
      c.jsx("path", { d: "m490 462 161 46 60-2-157-46z", fill: "#e5ddcd" }),
      c.jsx("text", {
        x: "574",
        y: "489",
        fontSize: "9",
        fill: "#766955",
        transform: "rotate(16 574 489)",
        fontFamily: "monospace",
        children: "DEVELOPER WORKSPACE",
      }),
      c.jsxs("g", {
        transform: "translate(474 502) rotate(15)",
        children: [
          c.jsx("path", {
            d: "M0 10h213v62H0z",
            fill: "#43382f",
            stroke: "#2d2621",
            strokeWidth: "3",
          }),
          Array.from({ length: 5 }, (P, m) =>
            c.jsx(
              "g",
              {
                children: Array.from({ length: 14 }, (U, R) =>
                  c.jsx(
                    "rect",
                    {
                      x: 8 + R * 14,
                      y: 17 + m * 10,
                      width: "10",
                      height: "6",
                      rx: "1",
                      fill: "#c3b69f",
                      opacity: ".85",
                    },
                    R,
                  ),
                ),
              },
              m,
            ),
          ),
        ],
      }),
      c.jsxs("g", {
        transform: "translate(357 457) rotate(-20)",
        children: [
          c.jsx("path", { d: "m0 8 88-8 37 13-89 11z", fill: "#4b3e32" }),
          c.jsx("path", { d: "m4 12 84-7 31 10-84 8z", fill: "#e4dccd" }),
        ],
      }),
      c.jsxs("g", {
        transform: "translate(722 585) rotate(-25)",
        children: [
          c.jsx("path", {
            d: "M0 18Q0 0 28 0t28 18q0 28-28 28T0 18z",
            fill: "#695b4b",
          }),
          c.jsx("path", { d: "M28 2v14", stroke: "#c0b29a", strokeWidth: "2" }),
        ],
      }),
      c.jsxs("g", {
        transform: "translate(846 555) rotate(13)",
        children: [
          c.jsx("path", {
            d: "M0 51V32a50 50 0 0 1 100 0v19",
            fill: "none",
            stroke: "#453a31",
            strokeWidth: "14",
          }),
          c.jsx("path", {
            d: "M1 35v27q0 13 17 13h8V42H17q-12 0-16-7zm99 0v27q0 13-17 13h-8V42h9q12 0 16-7z",
            fill: "#594b3d",
            stroke: "#352c26",
            strokeWidth: "4",
          }),
        ],
      }),
      c.jsxs("g", {
        className: "books",
        onClick: () => S("work"),
        role: "button",
        tabIndex: "0",
        "aria-label": "Open Projects book",
        onKeyDown: (P) => P.key === "Enter" && S("work"),
        children: [
          c.jsx("path", {
            d: "m960 444 140-33v198l-140 30z",
            fill: "#54473a",
            stroke: "#332b25",
            strokeWidth: "3",
          }),
          c.jsx("path", { d: "m960 444 19-18 141-31-20 16z", fill: "#82725d" }),
          [
            [974, 452, "AI / SYSTEMS"],
            [1005, 444, "DESIGN"],
            [1036, 434, "PROJECTS"],
            [1066, 425, "EXPERIENCE"],
          ].map(([P, m, U], R) =>
            c.jsxs(
              "g",
              {
                children: [
                  c.jsx("path", {
                    d: "m" + P + " " + m + " 25 -6v170l-25 6z",
                    fill: R % 2 ? "#695847" : "#302822",
                  }),
                  c.jsx("text", {
                    x: P + 13,
                    y: "570",
                    fill: "#efe3ce",
                    fontSize: "8",
                    transform: "rotate(-90 " + (P + 13) + " 570)",
                    fontFamily: "monospace",
                    children: U,
                  }),
                ],
              },
              U,
            ),
          ),
        ],
      }),
    ],
  });
}
function td({ open: S, contact: P }) {
  let [m, U] = Pe.useState(!1);
  return c.jsxs("header", {
    className: "nav",
    children: [
      c.jsx("a", {
        className: "brand",
        href: "#",
        onClick: (R) => {
          (R.preventDefault(), S(null));
        },
        children: "VINAYAKA M",
      }),
      c.jsx("button", {
        className: "menu-toggle",
        "aria-label": "Toggle navigation",
        onClick: () => U(!m),
        children: c.jsx(bf, { size: 19 }),
      }),
      c.jsxs("nav", {
        className: m ? "navlinks show" : "navlinks",
        "aria-label": "Main navigation",
        children: [
          c.jsx("button", { onClick: () => S("work"), children: "WORK" }),
          c.jsx("button", { onClick: () => S("about"), children: "ABOUT" }),
          c.jsx("button", {
            onClick: () => S("experience"),
            children: "EXPERIENCE",
          }),
          c.jsx("button", { onClick: P, children: "CONTACT" }),
        ],
      }),
    ],
  });
}
function nd({ type: S, close: P }) {
  let [m, U] = Pe.useState(0);
  (Pe.useEffect(() => U(0), [S]),
    Pe.useEffect(() => {
      let I = (G) => {
        (G.key === "Escape" && P(),
          G.key === "ArrowRight" &&
            U((Q) => Math.min(Q + 1, (S === "work" ? wr.length : 1) - 1)),
          G.key === "ArrowLeft" && U((Q) => Math.max(0, Q - 1)));
      };
      return (
        window.addEventListener("keydown", I),
        () => window.removeEventListener("keydown", I)
      );
    }, [P, S]));
  let R = wr[m];
  return c.jsxs("div", {
    className: "overlay",
    role: "dialog",
    "aria-modal": "true",
    children: [
      c.jsxs("button", {
        className: "close",
        onClick: P,
        children: [c.jsx(Fa, { size: 17 }), " CLOSE"],
      }),
      c.jsxs("section", {
        className: "book",
        children: [
          c.jsx("article", {
            className: "paper left",
            children:
              S === "about"
                ? c.jsxs(c.Fragment, {
                    children: [
                      c.jsxs("div", {
                        className: "portrait",
                        children: [
                          c.jsx("b", { children: "VM" }),
                          c.jsx("small", { children: "PORTRAIT PLACEHOLDER" }),
                        ],
                      }),
                      c.jsx("label", { children: "AUTHOR · 01" }),
                      c.jsx("h2", { children: "VINAYAKA M" }),
                      c.jsxs("p", {
                        className: "role",
                        children: [
                          "AI Engineer /",
                          c.jsx("br", {}),
                          "Full Stack Developer",
                        ],
                      }),
                      c.jsx("p", {
                        className: "note",
                        children:
                          "A curious builder exploring the space between intelligent systems and thoughtful digital experiences.",
                      }),
                    ],
                  })
                : S === "work"
                  ? c.jsxs(c.Fragment, {
                      children: [
                        c.jsxs("div", {
                          className: "project-art",
                          children: [
                            c.jsx("span", { children: "◉" }),
                            c.jsxs("small", {
                              children: [
                                "FIELD NOTES / ",
                                String(m + 1).padStart(2, "0"),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("label", {
                          children: [
                            "SELECTED PROJECT · ",
                            String(m + 1).padStart(2, "0"),
                          ],
                        }),
                      ],
                    })
                  : c.jsxs(c.Fragment, {
                      children: [
                        c.jsxs("div", {
                          className: "stamp",
                          children: ["FIELD", c.jsx("br", {}), "NOTES"],
                        }),
                        c.jsx("label", { children: "JOURNAL · 01" }),
                        c.jsxs("h2", {
                          children: ["ENGINEERING", c.jsx("br", {}), "JOURNEY"],
                        }),
                        c.jsxs("p", {
                          className: "note",
                          children: [
                            "Bharat Electronics Limited",
                            c.jsx("br", {}),
                            c.jsx("b", { children: "NWCS Intern" }),
                          ],
                        }),
                      ],
                    }),
          }),
          c.jsxs("article", {
            className: "paper right",
            children: [
              c.jsx("label", {
                children:
                  S === "about"
                    ? "A LITTLE ABOUT ME"
                    : S === "work"
                      ? "PORTFOLIO / " + String(m + 1).padStart(2, "0")
                      : "PROFESSIONAL EXPERIENCE",
              }),
              c.jsx("h2", {
                children:
                  S === "about"
                    ? "ABOUT THE AUTHOR"
                    : S === "work"
                      ? R.title
                      : "BHARAT ELECTRONICS LIMITED",
              }),
              S === "about"
                ? c.jsxs(c.Fragment, {
                    children: [
                      c.jsx("p", {
                        children:
                          "I’m Vinayaka, an AI Engineer and Full Stack Developer interested in building useful, intelligent systems and considered digital experiences.",
                      }),
                      c.jsx("h3", { children: "IN FOCUS" }),
                      c.jsx("p", {
                        children:
                          "AI engineering · full stack development · human-centered tools",
                      }),
                      c.jsx("h3", { children: "EDUCATION & JOURNEY" }),
                      c.jsx("p", {
                        className: "muted",
                        children:
                          "Education, current focus, interests, and more of my engineering journey will be added here.",
                      }),
                    ],
                  })
                : S === "work"
                  ? c.jsxs(c.Fragment, {
                      children: [
                        c.jsx("p", { children: R.description }),
                        c.jsx("h3", { children: "TOOLS" }),
                        c.jsx("div", {
                          className: "tags",
                          children: R.stack.map((I) =>
                            c.jsx("span", { children: I }, I),
                          ),
                        }),
                        c.jsx("h3", { children: "FEATURES" }),
                        c.jsx("ul", {
                          children: R.features.map((I) =>
                            c.jsx("li", { children: I }, I),
                          ),
                        }),
                        c.jsxs("div", {
                          className: "links",
                          children: [
                            c.jsxs("button", {
                              disabled: !0,
                              children: [c.jsx(qf, { size: 13 }), " LIVE DEMO"],
                            }),
                            c.jsxs("button", {
                              disabled: !0,
                              children: [c.jsx(Jf, { size: 13 }), " GITHUB"],
                            }),
                          ],
                        }),
                      ],
                    })
                  : c.jsxs(c.Fragment, {
                      children: [
                        c.jsx("p", { children: "NWCS Intern" }),
                        c.jsx("div", { className: "rule" }),
                        c.jsx("p", {
                          className: "muted",
                          children:
                            "A description will be added when approved public details are available.",
                        }),
                      ],
                    }),
              c.jsx("small", {
                className: "page-num",
                children: String(m * 2 + 2).padStart(2, "0"),
              }),
            ],
          }),
          c.jsx("div", { className: "spine" }),
        ],
      }),
      c.jsxs("div", {
        className: "controls",
        children: [
          c.jsxs("button", {
            disabled: !m,
            onClick: () => U((I) => Math.max(0, I - 1)),
            children: [c.jsx(Zf, { size: 14 }), " PREVIOUS"],
          }),
          c.jsx("span", {
            children:
              S === "work"
                ? String(m + 1).padStart(2, "0") +
                  " / " +
                  String(wr.length).padStart(2, "0")
                : "01 / 01",
          }),
          c.jsxs("button", {
            disabled: S !== "work" || m === wr.length - 1,
            onClick: () => U((I) => Math.min(I + 1, wr.length - 1)),
            children: ["NEXT ", c.jsx(Lu, { size: 14 })],
          }),
        ],
      }),
    ],
  });
}
function rd() {
  let [S, P] = Pe.useState(null),
    [m, U] = Pe.useState(!1),
    [R, I] = Pe.useState({ x: 0, y: 0 });
  (Pe.useEffect(() => {
    let Q = (V) =>
      I({
        x: (V.clientX / innerWidth - 0.5) * 14,
        y: (V.clientY / innerHeight - 0.5) * 10,
      });
    return (
      window.addEventListener("mousemove", Q),
      () => window.removeEventListener("mousemove", Q)
    );
  }, []),
    Pe.useEffect(
      () => (
        (document.body.style.overflow = S || m ? "hidden" : ""),
        () => (document.body.style.overflow = "")
      ),
      [S, m],
    ));
  let G = () => {
    (P(null), U(!0));
  };
  return c.jsxs("main", {
    className: "shell",
    children: [
      c.jsx(td, { open: P, contact: G }),
      c.jsxs("section", {
        className: "hero",
        children: [
          c.jsxs("div", {
            className: "copy",
            children: [
              c.jsxs("div", {
                className: "kicker",
                children: [c.jsx("i", {}), " PERSONAL DIGITAL WORKSPACE"],
              }),
              c.jsx("h1", { children: "VINAYAKA M." }),
              c.jsxs("h2", {
                children: [
                  "AI ENGINEER ",
                  c.jsx("b", { children: "+" }),
                  c.jsx("br", {}),
                  "FULL STACK DEVELOPER",
                ],
              }),
              c.jsxs("p", {
                children: [
                  "Building intelligent systems and",
                  c.jsx("br", {}),
                  " thoughtful digital experiences.",
                ],
              }),
              c.jsxs("button", {
                className: "explore",
                onClick: () => P("work"),
                children: ["EXPLORE MY WORK ", c.jsx(Gf, { size: 14 })],
              }),
            ],
          }),
          c.jsx("div", {
            className: "scene-wrap",
            style: { transform: "translate(" + R.x + "px," + R.y + "px)" },
            children: c.jsx(ed, { open: P }),
          }),
          c.jsx("div", {
            className: "mobile-books",
            children: [
              ["about", "ABOUT"],
              ["work", "WORK"],
              ["experience", "EXPERIENCE"],
            ].map(([Q, V]) =>
              c.jsxs(
                "button",
                { onClick: () => P(Q), children: [V, c.jsx(Lu, { size: 13 })] },
                Q,
              ),
            ),
          }),
        ],
      }),
      c.jsxs("button", {
        className: "corner",
        "aria-label": "Open projects",
        onClick: () => P("work"),
        children: [c.jsx("i", {}), c.jsx("i", {}), c.jsx("i", {})],
      }),
      S && c.jsx(nd, { type: S, close: () => P(null) }),
      m &&
        c.jsxs("div", {
          className: "contact",
          children: [
            c.jsxs("button", {
              className: "close",
              onClick: () => U(!1),
              children: [c.jsx(Fa, { size: 17 }), " CLOSE"],
            }),
            c.jsxs("div", {
              children: [
                c.jsx("label", { children: "OPEN A CONVERSATION" }),
                c.jsxs("h2", {
                  children: [
                    "LET’S BUILD",
                    c.jsx("br", {}),
                    "SOMETHING THOUGHTFUL.",
                  ],
                }),
                c.jsx("p", {
                  children: "For collaboration, ideas, or a simple hello.",
                }),
                c.jsxs("a", {
                  href: "mailto:hello@example.com",
                  children: ["EMAIL ME ", c.jsx(Lu, { size: 14 })],
                }),
                c.jsx("small", {
                  children: "Replace this address with your preferred contact.",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
Qf.createRoot(document.getElementById("root")).render(
  c.jsx(Uf.StrictMode, { children: c.jsx(rd, {}) }),
);
