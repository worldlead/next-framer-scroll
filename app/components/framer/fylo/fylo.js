"use client";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) {
    __defProp(target, name, { get: all[name], enumerable: true });
  }
};

// https:https://framer.com/m/FYLO-COMPOSITION-5nyv.js@DAcrimz6V4BZdK2dLvuy
import { jsx as _jsx8, jsxs as _jsxs6 } from "react/jsx-runtime";
import {
  addFonts as addFonts6,
  addPropertyControls as addPropertyControls8,
  ControlType as ControlType11,
  cx as cx6,
  getFonts as getFonts4,
  useActiveVariantCallback as useActiveVariantCallback4,
  useLocaleInfo as useLocaleInfo6,
  useVariantState as useVariantState6,
  withCSS as withCSS8,
} from "installable-framer/dist/framer";
import {
  LayoutGroup as LayoutGroup6,
  motion as motion7,
  MotionConfigContext as MotionConfigContext6,
} from "framer-motion";
import * as React8 from "react";

// https:https://framerusercontent.com/modules/Oud72c2V1Mr3Jz9fGInx/qkveW7SAAKvEXBiUiufl/C_odUWZqr.js
import { jsx as _jsx6, jsxs as _jsxs4 } from "react/jsx-runtime";
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls6,
  ControlType as ControlType9,
  cx as cx4,
  getFonts as getFonts2,
  getPropertyControls,
  RichText as RichText2,
  SVG as SVG4,
  useActiveVariantCallback as useActiveVariantCallback3,
  useLocaleInfo as useLocaleInfo4,
  useVariantState as useVariantState4,
  withCSS as withCSS6,
} from "installable-framer/dist/framer";
import {
  LayoutGroup as LayoutGroup4,
  motion as motion5,
  MotionConfigContext as MotionConfigContext4,
} from "framer-motion";
import * as React6 from "react";

// https:https://framerusercontent.com/modules/vgSbxmWWvbgW6ShllXld/9oZlwlOxsp6zJVFpVkIp/Typewriter.js
import { jsx as _jsx } from "react/jsx-runtime";
import {
  addPropertyControls,
  ControlType,
  RenderTarget,
  withCSS,
} from "installable-framer/dist/framer";

// https:https://esm.sh/stable/react@18.2.0/node/react.mjs
var react_exports = {};
__export(react_exports, {
  Children: () => xn,
  Component: () => An,
  Fragment: () => jn,
  Profiler: () => In,
  PureComponent: () => Dn,
  StrictMode: () => $n,
  Suspense: () => Fn,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Ln,
  cloneElement: () => Nn,
  createContext: () => Mn,
  createElement: () => Vn,
  createFactory: () => Un,
  createRef: () => Wn,
  default: () => pa,
  forwardRef: () => Yn,
  isValidElement: () => zn,
  lazy: () => Bn,
  memo: () => Hn,
  startTransition: () => Kn,
  unstable_act: () => qn,
  useCallback: () => Gn,
  useContext: () => Qn,
  useDebugValue: () => Jn,
  useDeferredValue: () => Xn,
  useEffect: () => Zn,
  useId: () => ea,
  useImperativeHandle: () => ra,
  useInsertionEffect: () => ta,
  useLayoutEffect: () => na,
  useMemo: () => aa,
  useReducer: () => oa,
  useRef: () => ua,
  useState: () => ia,
  useSyncExternalStore: () => sa,
  useTransition: () => ca,
  version: () => fa,
});
var cn = Object.create;
var Ie = Object.defineProperty;
var fn = Object.getOwnPropertyDescriptor;
var ln = Object.getOwnPropertyNames;
var pn = Object.getPrototypeOf;
var dn = Object.prototype.hasOwnProperty;
var De = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports);
var vn = (t, o) => {
  for (var c in o) {
    Ie(t, c, { get: o[c], enumerable: true });
  }
};
var je = (t, o, c, y) => {
  if ((o && typeof o == "object") || typeof o == "function") {
    for (let l of ln(o)) {
      !dn.call(t, l) &&
        l !== c &&
        Ie(t, l, {
          get: () => o[l],
          enumerable: !(y = fn(o, l)) || y.enumerable,
        });
    }
  }
  return t;
};
var F = (t, o, c) => (je(t, o, "default"), c && je(c, o, "default"));
var jr = (t, o, c) => (
  (c = t != null ? cn(pn(t)) : {}),
  je(
    o || !t || !t.__esModule
      ? Ie(c, "default", { value: t, enumerable: true })
      : c,
    t
  )
);
var Yr = De((p) => {
  "use strict";
  var G = Symbol.for("react.element"),
    yn = Symbol.for("react.portal"),
    hn = Symbol.for("react.fragment"),
    mn = Symbol.for("react.strict_mode"),
    _n = Symbol.for("react.profiler"),
    gn = Symbol.for("react.provider"),
    bn = Symbol.for("react.context"),
    En = Symbol.for("react.forward_ref"),
    Rn = Symbol.for("react.suspense"),
    Cn = Symbol.for("react.memo"),
    wn = Symbol.for("react.lazy"),
    Ir = Symbol.iterator;
  function Sn(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Ir && t[Ir]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Fr = {
      isMounted: function () {
        return false;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Lr = Object.assign,
    Nr = {};
  function z(t, o, c) {
    (this.props = t),
      (this.context = o),
      (this.refs = Nr),
      (this.updater = c || Fr);
  }
  z.prototype.isReactComponent = {};
  z.prototype.setState = function (t, o) {
    if (typeof t != "object" && typeof t != "function" && t != null) {
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    }
    this.updater.enqueueSetState(this, t, o, "setState");
  };
  z.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Mr() {}
  Mr.prototype = z.prototype;
  function Fe(t, o, c) {
    (this.props = t),
      (this.context = o),
      (this.refs = Nr),
      (this.updater = c || Fr);
  }
  var Le = (Fe.prototype = new Mr());
  Le.constructor = Fe;
  Lr(Le, z.prototype);
  Le.isPureReactComponent = true;
  var Dr = Array.isArray,
    Vr = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    Ur = { key: true, ref: true, __self: true, __source: true };
  function Wr(t, o, c) {
    var y,
      l = {},
      b = null,
      C = null;
    if (o != null) {
      for (y in (o.ref !== void 0 && (C = o.ref),
      o.key !== void 0 && (b = "" + o.key),
      o)) {
        Vr.call(o, y) && !Ur.hasOwnProperty(y) && (l[y] = o[y]);
      }
    }
    var g = arguments.length - 2;
    if (g === 1) {
      l.children = c;
    } else if (1 < g) {
      for (var m = Array(g), T = 0; T < g; T++) {
        m[T] = arguments[T + 2];
      }
      l.children = m;
    }
    if (t && t.defaultProps) {
      for (y in ((g = t.defaultProps), g)) {
        l[y] === void 0 && (l[y] = g[y]);
      }
    }
    return {
      $$typeof: G,
      type: t,
      key: b,
      ref: C,
      props: l,
      _owner: Ne.current,
    };
  }
  function On(t, o) {
    return {
      $$typeof: G,
      type: t.type,
      key: o,
      ref: t.ref,
      props: t.props,
      _owner: t._owner,
    };
  }
  function Me(t) {
    return typeof t == "object" && t !== null && t.$$typeof === G;
  }
  function Tn(t) {
    var o = { "=": "=0", ":": "=2" };
    return (
      "$" +
      t.replace(/[=:]/g, function (c) {
        return o[c];
      })
    );
  }
  var $r = /\/+/g;
  function $e(t, o) {
    return typeof t == "object" && t !== null && t.key != null
      ? Tn("" + t.key)
      : o.toString(36);
  }
  function fe(t, o, c, y, l) {
    var b = typeof t;
    (b === "undefined" || b === "boolean") && (t = null);
    var C = false;
    if (t === null) {
      C = true;
    } else {
      switch (b) {
        case "string":
        case "number":
          C = true;
          break;
        case "object":
          switch (t.$$typeof) {
            case G:
            case yn:
              C = true;
          }
      }
    }
    if (C) {
      return (
        (C = t),
        (l = l(C)),
        (t = y === "" ? "." + $e(C, 0) : y),
        Dr(l)
          ? ((c = ""),
            t != null && (c = t.replace($r, "$&/") + "/"),
            fe(l, o, c, "", function (T) {
              return T;
            }))
          : l != null &&
            (Me(l) &&
              (l = On(
                l,
                c +
                  (!l.key || (C && C.key === l.key)
                    ? ""
                    : ("" + l.key).replace($r, "$&/") + "/") +
                  t
              )),
            o.push(l)),
        1
      );
    }
    if (((C = 0), (y = y === "" ? "." : y + ":"), Dr(t))) {
      for (var g = 0; g < t.length; g++) {
        b = t[g];
        var m = y + $e(b, g);
        C += fe(b, o, c, m, l);
      }
    } else if (((m = Sn(t)), typeof m == "function")) {
      for (t = m.call(t), g = 0; !(b = t.next()).done; ) {
        (b = b.value), (m = y + $e(b, g++)), (C += fe(b, o, c, m, l));
      }
    } else if (b === "object") {
      throw (
        ((o = String(t)),
        Error(
          "Objects are not valid as a React child (found: " +
            (o === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : o) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return C;
  }
  function ce(t, o, c) {
    if (t == null) {
      return t;
    }
    var y = [],
      l = 0;
    return (
      fe(t, y, "", "", function (b) {
        return o.call(c, b, l++);
      }),
      y
    );
  }
  function kn(t) {
    if (t._status === -1) {
      var o = t._result;
      (o = o()),
        o.then(
          function (c) {
            (t._status === 0 || t._status === -1) &&
              ((t._status = 1), (t._result = c));
          },
          function (c) {
            (t._status === 0 || t._status === -1) &&
              ((t._status = 2), (t._result = c));
          }
        ),
        t._status === -1 && ((t._status = 0), (t._result = o));
    }
    if (t._status === 1) {
      return t._result.default;
    }
    throw t._result;
  }
  var x = { current: null },
    le = { transition: null },
    Pn = {
      ReactCurrentDispatcher: x,
      ReactCurrentBatchConfig: le,
      ReactCurrentOwner: Ne,
    };
  p.Children = {
    map: ce,
    forEach: function (t, o, c) {
      ce(
        t,
        function () {
          o.apply(this, arguments);
        },
        c
      );
    },
    count: function (t) {
      var o = 0;
      return (
        ce(t, function () {
          o++;
        }),
        o
      );
    },
    toArray: function (t) {
      return (
        ce(t, function (o) {
          return o;
        }) || []
      );
    },
    only: function (t) {
      if (!Me(t)) {
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      }
      return t;
    },
  };
  p.Component = z;
  p.Fragment = hn;
  p.Profiler = _n;
  p.PureComponent = Fe;
  p.StrictMode = mn;
  p.Suspense = Rn;
  p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pn;
  p.cloneElement = function (t, o, c) {
    if (t == null) {
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          t +
          "."
      );
    }
    var y = Lr({}, t.props),
      l = t.key,
      b = t.ref,
      C = t._owner;
    if (o != null) {
      if (
        (o.ref !== void 0 && ((b = o.ref), (C = Ne.current)),
        o.key !== void 0 && (l = "" + o.key),
        t.type && t.type.defaultProps)
      ) {
        var g = t.type.defaultProps;
      }
      for (m in o) {
        Vr.call(o, m) &&
          !Ur.hasOwnProperty(m) &&
          (y[m] = o[m] === void 0 && g !== void 0 ? g[m] : o[m]);
      }
    }
    var m = arguments.length - 2;
    if (m === 1) {
      y.children = c;
    } else if (1 < m) {
      g = Array(m);
      for (var T = 0; T < m; T++) {
        g[T] = arguments[T + 2];
      }
      y.children = g;
    }
    return { $$typeof: G, type: t.type, key: l, ref: b, props: y, _owner: C };
  };
  p.createContext = function (t) {
    return (
      (t = {
        $$typeof: bn,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (t.Provider = { $$typeof: gn, _context: t }),
      (t.Consumer = t)
    );
  };
  p.createElement = Wr;
  p.createFactory = function (t) {
    var o = Wr.bind(null, t);
    return (o.type = t), o;
  };
  p.createRef = function () {
    return { current: null };
  };
  p.forwardRef = function (t) {
    return { $$typeof: En, render: t };
  };
  p.isValidElement = Me;
  p.lazy = function (t) {
    return { $$typeof: wn, _payload: { _status: -1, _result: t }, _init: kn };
  };
  p.memo = function (t, o) {
    return { $$typeof: Cn, type: t, compare: o === void 0 ? null : o };
  };
  p.startTransition = function (t) {
    var o = le.transition;
    le.transition = {};
    try {
      t();
    } finally {
      le.transition = o;
    }
  };
  p.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  p.useCallback = function (t, o) {
    return x.current.useCallback(t, o);
  };
  p.useContext = function (t) {
    return x.current.useContext(t);
  };
  p.useDebugValue = function () {};
  p.useDeferredValue = function (t) {
    return x.current.useDeferredValue(t);
  };
  p.useEffect = function (t, o) {
    return x.current.useEffect(t, o);
  };
  p.useId = function () {
    return x.current.useId();
  };
  p.useImperativeHandle = function (t, o, c) {
    return x.current.useImperativeHandle(t, o, c);
  };
  p.useInsertionEffect = function (t, o) {
    return x.current.useInsertionEffect(t, o);
  };
  p.useLayoutEffect = function (t, o) {
    return x.current.useLayoutEffect(t, o);
  };
  p.useMemo = function (t, o) {
    return x.current.useMemo(t, o);
  };
  p.useReducer = function (t, o, c) {
    return x.current.useReducer(t, o, c);
  };
  p.useRef = function (t) {
    return x.current.useRef(t);
  };
  p.useState = function (t) {
    return x.current.useState(t);
  };
  p.useSyncExternalStore = function (t, o, c) {
    return x.current.useSyncExternalStore(t, o, c);
  };
  p.useTransition = function () {
    return x.current.useTransition();
  };
  p.version = "18.2.0";
});
var zr = De((d, pe) => {
  "use strict";
  (function () {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = "18.2.0",
      o = Symbol.for("react.element"),
      c = Symbol.for("react.portal"),
      y = Symbol.for("react.fragment"),
      l = Symbol.for("react.strict_mode"),
      b = Symbol.for("react.profiler"),
      C = Symbol.for("react.provider"),
      g = Symbol.for("react.context"),
      m = Symbol.for("react.forward_ref"),
      T = Symbol.for("react.suspense"),
      de = Symbol.for("react.suspense_list"),
      L = Symbol.for("react.memo"),
      Q = Symbol.for("react.lazy"),
      Kr = Symbol.for("react.offscreen"),
      We = Symbol.iterator,
      qr = "@@iterator";
    function Ye(e) {
      if (e === null || typeof e != "object") {
        return null;
      }
      var r = (We && e[We]) || e[qr];
      return typeof r == "function" ? r : null;
    }
    var ze = { current: null },
      N = { transition: null },
      k = {
        current: null,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
      },
      A = { current: null },
      B = {},
      J = null;
    function Be(e) {
      J = e;
    }
    (B.setExtraStackFrame = function (e) {
      J = e;
    }),
      (B.getCurrentStack = null),
      (B.getStackAddendum = function () {
        var e = "";
        J && (e += J);
        var r = B.getCurrentStack;
        return r && (e += r() || ""), e;
      });
    var Gr = false,
      Qr = false,
      Jr = false,
      Xr = false,
      Zr = false,
      M = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: N,
        ReactCurrentOwner: A,
      };
    (M.ReactDebugCurrentFrame = B), (M.ReactCurrentActQueue = k);
    function V(e) {
      {
        for (
          var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        ) {
          n[a - 1] = arguments[a];
        }
        He("warn", e, n);
      }
    }
    function h(e) {
      {
        for (
          var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        ) {
          n[a - 1] = arguments[a];
        }
        He("error", e, n);
      }
    }
    function He(e, r, n) {
      {
        var a = M.ReactDebugCurrentFrame,
          u = a.getStackAddendum();
        u !== "" && ((r += "%s"), (n = n.concat([u])));
        var s = n.map(function (i) {
          return String(i);
        });
        s.unshift("Warning: " + r),
          Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ke = {};
    function ve(e, r) {
      {
        var n = e.constructor,
          a = (n && (n.displayName || n.name)) || "ReactClass",
          u = a + "." + r;
        if (Ke[u]) {
          return;
        }
        h(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          a
        ),
          (Ke[u] = true);
      }
    }
    var qe = {
        isMounted: function (e) {
          return false;
        },
        enqueueForceUpdate: function (e, r, n) {
          ve(e, "forceUpdate");
        },
        enqueueReplaceState: function (e, r, n, a) {
          ve(e, "replaceState");
        },
        enqueueSetState: function (e, r, n, a) {
          ve(e, "setState");
        },
      },
      j = Object.assign,
      ye = {};
    Object.freeze(ye);
    function $(e, r, n) {
      (this.props = e),
        (this.context = r),
        (this.refs = ye),
        (this.updater = n || qe);
    }
    ($.prototype.isReactComponent = {}),
      ($.prototype.setState = function (e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null) {
          throw new Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        }
        this.updater.enqueueSetState(this, e, r, "setState");
      }),
      ($.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      });
    {
      var he = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
          ],
        },
        et = function (e, r) {
          Object.defineProperty($.prototype, e, {
            get: function () {
              V(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                r[0],
                r[1]
              );
            },
          });
        };
      for (var me in he) {
        he.hasOwnProperty(me) && et(me, he[me]);
      }
    }
    function Ge() {}
    Ge.prototype = $.prototype;
    function _e(e, r, n) {
      (this.props = e),
        (this.context = r),
        (this.refs = ye),
        (this.updater = n || qe);
    }
    var ge = (_e.prototype = new Ge());
    (ge.constructor = _e), j(ge, $.prototype), (ge.isPureReactComponent = true);
    function rt() {
      var e = { current: null };
      return Object.seal(e), e;
    }
    var tt = Array.isArray;
    function X(e) {
      return tt(e);
    }
    function nt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag,
          n = (r && e[Symbol.toStringTag]) || e.constructor.name || "Object";
        return n;
      }
    }
    function at2(e) {
      try {
        return Qe(e), false;
      } catch {
        return true;
      }
    }
    function Qe(e) {
      return "" + e;
    }
    function Z(e) {
      if (at2(e)) {
        return (
          h(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            nt(e)
          ),
          Qe(e)
        );
      }
    }
    function ot2(e, r, n) {
      var a = e.displayName;
      if (a) {
        return a;
      }
      var u = r.displayName || r.name || "";
      return u !== "" ? n + "(" + u + ")" : n;
    }
    function Je(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null) {
        return null;
      }
      if (
        (typeof e.tag == "number" &&
          h(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ),
        typeof e == "function")
      ) {
        return e.displayName || e.name || null;
      }
      if (typeof e == "string") {
        return e;
      }
      switch (e) {
        case y:
          return "Fragment";
        case c:
          return "Portal";
        case b:
          return "Profiler";
        case l:
          return "StrictMode";
        case T:
          return "Suspense";
        case de:
          return "SuspenseList";
      }
      if (typeof e == "object") {
        switch (e.$$typeof) {
          case g:
            var r = e;
            return Je(r) + ".Consumer";
          case C:
            var n = e;
            return Je(n._context) + ".Provider";
          case m:
            return ot2(e, e.render, "ForwardRef");
          case L:
            var a = e.displayName || null;
            return a !== null ? a : I(e.type) || "Memo";
          case Q: {
            var u = e,
              s = u._payload,
              i = u._init;
            try {
              return I(i(s));
            } catch {
              return null;
            }
          }
        }
      }
      return null;
    }
    var H = Object.prototype.hasOwnProperty,
      Xe = { key: true, ref: true, __self: true, __source: true },
      Ze,
      er,
      be;
    be = {};
    function rr(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning) {
          return false;
        }
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) {
          return false;
        }
      }
      return e.key !== void 0;
    }
    function ut(e, r) {
      var n = function () {
        Ze ||
          ((Ze = true),
          h(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
            r
          ));
      };
      (n.isReactWarning = true),
        Object.defineProperty(e, "key", { get: n, configurable: true });
    }
    function it(e, r) {
      var n = function () {
        er ||
          ((er = true),
          h(
            "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
            r
          ));
      };
      (n.isReactWarning = true),
        Object.defineProperty(e, "ref", { get: n, configurable: true });
    }
    function st2(e) {
      if (
        typeof e.ref == "string" &&
        A.current &&
        e.__self &&
        A.current.stateNode !== e.__self
      ) {
        var r = I(A.current.type);
        be[r] ||
          (h(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            r,
            e.ref
          ),
          (be[r] = true));
      }
    }
    var Ee = function (e, r, n, a, u, s, i) {
      var f = { $$typeof: o, type: e, key: r, ref: n, props: i, _owner: s };
      return (
        (f._store = {}),
        Object.defineProperty(f._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false,
        }),
        Object.defineProperty(f, "_self", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: a,
        }),
        Object.defineProperty(f, "_source", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: u,
        }),
        Object.freeze && (Object.freeze(f.props), Object.freeze(f)),
        f
      );
    };
    function ct(e, r, n) {
      var a,
        u = {},
        s = null,
        i = null,
        f = null,
        v = null;
      if (r != null) {
        rr(r) && ((i = r.ref), st2(r)),
          tr(r) && (Z(r.key), (s = "" + r.key)),
          (f = r.__self === void 0 ? null : r.__self),
          (v = r.__source === void 0 ? null : r.__source);
        for (a in r) {
          H.call(r, a) && !Xe.hasOwnProperty(a) && (u[a] = r[a]);
        }
      }
      var _ = arguments.length - 2;
      if (_ === 1) {
        u.children = n;
      } else if (_ > 1) {
        for (var E = Array(_), R = 0; R < _; R++) {
          E[R] = arguments[R + 2];
        }
        Object.freeze && Object.freeze(E), (u.children = E);
      }
      if (e && e.defaultProps) {
        var w = e.defaultProps;
        for (a in w) {
          u[a] === void 0 && (u[a] = w[a]);
        }
      }
      if (s || i) {
        var S =
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
        s && ut(u, S), i && it(u, S);
      }
      return Ee(e, s, i, f, v, A.current, u);
    }
    function ft(e, r) {
      var n = Ee(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
      return n;
    }
    function lt(e, r, n) {
      if (e == null) {
        throw new Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      }
      var a,
        u = j({}, e.props),
        s = e.key,
        i = e.ref,
        f = e._self,
        v = e._source,
        _ = e._owner;
      if (r != null) {
        rr(r) && ((i = r.ref), (_ = A.current)),
          tr(r) && (Z(r.key), (s = "" + r.key));
        var E;
        e.type && e.type.defaultProps && (E = e.type.defaultProps);
        for (a in r) {
          H.call(r, a) &&
            !Xe.hasOwnProperty(a) &&
            (r[a] === void 0 && E !== void 0 ? (u[a] = E[a]) : (u[a] = r[a]));
        }
      }
      var R = arguments.length - 2;
      if (R === 1) {
        u.children = n;
      } else if (R > 1) {
        for (var w = Array(R), S = 0; S < R; S++) {
          w[S] = arguments[S + 2];
        }
        u.children = w;
      }
      return Ee(e.type, s, i, f, v, _, u);
    }
    function U(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    var nr = ".",
      pt = ":";
    function dt2(e) {
      var r = /[=:]/g,
        n = { "=": "=0", ":": "=2" },
        a = e.replace(r, function (u) {
          return n[u];
        });
      return "$" + a;
    }
    var ar = false,
      vt2 = /\/+/g;
    function or(e) {
      return e.replace(vt2, "$&/");
    }
    function Re(e, r) {
      return typeof e == "object" && e !== null && e.key != null
        ? (Z(e.key), dt2("" + e.key))
        : r.toString(36);
    }
    function ee(e, r, n, a, u) {
      var s = typeof e;
      (s === "undefined" || s === "boolean") && (e = null);
      var i = false;
      if (e === null) {
        i = true;
      } else {
        switch (s) {
          case "string":
          case "number":
            i = true;
            break;
          case "object":
            switch (e.$$typeof) {
              case o:
              case c:
                i = true;
            }
        }
      }
      if (i) {
        var f = e,
          v = u(f),
          _ = a === "" ? nr + Re(f, 0) : a;
        if (X(v)) {
          var E = "";
          _ != null && (E = or(_) + "/"),
            ee(v, r, E, "", function (sn) {
              return sn;
            });
        } else {
          v != null &&
            (U(v) &&
              (v.key && (!f || f.key !== v.key) && Z(v.key),
              (v = ft(
                v,
                n +
                  (v.key && (!f || f.key !== v.key)
                    ? or("" + v.key) + "/"
                    : "") +
                  _
              ))),
            r.push(v));
        }
        return 1;
      }
      var R,
        w,
        S = 0,
        O = a === "" ? nr : a + pt;
      if (X(e)) {
        for (var se = 0; se < e.length; se++) {
          (R = e[se]), (w = O + Re(R, se)), (S += ee(R, r, n, w, u));
        }
      } else {
        var Ae = Ye(e);
        if (typeof Ae == "function") {
          var Pr = e;
          Ae === Pr.entries &&
            (ar ||
              V(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (ar = true));
          for (var on = Ae.call(Pr), xr, un = 0; !(xr = on.next()).done; ) {
            (R = xr.value), (w = O + Re(R, un++)), (S += ee(R, r, n, w, u));
          }
        } else if (s === "object") {
          var Ar = String(e);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (Ar === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : Ar) +
              "). If you meant to render a collection of children, use an array instead."
          );
        }
      }
      return S;
    }
    function re(e, r, n) {
      if (e == null) {
        return e;
      }
      var a = [],
        u = 0;
      return (
        ee(e, a, "", "", function (s) {
          return r.call(n, s, u++);
        }),
        a
      );
    }
    function yt(e) {
      var r = 0;
      return (
        re(e, function () {
          r++;
        }),
        r
      );
    }
    function ht2(e, r, n) {
      re(
        e,
        function () {
          r.apply(this, arguments);
        },
        n
      );
    }
    function mt(e) {
      return (
        re(e, function (r) {
          return r;
        }) || []
      );
    }
    function _t(e) {
      if (!U(e)) {
        throw new Error(
          "React.Children.only expected to receive a single React element child."
        );
      }
      return e;
    }
    function gt(e) {
      var r = {
        $$typeof: g,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      r.Provider = { $$typeof: C, _context: r };
      var n = false,
        a = false,
        u = false;
      {
        var s = { $$typeof: g, _context: r };
        Object.defineProperties(s, {
          Provider: {
            get: function () {
              return (
                a ||
                  ((a = true),
                  h(
                    "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                  )),
                r.Provider
              );
            },
            set: function (i) {
              r.Provider = i;
            },
          },
          _currentValue: {
            get: function () {
              return r._currentValue;
            },
            set: function (i) {
              r._currentValue = i;
            },
          },
          _currentValue2: {
            get: function () {
              return r._currentValue2;
            },
            set: function (i) {
              r._currentValue2 = i;
            },
          },
          _threadCount: {
            get: function () {
              return r._threadCount;
            },
            set: function (i) {
              r._threadCount = i;
            },
          },
          Consumer: {
            get: function () {
              return (
                n ||
                  ((n = true),
                  h(
                    "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                  )),
                r.Consumer
              );
            },
          },
          displayName: {
            get: function () {
              return r.displayName;
            },
            set: function (i) {
              u ||
                (V(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  i
                ),
                (u = true));
            },
          },
        }),
          (r.Consumer = s);
      }
      return (r._currentRenderer = null), (r._currentRenderer2 = null), r;
    }
    var K = -1,
      Ce = 0,
      ur = 1,
      bt = 2;
    function Et2(e) {
      if (e._status === K) {
        var r = e._result,
          n = r();
        if (
          (n.then(
            function (s) {
              if (e._status === Ce || e._status === K) {
                var i = e;
                (i._status = ur), (i._result = s);
              }
            },
            function (s) {
              if (e._status === Ce || e._status === K) {
                var i = e;
                (i._status = bt), (i._result = s);
              }
            }
          ),
          e._status === K)
        ) {
          var a = e;
          (a._status = Ce), (a._result = n);
        }
      }
      if (e._status === ur) {
        var u = e._result;
        return (
          u === void 0 &&
            h(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
              u
            ),
          "default" in u ||
            h(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
              u
            ),
          u.default
        );
      } else {
        throw e._result;
      }
    }
    function Rt(e) {
      var r = { _status: K, _result: e },
        n = { $$typeof: Q, _payload: r, _init: Et2 };
      {
        var a, u;
        Object.defineProperties(n, {
          defaultProps: {
            configurable: true,
            get: function () {
              return a;
            },
            set: function (s) {
              h(
                "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
              ),
                (a = s),
                Object.defineProperty(n, "defaultProps", { enumerable: true });
            },
          },
          propTypes: {
            configurable: true,
            get: function () {
              return u;
            },
            set: function (s) {
              h(
                "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
              ),
                (u = s),
                Object.defineProperty(n, "propTypes", { enumerable: true });
            },
          },
        });
      }
      return n;
    }
    function Ct2(e) {
      e != null && e.$$typeof === L
        ? h(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          )
        : typeof e != "function"
        ? h(
            "forwardRef requires a render function but was given %s.",
            e === null ? "null" : typeof e
          )
        : e.length !== 0 &&
          e.length !== 2 &&
          h(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            e.length === 1
              ? "Did you forget to use the ref parameter?"
              : "Any additional parameter will be undefined."
          ),
        e != null &&
          (e.defaultProps != null || e.propTypes != null) &&
          h(
            "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
          );
      var r = { $$typeof: m, render: e };
      {
        var n;
        Object.defineProperty(r, "displayName", {
          enumerable: false,
          configurable: true,
          get: function () {
            return n;
          },
          set: function (a) {
            (n = a), !e.name && !e.displayName && (e.displayName = a);
          },
        });
      }
      return r;
    }
    var ir;
    ir = Symbol.for("react.module.reference");
    function sr(e) {
      return !!(
        typeof e == "string" ||
        typeof e == "function" ||
        e === y ||
        e === b ||
        Zr ||
        e === l ||
        e === T ||
        e === de ||
        Xr ||
        e === Kr ||
        Gr ||
        Qr ||
        Jr ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === Q ||
            e.$$typeof === L ||
            e.$$typeof === C ||
            e.$$typeof === g ||
            e.$$typeof === m ||
            e.$$typeof === ir ||
            e.getModuleId !== void 0))
      );
    }
    function wt(e, r) {
      sr(e) ||
        h(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        );
      var n = { $$typeof: L, type: e, compare: r === void 0 ? null : r };
      {
        var a;
        Object.defineProperty(n, "displayName", {
          enumerable: false,
          configurable: true,
          get: function () {
            return a;
          },
          set: function (u) {
            (a = u), !e.name && !e.displayName && (e.displayName = u);
          },
        });
      }
      return n;
    }
    function P() {
      var e = ze.current;
      return (
        e === null &&
          h(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
        e
      );
    }
    function St2(e) {
      var r = P();
      if (e._context !== void 0) {
        var n = e._context;
        n.Consumer === e
          ? h(
              "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
            )
          : n.Provider === e &&
            h(
              "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
            );
      }
      return r.useContext(e);
    }
    function Ot2(e) {
      var r = P();
      return r.useState(e);
    }
    function Tt2(e, r, n) {
      var a = P();
      return a.useReducer(e, r, n);
    }
    function kt(e) {
      var r = P();
      return r.useRef(e);
    }
    function Pt2(e, r) {
      var n = P();
      return n.useEffect(e, r);
    }
    function xt(e, r) {
      var n = P();
      return n.useInsertionEffect(e, r);
    }
    function At2(e, r) {
      var n = P();
      return n.useLayoutEffect(e, r);
    }
    function jt(e, r) {
      var n = P();
      return n.useCallback(e, r);
    }
    function It(e, r) {
      var n = P();
      return n.useMemo(e, r);
    }
    function Dt(e, r, n) {
      var a = P();
      return a.useImperativeHandle(e, r, n);
    }
    function $t(e, r) {
      {
        var n = P();
        return n.useDebugValue(e, r);
      }
    }
    function Ft() {
      var e = P();
      return e.useTransition();
    }
    function Lt2(e) {
      var r = P();
      return r.useDeferredValue(e);
    }
    function Nt2() {
      var e = P();
      return e.useId();
    }
    function Mt2(e, r, n) {
      var a = P();
      return a.useSyncExternalStore(e, r, n);
    }
    var q2 = 0,
      cr,
      fr,
      lr,
      pr,
      dr,
      vr,
      yr;
    function hr() {}
    hr.__reactDisabledLog = true;
    function Vt() {
      {
        if (q2 === 0) {
          (cr = console.log),
            (fr = console.info),
            (lr = console.warn),
            (pr = console.error),
            (dr = console.group),
            (vr = console.groupCollapsed),
            (yr = console.groupEnd);
          var e = {
            configurable: true,
            enumerable: true,
            value: hr,
            writable: true,
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e,
          });
        }
        q2++;
      }
    }
    function Ut() {
      {
        if ((q2--, q2 === 0)) {
          var e = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, {
            log: j({}, e, { value: cr }),
            info: j({}, e, { value: fr }),
            warn: j({}, e, { value: lr }),
            error: j({}, e, { value: pr }),
            group: j({}, e, { value: dr }),
            groupCollapsed: j({}, e, { value: vr }),
            groupEnd: j({}, e, { value: yr }),
          });
        }
        q2 < 0 &&
          h(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          );
      }
    }
    var we = M.ReactCurrentDispatcher,
      Se;
    function te(e, r, n) {
      {
        if (Se === void 0) {
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            Se = (a && a[1]) || "";
          }
        }
        return (
          `
` +
          Se +
          e
        );
      }
    }
    var Oe = false,
      ne;
    {
      var Wt = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Wt();
    }
    function mr(e, r) {
      if (!e || Oe) {
        return "";
      }
      {
        var n = ne.get(e);
        if (n !== void 0) {
          return n;
        }
      }
      var a;
      Oe = true;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      (s = we.current), (we.current = null), Vt();
      try {
        if (r) {
          var i = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(i.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(i, []);
            } catch (O) {
              a = O;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (O) {
              a = O;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            a = O;
          }
          e();
        }
      } catch (O) {
        if (O && a && typeof O.stack == "string") {
          for (
            var f = O.stack.split(`
`),
              v = a.stack.split(`
`),
              _ = f.length - 1,
              E = v.length - 1;
            _ >= 1 && E >= 0 && f[_] !== v[E];

          ) {
            E--;
          }
          for (; _ >= 1 && E >= 0; _--, E--) {
            if (f[_] !== v[E]) {
              if (_ !== 1 || E !== 1) {
                do
                  if ((_--, E--, E < 0 || f[_] !== v[E])) {
                    var R =
                      `
` + f[_].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        R.includes("<anonymous>") &&
                        (R = R.replace("<anonymous>", e.displayName)),
                      typeof e == "function" && ne.set(e, R),
                      R
                    );
                  }
                while (_ >= 1 && E >= 0);
              }
              break;
            }
          }
        }
      } finally {
        (Oe = false), (we.current = s), Ut(), (Error.prepareStackTrace = u);
      }
      var w = e ? e.displayName || e.name : "",
        S = w ? te(w) : "";
      return typeof e == "function" && ne.set(e, S), S;
    }
    function Yt(e, r, n) {
      return mr(e, false);
    }
    function zt(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, n) {
      if (e == null) {
        return "";
      }
      if (typeof e == "function") {
        return mr(e, zt(e));
      }
      if (typeof e == "string") {
        return te(e);
      }
      switch (e) {
        case T:
          return te("Suspense");
        case de:
          return te("SuspenseList");
      }
      if (typeof e == "object") {
        switch (e.$$typeof) {
          case m:
            return Yt(e.render);
          case L:
            return ae(e.type, r, n);
          case Q: {
            var a = e,
              u = a._payload,
              s = a._init;
            try {
              return ae(s(u), r, n);
            } catch {}
          }
        }
      }
      return "";
    }
    var _r = {},
      gr = M.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner,
          n = ae(e.type, e._source, r ? r.type : null);
        gr.setExtraStackFrame(n);
      } else {
        gr.setExtraStackFrame(null);
      }
    }
    function Bt(e, r, n, a, u) {
      {
        var s = Function.call.bind(H);
        for (var i in e) {
          if (s(e, i)) {
            var f = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error(
                  (a || "React class") +
                    ": " +
                    n +
                    " type `" +
                    i +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof e[i] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                throw ((v.name = "Invariant Violation"), v);
              }
              f = e[i](
                r,
                i,
                a,
                n,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
              );
            } catch (_) {
              f = _;
            }
            f &&
              !(f instanceof Error) &&
              (oe(u),
              h(
                "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                a || "React class",
                n,
                i,
                typeof f
              ),
              oe(null)),
              f instanceof Error &&
                !(f.message in _r) &&
                ((_r[f.message] = true),
                oe(u),
                h("Failed %s type: %s", n, f.message),
                oe(null));
          }
        }
      }
    }
    function W2(e) {
      if (e) {
        var r = e._owner,
          n = ae(e.type, e._source, r ? r.type : null);
        Be(n);
      } else {
        Be(null);
      }
    }
    var Te;
    Te = false;
    function br() {
      if (A.current) {
        var e = I(A.current.type);
        if (e) {
          return (
            `

Check the render method of \`` +
            e +
            "`."
          );
        }
      }
      return "";
    }
    function Ht(e) {
      if (e !== void 0) {
        var r = e.fileName.replace(/^.*[\\\/]/, ""),
          n = e.lineNumber;
        return (
          `

Check your code at ` +
          r +
          ":" +
          n +
          "."
        );
      }
      return "";
    }
    function Kt(e) {
      return e != null ? Ht(e.__source) : "";
    }
    var Er = {};
    function qt(e) {
      var r = br();
      if (!r) {
        var n = typeof e == "string" ? e : e.displayName || e.name;
        n &&
          (r =
            `

Check the top-level render call using <` +
            n +
            ">.");
      }
      return r;
    }
    function Rr(e, r) {
      if (!(!e._store || e._store.validated || e.key != null)) {
        e._store.validated = true;
        var n = qt(r);
        if (!Er[n]) {
          Er[n] = true;
          var a = "";
          e &&
            e._owner &&
            e._owner !== A.current &&
            (a = " It was passed a child from " + I(e._owner.type) + "."),
            W2(e),
            h(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              n,
              a
            ),
            W2(null);
        }
      }
    }
    function Cr(e, r) {
      if (typeof e == "object") {
        if (X(e)) {
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            U(a) && Rr(a, r);
          }
        } else if (U(e)) {
          e._store && (e._store.validated = true);
        } else if (e) {
          var u = Ye(e);
          if (typeof u == "function" && u !== e.entries) {
            for (var s = u.call(e), i; !(i = s.next()).done; ) {
              U(i.value) && Rr(i.value, r);
            }
          }
        }
      }
    }
    function wr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string") {
          return;
        }
        var n;
        if (typeof r == "function") {
          n = r.propTypes;
        } else if (
          typeof r == "object" &&
          (r.$$typeof === m || r.$$typeof === L)
        ) {
          n = r.propTypes;
        } else {
          return;
        }
        if (n) {
          var a = I(r);
          Bt(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Te) {
          Te = true;
          var u = I(r);
          h(
            "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
            u || "Unknown"
          );
        }
        typeof r.getDefaultProps == "function" &&
          !r.getDefaultProps.isReactClassApproved &&
          h(
            "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
          );
      }
    }
    function Gt(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            W2(e),
              h(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                a
              ),
              W2(null);
            break;
          }
        }
        e.ref !== null &&
          (W2(e),
          h("Invalid attribute `ref` supplied to `React.Fragment`."),
          W2(null));
      }
    }
    function Sr(e, r, n) {
      var a = sr(e);
      if (!a) {
        var u = "";
        (e === void 0 ||
          (typeof e == "object" &&
            e !== null &&
            Object.keys(e).length === 0)) &&
          (u +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var s = Kt(r);
        s ? (u += s) : (u += br());
        var i;
        e === null
          ? (i = "null")
          : X(e)
          ? (i = "array")
          : e !== void 0 && e.$$typeof === o
          ? ((i = "<" + (I(e.type) || "Unknown") + " />"),
            (u =
              " Did you accidentally export a JSX literal instead of a component?"))
          : (i = typeof e),
          h(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            i,
            u
          );
      }
      var f = ct.apply(this, arguments);
      if (f == null) {
        return f;
      }
      if (a) {
        for (var v = 2; v < arguments.length; v++) {
          Cr(arguments[v], e);
        }
      }
      return e === y ? Gt(f) : wr(f), f;
    }
    var Or = false;
    function Qt(e) {
      var r = Sr.bind(null, e);
      return (
        (r.type = e),
        Or ||
          ((Or = true),
          V(
            "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
          )),
        Object.defineProperty(r, "type", {
          enumerable: false,
          get: function () {
            return (
              V(
                "Factory.type is deprecated. Access the class directly before passing it to createFactory."
              ),
              Object.defineProperty(this, "type", { value: e }),
              e
            );
          },
        }),
        r
      );
    }
    function Jt(e, r, n) {
      for (
        var a = lt.apply(this, arguments), u = 2;
        u < arguments.length;
        u++
      ) {
        Cr(arguments[u], a.type);
      }
      return wr(a), a;
    }
    function Xt(e, r) {
      var n = N.transition;
      N.transition = {};
      var a = N.transition;
      N.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e();
      } finally {
        if (((N.transition = n), n === null && a._updatedFibers)) {
          var u = a._updatedFibers.size;
          u > 10 &&
            V(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            ),
            a._updatedFibers.clear();
        }
      }
    }
    var Tr = false,
      ue = null;
    function Zt(e) {
      if (ue === null) {
        try {
          var r = ("require" + Math.random()).slice(0, 7),
            n = pe && pe[r];
          ue = n.call(pe, "timers").setImmediate;
        } catch {
          ue = function (u) {
            Tr === false &&
              ((Tr = true),
              typeof MessageChannel > "u" &&
                h(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
            var s = new MessageChannel();
            (s.port1.onmessage = u), s.port2.postMessage(void 0);
          };
        }
      }
      return ue(e);
    }
    var Y = 0,
      kr = false;
    function en(e) {
      {
        var r = Y;
        Y++, k.current === null && (k.current = []);
        var n = k.isBatchingLegacy,
          a;
        try {
          if (
            ((k.isBatchingLegacy = true),
            (a = e()),
            !n && k.didScheduleLegacyUpdate)
          ) {
            var u = k.current;
            u !== null && ((k.didScheduleLegacyUpdate = false), xe(u));
          }
        } catch (w) {
          throw (ie(r), w);
        } finally {
          k.isBatchingLegacy = n;
        }
        if (a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a,
            i = false,
            f = {
              then: function (w, S) {
                (i = true),
                  s.then(
                    function (O) {
                      ie(r), Y === 0 ? ke(O, w, S) : w(O);
                    },
                    function (O) {
                      ie(r), S(O);
                    }
                  );
              },
            };
          return (
            !kr &&
              typeof Promise < "u" &&
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  i ||
                    ((kr = true),
                    h(
                      "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                    ));
                }),
            f
          );
        } else {
          var v = a;
          if ((ie(r), Y === 0)) {
            var _ = k.current;
            _ !== null && (xe(_), (k.current = null));
            var E = {
              then: function (w, S) {
                k.current === null ? ((k.current = []), ke(v, w, S)) : w(v);
              },
            };
            return E;
          } else {
            var R = {
              then: function (w, S) {
                w(v);
              },
            };
            return R;
          }
        }
      }
    }
    function ie(e) {
      e !== Y - 1 &&
        h(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ),
        (Y = e);
    }
    function ke(e, r, n) {
      {
        var a = k.current;
        if (a !== null) {
          try {
            xe(a),
              Zt(function () {
                a.length === 0 ? ((k.current = null), r(e)) : ke(e, r, n);
              });
          } catch (u) {
            n(u);
          }
        } else {
          r(e);
        }
      }
    }
    var Pe = false;
    function xe(e) {
      if (!Pe) {
        Pe = true;
        var r = 0;
        try {
          for (; r < e.length; r++) {
            var n = e[r];
            do n = n(true);
            while (n !== null);
          }
          e.length = 0;
        } catch (a) {
          throw ((e = e.slice(r + 1)), a);
        } finally {
          Pe = false;
        }
      }
    }
    var rn = Sr,
      tn = Jt,
      nn = Qt,
      an = { map: re, forEach: ht2, count: yt, toArray: mt, only: _t };
    (d.Children = an),
      (d.Component = $),
      (d.Fragment = y),
      (d.Profiler = b),
      (d.PureComponent = _e),
      (d.StrictMode = l),
      (d.Suspense = T),
      (d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
      (d.cloneElement = tn),
      (d.createContext = gt),
      (d.createElement = rn),
      (d.createFactory = nn),
      (d.createRef = rt),
      (d.forwardRef = Ct2),
      (d.isValidElement = U),
      (d.lazy = Rt),
      (d.memo = wt),
      (d.startTransition = Xt),
      (d.unstable_act = en),
      (d.useCallback = jt),
      (d.useContext = St2),
      (d.useDebugValue = $t),
      (d.useDeferredValue = Lt2),
      (d.useEffect = Pt2),
      (d.useId = Nt2),
      (d.useImperativeHandle = Dt),
      (d.useInsertionEffect = xt),
      (d.useLayoutEffect = At2),
      (d.useMemo = It),
      (d.useReducer = Tt2),
      (d.useRef = kt),
      (d.useState = Ot2),
      (d.useSyncExternalStore = Mt2),
      (d.useTransition = Ft),
      (d.version = t),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var Ue = De((ya, Ve) => {
  "use strict";
  false ? (Ve.exports = Yr()) : (Ve.exports = zr());
});
var D = {};
vn(D, {
  Children: () => xn,
  Component: () => An,
  Fragment: () => jn,
  Profiler: () => In,
  PureComponent: () => Dn,
  StrictMode: () => $n,
  Suspense: () => Fn,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Ln,
  cloneElement: () => Nn,
  createContext: () => Mn,
  createElement: () => Vn,
  createFactory: () => Un,
  createRef: () => Wn,
  default: () => pa,
  forwardRef: () => Yn,
  isValidElement: () => zn,
  lazy: () => Bn,
  memo: () => Hn,
  startTransition: () => Kn,
  unstable_act: () => qn,
  useCallback: () => Gn,
  useContext: () => Qn,
  useDebugValue: () => Jn,
  useDeferredValue: () => Xn,
  useEffect: () => Zn,
  useId: () => ea,
  useImperativeHandle: () => ra,
  useInsertionEffect: () => ta,
  useLayoutEffect: () => na,
  useMemo: () => aa,
  useReducer: () => oa,
  useRef: () => ua,
  useState: () => ia,
  useSyncExternalStore: () => sa,
  useTransition: () => ca,
  version: () => fa,
});
var Hr = jr(Ue());
F(D, jr(Ue()));
var {
  Children: xn,
  Component: An,
  Fragment: jn,
  Profiler: In,
  PureComponent: Dn,
  StrictMode: $n,
  Suspense: Fn,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ln,
  cloneElement: Nn,
  createContext: Mn,
  createElement: Vn,
  createFactory: Un,
  createRef: Wn,
  forwardRef: Yn,
  isValidElement: zn,
  lazy: Bn,
  memo: Hn,
  startTransition: Kn,
  unstable_act: qn,
  useCallback: Gn,
  useContext: Qn,
  useDebugValue: Jn,
  useDeferredValue: Xn,
  useEffect: Zn,
  useId: ea,
  useImperativeHandle: ra,
  useInsertionEffect: ta,
  useLayoutEffect: na,
  useMemo: aa,
  useReducer: oa,
  useRef: ua,
  useState: ia,
  useSyncExternalStore: sa,
  useTransition: ca,
  version: fa,
} = Hr;
var { default: Br, ...la } = Hr;
var pa = Br !== void 0 ? Br : la;

// https:https://esm.sh/v133/typewriter-effect@2.21.0/node/typewriter-effect.mjs
var require2 = (n) => {
  const e = (m) => (typeof m.default < "u" ? m.default : m),
    c = (m) => Object.assign({}, m);
  switch (n) {
    case "react":
      return e(react_exports);
    default:
      throw new Error('module "' + n + '" not found');
  }
};
var Et = Object.create;
var at = Object.defineProperty;
var Ot = Object.getOwnPropertyDescriptor;
var Tt = Object.getOwnPropertyNames;
var At = Object.getPrototypeOf;
var St = Object.prototype.hasOwnProperty;
var vt = ((C) =>
  typeof require2 < "u"
    ? require2
    : typeof Proxy < "u"
    ? new Proxy(C, { get: (P, z) => (typeof require2 < "u" ? require2 : P)[z] })
    : C)(function (C) {
  if (typeof require2 < "u") {
    return require2.apply(this, arguments);
  }
  throw Error('Dynamic require of "' + C + '" is not supported');
});
var Nt = (C, P) => () => (P || C((P = { exports: {} }).exports, P), P.exports);
var Pt = (C, P) => {
  for (var z in P) {
    at(C, z, { get: P[z], enumerable: true });
  }
};
var ot = (C, P, z, R) => {
  if ((P && typeof P == "object") || typeof P == "function") {
    for (let B of Tt(P)) {
      !St.call(C, B) &&
        B !== z &&
        at(C, B, {
          get: () => P[B],
          enumerable: !(R = Ot(P, B)) || R.enumerable,
        });
    }
  }
  return C;
};
var q = (C, P, z) => (ot(C, P, "default"), z && ot(z, P, "default"));
var dt = (C, P, z) => (
  (z = C != null ? Et(At(C)) : {}),
  ot(
    P || !C || !C.__esModule
      ? at(z, "default", { value: C, enumerable: true })
      : z,
    C
  )
);
var st = Nt((X, it) => {
  (function (C, P) {
    typeof X == "object" && typeof it == "object"
      ? (it.exports = P(vt("react")))
      : typeof define == "function" && define.amd
      ? define("Typewriter", ["react"], P)
      : typeof X == "object"
      ? (X.Typewriter = P(vt("react")))
      : (C.Typewriter = P(C.react));
  })(typeof self < "u" ? self : X, (C) =>
    (() => {
      var P = {
          7403: (e, o, t) => {
            "use strict";
            t.d(o, { default: () => V });
            var r = t(4087),
              i = t.n(r);
            let a = function (x) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(x);
              },
              n = function (x, h) {
                return Math.floor(Math.random() * (h - x + 1)) + x;
              };
            var u = "TYPE_CHARACTER",
              c = "REMOVE_CHARACTER",
              p = "REMOVE_ALL",
              f = "REMOVE_LAST_VISIBLE_NODE",
              l = "PAUSE_FOR",
              v = "CALL_FUNCTION",
              y = "ADD_HTML_TAG_ELEMENT",
              d = "CHANGE_DELETE_SPEED",
              g = "CHANGE_DELAY",
              _ = "CHANGE_CURSOR",
              E = "PASTE_STRING",
              A = "HTML_TAG";
            function O(x) {
              return (
                (O =
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? function (h) {
                        return typeof h;
                      }
                    : function (h) {
                        return h &&
                          typeof Symbol == "function" &&
                          h.constructor === Symbol &&
                          h !== Symbol.prototype
                          ? "symbol"
                          : typeof h;
                      }),
                O(x)
              );
            }
            function m(x, h) {
              var T = Object.keys(x);
              if (Object.getOwnPropertySymbols) {
                var j = Object.getOwnPropertySymbols(x);
                h &&
                  (j = j.filter(function (H) {
                    return Object.getOwnPropertyDescriptor(x, H).enumerable;
                  })),
                  T.push.apply(T, j);
              }
              return T;
            }
            function w(x) {
              for (var h = 1; h < arguments.length; h++) {
                var T = arguments[h] != null ? arguments[h] : {};
                h % 2
                  ? m(Object(T), true).forEach(function (j) {
                      S(x, j, T[j]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      x,
                      Object.getOwnPropertyDescriptors(T)
                    )
                  : m(Object(T)).forEach(function (j) {
                      Object.defineProperty(
                        x,
                        j,
                        Object.getOwnPropertyDescriptor(T, j)
                      );
                    });
              }
              return x;
            }
            function N(x) {
              return (
                (function (h) {
                  if (Array.isArray(h)) {
                    return L(h);
                  }
                })(x) ||
                (function (h) {
                  if (
                    (typeof Symbol < "u" && h[Symbol.iterator] != null) ||
                    h["@@iterator"] != null
                  ) {
                    return Array.from(h);
                  }
                })(x) ||
                (function (h, T) {
                  if (h) {
                    if (typeof h == "string") {
                      return L(h, T);
                    }
                    var j = Object.prototype.toString.call(h).slice(8, -1);
                    return (
                      j === "Object" &&
                        h.constructor &&
                        (j = h.constructor.name),
                      j === "Map" || j === "Set"
                        ? Array.from(h)
                        : j === "Arguments" ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)
                        ? L(h, T)
                        : void 0
                    );
                  }
                })(x) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function L(x, h) {
              (h == null || h > x.length) && (h = x.length);
              for (var T = 0, j = new Array(h); T < h; T++) {
                j[T] = x[T];
              }
              return j;
            }
            function M(x, h) {
              for (var T = 0; T < h.length; T++) {
                var j = h[T];
                (j.enumerable = j.enumerable || false),
                  (j.configurable = true),
                  "value" in j && (j.writable = true),
                  Object.defineProperty(x, U(j.key), j);
              }
            }
            function S(x, h, T) {
              return (
                (h = U(h)) in x
                  ? Object.defineProperty(x, h, {
                      value: T,
                      enumerable: true,
                      configurable: true,
                      writable: true,
                    })
                  : (x[h] = T),
                x
              );
            }
            function U(x) {
              var h = (function (T, j) {
                if (O(T) !== "object" || T === null) {
                  return T;
                }
                var H = T[Symbol.toPrimitive];
                if (H !== void 0) {
                  var s = H.call(T, "string");
                  if (O(s) !== "object") {
                    return s;
                  }
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(T);
              })(x);
              return O(h) === "symbol" ? h : String(h);
            }
            let V = (function () {
              function x(j, H) {
                var s = this;
                if (
                  ((function (b, k) {
                    if (!(b instanceof k)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  })(this, x),
                  S(this, "state", {
                    cursorAnimation: null,
                    lastFrameTime: null,
                    pauseUntil: null,
                    eventQueue: [],
                    eventLoop: null,
                    eventLoopPaused: false,
                    reverseCalledEvents: [],
                    calledEvents: [],
                    visibleNodes: [],
                    initialOptions: null,
                    elements: {
                      container: null,
                      wrapper: document.createElement("span"),
                      cursor: document.createElement("span"),
                    },
                  }),
                  S(this, "options", {
                    strings: null,
                    cursor: "|",
                    delay: "natural",
                    pauseFor: 1500,
                    deleteSpeed: "natural",
                    loop: false,
                    autoStart: false,
                    devMode: false,
                    skipAddStyles: false,
                    wrapperClassName: "Typewriter__wrapper",
                    cursorClassName: "Typewriter__cursor",
                    stringSplitter: null,
                    onCreateTextNode: null,
                    onRemoveNode: null,
                  }),
                  S(this, "setupWrapperElement", function () {
                    s.state.elements.container &&
                      ((s.state.elements.wrapper.className =
                        s.options.wrapperClassName),
                      (s.state.elements.cursor.className =
                        s.options.cursorClassName),
                      (s.state.elements.cursor.innerHTML = s.options.cursor),
                      (s.state.elements.container.innerHTML = ""),
                      s.state.elements.container.appendChild(
                        s.state.elements.wrapper
                      ),
                      s.state.elements.container.appendChild(
                        s.state.elements.cursor
                      ));
                  }),
                  S(this, "start", function () {
                    return (
                      (s.state.eventLoopPaused = false), s.runEventLoop(), s
                    );
                  }),
                  S(this, "pause", function () {
                    return (s.state.eventLoopPaused = true), s;
                  }),
                  S(this, "stop", function () {
                    return (
                      s.state.eventLoop &&
                        ((0, r.cancel)(s.state.eventLoop),
                        (s.state.eventLoop = null)),
                      s
                    );
                  }),
                  S(this, "pauseFor", function (b) {
                    return s.addEventToQueue(l, { ms: b }), s;
                  }),
                  S(this, "typeOutAllStrings", function () {
                    return typeof s.options.strings == "string"
                      ? (s
                          .typeString(s.options.strings)
                          .pauseFor(s.options.pauseFor),
                        s)
                      : (s.options.strings.forEach(function (b) {
                          s.typeString(b)
                            .pauseFor(s.options.pauseFor)
                            .deleteAll(s.options.deleteSpeed);
                        }),
                        s);
                  }),
                  S(this, "typeString", function (b) {
                    var k =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (a(b)) {
                      return s.typeOutHTMLString(b, k);
                    }
                    if (b) {
                      var F2 = (s.options || {}).stringSplitter,
                        Q = typeof F2 == "function" ? F2(b) : b.split("");
                      s.typeCharacters(Q, k);
                    }
                    return s;
                  }),
                  S(this, "pasteString", function (b) {
                    var k =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    return a(b)
                      ? s.typeOutHTMLString(b, k, true)
                      : (b && s.addEventToQueue(E, { character: b, node: k }),
                        s);
                  }),
                  S(this, "typeOutHTMLString", function (b) {
                    var k =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : null,
                      F2 = arguments.length > 2 ? arguments[2] : void 0,
                      Q = (function (G) {
                        var Y = document.createElement("div");
                        return (Y.innerHTML = G), Y.childNodes;
                      })(b);
                    if (Q.length > 0) {
                      for (var D2 = 0; D2 < Q.length; D2++) {
                        var I = Q[D2],
                          $ = I.innerHTML;
                        I && I.nodeType !== 3
                          ? ((I.innerHTML = ""),
                            s.addEventToQueue(y, { node: I, parentNode: k }),
                            F2 ? s.pasteString($, I) : s.typeString($, I))
                          : I.textContent &&
                            (F2
                              ? s.pasteString(I.textContent, k)
                              : s.typeString(I.textContent, k));
                      }
                    }
                    return s;
                  }),
                  S(this, "deleteAll", function () {
                    var b =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "natural";
                    return s.addEventToQueue(p, { speed: b }), s;
                  }),
                  S(this, "changeDeleteSpeed", function (b) {
                    if (!b) {
                      throw new Error("Must provide new delete speed");
                    }
                    return s.addEventToQueue(d, { speed: b }), s;
                  }),
                  S(this, "changeDelay", function (b) {
                    if (!b) {
                      throw new Error("Must provide new delay");
                    }
                    return s.addEventToQueue(g, { delay: b }), s;
                  }),
                  S(this, "changeCursor", function (b) {
                    if (!b) {
                      throw new Error("Must provide new cursor");
                    }
                    return s.addEventToQueue(_, { cursor: b }), s;
                  }),
                  S(this, "deleteChars", function (b) {
                    if (!b) {
                      throw new Error(
                        "Must provide amount of characters to delete"
                      );
                    }
                    for (var k = 0; k < b; k++) {
                      s.addEventToQueue(c);
                    }
                    return s;
                  }),
                  S(this, "callFunction", function (b, k) {
                    if (!b || typeof b != "function") {
                      throw new Error("Callback must be a function");
                    }
                    return s.addEventToQueue(v, { cb: b, thisArg: k }), s;
                  }),
                  S(this, "typeCharacters", function (b) {
                    var k =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (!b || !Array.isArray(b)) {
                      throw new Error("Characters must be an array");
                    }
                    return (
                      b.forEach(function (F2) {
                        s.addEventToQueue(u, { character: F2, node: k });
                      }),
                      s
                    );
                  }),
                  S(this, "removeCharacters", function (b) {
                    if (!b || !Array.isArray(b)) {
                      throw new Error("Characters must be an array");
                    }
                    return (
                      b.forEach(function () {
                        s.addEventToQueue(c);
                      }),
                      s
                    );
                  }),
                  S(this, "addEventToQueue", function (b, k) {
                    var F2 =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return s.addEventToStateProperty(b, k, F2, "eventQueue");
                  }),
                  S(this, "addReverseCalledEvent", function (b, k) {
                    var F2 =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return s.options.loop
                      ? s.addEventToStateProperty(
                          b,
                          k,
                          F2,
                          "reverseCalledEvents"
                        )
                      : s;
                  }),
                  S(this, "addEventToStateProperty", function (b, k) {
                    var F2 =
                        arguments.length > 2 &&
                        arguments[2] !== void 0 &&
                        arguments[2],
                      Q = arguments.length > 3 ? arguments[3] : void 0,
                      D2 = { eventName: b, eventArgs: k || {} };
                    return (
                      (s.state[Q] = F2
                        ? [D2].concat(N(s.state[Q]))
                        : [].concat(N(s.state[Q]), [D2])),
                      s
                    );
                  }),
                  S(this, "runEventLoop", function () {
                    s.state.lastFrameTime ||
                      (s.state.lastFrameTime = Date.now());
                    var b = Date.now(),
                      k = b - s.state.lastFrameTime;
                    if (!s.state.eventQueue.length) {
                      if (!s.options.loop) {
                        return;
                      }
                      (s.state.eventQueue = N(s.state.calledEvents)),
                        (s.state.calledEvents = []),
                        (s.options = w({}, s.state.initialOptions));
                    }
                    if (
                      ((s.state.eventLoop = i()(s.runEventLoop)),
                      !s.state.eventLoopPaused)
                    ) {
                      if (s.state.pauseUntil) {
                        if (b < s.state.pauseUntil) {
                          return;
                        }
                        s.state.pauseUntil = null;
                      }
                      var F2,
                        Q = N(s.state.eventQueue),
                        D2 = Q.shift();
                      if (
                        !(
                          k <=
                          (F2 =
                            D2.eventName === f || D2.eventName === c
                              ? s.options.deleteSpeed === "natural"
                                ? n(40, 80)
                                : s.options.deleteSpeed
                              : s.options.delay === "natural"
                              ? n(120, 160)
                              : s.options.delay)
                        )
                      ) {
                        var I = D2.eventName,
                          $ = D2.eventArgs;
                        switch (
                          (s.logInDevMode({
                            currentEvent: D2,
                            state: s.state,
                            delay: F2,
                          }),
                          I)
                        ) {
                          case E:
                          case u:
                            var G = $.character,
                              Y = $.node,
                              ct = document.createTextNode(G),
                              J = ct;
                            s.options.onCreateTextNode &&
                              typeof s.options.onCreateTextNode == "function" &&
                              (J = s.options.onCreateTextNode(G, ct)),
                              J &&
                                (Y
                                  ? Y.appendChild(J)
                                  : s.state.elements.wrapper.appendChild(J)),
                              (s.state.visibleNodes = [].concat(
                                N(s.state.visibleNodes),
                                [
                                  {
                                    type: "TEXT_NODE",
                                    character: G,
                                    node: J,
                                  },
                                ]
                              ));
                            break;
                          case c:
                            Q.unshift({
                              eventName: f,
                              eventArgs: { removingCharacterNode: true },
                            });
                            break;
                          case l:
                            var yt = D2.eventArgs.ms;
                            s.state.pauseUntil = Date.now() + parseInt(yt);
                            break;
                          case v:
                            var pt = D2.eventArgs,
                              mt = pt.cb,
                              bt = pt.thisArg;
                            mt.call(bt, { elements: s.state.elements });
                            break;
                          case y:
                            var lt = D2.eventArgs,
                              tt = lt.node,
                              et = lt.parentNode;
                            et
                              ? et.appendChild(tt)
                              : s.state.elements.wrapper.appendChild(tt),
                              (s.state.visibleNodes = [].concat(
                                N(s.state.visibleNodes),
                                [
                                  {
                                    type: A,
                                    node: tt,
                                    parentNode: et || s.state.elements.wrapper,
                                  },
                                ]
                              ));
                            break;
                          case p:
                            var gt = s.state.visibleNodes,
                              rt = $.speed,
                              K = [];
                            rt &&
                              K.push({
                                eventName: d,
                                eventArgs: { speed: rt, temp: true },
                              });
                            for (var ft = 0, _t = gt.length; ft < _t; ft++) {
                              K.push({
                                eventName: f,
                                eventArgs: { removingCharacterNode: false },
                              });
                            }
                            rt &&
                              K.push({
                                eventName: d,
                                eventArgs: {
                                  speed: s.options.deleteSpeed,
                                  temp: true,
                                },
                              }),
                              Q.unshift.apply(Q, K);
                            break;
                          case f:
                            var wt = D2.eventArgs.removingCharacterNode;
                            if (s.state.visibleNodes.length) {
                              var nt = s.state.visibleNodes.pop(),
                                xt = nt.type,
                                Z = nt.node,
                                jt = nt.character;
                              s.options.onRemoveNode &&
                                typeof s.options.onRemoveNode == "function" &&
                                s.options.onRemoveNode({
                                  node: Z,
                                  character: jt,
                                }),
                                Z && Z.parentNode.removeChild(Z),
                                xt === A &&
                                  wt &&
                                  Q.unshift({ eventName: f, eventArgs: {} });
                            }
                            break;
                          case d:
                            s.options.deleteSpeed = D2.eventArgs.speed;
                            break;
                          case g:
                            s.options.delay = D2.eventArgs.delay;
                            break;
                          case _:
                            (s.options.cursor = D2.eventArgs.cursor),
                              (s.state.elements.cursor.innerHTML =
                                D2.eventArgs.cursor);
                        }
                        s.options.loop &&
                          (D2.eventName === f ||
                            (D2.eventArgs && D2.eventArgs.temp) ||
                            (s.state.calledEvents = [].concat(
                              N(s.state.calledEvents),
                              [D2]
                            ))),
                          (s.state.eventQueue = Q),
                          (s.state.lastFrameTime = b);
                      }
                    }
                  }),
                  j)
                ) {
                  if (typeof j == "string") {
                    var ut = document.querySelector(j);
                    if (!ut) {
                      throw new Error("Could not find container element");
                    }
                    this.state.elements.container = ut;
                  } else {
                    this.state.elements.container = j;
                  }
                }
                H && (this.options = w(w({}, this.options), H)),
                  (this.state.initialOptions = w({}, this.options)),
                  this.init();
              }
              var h, T;
              return (
                (h = x),
                (T = [
                  {
                    key: "init",
                    value: function () {
                      var j, H;
                      this.setupWrapperElement(),
                        this.addEventToQueue(
                          _,
                          { cursor: this.options.cursor },
                          true
                        ),
                        this.addEventToQueue(p, null, true),
                        !window ||
                          window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                          this.options.skipAddStyles ||
                          ((j =
                            ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                          (H = document.createElement("style")).appendChild(
                            document.createTextNode(j)
                          ),
                          document.head.appendChild(H),
                          (window.___TYPEWRITER_JS_STYLES_ADDED___ = true)),
                        this.options.autoStart === true &&
                          this.options.strings &&
                          this.typeOutAllStrings().start();
                    },
                  },
                  {
                    key: "logInDevMode",
                    value: function (j) {
                      this.options.devMode && console.log(j);
                    },
                  },
                ]) && M(h.prototype, T),
                Object.defineProperty(h, "prototype", { writable: false }),
                x
              );
            })();
          },
          8552: (e, o, t) => {
            var r = t(852)(t(5639), "DataView");
            e.exports = r;
          },
          1989: (e, o, t) => {
            var r = t(1789),
              i = t(401),
              a = t(7667),
              n = t(1327),
              u = t(1866);
            function c(p) {
              var f = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l; ) {
                var v = p[f];
                this.set(v[0], v[1]);
              }
            }
            (c.prototype.clear = r),
              (c.prototype.delete = i),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c);
          },
          8407: (e, o, t) => {
            var r = t(7040),
              i = t(4125),
              a = t(2117),
              n = t(7518),
              u = t(4705);
            function c(p) {
              var f = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l; ) {
                var v = p[f];
                this.set(v[0], v[1]);
              }
            }
            (c.prototype.clear = r),
              (c.prototype.delete = i),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c);
          },
          7071: (e, o, t) => {
            var r = t(852)(t(5639), "Map");
            e.exports = r;
          },
          3369: (e, o, t) => {
            var r = t(4785),
              i = t(1285),
              a = t(6e3),
              n = t(9916),
              u = t(5265);
            function c(p) {
              var f = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l; ) {
                var v = p[f];
                this.set(v[0], v[1]);
              }
            }
            (c.prototype.clear = r),
              (c.prototype.delete = i),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c);
          },
          3818: (e, o, t) => {
            var r = t(852)(t(5639), "Promise");
            e.exports = r;
          },
          8525: (e, o, t) => {
            var r = t(852)(t(5639), "Set");
            e.exports = r;
          },
          8668: (e, o, t) => {
            var r = t(3369),
              i = t(619),
              a = t(2385);
            function n(u) {
              var c = -1,
                p = u == null ? 0 : u.length;
              for (this.__data__ = new r(); ++c < p; ) {
                this.add(u[c]);
              }
            }
            (n.prototype.add = n.prototype.push = i),
              (n.prototype.has = a),
              (e.exports = n);
          },
          6384: (e, o, t) => {
            var r = t(8407),
              i = t(7465),
              a = t(3779),
              n = t(7599),
              u = t(4758),
              c = t(4309);
            function p(f) {
              var l = (this.__data__ = new r(f));
              this.size = l.size;
            }
            (p.prototype.clear = i),
              (p.prototype.delete = a),
              (p.prototype.get = n),
              (p.prototype.has = u),
              (p.prototype.set = c),
              (e.exports = p);
          },
          2705: (e, o, t) => {
            var r = t(5639).Symbol;
            e.exports = r;
          },
          1149: (e, o, t) => {
            var r = t(5639).Uint8Array;
            e.exports = r;
          },
          577: (e, o, t) => {
            var r = t(852)(t(5639), "WeakMap");
            e.exports = r;
          },
          4963: (e) => {
            e.exports = function (o, t) {
              for (
                var r = -1, i = o == null ? 0 : o.length, a = 0, n = [];
                ++r < i;

              ) {
                var u = o[r];
                t(u, r, o) && (n[a++] = u);
              }
              return n;
            };
          },
          4636: (e, o, t) => {
            var r = t(2545),
              i = t(5694),
              a = t(1469),
              n = t(4144),
              u = t(5776),
              c = t(6719),
              p = Object.prototype.hasOwnProperty;
            e.exports = function (f, l) {
              var v = a(f),
                y = !v && i(f),
                d = !v && !y && n(f),
                g = !v && !y && !d && c(f),
                _ = v || y || d || g,
                E = _ ? r(f.length, String) : [],
                A = E.length;
              for (var O in f) {
                (!l && !p.call(f, O)) ||
                  (_ &&
                    (O == "length" ||
                      (d && (O == "offset" || O == "parent")) ||
                      (g &&
                        (O == "buffer" ||
                          O == "byteLength" ||
                          O == "byteOffset")) ||
                      u(O, A))) ||
                  E.push(O);
              }
              return E;
            };
          },
          2488: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, i = t.length, a = o.length; ++r < i; ) {
                o[a + r] = t[r];
              }
              return o;
            };
          },
          2908: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, i = o == null ? 0 : o.length; ++r < i; ) {
                if (t(o[r], r, o)) {
                  return true;
                }
              }
              return false;
            };
          },
          8470: (e, o, t) => {
            var r = t(7813);
            e.exports = function (i, a) {
              for (var n = i.length; n--; ) {
                if (r(i[n][0], a)) {
                  return n;
                }
              }
              return -1;
            };
          },
          8866: (e, o, t) => {
            var r = t(2488),
              i = t(1469);
            e.exports = function (a, n, u) {
              var c = n(a);
              return i(a) ? c : r(c, u(a));
            };
          },
          4239: (e, o, t) => {
            var r = t(2705),
              i = t(9607),
              a = t(2333),
              n = r ? r.toStringTag : void 0;
            e.exports = function (u) {
              return u == null
                ? u === void 0
                  ? "[object Undefined]"
                  : "[object Null]"
                : n && n in Object(u)
                ? i(u)
                : a(u);
            };
          },
          9454: (e, o, t) => {
            var r = t(4239),
              i = t(7005);
            e.exports = function (a) {
              return i(a) && r(a) == "[object Arguments]";
            };
          },
          939: (e, o, t) => {
            var r = t(2492),
              i = t(7005);
            e.exports = function a(n, u, c, p, f) {
              return (
                n === u ||
                (n == null || u == null || (!i(n) && !i(u))
                  ? n != n && u != u
                  : r(n, u, c, p, a, f))
              );
            };
          },
          2492: (e, o, t) => {
            var r = t(6384),
              i = t(7114),
              a = t(8351),
              n = t(6096),
              u = t(4160),
              c = t(1469),
              p = t(4144),
              f = t(6719),
              l = "[object Arguments]",
              v = "[object Array]",
              y = "[object Object]",
              d = Object.prototype.hasOwnProperty;
            e.exports = function (g, _, E, A, O, m) {
              var w = c(g),
                N = c(_),
                L = w ? v : u(g),
                M = N ? v : u(_),
                S = (L = L == l ? y : L) == y,
                U = (M = M == l ? y : M) == y,
                V = L == M;
              if (V && p(g)) {
                if (!p(_)) {
                  return false;
                }
                (w = true), (S = false);
              }
              if (V && !S) {
                return (
                  m || (m = new r()),
                  w || f(g) ? i(g, _, E, A, O, m) : a(g, _, L, E, A, O, m)
                );
              }
              if (!(1 & E)) {
                var x = S && d.call(g, "__wrapped__"),
                  h = U && d.call(_, "__wrapped__");
                if (x || h) {
                  var T = x ? g.value() : g,
                    j = h ? _.value() : _;
                  return m || (m = new r()), O(T, j, E, A, m);
                }
              }
              return !!V && (m || (m = new r()), n(g, _, E, A, O, m));
            };
          },
          8458: (e, o, t) => {
            var r = t(3560),
              i = t(5346),
              a = t(3218),
              n = t(346),
              u = /^\[object .+?Constructor\]$/,
              c = Function.prototype,
              p = Object.prototype,
              f = c.toString,
              l = p.hasOwnProperty,
              v = RegExp(
                "^" +
                  f
                    .call(l)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              );
            e.exports = function (y) {
              return !(!a(y) || i(y)) && (r(y) ? v : u).test(n(y));
            };
          },
          8749: (e, o, t) => {
            var r = t(4239),
              i = t(1780),
              a = t(7005),
              n = {};
            (n["[object Float32Array]"] =
              n["[object Float64Array]"] =
              n["[object Int8Array]"] =
              n["[object Int16Array]"] =
              n["[object Int32Array]"] =
              n["[object Uint8Array]"] =
              n["[object Uint8ClampedArray]"] =
              n["[object Uint16Array]"] =
              n["[object Uint32Array]"] =
                true),
              (n["[object Arguments]"] =
                n["[object Array]"] =
                n["[object ArrayBuffer]"] =
                n["[object Boolean]"] =
                n["[object DataView]"] =
                n["[object Date]"] =
                n["[object Error]"] =
                n["[object Function]"] =
                n["[object Map]"] =
                n["[object Number]"] =
                n["[object Object]"] =
                n["[object RegExp]"] =
                n["[object Set]"] =
                n["[object String]"] =
                n["[object WeakMap]"] =
                  false),
              (e.exports = function (u) {
                return a(u) && i(u.length) && !!n[r(u)];
              });
          },
          280: (e, o, t) => {
            var r = t(5726),
              i = t(6916),
              a = Object.prototype.hasOwnProperty;
            e.exports = function (n) {
              if (!r(n)) {
                return i(n);
              }
              var u = [];
              for (var c in Object(n)) {
                a.call(n, c) && c != "constructor" && u.push(c);
              }
              return u;
            };
          },
          2545: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, i = Array(o); ++r < o; ) {
                i[r] = t(r);
              }
              return i;
            };
          },
          1717: (e) => {
            e.exports = function (o) {
              return function (t) {
                return o(t);
              };
            };
          },
          4757: (e) => {
            e.exports = function (o, t) {
              return o.has(t);
            };
          },
          4429: (e, o, t) => {
            var r = t(5639)["__core-js_shared__"];
            e.exports = r;
          },
          7114: (e, o, t) => {
            var r = t(8668),
              i = t(2908),
              a = t(4757);
            e.exports = function (n, u, c, p, f, l) {
              var v = 1 & c,
                y = n.length,
                d = u.length;
              if (y != d && !(v && d > y)) {
                return false;
              }
              var g = l.get(n),
                _ = l.get(u);
              if (g && _) {
                return g == u && _ == n;
              }
              var E = -1,
                A = true,
                O = 2 & c ? new r() : void 0;
              for (l.set(n, u), l.set(u, n); ++E < y; ) {
                var m = n[E],
                  w = u[E];
                if (p) {
                  var N = v ? p(w, m, E, u, n, l) : p(m, w, E, n, u, l);
                }
                if (N !== void 0) {
                  if (N) {
                    continue;
                  }
                  A = false;
                  break;
                }
                if (O) {
                  if (
                    !i(u, function (L, M) {
                      if (!a(O, M) && (m === L || f(m, L, c, p, l))) {
                        return O.push(M);
                      }
                    })
                  ) {
                    A = false;
                    break;
                  }
                } else if (m !== w && !f(m, w, c, p, l)) {
                  A = false;
                  break;
                }
              }
              return l.delete(n), l.delete(u), A;
            };
          },
          8351: (e, o, t) => {
            var r = t(2705),
              i = t(1149),
              a = t(7813),
              n = t(7114),
              u = t(8776),
              c = t(1814),
              p = r ? r.prototype : void 0,
              f = p ? p.valueOf : void 0;
            e.exports = function (l, v, y, d, g, _, E) {
              switch (y) {
                case "[object DataView]":
                  if (
                    l.byteLength != v.byteLength ||
                    l.byteOffset != v.byteOffset
                  ) {
                    return false;
                  }
                  (l = l.buffer), (v = v.buffer);
                case "[object ArrayBuffer]":
                  return !(
                    l.byteLength != v.byteLength || !_(new i(l), new i(v))
                  );
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return a(+l, +v);
                case "[object Error]":
                  return l.name == v.name && l.message == v.message;
                case "[object RegExp]":
                case "[object String]":
                  return l == v + "";
                case "[object Map]":
                  var A = u;
                case "[object Set]":
                  var O = 1 & d;
                  if ((A || (A = c), l.size != v.size && !O)) {
                    return false;
                  }
                  var m = E.get(l);
                  if (m) {
                    return m == v;
                  }
                  (d |= 2), E.set(l, v);
                  var w = n(A(l), A(v), d, g, _, E);
                  return E.delete(l), w;
                case "[object Symbol]":
                  if (f) {
                    return f.call(l) == f.call(v);
                  }
              }
              return false;
            };
          },
          6096: (e, o, t) => {
            var r = t(8234),
              i = Object.prototype.hasOwnProperty;
            e.exports = function (a, n, u, c, p, f) {
              var l = 1 & u,
                v = r(a),
                y = v.length;
              if (y != r(n).length && !l) {
                return false;
              }
              for (var d = y; d--; ) {
                var g = v[d];
                if (!(l ? g in n : i.call(n, g))) {
                  return false;
                }
              }
              var _ = f.get(a),
                E = f.get(n);
              if (_ && E) {
                return _ == n && E == a;
              }
              var A = true;
              f.set(a, n), f.set(n, a);
              for (var O = l; ++d < y; ) {
                var m = a[(g = v[d])],
                  w = n[g];
                if (c) {
                  var N = l ? c(w, m, g, n, a, f) : c(m, w, g, a, n, f);
                }
                if (!(N === void 0 ? m === w || p(m, w, u, c, f) : N)) {
                  A = false;
                  break;
                }
                O || (O = g == "constructor");
              }
              if (A && !O) {
                var L = a.constructor,
                  M = n.constructor;
                L == M ||
                  !("constructor" in a) ||
                  !("constructor" in n) ||
                  (typeof L == "function" &&
                    L instanceof L &&
                    typeof M == "function" &&
                    M instanceof M) ||
                  (A = false);
              }
              return f.delete(a), f.delete(n), A;
            };
          },
          1957: (e, o, t) => {
            var r =
              typeof t.g == "object" && t.g && t.g.Object === Object && t.g;
            e.exports = r;
          },
          8234: (e, o, t) => {
            var r = t(8866),
              i = t(9551),
              a = t(3674);
            e.exports = function (n) {
              return r(n, a, i);
            };
          },
          5050: (e, o, t) => {
            var r = t(7019);
            e.exports = function (i, a) {
              var n = i.__data__;
              return r(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
            };
          },
          852: (e, o, t) => {
            var r = t(8458),
              i = t(7801);
            e.exports = function (a, n) {
              var u = i(a, n);
              return r(u) ? u : void 0;
            };
          },
          9607: (e, o, t) => {
            var r = t(2705),
              i = Object.prototype,
              a = i.hasOwnProperty,
              n = i.toString,
              u = r ? r.toStringTag : void 0;
            e.exports = function (c) {
              var p = a.call(c, u),
                f = c[u];
              try {
                c[u] = void 0;
                var l = true;
              } catch {}
              var v = n.call(c);
              return l && (p ? (c[u] = f) : delete c[u]), v;
            };
          },
          9551: (e, o, t) => {
            var r = t(4963),
              i = t(479),
              a = Object.prototype.propertyIsEnumerable,
              n = Object.getOwnPropertySymbols,
              u = n
                ? function (c) {
                    return c == null
                      ? []
                      : ((c = Object(c)),
                        r(n(c), function (p) {
                          return a.call(c, p);
                        }));
                  }
                : i;
            e.exports = u;
          },
          4160: (e, o, t) => {
            var r = t(8552),
              i = t(7071),
              a = t(3818),
              n = t(8525),
              u = t(577),
              c = t(4239),
              p = t(346),
              f = "[object Map]",
              l = "[object Promise]",
              v = "[object Set]",
              y = "[object WeakMap]",
              d = "[object DataView]",
              g = p(r),
              _ = p(i),
              E = p(a),
              A = p(n),
              O = p(u),
              m = c;
            ((r && m(new r(new ArrayBuffer(1))) != d) ||
              (i && m(new i()) != f) ||
              (a && m(a.resolve()) != l) ||
              (n && m(new n()) != v) ||
              (u && m(new u()) != y)) &&
              (m = function (w) {
                var N = c(w),
                  L = N == "[object Object]" ? w.constructor : void 0,
                  M = L ? p(L) : "";
                if (M) {
                  switch (M) {
                    case g:
                      return d;
                    case _:
                      return f;
                    case E:
                      return l;
                    case A:
                      return v;
                    case O:
                      return y;
                  }
                }
                return N;
              }),
              (e.exports = m);
          },
          7801: (e) => {
            e.exports = function (o, t) {
              return o?.[t];
            };
          },
          1789: (e, o, t) => {
            var r = t(4536);
            e.exports = function () {
              (this.__data__ = r ? r(null) : {}), (this.size = 0);
            };
          },
          401: (e) => {
            e.exports = function (o) {
              var t = this.has(o) && delete this.__data__[o];
              return (this.size -= t ? 1 : 0), t;
            };
          },
          7667: (e, o, t) => {
            var r = t(4536),
              i = Object.prototype.hasOwnProperty;
            e.exports = function (a) {
              var n = this.__data__;
              if (r) {
                var u = n[a];
                return u === "__lodash_hash_undefined__" ? void 0 : u;
              }
              return i.call(n, a) ? n[a] : void 0;
            };
          },
          1327: (e, o, t) => {
            var r = t(4536),
              i = Object.prototype.hasOwnProperty;
            e.exports = function (a) {
              var n = this.__data__;
              return r ? n[a] !== void 0 : i.call(n, a);
            };
          },
          1866: (e, o, t) => {
            var r = t(4536);
            e.exports = function (i, a) {
              var n = this.__data__;
              return (
                (this.size += this.has(i) ? 0 : 1),
                (n[i] = r && a === void 0 ? "__lodash_hash_undefined__" : a),
                this
              );
            };
          },
          5776: (e) => {
            var o = /^(?:0|[1-9]\d*)$/;
            e.exports = function (t, r) {
              var i = typeof t;
              return (
                !!(r = r ?? 9007199254740991) &&
                (i == "number" || (i != "symbol" && o.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < r
              );
            };
          },
          7019: (e) => {
            e.exports = function (o) {
              var t = typeof o;
              return t == "string" ||
                t == "number" ||
                t == "symbol" ||
                t == "boolean"
                ? o !== "__proto__"
                : o === null;
            };
          },
          5346: (e, o, t) => {
            var r,
              i = t(4429),
              a = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + r
                : "";
            e.exports = function (n) {
              return !!a && a in n;
            };
          },
          5726: (e) => {
            var o = Object.prototype;
            e.exports = function (t) {
              var r = t && t.constructor;
              return t === ((typeof r == "function" && r.prototype) || o);
            };
          },
          7040: (e) => {
            e.exports = function () {
              (this.__data__ = []), (this.size = 0);
            };
          },
          4125: (e, o, t) => {
            var r = t(8470),
              i = Array.prototype.splice;
            e.exports = function (a) {
              var n = this.__data__,
                u = r(n, a);
              return !(
                u < 0 ||
                (u == n.length - 1 ? n.pop() : i.call(n, u, 1), --this.size, 0)
              );
            };
          },
          2117: (e, o, t) => {
            var r = t(8470);
            e.exports = function (i) {
              var a = this.__data__,
                n = r(a, i);
              return n < 0 ? void 0 : a[n][1];
            };
          },
          7518: (e, o, t) => {
            var r = t(8470);
            e.exports = function (i) {
              return r(this.__data__, i) > -1;
            };
          },
          4705: (e, o, t) => {
            var r = t(8470);
            e.exports = function (i, a) {
              var n = this.__data__,
                u = r(n, i);
              return (
                u < 0 ? (++this.size, n.push([i, a])) : (n[u][1] = a), this
              );
            };
          },
          4785: (e, o, t) => {
            var r = t(1989),
              i = t(8407),
              a = t(7071);
            e.exports = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new r(),
                  map: new (a || i)(),
                  string: new r(),
                });
            };
          },
          1285: (e, o, t) => {
            var r = t(5050);
            e.exports = function (i) {
              var a = r(this, i).delete(i);
              return (this.size -= a ? 1 : 0), a;
            };
          },
          6e3: (e, o, t) => {
            var r = t(5050);
            e.exports = function (i) {
              return r(this, i).get(i);
            };
          },
          9916: (e, o, t) => {
            var r = t(5050);
            e.exports = function (i) {
              return r(this, i).has(i);
            };
          },
          5265: (e, o, t) => {
            var r = t(5050);
            e.exports = function (i, a) {
              var n = r(this, i),
                u = n.size;
              return n.set(i, a), (this.size += n.size == u ? 0 : 1), this;
            };
          },
          8776: (e) => {
            e.exports = function (o) {
              var t = -1,
                r = Array(o.size);
              return (
                o.forEach(function (i, a) {
                  r[++t] = [a, i];
                }),
                r
              );
            };
          },
          4536: (e, o, t) => {
            var r = t(852)(Object, "create");
            e.exports = r;
          },
          6916: (e, o, t) => {
            var r = t(5569)(Object.keys, Object);
            e.exports = r;
          },
          1167: (e, o, t) => {
            e = t.nmd(e);
            var r = t(1957),
              i = o && !o.nodeType && o,
              a = i && e && !e.nodeType && e,
              n = a && a.exports === i && r.process,
              u = (function () {
                try {
                  return (
                    (a && a.require && a.require("util").types) ||
                    (n && n.binding && n.binding("util"))
                  );
                } catch {}
              })();
            e.exports = u;
          },
          2333: (e) => {
            var o = Object.prototype.toString;
            e.exports = function (t) {
              return o.call(t);
            };
          },
          5569: (e) => {
            e.exports = function (o, t) {
              return function (r) {
                return o(t(r));
              };
            };
          },
          5639: (e, o, t) => {
            var r = t(1957),
              i =
                typeof self == "object" &&
                self &&
                self.Object === Object &&
                self,
              a = r || i || Function("return this")();
            e.exports = a;
          },
          619: (e) => {
            e.exports = function (o) {
              return this.__data__.set(o, "__lodash_hash_undefined__"), this;
            };
          },
          2385: (e) => {
            e.exports = function (o) {
              return this.__data__.has(o);
            };
          },
          1814: (e) => {
            e.exports = function (o) {
              var t = -1,
                r = Array(o.size);
              return (
                o.forEach(function (i) {
                  r[++t] = i;
                }),
                r
              );
            };
          },
          7465: (e, o, t) => {
            var r = t(8407);
            e.exports = function () {
              (this.__data__ = new r()), (this.size = 0);
            };
          },
          3779: (e) => {
            e.exports = function (o) {
              var t = this.__data__,
                r = t.delete(o);
              return (this.size = t.size), r;
            };
          },
          7599: (e) => {
            e.exports = function (o) {
              return this.__data__.get(o);
            };
          },
          4758: (e) => {
            e.exports = function (o) {
              return this.__data__.has(o);
            };
          },
          4309: (e, o, t) => {
            var r = t(8407),
              i = t(7071),
              a = t(3369);
            e.exports = function (n, u) {
              var c = this.__data__;
              if (c instanceof r) {
                var p = c.__data__;
                if (!i || p.length < 199) {
                  return p.push([n, u]), (this.size = ++c.size), this;
                }
                c = this.__data__ = new a(p);
              }
              return c.set(n, u), (this.size = c.size), this;
            };
          },
          346: (e) => {
            var o = Function.prototype.toString;
            e.exports = function (t) {
              if (t != null) {
                try {
                  return o.call(t);
                } catch {}
                try {
                  return t + "";
                } catch {}
              }
              return "";
            };
          },
          7813: (e) => {
            e.exports = function (o, t) {
              return o === t || (o != o && t != t);
            };
          },
          5694: (e, o, t) => {
            var r = t(9454),
              i = t(7005),
              a = Object.prototype,
              n = a.hasOwnProperty,
              u = a.propertyIsEnumerable,
              c = r(
                (function () {
                  return arguments;
                })()
              )
                ? r
                : function (p) {
                    return i(p) && n.call(p, "callee") && !u.call(p, "callee");
                  };
            e.exports = c;
          },
          1469: (e) => {
            var o = Array.isArray;
            e.exports = o;
          },
          8612: (e, o, t) => {
            var r = t(3560),
              i = t(1780);
            e.exports = function (a) {
              return a != null && i(a.length) && !r(a);
            };
          },
          4144: (e, o, t) => {
            e = t.nmd(e);
            var r = t(5639),
              i = t(5062),
              a = o && !o.nodeType && o,
              n = a && e && !e.nodeType && e,
              u = n && n.exports === a ? r.Buffer : void 0,
              c = (u ? u.isBuffer : void 0) || i;
            e.exports = c;
          },
          8446: (e, o, t) => {
            var r = t(939);
            e.exports = function (i, a) {
              return r(i, a);
            };
          },
          3560: (e, o, t) => {
            var r = t(4239),
              i = t(3218);
            e.exports = function (a) {
              if (!i(a)) {
                return false;
              }
              var n = r(a);
              return (
                n == "[object Function]" ||
                n == "[object GeneratorFunction]" ||
                n == "[object AsyncFunction]" ||
                n == "[object Proxy]"
              );
            };
          },
          1780: (e) => {
            e.exports = function (o) {
              return (
                typeof o == "number" &&
                o > -1 &&
                o % 1 == 0 &&
                o <= 9007199254740991
              );
            };
          },
          3218: (e) => {
            e.exports = function (o) {
              var t = typeof o;
              return o != null && (t == "object" || t == "function");
            };
          },
          7005: (e) => {
            e.exports = function (o) {
              return o != null && typeof o == "object";
            };
          },
          6719: (e, o, t) => {
            var r = t(8749),
              i = t(1717),
              a = t(1167),
              n = a && a.isTypedArray,
              u = n ? i(n) : r;
            e.exports = u;
          },
          3674: (e, o, t) => {
            var r = t(4636),
              i = t(280),
              a = t(8612);
            e.exports = function (n) {
              return a(n) ? r(n) : i(n);
            };
          },
          479: (e) => {
            e.exports = function () {
              return [];
            };
          },
          5062: (e) => {
            e.exports = function () {
              return false;
            };
          },
          75: function (e) {
            (function () {
              var o, t, r, i, a, n;
              typeof performance < "u" &&
              performance !== null &&
              performance.now
                ? (e.exports = function () {
                    return performance.now();
                  })
                : typeof process < "u" && process !== null && process.hrtime
                ? ((e.exports = function () {
                    return (o() - a) / 1e6;
                  }),
                  (t = process.hrtime),
                  (i = (o = function () {
                    var u;
                    return 1e9 * (u = t())[0] + u[1];
                  })()),
                  (n = 1e9 * process.uptime()),
                  (a = i - n))
                : Date.now
                ? ((e.exports = function () {
                    return Date.now() - r;
                  }),
                  (r = Date.now()))
                : ((e.exports = function () {
                    return /* @__PURE__ */ new Date().getTime() - r;
                  }),
                  (r = /* @__PURE__ */ new Date().getTime()));
            }).call(this);
          },
          4087: (e, o, t) => {
            for (
              var r = t(75),
                i = typeof window > "u" ? t.g : window,
                a = ["moz", "webkit"],
                n = "AnimationFrame",
                u = i["request" + n],
                c = i["cancel" + n] || i["cancelRequest" + n],
                p = 0;
              !u && p < a.length;
              p++
            ) {
              (u = i[a[p] + "Request" + n]),
                (c = i[a[p] + "Cancel" + n] || i[a[p] + "CancelRequest" + n]);
            }
            if (!u || !c) {
              var f = 0,
                l = 0,
                v = [];
              (u = function (y) {
                if (v.length === 0) {
                  var d = r(),
                    g = Math.max(0, 16.666666666666668 - (d - f));
                  (f = g + d),
                    setTimeout(function () {
                      var _ = v.slice(0);
                      v.length = 0;
                      for (var E = 0; E < _.length; E++) {
                        if (!_[E].cancelled) {
                          try {
                            _[E].callback(f);
                          } catch (A) {
                            setTimeout(function () {
                              throw A;
                            }, 0);
                          }
                        }
                      }
                    }, Math.round(g));
                }
                return (
                  v.push({ handle: ++l, callback: y, cancelled: false }), l
                );
              }),
                (c = function (y) {
                  for (var d = 0; d < v.length; d++) {
                    v[d].handle === y && (v[d].cancelled = true);
                  }
                });
            }
            (e.exports = function (y) {
              return u.call(i, y);
            }),
              (e.exports.cancel = function () {
                c.apply(i, arguments);
              }),
              (e.exports.polyfill = function (y) {
                y || (y = i),
                  (y.requestAnimationFrame = u),
                  (y.cancelAnimationFrame = c);
              });
          },
          8156: (e) => {
            "use strict";
            e.exports = C;
          },
        },
        z = {};
      function R(e) {
        var o = z[e];
        if (o !== void 0) {
          return o.exports;
        }
        var t = (z[e] = { id: e, loaded: false, exports: {} });
        return (
          P[e].call(t.exports, t, t.exports, R), (t.loaded = true), t.exports
        );
      }
      (R.n = (e) => {
        var o = e && e.__esModule ? () => e.default : () => e;
        return R.d(o, { a: o }), o;
      }),
        (R.d = (e, o) => {
          for (var t in o) {
            R.o(o, t) &&
              !R.o(e, t) &&
              Object.defineProperty(e, t, { enumerable: true, get: o[t] });
          }
        }),
        (R.g = (function () {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          try {
            return this || new Function("return this")();
          } catch {
            if (typeof window == "object") {
              return window;
            }
          }
        })()),
        (R.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
        (R.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e));
      var B = {};
      return (
        (() => {
          "use strict";
          R.d(B, { default: () => v });
          var e = R(8156),
            o = R.n(e),
            t = R(7403),
            r = R(8446),
            i = R.n(r);
          function a(y) {
            return (
              (a =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (d) {
                      return typeof d;
                    }
                  : function (d) {
                      return d &&
                        typeof Symbol == "function" &&
                        d.constructor === Symbol &&
                        d !== Symbol.prototype
                        ? "symbol"
                        : typeof d;
                    }),
              a(y)
            );
          }
          function n(y, d) {
            for (var g = 0; g < d.length; g++) {
              var _ = d[g];
              (_.enumerable = _.enumerable || false),
                (_.configurable = true),
                "value" in _ && (_.writable = true),
                Object.defineProperty(y, f(_.key), _);
            }
          }
          function u(y, d) {
            return (
              (u = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (g, _) {
                    return (g.__proto__ = _), g;
                  }),
              u(y, d)
            );
          }
          function c(y) {
            if (y === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return y;
          }
          function p(y) {
            return (
              (p = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (d) {
                    return d.__proto__ || Object.getPrototypeOf(d);
                  }),
              p(y)
            );
          }
          function f(y) {
            var d = (function (g, _) {
              if (a(g) !== "object" || g === null) {
                return g;
              }
              var E = g[Symbol.toPrimitive];
              if (E !== void 0) {
                var A = E.call(g, "string");
                if (a(A) !== "object") {
                  return A;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(g);
            })(y);
            return a(d) === "symbol" ? d : String(d);
          }
          var l = (function (y) {
            (function (m, w) {
              if (typeof w != "function" && w !== null) {
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              }
              (m.prototype = Object.create(w && w.prototype, {
                constructor: { value: m, writable: true, configurable: true },
              })),
                Object.defineProperty(m, "prototype", { writable: false }),
                w && u(m, w);
            })(O, y);
            var d,
              g,
              _,
              E,
              A =
                ((_ = O),
                (E = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  ) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      true
                    );
                  } catch {
                    return false;
                  }
                })()),
                function () {
                  var m,
                    w = p(_);
                  if (E) {
                    var N = p(this).constructor;
                    m = Reflect.construct(w, arguments, N);
                  } else {
                    m = w.apply(this, arguments);
                  }
                  return (function (L, M) {
                    if (M && (a(M) === "object" || typeof M == "function")) {
                      return M;
                    }
                    if (M !== void 0) {
                      throw new TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    }
                    return c(L);
                  })(this, m);
                });
            function O() {
              var m, w, N, L;
              (function (V, x) {
                if (!(V instanceof x)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              })(this, O);
              for (
                var M = arguments.length, S = new Array(M), U = 0;
                U < M;
                U++
              ) {
                S[U] = arguments[U];
              }
              return (
                (w = c((m = A.call.apply(A, [this].concat(S))))),
                (L = { instance: null }),
                (N = f((N = "state"))) in w
                  ? Object.defineProperty(w, N, {
                      value: L,
                      enumerable: true,
                      configurable: true,
                      writable: true,
                    })
                  : (w[N] = L),
                m
              );
            }
            return (
              (d = O),
              (g = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var m = this,
                      w = new t.default(this.typewriter, this.props.options);
                    this.setState({ instance: w }, function () {
                      var N = m.props.onInit;
                      N && N(w);
                    });
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (m) {
                    i()(this.props.options, m.options) ||
                      this.setState({
                        instance: new t.default(
                          this.typewriter,
                          this.props.options
                        ),
                      });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.state.instance && this.state.instance.stop();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var m = this,
                      w = this.props.component;
                    return o().createElement(w, {
                      ref: function (N) {
                        return (m.typewriter = N);
                      },
                      className: "Typewriter",
                      "data-testid": "typewriter-wrapper",
                    });
                  },
                },
              ]) && n(d.prototype, g),
              Object.defineProperty(d, "prototype", { writable: false }),
              O
            );
          })(e.Component);
          l.defaultProps = { component: "div" };
          let v = l;
        })(),
        B.default
      );
    })()
  );
});
var W = {};
Pt(W, { default: () => Mt });
var Ct = dt(st());
q(W, dt(st()));
var { default: ht, ...Lt } = Ct;
var Mt = ht !== void 0 ? ht : Lt;

// https:https://framerusercontent.com/modules/vgSbxmWWvbgW6ShllXld/9oZlwlOxsp6zJVFpVkIp/Typewriter.js
var headingStyles = (props) => {
  return {
    width: "100%",
    height: "100%",
    // display: "flex",
    // placeContent: "center",
    // placeItems: "center",
    position: "relative",
    overflow: "visible",
    fontSize: props.font.fontSize,
    fontFamily: props.font.fontFamily || "Inter",
    fontWeight: props.font.fontWeight,
    letterSpacing: props.font.letterSpacing,
    lineHeight: props.font.lineHeightType
      ? props.font.lineHeight
      : `${props.font.lineHeightPixels}px`,
    textAlign: props.font.textAlign,
    whiteSpace: props.font.whiteSpace,
    color: props.color,
    left: `${props.font.offset}%`,
    margin: 0,
    padding: 0,
  };
};
function TypeWriter(props) {
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const strings = props.text.split(" ");
  const content = props.split ? strings : props.text;
  const canvasContent = props.split ? strings[0] : props.text;
  const tagMap = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2",
    heading3: "h3",
  };
  const Tag = tagMap[props.tag];
  const cursorStyles = `.${props.id} .Typewriter__cursor { color: ${props.cursorColor}; }`;
  const TypeWriterPure = () =>
    /* @__PURE__ */ _jsx(Mt, {
      options: {
        strings: content,
        autoStart: props.autoStart,
        loop: props.loop,
        cursor: props.cursor,
        pauseFor: props.pauseFor * 1e3,
        delay: props.delayType ? "natural" : props.delayNumber * 1e3,
      },
      onInit: (typewriter) => {
        typewriter.callFunction((state) => {
          if (props.loop) {
            return;
          }
          if (!props.caretVisibility) {
            state.elements.cursor.style.display = "none";
          }
        });
      },
    });
  const TypeWriterWithCSS = withCSS(
    () =>
      /* @__PURE__ */ _jsx("span", {
        style: { display: "contents" },
        className: `${props.id}`,
        children: /* @__PURE__ */ _jsx(TypeWriterPure, {}),
      }),
    cursorStyles
  );
  return /* @__PURE__ */ _jsx(Tag, {
    style: headingStyles(props),
    children: isCanvas
      ? canvasContent
      : /* @__PURE__ */ _jsx(TypeWriterWithCSS, {}),
  });
}
TypeWriter.displayName = "Typewriter";
TypeWriter.defaultProps = {
  text: "Hello World",
  font: {
    fontFamily: "Inter",
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
    lineHeight: 1.2,
    lineHeightType: true,
    lineHeightPixels: 100,
    letterSpacing: 0,
    offset: 0,
    whiteSpace: "nowrap",
  },
  cursor: "|",
  delayType: true,
  delayNumber: 0.2,
  pauseFor: 1,
  loop: true,
  caretVisibility: true,
  split: false,
  autoStart: true,
  tag: "heading1",
  color: "#888",
  cursorColor: "rgba(136, 136, 136, 0.5)",
};
addPropertyControls(TypeWriter, {
  tag: {
    title: "Tag",
    type: ControlType.Enum,
    options: ["heading1", "heading2", "heading3", "paragraph"],
    optionTitles: ["H1", "H2", "H3", "P"],
    defaultValue: TypeWriter.defaultProps.tag,
    displaySegmentedControl: true,
  },
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: TypeWriter.defaultProps.text,
  },
  autoStart: {
    title: "Autoplay",
    type: ControlType.Boolean,
    defaultValue: TypeWriter.defaultProps.autoStart,
  },
  split: {
    title: "Per Word",
    type: ControlType.Boolean,
    defaultValue: TypeWriter.defaultProps.split,
  },
  loop: {
    title: "Loop",
    type: ControlType.Boolean,
    defaultValue: TypeWriter.defaultProps.loop,
  },
  caretVisibility: {
    title: "Caret",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: TypeWriter.defaultProps.caretVisibility,
    hidden: (props) => props.loop,
  },
  delayType: {
    title: "Delay",
    type: ControlType.Boolean,
    enabledTitle: "Natural",
    disabledTitle: "Number",
    defaultValue: TypeWriter.defaultProps.delayType,
  },
  delayNumber: {
    title: "Delay",
    type: ControlType.Number,
    step: 0.1,
    min: 0,
    defaultValue: TypeWriter.defaultProps.delayNumber,
    displayStepper: true,
    hidden: (props) => props.delayType,
  },
  pauseFor: {
    title: "Pause",
    type: ControlType.Number,
    min: 0,
    defaultValue: TypeWriter.defaultProps.pauseFor,
    displayStepper: true,
  },
  color: {
    type: ControlType.Color,
    defaultValue: TypeWriter.defaultProps.color,
  },
  font: {
    type: ControlType.Object,
    controls: {
      fontFamily: {
        title: "Font",
        type: ControlType.String,
        placeholder: "Inter",
        defaultValue: TypeWriter.defaultProps.font.fontFamily,
      },
      fontSize: {
        title: "Size",
        type: ControlType.Number,
        min: 0,
        max: 500,
        step: 0.5,
        defaultValue: TypeWriter.defaultProps.font.fontSize,
      },
      fontWeight: {
        type: ControlType.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        defaultValue: TypeWriter.defaultProps.font.fontWeight,
        title: "Weight",
      },
      textAlign: {
        type: ControlType.Enum,
        displaySegmentedControl: true,
        title: "Align",
        options: ["left", "center", "right"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: TypeWriter.defaultProps.font.textAlign,
      },
      letterSpacing: {
        title: "Letter",
        type: ControlType.Number,
        defaultValue: TypeWriter.defaultProps.font.letterSpacing,
        step: 0.1,
        displayStepper: true,
      },
      offset: {
        type: ControlType.Number,
        title: "Offset",
        min: -100,
        max: 100,
        displayStepper: true,
        step: 0.25,
        defaultValue: TypeWriter.defaultProps.font.offset,
        unit: "%",
      },
      whiteSpace: {
        type: ControlType.Enum,
        title: "Space",
        options: [
          "normal",
          "nowrap",
          "pre",
          "pre-wrap",
          "preline",
          "break-spaces",
        ],
        optionTitles: [
          "Normal",
          "No Wrap",
          "Pre",
          "Pre Wrap",
          "Preline",
          "Break Spaces",
        ],
        defaultValue: TypeWriter.defaultProps.font.whiteSpace,
      },
      lineHeight: {
        type: ControlType.Number,
        title: "Line",
        min: -500,
        max: 500,
        displayStepper: true,
        step: 0.1,
        defaultValue: TypeWriter.defaultProps.font.lineHeight,
        hidden: (props) => !props.lineHeightType,
      },
      lineHeightPixels: {
        type: ControlType.Number,
        title: "Line",
        min: -500,
        max: 500,
        displayStepper: true,
        step: 0.1,
        defaultValue: TypeWriter.defaultProps.font.lineHeightPixels,
        hidden: (props) => props.lineHeightType,
      },
      lineHeightType: {
        type: ControlType.Boolean,
        title: " ",
        enabledTitle: "em",
        disabledTitle: "px",
        defaultValue: TypeWriter.defaultProps.font.lineHeightType,
      },
    },
  },
  cursor: {
    title: "Cursor",
    type: ControlType.String,
    defaultValue: TypeWriter.defaultProps.cursor,
    placeholder: "Character",
  },
  cursorColor: {
    type: ControlType.Color,
    title: " ",
    defaultValue: TypeWriter.defaultProps.cursorColor,
  },
});

// https:https://framerusercontent.com/modules/GuWa1Ud162ubWf1k1mKH/dBQfRNTkpNoLwYmhAT4y/FpOKcRGFb.js
import { jsx as _jsx5, jsxs as _jsxs3 } from "react/jsx-runtime";
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls5,
  ControlType as ControlType8,
  cx as cx3,
  getFonts,
  RichText,
  SVG as SVG3,
  useLocaleCode,
  useLocaleInfo as useLocaleInfo3,
  useVariantState as useVariantState3,
  withCSS as withCSS5,
} from "installable-framer/dist/framer";
import {
  LayoutGroup as LayoutGroup3,
  motion as motion4,
  MotionConfigContext as MotionConfigContext3,
} from "framer-motion";
import * as React5 from "react";

// https:https://framerusercontent.com/modules/TjsuAE5glU2n7MoNSdHk/uk4tNJP8azIVk1aBSiz4/Slider_1.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType5,
  RenderTarget as RenderTarget4,
  withCSS as withCSS2,
} from "installable-framer/dist/framer";
import {
  animate as animate2,
  motion,
  transform,
  useTransform,
} from "framer-motion";
import {
  useCallback as useCallback2,
  useRef as useRef3,
  useState as useState3,
} from "react";

// https:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType as ControlType2 } from "installable-framer/dist/framer";
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column",
};
var defaultEvents = {
  onClick: {
    type: ControlType2.EventHandler,
  },
  onMouseEnter: {
    type: ControlType2.EventHandler,
  },
  onMouseLeave: {
    type: ControlType2.EventHandler,
  },
};
var fontSizeOptions = {
  type: ControlType2.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true,
};
var fontControls = {
  font: {
    type: ControlType2.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom",
  },
  fontFamily: {
    type: ControlType2.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({ font }) => !font,
  },
  fontWeight: {
    type: ControlType2.Enum,
    title: "Weight",
    options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    optionTitles: [
      "Thin",
      "Extra-light",
      "Light",
      "Regular",
      "Medium",
      "Semi-bold",
      "Bold",
      "Extra-bold",
      "Black",
    ],
    hidden: ({ font }) => !font,
  },
};

// https:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "installable-framer/dist/framer";
import { useEffect } from "react";

// https:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef } from "react";
function useConstant(init) {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// https:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "installable-framer/dist/framer";

// https:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "installable-framer/dist/framer";
var isMotionValue = (v) => v instanceof MotionValue;

// https:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from "react";

// https:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType3 } from "installable-framer/dist/framer";

// https:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo } from "react";

// https:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";
function useOnChange(value, callback) {
  useEffect3(() =>
    // @ts-ignore this should be detected as a MV :shrug:
    isMotionValue(value) ? value.onChange(callback) : void 0
  );
}

// https:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import {
  animate,
  motionValue,
  RenderTarget as RenderTarget2,
} from "installable-framer/dist/framer";
function useAutoMotionValue(inputValue, options) {
  var ref;
  const optionsRef = useRef2(options);
  const animation = useRef2();
  const didInitialMount = useRef2(false);
  const isOnCanvas = RenderTarget2.current() === RenderTarget2.canvas;
  const onChangeDeps = (
    options === null || options === void 0 ? void 0 : options.onChangeDeps
  )
    ? options.onChangeDeps
    : [];
  const onChange = useCallback(
    options === null || options === void 0 ? void 0 : options.onChange,
    [...onChangeDeps]
  );
  const transformer = useCallback(
    (value2) =>
      (
        (ref = optionsRef.current) === null || ref === void 0
          ? void 0
          : ref.transform
      )
        ? optionsRef.current.transform(value2)
        : value2,
    []
  );
  const value = useConstant(() =>
    isMotionValue(inputValue)
      ? inputValue
      : motionValue(transformer(inputValue))
  );
  useEffect4(() => {
    if (!isMotionValue(inputValue) && didInitialMount.current) {
      var ref1, ref2;
      const newValue = transformer(inputValue);
      (ref1 = animation.current) === null || ref1 === void 0
        ? void 0
        : ref1.stop();
      if (onChange) {
        onChange(newValue, value);
      }
      if (
        ((ref2 = optionsRef.current) === null || ref2 === void 0
          ? void 0
          : ref2.animate) &&
        !isOnCanvas
      ) {
        var ref3;
        animation.current = animate(
          value,
          newValue,
          (ref3 = optionsRef.current) === null || ref3 === void 0
            ? void 0
            : ref3.transition
        );
      } else {
        value.set(newValue);
      }
    }
    didInitialMount.current = true;
  }, [inputValue, ...onChangeDeps]);
  return value;
}

// https:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore } from "installable-framer/dist/framer";
import { useEffect as useEffect5 } from "react";

// https:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget3 } from "installable-framer/dist/framer";

// https:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// https:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType4 } from "installable-framer/dist/framer";
var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType4.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var paddingControl = {
  padding: {
    type: ControlType4.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};

// https:https://framer.com/m/framer/lodash.js@0.3.0
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
var NAN = 0 / 0;
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var now = function () {
  return Date.now();
};
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (typeof value == "symbol") {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value)
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : reIsBadHex.test(value)
    ? NAN
    : +value;
}
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing
      ? nativeMax(toNumber(options.maxWait) || 0, wait)
      : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      timeWaiting = wait - timeSinceLastCall;
    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;
    return (
      lastCallTime === void 0 ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= maxWait)
    );
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function throttle(func, wait, options) {
  var leading = true,
    trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    maxWait: wait,
    trailing,
  });
}

// https:https://framerusercontent.com/modules/TjsuAE5glU2n7MoNSdHk/uk4tNJP8azIVk1aBSiz4/Slider_1.js
var KnobOptions;
(function (KnobOptions2) {
  KnobOptions2["Hide"] = "Hide";
  KnobOptions2["Hover"] = "Hover";
  KnobOptions2["Show"] = "Show";
})(KnobOptions || (KnobOptions = {}));
var Slider = withCSS2(
  function Slider2(props) {
    const {
      value: valueProp,
      trackHeight,
      fillColor,
      focusColor,
      min,
      max,
      onChange,
      onChangeLive,
      onMax,
      onMin,
      trackColor,
      trackRadius,
      knobSize,
      knobColor,
      constrainKnob,
      shadow,
      shouldAnimateChange,
      transition,
      overdrag,
      knobSetting,
      style,
    } = props;
    const [hovered, setHovered] = useState3(false);
    const [focused, setFocused] = useState3(false);
    const onCanvas = RenderTarget4.current() === RenderTarget4.canvas;
    const shouldAnimate = shouldAnimateChange && !onCanvas;
    const isConstrained = constrainKnob && knobSetting === KnobOptions.Show;
    const showKnob = knobSetting !== KnobOptions.Hide;
    const input = useRef3();
    const knobPadding = 8;
    const updateValue = useCallback2(
      (newVal, target) => {
        throttledInputUpdate(newVal);
        if (onChange) {
          onChange(newVal);
        }
        if (shouldAnimate) {
          animate2(target, newVal, transition);
        } else {
          requestAnimationFrame(() => target.set(newVal));
        }
      },
      [transition, shouldAnimate, onChange]
    );
    const value = useAutoMotionValue(valueProp, {
      onChange: updateValue,
      transform: (value2) => transform(value2, [0, 100], [min, max]),
    });
    const knobX = useTransform(value, [min, max], ["0%", "100%"]);
    const normalizedValue = useTransform(value, [min, max], [0, 1]);
    const throttledInputUpdate = useCallback2(
      throttle((val) => {
        var ref;
        if (
          (ref = input.current) === null || ref === void 0 ? void 0 : ref.value
        ) {
          input.current.value = val;
        }
      }, 100),
      [input]
    );
    useOnChange(value, (val) => {
      if (isMotionValue(valueProp)) {
        throttledInputUpdate(val);
      }
      if (onMax && val >= max) {
        onMax();
      }
      if (onMin && val <= min) {
        onMin();
      }
      if (onChangeLive) {
        onChangeLive(val);
      }
    });
    const handleInputChange = (e) => {
      updateValue(parseFloat(e.target.value), value);
    };
    const handleMouseDown = (e) => {
      if (parseFloat(e.target.value) !== 0) {
        updateValue(parseFloat(e.target.value), value);
      }
    };
    const handleMouseUp = () => {};
    const totalKnobWidth = showKnob ? knobSize + knobPadding : knobPadding;
    const totalHeight = Math.max(knobSize + knobPadding, trackHeight);
    return /* @__PURE__ */ _jsxs("div", {
      className: "framer-default-slider",
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        position: "relative",
        ...style,
        alignItems: "center",
        justifyContent: "flex-start",
        border: `0px solid ${focusColor}`,
        "--framer-default-slider-height": totalHeight,
        "--framer-default-slider-width": totalKnobWidth,
      },
      children: [
        /* @__PURE__ */ _jsx2("input", {
          ref: input,
          style: {
            flexShrink: 0,
            minHeight: totalHeight,
            opacity: 0,
            margin: 0,
            display: "flex",
            ...style,
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            ...(!isConstrained && {
              width: `calc(100% + ${totalKnobWidth}px)`,
              marginLeft: -totalKnobWidth / 2,
            }),
          },
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          type: "range",
          min,
          max,
          defaultValue: -1,
          step: "any",
          onChange: handleInputChange,
          onMouseDown: handleMouseDown,
          onMouseUp: handleMouseUp,
        }),
        /* @__PURE__ */ _jsx2("div", {
          style: {
            background: trackColor,
            position: "absolute",
            top: `calc(50% - ${Math.ceil(trackHeight / 2)}px)`,
            borderRadius: trackRadius,
            display: "flex",
            height: trackHeight,
            width: "100%",
            transformOrigin: "left",
            pointerEvents: "none",
            overflow: "hidden",
          },
          children: /* @__PURE__ */ _jsx2(motion.div, {
            style: {
              height: trackHeight,
              width: "100%",
              background: fillColor,
              scaleX: normalizedValue,
              position: "absolute",
              top: `calc(50% - ${Math.ceil(trackHeight / 2)}px)`,
              transformOrigin: "left",
              pointerEvents: "none",
            },
          }),
        }),
        /* @__PURE__ */ _jsx2(motion.div, {
          style: {
            x: knobX,
            position: "absolute",
            display: "flex",
            width: "100%",
            top: `calc(50% - ${Math.floor(knobSize / 2)}px)`,
            pointerEvents: "none",
            ...(isConstrained
              ? { width: `calc(100% - ${knobSize}px`, left: 0 }
              : { width: `100%`, left: -knobSize / 2 }),
          },
          children: /* @__PURE__ */ _jsx2(motion.div, {
            initial: false,
            animate: {
              scale:
                (hovered && knobSetting === KnobOptions.Hover) ||
                knobSetting === KnobOptions.Show
                  ? 1
                  : 0,
            },
            transition: { type: "spring", stiffness: 900, damping: 40 },
            style: {
              transformOrigin: "50% 50%",
              width: knobSize,
              height: knobSize,
              borderRadius: "50%",
              background: knobColor,
              pointerEvents: "none",
              boxShadow: `0px 1px 2px 0px ${shadow}, 
                                0px 2px 4px 0px ${shadow}, 
                                0px 4px 8px 0px ${shadow}`,
            },
          }),
        }),
      ],
    });
  },
  [
    ".framer-default-slider input[type=range] {  width: 100%; height: 100% background:transparent margin: 0;}",
    ".framer-default-slider input[type=range]:focus { outline: none; }",
    ".framer-default-slider input[type=range]::-ms-track { width: 100%; cursor: pointer; background: transparent; border-color: transparent; color: transparent; }",
    ".framer-default-slider input[type=range]::-webkit-slider-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
    ".framer-default-slider input[type=range]::-moz-range-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
    ".framer-default-slider input[type=range]::-ms-thumb  { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
  ]
);
Slider.displayName = "Slider";
Slider.defaultProps = {
  height: 20,
  width: 200,
  trackHeight: 4,
  fillColor: "#09F",
  trackColor: "#DDD",
  knobColor: "#FFF",
  focusColor: "rgba(0, 153, 255,0)",
  shadow: "rgba(0,0,0,0.1)",
  knobSize: 20,
  overdrag: true,
  min: 0,
  max: 100,
  value: 50,
  trackRadius: 5,
  knobSetting: KnobOptions.Show,
  constrainKnob: false,
  transition: { type: "spring", delay: 0, stiffness: 750, damping: 50 },
  shouldAnimateChange: true,
};
addPropertyControls2(Slider, {
  fillColor: { title: "Tint", type: ControlType5.Color },
  trackColor: { title: "Track", type: ControlType5.Color },
  knobColor: { title: "Knob", type: ControlType5.Color },
  shadow: { type: ControlType5.Color, title: "Shadow" },
  // focusColor: {
  //     title: "Focus",
  //     type: ControlType.Color,
  // },
  shouldAnimateChange: {
    type: ControlType5.Boolean,
    title: "Changes",
    enabledTitle: "Animate",
    disabledTitle: "Instant",
  },
  transition: {
    type: ControlType5.Transition,
    defaultValue: Slider.defaultProps.transition,
  },
  knobSetting: {
    type: ControlType5.Enum,
    displaySegmentedControl: true,
    title: "Knob",
    options: ["Hide", "Hover", "Show"],
  },
  constrainKnob: {
    type: ControlType5.Boolean,
    title: "Constrain",
    enabledTitle: "Yes",
    disabledTitle: "No",
    hidden: ({ knobSetting }) => knobSetting !== KnobOptions.Show,
  },
  knobSize: {
    type: ControlType5.Number,
    title: "Knob",
    min: 10,
    max: 100,
    hidden: ({ knobSetting }) => knobSetting === KnobOptions.Hide,
  },
  value: {
    type: ControlType5.Number,
    title: "Value",
    min: 0,
    max: 100,
    unit: "%",
  },
  trackHeight: { title: "Height", type: ControlType5.Number, min: 0 },
  min: { title: "Min", type: ControlType5.Number, displayStepper: true },
  trackRadius: {
    type: ControlType5.Number,
    displayStepper: true,
    min: 0,
    max: 200,
    title: "Radius",
  },
  max: { title: "Max", type: ControlType5.Number, displayStepper: true },
  onChange: { type: ControlType5.EventHandler },
  onMax: { type: ControlType5.EventHandler },
  onMin: { type: ControlType5.EventHandler },
});

// https:https://framerusercontent.com/modules/VFd7g4pPpeQfOVRIoRr0/6fe9heAP3GRyeu6cIdZL/ydC9w7qn8.js
import { fontStore as fontStore2 } from "installable-framer/dist/framer";
fontStore2.loadWebFontsFromSelectors(["CUSTOM;PP Supply Sans Medium"]);
var fonts = [
  {
    family: "PP Supply Sans Medium",
    moduleAsset: {
      localModuleIdentifier: "local-module:css/ydC9w7qn8:default",
      url: "https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf",
    },
    url: "https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf",
  },
];
var css = [
  '.framer-OP25q .framer-styles-preset-90m2e0:not(.rich-text-wrapper), .framer-OP25q .framer-styles-preset-90m2e0.rich-text-wrapper h4 { --framer-font-family: "PP Supply Sans Medium", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, #101942); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className = "framer-OP25q";

// https:https://framerusercontent.com/modules/DT1hIxOdb4kno6gt2cr8/UCSXqWITtmuGmi2ZERWH/gGsg8DxuX.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls as addPropertyControls3,
  ControlType as ControlType6,
  cx,
  SVG,
  useActiveVariantCallback,
  useLocaleInfo,
  useVariantState,
  withCSS as withCSS3,
} from "installable-framer/dist/framer";
import {
  LayoutGroup,
  motion as motion2,
  MotionConfigContext,
} from "framer-motion";
import * as React3 from "react";
var enabledGestures = {
  nPpSWwiWE: { hover: true, pressed: true },
  r5tWv5mqY: { hover: true, pressed: true },
};
var cycleOrder = ["r5tWv5mqY", "nPpSWwiWE"];
var variantClassNames = {
  nPpSWwiWE: "framer-v-1sknhfx",
  r5tWv5mqY: "framer-v-afvvw",
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant])
      );
  return nextOverrides;
}
var transitions = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var Transition = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext);
  const transition =
    value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)]
  );
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, {
    value: contextValue,
    children,
  });
};
var humanReadableVariantMap = { off: "r5tWv5mqY", on: "nPpSWwiWE" };
var getProps = ({ height, id, width, ...props }) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref =
        (_variant = humanReadableVariantMap[props.variant]) !== null &&
        _variant !== void 0
          ? _variant
          : props.variant) !== null && ref !== void 0
        ? ref
        : "r5tWv5mqY",
  };
};
var createLayoutDependency = (props, variants) =>
  variants.join("-") + props.layoutDependency;
var Component = /* @__PURE__ */ React3.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    ...restProps
  } = getProps(props);
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState({
    cycleOrder,
    defaultVariant: "r5tWv5mqY",
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onTaptllhbd = activeVariantCallback(async (...args) => {
    setVariant("nPpSWwiWE");
  });
  const onTap1cy162z = activeVariantCallback(async (...args) => {
    setVariant("r5tWv5mqY");
  });
  const defaultLayoutId = React3.useId();
  return /* @__PURE__ */ _jsx3(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(motion2.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx("framer-L5s7X", classNames),
      style: { display: "contents" },
      children: /* @__PURE__ */ _jsx3(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx3(motion2.div, {
          ...restProps,
          className: cx("framer-afvvw", className2),
          "data-framer-name": "off",
          "data-highlight": true,
          layoutDependency,
          layoutId: "r5tWv5mqY",
          onTap: onTaptllhbd,
          ref,
          style: { ...style },
          ...addPropertyOverrides(
            {
              "nPpSWwiWE-hover": { "data-framer-name": void 0 },
              "nPpSWwiWE-pressed": { "data-framer-name": void 0 },
              "r5tWv5mqY-hover": { "data-framer-name": void 0 },
              "r5tWv5mqY-pressed": { "data-framer-name": void 0 },
              nPpSWwiWE: { "data-framer-name": "on", onTap: onTap1cy162z },
            },
            baseVariant,
            gestureVariant
          ),
          children: /* @__PURE__ */ _jsx3(motion2.div, {
            className: "framer-4zjiij",
            "data-framer-name": "Selected=true, State=Pressed",
            layoutDependency,
            layoutId: "n23OCPwPr",
            children: /* @__PURE__ */ _jsx3(motion2.div, {
              className: "framer-ikwtg4",
              "data-framer-name": "container",
              layoutDependency,
              layoutId: "LapWIZHAg",
              style: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
              },
              variants: {
                "nPpSWwiWE-pressed": {
                  backgroundColor: "rgba(29, 27, 32, 0.12)",
                },
              },
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: "framer-1n0ftg3",
                "data-framer-name": "state-layer",
                layoutDependency,
                layoutId: "ysxxTKwvI",
                style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                variants: {
                  "nPpSWwiWE-hover": {
                    backgroundColor: "rgba(29, 27, 32, 0.08)",
                  },
                  "r5tWv5mqY-hover": {
                    backgroundColor: "rgba(29, 27, 32, 0.12)",
                  },
                },
                children: /* @__PURE__ */ _jsx3(motion2.div, {
                  className: "framer-utueao",
                  "data-framer-name": "icon",
                  layoutDependency,
                  layoutId: "B_Q84JU7b",
                  children: /* @__PURE__ */ _jsx3(SVG, {
                    className: "framer-1us996j",
                    "data-framer-name": "icon",
                    layout: "position",
                    layoutDependency,
                    layoutId: "EjvYoFDFF",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z" fill="#3F484A"></path><path d="M 10 15 C 12.761 15 15 12.761 15 10 C 15 7.239 12.761 5 10 5 C 7.239 5 5 7.239 5 10 C 5 12.761 7.239 15 10 15 Z" fill="transparent"></path></svg>',
                    svgContentId: 246232588,
                    withExternalLayout: true,
                    ...addPropertyOverrides(
                      {
                        nPpSWwiWE: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z" fill="#006973"></path><path d="M 10 15 C 12.761 15 15 12.761 15 10 C 15 7.239 12.761 5 10 5 C 7.239 5 5 7.239 5 10 C 5 12.761 7.239 15 10 15 Z" fill="rgb(0,105,115)"></path></svg>',
                          svgContentId: 3684307705,
                        },
                      },
                      baseVariant,
                      gestureVariant
                    ),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  });
});
var css2 = [
  '.framer-L5s7X [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-L5s7X .framer-1o2obsq { display: block; }",
  ".framer-L5s7X .framer-afvvw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-L5s7X .framer-4zjiij { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }",
  ".framer-L5s7X .framer-ikwtg4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-L5s7X .framer-1n0ftg3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }",
  ".framer-L5s7X .framer-utueao { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }",
  ".framer-L5s7X .framer-1us996j { flex: none; height: 20px; left: 2px; position: absolute; top: 2px; width: 20px; }",
  ".framer-L5s7X .framer-v-afvvw .framer-afvvw, .framer-L5s7X .framer-v-1sknhfx .framer-afvvw { cursor: pointer; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-L5s7X .framer-afvvw, .framer-L5s7X .framer-4zjiij, .framer-L5s7X .framer-ikwtg4, .framer-L5s7X .framer-1n0ftg3 { gap: 0px; } .framer-L5s7X .framer-afvvw > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-L5s7X .framer-afvvw > :first-child { margin-top: 0px; } .framer-L5s7X .framer-afvvw > :last-child { margin-bottom: 0px; } .framer-L5s7X .framer-4zjiij > *, .framer-L5s7X .framer-ikwtg4 > *, .framer-L5s7X .framer-1n0ftg3 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-L5s7X .framer-4zjiij > :first-child, .framer-L5s7X .framer-ikwtg4 > :first-child, .framer-L5s7X .framer-1n0ftg3 > :first-child { margin-left: 0px; } .framer-L5s7X .framer-4zjiij > :last-child, .framer-L5s7X .framer-ikwtg4 > :last-child, .framer-L5s7X .framer-1n0ftg3 > :last-child { margin-right: 0px; } }",
];
var FramergGsg8DxuX = withCSS3(Component, css2, "framer-L5s7X");
var stdin_default = FramergGsg8DxuX;
FramergGsg8DxuX.displayName = "Radio";
FramergGsg8DxuX.defaultProps = { height: 48, width: 48 };
addPropertyControls3(FramergGsg8DxuX, {
  variant: {
    options: ["r5tWv5mqY", "nPpSWwiWE"],
    optionTitles: ["off", "on"],
    title: "Variant",
    type: ControlType6.Enum,
  },
});
addFonts(FramergGsg8DxuX, []);

// https:https://framerusercontent.com/modules/2hkg5XCE2rQboltCwgjw/pm5Nwf7R4L4y4V92NhuS/vvRGywRFH.js
import { jsx as _jsx4, jsxs as _jsxs2 } from "react/jsx-runtime";
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls4,
  ControlType as ControlType7,
  cx as cx2,
  SVG as SVG2,
  useActiveVariantCallback as useActiveVariantCallback2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS4,
} from "installable-framer/dist/framer";
import {
  LayoutGroup as LayoutGroup2,
  motion as motion3,
  MotionConfigContext as MotionConfigContext2,
} from "framer-motion";
import * as React4 from "react";
var enabledGestures2 = {
  jy1UKfzw2: { hover: true, pressed: true },
  KDR2W3FAc: { hover: true, pressed: true },
};
var cycleOrder2 = ["jy1UKfzw2", "KDR2W3FAc"];
var variantClassNames2 = {
  jy1UKfzw2: "framer-v-34fava",
  KDR2W3FAc: "framer-v-dxxjoq",
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant])
      );
  return nextOverrides;
}
var transitions2 = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var transformTemplate = (_, t) => `translate(-50%, -50%) ${t}`;
var Transition2 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext2);
  const transition =
    value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)]
  );
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, {
    value: contextValue,
    children,
  });
};
var humanReadableVariantMap2 = { left: "KDR2W3FAc", right: "jy1UKfzw2" };
var getProps2 = ({ height, id, width, ...props }) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref =
        (_variant = humanReadableVariantMap2[props.variant]) !== null &&
        _variant !== void 0
          ? _variant
          : props.variant) !== null && ref !== void 0
        ? ref
        : "jy1UKfzw2",
  };
};
var createLayoutDependency2 = (props, variants) =>
  variants.join("-") + props.layoutDependency;
var Component2 = /* @__PURE__ */ React4.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo2();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    ...restProps
  } = getProps2(props);
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: "jy1UKfzw2",
    enabledGestures: enabledGestures2,
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback2(baseVariant);
  const onTap1gqof9 = activeVariantCallback(async (...args) => {
    setVariant("KDR2W3FAc");
  });
  const onTap16ok80 = activeVariantCallback(async (...args) => {
    setVariant("jy1UKfzw2");
  });
  const defaultLayoutId = React4.useId();
  return /* @__PURE__ */ _jsx4(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(motion3.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx2("framer-TCiri", classNames),
      style: { display: "contents" },
      children: /* @__PURE__ */ _jsx4(Transition2, {
        value: transition,
        children: /* @__PURE__ */ _jsx4(motion3.div, {
          ...restProps,
          className: cx2("framer-34fava", className2),
          "data-framer-name": "right",
          "data-highlight": true,
          layoutDependency,
          layoutId: "jy1UKfzw2",
          onTap: onTap1gqof9,
          ref,
          style: { ...style },
          ...addPropertyOverrides2(
            {
              "jy1UKfzw2-hover": { "data-framer-name": void 0 },
              "jy1UKfzw2-pressed": { "data-framer-name": void 0 },
              "KDR2W3FAc-hover": { "data-framer-name": void 0 },
              "KDR2W3FAc-pressed": { "data-framer-name": void 0 },
              KDR2W3FAc: { "data-framer-name": "left", onTap: onTap16ok80 },
            },
            baseVariant,
            gestureVariant
          ),
          children: /* @__PURE__ */ _jsxs2(motion3.div, {
            className: "framer-1ooqcgs",
            "data-framer-name": "Selected=true, State=pressed, Icon=true",
            layoutDependency,
            layoutId: "Ei4wdAtNu",
            children: [
              /* @__PURE__ */ _jsx4(motion3.div, {
                className: "framer-5vfx9p",
                "data-framer-name": "Track",
                layoutDependency,
                layoutId: "VoK29m1Dm",
                style: {
                  "--border-bottom-width": "0px",
                  "--border-color": "rgba(0, 0, 0, 0)",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "0px",
                  backgroundColor: "rgb(0, 105, 115)",
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                },
                variants: {
                  KDR2W3FAc: {
                    "--border-bottom-width": "2px",
                    "--border-color": "rgb(111, 121, 122)",
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    backgroundColor: "rgb(226, 226, 229)",
                  },
                },
                ...addPropertyOverrides2(
                  { KDR2W3FAc: { "data-border": true } },
                  baseVariant,
                  gestureVariant
                ),
              }),
              /* @__PURE__ */ _jsxs2(motion3.div, {
                className: "framer-fh6gm0",
                "data-framer-name": "Handle container",
                layoutDependency,
                layoutId: "dMpLVgXmB",
                children: [
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: "framer-j9yhje",
                    "data-framer-name": "State layer",
                    layoutDependency,
                    layoutId: "u5WCySR2_",
                    style: {
                      backgroundColor: "rgba(103, 80, 164, 0.12)",
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      opacity: 0,
                    },
                    variants: {
                      "jy1UKfzw2-hover": { opacity: 1 },
                      "jy1UKfzw2-pressed": { opacity: 1 },
                      "KDR2W3FAc-hover": {
                        backgroundColor: "rgba(29, 27, 32, 0.08)",
                        opacity: 1,
                      },
                      "KDR2W3FAc-pressed": {
                        backgroundColor: "rgba(29, 27, 32, 0.08)",
                        opacity: 1,
                      },
                    },
                  }),
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: "framer-1jzmbae",
                    "data-framer-name": "Handle",
                    layoutDependency,
                    layoutId: "DtlSm4uVE",
                    style: {
                      backgroundColor: "rgb(255, 255, 255)",
                      borderBottomLeftRadius: 23,
                      borderBottomRightRadius: 23,
                      borderTopLeftRadius: 23,
                      borderTopRightRadius: 23,
                    },
                    transformTemplate,
                    variants: {
                      "jy1UKfzw2-hover": {
                        backgroundColor: "rgb(144, 241, 255)",
                      },
                      "jy1UKfzw2-pressed": {
                        backgroundColor: "rgb(144, 241, 255)",
                      },
                      "KDR2W3FAc-hover": { backgroundColor: "rgb(63, 72, 74)" },
                      "KDR2W3FAc-pressed": {
                        backgroundColor: "rgb(63, 72, 74)",
                      },
                      KDR2W3FAc: {
                        backgroundColor: "rgb(111, 121, 122)",
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                    },
                  }),
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: "framer-2q425d",
                    "data-framer-name": "Icons/navigate_next",
                    layoutDependency,
                    layoutId: "xC2098cIf",
                    transformTemplate,
                    children: /* @__PURE__ */ _jsx4(SVG2, {
                      className: "framer-1b0kmaq",
                      "data-framer-name": "icon",
                      layout: "position",
                      layoutDependency,
                      layoutId: "A4QRMsAMx",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 0.971 0 L 0.031 0.94 L 3.085 4 L 0.031 7.06 L 0.971 8 L 4.971 4 Z" fill="rgb(0,31,35)"></path></svg>',
                      svgContentId: 227539786,
                      withExternalLayout: true,
                      ...addPropertyOverrides2(
                        {
                          KDR2W3FAc: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 4.031 0 L 4.971 0.94 L 1.918 4 L 4.971 7.06 L 4.031 8 L 0.031 4 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                            svgContentId: 2477479149,
                          },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  });
});
var css3 = [
  '.framer-TCiri [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-TCiri .framer-1srx8tz { display: block; }",
  ".framer-TCiri .framer-34fava { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-TCiri .framer-1ooqcgs { flex: none; height: 32px; overflow: visible; position: relative; width: 52px; }",
  ".framer-TCiri .framer-5vfx9p { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",
  ".framer-TCiri .framer-fh6gm0 { flex: none; height: 48px; overflow: visible; position: absolute; right: -8px; top: calc(50% - 48px / 2); width: 48px; }",
  ".framer-TCiri .framer-j9yhje { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); width: 40px; }",
  ".framer-TCiri .framer-1jzmbae { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 50%; position: absolute; top: 50%; width: 24px; }",
  ".framer-TCiri .framer-2q425d { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 16px; }",
  ".framer-TCiri .framer-1b0kmaq { flex: none; height: 8px; left: 6px; position: absolute; top: 4px; width: 5px; }",
  ".framer-TCiri .framer-v-34fava .framer-34fava, .framer-TCiri .framer-v-dxxjoq .framer-34fava { cursor: pointer; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TCiri .framer-34fava { gap: 0px; } .framer-TCiri .framer-34fava > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-TCiri .framer-34fava > :first-child { margin-top: 0px; } .framer-TCiri .framer-34fava > :last-child { margin-bottom: 0px; } }",
  ".framer-TCiri.framer-v-dxxjoq .framer-fh6gm0 { bottom: -8px; height: unset; left: -8px; right: unset; top: -8px; }",
  ".framer-TCiri.framer-v-dxxjoq .framer-1jzmbae, .framer-TCiri.framer-v-34fava.hover .framer-1jzmbae { left: 50%; top: 50%; }",
  ".framer-TCiri.framer-v-dxxjoq.hover .framer-fh6gm0, .framer-TCiri.framer-v-dxxjoq.pressed .framer-fh6gm0 { height: unset; right: unset; }",
  ".framer-TCiri.framer-v-dxxjoq.pressed .framer-1jzmbae { height: var(--framer-aspect-ratio-supported, 28px); width: 28px; }",
];
var FramervvRGywRFH = withCSS4(Component2, css3, "framer-TCiri");
var stdin_default2 = FramervvRGywRFH;
FramervvRGywRFH.displayName = "Toggle";
FramervvRGywRFH.defaultProps = { height: 32, width: 52 };
addPropertyControls4(FramervvRGywRFH, {
  variant: {
    options: ["jy1UKfzw2", "KDR2W3FAc"],
    optionTitles: ["right", "left"],
    title: "Variant",
    type: ControlType7.Enum,
  },
});
addFonts2(FramervvRGywRFH, []);

// https:https://framerusercontent.com/modules/GuWa1Ud162ubWf1k1mKH/dBQfRNTkpNoLwYmhAT4y/FpOKcRGFb.js
var TypewriterFonts = getFonts(TypeWriter);
var SliderFonts = getFonts(Slider);
var RadioFonts = getFonts(stdin_default);
var ToggleFonts = getFonts(stdin_default2);
var cycleOrder3 = ["wHWVBWbCh", "u5YClbSTz", "cJW2ksH1e", "Wfe2yFy4g"];
var variantClassNames3 = {
  cJW2ksH1e: "framer-v-cameip",
  u5YClbSTz: "framer-v-bqdfuj",
  Wfe2yFy4g: "framer-v-ajsg1n",
  wHWVBWbCh: "framer-v-ubmi04",
};
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant])
      );
  return nextOverrides;
}
var transitions3 = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var negate = (value) => {
  return !value;
};
var numberToString = (value, options = {}, activeLocale) => {
  const fallbackLocale = "en-US";
  const locale = options.locale || activeLocale || fallbackLocale;
  const {
    useGrouping,
    notation,
    compactDisplay,
    style,
    currency,
    currencyDisplay,
    unit,
    unitDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumIntegerDigits,
  } = options;
  const formatOptions = {
    useGrouping,
    notation,
    compactDisplay,
    style,
    currency,
    currencyDisplay,
    unit,
    unitDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumIntegerDigits,
  };
  const number = Number(value);
  try {
    return number.toLocaleString(locale, formatOptions);
  } catch {
    try {
      return number.toLocaleString(fallbackLocale, formatOptions);
    } catch {
      return number.toLocaleString();
    }
  }
};
var convertFromEnum = (value) => {
  switch (value) {
    case "zAJDHJhkW":
      return "nPpSWwiWE";
    default:
      return "r5tWv5mqY";
  }
};
var convertFromEnum1 = (value) => {
  switch (value) {
    case "s7bcrIMxH":
      return "nPpSWwiWE";
    default:
      return "r5tWv5mqY";
  }
};
var convertFromEnum2 = (value) => {
  switch (value) {
    case "jmeUKm4BT":
      return "nPpSWwiWE";
    default:
      return "r5tWv5mqY";
  }
};
var convertFromBoolean = (value) => {
  if (value) {
    return "jy1UKfzw2";
  } else {
    return "KDR2W3FAc";
  }
};
var Transition3 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext3);
  const transition =
    value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)]
  );
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, {
    value: contextValue,
    children,
  });
};
var humanReadableVariantMap3 = {
  "Multiple Choice": "wHWVBWbCh",
  Boolean: "cJW2ksH1e",
  Input: "Wfe2yFy4g",
  Slider: "u5YClbSTz",
};
var getProps3 = ({
  booleanToggle,
  choice1,
  choice2,
  choice3,
  height,
  id,
  input,
  option,
  option1,
  option2,
  sliiderValue,
  streaming,
  title,
  width,
  ...props
}) => {
  var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, _variant, ref8, ref9;
  return {
    ...props,
    AA_oylHc1:
      booleanToggle !== null && booleanToggle !== void 0
        ? booleanToggle
        : props.AA_oylHc1,
    B9Ye7wHiX:
      (ref =
        choice1 !== null && choice1 !== void 0 ? choice1 : props.B9Ye7wHiX) !==
        null && ref !== void 0
        ? ref
        : "A",
    cib0E0Vb9:
      (ref1 =
        option2 !== null && option2 !== void 0 ? option2 : props.cib0E0Vb9) !==
        null && ref1 !== void 0
        ? ref1
        : "B",
    Cpm7YdhW6:
      (ref2 =
        option1 !== null && option1 !== void 0 ? option1 : props.Cpm7YdhW6) !==
        null && ref2 !== void 0
        ? ref2
        : "A",
    dxSidP8LF:
      (ref3 =
        choice3 !== null && choice3 !== void 0 ? choice3 : props.dxSidP8LF) !==
        null && ref3 !== void 0
        ? ref3
        : "C",
    eePEcZAuW:
      (ref4 =
        option !== null && option !== void 0 ? option : props.eePEcZAuW) !==
        null && ref4 !== void 0
        ? ref4
        : "zAJDHJhkW",
    Gu4Kp5hWx:
      (ref5 = title !== null && title !== void 0 ? title : props.Gu4Kp5hWx) !==
        null && ref5 !== void 0
        ? ref5
        : "Title",
    kRgq0jgQR:
      (ref6 =
        sliiderValue !== null && sliiderValue !== void 0
          ? sliiderValue
          : props.kRgq0jgQR) !== null && ref6 !== void 0
        ? ref6
        : 50,
    NPSt7VsjX:
      streaming !== null && streaming !== void 0 ? streaming : props.NPSt7VsjX,
    nQb7W3cjE:
      (ref7 = input !== null && input !== void 0 ? input : props.nQb7W3cjE) !==
        null && ref7 !== void 0
        ? ref7
        : "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
    variant:
      (ref8 =
        (_variant = humanReadableVariantMap3[props.variant]) !== null &&
        _variant !== void 0
          ? _variant
          : props.variant) !== null && ref8 !== void 0
        ? ref8
        : "wHWVBWbCh",
    yBMe3I4G7:
      (ref9 =
        choice2 !== null && choice2 !== void 0 ? choice2 : props.yBMe3I4G7) !==
        null && ref9 !== void 0
        ? ref9
        : "B",
  };
};
var createLayoutDependency3 = (props, variants) =>
  variants.join("-") + props.layoutDependency;
var Component3 = /* @__PURE__ */ React5.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo3();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    eePEcZAuW,
    kRgq0jgQR,
    Cpm7YdhW6,
    cib0E0Vb9,
    B9Ye7wHiX,
    yBMe3I4G7,
    dxSidP8LF,
    NPSt7VsjX,
    Gu4Kp5hWx,
    nQb7W3cjE,
    AA_oylHc1,
    ...restProps
  } = getProps3(props);
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: "wHWVBWbCh",
    transitions: transitions3,
    variant,
    variantClassNames: variantClassNames3,
  });
  const layoutDependency = createLayoutDependency3(props, variants);
  const isDisplayed = () => {
    if (baseVariant === "Wfe2yFy4g") {
      return false;
    }
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "u5YClbSTz") {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "u5YClbSTz") {
      return negate(NPSt7VsjX);
    }
    return true;
  };
  const activeLocaleCode = useLocaleCode();
  const isDisplayed3 = () => {
    if (baseVariant === "Wfe2yFy4g") {
      return true;
    }
    return false;
  };
  const isDisplayed4 = () => {
    if (baseVariant === "Wfe2yFy4g") {
      return negate(NPSt7VsjX);
    }
    return false;
  };
  const isDisplayed5 = () => {
    if (["u5YClbSTz", "cJW2ksH1e", "Wfe2yFy4g"].includes(baseVariant)) {
      return false;
    }
    return true;
  };
  const isDisplayed6 = () => {
    if (baseVariant === "cJW2ksH1e") {
      return true;
    }
    return false;
  };
  const isDisplayed7 = () => {
    if (baseVariant === "cJW2ksH1e") {
      return negate(NPSt7VsjX);
    }
    return true;
  };
  const isDisplayed8 = () => {
    if (baseVariant === "Wfe2yFy4g") {
      return NPSt7VsjX;
    }
    return true;
  };
  const isDisplayed9 = () => {
    if (baseVariant === "Wfe2yFy4g") {
      return negate(NPSt7VsjX);
    }
    return NPSt7VsjX;
  };
  const defaultLayoutId = React5.useId();
  return /* @__PURE__ */ _jsx5(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx5(motion4.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx3("framer-K8vtP", className, classNames),
      style: { display: "contents" },
      children: /* @__PURE__ */ _jsx5(Transition3, {
        value: transition,
        children: /* @__PURE__ */ _jsxs3(motion4.div, {
          ...restProps,
          className: cx3("framer-ubmi04", className2),
          "data-framer-name": "Multiple Choice",
          layoutDependency,
          layoutId: "wHWVBWbCh",
          ref,
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.13)",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            ...style,
          },
          ...addPropertyOverrides3(
            {
              cJW2ksH1e: { "data-framer-name": "Boolean" },
              u5YClbSTz: { "data-framer-name": "Slider" },
              Wfe2yFy4g: { "data-framer-name": "Input" },
            },
            baseVariant,
            gestureVariant
          ),
          children: [
            isDisplayed() &&
              /* @__PURE__ */ _jsxs3(motion4.div, {
                className: "framer-s8ik11",
                layoutDependency,
                layoutId: "ZML_QoWcQ",
                children: [
                  negate(NPSt7VsjX) &&
                    /* @__PURE__ */ _jsx5(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion4.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                            "--framer-font-family":
                              '"PP Supply Sans Medium", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-letter-spacing": "0px",
                            "--framer-line-height": "1.5em",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))",
                          },
                          children: "Title",
                        }),
                      }),
                      className: "framer-lyzunu",
                      "data-framer-name": "Label",
                      fonts: ["CUSTOM;PP Supply Sans Medium"],
                      layoutDependency,
                      layoutId: "wpRihfUy1",
                      style: {
                        "--extracted-r6o4lv": "rgba(16, 25, 66, 0.64)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      text: Gu4Kp5hWx,
                      verticalAlignment: "center",
                      withExternalLayout: true,
                      ...addPropertyOverrides3(
                        {
                          u5YClbSTz: {
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion4.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                                  "--framer-font-family":
                                    '"PP Supply Sans Medium", sans-serif',
                                  "--framer-font-size": "12px",
                                  "--framer-line-height": "1.5em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))",
                                },
                                children: "Title",
                              }),
                            }),
                          },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  NPSt7VsjX &&
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: "framer-12y26uo-container",
                      layoutDependency,
                      layoutId: "epUupU4HK-container",
                      children: /* @__PURE__ */ _jsx5(TypeWriter, {
                        autoStart: true,
                        caretVisibility: false,
                        color: "rgba(16, 25, 66, 0.64)",
                        cursor: "\u25CF",
                        cursorColor: "rgba(136, 136, 136, 0.5)",
                        delayNumber: 0.05,
                        delayType: false,
                        font: {
                          fontFamily: "PP Supply Sans Medium",
                          fontSize: 12,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.5,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: "left",
                          whiteSpace: "normal",
                        },
                        height: "100%",
                        id: "epUupU4HK",
                        layoutId: "epUupU4HK",
                        loop: false,
                        pauseFor: 0,
                        split: false,
                        style: { width: "100%" },
                        tag: "heading1",
                        text: Gu4Kp5hWx,
                        width: "100%",
                      }),
                    }),
                ],
              }),
            isDisplayed1() &&
              /* @__PURE__ */ _jsxs3(motion4.div, {
                className: "framer-19lcyrf",
                layoutDependency,
                layoutId: "j2bvRU3DL",
                children: [
                  isDisplayed2() &&
                    /* @__PURE__ */ _jsx5(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion4.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                            "--framer-font-family":
                              '"PP Supply Sans Medium", sans-serif',
                            "--framer-font-size": "10px",
                            "--framer-letter-spacing": "0.35px",
                            "--framer-line-height": "12px",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))",
                          },
                          children: "Scale-0",
                        }),
                      }),
                      className: "framer-1kpfvtt",
                      "data-framer-name": "Label",
                      fonts: ["CUSTOM;PP Supply Sans Medium"],
                      layoutDependency,
                      layoutId: "HjdLEywsW",
                      style: {
                        "--extracted-r6o4lv": "rgba(16, 25, 66, 0.64)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      text: Cpm7YdhW6,
                      verticalAlignment: "center",
                      withExternalLayout: true,
                    }),
                  NPSt7VsjX &&
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: "framer-6epta2-container",
                      layoutDependency,
                      layoutId: "GjyMm_jMc-container",
                      children: /* @__PURE__ */ _jsx5(TypeWriter, {
                        autoStart: true,
                        caretVisibility: false,
                        color: "rgb(16, 25, 66)",
                        cursor: "\u25CF",
                        cursorColor: "rgba(136, 136, 136, 0.5)",
                        delayNumber: 0.06,
                        delayType: false,
                        font: {
                          fontFamily: "PP Supply Sans Medium",
                          fontSize: 10,
                          fontWeight: 500,
                          letterSpacing: 0.35,
                          lineHeight: 1.2,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: "left",
                          whiteSpace: "nowrap",
                        },
                        height: "100%",
                        id: "GjyMm_jMc",
                        layoutId: "GjyMm_jMc",
                        loop: false,
                        pauseFor: 1,
                        split: false,
                        style: { width: "100%" },
                        tag: "heading1",
                        text: Cpm7YdhW6,
                        width: "100%",
                      }),
                    }),
                  /* @__PURE__ */ _jsx5(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                      children: /* @__PURE__ */ _jsx5(motion4.p, {
                        style: {
                          "--font-selector":
                            "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFNlbWlib2xk",
                          "--framer-font-family":
                            '"PP Supply Sans Semibold", sans-serif',
                          "--framer-font-size": "15px",
                          "--framer-letter-spacing": "0.35px",
                          "--framer-line-height": "12px",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))",
                        },
                        children: "A",
                      }),
                    }),
                    className: "framer-841zpz",
                    "data-framer-name": "Label",
                    fonts: ["CUSTOM;PP Supply Sans Semibold"],
                    layoutDependency,
                    layoutId: "SzC7v8nfP",
                    style: {
                      "--extracted-r6o4lv": "rgba(16, 25, 66, 0.64)",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: numberToString(
                      kRgq0jgQR,
                      { locale: "", notation: "standard", style: "decimal" },
                      activeLocaleCode
                    ),
                    verticalAlignment: "center",
                    withExternalLayout: true,
                  }),
                  isDisplayed2() &&
                    /* @__PURE__ */ _jsx5(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion4.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                            "--framer-font-family":
                              '"PP Supply Sans Medium", sans-serif',
                            "--framer-font-size": "10px",
                            "--framer-letter-spacing": "0.35px",
                            "--framer-line-height": "12px",
                            "--framer-text-alignment": "right",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))",
                          },
                          children: "Scale 1",
                        }),
                      }),
                      className: "framer-1fro32h",
                      "data-framer-name": "Label",
                      fonts: ["CUSTOM;PP Supply Sans Medium"],
                      layoutDependency,
                      layoutId: "hfdX7RAnj",
                      style: {
                        "--extracted-r6o4lv": "rgba(16, 25, 66, 0.64)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      text: cib0E0Vb9,
                      verticalAlignment: "center",
                      withExternalLayout: true,
                    }),
                  NPSt7VsjX &&
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: "framer-ii7jep-container",
                      layoutDependency,
                      layoutId: "RaG0o5JJN-container",
                      children: /* @__PURE__ */ _jsx5(TypeWriter, {
                        autoStart: true,
                        caretVisibility: false,
                        color: "rgb(16, 25, 66)",
                        cursor: "\u25CF",
                        cursorColor: "rgba(136, 136, 136, 0.5)",
                        delayNumber: 0.06,
                        delayType: false,
                        font: {
                          fontFamily: "PP Supply Sans Medium",
                          fontSize: 10,
                          fontWeight: 500,
                          letterSpacing: 0.35,
                          lineHeight: 1.2,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: "right",
                          whiteSpace: "nowrap",
                        },
                        height: "100%",
                        id: "RaG0o5JJN",
                        layoutId: "RaG0o5JJN",
                        loop: false,
                        pauseFor: 1,
                        split: false,
                        style: { width: "100%" },
                        tag: "heading1",
                        text: cib0E0Vb9,
                        width: "100%",
                      }),
                    }),
                ],
              }),
            isDisplayed3() &&
              /* @__PURE__ */ _jsxs3(motion4.div, {
                className: "framer-1vu5yst",
                layoutDependency,
                layoutId: "S6KvIs150",
                children: [
                  isDisplayed4() &&
                    /* @__PURE__ */ _jsx5(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion4.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                            "--framer-font-family":
                              '"PP Supply Sans Medium", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-letter-spacing": "0px",
                            "--framer-line-height": "1.5em",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))",
                          },
                          children: "Title",
                        }),
                      }),
                      className: "framer-1v7c9ix",
                      "data-framer-name": "Label",
                      fonts: ["CUSTOM;PP Supply Sans Medium"],
                      layoutDependency,
                      layoutId: "W06hdtuBX",
                      style: {
                        "--extracted-r6o4lv": "rgba(16, 25, 66, 0.64)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      text: Gu4Kp5hWx,
                      verticalAlignment: "center",
                      withExternalLayout: true,
                    }),
                  NPSt7VsjX &&
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: "framer-yrdgrn-container",
                      layoutDependency,
                      layoutId: "dFtUYLY7q-container",
                      children: /* @__PURE__ */ _jsx5(TypeWriter, {
                        autoStart: true,
                        caretVisibility: false,
                        color: "rgba(16, 25, 66, 0.64)",
                        cursor: "\u25CF",
                        cursorColor: "rgba(136, 136, 136, 0.5)",
                        delayNumber: 0.05,
                        delayType: false,
                        font: {
                          fontFamily: "PP Supply Sans Medium",
                          fontSize: 12,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.5,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: "left",
                          whiteSpace: "nowrap",
                        },
                        height: "100%",
                        id: "dFtUYLY7q",
                        layoutId: "dFtUYLY7q",
                        loop: false,
                        pauseFor: 0,
                        split: false,
                        style: { width: "100%" },
                        tag: "heading1",
                        text: Gu4Kp5hWx,
                        width: "100%",
                      }),
                    }),
                ],
              }),
            isDisplayed1() &&
              /* @__PURE__ */ _jsx5(motion4.div, {
                className: "framer-1cypg73",
                layoutDependency,
                layoutId: "W7v0dnOBr",
                children:
                  isDisplayed1() &&
                  /* @__PURE__ */ _jsx5(motion4.div, {
                    className: "framer-j34qcq-container",
                    layoutDependency,
                    layoutId: "y3OmF6OSb-container",
                    children: /* @__PURE__ */ _jsx5(Slider, {
                      constrainKnob: false,
                      fillColor: "rgb(0, 105, 115)",
                      height: "100%",
                      id: "y3OmF6OSb",
                      knobColor: "rgb(0, 89, 97)",
                      knobSetting: "Show",
                      knobSize: 16,
                      layoutId: "y3OmF6OSb",
                      max: 100,
                      min: 0,
                      shadow: "rgba(0, 0, 0, 0.1)",
                      shouldAnimateChange: true,
                      style: { width: "100%" },
                      trackColor: "rgb(221, 221, 221)",
                      trackHeight: 4,
                      trackRadius: 2,
                      transition: {
                        damping: 50,
                        delay: 0,
                        stiffness: 750,
                        type: "spring",
                      },
                      value: kRgq0jgQR,
                      width: "100%",
                    }),
                  }),
              }),
            isDisplayed5() &&
              /* @__PURE__ */ _jsxs3(motion4.div, {
                className: "framer-s5cdq5",
                layoutDependency,
                layoutId: "ueUtpSOCB",
                style: {
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
                children: [
                  /* @__PURE__ */ _jsxs3(motion4.div, {
                    className: "framer-crweby",
                    layoutDependency,
                    layoutId: "IvlCVPVPf",
                    children: [
                      /* @__PURE__ */ _jsx5(motion4.div, {
                        className: "framer-14jci97-container",
                        layoutDependency,
                        layoutId: "KJOwPbb8F-container",
                        children: /* @__PURE__ */ _jsx5(stdin_default, {
                          height: "100%",
                          id: "KJOwPbb8F",
                          layoutId: "KJOwPbb8F",
                          variant: convertFromEnum(eePEcZAuW),
                          width: "100%",
                        }),
                      }),
                      NPSt7VsjX &&
                        /* @__PURE__ */ _jsx5(motion4.div, {
                          className: "framer-1kyowmy-container",
                          layoutDependency,
                          layoutId: "v9pHCTSvV-container",
                          children: /* @__PURE__ */ _jsx5(TypeWriter, {
                            autoStart: true,
                            caretVisibility: false,
                            color:
                              'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                            cursor: "\u25CF",
                            cursorColor: "rgba(136, 136, 136, 0.5)",
                            delayNumber: 0.06,
                            delayType: false,
                            font: {
                              fontFamily: "PP Supply Sans Medium",
                              fontSize: 16,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: "left",
                              whiteSpace: "nowrap",
                            },
                            height: "100%",
                            id: "v9pHCTSvV",
                            layoutId: "v9pHCTSvV",
                            loop: false,
                            pauseFor: 1,
                            split: false,
                            style: { width: "100%" },
                            tag: "heading1",
                            text: B9Ye7wHiX,
                            width: "100%",
                          }),
                        }),
                      negate(NPSt7VsjX) &&
                        /* @__PURE__ */ _jsx5(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                            children: /* @__PURE__ */ _jsx5(motion4.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                                "--framer-font-family":
                                  '"PP Supply Sans Medium", sans-serif',
                                "--framer-letter-spacing": "0.04em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))",
                              },
                              children: "Content",
                            }),
                          }),
                          className: "framer-2mo03c",
                          "data-framer-name": "Board Dimensions",
                          fonts: ["CUSTOM;PP Supply Sans Medium"],
                          layoutDependency,
                          layoutId: "Y2BGHzsNx",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          text: B9Ye7wHiX,
                          verticalAlignment: "center",
                          withExternalLayout: true,
                        }),
                    ],
                  }),
                  /* @__PURE__ */ _jsxs3(motion4.div, {
                    className: "framer-1ferc8i",
                    layoutDependency,
                    layoutId: "R905nnpUi",
                    children: [
                      /* @__PURE__ */ _jsx5(motion4.div, {
                        className: "framer-1hj9m21-container",
                        layoutDependency,
                        layoutId: "nN3lKdmks-container",
                        children: /* @__PURE__ */ _jsx5(stdin_default, {
                          height: "100%",
                          id: "nN3lKdmks",
                          layoutId: "nN3lKdmks",
                          variant: convertFromEnum1(eePEcZAuW),
                          width: "100%",
                        }),
                      }),
                      NPSt7VsjX &&
                        /* @__PURE__ */ _jsx5(motion4.div, {
                          className: "framer-1ofvx9w-container",
                          layoutDependency,
                          layoutId: "rDpMrm8Tz-container",
                          children: /* @__PURE__ */ _jsx5(TypeWriter, {
                            autoStart: true,
                            caretVisibility: false,
                            color:
                              'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                            cursor: "\u25CF",
                            cursorColor: "rgba(136, 136, 136, 0.5)",
                            delayNumber: 0.06,
                            delayType: false,
                            font: {
                              fontFamily: "PP Supply Sans Medium",
                              fontSize: 16,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: "left",
                              whiteSpace: "nowrap",
                            },
                            height: "100%",
                            id: "rDpMrm8Tz",
                            layoutId: "rDpMrm8Tz",
                            loop: false,
                            pauseFor: 1,
                            split: false,
                            style: { width: "100%" },
                            tag: "heading1",
                            text: yBMe3I4G7,
                            width: "100%",
                          }),
                        }),
                      negate(NPSt7VsjX) &&
                        /* @__PURE__ */ _jsx5(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                            children: /* @__PURE__ */ _jsx5(motion4.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                                "--framer-font-family":
                                  '"PP Supply Sans Medium", sans-serif',
                                "--framer-letter-spacing": "0.04em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))",
                              },
                              children: "Content",
                            }),
                          }),
                          className: "framer-1yflnix",
                          "data-framer-name": "Board Dimensions",
                          fonts: ["CUSTOM;PP Supply Sans Medium"],
                          layoutDependency,
                          layoutId: "qTrBDLko2",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          text: yBMe3I4G7,
                          verticalAlignment: "center",
                          withExternalLayout: true,
                        }),
                    ],
                  }),
                  /* @__PURE__ */ _jsxs3(motion4.div, {
                    className: "framer-m3o52p",
                    layoutDependency,
                    layoutId: "fTVGy5qSW",
                    children: [
                      /* @__PURE__ */ _jsx5(motion4.div, {
                        className: "framer-1tqvnrb-container",
                        layoutDependency,
                        layoutId: "TK5DtHbAx-container",
                        children: /* @__PURE__ */ _jsx5(stdin_default, {
                          height: "100%",
                          id: "TK5DtHbAx",
                          layoutId: "TK5DtHbAx",
                          variant: convertFromEnum2(eePEcZAuW),
                          width: "100%",
                        }),
                      }),
                      NPSt7VsjX &&
                        /* @__PURE__ */ _jsx5(motion4.div, {
                          className: "framer-qqau2w-container",
                          layoutDependency,
                          layoutId: "Vz4vSXp4B-container",
                          children: /* @__PURE__ */ _jsx5(TypeWriter, {
                            autoStart: true,
                            caretVisibility: false,
                            color:
                              'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                            cursor: "\u25CF",
                            cursorColor: "rgba(136, 136, 136, 0.5)",
                            delayNumber: 0.06,
                            delayType: false,
                            font: {
                              fontFamily: "PP Supply Sans Medium",
                              fontSize: 16,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: "left",
                              whiteSpace: "nowrap",
                            },
                            height: "100%",
                            id: "Vz4vSXp4B",
                            layoutId: "Vz4vSXp4B",
                            loop: false,
                            pauseFor: 1,
                            split: false,
                            style: { width: "100%" },
                            tag: "heading1",
                            text: dxSidP8LF,
                            width: "100%",
                          }),
                        }),
                      negate(NPSt7VsjX) &&
                        /* @__PURE__ */ _jsx5(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                            children: /* @__PURE__ */ _jsx5(motion4.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                                "--framer-font-family":
                                  '"PP Supply Sans Medium", sans-serif',
                                "--framer-letter-spacing": "0.04em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))",
                              },
                              children: "Content",
                            }),
                          }),
                          className: "framer-yxub92",
                          "data-framer-name": "Board Dimensions",
                          fonts: ["CUSTOM;PP Supply Sans Medium"],
                          layoutDependency,
                          layoutId: "o55iN1S8J",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          text: dxSidP8LF,
                          verticalAlignment: "center",
                          withExternalLayout: true,
                        }),
                    ],
                  }),
                ],
              }),
            isDisplayed6() &&
              /* @__PURE__ */ _jsx5(motion4.div, {
                className: "framer-11t7ch5",
                layoutDependency,
                layoutId: "gqRV57KH3",
                style: {
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
                children: /* @__PURE__ */ _jsxs3(motion4.div, {
                  className: "framer-mydmw0",
                  layoutDependency,
                  layoutId: "a3_Mf4FDG",
                  children: [
                    isDisplayed7() &&
                      /* @__PURE__ */ _jsx5(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                          children: /* @__PURE__ */ _jsx5(motion4.h4, {
                            className: "framer-styles-preset-90m2e0",
                            "data-styles-preset": "ydC9w7qn8",
                            children: "text",
                          }),
                        }),
                        className: "framer-1d8zajo",
                        "data-framer-name": "Board Dimensions",
                        layoutDependency,
                        layoutId: "gc4hJG9iZ",
                        style: { "--framer-paragraph-spacing": "0px" },
                        text: Cpm7YdhW6,
                        verticalAlignment: "center",
                        withExternalLayout: true,
                      }),
                    NPSt7VsjX &&
                      /* @__PURE__ */ _jsx5(motion4.div, {
                        className: "framer-sbe7bz-container",
                        layoutDependency,
                        layoutId: "aKuf_fMd7-container",
                        children: /* @__PURE__ */ _jsx5(TypeWriter, {
                          autoStart: true,
                          caretVisibility: false,
                          color:
                            'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                          cursor: "\u25CF",
                          cursorColor: "rgba(136, 136, 136, 0.5)",
                          delayNumber: 0.06,
                          delayType: false,
                          font: {
                            fontFamily: "PP Supply Sans Medium",
                            fontSize: 16,
                            fontWeight: 500,
                            letterSpacing: 0,
                            lineHeight: 1.2,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: "left",
                            whiteSpace: "nowrap",
                          },
                          height: "100%",
                          id: "aKuf_fMd7",
                          layoutId: "aKuf_fMd7",
                          loop: false,
                          pauseFor: 1,
                          split: false,
                          style: { width: "100%" },
                          tag: "heading1",
                          text: Cpm7YdhW6,
                          width: "100%",
                        }),
                      }),
                    isDisplayed7() &&
                      /* @__PURE__ */ _jsx5(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                          children: /* @__PURE__ */ _jsx5(motion4.h4, {
                            className: "framer-styles-preset-90m2e0",
                            "data-styles-preset": "ydC9w7qn8",
                            style: { "--framer-text-alignment": "right" },
                            children: "Option 2",
                          }),
                        }),
                        className: "framer-eva85o",
                        "data-framer-name": "Board Dimensions",
                        layoutDependency,
                        layoutId: "nHQ0UoEPv",
                        style: { "--framer-paragraph-spacing": "0px" },
                        text: cib0E0Vb9,
                        verticalAlignment: "center",
                        withExternalLayout: true,
                      }),
                    NPSt7VsjX &&
                      /* @__PURE__ */ _jsx5(motion4.div, {
                        className: "framer-13ltp5y-container",
                        layoutDependency,
                        layoutId: "ddVwnbWnZ-container",
                        children: /* @__PURE__ */ _jsx5(TypeWriter, {
                          autoStart: true,
                          caretVisibility: false,
                          color:
                            'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                          cursor: "\u25CF",
                          cursorColor: "rgba(136, 136, 136, 0.5)",
                          delayNumber: 0.06,
                          delayType: false,
                          font: {
                            fontFamily: "PP Supply Sans Medium",
                            fontSize: 16,
                            fontWeight: 500,
                            letterSpacing: 0,
                            lineHeight: 1.2,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: "right",
                            whiteSpace: "nowrap",
                          },
                          height: "100%",
                          id: "ddVwnbWnZ",
                          layoutId: "ddVwnbWnZ",
                          loop: false,
                          pauseFor: 1,
                          split: false,
                          style: { width: "100%" },
                          tag: "heading1",
                          text: cib0E0Vb9,
                          width: "100%",
                        }),
                      }),
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: "framer-11ipqiw-container",
                      layoutDependency,
                      layoutId: "pYbKGMi0I-container",
                      children: /* @__PURE__ */ _jsx5(stdin_default2, {
                        height: "100%",
                        id: "pYbKGMi0I",
                        layoutId: "pYbKGMi0I",
                        variant: convertFromBoolean(AA_oylHc1),
                        width: "100%",
                      }),
                    }),
                  ],
                }),
              }),
            isDisplayed3() &&
              /* @__PURE__ */ _jsx5(motion4.div, {
                className: "framer-1cyqgqh",
                "data-framer-name": "Input",
                layoutDependency,
                layoutId: "nImH06vgx",
                style: {
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
                children: /* @__PURE__ */ _jsxs3(motion4.div, {
                  className: "framer-o1k220",
                  "data-framer-name": "Content",
                  layoutDependency,
                  layoutId: "EbqS70Gxh",
                  children: [
                    isDisplayed8() &&
                      /* @__PURE__ */ _jsx5(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                          children: /* @__PURE__ */ _jsx5(motion4.p, {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                              "--framer-font-family":
                                '"PP Supply Sans Light", sans-serif',
                              "--framer-letter-spacing": "0.5px",
                              "--framer-line-height": "1.5em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))",
                            },
                            children:
                              "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                          }),
                        }),
                        className: "framer-ivgzyi",
                        "data-framer-name": "Value",
                        fonts: ["CUSTOM;PP Supply Sans Light"],
                        layoutDependency,
                        layoutId: "sytYy87Uv",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        text: nQb7W3cjE,
                        verticalAlignment: "top",
                        withExternalLayout: true,
                      }),
                    isDisplayed9() &&
                      /* @__PURE__ */ _jsx5(motion4.div, {
                        className: "framer-5wsa7o-container",
                        layoutDependency,
                        layoutId: "jC8ftCsb3-container",
                        children: /* @__PURE__ */ _jsx5(TypeWriter, {
                          autoStart: true,
                          caretVisibility: false,
                          color:
                            'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                          cursor: "|",
                          cursorColor: "rgba(136, 136, 136, 0.5)",
                          delayNumber: 0.1,
                          delayType: false,
                          font: {
                            fontFamily: "PP Supply Sans Light",
                            fontSize: 16,
                            fontWeight: 500,
                            letterSpacing: 0.5,
                            lineHeight: 1.5,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: "left",
                            whiteSpace: "normal",
                          },
                          height: "100%",
                          id: "jC8ftCsb3",
                          layoutId: "jC8ftCsb3",
                          loop: true,
                          pauseFor: 2,
                          split: false,
                          style: { width: "100%" },
                          tag: "heading1",
                          text: nQb7W3cjE,
                          width: "100%",
                        }),
                      }),
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: "framer-15wkik3",
                      "data-framer-name": "Adorn. End Container",
                      layoutDependency,
                      layoutId: "lZW8el5CE",
                      children: /* @__PURE__ */ _jsx5(motion4.div, {
                        className: "framer-9cc7lb",
                        "data-framer-name": "AdornmentEnd",
                        layoutDependency,
                        layoutId: "gXObIIVW8",
                        children: /* @__PURE__ */ _jsx5(SVG3, {
                          className: "framer-3bebcg",
                          "data-framer-name": "Vector",
                          layout: "position",
                          layoutDependency,
                          layoutId: "ZAN56s7P_",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><path d="M 1.967 15.5 L 3.04 15.5 L 12.934 5.606 L 11.861 4.533 L 1.967 14.427 Z M 15.074 4.887 L 12.574 2.398 L 13.782 1.19 C 13.986 0.987 14.229 0.885 14.512 0.885 C 14.795 0.885 15.038 0.987 15.242 1.19 L 16.276 2.225 C 16.48 2.429 16.584 2.67 16.588 2.949 C 16.592 3.228 16.492 3.469 16.288 3.673 Z M 14.355 5.612 L 3.467 16.5 L 0.967 16.5 L 0.967 14 L 11.855 3.112 Z M 12.388 5.06 L 11.861 4.533 L 12.934 5.606 Z" fill="var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {&quot;name&quot;:&quot;Space&quot;} */"></path></svg>',
                          svgContentId: 1338201683,
                          withExternalLayout: true,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
          ],
        }),
      }),
    }),
  });
});
var css4 = [
  '.framer-K8vtP [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-K8vtP .framer-17k9lcm { display: block; }",
  ".framer-K8vtP .framer-ubmi04 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-K8vtP .framer-s8ik11 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 10px 0px 10px; position: relative; width: auto; }",
  ".framer-K8vtP .framer-lyzunu, .framer-K8vtP .framer-1kpfvtt, .framer-K8vtP .framer-841zpz, .framer-K8vtP .framer-1fro32h { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
  ".framer-K8vtP .framer-12y26uo-container, .framer-K8vtP .framer-6epta2-container, .framer-K8vtP .framer-ii7jep-container, .framer-K8vtP .framer-j34qcq-container, .framer-K8vtP .framer-1kyowmy-container, .framer-K8vtP .framer-1ofvx9w-container, .framer-K8vtP .framer-qqau2w-container, .framer-K8vtP .framer-sbe7bz-container, .framer-K8vtP .framer-13ltp5y-container, .framer-K8vtP .framer-5wsa7o-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
  ".framer-K8vtP .framer-19lcyrf { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 9px 10px; position: relative; width: auto; }",
  ".framer-K8vtP .framer-1vu5yst { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 201px; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }",
  ".framer-K8vtP .framer-1v7c9ix { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
  ".framer-K8vtP .framer-yrdgrn-container { flex: none; height: auto; position: relative; width: 100%; }",
  ".framer-K8vtP .framer-1cypg73 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 24px; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }",
  ".framer-K8vtP .framer-s5cdq5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 5px 0px 5px 0px; position: relative; width: 277px; }",
  ".framer-K8vtP .framer-crweby, .framer-K8vtP .framer-1ferc8i, .framer-K8vtP .framer-m3o52p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
  ".framer-K8vtP .framer-14jci97-container, .framer-K8vtP .framer-1hj9m21-container, .framer-K8vtP .framer-1tqvnrb-container, .framer-K8vtP .framer-11ipqiw-container { flex: none; height: auto; position: relative; width: auto; }",
  ".framer-K8vtP .framer-2mo03c, .framer-K8vtP .framer-1yflnix, .framer-K8vtP .framer-yxub92, .framer-K8vtP .framer-1d8zajo, .framer-K8vtP .framer-eva85o { flex: 1 0 0px; height: 24px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
  ".framer-K8vtP .framer-11t7ch5 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 8px 12px 8px 12px; position: relative; width: auto; }",
  ".framer-K8vtP .framer-mydmw0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 213px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
  ".framer-K8vtP .framer-1cyqgqh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 9px 12px 8px 12px; position: relative; width: min-content; }",
  ".framer-K8vtP .framer-o1k220 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 253px; }",
  ".framer-K8vtP .framer-ivgzyi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 221px; word-break: break-word; word-wrap: break-word; }",
  ".framer-K8vtP .framer-15wkik3 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-K8vtP .framer-9cc7lb { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; }",
  ".framer-K8vtP .framer-3bebcg { flex: none; height: 17px; left: 4px; position: absolute; top: 4px; width: 17px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-K8vtP .framer-ubmi04, .framer-K8vtP .framer-s8ik11, .framer-K8vtP .framer-19lcyrf, .framer-K8vtP .framer-1vu5yst, .framer-K8vtP .framer-1cypg73, .framer-K8vtP .framer-s5cdq5, .framer-K8vtP .framer-crweby, .framer-K8vtP .framer-1ferc8i, .framer-K8vtP .framer-m3o52p, .framer-K8vtP .framer-1cyqgqh, .framer-K8vtP .framer-o1k220, .framer-K8vtP .framer-15wkik3 { gap: 0px; } .framer-K8vtP .framer-ubmi04 > *, .framer-K8vtP .framer-s5cdq5 > *, .framer-K8vtP .framer-15wkik3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-K8vtP .framer-ubmi04 > :first-child, .framer-K8vtP .framer-1vu5yst > :first-child, .framer-K8vtP .framer-s5cdq5 > :first-child, .framer-K8vtP .framer-1cyqgqh > :first-child, .framer-K8vtP .framer-15wkik3 > :first-child { margin-top: 0px; } .framer-K8vtP .framer-ubmi04 > :last-child, .framer-K8vtP .framer-1vu5yst > :last-child, .framer-K8vtP .framer-s5cdq5 > :last-child, .framer-K8vtP .framer-1cyqgqh > :last-child, .framer-K8vtP .framer-15wkik3 > :last-child { margin-bottom: 0px; } .framer-K8vtP .framer-s8ik11 > *, .framer-K8vtP .framer-19lcyrf > *, .framer-K8vtP .framer-1cypg73 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-K8vtP .framer-s8ik11 > :first-child, .framer-K8vtP .framer-19lcyrf > :first-child, .framer-K8vtP .framer-1cypg73 > :first-child, .framer-K8vtP .framer-crweby > :first-child, .framer-K8vtP .framer-1ferc8i > :first-child, .framer-K8vtP .framer-m3o52p > :first-child, .framer-K8vtP .framer-o1k220 > :first-child { margin-left: 0px; } .framer-K8vtP .framer-s8ik11 > :last-child, .framer-K8vtP .framer-19lcyrf > :last-child, .framer-K8vtP .framer-1cypg73 > :last-child, .framer-K8vtP .framer-crweby > :last-child, .framer-K8vtP .framer-1ferc8i > :last-child, .framer-K8vtP .framer-m3o52p > :last-child, .framer-K8vtP .framer-o1k220 > :last-child { margin-right: 0px; } .framer-K8vtP .framer-1vu5yst > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-K8vtP .framer-crweby > *, .framer-K8vtP .framer-1ferc8i > *, .framer-K8vtP .framer-m3o52p > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-K8vtP .framer-1cyqgqh > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-K8vtP .framer-o1k220 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }",
  ".framer-K8vtP.framer-v-bqdfuj .framer-ubmi04 { width: 203px; }",
  ".framer-K8vtP.framer-v-bqdfuj .framer-s8ik11, .framer-K8vtP.framer-v-cameip .framer-s8ik11 { align-self: unset; order: 0; width: 100%; }",
  ".framer-K8vtP.framer-v-bqdfuj .framer-19lcyrf { align-self: unset; order: 2; width: 100%; }",
  ".framer-K8vtP.framer-v-bqdfuj .framer-1cypg73 { align-self: unset; min-height: unset; order: 1; width: 100%; }",
  ".framer-K8vtP.framer-v-cameip .framer-ubmi04 { width: 243px; }",
  ".framer-K8vtP.framer-v-cameip .framer-11t7ch5 { align-self: unset; order: 3; width: 100%; }",
  ".framer-K8vtP.framer-v-cameip .framer-mydmw0 { height: 32px; order: 0; }",
  ".framer-K8vtP.framer-v-cameip .framer-1d8zajo { order: 0; }",
  ".framer-K8vtP.framer-v-cameip .framer-sbe7bz-container { order: 1; }",
  ".framer-K8vtP.framer-v-cameip .framer-eva85o { order: 3; }",
  ".framer-K8vtP.framer-v-cameip .framer-13ltp5y-container, .framer-K8vtP.framer-v-ajsg1n .framer-1cyqgqh { order: 4; }",
  ".framer-K8vtP.framer-v-cameip .framer-11ipqiw-container { order: 2; }",
  ".framer-K8vtP.framer-v-ajsg1n .framer-ubmi04 { width: 277px; }",
  ".framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst { align-self: unset; flex-direction: row; min-height: unset; order: 0; width: 100%; }",
  ".framer-K8vtP.framer-v-ajsg1n .framer-1v7c9ix, .framer-K8vtP.framer-v-ajsg1n .framer-yrdgrn-container { flex: 1 0 0px; width: 1px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst { gap: 0px; } .framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst > :first-child { margin-left: 0px; } .framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst > :last-child { margin-right: 0px; } }",
  ...css,
];
var FramerFpOKcRGFb = withCSS5(Component3, css4, "framer-K8vtP");
var stdin_default3 = FramerFpOKcRGFb;
FramerFpOKcRGFb.displayName = "node-type";
FramerFpOKcRGFb.defaultProps = { height: 134, width: 277 };
addPropertyControls5(FramerFpOKcRGFb, {
  variant: {
    options: ["wHWVBWbCh", "u5YClbSTz", "cJW2ksH1e", "Wfe2yFy4g"],
    optionTitles: ["Multiple Choice", "Slider", "Boolean", "Input"],
    title: "Variant",
    type: ControlType8.Enum,
  },
  eePEcZAuW: {
    defaultValue: "zAJDHJhkW",
    options: ["zAJDHJhkW", "s7bcrIMxH", "jmeUKm4BT"],
    optionTitles: ["Option 1", "Option 2", "Option 3"],
    title: "Option",
    type: ControlType8.Enum,
  },
  kRgq0jgQR: {
    defaultValue: 50,
    displayStepper: false,
    max: 100,
    min: 0,
    title: "Sliider Value",
    type: ControlType8.Number,
  },
  Cpm7YdhW6: {
    defaultValue: "A",
    placeholder: "A",
    title: "Option 1",
    type: ControlType8.String,
  },
  cib0E0Vb9: {
    defaultValue: "B",
    displayTextArea: false,
    placeholder: "B",
    title: "Option 2",
    type: ControlType8.String,
  },
  B9Ye7wHiX: {
    defaultValue: "A",
    placeholder: "A",
    title: "Choice 1",
    type: ControlType8.String,
  },
  yBMe3I4G7: {
    defaultValue: "B",
    placeholder: "B",
    title: "Choice 2",
    type: ControlType8.String,
  },
  dxSidP8LF: {
    defaultValue: "C",
    placeholder: "C",
    title: "Choice 3",
    type: ControlType8.String,
  },
  NPSt7VsjX: {
    defaultValue: false,
    title: "Streaming",
    type: ControlType8.Boolean,
  },
  Gu4Kp5hWx: {
    defaultValue: "Title",
    displayTextArea: false,
    placeholder: "Title",
    title: "Title",
    type: ControlType8.String,
  },
  nQb7W3cjE: {
    defaultValue: "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
    displayTextArea: true,
    title: "Input",
    type: ControlType8.String,
  },
  AA_oylHc1: {
    defaultValue: false,
    title: "Boolean Toggle",
    type: ControlType8.Boolean,
  },
});
addFonts3(FramerFpOKcRGFb, [
  {
    family: "PP Supply Sans Medium",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/FpOKcRGFb:default",
      url: "https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf",
    },
    url: "https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf",
  },
  {
    family: "PP Supply Sans Semibold",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/FpOKcRGFb:default",
      url: "https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf",
    },
    url: "https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf",
  },
  {
    family: "PP Supply Sans Light",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/FpOKcRGFb:default",
      url: "https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf",
    },
    url: "https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf",
  },
  ...TypewriterFonts,
  ...SliderFonts,
  ...RadioFonts,
  ...ToggleFonts,
  ...fonts,
]);

// https:https://framerusercontent.com/modules/Oud72c2V1Mr3Jz9fGInx/qkveW7SAAKvEXBiUiufl/C_odUWZqr.js
var TypewriterFonts2 = getFonts2(TypeWriter);
var NodeTypeFonts = getFonts2(stdin_default3);
var NodeTypeControls = getPropertyControls(stdin_default3);
var cycleOrder4 = [
  "glP89HQPH",
  "PvhAKPvc8",
  "uyxhsUNZq",
  "uTj0cEPb8",
  "vVjMhdARB",
  "K8oqZ2hdT",
  "QKKRwxza_",
  "l6T5PxAnq",
  "FXIjKjDPL",
  "tVxl2ewSx",
  "z1ffbxAcs",
];
var variantClassNames4 = {
  FXIjKjDPL: "framer-v-w4miu7",
  glP89HQPH: "framer-v-15k1mix",
  K8oqZ2hdT: "framer-v-1khlikx",
  l6T5PxAnq: "framer-v-40zvo0",
  PvhAKPvc8: "framer-v-1fc3t3a",
  QKKRwxza_: "framer-v-18q1m16",
  tVxl2ewSx: "framer-v-1kuanhy",
  uTj0cEPb8: "framer-v-1a8pern",
  uyxhsUNZq: "framer-v-tlkqch",
  vVjMhdARB: "framer-v-uax94b",
  z1ffbxAcs: "framer-v-uiz0vr",
};
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant])
      );
  return nextOverrides;
}
var transitions4 = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var transformTemplate2 = (_, t) => `translateY(-50%) ${t}`;
var negate2 = (value) => {
  return !value;
};
var convertFromEnum3 = (value) => {
  switch (value) {
    case "FNw58JHcH":
      return "Wfe2yFy4g";
    case "pXF5zK4BB":
      return "u5YClbSTz";
    case "hjUA_q4Xo":
      return "wHWVBWbCh";
    case "R8yTQtly5":
      return "cJW2ksH1e";
    default:
      return void 0;
  }
};
var Transition4 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext4);
  const transition =
    value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React6.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)]
  );
  return /* @__PURE__ */ _jsx6(MotionConfigContext4.Provider, {
    value: contextValue,
    children,
  });
};
var humanReadableVariantMap4 = {
  "Node-LG": "uTj0cEPb8",
  "Node-MD": "vVjMhdARB",
  "Node-SM": "K8oqZ2hdT",
  "Node-XL": "uyxhsUNZq",
  "Node-XS": "QKKRwxza_",
  "Variant 10": "tVxl2ewSx",
  "Variant 13": "z1ffbxAcs",
  "Variant 8": "l6T5PxAnq",
  Expanded: "glP89HQPH",
  Hover: "PvhAKPvc8",
  Line: "FXIjKjDPL",
};
var getProps4 = ({
  booleanToggle,
  choice,
  choice1,
  choice2,
  choice3,
  color,
  decisionDescription,
  decisionIndex,
  decisionTitle,
  decisionType,
  dependencyIndex1,
  dependencyIndex2,
  dependencyIndex3,
  dependencyVisible,
  height,
  id,
  input,
  scaleX1,
  scaleX2,
  sliderValue,
  streaming,
  width,
  ...props
}) => {
  var ref,
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8,
    ref9,
    ref10,
    ref11,
    ref12,
    ref13,
    ref14,
    _variant,
    ref15,
    ref16,
    ref17,
    ref18,
    ref19;
  return {
    ...props,
    bGyluXMcm:
      (ref =
        dependencyIndex3 !== null && dependencyIndex3 !== void 0
          ? dependencyIndex3
          : props.bGyluXMcm) !== null && ref !== void 0
        ? ref
        : "C-2",
    C0xbi_CXP:
      (ref1 =
        scaleX2 !== null && scaleX2 !== void 0 ? scaleX2 : props.C0xbi_CXP) !==
        null && ref1 !== void 0
        ? ref1
        : "B",
    cRMlaJb1_:
      (ref2 = color !== null && color !== void 0 ? color : props.cRMlaJb1_) !==
        null && ref2 !== void 0
        ? ref2
        : 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
    eZ_WIO8yz:
      (ref3 =
        choice3 !== null && choice3 !== void 0 ? choice3 : props.eZ_WIO8yz) !==
        null && ref3 !== void 0
        ? ref3
        : "Choice 3",
    fxy_09app:
      (ref4 = input !== null && input !== void 0 ? input : props.fxy_09app) !==
        null && ref4 !== void 0
        ? ref4
        : "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
    iDjlfHFIv:
      (ref5 =
        decisionIndex !== null && decisionIndex !== void 0
          ? decisionIndex
          : props.iDjlfHFIv) !== null && ref5 !== void 0
        ? ref5
        : "C-2",
    Jdv7M1lr6:
      (ref6 =
        scaleX1 !== null && scaleX1 !== void 0 ? scaleX1 : props.Jdv7M1lr6) !==
        null && ref6 !== void 0
        ? ref6
        : "A",
    JM8R5zcqV:
      (ref7 =
        booleanToggle !== null && booleanToggle !== void 0
          ? booleanToggle
          : props.JM8R5zcqV) !== null && ref7 !== void 0
        ? ref7
        : true,
    k4ezTegiq:
      (ref8 =
        sliderValue !== null && sliderValue !== void 0
          ? sliderValue
          : props.k4ezTegiq) !== null && ref8 !== void 0
        ? ref8
        : 50,
    K5BysgXsx:
      (ref9 =
        choice !== null && choice !== void 0 ? choice : props.K5BysgXsx) !==
        null && ref9 !== void 0
        ? ref9
        : "zAJDHJhkW",
    LNNJy1jnm:
      (ref10 =
        decisionType !== null && decisionType !== void 0
          ? decisionType
          : props.LNNJy1jnm) !== null && ref10 !== void 0
        ? ref10
        : "FNw58JHcH",
    NvMMjvlBy:
      (ref11 =
        decisionDescription !== null && decisionDescription !== void 0
          ? decisionDescription
          : props.NvMMjvlBy) !== null && ref11 !== void 0
        ? ref11
        : "Please provide the dimensions of the drawing board (width, height, and depth).",
    OJMet4Rjs:
      (ref12 =
        choice1 !== null && choice1 !== void 0 ? choice1 : props.OJMet4Rjs) !==
        null && ref12 !== void 0
        ? ref12
        : "Choice 1",
    qQ_BO9qk8:
      (ref13 =
        choice2 !== null && choice2 !== void 0 ? choice2 : props.qQ_BO9qk8) !==
        null && ref13 !== void 0
        ? ref13
        : "Choice 2",
    TTpsRmZqr:
      (ref14 =
        dependencyVisible !== null && dependencyVisible !== void 0
          ? dependencyVisible
          : props.TTpsRmZqr) !== null && ref14 !== void 0
        ? ref14
        : true,
    variant:
      (ref15 =
        (_variant = humanReadableVariantMap4[props.variant]) !== null &&
        _variant !== void 0
          ? _variant
          : props.variant) !== null && ref15 !== void 0
        ? ref15
        : "glP89HQPH",
    VOTcq87Vu:
      (ref16 =
        streaming !== null && streaming !== void 0
          ? streaming
          : props.VOTcq87Vu) !== null && ref16 !== void 0
        ? ref16
        : true,
    vZATQhujj:
      (ref17 =
        decisionTitle !== null && decisionTitle !== void 0
          ? decisionTitle
          : props.vZATQhujj) !== null && ref17 !== void 0
        ? ref17
        : "Board Dimensions",
    Xo22rvSfa:
      (ref18 =
        dependencyIndex2 !== null && dependencyIndex2 !== void 0
          ? dependencyIndex2
          : props.Xo22rvSfa) !== null && ref18 !== void 0
        ? ref18
        : "B-2",
    Z93yscm8P:
      (ref19 =
        dependencyIndex1 !== null && dependencyIndex1 !== void 0
          ? dependencyIndex1
          : props.Z93yscm8P) !== null && ref19 !== void 0
        ? ref19
        : "A-1",
  };
};
var createLayoutDependency4 = (props, variants) =>
  variants.join("-") + props.layoutDependency;
var Component4 = /* @__PURE__ */ React6.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo4();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    vZATQhujj,
    NvMMjvlBy,
    iDjlfHFIv,
    LNNJy1jnm,
    K5BysgXsx,
    OJMet4Rjs,
    qQ_BO9qk8,
    eZ_WIO8yz,
    Jdv7M1lr6,
    C0xbi_CXP,
    k4ezTegiq,
    VOTcq87Vu,
    fxy_09app,
    JM8R5zcqV,
    cRMlaJb1_,
    Z93yscm8P,
    Xo22rvSfa,
    bGyluXMcm,
    TTpsRmZqr,
    ...restProps
  } = getProps4(props);
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: "glP89HQPH",
    transitions: transitions4,
    variant,
    variantClassNames: variantClassNames4,
  });
  const layoutDependency = createLayoutDependency4(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback3(baseVariant);
  const onTap141kr03 = activeVariantCallback(async (...args) => {
    setVariant("glP89HQPH");
  });
  const onMouseEnterp9axab = activeVariantCallback(async (...args) => {
    setVariant("PvhAKPvc8");
  });
  const isDisplayed = () => {
    if (["tVxl2ewSx", "z1ffbxAcs"].includes(baseVariant)) {
      return true;
    }
    return false;
  };
  const isDisplayed1 = () => {
    if (
      [
        "uyxhsUNZq",
        "uTj0cEPb8",
        "vVjMhdARB",
        "K8oqZ2hdT",
        "QKKRwxza_",
        "FXIjKjDPL",
        "tVxl2ewSx",
        "z1ffbxAcs",
      ].includes(baseVariant)
    ) {
      return false;
    }
    return VOTcq87Vu;
  };
  const isDisplayed2 = () => {
    if (
      [
        "uyxhsUNZq",
        "uTj0cEPb8",
        "vVjMhdARB",
        "K8oqZ2hdT",
        "QKKRwxza_",
        "FXIjKjDPL",
      ].includes(baseVariant)
    ) {
      return false;
    }
    return negate2(VOTcq87Vu);
  };
  const isDisplayed3 = () => {
    if (["tVxl2ewSx", "z1ffbxAcs"].includes(baseVariant)) {
      return false;
    }
    return true;
  };
  const isDisplayed4 = () => {
    if (
      [
        "uyxhsUNZq",
        "uTj0cEPb8",
        "vVjMhdARB",
        "K8oqZ2hdT",
        "QKKRwxza_",
        "FXIjKjDPL",
        "tVxl2ewSx",
        "z1ffbxAcs",
      ].includes(baseVariant)
    ) {
      return false;
    }
    return true;
  };
  const isDisplayed5 = () => {
    if (
      [
        "PvhAKPvc8",
        "uyxhsUNZq",
        "uTj0cEPb8",
        "vVjMhdARB",
        "K8oqZ2hdT",
        "QKKRwxza_",
        "FXIjKjDPL",
        "tVxl2ewSx",
        "z1ffbxAcs",
      ].includes(baseVariant)
    ) {
      return false;
    }
    return true;
  };
  const isDisplayed6 = () => {
    if (baseVariant === "l6T5PxAnq") {
      return TTpsRmZqr;
    }
    return false;
  };
  const isDisplayed7 = () => {
    if (baseVariant === "z1ffbxAcs") {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React6.useId();
  return /* @__PURE__ */ _jsx6(LayoutGroup4, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx6(motion5.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx4("framer-G7HiX", classNames),
      style: { display: "contents" },
      children: /* @__PURE__ */ _jsx6(Transition4, {
        value: transition,
        children: /* @__PURE__ */ _jsx6(motion5.div, {
          ...restProps,
          className: cx4("framer-15k1mix", className2),
          "data-framer-name": "Expanded",
          layoutDependency,
          layoutId: "glP89HQPH",
          ref,
          style: { ...style },
          ...addPropertyOverrides4(
            {
              FXIjKjDPL: { "data-framer-name": "Line" },
              K8oqZ2hdT: { "data-framer-name": "Node-SM" },
              l6T5PxAnq: { "data-framer-name": "Variant 8" },
              PvhAKPvc8: {
                "data-framer-name": "Hover",
                "data-highlight": true,
                onTap: onTap141kr03,
              },
              QKKRwxza_: { "data-framer-name": "Node-XS" },
              tVxl2ewSx: { "data-framer-name": "Variant 10" },
              uTj0cEPb8: { "data-framer-name": "Node-LG" },
              uyxhsUNZq: { "data-framer-name": "Node-XL" },
              vVjMhdARB: { "data-framer-name": "Node-MD" },
              z1ffbxAcs: { "data-framer-name": "Variant 13" },
            },
            baseVariant,
            gestureVariant
          ),
          children: /* @__PURE__ */ _jsxs4(motion5.div, {
            className: "framer-u952ip",
            "data-framer-name": "Property 1=Variant3",
            layoutDependency,
            layoutId: "R7_JcPYV4",
            style: {
              "--border-bottom-width": "0px",
              "--border-color": "rgba(0, 0, 0, 0)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              backdropFilter: "blur(14px)",
              backgroundColor: "rgba(200, 202, 208, 0.41)",
              borderBottomLeftRadius: 19,
              borderBottomRightRadius: 19,
              borderTopLeftRadius: 19,
              borderTopRightRadius: 19,
              boxShadow: "none",
              WebkitBackdropFilter: "blur(14px)",
            },
            variants: {
              FXIjKjDPL: {
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
              },
              K8oqZ2hdT: {
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
              },
              QKKRwxza_: {
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
              },
              tVxl2ewSx: {
                "--border-bottom-width": "1px",
                "--border-color": "rgba(232, 232, 235, 0.74)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor: "rgba(232, 232, 235, 0.59)",
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                boxShadow: "0px 0px 26px 3px rgba(0,0,0,0.25)",
              },
              uTj0cEPb8: {
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
              },
              uyxhsUNZq: {
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
              },
              vVjMhdARB: {
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
              },
              z1ffbxAcs: {
                "--border-bottom-width": "1px",
                "--border-color": "rgba(232, 232, 235, 0.74)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor: "rgba(232, 232, 235, 0.51)",
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
              },
            },
            ...addPropertyOverrides4(
              {
                FXIjKjDPL: {
                  "data-highlight": true,
                  onMouseEnter: onMouseEnterp9axab,
                },
                QKKRwxza_: {
                  "data-highlight": true,
                  onMouseEnter: onMouseEnterp9axab,
                },
                tVxl2ewSx: { "data-border": true },
                z1ffbxAcs: { "data-border": true },
              },
              baseVariant,
              gestureVariant
            ),
            children: [
              isDisplayed() &&
                /* @__PURE__ */ _jsxs4(motion5.div, {
                  className: "framer-16jcubo",
                  "data-framer-name": "Clock face - 12 hour",
                  layoutDependency,
                  layoutId: "WYvDh9tTX",
                  style: {
                    backgroundColor: "rgb(226, 226, 229)",
                    borderBottomLeftRadius: 500,
                    borderBottomRightRadius: 500,
                    borderTopLeftRadius: 500,
                    borderTopRightRadius: 500,
                  },
                  children: [
                    /* @__PURE__ */ _jsx6(SVG4, {
                      className: "framer-pgz1il",
                      "data-framer-name": "Vector 1",
                      fill: "rgba(0,0,0,1)",
                      intrinsicHeight: 4,
                      intrinsicWidth: 260,
                      layoutDependency,
                      layoutId: "gW_5SwpSl",
                      svg: '<svg width="260" height="4" viewBox="-1 -1 260 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 1L257 1.00002" stroke="#BEC8CA" strokeLinecap="round" stroke-dasharray="2 5"/>\n</svg>\n',
                      withExternalLayout: true,
                    }),
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-t88y97",
                      "data-border": true,
                      "data-framer-name": "Center Ellipse",
                      layoutDependency,
                      layoutId: "xRnljz54b",
                      style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "rgb(0, 105, 115)",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "rgb(0, 105, 115)",
                        borderBottomLeftRadius: "100%",
                        borderBottomRightRadius: "100%",
                        borderTopLeftRadius: "100%",
                        borderTopRightRadius: "100%",
                        rotate: -90,
                      },
                    }),
                    /* @__PURE__ */ _jsx6(SVG4, {
                      className: "framer-1bz5g0t",
                      "data-framer-name": "Building Blocks/hour-line",
                      layout: "position",
                      layoutDependency,
                      layoutId: "RXuxIjRpw",
                      opacity: 0.22,
                      style: { opacity: 0.22 },
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 15.277 99.908 C 15.276 35.086 46.379 6.725 46.379 6.725" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                      svgContentId: 2843491711,
                      withExternalLayout: true,
                    }),
                    /* @__PURE__ */ _jsx6(SVG4, {
                      className: "framer-s80oao",
                      "data-framer-name": "Building Blocks/hour-line",
                      layout: "position",
                      layoutDependency,
                      layoutId: "VlwfQd9my",
                      opacity: 1,
                      style: { opacity: 1 },
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 99.908 C 46.38 35.086 15.277 6.725 15.277 6.725" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                      svgContentId: 1730963088,
                      variants: { tVxl2ewSx: { opacity: 0.22 } },
                      withExternalLayout: true,
                      ...addPropertyOverrides4(
                        {
                          tVxl2ewSx: {
                            opacity: 0.22,
                            svgContentId: 2946061060,
                          },
                          z1ffbxAcs: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 99.908 C 46.38 35.086 15.277 6.725 15.277 6.725" fill="transparent" strokeWidth="2" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                            svgContentId: 4285060552,
                          },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                    /* @__PURE__ */ _jsx6(SVG4, {
                      className: "framer-grahyw",
                      "data-framer-name": "Building Blocks/hour-line",
                      layout: "position",
                      layoutDependency,
                      layoutId: "P17m7StQW",
                      opacity: 0.22,
                      style: { opacity: 0.22 },
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 6.816 C 46.381 71.511 -3.621 99.816 -3.621 99.816" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                      svgContentId: 1399265944,
                      withExternalLayout: true,
                    }),
                    /* @__PURE__ */ _jsx6(SVG4, {
                      className: "framer-ters9i",
                      "data-framer-name": "Building Blocks/hour-line",
                      layout: "position",
                      layoutDependency,
                      layoutId: "NNKcByfsb",
                      opacity: 0.22,
                      style: { opacity: 0.22 },
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 0.621 6.816 C 0.619 71.511 50.621 99.816 50.621 99.816" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                      svgContentId: 1631026620,
                      withExternalLayout: true,
                    }),
                    /* @__PURE__ */ _jsx6(SVG4, {
                      className: "framer-ygxorp",
                      "data-framer-name": "Building Blocks/hour-line",
                      layout: "position",
                      layoutDependency,
                      layoutId: "oH75iPoJ1",
                      opacity: 0.22,
                      style: { opacity: 0.22 },
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 9.5 7.5 C 9.497 72.194 9.002 100 9.002 100" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                      svgContentId: 3276682908,
                      withExternalLayout: true,
                    }),
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-gaigs9",
                      "data-framer-name": "Hour 14",
                      layoutDependency,
                      layoutId: "nMpM9YaWP",
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: "framer-19e96pz",
                        "data-framer-name": "Leading element",
                        layoutDependency,
                        layoutId: "flGQU_VyT",
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-67o6ax",
                          "data-framer-name": "Building Blocks/Monogram",
                          layoutDependency,
                          layoutId: "zP73eCjun",
                          style: {
                            backgroundColor: "rgb(69, 164, 176)",
                            borderBottomLeftRadius: 26,
                            borderBottomRightRadius: 26,
                            borderTopLeftRadius: 26,
                            borderTopRightRadius: 26,
                          },
                          children: /* @__PURE__ */ _jsx6(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                  "--framer-font-family":
                                    '"PP Supply Sans Light", sans-serif',
                                  "--framer-letter-spacing": "-0.5px",
                                  "--framer-line-height": "22px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: "A-2",
                              }),
                            }),
                            className: "framer-1er1yu3",
                            "data-framer-name": "Initial",
                            fonts: ["CUSTOM;PP Supply Sans Light"],
                            layoutDependency,
                            layoutId: "IVgQH8zb7",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: true,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-16lays1",
                      "data-framer-name": "Hour 13",
                      layoutDependency,
                      layoutId: "GIdxe8ttk",
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: "framer-1r78rj3",
                        "data-border": true,
                        "data-framer-name": "Leading element",
                        layoutDependency,
                        layoutId: "dHgEeuKPX",
                        style: {
                          "--border-bottom-width": "3px",
                          "--border-color": "rgb(171, 171, 171)",
                          "--border-left-width": "3px",
                          "--border-right-width": "3px",
                          "--border-style": "solid",
                          "--border-top-width": "3px",
                          borderBottomLeftRadius: 33,
                          borderBottomRightRadius: 33,
                          borderTopLeftRadius: 33,
                          borderTopRightRadius: 33,
                        },
                        variants: {
                          tVxl2ewSx: {
                            "--border-bottom-width": "0px",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-top-width": "0px",
                          },
                        },
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-1slmo9y",
                          "data-border": true,
                          "data-framer-name": "Building Blocks/Monogram",
                          layoutDependency,
                          layoutId: "ut9_JjQux",
                          style: {
                            "--border-bottom-width": "3px",
                            "--border-color": "rgb(190, 200, 202)",
                            "--border-left-width": "3px",
                            "--border-right-width": "3px",
                            "--border-style": "solid",
                            "--border-top-width": "3px",
                            backgroundColor: "rgb(144, 241, 255)",
                            borderBottomLeftRadius: 26,
                            borderBottomRightRadius: 26,
                            borderTopLeftRadius: 26,
                            borderTopRightRadius: 26,
                          },
                          variants: {
                            tVxl2ewSx: {
                              "--border-bottom-width": "0px",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-top-width": "0px",
                            },
                          },
                          children: /* @__PURE__ */ _jsx6(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                  "--framer-font-family":
                                    '"PP Supply Sans Light", sans-serif',
                                  "--framer-letter-spacing": "-0.5px",
                                  "--framer-line-height": "23px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(0, 31, 35))",
                                },
                                children: "A-2",
                              }),
                            }),
                            className: "framer-1iiryhe",
                            "data-framer-name": "Initial",
                            fonts: ["CUSTOM;PP Supply Sans Light"],
                            layoutDependency,
                            layoutId: "kSj4a5el_",
                            style: {
                              "--extracted-r6o4lv": "rgb(0, 31, 35)",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: true,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-hm8hzz",
                      "data-framer-name": "Hour 7",
                      layoutDependency,
                      layoutId: "RKbNbyXNN",
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: "framer-bxm0gv",
                        "data-framer-name": "Leading element",
                        layoutDependency,
                        layoutId: "VTI0VzvGT",
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-13irvgu",
                          "data-framer-name": "Building Blocks/Monogram",
                          layoutDependency,
                          layoutId: "VSbG8o7c3",
                          style: {
                            backgroundColor: "rgb(150, 55, 78)",
                            borderBottomLeftRadius: 26,
                            borderBottomRightRadius: 26,
                            borderTopLeftRadius: 26,
                            borderTopRightRadius: 26,
                          },
                          children: /* @__PURE__ */ _jsx6(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                  "--framer-font-family":
                                    '"PP Supply Sans Light", sans-serif',
                                  "--framer-letter-spacing": "-0.5px",
                                  "--framer-line-height": "22px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 219, 202))",
                                },
                                children: "A-2",
                              }),
                            }),
                            className: "framer-1v0hux5",
                            "data-framer-name": "Initial",
                            fonts: ["CUSTOM;PP Supply Sans Light"],
                            layoutDependency,
                            layoutId: "asz0BD9Ng",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 219, 202)",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: true,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-b81srs",
                      "data-framer-name": "Hour 15",
                      layoutDependency,
                      layoutId: "UD0ADclsv",
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: "framer-1seihbr",
                        "data-framer-name": "Leading element",
                        layoutDependency,
                        layoutId: "U8E456R_5",
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-b95frv",
                          "data-framer-name": "Building Blocks/Monogram",
                          layoutDependency,
                          layoutId: "zAv3WT4os",
                          style: {
                            backgroundColor: "rgb(245, 122, 41)",
                            borderBottomLeftRadius: 26,
                            borderBottomRightRadius: 26,
                            borderTopLeftRadius: 26,
                            borderTopRightRadius: 26,
                          },
                          children: /* @__PURE__ */ _jsx6(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                  "--framer-font-family":
                                    '"PP Supply Sans Light", sans-serif',
                                  "--framer-letter-spacing": "-0.5px",
                                  "--framer-line-height": "22px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(248, 242, 239))",
                                },
                                children: "A-2",
                              }),
                            }),
                            className: "framer-1gnv6f9",
                            "data-framer-name": "Initial",
                            fonts: ["CUSTOM;PP Supply Sans Light"],
                            layoutDependency,
                            layoutId: "alE6E0r_7",
                            style: {
                              "--extracted-r6o4lv": "rgb(248, 242, 239)",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: true,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-eie4hr",
                      "data-framer-name": "Hour 16",
                      layoutDependency,
                      layoutId: "RwCIEaxUx",
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: "framer-1x7jv21",
                        "data-framer-name": "Leading element",
                        layoutDependency,
                        layoutId: "RovaPqUr5",
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-1iqm9oi",
                          "data-framer-name": "Building Blocks/Monogram",
                          layoutDependency,
                          layoutId: "SvZwSxqLy",
                          style: {
                            backgroundColor: "rgb(205, 93, 204)",
                            borderBottomLeftRadius: 26,
                            borderBottomRightRadius: 26,
                            borderTopLeftRadius: 26,
                            borderTopRightRadius: 26,
                          },
                          children: /* @__PURE__ */ _jsx6(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                  "--framer-font-family":
                                    '"PP Supply Sans Light", sans-serif',
                                  "--framer-letter-spacing": "-0.5px",
                                  "--framer-line-height": "22px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 232, 254))",
                                },
                                children: "A-2",
                              }),
                            }),
                            className: "framer-10xeruc",
                            "data-framer-name": "Initial",
                            fonts: ["CUSTOM;PP Supply Sans Light"],
                            layoutDependency,
                            layoutId: "b0L1mHhSz",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 232, 254)",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: true,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ _jsx6(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                            "--framer-font-family":
                              '"PP Supply Sans Medium", sans-serif',
                            "--framer-font-size": "10px",
                            "--framer-letter-spacing": "0.5px",
                            "--framer-line-height": "16px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                          },
                          children: "ROOTS",
                        }),
                      }),
                      className: "framer-pk4yjk",
                      "data-framer-name": "Title",
                      fonts: ["CUSTOM;PP Supply Sans Medium"],
                      layoutDependency,
                      layoutId: "STZvevj6M",
                      style: {
                        "--extracted-r6o4lv": "rgb(63, 72, 74)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: true,
                    }),
                    /* @__PURE__ */ _jsx6(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                            "--framer-font-family":
                              '"PP Supply Sans Medium", sans-serif',
                            "--framer-font-size": "10px",
                            "--framer-letter-spacing": "0.5px",
                            "--framer-line-height": "16px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                          },
                          children: "BRANCHES",
                        }),
                      }),
                      className: "framer-1saw3ai",
                      "data-framer-name": "Title",
                      fonts: ["CUSTOM;PP Supply Sans Medium"],
                      layoutDependency,
                      layoutId: "SplMHIcz7",
                      style: {
                        "--extracted-r6o4lv": "rgb(63, 72, 74)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      transformTemplate: transformTemplate2,
                      verticalAlignment: "top",
                      withExternalLayout: true,
                    }),
                  ],
                }),
              /* @__PURE__ */ _jsxs4(motion5.div, {
                className: "framer-6vo91e",
                "data-framer-name": "Frame 18",
                layoutDependency,
                layoutId: "gPdwXBLtX",
                children: [
                  isDisplayed() &&
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-1bz3drm",
                      "data-framer-name": "Header",
                      layoutDependency,
                      layoutId: "RV_qbEcij",
                      children: /* @__PURE__ */ _jsx6(RichText2, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx6(motion5.p, {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFNlbWlib2xk",
                              "--framer-font-family":
                                '"PP Supply Sans Semibold", sans-serif',
                              "--framer-font-size": "12px",
                              "--framer-letter-spacing": "0.5px",
                              "--framer-line-height": "16px",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                            },
                            children: "COMPONENT IDEA",
                          }),
                        }),
                        className: "framer-rxhn3z",
                        "data-framer-name": "Title",
                        fonts: ["CUSTOM;PP Supply Sans Semibold"],
                        layoutDependency,
                        layoutId: "Jug1OtyCX",
                        style: {
                          "--extracted-r6o4lv": "rgb(63, 72, 74)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: true,
                      }),
                    }),
                  isDisplayed() &&
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-z3jaf1",
                      "data-framer-name": "headline",
                      layoutDependency,
                      layoutId: "X6QKXCzwN",
                      children: /* @__PURE__ */ _jsx6(RichText2, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx6(motion5.p, {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                              "--framer-font-family":
                                '"PP Supply Sans Light", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-letter-spacing": "0.25px",
                              "--framer-line-height": "20px",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                            },
                            children:
                              "Describing the medium and method of the tool.",
                          }),
                        }),
                        className: "framer-1dzdi2f",
                        "data-framer-name": "subhead",
                        fonts: ["CUSTOM;PP Supply Sans Light"],
                        layoutDependency,
                        layoutId: "JMZOOi5ss",
                        style: {
                          "--extracted-r6o4lv": "rgb(63, 72, 74)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: true,
                        ...addPropertyOverrides4(
                          {
                            tVxl2ewSx: {
                              children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                children: /* @__PURE__ */ _jsx6(motion5.p, {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                    "--framer-font-family":
                                      '"PP Supply Sans Light", sans-serif',
                                    "--framer-letter-spacing": "0.25px",
                                    "--framer-line-height": "20px",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                                  },
                                  children:
                                    "Describing the medium and method of the tool.",
                                }),
                              }),
                            },
                            z1ffbxAcs: {
                              children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                children: /* @__PURE__ */ _jsx6(motion5.p, {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                    "--framer-font-family":
                                      '"PP Supply Sans Light", sans-serif',
                                    "--framer-letter-spacing": "0.25px",
                                    "--framer-line-height": "20px",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                                  },
                                  children:
                                    "Describing the medium and method of the tool.",
                                }),
                              }),
                            },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: "framer-1t15ltz",
                    "data-framer-name": "Frame 3",
                    layoutDependency,
                    layoutId: "XgLQHhi6z",
                    children: /* @__PURE__ */ _jsxs4(motion5.div, {
                      className: "framer-relj6k",
                      "data-framer-name": "Frame 20",
                      layoutDependency,
                      layoutId: "zmCmB8SKh",
                      children: [
                        isDisplayed1() &&
                          /* @__PURE__ */ _jsx6(motion5.div, {
                            className: "framer-g6jc3c-container",
                            layoutDependency,
                            layoutId: "v7q4Kvml4-container",
                            children: /* @__PURE__ */ _jsx6(TypeWriter, {
                              autoStart: true,
                              caretVisibility: false,
                              color:
                                'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                              cursor: "\u25CF",
                              cursorColor: "rgba(136, 136, 136, 0.5)",
                              delayNumber: 0.06,
                              delayType: false,
                              font: {
                                fontFamily: "PP Supply Sans Light",
                                fontSize: 20,
                                fontWeight: 500,
                                letterSpacing: 0,
                                lineHeight: 1.2,
                                lineHeightPixels: 100,
                                lineHeightType: true,
                                offset: 0,
                                textAlign: "left",
                                whiteSpace: "nowrap",
                              },
                              height: "100%",
                              id: "v7q4Kvml4",
                              layoutId: "v7q4Kvml4",
                              loop: false,
                              pauseFor: 1,
                              split: false,
                              style: { width: "100%" },
                              tag: "heading1",
                              text: vZATQhujj,
                              width: "100%",
                            }),
                          }),
                        isDisplayed2() &&
                          /* @__PURE__ */ _jsx6(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                  "--framer-font-family":
                                    '"PP Supply Sans Light", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-letter-spacing": "0.04em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))",
                                },
                                children: "Board Dimensions",
                              }),
                            }),
                            className: "framer-s3klti",
                            "data-framer-name": "Board Dimensions",
                            fonts: ["CUSTOM;PP Supply Sans Light"],
                            layoutDependency,
                            layoutId: "VpZUXHRQ1",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            text: vZATQhujj,
                            verticalAlignment: "center",
                            withExternalLayout: true,
                          }),
                        /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-knxsbs",
                          "data-framer-name": "Dot",
                          layoutDependency,
                          layoutId: "y57fJ5mgy",
                          style: {
                            backgroundColor: cRMlaJb1_,
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            boxShadow:
                              "inset -0.12072530715522589px -0.12072530715522589px 0px 0px rgba(0, 0, 0, 0.02415), inset -1px -1px 0px 0px rgba(0, 0, 0, 0.2)",
                          },
                          variants: {
                            FXIjKjDPL: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            K8oqZ2hdT: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            QKKRwxza_: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            tVxl2ewSx: {
                              backgroundColor: "rgb(226, 226, 229)",
                              borderBottomLeftRadius: 11,
                              borderBottomRightRadius: 11,
                              borderTopLeftRadius: 11,
                              borderTopRightRadius: 11,
                              boxShadow:
                                "inset 0.12072530715522589px 0.12072530715522589px 0px 0px hsla(0, 0%, 100%, 0.02415), inset 1px 1px 0px 0px hsla(0, 0%, 100%, 0.2)",
                            },
                            uTj0cEPb8: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            uyxhsUNZq: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            vVjMhdARB: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            z1ffbxAcs: {
                              backgroundColor: "rgb(226, 226, 229)",
                              borderBottomLeftRadius: 11,
                              borderBottomRightRadius: 11,
                              borderTopLeftRadius: 11,
                              borderTopRightRadius: 11,
                              boxShadow:
                                "inset 0.12072530715522589px 0.12072530715522589px 0px 0px hsla(0, 0%, 100%, 0.02415), inset 1px 1px 0px 0px hsla(0, 0%, 100%, 0.2)",
                            },
                          },
                          children: /* @__PURE__ */ _jsxs4(motion5.div, {
                            className: "framer-rojnhy",
                            "data-framer-name": "state-layer",
                            layoutDependency,
                            layoutId: "I303:2962;53923:27987",
                            style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                            variants: {
                              tVxl2ewSx: {
                                backgroundColor: "rgba(144, 241, 255, 0.24)",
                              },
                              z1ffbxAcs: {
                                backgroundColor: "rgba(144, 241, 255, 0.24)",
                              },
                            },
                            children: [
                              isDisplayed() &&
                                /* @__PURE__ */ _jsxs4(motion5.div, {
                                  className: "framer-tthg7e",
                                  "data-framer-name": "Frame 2608514",
                                  layoutDependency,
                                  layoutId: "n_ZUrzmLg",
                                  style: {
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                  },
                                  children: [
                                    /* @__PURE__ */ _jsx6(motion5.div, {
                                      className: "framer-1hadtwd",
                                      layoutDependency,
                                      layoutId: "uyjvBXZGD",
                                      children: /* @__PURE__ */ _jsx6(
                                        RichText2,
                                        {
                                          __fromCanvasComponent: true,
                                          children: /* @__PURE__ */ _jsx6(
                                            React6.Fragment,
                                            {
                                              children: /* @__PURE__ */ _jsx6(
                                                motion5.p,
                                                {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                                    "--framer-font-family":
                                                      '"PP Supply Sans Light", sans-serif',
                                                    "--framer-font-size":
                                                      "14px",
                                                    "--framer-letter-spacing":
                                                      "0.25px",
                                                    "--framer-line-height":
                                                      "26px",
                                                    "--framer-text-color":
                                                      "var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) )",
                                                  },
                                                  children:
                                                    "a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement",
                                                }
                                              ),
                                            }
                                          ),
                                          className: "framer-6porn2",
                                          "data-framer-name": "supporting-text",
                                          fonts: [
                                            "CUSTOM;PP Supply Sans Light",
                                          ],
                                          layoutDependency,
                                          layoutId: "oSRMBRi6_",
                                          style: {
                                            "--extracted-r6o4lv":
                                              "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) ",
                                            "--framer-paragraph-spacing": "0px",
                                          },
                                          variants: {
                                            tVxl2ewSx: {
                                              "--extracted-r6o4lv":
                                                "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))",
                                            },
                                            z1ffbxAcs: {
                                              "--extracted-r6o4lv":
                                                "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))",
                                            },
                                          },
                                          verticalAlignment: "top",
                                          withExternalLayout: true,
                                          ...addPropertyOverrides4(
                                            {
                                              tVxl2ewSx: {
                                                children: /* @__PURE__ */ _jsx6(
                                                  React6.Fragment,
                                                  {
                                                    children:
                                                      /* @__PURE__ */ _jsx6(
                                                        motion5.p,
                                                        {
                                                          style: {
                                                            "--font-selector":
                                                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                                            "--framer-font-family":
                                                              '"PP Supply Sans Light", sans-serif',
                                                            "--framer-font-size":
                                                              "14px",
                                                            "--framer-letter-spacing":
                                                              "0.25px",
                                                            "--framer-line-height":
                                                              "24px",
                                                            "--framer-text-color":
                                                              "var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))",
                                                          },
                                                          children:
                                                            "a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement",
                                                        }
                                                      ),
                                                  }
                                                ),
                                              },
                                              z1ffbxAcs: {
                                                children: /* @__PURE__ */ _jsx6(
                                                  React6.Fragment,
                                                  {
                                                    children:
                                                      /* @__PURE__ */ _jsx6(
                                                        motion5.p,
                                                        {
                                                          style: {
                                                            "--font-selector":
                                                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                                            "--framer-font-family":
                                                              '"PP Supply Sans Light", sans-serif',
                                                            "--framer-font-size":
                                                              "14px",
                                                            "--framer-letter-spacing":
                                                              "0.25px",
                                                            "--framer-line-height":
                                                              "24px",
                                                            "--framer-text-color":
                                                              "var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))",
                                                          },
                                                          children:
                                                            "a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement",
                                                        }
                                                      ),
                                                  }
                                                ),
                                              },
                                            },
                                            baseVariant,
                                            gestureVariant
                                          ),
                                        }
                                      ),
                                    }),
                                    /* @__PURE__ */ _jsxs4(motion5.div, {
                                      className: "framer-p6sy63",
                                      layoutDependency,
                                      layoutId: "XopzhIgQU",
                                      children: [
                                        isDisplayed3() /* @__PURE__ */ &&
                                          _jsx6(motion5.div, {
                                            className: "framer-1sckg0c",
                                            "data-framer-name": "Rectangle 8",
                                            layoutDependency,
                                            layoutId: "iRzYxu2iB",
                                            style: {
                                              backgroundColor:
                                                "rgb(237, 110, 235)",
                                              borderBottomLeftRadius: 6,
                                              borderBottomRightRadius: 6,
                                              borderTopLeftRadius: 6,
                                              borderTopRightRadius: 6,
                                            },
                                          }),
                                        isDisplayed3() /* @__PURE__ */ &&
                                          _jsx6(motion5.div, {
                                            className: "framer-4q5s49",
                                            "data-framer-name": "Rectangle 8",
                                            layoutDependency,
                                            layoutId: "n9fKOegD2",
                                            style: {
                                              backgroundColor:
                                                "rgb(168, 243, 255)",
                                              borderBottomLeftRadius: 6,
                                              borderBottomRightRadius: 6,
                                              borderTopLeftRadius: 6,
                                              borderTopRightRadius: 6,
                                            },
                                          }),
                                        isDisplayed3() /* @__PURE__ */ &&
                                          _jsx6(motion5.div, {
                                            className: "framer-btq4z",
                                            "data-framer-name": "Rectangle 8",
                                            layoutDependency,
                                            layoutId: "m7kyec2O7",
                                            style: {
                                              backgroundColor:
                                                "rgb(69, 164, 176)",
                                              borderBottomLeftRadius: 6,
                                              borderBottomRightRadius: 6,
                                              borderTopLeftRadius: 6,
                                              borderTopRightRadius: 6,
                                            },
                                          }),
                                        isDisplayed3() /* @__PURE__ */ &&
                                          _jsx6(motion5.div, {
                                            className: "framer-hccerc",
                                            "data-framer-name": "Rectangle 8",
                                            layoutDependency,
                                            layoutId: "Un6XGp9Hx",
                                            style: {
                                              backgroundColor:
                                                "rgb(248, 99, 136)",
                                              borderBottomLeftRadius: 6,
                                              borderBottomRightRadius: 6,
                                              borderTopLeftRadius: 6,
                                              borderTopRightRadius: 6,
                                            },
                                          }),
                                        isDisplayed3() /* @__PURE__ */ &&
                                          _jsx6(motion5.div, {
                                            className: "framer-1rdnm2h",
                                            "data-framer-name": "Rectangle 8",
                                            layoutDependency,
                                            layoutId: "bIlIHQ7WO",
                                            style: {
                                              backgroundColor:
                                                "rgb(255, 148, 77)",
                                              borderBottomLeftRadius: 6,
                                              borderBottomRightRadius: 6,
                                              borderTopLeftRadius: 6,
                                              borderTopRightRadius: 6,
                                            },
                                          }),
                                        isDisplayed3() /* @__PURE__ */ &&
                                          _jsx6(motion5.div, {
                                            className: "framer-1msl2tx",
                                            "data-framer-name": "Rectangle 8",
                                            layoutDependency,
                                            layoutId: "sMikB4eW_",
                                            style: {
                                              backgroundColor:
                                                "rgb(240, 112, 238)",
                                              borderBottomLeftRadius: 6,
                                              borderBottomRightRadius: 6,
                                              borderTopLeftRadius: 6,
                                              borderTopRightRadius: 6,
                                            },
                                          }),
                                        isDisplayed3() /* @__PURE__ */ &&
                                          _jsx6(motion5.div, {
                                            className: "framer-via5el",
                                            "data-framer-name": "Rectangle 8",
                                            layoutDependency,
                                            layoutId: "y0zKgSH6F",
                                            style: {
                                              backgroundColor:
                                                "rgb(168, 230, 240)",
                                              borderBottomLeftRadius: 6,
                                              borderBottomRightRadius: 6,
                                              borderTopLeftRadius: 6,
                                              borderTopRightRadius: 6,
                                            },
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              isDisplayed4() &&
                                /* @__PURE__ */ _jsx6(RichText2, {
                                  __fromCanvasComponent: true,
                                  children: /* @__PURE__ */ _jsx6(
                                    React6.Fragment,
                                    {
                                      children: /* @__PURE__ */ _jsx6(
                                        motion5.p,
                                        {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                            "--framer-font-family":
                                              '"PP Supply Sans Light", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-letter-spacing": "0.7px",
                                            "--framer-line-height": "20px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                          },
                                          children: "C-2",
                                        }
                                      ),
                                    }
                                  ),
                                  className: "framer-1hg0ea8",
                                  "data-framer-name": "label-text",
                                  fonts: ["CUSTOM;PP Supply Sans Light"],
                                  layoutDependency,
                                  layoutId: "I303:2962;53923:27988",
                                  style: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  text: iDjlfHFIv,
                                  verticalAlignment: "center",
                                  withExternalLayout: true,
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  isDisplayed2() &&
                    /* @__PURE__ */ _jsx6(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                            "--framer-font-family":
                              '"PP Supply Sans Light", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-letter-spacing": "0.02em",
                            "--framer-line-height": "1.5em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(16, 25, 66))",
                          },
                          children:
                            "Please provide the dimensions of the drawing board (width, height, and depth).",
                        }),
                      }),
                      className: "framer-1oh0yiu",
                      "data-framer-name":
                        "Please provide the dimensions of the drawing board (width, height, and depth).",
                      fonts: ["CUSTOM;PP Supply Sans Light"],
                      layoutDependency,
                      layoutId: "qhSPm_I9X",
                      style: {
                        "--extracted-r6o4lv": "rgb(16, 25, 66)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      text: NvMMjvlBy,
                      verticalAlignment: "top",
                      withExternalLayout: true,
                    }),
                  isDisplayed1() &&
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-274qgp-container",
                      layoutDependency,
                      layoutId: "bYwxfJYzC-container",
                      children: /* @__PURE__ */ _jsx6(TypeWriter, {
                        autoStart: true,
                        caretVisibility: false,
                        color:
                          'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                        cursor: "\u25CF",
                        cursorColor: "rgba(136, 136, 136, 0.5)",
                        delayNumber: 0,
                        delayType: false,
                        font: {
                          fontFamily: "PP Supply Sans Light",
                          fontSize: 12,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.5,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: "left",
                          whiteSpace: "normal",
                        },
                        height: "100%",
                        id: "bYwxfJYzC",
                        layoutId: "bYwxfJYzC",
                        loop: false,
                        pauseFor: 1,
                        split: false,
                        style: { width: "100%" },
                        tag: "heading1",
                        text: NvMMjvlBy,
                        width: "100%",
                      }),
                    }),
                ],
              }),
              isDisplayed5() &&
                /* @__PURE__ */ _jsx6(motion5.div, {
                  className: "framer-8z588a",
                  "data-framer-name": "Divider",
                  layoutDependency,
                  layoutId: "ThuYqZPF1",
                  children: /* @__PURE__ */ _jsx6(SVG4, {
                    className: "framer-q310jp",
                    "data-framer-name": "Divider",
                    fill: "rgba(0,0,0,1)",
                    intrinsicHeight: 3,
                    intrinsicWidth: 362,
                    layoutDependency,
                    layoutId: "I52977:33967;51816:5861",
                    svg: '<svg width="362" height="3" viewBox="-1 -1 362 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n<line y1="0.5" x2="360" y2="0.5" stroke="#6F797A"/>\n</svg>\n',
                    withExternalLayout: true,
                  }),
                }),
              isDisplayed6() &&
                /* @__PURE__ */ _jsxs4(motion5.div, {
                  className: "framer-s5kk1i",
                  "data-framer-name": "Frame 19",
                  layoutDependency,
                  layoutId: "deAcFRQkZ",
                  children: [
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-1o7rnow",
                      "data-framer-name": "Frame 4",
                      layoutDependency,
                      layoutId: "MXvMU4ja8",
                      children: /* @__PURE__ */ _jsx6(RichText2, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx6(motion5.p, {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                              "--framer-font-family":
                                '"PP Supply Sans Medium", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(16, 25, 66))",
                            },
                            children: "Dependencies",
                          }),
                        }),
                        className: "framer-rluzxm",
                        "data-framer-name": "Dependencies",
                        fonts: ["CUSTOM;PP Supply Sans Medium"],
                        layoutDependency,
                        layoutId: "ca5w6dtAm",
                        style: {
                          "--extracted-r6o4lv": "rgb(16, 25, 66)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: true,
                      }),
                    }),
                    /* @__PURE__ */ _jsxs4(motion5.div, {
                      className: "framer-b3batm",
                      "data-framer-name": "Frame 17",
                      layoutDependency,
                      layoutId: "BjqpKAw3A",
                      children: [
                        /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-1u81hx0",
                          "data-framer-name": "Input chip",
                          layoutDependency,
                          layoutId: "gI4qKg22n",
                          style: {
                            backgroundColor: "rgb(187, 238, 242)",
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                          children: /* @__PURE__ */ _jsx6(motion5.div, {
                            className: "framer-1m02nfp",
                            "data-framer-name": "state-layer",
                            layoutDependency,
                            layoutId: "I303:2970;53923:27987",
                            children: /* @__PURE__ */ _jsx6(RichText2, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                children: /* @__PURE__ */ _jsx6(motion5.p, {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                    "--framer-font-family":
                                      '"PP Supply Sans Light", sans-serif',
                                    "--framer-font-size": "10px",
                                    "--framer-letter-spacing": "0.1px",
                                    "--framer-line-height": "20px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgb(55, 0, 58))",
                                  },
                                  children: "A-1",
                                }),
                              }),
                              className: "framer-dad9fl",
                              "data-framer-name": "label-text",
                              fonts: ["CUSTOM;PP Supply Sans Light"],
                              layoutDependency,
                              layoutId: "I303:2970;53923:27988",
                              style: {
                                "--extracted-r6o4lv": "rgb(55, 0, 58)",
                                "--framer-paragraph-spacing": "0px",
                              },
                              text: Z93yscm8P,
                              verticalAlignment: "center",
                              withExternalLayout: true,
                            }),
                          }),
                        }),
                        /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-160injg",
                          "data-framer-name": "Input chip",
                          layoutDependency,
                          layoutId: "gjT2zzuK7",
                          style: {
                            backgroundColor: "rgb(232, 173, 166)",
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                          children: /* @__PURE__ */ _jsx6(motion5.div, {
                            className: "framer-1h7yeih",
                            "data-framer-name": "state-layer",
                            layoutDependency,
                            layoutId: "I303:2971;53923:27987",
                            children: /* @__PURE__ */ _jsx6(RichText2, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                children: /* @__PURE__ */ _jsx6(motion5.p, {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                    "--framer-font-family":
                                      '"PP Supply Sans Light", sans-serif',
                                    "--framer-font-size": "10px",
                                    "--framer-letter-spacing": "0.1px",
                                    "--framer-line-height": "20px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgb(55, 0, 58))",
                                  },
                                  children: "B-3",
                                }),
                              }),
                              className: "framer-d8tsbz",
                              "data-framer-name": "label-text",
                              fonts: ["CUSTOM;PP Supply Sans Light"],
                              layoutDependency,
                              layoutId: "I303:2971;53923:27988",
                              style: {
                                "--extracted-r6o4lv": "rgb(55, 0, 58)",
                                "--framer-paragraph-spacing": "0px",
                              },
                              text: Xo22rvSfa,
                              verticalAlignment: "center",
                              withExternalLayout: true,
                            }),
                          }),
                        }),
                        /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-3iw8sr",
                          "data-framer-name": "Input chip",
                          layoutDependency,
                          layoutId: "C1mKJu16t",
                          style: {
                            backgroundColor: "rgb(245, 122, 41)",
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                          children: /* @__PURE__ */ _jsx6(motion5.div, {
                            className: "framer-vkt06o",
                            "data-framer-name": "state-layer",
                            layoutDependency,
                            layoutId: "I303:2972;53923:27987",
                            children: /* @__PURE__ */ _jsx6(RichText2, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                children: /* @__PURE__ */ _jsx6(motion5.p, {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                    "--framer-font-family":
                                      '"PP Supply Sans Light", sans-serif',
                                    "--framer-font-size": "10px",
                                    "--framer-letter-spacing": "0.1px",
                                    "--framer-line-height": "20px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgb(55, 0, 58))",
                                  },
                                  children: "B-4",
                                }),
                              }),
                              className: "framer-fo4y0u",
                              "data-framer-name": "label-text",
                              fonts: ["CUSTOM;PP Supply Sans Light"],
                              layoutDependency,
                              layoutId: "I303:2972;53923:27988",
                              style: {
                                "--extracted-r6o4lv": "rgb(55, 0, 58)",
                                "--framer-paragraph-spacing": "0px",
                              },
                              text: bGyluXMcm,
                              verticalAlignment: "center",
                              withExternalLayout: true,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              isDisplayed5() &&
                /* @__PURE__ */ _jsx6(motion5.div, {
                  className: "framer-mlqagl",
                  "data-framer-name": "Multiline/Filled",
                  layoutDependency,
                  layoutId: "RRJp3CM3F",
                  children: /* @__PURE__ */ _jsx6(motion5.div, {
                    className: "framer-1e67f1l",
                    "data-framer-name": "Text Field/Filled",
                    layoutDependency,
                    layoutId: "I68:3468;7624:93641",
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: "framer-1nwn68q",
                      "data-framer-name": "Content",
                      layoutDependency,
                      layoutId: "I68:3468;7624:93641;7623:77382",
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: "framer-1as28oh-container",
                        layoutDependency,
                        layoutId: "HOAIAfIHR-container",
                        children: /* @__PURE__ */ _jsx6(stdin_default3, {
                          AA_oylHc1: JM8R5zcqV,
                          B9Ye7wHiX: OJMet4Rjs,
                          cib0E0Vb9: C0xbi_CXP,
                          Cpm7YdhW6: Jdv7M1lr6,
                          dxSidP8LF: eZ_WIO8yz,
                          eePEcZAuW: K5BysgXsx,
                          Gu4Kp5hWx: vZATQhujj,
                          height: "100%",
                          id: "HOAIAfIHR",
                          kRgq0jgQR: k4ezTegiq,
                          layoutId: "HOAIAfIHR",
                          NPSt7VsjX: VOTcq87Vu,
                          nQb7W3cjE: fxy_09app,
                          style: { width: "100%" },
                          variant: convertFromEnum3(LNNJy1jnm),
                          width: "100%",
                          yBMe3I4G7: qQ_BO9qk8,
                        }),
                      }),
                    }),
                  }),
                }),
              isDisplayed5() &&
                /* @__PURE__ */ _jsx6(motion5.div, {
                  className: "framer-zo2az3",
                  "data-framer-name": "Button-dark",
                  layoutDependency,
                  layoutId: "KAf5_wkAp",
                  style: {
                    backgroundColor: "rgb(0, 105, 115)",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                  children: /* @__PURE__ */ _jsx6(motion5.div, {
                    className: "framer-so5fwt",
                    "data-framer-name": "state-layer",
                    layoutDependency,
                    layoutId: "I303:2975;53923:27817",
                    children: /* @__PURE__ */ _jsx6(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                            "--framer-font-family":
                              '"PP Supply Sans Medium", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-letter-spacing": "3.2px",
                            "--framer-line-height": "20px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "SUBMIT",
                        }),
                      }),
                      className: "framer-19gd5fv",
                      "data-framer-name": "label-text",
                      fonts: ["CUSTOM;PP Supply Sans Medium"],
                      layoutDependency,
                      layoutId: "I303:2975;53923:27818",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "center",
                      withExternalLayout: true,
                    }),
                  }),
                }),
              isDisplayed7() &&
                /* @__PURE__ */ _jsx6(motion5.div, {
                  className: "framer-l87yju",
                  "data-framer-name": "Frame 2608513",
                  layoutDependency,
                  layoutId: "uI8Q2DWZZ",
                  children: /* @__PURE__ */ _jsxs4(motion5.div, {
                    className: "framer-r0em8m",
                    "data-framer-name": "Search bar",
                    layoutDependency,
                    layoutId: "Pv0E4vHIr",
                    style: {
                      backgroundColor: "rgb(237, 238, 241)",
                      borderBottomLeftRadius: 28,
                      borderBottomRightRadius: 28,
                      borderTopLeftRadius: 28,
                      borderTopRightRadius: 28,
                    },
                    children: [
                      /* @__PURE__ */ _jsxs4(motion5.div, {
                        className: "framer-1dvq414",
                        "data-framer-name": "state-layer",
                        layoutDependency,
                        layoutId: "Lccr6sgjb",
                        children: [
                          /* @__PURE__ */ _jsx6(motion5.div, {
                            className: "framer-1p1bo23",
                            "data-framer-name": "Trailing-Elements",
                            layoutDependency,
                            layoutId: "T3ghZskdD",
                            children: /* @__PURE__ */ _jsx6(motion5.div, {
                              className: "framer-zqh2nn",
                              "data-framer-name": "Avatar-target",
                              layoutDependency,
                              layoutId: "dA0DBdc3o",
                              children: /* @__PURE__ */ _jsxs4(motion5.div, {
                                className: "framer-pbr21r",
                                "data-framer-name": "Avatar",
                                layoutDependency,
                                layoutId: "cfeGun5r6",
                                children: [
                                  /* @__PURE__ */ _jsx6(motion5.div, {
                                    className: "framer-cnr1k8",
                                    "data-framer-name": "Background",
                                    layoutDependency,
                                    layoutId: "g1zm_vuax",
                                    style: {
                                      backgroundColor: "rgb(144, 241, 255)",
                                      borderBottomLeftRadius: "100%",
                                      borderBottomRightRadius: "100%",
                                      borderTopLeftRadius: "100%",
                                      borderTopRightRadius: "100%",
                                    },
                                  }),
                                  /* @__PURE__ */ _jsx6(RichText2, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx6(
                                      React6.Fragment,
                                      {
                                        children: /* @__PURE__ */ _jsx6(
                                          motion5.p,
                                          {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                              "--framer-font-family":
                                                '"PP Supply Sans Light", sans-serif',
                                              "--framer-font-size": "13px",
                                              "--framer-letter-spacing":
                                                "0.15px",
                                              "--framer-line-height": "24px",
                                              "--framer-text-alignment":
                                                "center",
                                            },
                                            children: "A-2",
                                          }
                                        ),
                                      }
                                    ),
                                    className: "framer-krm87b",
                                    "data-framer-name": "Initial",
                                    fonts: ["CUSTOM;PP Supply Sans Light"],
                                    layoutDependency,
                                    layoutId: "rgXnE_qqi",
                                    style: {
                                      "--framer-paragraph-spacing": "0px",
                                    },
                                    verticalAlignment: "center",
                                    withExternalLayout: true,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          /* @__PURE__ */ _jsxs4(motion5.div, {
                            className: "framer-87mzjl",
                            "data-framer-name": "Content",
                            layoutDependency,
                            layoutId: "n_bgiVlSg",
                            children: [
                              /* @__PURE__ */ _jsxs4(motion5.div, {
                                className: "framer-di8oog",
                                layoutDependency,
                                layoutId: "x70rl52m1",
                                children: [
                                  /* @__PURE__ */ _jsx6(RichText2, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx6(
                                      React6.Fragment,
                                      {
                                        children: /* @__PURE__ */ _jsx6(
                                          motion5.p,
                                          {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                                              "--framer-font-family":
                                                '"PP Supply Sans Medium", sans-serif',
                                              "--framer-font-size": "12px",
                                              "--framer-letter-spacing":
                                                "0.5px",
                                              "--framer-line-height": "24px",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                                            },
                                            children: "Decision Node",
                                          }
                                        ),
                                      }
                                    ),
                                    className: "framer-a1wsp2",
                                    "data-framer-name": "supporting-text",
                                    fonts: ["CUSTOM;PP Supply Sans Medium"],
                                    layoutDependency,
                                    layoutId: "WsucBkVUz",
                                    style: {
                                      "--extracted-r6o4lv": "rgb(63, 72, 74)",
                                      "--framer-paragraph-spacing": "0px",
                                    },
                                    verticalAlignment: "center",
                                    withExternalLayout: true,
                                  }),
                                  /* @__PURE__ */ _jsx6(RichText2, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx6(
                                      React6.Fragment,
                                      {
                                        children: /* @__PURE__ */ _jsx6(
                                          motion5.p,
                                          {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==",
                                              "--framer-font-family":
                                                '"PP Supply Sans Medium", sans-serif',
                                              "--framer-letter-spacing":
                                                "0.5px",
                                              "--framer-line-height": "24px",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                                            },
                                            children: "Define Primary Goal",
                                          }
                                        ),
                                      }
                                    ),
                                    className: "framer-1awvx7p",
                                    "data-framer-name": "supporting-text",
                                    fonts: ["CUSTOM;PP Supply Sans Medium"],
                                    layoutDependency,
                                    layoutId: "opOu0sqRn",
                                    style: {
                                      "--extracted-r6o4lv": "rgb(63, 72, 74)",
                                      "--framer-paragraph-spacing": "0px",
                                    },
                                    verticalAlignment: "center",
                                    withExternalLayout: true,
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ _jsx6(motion5.div, {
                                className: "framer-3tnxcx",
                                "data-framer-name": "Leading-icon",
                                layoutDependency,
                                layoutId: "p5HW_zmJw",
                                children: /* @__PURE__ */ _jsx6(motion5.div, {
                                  className: "framer-zfqid9",
                                  "data-framer-name": "container",
                                  layoutDependency,
                                  layoutId: "WrrEwbxTu",
                                  style: {
                                    borderBottomLeftRadius: 100,
                                    borderBottomRightRadius: 100,
                                    borderTopLeftRadius: 100,
                                    borderTopRightRadius: 100,
                                  },
                                  children: /* @__PURE__ */ _jsx6(motion5.div, {
                                    className: "framer-1bsvo3k",
                                    "data-framer-name": "state-layer",
                                    layoutDependency,
                                    layoutId: "ltq3iN3cA",
                                    children: /* @__PURE__ */ _jsx6(
                                      motion5.div,
                                      {
                                        className: "framer-1vjxg04",
                                        "data-framer-name": "Icon",
                                        layoutDependency,
                                        layoutId: "FL77cuW9w",
                                        children: /* @__PURE__ */ _jsx6(SVG4, {
                                          className: "framer-8x5cq0",
                                          "data-framer-name": "icon",
                                          fill: "rgba(0,0,0,1)",
                                          intrinsicHeight: 16,
                                          intrinsicWidth: 4,
                                          layoutDependency,
                                          layoutId: "nYgYJQYoH",
                                          svg: '<svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fillRule="evenodd" clipRule="evenodd" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z" fill="#3F484A"/>\n</svg>\n',
                                          withExternalLayout: true,
                                        }),
                                      }
                                    ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ _jsx6(motion5.div, {
                        className: "framer-tb2a78",
                        "data-framer-name": "Content",
                        layoutDependency,
                        layoutId: "VtJJ7CbYW",
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: "framer-r4j7qq",
                          "data-framer-name": "Frame 2608516",
                          layoutDependency,
                          layoutId: "u0pNrfPeD",
                          style: {
                            backgroundColor: "rgb(249, 249, 252)",
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                          },
                          children: /* @__PURE__ */ _jsx6(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0",
                                  "--framer-font-family":
                                    '"PP Supply Sans Light", sans-serif',
                                  "--framer-letter-spacing": "1px",
                                  "--framer-line-height": "24px",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(26, 28, 30))",
                                },
                                children:
                                  "\u201CTo create a tool that enhances users' memory retention and recall capabilities through various interactive exercises and activities, utilizing personalized data to optimize and tailor experiences.\u201D",
                              }),
                            }),
                            className: "framer-1uxqpch",
                            "data-framer-name": "Headline",
                            fonts: ["CUSTOM;PP Supply Sans Light"],
                            layoutDependency,
                            layoutId: "vwgmDfcb6",
                            style: {
                              "--extracted-r6o4lv": "rgb(26, 28, 30)",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: true,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          }),
        }),
      }),
    }),
  });
});
var css5 = [
  '.framer-G7HiX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-G7HiX .framer-13itnim { display: block; }",
  ".framer-G7HiX .framer-15k1mix { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-u952ip { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: 325px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-G7HiX .framer-16jcubo { flex: none; height: 256px; overflow: visible; position: relative; width: 256px; }",
  ".framer-G7HiX .framer-pgz1il { flex: none; height: 4px; left: calc(50% - 260px / 2); position: absolute; top: calc(50.000004371139184% - 4px / 2); width: 260px; }",
  ".framer-G7HiX .framer-t88y97 { aspect-ratio: 1 / 1; bottom: var(--framer-aspect-ratio-supported, 123px); flex: none; height: 9px; left: 123px; position: absolute; right: 123px; top: 123px; }",
  ".framer-G7HiX .framer-1bz5g0t { flex: none; height: 100px; left: calc(53.90625000000002% - 49px / 2); position: absolute; top: 28px; width: 49px; }",
  ".framer-G7HiX .framer-s80oao { flex: none; height: 100px; left: 82px; position: absolute; top: 28px; width: 49px; }",
  ".framer-G7HiX .framer-grahyw { bottom: 35px; flex: none; height: 100px; left: 82px; position: absolute; width: 49px; }",
  ".framer-G7HiX .framer-ters9i { bottom: 35px; flex: none; height: 100px; position: absolute; right: 79px; width: 49px; }",
  ".framer-G7HiX .framer-ygxorp { bottom: 35px; flex: none; height: 100px; position: absolute; right: 88px; width: 49px; }",
  ".framer-G7HiX .framer-gaigs9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 133px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 8px; width: 48px; }",
  ".framer-G7HiX .framer-19e96pz, .framer-G7HiX .framer-bxm0gv, .framer-G7HiX .framer-1seihbr, .framer-G7HiX .framer-1x7jv21 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-67o6ax, .framer-G7HiX .framer-13irvgu, .framer-G7HiX .framer-b95frv, .framer-G7HiX .framer-1iqm9oi { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-G7HiX .framer-1er1yu3, .framer-G7HiX .framer-1iiryhe, .framer-G7HiX .framer-1v0hux5, .framer-G7HiX .framer-1gnv6f9, .framer-G7HiX .framer-10xeruc, .framer-G7HiX .framer-krm87b { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); white-space: pre-wrap; width: 40px; word-break: break-word; word-wrap: break-word; }",
  ".framer-G7HiX .framer-16lays1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 75px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 8px; width: 48px; }",
  ".framer-G7HiX .framer-1r78rj3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 2px 2px 2px 2px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-1slmo9y { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-G7HiX .framer-hm8hzz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 54px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 192px; width: 48px; }",
  ".framer-G7HiX .framer-b81srs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 104px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 206px; width: 48px; }",
  ".framer-G7HiX .framer-eie4hr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 154px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 192px; width: 48px; }",
  ".framer-G7HiX .framer-pk4yjk { flex: none; height: auto; left: 9px; position: absolute; top: 107px; white-space: pre; width: auto; }",
  ".framer-G7HiX .framer-1saw3ai { flex: none; height: auto; left: 9px; position: absolute; top: 54%; white-space: pre; width: auto; }",
  ".framer-G7HiX .framer-6vo91e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-1bz3drm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-rxhn3z, .framer-G7HiX .framer-1hg0ea8, .framer-G7HiX .framer-d8tsbz, .framer-G7HiX .framer-fo4y0u, .framer-G7HiX .framer-19gd5fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  ".framer-G7HiX .framer-z3jaf1, .framer-G7HiX .framer-mlqagl, .framer-G7HiX .framer-1nwn68q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-1dzdi2f { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 638px; word-break: break-word; word-wrap: break-word; }",
  ".framer-G7HiX .framer-1t15ltz, .framer-G7HiX .framer-1o7rnow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-relj6k { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
  ".framer-G7HiX .framer-g6jc3c-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
  ".framer-G7HiX .framer-s3klti { flex: none; height: 24px; position: relative; white-space: pre-wrap; width: 226px; word-break: break-word; word-wrap: break-word; }",
  ".framer-G7HiX .framer-knxsbs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-G7HiX .framer-rojnhy, .framer-G7HiX .framer-1m02nfp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-tthg7e { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
  ".framer-G7HiX .framer-1hadtwd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
  ".framer-G7HiX .framer-6porn2 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
  ".framer-G7HiX .framer-p6sy63 { flex: none; height: 125px; left: -3px; mix-blend-mode: multiply; overflow: visible; position: absolute; top: calc(49.230769230769255% - 125px / 2); width: 314px; z-index: 1; }",
  ".framer-G7HiX .framer-1sckg0c { bottom: 26px; flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 27px; width: 71px; z-index: 1; }",
  ".framer-G7HiX .framer-4q5s49 { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 1px; top: 0px; width: 241px; z-index: 1; }",
  ".framer-G7HiX .framer-btq4z { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 59px; top: 26px; width: 162px; z-index: 1; }",
  ".framer-G7HiX .framer-hccerc { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 37px; top: calc(50.40000000000002% - 21px / 2); width: 205px; z-index: 1; }",
  ".framer-G7HiX .framer-1rdnm2h { bottom: 26px; flex: none; height: 21px; left: 1px; mix-blend-mode: multiply; position: absolute; width: 115px; z-index: 1; }",
  ".framer-G7HiX .framer-1msl2tx { bottom: 1px; flex: none; height: 21px; left: 1px; mix-blend-mode: multiply; position: absolute; width: 94px; z-index: 1; }",
  ".framer-G7HiX .framer-via5el { flex: none; height: 21px; left: 2px; position: absolute; top: 26px; width: 65px; z-index: 1; }",
  ".framer-G7HiX .framer-1oh0yiu, .framer-G7HiX .framer-rluzxm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 277px; word-break: break-word; word-wrap: break-word; }",
  ".framer-G7HiX .framer-274qgp-container, .framer-G7HiX .framer-1as28oh-container { flex: none; height: auto; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-8z588a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 325px; }",
  ".framer-G7HiX .framer-q310jp { flex: 1 0 0px; height: 3px; position: relative; width: 1px; }",
  ".framer-G7HiX .framer-s5kk1i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-b3batm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-1u81hx0, .framer-G7HiX .framer-160injg, .framer-G7HiX .framer-3iw8sr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 16px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-G7HiX .framer-dad9fl { flex: none; height: 100%; position: relative; white-space: pre; width: auto; }",
  ".framer-G7HiX .framer-1h7yeih, .framer-G7HiX .framer-vkt06o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-1e67f1l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-zo2az3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
  ".framer-G7HiX .framer-so5fwt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 10px 24px 10px 24px; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-l87yju { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-r0em8m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-G7HiX .framer-1dvq414 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 56px; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: auto; }",
  ".framer-G7HiX .framer-1p1bo23 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-zqh2nn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }",
  ".framer-G7HiX .framer-pbr21r { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: hidden; position: relative; width: 30px; }",
  ".framer-G7HiX .framer-cnr1k8 { aspect-ratio: 1 / 1; bottom: var(--framer-aspect-ratio-supported, 0px); flex: none; height: 30px; left: 0px; position: absolute; right: 0px; top: 0px; }",
  ".framer-G7HiX .framer-87mzjl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
  ".framer-G7HiX .framer-di8oog { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
  ".framer-G7HiX .framer-a1wsp2 { flex: none; height: 12px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }",
  ".framer-G7HiX .framer-1awvx7p { flex: none; height: 19px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }",
  ".framer-G7HiX .framer-3tnxcx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }",
  ".framer-G7HiX .framer-zfqid9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-G7HiX .framer-1bsvo3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }",
  ".framer-G7HiX .framer-1vjxg04 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }",
  ".framer-G7HiX .framer-8x5cq0 { bottom: 4px; flex: none; left: 10px; position: absolute; right: 10px; top: 4px; }",
  ".framer-G7HiX .framer-tb2a78 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 18px 18px 18px; position: relative; width: auto; }",
  ".framer-G7HiX .framer-r4j7qq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 10px 12px 10px 12px; position: relative; width: 100%; }",
  ".framer-G7HiX .framer-1uxqpch { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 306px; word-break: break-word; word-wrap: break-word; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-G7HiX .framer-15k1mix, .framer-G7HiX .framer-u952ip, .framer-G7HiX .framer-gaigs9, .framer-G7HiX .framer-19e96pz, .framer-G7HiX .framer-16lays1, .framer-G7HiX .framer-1r78rj3, .framer-G7HiX .framer-hm8hzz, .framer-G7HiX .framer-bxm0gv, .framer-G7HiX .framer-b81srs, .framer-G7HiX .framer-1seihbr, .framer-G7HiX .framer-eie4hr, .framer-G7HiX .framer-1x7jv21, .framer-G7HiX .framer-6vo91e, .framer-G7HiX .framer-1bz3drm, .framer-G7HiX .framer-z3jaf1, .framer-G7HiX .framer-1t15ltz, .framer-G7HiX .framer-knxsbs, .framer-G7HiX .framer-rojnhy, .framer-G7HiX .framer-tthg7e, .framer-G7HiX .framer-1hadtwd, .framer-G7HiX .framer-8z588a, .framer-G7HiX .framer-s5kk1i, .framer-G7HiX .framer-1o7rnow, .framer-G7HiX .framer-b3batm, .framer-G7HiX .framer-1u81hx0, .framer-G7HiX .framer-1m02nfp, .framer-G7HiX .framer-160injg, .framer-G7HiX .framer-1h7yeih, .framer-G7HiX .framer-3iw8sr, .framer-G7HiX .framer-vkt06o, .framer-G7HiX .framer-mlqagl, .framer-G7HiX .framer-1e67f1l, .framer-G7HiX .framer-1nwn68q, .framer-G7HiX .framer-zo2az3, .framer-G7HiX .framer-so5fwt, .framer-G7HiX .framer-l87yju, .framer-G7HiX .framer-r0em8m, .framer-G7HiX .framer-1dvq414, .framer-G7HiX .framer-1p1bo23, .framer-G7HiX .framer-zqh2nn, .framer-G7HiX .framer-87mzjl, .framer-G7HiX .framer-di8oog, .framer-G7HiX .framer-3tnxcx, .framer-G7HiX .framer-zfqid9, .framer-G7HiX .framer-1bsvo3k, .framer-G7HiX .framer-tb2a78, .framer-G7HiX .framer-r4j7qq { gap: 0px; } .framer-G7HiX .framer-15k1mix > *, .framer-G7HiX .framer-1bz3drm > *, .framer-G7HiX .framer-3tnxcx > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-G7HiX .framer-15k1mix > :first-child, .framer-G7HiX .framer-u952ip > :first-child, .framer-G7HiX .framer-19e96pz > :first-child, .framer-G7HiX .framer-1r78rj3 > :first-child, .framer-G7HiX .framer-bxm0gv > :first-child, .framer-G7HiX .framer-1seihbr > :first-child, .framer-G7HiX .framer-1x7jv21 > :first-child, .framer-G7HiX .framer-6vo91e > :first-child, .framer-G7HiX .framer-1bz3drm > :first-child, .framer-G7HiX .framer-z3jaf1 > :first-child, .framer-G7HiX .framer-s5kk1i > :first-child, .framer-G7HiX .framer-mlqagl > :first-child, .framer-G7HiX .framer-1e67f1l > :first-child, .framer-G7HiX .framer-1nwn68q > :first-child, .framer-G7HiX .framer-zo2az3 > :first-child, .framer-G7HiX .framer-l87yju > :first-child, .framer-G7HiX .framer-r0em8m > :first-child, .framer-G7HiX .framer-di8oog > :first-child, .framer-G7HiX .framer-3tnxcx > :first-child, .framer-G7HiX .framer-tb2a78 > :first-child, .framer-G7HiX .framer-r4j7qq > :first-child { margin-top: 0px; } .framer-G7HiX .framer-15k1mix > :last-child, .framer-G7HiX .framer-u952ip > :last-child, .framer-G7HiX .framer-19e96pz > :last-child, .framer-G7HiX .framer-1r78rj3 > :last-child, .framer-G7HiX .framer-bxm0gv > :last-child, .framer-G7HiX .framer-1seihbr > :last-child, .framer-G7HiX .framer-1x7jv21 > :last-child, .framer-G7HiX .framer-6vo91e > :last-child, .framer-G7HiX .framer-1bz3drm > :last-child, .framer-G7HiX .framer-z3jaf1 > :last-child, .framer-G7HiX .framer-s5kk1i > :last-child, .framer-G7HiX .framer-mlqagl > :last-child, .framer-G7HiX .framer-1e67f1l > :last-child, .framer-G7HiX .framer-1nwn68q > :last-child, .framer-G7HiX .framer-zo2az3 > :last-child, .framer-G7HiX .framer-l87yju > :last-child, .framer-G7HiX .framer-r0em8m > :last-child, .framer-G7HiX .framer-di8oog > :last-child, .framer-G7HiX .framer-3tnxcx > :last-child, .framer-G7HiX .framer-tb2a78 > :last-child, .framer-G7HiX .framer-r4j7qq > :last-child { margin-bottom: 0px; } .framer-G7HiX .framer-u952ip > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-G7HiX .framer-gaigs9 > *, .framer-G7HiX .framer-16lays1 > *, .framer-G7HiX .framer-hm8hzz > *, .framer-G7HiX .framer-b81srs > *, .framer-G7HiX .framer-eie4hr > *, .framer-G7HiX .framer-1t15ltz > *, .framer-G7HiX .framer-knxsbs > *, .framer-G7HiX .framer-8z588a > *, .framer-G7HiX .framer-1o7rnow > *, .framer-G7HiX .framer-1u81hx0 > *, .framer-G7HiX .framer-160injg > *, .framer-G7HiX .framer-3iw8sr > *, .framer-G7HiX .framer-1p1bo23 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-G7HiX .framer-gaigs9 > :first-child, .framer-G7HiX .framer-16lays1 > :first-child, .framer-G7HiX .framer-hm8hzz > :first-child, .framer-G7HiX .framer-b81srs > :first-child, .framer-G7HiX .framer-eie4hr > :first-child, .framer-G7HiX .framer-1t15ltz > :first-child, .framer-G7HiX .framer-knxsbs > :first-child, .framer-G7HiX .framer-rojnhy > :first-child, .framer-G7HiX .framer-tthg7e > :first-child, .framer-G7HiX .framer-1hadtwd > :first-child, .framer-G7HiX .framer-8z588a > :first-child, .framer-G7HiX .framer-1o7rnow > :first-child, .framer-G7HiX .framer-b3batm > :first-child, .framer-G7HiX .framer-1u81hx0 > :first-child, .framer-G7HiX .framer-1m02nfp > :first-child, .framer-G7HiX .framer-160injg > :first-child, .framer-G7HiX .framer-1h7yeih > :first-child, .framer-G7HiX .framer-3iw8sr > :first-child, .framer-G7HiX .framer-vkt06o > :first-child, .framer-G7HiX .framer-so5fwt > :first-child, .framer-G7HiX .framer-1dvq414 > :first-child, .framer-G7HiX .framer-1p1bo23 > :first-child, .framer-G7HiX .framer-zqh2nn > :first-child, .framer-G7HiX .framer-87mzjl > :first-child, .framer-G7HiX .framer-zfqid9 > :first-child, .framer-G7HiX .framer-1bsvo3k > :first-child { margin-left: 0px; } .framer-G7HiX .framer-gaigs9 > :last-child, .framer-G7HiX .framer-16lays1 > :last-child, .framer-G7HiX .framer-hm8hzz > :last-child, .framer-G7HiX .framer-b81srs > :last-child, .framer-G7HiX .framer-eie4hr > :last-child, .framer-G7HiX .framer-1t15ltz > :last-child, .framer-G7HiX .framer-knxsbs > :last-child, .framer-G7HiX .framer-rojnhy > :last-child, .framer-G7HiX .framer-tthg7e > :last-child, .framer-G7HiX .framer-1hadtwd > :last-child, .framer-G7HiX .framer-8z588a > :last-child, .framer-G7HiX .framer-1o7rnow > :last-child, .framer-G7HiX .framer-b3batm > :last-child, .framer-G7HiX .framer-1u81hx0 > :last-child, .framer-G7HiX .framer-1m02nfp > :last-child, .framer-G7HiX .framer-160injg > :last-child, .framer-G7HiX .framer-1h7yeih > :last-child, .framer-G7HiX .framer-3iw8sr > :last-child, .framer-G7HiX .framer-vkt06o > :last-child, .framer-G7HiX .framer-so5fwt > :last-child, .framer-G7HiX .framer-1dvq414 > :last-child, .framer-G7HiX .framer-1p1bo23 > :last-child, .framer-G7HiX .framer-zqh2nn > :last-child, .framer-G7HiX .framer-87mzjl > :last-child, .framer-G7HiX .framer-zfqid9 > :last-child, .framer-G7HiX .framer-1bsvo3k > :last-child { margin-right: 0px; } .framer-G7HiX .framer-19e96pz > *, .framer-G7HiX .framer-1r78rj3 > *, .framer-G7HiX .framer-bxm0gv > *, .framer-G7HiX .framer-1seihbr > *, .framer-G7HiX .framer-1x7jv21 > *, .framer-G7HiX .framer-z3jaf1 > *, .framer-G7HiX .framer-mlqagl > *, .framer-G7HiX .framer-1nwn68q > *, .framer-G7HiX .framer-zo2az3 > *, .framer-G7HiX .framer-l87yju > *, .framer-G7HiX .framer-di8oog > *, .framer-G7HiX .framer-tb2a78 > *, .framer-G7HiX .framer-r4j7qq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-G7HiX .framer-6vo91e > *, .framer-G7HiX .framer-s5kk1i > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-G7HiX .framer-rojnhy > *, .framer-G7HiX .framer-b3batm > *, .framer-G7HiX .framer-1m02nfp > *, .framer-G7HiX .framer-1h7yeih > *, .framer-G7HiX .framer-vkt06o > *, .framer-G7HiX .framer-so5fwt > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-G7HiX .framer-tthg7e > *, .framer-G7HiX .framer-1hadtwd > *, .framer-G7HiX .framer-zqh2nn > *, .framer-G7HiX .framer-87mzjl > *, .framer-G7HiX .framer-zfqid9 > *, .framer-G7HiX .framer-1bsvo3k > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-G7HiX .framer-1e67f1l > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-G7HiX .framer-r0em8m > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-G7HiX .framer-1dvq414 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }",
  ".framer-G7HiX.framer-v-1fc3t3a .framer-15k1mix { cursor: pointer; }",
  ".framer-G7HiX.framer-v-tlkqch .framer-u952ip { height: 60px; padding: 17px 17px 17px 17px; width: 60px; }",
  ".framer-G7HiX.framer-v-tlkqch .framer-6vo91e, .framer-G7HiX.framer-v-tlkqch .framer-1t15ltz, .framer-G7HiX.framer-v-1a8pern .framer-6vo91e, .framer-G7HiX.framer-v-1a8pern .framer-1t15ltz, .framer-G7HiX.framer-v-uax94b .framer-6vo91e, .framer-G7HiX.framer-v-uax94b .framer-1t15ltz, .framer-G7HiX.framer-v-1khlikx .framer-6vo91e, .framer-G7HiX.framer-v-1khlikx .framer-1t15ltz, .framer-G7HiX.framer-v-18q1m16 .framer-6vo91e, .framer-G7HiX.framer-v-18q1m16 .framer-1t15ltz, .framer-G7HiX.framer-v-w4miu7 .framer-6vo91e, .framer-G7HiX.framer-v-w4miu7 .framer-1t15ltz { flex: 1 0 0px; height: 1px; }",
  ".framer-G7HiX.framer-v-tlkqch .framer-relj6k, .framer-G7HiX.framer-v-1a8pern .framer-relj6k, .framer-G7HiX.framer-v-uax94b .framer-relj6k, .framer-G7HiX.framer-v-1khlikx .framer-relj6k, .framer-G7HiX.framer-v-18q1m16 .framer-relj6k, .framer-G7HiX.framer-v-w4miu7 .framer-relj6k { height: 100%; }",
  ".framer-G7HiX.framer-v-tlkqch .framer-knxsbs, .framer-G7HiX.framer-v-1a8pern .framer-knxsbs, .framer-G7HiX.framer-v-uax94b .framer-knxsbs, .framer-G7HiX.framer-v-1khlikx .framer-knxsbs, .framer-G7HiX.framer-v-18q1m16 .framer-knxsbs, .framer-G7HiX.framer-v-w4miu7 .framer-knxsbs { flex: 1 0 0px; height: 100%; overflow: visible; width: 1px; }",
  ".framer-G7HiX.framer-v-tlkqch .framer-rojnhy, .framer-G7HiX.framer-v-1a8pern .framer-rojnhy, .framer-G7HiX.framer-v-uax94b .framer-rojnhy, .framer-G7HiX.framer-v-1khlikx .framer-rojnhy, .framer-G7HiX.framer-v-18q1m16 .framer-rojnhy, .framer-G7HiX.framer-v-w4miu7 .framer-rojnhy { flex: 1 0 0px; width: 1px; }",
  ".framer-G7HiX.framer-v-1a8pern .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 50px); padding: 14px 14px 14px 14px; width: 50px; }",
  ".framer-G7HiX.framer-v-uax94b .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); padding: 11px 11px 11px 11px; width: 40px; }",
  ".framer-G7HiX.framer-v-1khlikx .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 30px); padding: 8px 8px 8px 8px; width: 30px; }",
  ".framer-G7HiX.framer-v-18q1m16 .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 20px); padding: 5px 5px 5px 5px; width: 20px; }",
  ".framer-G7HiX.framer-v-w4miu7 .framer-15k1mix { width: 86px; }",
  ".framer-G7HiX.framer-v-w4miu7 .framer-u952ip { height: 20px; padding: 5px 5px 5px 5px; width: 100%; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-15k1mix, .framer-G7HiX.framer-v-uiz0vr .framer-15k1mix { gap: 0px; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-u952ip, .framer-G7HiX.framer-v-uiz0vr .framer-u952ip { align-content: flex-start; align-items: flex-start; flex-direction: row; overflow: visible; padding: 32px 16px 16px 16px; width: min-content; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-16jcubo, .framer-G7HiX.framer-v-1kuanhy .framer-1hadtwd, .framer-G7HiX.framer-v-uiz0vr .framer-16jcubo, .framer-G7HiX.framer-v-uiz0vr .framer-1hadtwd { order: 1; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-6vo91e, .framer-G7HiX.framer-v-uiz0vr .framer-6vo91e { order: 0; padding: 0px 23px 0px 23px; width: 385px; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-1bz3drm, .framer-G7HiX.framer-v-1kuanhy .framer-s3klti, .framer-G7HiX.framer-v-uiz0vr .framer-1bz3drm, .framer-G7HiX.framer-v-uiz0vr .framer-s3klti, .framer-G7HiX.framer-v-uiz0vr .framer-l87yju { order: 2; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-z3jaf1, .framer-G7HiX.framer-v-uiz0vr .framer-z3jaf1 { order: 3; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-1dzdi2f, .framer-G7HiX.framer-v-uiz0vr .framer-1dzdi2f { width: 100%; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-1t15ltz, .framer-G7HiX.framer-v-uiz0vr .framer-1t15ltz { order: 4; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-relj6k, .framer-G7HiX.framer-v-uiz0vr .framer-relj6k { flex-direction: column; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-knxsbs, .framer-G7HiX.framer-v-uiz0vr .framer-knxsbs { height: min-content; order: 0; width: 100%; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-rojnhy, .framer-G7HiX.framer-v-uiz0vr .framer-rojnhy { flex: 1 0 0px; height: min-content; padding: 16px 16px 16px 16px; width: 1px; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-p6sy63, .framer-G7HiX.framer-v-uiz0vr .framer-p6sy63 { bottom: -9px; height: unset; order: 0; top: -11px; width: 372px; }",
  ".framer-G7HiX.framer-v-1kuanhy .framer-1oh0yiu, .framer-G7HiX.framer-v-uiz0vr .framer-1oh0yiu { order: 5; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-G7HiX.framer-v-1kuanhy .framer-15k1mix, .framer-G7HiX.framer-v-1kuanhy .framer-u952ip, .framer-G7HiX.framer-v-1kuanhy .framer-relj6k { gap: 0px; } .framer-G7HiX.framer-v-1kuanhy .framer-15k1mix > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-G7HiX.framer-v-1kuanhy .framer-15k1mix > :first-child { margin-top: 0px; } .framer-G7HiX.framer-v-1kuanhy .framer-15k1mix > :last-child { margin-bottom: 0px; } .framer-G7HiX.framer-v-1kuanhy .framer-u952ip > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-G7HiX.framer-v-1kuanhy .framer-u952ip > :first-child { margin-left: 0px; } .framer-G7HiX.framer-v-1kuanhy .framer-u952ip > :last-child { margin-right: 0px; } .framer-G7HiX.framer-v-1kuanhy .framer-relj6k > *, .framer-G7HiX.framer-v-1kuanhy .framer-relj6k > :first-child, .framer-G7HiX.framer-v-1kuanhy .framer-relj6k > :last-child { margin: 0px; } }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-G7HiX.framer-v-uiz0vr .framer-15k1mix, .framer-G7HiX.framer-v-uiz0vr .framer-u952ip, .framer-G7HiX.framer-v-uiz0vr .framer-relj6k { gap: 0px; } .framer-G7HiX.framer-v-uiz0vr .framer-15k1mix > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-G7HiX.framer-v-uiz0vr .framer-15k1mix > :first-child { margin-top: 0px; } .framer-G7HiX.framer-v-uiz0vr .framer-15k1mix > :last-child { margin-bottom: 0px; } .framer-G7HiX.framer-v-uiz0vr .framer-u952ip > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-G7HiX.framer-v-uiz0vr .framer-u952ip > :first-child { margin-left: 0px; } .framer-G7HiX.framer-v-uiz0vr .framer-u952ip > :last-child { margin-right: 0px; } .framer-G7HiX.framer-v-uiz0vr .framer-relj6k > *, .framer-G7HiX.framer-v-uiz0vr .framer-relj6k > :first-child, .framer-G7HiX.framer-v-uiz0vr .framer-relj6k > :last-child { margin: 0px; } }",
];
var FramerC_odUWZqr = withCSS6(Component4, css5, "framer-G7HiX");
var stdin_default4 = FramerC_odUWZqr;
FramerC_odUWZqr.displayName = "node";
FramerC_odUWZqr.defaultProps = { height: 316, width: 325 };
addPropertyControls6(FramerC_odUWZqr, {
  variant: {
    options: [
      "glP89HQPH",
      "PvhAKPvc8",
      "uyxhsUNZq",
      "uTj0cEPb8",
      "vVjMhdARB",
      "K8oqZ2hdT",
      "QKKRwxza_",
      "l6T5PxAnq",
      "FXIjKjDPL",
      "tVxl2ewSx",
      "z1ffbxAcs",
    ],
    optionTitles: [
      "Expanded",
      "Hover",
      "Node-XL",
      "Node-LG",
      "Node-MD",
      "Node-SM",
      "Node-XS",
      "Variant 8",
      "Line",
      "Variant 10",
      "Variant 13",
    ],
    title: "Variant",
    type: ControlType9.Enum,
  },
  vZATQhujj: {
    defaultValue: "Board Dimensions",
    displayTextArea: false,
    placeholder: "",
    title: "Decision Title",
    type: ControlType9.String,
  },
  NvMMjvlBy: {
    defaultValue:
      "Please provide the dimensions of the drawing board (width, height, and depth).",
    displayTextArea: true,
    placeholder: "",
    title: "Decision Description",
    type: ControlType9.String,
  },
  iDjlfHFIv: {
    defaultValue: "C-2",
    displayTextArea: false,
    title: "Decision Index",
    type: ControlType9.String,
  },
  LNNJy1jnm: {
    defaultValue: "FNw58JHcH",
    options: ["FNw58JHcH", "pXF5zK4BB", "hjUA_q4Xo", "R8yTQtly5"],
    optionTitles: ["Input", "Slider", "Choice", "Boolean"],
    title: "Decision Type",
    type: ControlType9.Enum,
  },
  K5BysgXsx: (NodeTypeControls === null || NodeTypeControls === void 0
    ? void 0
    : NodeTypeControls["eePEcZAuW"]) && {
    ...NodeTypeControls["eePEcZAuW"],
    defaultValue: "zAJDHJhkW",
    hidden: void 0,
    title: "Choice",
  },
  OJMet4Rjs: {
    defaultValue: "Choice 1",
    placeholder: "Choice 1",
    title: "Choice 1",
    type: ControlType9.String,
  },
  qQ_BO9qk8: {
    defaultValue: "Choice 2",
    placeholder: "Choice 2",
    title: "Choice 2",
    type: ControlType9.String,
  },
  eZ_WIO8yz: {
    defaultValue: "Choice 3",
    placeholder: "Choice 3",
    title: "Choice 3",
    type: ControlType9.String,
  },
  Jdv7M1lr6: {
    defaultValue: "A",
    placeholder: "A",
    title: "Scale X1",
    type: ControlType9.String,
  },
  C0xbi_CXP: {
    defaultValue: "B",
    displayTextArea: false,
    placeholder: "B",
    title: "Scale X2",
    type: ControlType9.String,
  },
  k4ezTegiq: {
    defaultValue: 50,
    displayStepper: false,
    max: 100,
    min: 0,
    step: 10,
    title: "Slider Value",
    type: ControlType9.Number,
  },
  VOTcq87Vu: {
    defaultValue: true,
    title: "Streaming",
    type: ControlType9.Boolean,
  },
  fxy_09app: {
    defaultValue: "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
    displayTextArea: true,
    title: "Input",
    type: ControlType9.String,
  },
  JM8R5zcqV: {
    defaultValue: true,
    title: "Boolean Toggle",
    type: ControlType9.Boolean,
  },
  cRMlaJb1_: {
    defaultValue:
      'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
    title: "Color",
    type: ControlType9.Color,
  },
  Z93yscm8P: {
    defaultValue: "A-1",
    displayTextArea: false,
    placeholder: "A-1",
    title: " Dependency Index 1",
    type: ControlType9.String,
  },
  Xo22rvSfa: {
    defaultValue: "B-2",
    placeholder: "B-2",
    title: "Dependency Index 2",
    type: ControlType9.String,
  },
  bGyluXMcm: {
    defaultValue: "C-2",
    displayTextArea: false,
    title: "Dependency Index 3",
    type: ControlType9.String,
  },
  TTpsRmZqr: {
    defaultValue: true,
    title: "Dependency Visible",
    type: ControlType9.Boolean,
  },
});
addFonts4(FramerC_odUWZqr, [
  {
    family: "PP Supply Sans Light",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/C_odUWZqr:default",
      url: "https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf",
    },
    url: "https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf",
  },
  {
    family: "PP Supply Sans Medium",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/C_odUWZqr:default",
      url: "https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf",
    },
    url: "https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf",
  },
  {
    family: "PP Supply Sans Semibold",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/C_odUWZqr:default",
      url: "https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf",
    },
    url: "https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf",
  },
  ...TypewriterFonts2,
  ...NodeTypeFonts,
]);

// https:https://framerusercontent.com/modules/dL0m3LArmiMN513smqCL/iyYRGD4DpZrrjfEv0XTS/pSxPslti_.js
import { jsx as _jsx7, jsxs as _jsxs5 } from "react/jsx-runtime";
import {
  addFonts as addFonts5,
  addPropertyControls as addPropertyControls7,
  ControlType as ControlType10,
  cx as cx5,
  getFonts as getFonts3,
  RichText as RichText3,
  SVG as SVG5,
  useLocaleInfo as useLocaleInfo5,
  useVariantState as useVariantState5,
  withCSS as withCSS7,
} from "installable-framer/dist/framer";
import {
  LayoutGroup as LayoutGroup5,
  motion as motion6,
  MotionConfigContext as MotionConfigContext5,
} from "framer-motion";
import * as React7 from "react";
var TypewriterFonts3 = getFonts3(TypeWriter);
var cycleOrder5 = [
  "R_0SntBXV",
  "RspHZjbvA",
  "KzyHUFutd",
  "lR29aQ4aC",
  "CDTOPoYwJ",
  "AKBlJHd8s",
  "NfdKYRGKU",
];
var variantClassNames5 = {
  AKBlJHd8s: "framer-v-14ttska",
  CDTOPoYwJ: "framer-v-wmnvsy",
  KzyHUFutd: "framer-v-1u2jgkx",
  lR29aQ4aC: "framer-v-15ekw7u",
  NfdKYRGKU: "framer-v-n0zl46",
  R_0SntBXV: "framer-v-1xd6uv3",
  RspHZjbvA: "framer-v-15mvvd2",
};
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant])
      );
  return nextOverrides;
}
var transitions5 = {
  CDTOPoYwJ: {
    delay: 0,
    duration: 3.25,
    ease: [0.44, 0, 0.56, 1],
    type: "tween",
  },
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  RspHZjbvA: {
    delay: 0,
    duration: 0.3,
    ease: [0.44, 0, 0.56, 1],
    type: "tween",
  },
};
var transformTemplate3 = (_, t) => `translate(-50%, -50%) ${t}`;
var transition1 = {
  delay: 0,
  duration: 0.3,
  ease: [0.44, 0, 0.29, 0.99],
  type: "tween",
};
var Transition5 = ({ value, children }) => {
  const config = React7.useContext(MotionConfigContext5);
  const transition =
    value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React7.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)]
  );
  return /* @__PURE__ */ _jsx7(MotionConfigContext5.Provider, {
    value: contextValue,
    children,
  });
};
var humanReadableVariantMap5 = {
  "Variant 7": "NfdKYRGKU",
  expanded: "KzyHUFutd",
  generate: "AKBlJHd8s",
  logo: "CDTOPoYwJ",
  search: "R_0SntBXV",
  seed: "RspHZjbvA",
  type: "lR29aQ4aC",
};
var getProps5 = ({ height, id, width, ...props }) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref =
        (_variant = humanReadableVariantMap5[props.variant]) !== null &&
        _variant !== void 0
          ? _variant
          : props.variant) !== null && ref !== void 0
        ? ref
        : "R_0SntBXV",
  };
};
var createLayoutDependency5 = (props, variants) =>
  variants.join("-") + props.layoutDependency;
var Component5 = /* @__PURE__ */ React7.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo5();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    ...restProps
  } = getProps5(props);
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: "R_0SntBXV",
    transitions: transitions5,
    variant,
    variantClassNames: variantClassNames5,
  });
  const layoutDependency = createLayoutDependency5(props, variants);
  const isDisplayed = () => {
    if (["RspHZjbvA", "CDTOPoYwJ"].includes(baseVariant)) {
      return false;
    }
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "KzyHUFutd") {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "KzyHUFutd") {
      return false;
    }
    return true;
  };
  const isDisplayed3 = () => {
    if (["lR29aQ4aC", "AKBlJHd8s"].includes(baseVariant)) {
      return false;
    }
    return true;
  };
  const isDisplayed4 = () => {
    if (["lR29aQ4aC", "AKBlJHd8s"].includes(baseVariant)) {
      return true;
    }
    return false;
  };
  const isDisplayed5 = () => {
    if (["RspHZjbvA", "CDTOPoYwJ", "NfdKYRGKU"].includes(baseVariant)) {
      return false;
    }
    return true;
  };
  const isDisplayed6 = () => {
    if (baseVariant === "AKBlJHd8s") {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (baseVariant === "AKBlJHd8s") {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React7.useId();
  return /* @__PURE__ */ _jsx7(LayoutGroup5, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx7(motion6.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx5("framer-AaXBB", classNames),
      style: { display: "contents" },
      children: /* @__PURE__ */ _jsx7(Transition5, {
        value: transition,
        children: /* @__PURE__ */ _jsx7(motion6.div, {
          ...restProps,
          className: cx5("framer-1xd6uv3", className2),
          "data-framer-name": "search",
          layoutDependency,
          layoutId: "R_0SntBXV",
          ref,
          style: { ...style },
          ...addPropertyOverrides5(
            {
              AKBlJHd8s: { "data-framer-name": "generate" },
              CDTOPoYwJ: { "data-framer-name": "logo" },
              KzyHUFutd: { "data-framer-name": "expanded" },
              lR29aQ4aC: { "data-framer-name": "type" },
              NfdKYRGKU: { "data-framer-name": "Variant 7" },
              RspHZjbvA: { "data-framer-name": "seed" },
            },
            baseVariant,
            gestureVariant
          ),
          children: /* @__PURE__ */ _jsx7(motion6.div, {
            className: "framer-th6quy",
            "data-framer-name": "Component 1",
            layoutDependency,
            layoutId: "sFQLDloAD",
            style: {
              backgroundColor: "rgb(232, 232, 235)",
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              boxShadow: "0px 1px 26px 2px rgba(0,0,0,0.25)",
            },
            transformTemplate: transformTemplate3,
            variants: {
              CDTOPoYwJ: {
                borderBottomLeftRadius: 106,
                borderBottomRightRadius: 106,
                borderTopLeftRadius: 106,
                borderTopRightRadius: 106,
              },
              RspHZjbvA: {
                borderBottomLeftRadius: 66,
                borderBottomRightRadius: 66,
                borderTopLeftRadius: 66,
                borderTopRightRadius: 66,
              },
            },
            ...addPropertyOverrides5(
              {
                AKBlJHd8s: { transformTemplate: void 0 },
                lR29aQ4aC: { transformTemplate: void 0 },
                NfdKYRGKU: { transformTemplate: void 0 },
              },
              baseVariant,
              gestureVariant
            ),
            children: /* @__PURE__ */ _jsxs5(motion6.div, {
              className: "framer-102rpj4",
              "data-framer-name": "state-layer",
              layoutDependency,
              layoutId: "ldDmdZXhT",
              children: [
                /* @__PURE__ */ _jsxs5(motion6.div, {
                  className: "framer-1x3xeex",
                  "data-framer-name": "Frame 1066",
                  layoutDependency,
                  layoutId: "MrqGHeMQA",
                  style: {
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 32,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                  },
                  variants: {
                    AKBlJHd8s: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    CDTOPoYwJ: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderBottomLeftRadius: 75,
                      borderBottomRightRadius: 75,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                    },
                    lR29aQ4aC: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    NfdKYRGKU: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    RspHZjbvA: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderBottomLeftRadius: 75,
                      borderBottomRightRadius: 75,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                    },
                  },
                  children: [
                    isDisplayed() &&
                      /* @__PURE__ */ _jsx7(motion6.div, {
                        className: "framer-onwzwe",
                        "data-framer-name": "Leading-icon-button",
                        layoutDependency,
                        layoutId: "LP0LOwP3R",
                        children: /* @__PURE__ */ _jsx7(motion6.div, {
                          className: "framer-1d3you",
                          "data-framer-name": "container",
                          layoutDependency,
                          layoutId: "p3ZJaGqF2",
                          style: {
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                          children: /* @__PURE__ */ _jsx7(motion6.div, {
                            className: "framer-1klpfuo",
                            "data-framer-name": "state-layer",
                            layoutDependency,
                            layoutId: "EmVl06lFH",
                            children: /* @__PURE__ */ _jsxs5(motion6.div, {
                              className: "framer-4hz2zg",
                              "data-framer-name": "Icon",
                              layoutDependency,
                              layoutId: "QzLvSZx_y",
                              children: [
                                isDisplayed1() &&
                                  /* @__PURE__ */ _jsx7(SVG5, {
                                    className: "framer-1pd2dzy",
                                    "data-framer-name": "icon",
                                    fill: "rgba(0,0,0,1)",
                                    intrinsicHeight: 16,
                                    intrinsicWidth: 17,
                                    layoutDependency,
                                    layoutId: "iYV9LkFzg",
                                    svg: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.5 7H4.33L9.92 1.41L8.5 0L0.5 8L8.5 16L9.91 14.59L4.33 9H16.5V7Z" fill="#3F484A"/>\n</svg>\n',
                                    withExternalLayout: true,
                                  }),
                                isDisplayed2() &&
                                  /* @__PURE__ */ _jsx7(SVG5, {
                                    className: "framer-2jm16e",
                                    "data-framer-name": "icon",
                                    fill: "rgba(0,0,0,1)",
                                    intrinsicHeight: 12,
                                    intrinsicWidth: 18,
                                    layoutDependency,
                                    layoutId: "LcWaG1b2J",
                                    svg: '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="#3F484A"/>\n</svg>\n',
                                    withExternalLayout: true,
                                  }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    isDisplayed() &&
                      /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: "framer-a5vvyf",
                        "data-framer-name": "Content",
                        layoutDependency,
                        layoutId: "dHgJhO3P9",
                        children: [
                          isDisplayed3() &&
                            /* @__PURE__ */ _jsx7(RichText3, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                                children: /* @__PURE__ */ _jsx7(motion6.p, {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFZhcmlhYmxl",
                                    "--framer-font-family":
                                      '"PP Supply Sans Variable", sans-serif',
                                    "--framer-letter-spacing": "0.5px",
                                    "--framer-line-height": "24px",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                                  },
                                  children: "Your idea begins here...",
                                }),
                              }),
                              className: "framer-er2jrd",
                              "data-framer-name": "supporting-text",
                              fonts: ["CUSTOM;PP Supply Sans Variable"],
                              layoutDependency,
                              layoutId: "KO8mkxbXv",
                              style: {
                                "--extracted-r6o4lv": " rgb(63, 72, 74)",
                                "--framer-paragraph-spacing": "0px",
                              },
                              verticalAlignment: "center",
                              withExternalLayout: true,
                              ...addPropertyOverrides5(
                                {
                                  NfdKYRGKU: {
                                    children: /* @__PURE__ */ _jsx7(
                                      React7.Fragment,
                                      {
                                        children: /* @__PURE__ */ _jsx7(
                                          motion6.p,
                                          {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFZhcmlhYmxl",
                                              "--framer-font-family":
                                                '"PP Supply Sans Variable", sans-serif',
                                              "--framer-letter-spacing":
                                                "0.5px",
                                              "--framer-line-height": "24px",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(63, 72, 74))",
                                            },
                                            children: "OUTLINE",
                                          }
                                        ),
                                      }
                                    ),
                                  },
                                },
                                baseVariant,
                                gestureVariant
                              ),
                            }),
                          isDisplayed4() &&
                            /* @__PURE__ */ _jsx7(motion6.div, {
                              className: "framer-b3bbqg",
                              "data-framer-name": "Typed Content",
                              layoutDependency,
                              layoutId: "ooGcjaCIs",
                              children: /* @__PURE__ */ _jsx7(motion6.div, {
                                className: "framer-q46j6z-container",
                                layoutDependency,
                                layoutId: "wQ8u93V0Q-container",
                                children: /* @__PURE__ */ _jsx7(TypeWriter, {
                                  autoStart: true,
                                  caretVisibility: true,
                                  color: "rgb(0, 0, 0)",
                                  cursor: "|",
                                  cursorColor: "rgb(153, 153, 153)",
                                  delayNumber: 0.1,
                                  delayType: true,
                                  font: {
                                    fontFamily: "PP Supply Sans",
                                    fontSize: 24,
                                    fontWeight: 300,
                                    letterSpacing: 0,
                                    lineHeight: 2.2,
                                    lineHeightPixels: 100,
                                    lineHeightType: true,
                                    offset: 1.5,
                                    textAlign: "left",
                                    whiteSpace: "nowrap",
                                  },
                                  height: "100%",
                                  id: "wQ8u93V0Q",
                                  layoutId: "wQ8u93V0Q",
                                  loop: true,
                                  pauseFor: 1,
                                  split: false,
                                  style: { height: "100%", width: "100%" },
                                  tag: "heading1",
                                  text: "a tool that enhances human cognition",
                                  width: "100%",
                                  ...addPropertyOverrides5(
                                    {
                                      AKBlJHd8s: {
                                        delayNumber: 0.05,
                                        delayType: false,
                                        font: {
                                          fontFamily: "PP Supply Sans",
                                          fontSize: 22.5,
                                          fontWeight: 300,
                                          letterSpacing: 0,
                                          lineHeight: 2.5,
                                          lineHeightPixels: 100,
                                          lineHeightType: true,
                                          offset: 3,
                                          textAlign: "left",
                                          whiteSpace: "nowrap",
                                        },
                                        pauseFor: 0.5,
                                        split: true,
                                        text: "outline report summary proposal presentation book essay",
                                      },
                                    },
                                    baseVariant,
                                    gestureVariant
                                  ),
                                }),
                              }),
                            }),
                        ],
                      }),
                    /* @__PURE__ */ _jsxs5(motion6.div, {
                      className: "framer-o3gcmt",
                      "data-framer-name": "Trailing-Elements",
                      layoutDependency,
                      layoutId: "kDcsPSPnH",
                      children: [
                        isDisplayed5() &&
                          /* @__PURE__ */ _jsx7(motion6.div, {
                            className: "framer-8y7dsi",
                            "data-framer-name": "1st trailing-icon",
                            layoutDependency,
                            layoutId: "nKrJlDrIs",
                            children: /* @__PURE__ */ _jsx7(motion6.div, {
                              className: "framer-vyt6dv",
                              "data-framer-name": "container",
                              layoutDependency,
                              layoutId: "PocSIdTw3",
                              style: {
                                borderBottomLeftRadius: 100,
                                borderBottomRightRadius: 100,
                                borderTopLeftRadius: 100,
                                borderTopRightRadius: 100,
                              },
                              children: /* @__PURE__ */ _jsx7(motion6.div, {
                                className: "framer-1o52rms",
                                "data-framer-name": "state-layer",
                                layoutDependency,
                                layoutId: "kDzc7Cncp",
                                children: /* @__PURE__ */ _jsxs5(motion6.div, {
                                  className: "framer-1xo5sxg",
                                  "data-framer-name": "Icon",
                                  layoutDependency,
                                  layoutId: "mPD9hz3KO",
                                  children: [
                                    isDisplayed6() &&
                                      /* @__PURE__ */ _jsx7(SVG5, {
                                        className: "framer-dpkc67",
                                        "data-framer-name": "icon",
                                        fill: "rgba(0,0,0,1)",
                                        intrinsicHeight: 18,
                                        intrinsicWidth: 18,
                                        layoutDependency,
                                        layoutId: "E4d6wJpmJ",
                                        svg: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fillRule="evenodd" clipRule="evenodd" d="M12.26 10.77L17.99 16.5L16.5 17.99L10.77 12.26C9.7 13.03 8.41 13.5 7 13.5C3.41 13.5 0.5 10.59 0.5 7C0.5 3.41 3.41 0.5 7 0.5C10.59 0.5 13.5 3.41 13.5 7C13.5 8.41 13.03 9.7 12.26 10.77ZM7 2.5C4.51 2.5 2.5 4.51 2.5 7C2.5 9.49 4.51 11.5 7 11.5C9.49 11.5 11.5 9.49 11.5 7C11.5 4.51 9.49 2.5 7 2.5Z" fill="#3F484A"/>\n</svg>\n',
                                        withExternalLayout: true,
                                      }),
                                    isDisplayed7() &&
                                      /* @__PURE__ */ _jsx7(SVG5, {
                                        className: "framer-11pjihq",
                                        "data-framer-name":
                                          "autorenew_FILL0_wght200_GRAD0_opsz24 1",
                                        fill: "rgba(0,0,0,1)",
                                        intrinsicHeight: 24,
                                        intrinsicWidth: 24,
                                        layoutDependency,
                                        layoutId: "kVysVdybG",
                                        svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M5.5 12.0499C5.5 12.3679 5.52307 12.6881 5.56922 13.0105C5.61539 13.333 5.69296 13.6512 5.80192 13.9653C5.84679 14.1076 5.84167 14.2439 5.78655 14.374C5.73142 14.5041 5.64295 14.5955 5.52115 14.648C5.39552 14.7044 5.26763 14.7073 5.1375 14.6567C5.00737 14.606 4.91987 14.5096 4.875 14.3672C4.74167 13.9967 4.64583 13.6147 4.5875 13.2211C4.52917 12.8275 4.5 12.4371 4.5 12.0499C4.5 9.95763 5.23012 8.17623 6.69037 6.70573C8.15064 5.23521 9.92052 4.49995 12 4.49995H13.3865L11.6404 2.7538C11.5468 2.66022 11.4968 2.54547 11.4904 2.40957C11.484 2.27367 11.534 2.15252 11.6404 2.0461C11.7468 1.93968 11.8647 1.88647 11.9942 1.88647C12.1237 1.88647 12.2417 1.93968 12.3481 2.0461L14.7365 4.43457C14.8981 4.59611 14.9789 4.78457 14.9789 4.99995C14.9789 5.21533 14.8981 5.40379 14.7365 5.56532L12.3481 7.9538C12.2545 8.04738 12.1397 8.09738 12.0038 8.1038C11.8679 8.11022 11.7468 8.06022 11.6404 7.9538C11.534 7.84738 11.4808 7.72943 11.4808 7.59995C11.4808 7.47047 11.534 7.35252 11.6404 7.2461L13.3865 5.49995H12C10.1923 5.49995 8.65706 6.13552 7.39423 7.40667C6.13141 8.67784 5.5 10.2256 5.5 12.0499ZM18.5 11.95C18.5 11.632 18.4769 11.3118 18.4308 10.9894C18.3846 10.6669 18.307 10.3487 18.1981 10.0346C18.1532 9.89226 18.1583 9.75603 18.2135 9.6259C18.2686 9.49578 18.3571 9.40444 18.4789 9.35188C18.6045 9.29546 18.7292 9.29258 18.8529 9.34323C18.9766 9.39386 19.0609 9.49033 19.1058 9.63265C19.2391 10.0031 19.3381 10.3852 19.4029 10.7788C19.4676 11.1724 19.5 11.5628 19.5 11.95C19.5 14.0423 18.7699 15.8237 17.3096 17.2942C15.8494 18.7647 14.0795 19.5 12 19.5H10.6135L12.3596 21.2461C12.4532 21.3397 12.5032 21.4544 12.5096 21.5904C12.516 21.7262 12.466 21.8474 12.3596 21.9538C12.2532 22.0602 12.1353 22.1134 12.0058 22.1134C11.8763 22.1134 11.7583 22.0602 11.6519 21.9538L9.26345 19.5653C9.10192 19.4038 9.02115 19.2153 9.02115 19C9.02115 18.7846 9.10192 18.5961 9.26345 18.4346L11.6519 16.0461C11.7455 15.9525 11.8603 15.9025 11.9962 15.8961C12.1321 15.8897 12.2532 15.9397 12.3596 16.0461C12.466 16.1525 12.5192 16.2705 12.5192 16.4C12.5192 16.5294 12.466 16.6474 12.3596 16.7538L10.6135 18.5H12C13.8077 18.5 15.3429 17.8644 16.6058 16.5932C17.8686 15.3221 18.5 13.7743 18.5 11.95Z" fill="black"/>\n<path d="M14.4473 12C14.4473 13.3516 13.3516 14.4473 12 14.4473C10.6484 14.4473 9.55273 13.3516 9.55273 12C9.55273 10.6484 10.6484 9.55273 12 9.55273C13.3516 9.55273 14.4473 10.6484 14.4473 12Z" fill="black"/>\n</svg>\n',
                                        withExternalLayout: true,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        /* @__PURE__ */ _jsx7(motion6.div, {
                          className: "framer-1togmrv",
                          layoutDependency,
                          layoutId: "BHWuc6wgS",
                          style: {
                            backgroundColor:
                              "var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))",
                            borderBottomLeftRadius: 108,
                            borderBottomRightRadius: 108,
                            borderTopLeftRadius: 108,
                            borderTopRightRadius: 108,
                            boxShadow: "none",
                          },
                          variants: {
                            CDTOPoYwJ: {
                              boxShadow:
                                "inset 0px 1px 32px 9px rgba(255, 255, 255, 0.05)",
                            },
                          },
                          children: /* @__PURE__ */ _jsx7(Transition5, {
                            ...addPropertyOverrides5(
                              { CDTOPoYwJ: { value: transition1 } },
                              baseVariant,
                              gestureVariant
                            ),
                            children: /* @__PURE__ */ _jsx7(SVG5, {
                              className: "framer-wmmfv",
                              "data-framer-name": "Frame 15",
                              layout: "position",
                              layoutDependency,
                              layoutId: "eRNDyXM4I",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 48"><path d="M 22.649 22.11 C 23.525 21.178 24.093 20.038 24.661 18.899 C 25.991 16.229 27.322 13.559 32.605 13.559 L 34.342 13.559 C 35.883 13.559 37.024 14.808 37.023 16.349 C 37.023 17.889 35.774 19.137 34.233 19.137 L 32.604 19.137 C 27.321 19.137 25.99 21.373 24.66 23.608 C 24.539 23.81 24.419 24.012 24.295 24.213 C 24.419 24.416 24.539 24.62 24.66 24.824 C 25.99 27.082 27.321 29.34 32.604 29.34 L 34.472 29.34 C 35.881 29.34 37.023 30.481 37.023 31.89 C 37.024 33.299 35.881 34.441 34.472 34.441 L 32.605 34.441 C 27.322 34.441 25.991 31.89 24.661 29.34 C 24.095 28.256 23.53 27.172 22.662 26.284 C 21.486 27.339 19.755 28.079 16.715 28.079 L 15.863 28.079 C 13.716 28.079 11.976 26.339 11.976 24.194 C 11.976 22.048 13.716 20.309 15.863 20.309 L 16.715 20.309 C 19.744 20.309 21.474 21.051 22.649 22.11 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                              svgContentId: 564511839,
                              withExternalLayout: true,
                              ...addPropertyOverrides5(
                                {
                                  CDTOPoYwJ: {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 212 207"><g><defs><path d="M 97.993 95.348 C 101.78 91.328 104.238 86.414 106.695 81.5 C 112.453 69.986 118.21 58.472 141.068 58.472 L 148.581 58.472 C 155.249 58.472 160.184 63.859 160.183 70.503 C 160.181 77.145 154.777 82.529 148.11 82.529 L 141.064 82.529 C 118.206 82.529 112.448 92.169 106.691 101.809 C 106.17 102.681 105.649 103.553 105.115 104.418 C 105.649 105.292 106.17 106.173 106.691 107.054 C 112.448 116.79 118.206 126.527 141.064 126.527 L 149.143 126.527 C 155.239 126.527 160.181 131.45 160.183 137.524 C 160.184 143.6 155.241 148.526 149.143 148.526 L 141.068 148.526 C 118.21 148.526 112.453 137.527 106.695 126.527 C 104.249 121.854 101.803 117.181 98.046 113.352 C 92.959 117.898 85.469 121.089 72.318 121.089 L 68.631 121.089 C 59.344 121.089 51.815 113.588 51.815 104.335 C 51.815 95.081 59.344 87.58 68.631 87.58 L 72.318 87.58 C 85.423 87.58 92.907 90.781 97.993 95.348 Z" id="a1020z"></path><filter id="a1022z" x="-25.2%" y="-30.3%" width="150.2%" height="160.5%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="0" in="SourceAlpha" result="a1024z"></feOffset><feGaussianBlur stdDeviation="6.5" in="a1024z" result="a1025z"></feGaussianBlur><feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.09 0" type="matrix" in="a1025z" result="a1026z"></feColorMatrix></filter><filter id="a1027z" x="-0.9%" y="-2.2%" width="101.8%" height="104.3%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="0" in="SourceAlpha" result="a1029z"></feGaussianBlur><feOffset dx="-1" dy="-2" in="a1029z" result="a1030z"></feOffset><feComposite in="a1030z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1031z"></feComposite><feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0" type="matrix" in="a1031z" result="a1032z"></feColorMatrix></filter></defs><g filter="url(#a1022z)"><use fill="black" fill-opacity="1" stroke="black" stroke-opacity="0" strokeWidth="0" xlink:href="#a1020z" clipPath="url(#a1021z)"></use></g><use xlink:href="#a1020z" fill="hsl(0, 0%, 100%)" clipPath="url(#a1021z)"></use><use fill="black" fill-opacity="1" filter="url(#a1027z)" xlink:href="#a1020z"></use></g></svg>',
                                    svgContentId: 397634520,
                                  },
                                  RspHZjbvA: {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 94 92"><path d="M 43.45 42.377 C 45.129 40.59 46.219 38.406 47.308 36.222 C 49.861 31.105 52.414 25.988 62.549 25.988 L 65.88 25.988 C 68.837 25.988 71.025 28.382 71.024 31.335 C 71.024 34.287 68.627 36.679 65.671 36.679 L 62.547 36.679 C 52.412 36.679 49.859 40.964 47.306 45.248 C 47.075 45.636 46.844 46.024 46.608 46.408 C 46.844 46.796 47.075 47.188 47.306 47.579 C 49.859 51.907 52.412 56.234 62.547 56.234 L 66.129 56.234 C 68.832 56.234 71.024 58.422 71.024 61.122 C 71.025 63.822 68.833 66.012 66.129 66.012 L 62.549 66.012 C 52.414 66.012 49.861 61.123 47.308 56.234 C 46.224 54.157 45.139 52.08 43.473 50.378 C 41.218 52.399 37.897 53.817 32.065 53.817 L 30.431 53.817 C 26.313 53.817 22.975 50.483 22.975 46.371 C 22.975 42.258 26.313 38.925 30.431 38.925 L 32.065 38.925 C 37.876 38.925 41.195 40.347 43.45 42.377 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                                    svgContentId: 552771922,
                                  },
                                },
                                baseVariant,
                                gestureVariant
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    isDisplayed7() &&
                      /* @__PURE__ */ _jsx7(motion6.div, {
                        className: "framer-12cmvwa",
                        "data-framer-name":
                          "Style=outlined, State=enabled, Selected=true, Show icon=false",
                        layoutDependency,
                        layoutId: "PemICCCY5",
                        style: {
                          backgroundColor:
                            "var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239))",
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                          boxShadow:
                            "inset -1px -1px 0px 0px rgba(0, 0, 0, 0.15)",
                        },
                        children: /* @__PURE__ */ _jsx7(motion6.div, {
                          className: "framer-1ko8d44",
                          "data-framer-name": "state-layer",
                          layoutDependency,
                          layoutId: "p96NAqcgT",
                          children: /* @__PURE__ */ _jsx7(RichText3, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx7(motion6.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"PP Supply Sans Regular", sans-serif',
                                  "--framer-letter-spacing": "0.1px",
                                  "--framer-line-height": "20px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(55, 0, 58))",
                                },
                                children: "SYNTHESIZE:",
                              }),
                            }),
                            className: "framer-1xc11ty",
                            "data-framer-name": "label-text",
                            fonts: ["CUSTOM;PP Supply Sans Regular"],
                            layoutDependency,
                            layoutId: "CHq8RWHnu",
                            style: {
                              "--extracted-r6o4lv": "rgb(55, 0, 58)",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: true,
                          }),
                        }),
                      }),
                  ],
                }),
                isDisplayed1() &&
                  /* @__PURE__ */ _jsxs5(motion6.div, {
                    className: "framer-4fuql9",
                    "data-framer-name": "Frame 1069",
                    layoutDependency,
                    layoutId: "qBBzUFy05",
                    children: [
                      /* @__PURE__ */ _jsx7(motion6.div, {
                        className: "framer-9xr0lm",
                        "data-framer-name": "Button",
                        layoutDependency,
                        layoutId: "Rnbe2ugWo",
                        style: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        children:
                          isDisplayed1() &&
                          /* @__PURE__ */ _jsxs5(motion6.div, {
                            className: "framer-jg6s93",
                            "data-framer-name": "state-layer",
                            layoutDependency,
                            layoutId: "a8kznWgNw",
                            children: [
                              /* @__PURE__ */ _jsx7(motion6.div, {
                                className: "framer-1trg1ag",
                                "data-framer-name": "icon",
                                layoutDependency,
                                layoutId: "woNxE8IKQ",
                                children: /* @__PURE__ */ _jsx7(SVG5, {
                                  className: "framer-15peqkh",
                                  "data-framer-name": "icon",
                                  fill: "rgba(0,0,0,1)",
                                  intrinsicHeight: 12,
                                  intrinsicWidth: 12,
                                  layoutDependency,
                                  layoutId: "IGf4H7_d4",
                                  svg: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z" fill="#006973"/>\n</svg>\n',
                                  withExternalLayout: true,
                                }),
                              }),
                              /* @__PURE__ */ _jsx7(RichText3, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx7(
                                  React7.Fragment,
                                  {
                                    children: /* @__PURE__ */ _jsx7(motion6.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UFAgU3VwcGx5IFNhbnMtNTAw",
                                        "--framer-font-family":
                                          '"PP Supply Sans", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "0.1px",
                                        "--framer-line-height": "20px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(0, 105, 115))",
                                      },
                                      children: "Add Context",
                                    }),
                                  }
                                ),
                                className: "framer-1s5l2r8",
                                "data-framer-name": "label-text",
                                fonts: ["GF;PP Supply Sans-500"],
                                layoutDependency,
                                layoutId: "DSeRzKlnX",
                                style: {
                                  "--extracted-r6o4lv": " rgb(0, 105, 115)",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "center",
                                withExternalLayout: true,
                              }),
                            ],
                          }),
                      }),
                      /* @__PURE__ */ _jsx7(motion6.div, {
                        className: "framer-1j7qf8c",
                        "data-framer-name": "Button",
                        layoutDependency,
                        layoutId: "ddZNMNSdB",
                        style: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        children:
                          isDisplayed1() &&
                          /* @__PURE__ */ _jsxs5(motion6.div, {
                            className: "framer-r697fa",
                            "data-framer-name": "state-layer",
                            layoutDependency,
                            layoutId: "AApLais__",
                            children: [
                              /* @__PURE__ */ _jsx7(motion6.div, {
                                className: "framer-1l3eqf8",
                                "data-framer-name": "icon",
                                layoutDependency,
                                layoutId: "l36JTzfdi",
                                children: /* @__PURE__ */ _jsx7(SVG5, {
                                  className: "framer-1e7nb68",
                                  "data-framer-name": "icon",
                                  fill: "rgba(0,0,0,1)",
                                  intrinsicHeight: 12,
                                  intrinsicWidth: 12,
                                  layoutDependency,
                                  layoutId: "Iw0ZQRqOJ",
                                  svg: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z" fill="#006973"/>\n</svg>\n',
                                  withExternalLayout: true,
                                }),
                              }),
                              /* @__PURE__ */ _jsx7(RichText3, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx7(
                                  React7.Fragment,
                                  {
                                    children: /* @__PURE__ */ _jsx7(motion6.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UFAgU3VwcGx5IFNhbnMtNTAw",
                                        "--framer-font-family":
                                          '"PP Supply Sans", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "0.1px",
                                        "--framer-line-height": "20px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(0, 105, 115))",
                                      },
                                      children: "Import Document",
                                    }),
                                  }
                                ),
                                className: "framer-16jmr7f",
                                "data-framer-name": "label-text",
                                fonts: ["GF;PP Supply Sans-500"],
                                layoutDependency,
                                layoutId: "ycs7iHzcA",
                                style: {
                                  "--extracted-r6o4lv": " rgb(0, 105, 115)",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "center",
                                withExternalLayout: true,
                              }),
                            ],
                          }),
                      }),
                      /* @__PURE__ */ _jsx7(motion6.div, {
                        className: "framer-1oqfwc7",
                        "data-framer-name": "Button",
                        layoutDependency,
                        layoutId: "FKF0FyMcH",
                        style: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        children:
                          isDisplayed1() &&
                          /* @__PURE__ */ _jsxs5(motion6.div, {
                            className: "framer-i9rcfr",
                            "data-framer-name": "state-layer",
                            layoutDependency,
                            layoutId: "BZ3pT8Y5b",
                            style: { backgroundColor: "rgb(240, 240, 240)" },
                            children: [
                              /* @__PURE__ */ _jsx7(motion6.div, {
                                className: "framer-1cp1dxx",
                                "data-framer-name": "icon",
                                layoutDependency,
                                layoutId: "fwQBSQVFw",
                                children: /* @__PURE__ */ _jsx7(SVG5, {
                                  className: "framer-1n3aflp",
                                  "data-framer-name": "icon",
                                  fill: "rgba(0,0,0,1)",
                                  intrinsicHeight: 12,
                                  intrinsicWidth: 12,
                                  layoutDependency,
                                  layoutId: "D49MtMch1",
                                  svg: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z" fill="#006973"/>\n</svg>\n',
                                  withExternalLayout: true,
                                }),
                              }),
                              /* @__PURE__ */ _jsx7(RichText3, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx7(
                                  React7.Fragment,
                                  {
                                    children: /* @__PURE__ */ _jsx7(motion6.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UFAgU3VwcGx5IFNhbnMtNTAw",
                                        "--framer-font-family":
                                          '"PP Supply Sans", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "0.1px",
                                        "--framer-line-height": "20px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(0, 105, 115))",
                                      },
                                      children: "Random Idea",
                                    }),
                                  }
                                ),
                                className: "framer-1j2s96v",
                                "data-framer-name": "label-text",
                                fonts: ["GF;PP Supply Sans-500"],
                                layoutDependency,
                                layoutId: "g6U9tFdki",
                                style: {
                                  "--extracted-r6o4lv": " rgb(0, 105, 115)",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "center",
                                withExternalLayout: true,
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
});
var css6 = [
  '.framer-AaXBB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-AaXBB .framer-b9y4c0 { display: block; }",
  ".framer-AaXBB .framer-1xd6uv3 { height: 537px; overflow: hidden; position: relative; width: 1009px; }",
  ".framer-AaXBB .framer-th6quy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 50%; width: 360px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-AaXBB .framer-102rpj4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 1px; z-index: 1; }",
  ".framer-AaXBB .framer-1x3xeex { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
  ".framer-AaXBB .framer-onwzwe, .framer-AaXBB .framer-8y7dsi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }",
  ".framer-AaXBB .framer-1d3you, .framer-AaXBB .framer-vyt6dv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-AaXBB .framer-1klpfuo, .framer-AaXBB .framer-1o52rms { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }",
  ".framer-AaXBB .framer-4hz2zg, .framer-AaXBB .framer-1xo5sxg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }",
  ".framer-AaXBB .framer-1pd2dzy { bottom: 4px; flex: none; left: 4px; position: absolute; right: 5px; top: 4px; }",
  ".framer-AaXBB .framer-2jm16e { bottom: 6px; flex: none; left: 3px; position: absolute; right: 3px; top: 6px; }",
  ".framer-AaXBB .framer-a5vvyf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 49px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
  ".framer-AaXBB .framer-er2jrd, .framer-AaXBB .framer-1xc11ty, .framer-AaXBB .framer-1s5l2r8, .framer-AaXBB .framer-16jmr7f, .framer-AaXBB .framer-1j2s96v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  ".framer-AaXBB .framer-b3bbqg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
  ".framer-AaXBB .framer-q46j6z-container { flex: 1 0 0px; height: 50px; position: relative; width: 1px; }",
  ".framer-AaXBB .framer-o3gcmt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-AaXBB .framer-dpkc67 { bottom: 4px; flex: none; left: 3px; position: absolute; right: 4px; top: 3px; }",
  ".framer-AaXBB .framer-11pjihq { bottom: -8px; flex: none; left: -8px; position: absolute; right: -8px; top: -8px; }",
  ".framer-AaXBB .framer-1togmrv { flex: none; height: 49px; overflow: visible; position: relative; width: 50px; }",
  ".framer-AaXBB .framer-wmmfv { bottom: 0px; flex: none; height: 48px; left: calc(50.00000000000002% - 49px / 2); position: absolute; width: 49px; }",
  ".framer-AaXBB .framer-12cmvwa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 35px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-AaXBB .framer-1ko8d44 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 32px; justify-content: center; overflow: visible; padding: 6px 16px 6px 16px; position: relative; width: min-content; }",
  ".framer-AaXBB .framer-4fuql9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 100%; }",
  ".framer-AaXBB .framer-9xr0lm, .framer-AaXBB .framer-1j7qf8c, .framer-AaXBB .framer-1oqfwc7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
  ".framer-AaXBB .framer-jg6s93, .framer-AaXBB .framer-r697fa, .framer-AaXBB .framer-i9rcfr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: center; overflow: visible; padding: 10px 16px 10px 12px; position: relative; width: 100%; }",
  ".framer-AaXBB .framer-1trg1ag, .framer-AaXBB .framer-1l3eqf8, .framer-AaXBB .framer-1cp1dxx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 18px; }",
  ".framer-AaXBB .framer-15peqkh, .framer-AaXBB .framer-1e7nb68, .framer-AaXBB .framer-1n3aflp { bottom: 3px; flex: none; left: 3px; position: absolute; right: 3px; top: 3px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-AaXBB .framer-th6quy, .framer-AaXBB .framer-102rpj4, .framer-AaXBB .framer-1x3xeex, .framer-AaXBB .framer-onwzwe, .framer-AaXBB .framer-1d3you, .framer-AaXBB .framer-1klpfuo, .framer-AaXBB .framer-a5vvyf, .framer-AaXBB .framer-b3bbqg, .framer-AaXBB .framer-o3gcmt, .framer-AaXBB .framer-8y7dsi, .framer-AaXBB .framer-vyt6dv, .framer-AaXBB .framer-1o52rms, .framer-AaXBB .framer-12cmvwa, .framer-AaXBB .framer-1ko8d44, .framer-AaXBB .framer-4fuql9, .framer-AaXBB .framer-9xr0lm, .framer-AaXBB .framer-jg6s93, .framer-AaXBB .framer-1j7qf8c, .framer-AaXBB .framer-r697fa, .framer-AaXBB .framer-1oqfwc7, .framer-AaXBB .framer-i9rcfr { gap: 0px; } .framer-AaXBB .framer-th6quy > *, .framer-AaXBB .framer-1x3xeex > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-AaXBB .framer-th6quy > :first-child, .framer-AaXBB .framer-1x3xeex > :first-child, .framer-AaXBB .framer-1d3you > :first-child, .framer-AaXBB .framer-1klpfuo > :first-child, .framer-AaXBB .framer-a5vvyf > :first-child, .framer-AaXBB .framer-b3bbqg > :first-child, .framer-AaXBB .framer-o3gcmt > :first-child, .framer-AaXBB .framer-vyt6dv > :first-child, .framer-AaXBB .framer-1o52rms > :first-child, .framer-AaXBB .framer-12cmvwa > :first-child, .framer-AaXBB .framer-1ko8d44 > :first-child, .framer-AaXBB .framer-jg6s93 > :first-child, .framer-AaXBB .framer-r697fa > :first-child, .framer-AaXBB .framer-i9rcfr > :first-child { margin-left: 0px; } .framer-AaXBB .framer-th6quy > :last-child, .framer-AaXBB .framer-1x3xeex > :last-child, .framer-AaXBB .framer-1d3you > :last-child, .framer-AaXBB .framer-1klpfuo > :last-child, .framer-AaXBB .framer-a5vvyf > :last-child, .framer-AaXBB .framer-b3bbqg > :last-child, .framer-AaXBB .framer-o3gcmt > :last-child, .framer-AaXBB .framer-vyt6dv > :last-child, .framer-AaXBB .framer-1o52rms > :last-child, .framer-AaXBB .framer-12cmvwa > :last-child, .framer-AaXBB .framer-1ko8d44 > :last-child, .framer-AaXBB .framer-jg6s93 > :last-child, .framer-AaXBB .framer-r697fa > :last-child, .framer-AaXBB .framer-i9rcfr > :last-child { margin-right: 0px; } .framer-AaXBB .framer-102rpj4 > *, .framer-AaXBB .framer-4fuql9 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-AaXBB .framer-102rpj4 > :first-child, .framer-AaXBB .framer-onwzwe > :first-child, .framer-AaXBB .framer-8y7dsi > :first-child, .framer-AaXBB .framer-4fuql9 > :first-child, .framer-AaXBB .framer-9xr0lm > :first-child, .framer-AaXBB .framer-1j7qf8c > :first-child, .framer-AaXBB .framer-1oqfwc7 > :first-child { margin-top: 0px; } .framer-AaXBB .framer-102rpj4 > :last-child, .framer-AaXBB .framer-onwzwe > :last-child, .framer-AaXBB .framer-8y7dsi > :last-child, .framer-AaXBB .framer-4fuql9 > :last-child, .framer-AaXBB .framer-9xr0lm > :last-child, .framer-AaXBB .framer-1j7qf8c > :last-child, .framer-AaXBB .framer-1oqfwc7 > :last-child { margin-bottom: 0px; } .framer-AaXBB .framer-onwzwe > *, .framer-AaXBB .framer-8y7dsi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-AaXBB .framer-1d3you > *, .framer-AaXBB .framer-1klpfuo > *, .framer-AaXBB .framer-a5vvyf > *, .framer-AaXBB .framer-b3bbqg > *, .framer-AaXBB .framer-vyt6dv > *, .framer-AaXBB .framer-1o52rms > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-AaXBB .framer-o3gcmt > *, .framer-AaXBB .framer-12cmvwa > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-AaXBB .framer-1ko8d44 > *, .framer-AaXBB .framer-jg6s93 > *, .framer-AaXBB .framer-r697fa > *, .framer-AaXBB .framer-i9rcfr > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-AaXBB .framer-9xr0lm > *, .framer-AaXBB .framer-1j7qf8c > *, .framer-AaXBB .framer-1oqfwc7 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }",
  ".framer-AaXBB.framer-v-15mvvd2 .framer-th6quy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 98px); width: 98px; }",
  ".framer-AaXBB.framer-v-15mvvd2 .framer-102rpj4, .framer-AaXBB.framer-v-wmnvsy .framer-102rpj4 { flex: none; height: 188%; width: min-content; }",
  ".framer-AaXBB.framer-v-15mvvd2 .framer-1x3xeex { height: 90px; width: 90px; }",
  ".framer-AaXBB.framer-v-15mvvd2 .framer-1togmrv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 90px); width: 90px; }",
  ".framer-AaXBB.framer-v-15mvvd2 .framer-wmmfv { bottom: unset; height: 92px; left: calc(50.00000000000002% - 94px / 2); top: calc(51.11111111111113% - 92px / 2); width: 94px; }",
  ".framer-AaXBB.framer-v-1u2jgkx .framer-102rpj4 { flex: none; width: 360px; }",
  ".framer-AaXBB.framer-v-15ekw7u .framer-th6quy, .framer-AaXBB.framer-v-14ttska .framer-th6quy { height: 57px; left: calc(50.04955401387514% - 584px / 2); top: calc(49.90689013035384% - 57px / 2); width: 584px; }",
  ".framer-AaXBB.framer-v-wmnvsy .framer-th6quy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 186px); width: 186px; }",
  ".framer-AaXBB.framer-v-wmnvsy .framer-1x3xeex { height: 178px; width: 178px; }",
  ".framer-AaXBB.framer-v-wmnvsy .framer-1togmrv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 178px); width: 178px; }",
  ".framer-AaXBB.framer-v-wmnvsy .framer-wmmfv { bottom: unset; height: 207px; left: calc(50.00000000000002% - 212px / 2); top: calc(51.123595505618% - 207px / 2); width: 212px; }",
  ".framer-AaXBB.framer-v-14ttska .framer-1x3xeex, .framer-AaXBB.framer-v-n0zl46 .framer-1x3xeex { align-content: center; align-items: center; }",
  ".framer-AaXBB.framer-v-14ttska .framer-onwzwe, .framer-AaXBB.framer-v-n0zl46 .framer-onwzwe { order: 0; }",
  ".framer-AaXBB.framer-v-14ttska .framer-a5vvyf, .framer-AaXBB.framer-v-n0zl46 .framer-a5vvyf { order: 2; }",
  ".framer-AaXBB.framer-v-14ttska .framer-o3gcmt, .framer-AaXBB.framer-v-n0zl46 .framer-o3gcmt { order: 3; }",
  ".framer-AaXBB.framer-v-14ttska .framer-12cmvwa { order: 1; }",
  ".framer-AaXBB.framer-v-n0zl46 .framer-th6quy { height: 301px; left: calc(50.04955401387514% - 326px / 2); top: calc(47.113594040968366% - 301px / 2); width: 326px; }",
];
var FramerpSxPslti_ = withCSS7(Component5, css6, "framer-AaXBB");
var stdin_default5 = FramerpSxPslti_;
FramerpSxPslti_.displayName = "Seed";
FramerpSxPslti_.defaultProps = { height: 537, width: 1009 };
addPropertyControls7(FramerpSxPslti_, {
  variant: {
    options: [
      "R_0SntBXV",
      "RspHZjbvA",
      "KzyHUFutd",
      "lR29aQ4aC",
      "CDTOPoYwJ",
      "AKBlJHd8s",
      "NfdKYRGKU",
    ],
    optionTitles: [
      "search",
      "seed",
      "expanded",
      "type",
      "logo",
      "generate",
      "Variant 7",
    ],
    title: "Variant",
    type: ControlType10.Enum,
  },
});
addFonts5(FramerpSxPslti_, [
  {
    family: "PP Supply Sans Variable",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/pSxPslti_:default",
      url: "https://framerusercontent.com/assets/nTnfVPKvx4BNtayjhoEgyhNSc.ttf",
    },
    url: "https://framerusercontent.com/assets/nTnfVPKvx4BNtayjhoEgyhNSc.ttf",
  },
  {
    family: "PP Supply Sans Regular",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/pSxPslti_:default",
      url: "https://framerusercontent.com/assets/IIwW8kvIZ9g5LjEOU4ekY5CtLI.ttf",
    },
    url: "https://framerusercontent.com/assets/IIwW8kvIZ9g5LjEOU4ekY5CtLI.ttf",
  },
  ...TypewriterFonts3,
]);

// https:https://framer.com/m/FYLO-COMPOSITION-5nyv.js@DAcrimz6V4BZdK2dLvuy
var NodeFonts = getFonts4(stdin_default4);
var SeedFonts = getFonts4(stdin_default5);
var cycleOrder6 = [
  "zEXSsGxpE",
  "HovROSEim",
  "lBUZui6j9",
  "dVLWELU6e",
  "XACXI8mDn",
  "vf_oeYc8q",
  "Wzv1r0oKb",
  "ovIpGU7cl",
  "aOPZX8nJO",
  "X7nXpe0gP",
  "y0Wse_j8v",
  "QcEIwdpHn",
  "r8IR85ZDv",
  "qMUngWgkC",
  "gDTDJiCJ2",
  "p6HKTvlB3",
  "rfZM8jP4B",
  "epmnVbMnt",
  "UQg3oaiFk",
  "kFGmGEOUz",
  "l5FvQV66Q",
  "udHfq45LS",
  "Z1sTRLzN1",
  "cq7D62bxc",
];
var variantClassNames6 = {
  aOPZX8nJO: "framer-v-162rgdv",
  cq7D62bxc: "framer-v-13llhv3",
  dVLWELU6e: "framer-v-d973em",
  epmnVbMnt: "framer-v-q73e3h",
  gDTDJiCJ2: "framer-v-1ewhbs6",
  HovROSEim: "framer-v-f73ajw",
  kFGmGEOUz: "framer-v-16mzam7",
  l5FvQV66Q: "framer-v-tv2zos",
  lBUZui6j9: "framer-v-1odncvf",
  ovIpGU7cl: "framer-v-15llivf",
  p6HKTvlB3: "framer-v-47329",
  QcEIwdpHn: "framer-v-87eqop",
  qMUngWgkC: "framer-v-ewze6y",
  r8IR85ZDv: "framer-v-zdyy2d",
  rfZM8jP4B: "framer-v-n0vpn9",
  udHfq45LS: "framer-v-1j14qwb",
  UQg3oaiFk: "framer-v-1xwigab",
  vf_oeYc8q: "framer-v-yrn57e",
  Wzv1r0oKb: "framer-v-1l5e6kx",
  X7nXpe0gP: "framer-v-18c1qok",
  XACXI8mDn: "framer-v-13tsvzn",
  y0Wse_j8v: "framer-v-f3lruz",
  Z1sTRLzN1: "framer-v-1sk9d83",
  zEXSsGxpE: "framer-v-hpdod",
};
function addPropertyOverrides6(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant])
      );
  return nextOverrides;
}
var transitions6 = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  dVLWELU6e: {
    delay: 0,
    duration: 5.8,
    ease: [0.81, -0.01, 0.28, 1],
    type: "tween",
  },
  HovROSEim: {
    delay: 0,
    duration: 3.75,
    ease: [0.66, -0.02, 0.27, 1.04],
    type: "tween",
  },
  lBUZui6j9: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  QcEIwdpHn: { damping: 60, delay: 0, mass: 1, stiffness: 371, type: "spring" },
  vf_oeYc8q: {
    delay: 0,
    duration: 5.8,
    ease: [0.81, -0.01, 0.28, 1],
    type: "tween",
  },
  XACXI8mDn: {
    delay: 0,
    duration: 5.8,
    ease: [0.81, -0.01, 0.28, 1],
    type: "tween",
  },
};
var transformTemplate4 = (_, t) => `translateX(-50%) ${t}`;
var transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
var transformTemplate22 = (_, t) => `translateY(-50%) ${t}`;
var transition12 = {
  delay: 0,
  duration: 5.6,
  ease: [0.66, -0.02, 0.12, 1],
  type: "tween",
};
var Transition6 = ({ value, children }) => {
  const config = React8.useContext(MotionConfigContext6);
  const transition =
    value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React8.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)]
  );
  return /* @__PURE__ */ _jsx8(MotionConfigContext6.Provider, {
    value: contextValue,
    children,
  });
};
var transition2 = {
  delay: 0,
  duration: 5,
  ease: [0.66, -0.02, 0.12, 1],
  type: "tween",
};
var humanReadableVariantMap6 = {
  "Variant 1": "HovROSEim",
  "Variant 10": "X7nXpe0gP",
  "Variant 11": "y0Wse_j8v",
  "Variant 12": "QcEIwdpHn",
  "Variant 13": "r8IR85ZDv",
  "Variant 14": "qMUngWgkC",
  "Variant 15": "gDTDJiCJ2",
  "Variant 16": "p6HKTvlB3",
  "Variant 17": "rfZM8jP4B",
  "Variant 18": "epmnVbMnt",
  "Variant 19": "UQg3oaiFk",
  "Variant 2": "lBUZui6j9",
  "Variant 21": "kFGmGEOUz",
  "Variant 22": "l5FvQV66Q",
  "Variant 23": "udHfq45LS",
  "Variant 24": "Z1sTRLzN1",
  "Variant 25": "cq7D62bxc",
  "Variant 3": "dVLWELU6e",
  "Variant 4": "XACXI8mDn",
  "Variant 5": "vf_oeYc8q",
  "Variant 6": "zEXSsGxpE",
  "Variant 7": "Wzv1r0oKb",
  "Variant 8": "ovIpGU7cl",
  "Variant 9": "aOPZX8nJO",
};
var getProps6 = ({ height, id, width, ...props }) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref =
        (_variant = humanReadableVariantMap6[props.variant]) !== null &&
        _variant !== void 0
          ? _variant
          : props.variant) !== null && ref !== void 0
        ? ref
        : "zEXSsGxpE",
  };
};
var createLayoutDependency6 = (props, variants) =>
  variants.join("-") + props.layoutDependency;
var Component6 = /* @__PURE__ */ React8.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo6();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    ...restProps
  } = getProps6(props);
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState6({
    cycleOrder: cycleOrder6,
    defaultVariant: "zEXSsGxpE",
    transitions: transitions6,
    variant,
    variantClassNames: variantClassNames6,
  });
  const layoutDependency = createLayoutDependency6(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback4(baseVariant);
  const onTap1tj2285 = activeVariantCallback(async (...args) => {
    setVariant("Wzv1r0oKb");
  });
  const onTap6nb57o = activeVariantCallback(async (...args) => {
    setVariant("dVLWELU6e");
  });
  const onTap1tb5txm = activeVariantCallback(async (...args) => {
    setVariant("XACXI8mDn");
  });
  const onTap1lpg9gm = activeVariantCallback(async (...args) => {
    setVariant("vf_oeYc8q");
  });
  const onTap1rkfl4l = activeVariantCallback(async (...args) => {
    setVariant("zEXSsGxpE");
  });
  const onTap1kvt9g8 = activeVariantCallback(async (...args) => {
    setVariant("ovIpGU7cl");
  });
  const onTapw9lckf = activeVariantCallback(async (...args) => {
    setVariant("aOPZX8nJO");
  });
  const onTapbyhlj = activeVariantCallback(async (...args) => {
    setVariant("X7nXpe0gP");
  });
  const onTapclnrb4 = activeVariantCallback(async (...args) => {
    setVariant("y0Wse_j8v");
  });
  const onTapg5dw3g = activeVariantCallback(async (...args) => {
    setVariant("QcEIwdpHn");
  });
  const onTap15w2l9r = activeVariantCallback(async (...args) => {
    setVariant("r8IR85ZDv");
  });
  const onTap8b1n2z = activeVariantCallback(async (...args) => {
    setVariant("qMUngWgkC");
  });
  const onTap16gremk = activeVariantCallback(async (...args) => {
    setVariant("gDTDJiCJ2");
  });
  const onTapnjmz91 = activeVariantCallback(async (...args) => {
    setVariant("p6HKTvlB3");
  });
  const onTap1t6fcap = activeVariantCallback(async (...args) => {
    setVariant("rfZM8jP4B");
  });
  const onTapald0ip = activeVariantCallback(async (...args) => {
    setVariant("epmnVbMnt");
  });
  const onTapob2d4n = activeVariantCallback(async (...args) => {
    setVariant("UQg3oaiFk");
  });
  const onTap18k5k04 = activeVariantCallback(async (...args) => {
    setVariant("kFGmGEOUz");
  });
  const onTapdgwaag = activeVariantCallback(async (...args) => {
    setVariant("l5FvQV66Q");
  });
  const onTapmj47t2 = activeVariantCallback(async (...args) => {
    setVariant("udHfq45LS");
  });
  const onTap1ide8ge = activeVariantCallback(async (...args) => {
    setVariant("Z1sTRLzN1");
  });
  const onTap11u4nzo = activeVariantCallback(async (...args) => {
    setVariant("cq7D62bxc");
  });
  const isDisplayed = () => {
    if (
      [
        "QcEIwdpHn",
        "r8IR85ZDv",
        "qMUngWgkC",
        "gDTDJiCJ2",
        "p6HKTvlB3",
        "rfZM8jP4B",
        "epmnVbMnt",
        "UQg3oaiFk",
        "kFGmGEOUz",
        "l5FvQV66Q",
        "udHfq45LS",
        "Z1sTRLzN1",
        "cq7D62bxc",
      ].includes(baseVariant)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed1 = () => {
    if (["QcEIwdpHn", "Z1sTRLzN1", "cq7D62bxc"].includes(baseVariant)) {
      return false;
    }
    return true;
  };
  const isDisplayed2 = () => {
    if (
      [
        "y0Wse_j8v",
        "QcEIwdpHn",
        "r8IR85ZDv",
        "qMUngWgkC",
        "gDTDJiCJ2",
        "p6HKTvlB3",
        "rfZM8jP4B",
        "epmnVbMnt",
        "UQg3oaiFk",
        "kFGmGEOUz",
        "l5FvQV66Q",
        "udHfq45LS",
        "Z1sTRLzN1",
        "cq7D62bxc",
      ].includes(baseVariant)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed3 = () => {
    if (baseVariant === "cq7D62bxc") {
      return false;
    }
    return true;
  };
  const isDisplayed4 = () => {
    if (
      [
        "r8IR85ZDv",
        "qMUngWgkC",
        "gDTDJiCJ2",
        "p6HKTvlB3",
        "rfZM8jP4B",
        "epmnVbMnt",
        "UQg3oaiFk",
        "kFGmGEOUz",
        "l5FvQV66Q",
        "udHfq45LS",
        "Z1sTRLzN1",
        "cq7D62bxc",
      ].includes(baseVariant)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed5 = () => {
    if (
      [
        "qMUngWgkC",
        "gDTDJiCJ2",
        "p6HKTvlB3",
        "rfZM8jP4B",
        "epmnVbMnt",
        "UQg3oaiFk",
        "kFGmGEOUz",
        "l5FvQV66Q",
        "udHfq45LS",
        "Z1sTRLzN1",
        "cq7D62bxc",
      ].includes(baseVariant)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed6 = () => {
    if (["udHfq45LS", "Z1sTRLzN1", "cq7D62bxc"].includes(baseVariant)) {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (baseVariant === "qMUngWgkC") {
      return true;
    }
    return false;
  };
  const isDisplayed8 = () => {
    if (["rfZM8jP4B", "epmnVbMnt", "UQg3oaiFk"].includes(baseVariant)) {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React8.useId();
  return /* @__PURE__ */ _jsx8(LayoutGroup6, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx8(motion7.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx6("framer-ZiJgx", classNames),
      style: { display: "contents" },
      children: /* @__PURE__ */ _jsx8(Transition6, {
        value: transition,
        children: /* @__PURE__ */ _jsxs6(motion7.div, {
          ...restProps,
          className: cx6("framer-hpdod", className2),
          "data-framer-name": "Variant 6",
          "data-highlight": true,
          layoutDependency,
          layoutId: "zEXSsGxpE",
          onTap: onTap1tj2285,
          ref,
          style: { backgroundColor: "", ...style },
          ...addPropertyOverrides6(
            {
              aOPZX8nJO: { "data-framer-name": "Variant 9", onTap: onTapbyhlj },
              cq7D62bxc: {
                "data-framer-name": "Variant 25",
                "data-highlight": void 0,
                onTap: void 0,
              },
              dVLWELU6e: {
                "data-framer-name": "Variant 3",
                onTap: onTap1tb5txm,
              },
              epmnVbMnt: {
                "data-framer-name": "Variant 18",
                onTap: onTapob2d4n,
              },
              gDTDJiCJ2: {
                "data-framer-name": "Variant 15",
                onTap: onTapnjmz91,
              },
              HovROSEim: {
                "data-framer-name": "Variant 1",
                onTap: onTap6nb57o,
              },
              kFGmGEOUz: {
                "data-framer-name": "Variant 21",
                onTap: onTapdgwaag,
              },
              l5FvQV66Q: {
                "data-framer-name": "Variant 22",
                onTap: onTapmj47t2,
              },
              lBUZui6j9: {
                "data-framer-name": "Variant 2",
                onTap: onTap6nb57o,
              },
              ovIpGU7cl: {
                "data-framer-name": "Variant 8",
                onTap: onTapw9lckf,
              },
              p6HKTvlB3: {
                "data-framer-name": "Variant 16",
                onTap: onTap1t6fcap,
              },
              QcEIwdpHn: {
                "data-framer-name": "Variant 12",
                onTap: onTap15w2l9r,
              },
              qMUngWgkC: {
                "data-framer-name": "Variant 14",
                onTap: onTap16gremk,
              },
              r8IR85ZDv: {
                "data-framer-name": "Variant 13",
                onTap: onTap8b1n2z,
              },
              rfZM8jP4B: {
                "data-framer-name": "Variant 17",
                onTap: onTapald0ip,
              },
              udHfq45LS: {
                "data-framer-name": "Variant 23",
                onTap: onTap1ide8ge,
              },
              UQg3oaiFk: {
                "data-framer-name": "Variant 19",
                onTap: onTap18k5k04,
              },
              vf_oeYc8q: {
                "data-framer-name": "Variant 5",
                onTap: onTap1rkfl4l,
              },
              Wzv1r0oKb: {
                "data-framer-name": "Variant 7",
                onTap: onTap1kvt9g8,
              },
              X7nXpe0gP: {
                "data-framer-name": "Variant 10",
                onTap: onTapclnrb4,
              },
              XACXI8mDn: {
                "data-framer-name": "Variant 4",
                onTap: onTap1lpg9gm,
              },
              y0Wse_j8v: {
                "data-framer-name": "Variant 11",
                onTap: onTapg5dw3g,
              },
              Z1sTRLzN1: {
                "data-framer-name": "Variant 24",
                onTap: onTap11u4nzo,
              },
            },
            baseVariant,
            gestureVariant
          ),
          children: [
            isDisplayed() &&
              /* @__PURE__ */ _jsxs6(motion7.div, {
                className: "framer-6s0tzo",
                "data-framer-name": "Layer 3",
                layoutDependency,
                layoutId: "IhV5X0KRI",
                style: { filter: "none", WebkitFilter: "none" },
                variants: {
                  cq7D62bxc: { filter: "blur(1px)", WebkitFilter: "blur(1px)" },
                  epmnVbMnt: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  gDTDJiCJ2: { filter: "blur(5px)", WebkitFilter: "blur(5px)" },
                  kFGmGEOUz: { filter: "blur(7px)", WebkitFilter: "blur(7px)" },
                  l5FvQV66Q: { filter: "blur(2px)", WebkitFilter: "blur(2px)" },
                  p6HKTvlB3: { filter: "blur(7px)", WebkitFilter: "blur(7px)" },
                  rfZM8jP4B: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  udHfq45LS: { filter: "blur(1px)", WebkitFilter: "blur(1px)" },
                  UQg3oaiFk: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  Z1sTRLzN1: { filter: "blur(1px)", WebkitFilter: "blur(1px)" },
                },
                children: [
                  isDisplayed1() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-4b524j-container",
                      layoutDependency,
                      layoutId: "WWuXDBWRZ-container",
                      style: { opacity: 1 },
                      variants: { udHfq45LS: { opacity: 0 } },
                      ...addPropertyOverrides6(
                        {
                          epmnVbMnt: { transformTemplate: transformTemplate4 },
                          rfZM8jP4B: { transformTemplate: transformTemplate4 },
                          UQg3oaiFk: { transformTemplate: transformTemplate4 },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "WWuXDBWRZ",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "WWuXDBWRZ",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "vVjMhdARB",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "K8oqZ2hdT" },
                            kFGmGEOUz: { variant: "K8oqZ2hdT" },
                            l5FvQV66Q: { variant: "K8oqZ2hdT" },
                            p6HKTvlB3: { variant: "K8oqZ2hdT" },
                            qMUngWgkC: { variant: "K8oqZ2hdT" },
                            r8IR85ZDv: { variant: "K8oqZ2hdT" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "K8oqZ2hdT" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed1() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-vvhei8-container",
                      layoutDependency,
                      layoutId: "EiFaCbusC-container",
                      style: { opacity: 1 },
                      transformTemplate: transformTemplate4,
                      variants: { udHfq45LS: { opacity: 0 } },
                      ...addPropertyOverrides6(
                        {
                          epmnVbMnt: { transformTemplate: void 0 },
                          rfZM8jP4B: { transformTemplate: void 0 },
                          udHfq45LS: { transformTemplate: void 0 },
                          UQg3oaiFk: { transformTemplate: void 0 },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "EiFaCbusC",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "EiFaCbusC",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "vVjMhdARB",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "K8oqZ2hdT" },
                            kFGmGEOUz: { variant: "K8oqZ2hdT" },
                            l5FvQV66Q: { variant: "K8oqZ2hdT" },
                            p6HKTvlB3: { variant: "K8oqZ2hdT" },
                            qMUngWgkC: { variant: "K8oqZ2hdT" },
                            r8IR85ZDv: { variant: "K8oqZ2hdT" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "K8oqZ2hdT" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed1() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-d60suy-container",
                      layoutDependency,
                      layoutId: "UrEVv8Wpi-container",
                      style: { opacity: 1 },
                      variants: { udHfq45LS: { opacity: 0 } },
                      ...addPropertyOverrides6(
                        {
                          epmnVbMnt: { transformTemplate: transformTemplate4 },
                          rfZM8jP4B: { transformTemplate: transformTemplate4 },
                          UQg3oaiFk: { transformTemplate: transformTemplate4 },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "UrEVv8Wpi",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "UrEVv8Wpi",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "vVjMhdARB",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "K8oqZ2hdT" },
                            kFGmGEOUz: { variant: "K8oqZ2hdT" },
                            l5FvQV66Q: { variant: "K8oqZ2hdT" },
                            p6HKTvlB3: { variant: "K8oqZ2hdT" },
                            qMUngWgkC: { variant: "K8oqZ2hdT" },
                            r8IR85ZDv: { variant: "K8oqZ2hdT" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "K8oqZ2hdT" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed1() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-1iaswxc-container",
                      layoutDependency,
                      layoutId: "damywTtdg-container",
                      style: { opacity: 1 },
                      variants: { udHfq45LS: { opacity: 0 } },
                      ...addPropertyOverrides6(
                        {
                          epmnVbMnt: { transformTemplate: transformTemplate1 },
                          rfZM8jP4B: { transformTemplate: transformTemplate1 },
                          udHfq45LS: { transformTemplate: transformTemplate22 },
                          UQg3oaiFk: { transformTemplate: transformTemplate1 },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "damywTtdg",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "damywTtdg",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "vVjMhdARB",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "K8oqZ2hdT" },
                            kFGmGEOUz: { variant: "K8oqZ2hdT" },
                            l5FvQV66Q: { variant: "K8oqZ2hdT" },
                            p6HKTvlB3: { variant: "K8oqZ2hdT" },
                            qMUngWgkC: { variant: "K8oqZ2hdT" },
                            r8IR85ZDv: { variant: "K8oqZ2hdT" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "K8oqZ2hdT" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed1() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-ereqn5-container",
                      layoutDependency,
                      layoutId: "GNBmiGjGk-container",
                      style: { opacity: 1 },
                      variants: { udHfq45LS: { opacity: 0 } },
                      ...addPropertyOverrides6(
                        {
                          epmnVbMnt: { transformTemplate: transformTemplate4 },
                          rfZM8jP4B: { transformTemplate: transformTemplate4 },
                          UQg3oaiFk: { transformTemplate: transformTemplate4 },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "GNBmiGjGk",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "GNBmiGjGk",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "vVjMhdARB",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "K8oqZ2hdT" },
                            kFGmGEOUz: { variant: "K8oqZ2hdT" },
                            l5FvQV66Q: { variant: "K8oqZ2hdT" },
                            p6HKTvlB3: { variant: "K8oqZ2hdT" },
                            qMUngWgkC: { variant: "K8oqZ2hdT" },
                            r8IR85ZDv: { variant: "K8oqZ2hdT" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "K8oqZ2hdT" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed1() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-8jq7kp-container",
                      layoutDependency,
                      layoutId: "yT9ZoWJyq-container",
                      style: { opacity: 1 },
                      variants: { udHfq45LS: { opacity: 0 } },
                      ...addPropertyOverrides6(
                        {
                          epmnVbMnt: { transformTemplate: transformTemplate4 },
                          rfZM8jP4B: { transformTemplate: transformTemplate4 },
                          udHfq45LS: { transformTemplate: transformTemplate4 },
                          UQg3oaiFk: { transformTemplate: transformTemplate4 },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "yT9ZoWJyq",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "yT9ZoWJyq",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "vVjMhdARB",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "K8oqZ2hdT" },
                            kFGmGEOUz: { variant: "K8oqZ2hdT" },
                            l5FvQV66Q: { variant: "K8oqZ2hdT" },
                            p6HKTvlB3: { variant: "K8oqZ2hdT" },
                            qMUngWgkC: { variant: "K8oqZ2hdT" },
                            r8IR85ZDv: { variant: "K8oqZ2hdT" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "K8oqZ2hdT" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed1() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-121179n-container",
                      layoutDependency,
                      layoutId: "WKaH2EbbI-container",
                      style: { opacity: 1 },
                      variants: { udHfq45LS: { opacity: 0 } },
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "WKaH2EbbI",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "WKaH2EbbI",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "vVjMhdARB",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "K8oqZ2hdT" },
                            kFGmGEOUz: { variant: "K8oqZ2hdT" },
                            l5FvQV66Q: { variant: "K8oqZ2hdT" },
                            p6HKTvlB3: { variant: "K8oqZ2hdT" },
                            qMUngWgkC: { variant: "K8oqZ2hdT" },
                            r8IR85ZDv: { variant: "K8oqZ2hdT" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "K8oqZ2hdT" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                ],
              }),
            isDisplayed2() &&
              /* @__PURE__ */ _jsxs6(motion7.div, {
                className: "framer-1w2gq54",
                "data-framer-name": "Layer 2",
                layoutDependency,
                layoutId: "GuJgVxdD8",
                style: { filter: "none", WebkitFilter: "none" },
                variants: {
                  cq7D62bxc: { filter: "blur(1px)", WebkitFilter: "blur(1px)" },
                  epmnVbMnt: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  gDTDJiCJ2: { filter: "blur(3px)", WebkitFilter: "blur(3px)" },
                  kFGmGEOUz: { filter: "blur(5px)", WebkitFilter: "blur(5px)" },
                  l5FvQV66Q: { filter: "blur(5px)", WebkitFilter: "blur(5px)" },
                  p6HKTvlB3: { filter: "blur(5px)", WebkitFilter: "blur(5px)" },
                  rfZM8jP4B: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  udHfq45LS: { filter: "blur(2px)", WebkitFilter: "blur(2px)" },
                  UQg3oaiFk: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  Z1sTRLzN1: { filter: "blur(1px)", WebkitFilter: "blur(1px)" },
                },
                children: [
                  isDisplayed3() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-1togqzb-container",
                      layoutDependency,
                      layoutId: "HiU_aZKvz-container",
                      style: { opacity: 1 },
                      variants: { Z1sTRLzN1: { opacity: 0 } },
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "HiU_aZKvz",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "HiU_aZKvz",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "uTj0cEPb8",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "vVjMhdARB" },
                            kFGmGEOUz: { variant: "vVjMhdARB" },
                            l5FvQV66Q: { variant: "vVjMhdARB" },
                            p6HKTvlB3: { variant: "vVjMhdARB" },
                            qMUngWgkC: { variant: "vVjMhdARB" },
                            r8IR85ZDv: { variant: "vVjMhdARB" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "vVjMhdARB" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            Z1sTRLzN1: { variant: "vVjMhdARB" },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed3() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-u2l7lb-container",
                      layoutDependency,
                      layoutId: "R_SllmlLt-container",
                      style: { opacity: 1 },
                      variants: { Z1sTRLzN1: { opacity: 0 } },
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "R_SllmlLt",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "R_SllmlLt",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "uTj0cEPb8",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "vVjMhdARB" },
                            kFGmGEOUz: { variant: "vVjMhdARB" },
                            l5FvQV66Q: { variant: "vVjMhdARB" },
                            p6HKTvlB3: { variant: "vVjMhdARB" },
                            qMUngWgkC: { variant: "vVjMhdARB" },
                            r8IR85ZDv: { variant: "vVjMhdARB" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "vVjMhdARB" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            Z1sTRLzN1: { variant: "vVjMhdARB" },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed3() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-dt1nri-container",
                      layoutDependency,
                      layoutId: "AMZsQkyu0-container",
                      style: { opacity: 1 },
                      variants: { Z1sTRLzN1: { opacity: 0 } },
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "AMZsQkyu0",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "AMZsQkyu0",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "uTj0cEPb8",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "vVjMhdARB" },
                            kFGmGEOUz: { variant: "vVjMhdARB" },
                            l5FvQV66Q: { variant: "vVjMhdARB" },
                            p6HKTvlB3: { variant: "vVjMhdARB" },
                            qMUngWgkC: { variant: "vVjMhdARB" },
                            r8IR85ZDv: { variant: "vVjMhdARB" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "vVjMhdARB" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            Z1sTRLzN1: { variant: "vVjMhdARB" },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed3() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-vm0lt-container",
                      layoutDependency,
                      layoutId: "CNXy5TkRd-container",
                      style: { opacity: 1 },
                      variants: { Z1sTRLzN1: { opacity: 0 } },
                      ...addPropertyOverrides6(
                        {
                          epmnVbMnt: { transformTemplate: transformTemplate22 },
                          rfZM8jP4B: { transformTemplate: transformTemplate22 },
                          UQg3oaiFk: { transformTemplate: transformTemplate22 },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "CNXy5TkRd",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "CNXy5TkRd",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "uTj0cEPb8",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "vVjMhdARB" },
                            kFGmGEOUz: { variant: "vVjMhdARB" },
                            l5FvQV66Q: { variant: "vVjMhdARB" },
                            p6HKTvlB3: { variant: "vVjMhdARB" },
                            qMUngWgkC: { variant: "vVjMhdARB" },
                            r8IR85ZDv: { variant: "vVjMhdARB" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "vVjMhdARB" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            Z1sTRLzN1: { variant: "vVjMhdARB" },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed3() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-1xv0t2j-container",
                      layoutDependency,
                      layoutId: "nDR3RU8yt-container",
                      style: { opacity: 1 },
                      variants: { Z1sTRLzN1: { opacity: 0 } },
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "nDR3RU8yt",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "nDR3RU8yt",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "uTj0cEPb8",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "vVjMhdARB" },
                            kFGmGEOUz: { variant: "vVjMhdARB" },
                            l5FvQV66Q: { variant: "vVjMhdARB" },
                            p6HKTvlB3: { variant: "vVjMhdARB" },
                            qMUngWgkC: { variant: "vVjMhdARB" },
                            r8IR85ZDv: { variant: "vVjMhdARB" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "vVjMhdARB" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            Z1sTRLzN1: { variant: "vVjMhdARB" },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed3() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-lc2jrz-container",
                      layoutDependency,
                      layoutId: "G5F6iqn5_-container",
                      style: { opacity: 0.36 },
                      variants: {
                        epmnVbMnt: { opacity: 1 },
                        gDTDJiCJ2: { opacity: 1 },
                        kFGmGEOUz: { opacity: 1 },
                        l5FvQV66Q: { opacity: 1 },
                        p6HKTvlB3: { opacity: 1 },
                        QcEIwdpHn: { opacity: 1 },
                        qMUngWgkC: { opacity: 1 },
                        r8IR85ZDv: { opacity: 1 },
                        rfZM8jP4B: { opacity: 1 },
                        udHfq45LS: { opacity: 1 },
                        UQg3oaiFk: { opacity: 1 },
                        Z1sTRLzN1: { opacity: 0 },
                      },
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "G5F6iqn5_",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "G5F6iqn5_",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "uTj0cEPb8",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "vVjMhdARB" },
                            kFGmGEOUz: { variant: "vVjMhdARB" },
                            l5FvQV66Q: { variant: "vVjMhdARB" },
                            p6HKTvlB3: { variant: "vVjMhdARB" },
                            qMUngWgkC: { variant: "vVjMhdARB" },
                            r8IR85ZDv: { variant: "vVjMhdARB" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "vVjMhdARB" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            Z1sTRLzN1: { variant: "vVjMhdARB" },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                  isDisplayed3() &&
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: "framer-15swu5u-container",
                      layoutDependency,
                      layoutId: "H154cZRUZ-container",
                      style: { opacity: 1 },
                      transformTemplate: transformTemplate1,
                      variants: { Z1sTRLzN1: { opacity: 0 } },
                      ...addPropertyOverrides6(
                        {
                          epmnVbMnt: { transformTemplate: void 0 },
                          rfZM8jP4B: { transformTemplate: void 0 },
                          UQg3oaiFk: { transformTemplate: void 0 },
                          y0Wse_j8v: { transformTemplate: void 0 },
                          Z1sTRLzN1: { transformTemplate: void 0 },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default4, {
                        bGyluXMcm: "C-2",
                        C0xbi_CXP: "B",
                        cRMlaJb1_:
                          'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                        eZ_WIO8yz: "Choice 3",
                        fxy_09app:
                          "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                        height: "100%",
                        id: "H154cZRUZ",
                        iDjlfHFIv: "C-2",
                        Jdv7M1lr6: "A",
                        JM8R5zcqV: true,
                        k4ezTegiq: 50,
                        K5BysgXsx: "zAJDHJhkW",
                        layoutId: "H154cZRUZ",
                        LNNJy1jnm: "FNw58JHcH",
                        NvMMjvlBy:
                          "Please provide the dimensions of the drawing board (width, height, and depth).",
                        OJMet4Rjs: "Choice 1",
                        qQ_BO9qk8: "Choice 2",
                        TTpsRmZqr: true,
                        variant: "uTj0cEPb8",
                        VOTcq87Vu: true,
                        vZATQhujj: "Board Dimensions",
                        width: "100%",
                        Xo22rvSfa: "B-2",
                        Z93yscm8P: "A-1",
                        ...addPropertyOverrides6(
                          {
                            epmnVbMnt: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            gDTDJiCJ2: { variant: "vVjMhdARB" },
                            kFGmGEOUz: { variant: "vVjMhdARB" },
                            l5FvQV66Q: { variant: "vVjMhdARB" },
                            p6HKTvlB3: { variant: "vVjMhdARB" },
                            qMUngWgkC: { variant: "vVjMhdARB" },
                            r8IR85ZDv: { variant: "vVjMhdARB" },
                            rfZM8jP4B: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            udHfq45LS: { variant: "vVjMhdARB" },
                            UQg3oaiFk: {
                              style: { width: "100%" },
                              variant: "FXIjKjDPL",
                            },
                            Z1sTRLzN1: { variant: "vVjMhdARB" },
                          },
                          baseVariant,
                          gestureVariant
                        ),
                      }),
                    }),
                ],
              }),
            /* @__PURE__ */ _jsx8(Transition6, {
              ...addPropertyOverrides6(
                { HovROSEim: { value: transition12 } },
                baseVariant,
                gestureVariant
              ),
              children: /* @__PURE__ */ _jsxs6(motion7.div, {
                className: "framer-ywbmcs",
                "data-framer-name": "Layer 1",
                layoutDependency,
                layoutId: "ETAGciIqA",
                style: { filter: "none", WebkitFilter: "none" },
                variants: {
                  cq7D62bxc: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  epmnVbMnt: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  gDTDJiCJ2: { filter: "blur(1px)", WebkitFilter: "blur(1px)" },
                  kFGmGEOUz: { filter: "blur(3px)", WebkitFilter: "blur(3px)" },
                  l5FvQV66Q: { filter: "blur(3px)", WebkitFilter: "blur(3px)" },
                  p6HKTvlB3: { filter: "blur(3px)", WebkitFilter: "blur(3px)" },
                  rfZM8jP4B: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  udHfq45LS: { filter: "blur(3px)", WebkitFilter: "blur(3px)" },
                  UQg3oaiFk: { filter: "blur(0px)", WebkitFilter: "blur(0px)" },
                  Z1sTRLzN1: { filter: "blur(2px)", WebkitFilter: "blur(2px)" },
                },
                children: [
                  /* @__PURE__ */ _jsx8(motion7.div, {
                    className: "framer-1egxi8f-container",
                    layoutDependency,
                    layoutId: "D5EbKbo6S-container",
                    style: { opacity: 1 },
                    variants: {
                      cq7D62bxc: { opacity: 0 },
                      dVLWELU6e: { opacity: 0 },
                      HovROSEim: { opacity: 0 },
                      lBUZui6j9: { opacity: 0 },
                      vf_oeYc8q: { opacity: 0 },
                      XACXI8mDn: { opacity: 0 },
                    },
                    ...addPropertyOverrides6(
                      {
                        cq7D62bxc: { transformTemplate: transformTemplate1 },
                        dVLWELU6e: { transformTemplate: transformTemplate1 },
                        epmnVbMnt: { transformTemplate: transformTemplate4 },
                        HovROSEim: { transformTemplate: transformTemplate1 },
                        lBUZui6j9: { transformTemplate: transformTemplate1 },
                        rfZM8jP4B: { transformTemplate: transformTemplate4 },
                        UQg3oaiFk: { transformTemplate: transformTemplate4 },
                        vf_oeYc8q: { transformTemplate: transformTemplate1 },
                        XACXI8mDn: { transformTemplate: transformTemplate1 },
                      },
                      baseVariant,
                      gestureVariant
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default4, {
                      bGyluXMcm: "C-2",
                      C0xbi_CXP: "B",
                      cRMlaJb1_:
                        'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                      eZ_WIO8yz: "Choice 3",
                      fxy_09app:
                        "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                      height: "100%",
                      id: "D5EbKbo6S",
                      iDjlfHFIv: "C-2",
                      Jdv7M1lr6: "A",
                      JM8R5zcqV: true,
                      k4ezTegiq: 50,
                      K5BysgXsx: "zAJDHJhkW",
                      layoutId: "D5EbKbo6S",
                      LNNJy1jnm: "FNw58JHcH",
                      NvMMjvlBy:
                        "Please provide the dimensions of the drawing board (width, height, and depth).",
                      OJMet4Rjs: "Choice 1",
                      qQ_BO9qk8: "Choice 2",
                      TTpsRmZqr: true,
                      variant: "uyxhsUNZq",
                      VOTcq87Vu: true,
                      vZATQhujj: "Board Dimensions",
                      width: "100%",
                      Xo22rvSfa: "B-2",
                      Z93yscm8P: "A-1",
                      ...addPropertyOverrides6(
                        {
                          cq7D62bxc: { variant: "uTj0cEPb8" },
                          epmnVbMnt: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          gDTDJiCJ2: { variant: "uTj0cEPb8" },
                          kFGmGEOUz: { variant: "uTj0cEPb8" },
                          l5FvQV66Q: { variant: "uTj0cEPb8" },
                          p6HKTvlB3: { variant: "uTj0cEPb8" },
                          qMUngWgkC: { variant: "uTj0cEPb8" },
                          r8IR85ZDv: { variant: "uTj0cEPb8" },
                          rfZM8jP4B: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          udHfq45LS: { variant: "uTj0cEPb8" },
                          UQg3oaiFk: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          Z1sTRLzN1: { variant: "uTj0cEPb8" },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  }),
                  /* @__PURE__ */ _jsx8(motion7.div, {
                    className: "framer-17glung-container",
                    layoutDependency,
                    layoutId: "H9WPJC9De-container",
                    style: { opacity: 1 },
                    variants: {
                      cq7D62bxc: { opacity: 0 },
                      dVLWELU6e: { opacity: 0 },
                      HovROSEim: { opacity: 0 },
                      lBUZui6j9: { opacity: 0 },
                      vf_oeYc8q: { opacity: 0 },
                      XACXI8mDn: { opacity: 0 },
                    },
                    ...addPropertyOverrides6(
                      {
                        cq7D62bxc: { transformTemplate: transformTemplate1 },
                        dVLWELU6e: { transformTemplate: transformTemplate1 },
                        HovROSEim: { transformTemplate: transformTemplate1 },
                        lBUZui6j9: { transformTemplate: transformTemplate1 },
                        vf_oeYc8q: { transformTemplate: transformTemplate1 },
                        XACXI8mDn: { transformTemplate: transformTemplate1 },
                      },
                      baseVariant,
                      gestureVariant
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default4, {
                      bGyluXMcm: "C-2",
                      C0xbi_CXP: "B",
                      cRMlaJb1_:
                        'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                      eZ_WIO8yz: "Choice 3",
                      fxy_09app:
                        "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                      height: "100%",
                      id: "H9WPJC9De",
                      iDjlfHFIv: "C-2",
                      Jdv7M1lr6: "A",
                      JM8R5zcqV: true,
                      k4ezTegiq: 50,
                      K5BysgXsx: "zAJDHJhkW",
                      layoutId: "H9WPJC9De",
                      LNNJy1jnm: "FNw58JHcH",
                      NvMMjvlBy:
                        "Please provide the dimensions of the drawing board (width, height, and depth).",
                      OJMet4Rjs: "Choice 1",
                      qQ_BO9qk8: "Choice 2",
                      TTpsRmZqr: true,
                      variant: "uyxhsUNZq",
                      VOTcq87Vu: true,
                      vZATQhujj: "Board Dimensions",
                      width: "100%",
                      Xo22rvSfa: "B-2",
                      Z93yscm8P: "A-1",
                      ...addPropertyOverrides6(
                        {
                          cq7D62bxc: { variant: "uTj0cEPb8" },
                          epmnVbMnt: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          gDTDJiCJ2: { variant: "uTj0cEPb8" },
                          kFGmGEOUz: { variant: "uTj0cEPb8" },
                          l5FvQV66Q: { variant: "uTj0cEPb8" },
                          p6HKTvlB3: { variant: "uTj0cEPb8" },
                          qMUngWgkC: { variant: "uTj0cEPb8" },
                          r8IR85ZDv: { variant: "uTj0cEPb8" },
                          rfZM8jP4B: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          udHfq45LS: { variant: "uTj0cEPb8" },
                          UQg3oaiFk: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          Z1sTRLzN1: { variant: "uTj0cEPb8" },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  }),
                  /* @__PURE__ */ _jsx8(motion7.div, {
                    className: "framer-xsw623-container",
                    layoutDependency,
                    layoutId: "RmjeBraiJ-container",
                    style: { opacity: 1 },
                    variants: {
                      cq7D62bxc: { opacity: 0 },
                      dVLWELU6e: { opacity: 0 },
                      HovROSEim: { opacity: 0 },
                      lBUZui6j9: { opacity: 0 },
                      vf_oeYc8q: { opacity: 0 },
                      XACXI8mDn: { opacity: 0 },
                    },
                    ...addPropertyOverrides6(
                      {
                        cq7D62bxc: { transformTemplate: transformTemplate1 },
                        dVLWELU6e: { transformTemplate: transformTemplate1 },
                        epmnVbMnt: { transformTemplate: transformTemplate4 },
                        HovROSEim: { transformTemplate: transformTemplate1 },
                        lBUZui6j9: { transformTemplate: transformTemplate1 },
                        rfZM8jP4B: { transformTemplate: transformTemplate4 },
                        UQg3oaiFk: { transformTemplate: transformTemplate4 },
                        vf_oeYc8q: { transformTemplate: transformTemplate1 },
                        XACXI8mDn: { transformTemplate: transformTemplate1 },
                      },
                      baseVariant,
                      gestureVariant
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default4, {
                      bGyluXMcm: "C-2",
                      C0xbi_CXP: "B",
                      cRMlaJb1_:
                        'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                      eZ_WIO8yz: "Choice 3",
                      fxy_09app:
                        "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                      height: "100%",
                      id: "RmjeBraiJ",
                      iDjlfHFIv: "C-2",
                      Jdv7M1lr6: "A",
                      JM8R5zcqV: true,
                      k4ezTegiq: 50,
                      K5BysgXsx: "zAJDHJhkW",
                      layoutId: "RmjeBraiJ",
                      LNNJy1jnm: "FNw58JHcH",
                      NvMMjvlBy:
                        "Please provide the dimensions of the drawing board (width, height, and depth).",
                      OJMet4Rjs: "Choice 1",
                      qQ_BO9qk8: "Choice 2",
                      TTpsRmZqr: true,
                      variant: "uyxhsUNZq",
                      VOTcq87Vu: true,
                      vZATQhujj: "Board Dimensions",
                      width: "100%",
                      Xo22rvSfa: "B-2",
                      Z93yscm8P: "A-1",
                      ...addPropertyOverrides6(
                        {
                          aOPZX8nJO: {
                            NvMMjvlBy:
                              "Describe the primary goal of your tool.",
                            variant: "PvhAKPvc8",
                            VOTcq87Vu: false,
                            vZATQhujj: "Define Primary Goal",
                          },
                          cq7D62bxc: { variant: "uTj0cEPb8" },
                          epmnVbMnt: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          gDTDJiCJ2: { variant: "uTj0cEPb8" },
                          kFGmGEOUz: { variant: "uTj0cEPb8" },
                          l5FvQV66Q: { variant: "uTj0cEPb8" },
                          ovIpGU7cl: {
                            NvMMjvlBy:
                              "Describe the primary goal of your tool.",
                            variant: "PvhAKPvc8",
                            vZATQhujj: "Define Primary Goal",
                          },
                          p6HKTvlB3: { variant: "uTj0cEPb8" },
                          qMUngWgkC: { variant: "uTj0cEPb8" },
                          r8IR85ZDv: { variant: "uTj0cEPb8" },
                          rfZM8jP4B: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          udHfq45LS: { variant: "uTj0cEPb8" },
                          UQg3oaiFk: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          Z1sTRLzN1: { variant: "uTj0cEPb8" },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  }),
                  /* @__PURE__ */ _jsx8(motion7.div, {
                    className: "framer-15gph2n-container",
                    layoutDependency,
                    layoutId: "h6Nd9WFsm-container",
                    style: { opacity: 1 },
                    variants: {
                      cq7D62bxc: { opacity: 0 },
                      dVLWELU6e: { opacity: 0 },
                      HovROSEim: { opacity: 0 },
                      lBUZui6j9: { opacity: 0 },
                      vf_oeYc8q: { opacity: 0 },
                      XACXI8mDn: { opacity: 0 },
                    },
                    ...addPropertyOverrides6(
                      {
                        cq7D62bxc: { transformTemplate: transformTemplate1 },
                        dVLWELU6e: { transformTemplate: transformTemplate1 },
                        epmnVbMnt: { transformTemplate: transformTemplate1 },
                        HovROSEim: { transformTemplate: transformTemplate1 },
                        lBUZui6j9: { transformTemplate: transformTemplate1 },
                        rfZM8jP4B: { transformTemplate: transformTemplate1 },
                        UQg3oaiFk: { transformTemplate: transformTemplate1 },
                        vf_oeYc8q: { transformTemplate: transformTemplate1 },
                        XACXI8mDn: { transformTemplate: transformTemplate1 },
                      },
                      baseVariant,
                      gestureVariant
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default4, {
                      bGyluXMcm: "C-2",
                      C0xbi_CXP: "B",
                      cRMlaJb1_:
                        'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                      eZ_WIO8yz: "Choice 3",
                      fxy_09app:
                        "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                      height: "100%",
                      id: "h6Nd9WFsm",
                      iDjlfHFIv: "C-2",
                      Jdv7M1lr6: "A",
                      JM8R5zcqV: true,
                      k4ezTegiq: 50,
                      K5BysgXsx: "zAJDHJhkW",
                      layoutId: "h6Nd9WFsm",
                      LNNJy1jnm: "FNw58JHcH",
                      NvMMjvlBy:
                        "Please provide the dimensions of the drawing board (width, height, and depth).",
                      OJMet4Rjs: "Choice 1",
                      qQ_BO9qk8: "Choice 2",
                      TTpsRmZqr: true,
                      variant: "uyxhsUNZq",
                      VOTcq87Vu: true,
                      vZATQhujj: "Board Dimensions",
                      width: "100%",
                      Xo22rvSfa: "B-2",
                      Z93yscm8P: "A-1",
                      ...addPropertyOverrides6(
                        {
                          cq7D62bxc: { variant: "uTj0cEPb8" },
                          epmnVbMnt: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          gDTDJiCJ2: { variant: "uTj0cEPb8" },
                          kFGmGEOUz: { variant: "uTj0cEPb8" },
                          l5FvQV66Q: { variant: "uTj0cEPb8" },
                          p6HKTvlB3: { variant: "uTj0cEPb8" },
                          qMUngWgkC: { variant: "uTj0cEPb8" },
                          r8IR85ZDv: { variant: "uTj0cEPb8" },
                          rfZM8jP4B: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          udHfq45LS: { variant: "uTj0cEPb8" },
                          UQg3oaiFk: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          Z1sTRLzN1: { variant: "uTj0cEPb8" },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  }),
                  /* @__PURE__ */ _jsx8(motion7.div, {
                    className: "framer-yox9q5-container",
                    layoutDependency,
                    layoutId: "tExCQhNKD-container",
                    style: { opacity: 1 },
                    transformTemplate: transformTemplate4,
                    variants: {
                      cq7D62bxc: { opacity: 0 },
                      dVLWELU6e: { opacity: 0 },
                      HovROSEim: { opacity: 0 },
                      lBUZui6j9: { opacity: 0 },
                      vf_oeYc8q: { opacity: 0 },
                      XACXI8mDn: { opacity: 0 },
                    },
                    ...addPropertyOverrides6(
                      {
                        cq7D62bxc: { transformTemplate: transformTemplate1 },
                        dVLWELU6e: { transformTemplate: transformTemplate1 },
                        HovROSEim: { transformTemplate: transformTemplate1 },
                        lBUZui6j9: { transformTemplate: transformTemplate1 },
                        vf_oeYc8q: { transformTemplate: transformTemplate1 },
                        XACXI8mDn: { transformTemplate: transformTemplate1 },
                      },
                      baseVariant,
                      gestureVariant
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default4, {
                      bGyluXMcm: "C-2",
                      C0xbi_CXP: "B",
                      cRMlaJb1_:
                        'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                      eZ_WIO8yz: "Choice 3",
                      fxy_09app:
                        "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                      height: "100%",
                      id: "tExCQhNKD",
                      iDjlfHFIv: "C-2",
                      Jdv7M1lr6: "A",
                      JM8R5zcqV: true,
                      k4ezTegiq: 50,
                      K5BysgXsx: "zAJDHJhkW",
                      layoutId: "tExCQhNKD",
                      LNNJy1jnm: "FNw58JHcH",
                      NvMMjvlBy:
                        "Please provide the dimensions of the drawing board (width, height, and depth).",
                      OJMet4Rjs: "Choice 1",
                      qQ_BO9qk8: "Choice 2",
                      TTpsRmZqr: true,
                      variant: "uyxhsUNZq",
                      VOTcq87Vu: true,
                      vZATQhujj: "Board Dimensions",
                      width: "100%",
                      Xo22rvSfa: "B-2",
                      Z93yscm8P: "A-1",
                      ...addPropertyOverrides6(
                        {
                          cq7D62bxc: { variant: "uTj0cEPb8" },
                          epmnVbMnt: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          gDTDJiCJ2: { variant: "uTj0cEPb8" },
                          kFGmGEOUz: { variant: "uTj0cEPb8" },
                          l5FvQV66Q: { variant: "uTj0cEPb8" },
                          p6HKTvlB3: { variant: "uTj0cEPb8" },
                          qMUngWgkC: { variant: "uTj0cEPb8" },
                          r8IR85ZDv: { variant: "uTj0cEPb8" },
                          rfZM8jP4B: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          udHfq45LS: { variant: "uTj0cEPb8" },
                          UQg3oaiFk: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          Z1sTRLzN1: { variant: "uTj0cEPb8" },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  }),
                  /* @__PURE__ */ _jsx8(motion7.div, {
                    className: "framer-n0gl4w-container",
                    layoutDependency,
                    layoutId: "ZymjGBNkx-container",
                    style: { opacity: 1 },
                    variants: {
                      cq7D62bxc: { opacity: 0 },
                      dVLWELU6e: { opacity: 0 },
                      HovROSEim: { opacity: 0 },
                      lBUZui6j9: { opacity: 0 },
                      vf_oeYc8q: { opacity: 0 },
                      XACXI8mDn: { opacity: 0 },
                    },
                    ...addPropertyOverrides6(
                      {
                        cq7D62bxc: { transformTemplate: transformTemplate1 },
                        dVLWELU6e: { transformTemplate: transformTemplate1 },
                        epmnVbMnt: { transformTemplate: transformTemplate4 },
                        HovROSEim: { transformTemplate: transformTemplate1 },
                        lBUZui6j9: { transformTemplate: transformTemplate1 },
                        rfZM8jP4B: { transformTemplate: transformTemplate4 },
                        UQg3oaiFk: { transformTemplate: transformTemplate4 },
                        vf_oeYc8q: { transformTemplate: transformTemplate1 },
                        XACXI8mDn: { transformTemplate: transformTemplate1 },
                      },
                      baseVariant,
                      gestureVariant
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default4, {
                      bGyluXMcm: "C-2",
                      C0xbi_CXP: "B",
                      cRMlaJb1_:
                        'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                      eZ_WIO8yz: "Choice 3",
                      fxy_09app:
                        "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                      height: "100%",
                      id: "ZymjGBNkx",
                      iDjlfHFIv: "C-2",
                      Jdv7M1lr6: "A",
                      JM8R5zcqV: true,
                      k4ezTegiq: 50,
                      K5BysgXsx: "zAJDHJhkW",
                      layoutId: "ZymjGBNkx",
                      LNNJy1jnm: "FNw58JHcH",
                      NvMMjvlBy:
                        "Please provide the dimensions of the drawing board (width, height, and depth).",
                      OJMet4Rjs: "Choice 1",
                      qQ_BO9qk8: "Choice 2",
                      TTpsRmZqr: true,
                      variant: "uyxhsUNZq",
                      VOTcq87Vu: true,
                      vZATQhujj: "Board Dimensions",
                      width: "100%",
                      Xo22rvSfa: "B-2",
                      Z93yscm8P: "A-1",
                      ...addPropertyOverrides6(
                        {
                          aOPZX8nJO: {
                            NvMMjvlBy:
                              "Select whether the tool is a physical device or a software application.",
                            variant: "PvhAKPvc8",
                            vZATQhujj: "Hardware or Software",
                          },
                          cq7D62bxc: { variant: "uTj0cEPb8" },
                          epmnVbMnt: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          gDTDJiCJ2: { variant: "uTj0cEPb8" },
                          kFGmGEOUz: { variant: "uTj0cEPb8" },
                          l5FvQV66Q: { variant: "uTj0cEPb8" },
                          p6HKTvlB3: { variant: "uTj0cEPb8" },
                          qMUngWgkC: { variant: "uTj0cEPb8" },
                          r8IR85ZDv: { variant: "uTj0cEPb8" },
                          rfZM8jP4B: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          udHfq45LS: { variant: "uTj0cEPb8" },
                          UQg3oaiFk: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          Z1sTRLzN1: { variant: "uTj0cEPb8" },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  }),
                  /* @__PURE__ */ _jsx8(motion7.div, {
                    className: "framer-10kjnxc-container",
                    layoutDependency,
                    layoutId: "w3kNSZaAk-container",
                    style: { opacity: 1 },
                    variants: {
                      cq7D62bxc: { opacity: 0 },
                      dVLWELU6e: { opacity: 0 },
                      HovROSEim: { opacity: 0 },
                      lBUZui6j9: { opacity: 0 },
                      vf_oeYc8q: { opacity: 0 },
                      XACXI8mDn: { opacity: 0 },
                    },
                    ...addPropertyOverrides6(
                      {
                        cq7D62bxc: { transformTemplate: transformTemplate1 },
                        dVLWELU6e: { transformTemplate: transformTemplate1 },
                        HovROSEim: { transformTemplate: transformTemplate1 },
                        lBUZui6j9: { transformTemplate: transformTemplate1 },
                        vf_oeYc8q: { transformTemplate: transformTemplate1 },
                        X7nXpe0gP: { transformTemplate: transformTemplate22 },
                        XACXI8mDn: { transformTemplate: transformTemplate1 },
                      },
                      baseVariant,
                      gestureVariant
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default4, {
                      bGyluXMcm: "C-2",
                      C0xbi_CXP: "B",
                      cRMlaJb1_:
                        'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                      eZ_WIO8yz: "Choice 3",
                      fxy_09app:
                        "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                      height: "100%",
                      id: "w3kNSZaAk",
                      iDjlfHFIv: "C-2",
                      Jdv7M1lr6: "A",
                      JM8R5zcqV: true,
                      k4ezTegiq: 50,
                      K5BysgXsx: "zAJDHJhkW",
                      layoutId: "w3kNSZaAk",
                      LNNJy1jnm: "FNw58JHcH",
                      NvMMjvlBy:
                        "Please provide the dimensions of the drawing board (width, height, and depth).",
                      OJMet4Rjs: "Choice 1",
                      qQ_BO9qk8: "Choice 2",
                      TTpsRmZqr: true,
                      variant: "uyxhsUNZq",
                      VOTcq87Vu: false,
                      vZATQhujj: "Board Dimensions",
                      width: "100%",
                      Xo22rvSfa: "B-2",
                      Z93yscm8P: "A-1",
                      ...addPropertyOverrides6(
                        {
                          aOPZX8nJO: {
                            NvMMjvlBy:
                              "What area of cognition do you want to improve?",
                            variant: "PvhAKPvc8",
                            vZATQhujj: "Select Cognitive Area",
                          },
                          cq7D62bxc: { variant: "uTj0cEPb8" },
                          epmnVbMnt: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          gDTDJiCJ2: { variant: "uTj0cEPb8" },
                          kFGmGEOUz: { variant: "uTj0cEPb8" },
                          l5FvQV66Q: { variant: "uTj0cEPb8" },
                          ovIpGU7cl: {
                            NvMMjvlBy:
                              "What area of cognition do you want to improve?",
                            variant: "PvhAKPvc8",
                            vZATQhujj: "Select Cognitive Area",
                          },
                          p6HKTvlB3: { variant: "uTj0cEPb8" },
                          qMUngWgkC: { variant: "uTj0cEPb8" },
                          r8IR85ZDv: { variant: "uTj0cEPb8" },
                          rfZM8jP4B: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          udHfq45LS: { variant: "uTj0cEPb8" },
                          UQg3oaiFk: {
                            style: { width: "100%" },
                            variant: "FXIjKjDPL",
                          },
                          Wzv1r0oKb: {
                            NvMMjvlBy:
                              "What area of cognition do you want to improve?",
                            variant: "PvhAKPvc8",
                            vZATQhujj: "Select Cognitive Area",
                          },
                          X7nXpe0gP: {
                            eZ_WIO8yz: "Problem-solving",
                            LNNJy1jnm: "hjUA_q4Xo",
                            NvMMjvlBy:
                              "What area of cognition do you want to improve?",
                            OJMet4Rjs: "Memory",
                            qQ_BO9qk8: "Decision-making",
                            variant: "glP89HQPH",
                            vZATQhujj: "Select Cognitive Area",
                          },
                          Z1sTRLzN1: { variant: "uTj0cEPb8" },
                        },
                        baseVariant,
                        gestureVariant
                      ),
                    }),
                  }),
                ],
              }),
            }),
            isDisplayed4() &&
              /* @__PURE__ */ _jsx8(motion7.div, {
                className: "framer-1mvnusd",
                "data-framer-name": "Layer 4",
                layoutDependency,
                layoutId: "mtEkOBUqz",
                children:
                  isDisplayed5() &&
                  /* @__PURE__ */ _jsxs6(motion7.div, {
                    className: "framer-1k3vrbv",
                    layoutDependency,
                    layoutId: "CMunQga3Q",
                    style: {
                      filter: "blur(7px)",
                      opacity: 1,
                      WebkitFilter: "blur(7px)",
                    },
                    variants: {
                      cq7D62bxc: {
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                      },
                      epmnVbMnt: {
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                      },
                      kFGmGEOUz: {
                        filter: "blur(9px)",
                        WebkitFilter: "blur(9px)",
                      },
                      l5FvQV66Q: {
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                      },
                      p6HKTvlB3: {
                        filter: "blur(9px)",
                        WebkitFilter: "blur(9px)",
                      },
                      qMUngWgkC: { opacity: 0 },
                      rfZM8jP4B: {
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                      },
                      udHfq45LS: {
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                      },
                      UQg3oaiFk: {
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                      },
                      Z1sTRLzN1: {
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                      },
                    },
                    children: [
                      isDisplayed6() &&
                        /* @__PURE__ */ _jsx8(motion7.div, {
                          className: "framer-gkoso3-container",
                          layoutDependency,
                          layoutId: "xDNxvPTdp-container",
                          style: { opacity: 1 },
                          variants: { l5FvQV66Q: { opacity: 0 } },
                          children: /* @__PURE__ */ _jsx8(stdin_default4, {
                            bGyluXMcm: "C-2",
                            C0xbi_CXP: "B",
                            cRMlaJb1_:
                              'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                            eZ_WIO8yz: "Choice 3",
                            fxy_09app:
                              "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                            height: "100%",
                            id: "xDNxvPTdp",
                            iDjlfHFIv: "C-2",
                            Jdv7M1lr6: "A",
                            JM8R5zcqV: true,
                            k4ezTegiq: 50,
                            K5BysgXsx: "zAJDHJhkW",
                            layoutId: "xDNxvPTdp",
                            LNNJy1jnm: "FNw58JHcH",
                            NvMMjvlBy:
                              "Please provide the dimensions of the drawing board (width, height, and depth).",
                            OJMet4Rjs: "Choice 1",
                            qQ_BO9qk8: "Choice 2",
                            TTpsRmZqr: true,
                            variant: "QKKRwxza_",
                            VOTcq87Vu: true,
                            vZATQhujj: "Board Dimensions",
                            width: "100%",
                            Xo22rvSfa: "B-2",
                            Z93yscm8P: "A-1",
                            ...addPropertyOverrides6(
                              {
                                epmnVbMnt: {
                                  cRMlaJb1_:
                                    'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                rfZM8jP4B: {
                                  cRMlaJb1_:
                                    'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                UQg3oaiFk: {
                                  cRMlaJb1_:
                                    'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                              },
                              baseVariant,
                              gestureVariant
                            ),
                          }),
                        }),
                      isDisplayed6() &&
                        /* @__PURE__ */ _jsx8(motion7.div, {
                          className: "framer-1yvmtw8-container",
                          layoutDependency,
                          layoutId: "wvz648S9W-container",
                          style: { opacity: 1 },
                          variants: { l5FvQV66Q: { opacity: 0 } },
                          children: /* @__PURE__ */ _jsx8(stdin_default4, {
                            bGyluXMcm: "C-2",
                            C0xbi_CXP: "B",
                            cRMlaJb1_:
                              'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                            eZ_WIO8yz: "Choice 3",
                            fxy_09app:
                              "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                            height: "100%",
                            id: "wvz648S9W",
                            iDjlfHFIv: "C-2",
                            Jdv7M1lr6: "A",
                            JM8R5zcqV: true,
                            k4ezTegiq: 50,
                            K5BysgXsx: "zAJDHJhkW",
                            layoutId: "wvz648S9W",
                            LNNJy1jnm: "FNw58JHcH",
                            NvMMjvlBy:
                              "Please provide the dimensions of the drawing board (width, height, and depth).",
                            OJMet4Rjs: "Choice 1",
                            qQ_BO9qk8: "Choice 2",
                            TTpsRmZqr: true,
                            variant: "QKKRwxza_",
                            VOTcq87Vu: true,
                            vZATQhujj: "Board Dimensions",
                            width: "100%",
                            Xo22rvSfa: "B-2",
                            Z93yscm8P: "A-1",
                            ...addPropertyOverrides6(
                              {
                                epmnVbMnt: {
                                  cRMlaJb1_:
                                    'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                rfZM8jP4B: {
                                  cRMlaJb1_:
                                    'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                UQg3oaiFk: {
                                  cRMlaJb1_:
                                    'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                              },
                              baseVariant,
                              gestureVariant
                            ),
                          }),
                        }),
                      isDisplayed6() &&
                        /* @__PURE__ */ _jsx8(motion7.div, {
                          className: "framer-w97bgk-container",
                          layoutDependency,
                          layoutId: "WjMMah5to-container",
                          style: { opacity: 1 },
                          variants: { l5FvQV66Q: { opacity: 0 } },
                          children: /* @__PURE__ */ _jsx8(stdin_default4, {
                            bGyluXMcm: "C-2",
                            C0xbi_CXP: "B",
                            cRMlaJb1_:
                              'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                            eZ_WIO8yz: "Choice 3",
                            fxy_09app:
                              "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                            height: "100%",
                            id: "WjMMah5to",
                            iDjlfHFIv: "C-2",
                            Jdv7M1lr6: "A",
                            JM8R5zcqV: true,
                            k4ezTegiq: 50,
                            K5BysgXsx: "zAJDHJhkW",
                            layoutId: "WjMMah5to",
                            LNNJy1jnm: "FNw58JHcH",
                            NvMMjvlBy:
                              "Please provide the dimensions of the drawing board (width, height, and depth).",
                            OJMet4Rjs: "Choice 1",
                            qQ_BO9qk8: "Choice 2",
                            TTpsRmZqr: true,
                            variant: "QKKRwxza_",
                            VOTcq87Vu: true,
                            vZATQhujj: "Board Dimensions",
                            width: "100%",
                            Xo22rvSfa: "B-2",
                            Z93yscm8P: "A-1",
                            ...addPropertyOverrides6(
                              {
                                epmnVbMnt: {
                                  cRMlaJb1_:
                                    'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                rfZM8jP4B: {
                                  cRMlaJb1_:
                                    'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                UQg3oaiFk: {
                                  cRMlaJb1_:
                                    'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                              },
                              baseVariant,
                              gestureVariant
                            ),
                          }),
                        }),
                      isDisplayed6() &&
                        /* @__PURE__ */ _jsx8(motion7.div, {
                          className: "framer-fpq9rw-container",
                          layoutDependency,
                          layoutId: "djTUjO54n-container",
                          style: { opacity: 1 },
                          transformTemplate: transformTemplate4,
                          variants: { l5FvQV66Q: { opacity: 0 } },
                          ...addPropertyOverrides6(
                            {
                              epmnVbMnt: { transformTemplate: void 0 },
                              l5FvQV66Q: { transformTemplate: void 0 },
                              qMUngWgkC: { transformTemplate: void 0 },
                              rfZM8jP4B: { transformTemplate: void 0 },
                              UQg3oaiFk: { transformTemplate: void 0 },
                            },
                            baseVariant,
                            gestureVariant
                          ),
                          children: /* @__PURE__ */ _jsx8(stdin_default4, {
                            bGyluXMcm: "C-2",
                            C0xbi_CXP: "B",
                            cRMlaJb1_:
                              'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                            eZ_WIO8yz: "Choice 3",
                            fxy_09app:
                              "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                            height: "100%",
                            id: "djTUjO54n",
                            iDjlfHFIv: "C-2",
                            Jdv7M1lr6: "A",
                            JM8R5zcqV: true,
                            k4ezTegiq: 50,
                            K5BysgXsx: "zAJDHJhkW",
                            layoutId: "djTUjO54n",
                            LNNJy1jnm: "FNw58JHcH",
                            NvMMjvlBy:
                              "Please provide the dimensions of the drawing board (width, height, and depth).",
                            OJMet4Rjs: "Choice 1",
                            qQ_BO9qk8: "Choice 2",
                            TTpsRmZqr: true,
                            variant: "QKKRwxza_",
                            VOTcq87Vu: true,
                            vZATQhujj: "Board Dimensions",
                            width: "100%",
                            Xo22rvSfa: "B-2",
                            Z93yscm8P: "A-1",
                            ...addPropertyOverrides6(
                              {
                                epmnVbMnt: {
                                  cRMlaJb1_:
                                    'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                rfZM8jP4B: {
                                  cRMlaJb1_:
                                    'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                UQg3oaiFk: {
                                  cRMlaJb1_:
                                    'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                              },
                              baseVariant,
                              gestureVariant
                            ),
                          }),
                        }),
                      isDisplayed6() &&
                        /* @__PURE__ */ _jsx8(motion7.div, {
                          className: "framer-160pc9z-container",
                          layoutDependency,
                          layoutId: "xJw0y7a7r-container",
                          style: { opacity: 1 },
                          variants: { l5FvQV66Q: { opacity: 0 } },
                          children: /* @__PURE__ */ _jsx8(stdin_default4, {
                            bGyluXMcm: "C-2",
                            C0xbi_CXP: "B",
                            cRMlaJb1_:
                              'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                            eZ_WIO8yz: "Choice 3",
                            fxy_09app:
                              "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                            height: "100%",
                            id: "xJw0y7a7r",
                            iDjlfHFIv: "C-2",
                            Jdv7M1lr6: "A",
                            JM8R5zcqV: true,
                            k4ezTegiq: 50,
                            K5BysgXsx: "zAJDHJhkW",
                            layoutId: "xJw0y7a7r",
                            LNNJy1jnm: "FNw58JHcH",
                            NvMMjvlBy:
                              "Please provide the dimensions of the drawing board (width, height, and depth).",
                            OJMet4Rjs: "Choice 1",
                            qQ_BO9qk8: "Choice 2",
                            TTpsRmZqr: true,
                            variant: "QKKRwxza_",
                            VOTcq87Vu: true,
                            vZATQhujj: "Board Dimensions",
                            width: "100%",
                            Xo22rvSfa: "B-2",
                            Z93yscm8P: "A-1",
                            ...addPropertyOverrides6(
                              {
                                epmnVbMnt: {
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                rfZM8jP4B: {
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                UQg3oaiFk: {
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                              },
                              baseVariant,
                              gestureVariant
                            ),
                          }),
                        }),
                      isDisplayed6() &&
                        /* @__PURE__ */ _jsx8(motion7.div, {
                          className: "framer-1jw6h9g-container",
                          layoutDependency,
                          layoutId: "fbzUeHx9R-container",
                          style: { opacity: 1 },
                          variants: { l5FvQV66Q: { opacity: 0 } },
                          ...addPropertyOverrides6(
                            {
                              l5FvQV66Q: {
                                transformTemplate: transformTemplate22,
                              },
                              qMUngWgkC: {
                                transformTemplate: transformTemplate22,
                              },
                            },
                            baseVariant,
                            gestureVariant
                          ),
                          children: /* @__PURE__ */ _jsx8(stdin_default4, {
                            bGyluXMcm: "C-2",
                            C0xbi_CXP: "B",
                            cRMlaJb1_:
                              'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                            eZ_WIO8yz: "Choice 3",
                            fxy_09app:
                              "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                            height: "100%",
                            id: "fbzUeHx9R",
                            iDjlfHFIv: "C-2",
                            Jdv7M1lr6: "A",
                            JM8R5zcqV: true,
                            k4ezTegiq: 50,
                            K5BysgXsx: "zAJDHJhkW",
                            layoutId: "fbzUeHx9R",
                            LNNJy1jnm: "FNw58JHcH",
                            NvMMjvlBy:
                              "Please provide the dimensions of the drawing board (width, height, and depth).",
                            OJMet4Rjs: "Choice 1",
                            qQ_BO9qk8: "Choice 2",
                            TTpsRmZqr: true,
                            variant: "QKKRwxza_",
                            VOTcq87Vu: true,
                            vZATQhujj: "Board Dimensions",
                            width: "100%",
                            Xo22rvSfa: "B-2",
                            Z93yscm8P: "A-1",
                            ...addPropertyOverrides6(
                              {
                                epmnVbMnt: {
                                  cRMlaJb1_:
                                    'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                rfZM8jP4B: {
                                  cRMlaJb1_:
                                    'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                UQg3oaiFk: {
                                  cRMlaJb1_:
                                    'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                              },
                              baseVariant,
                              gestureVariant
                            ),
                          }),
                        }),
                      isDisplayed6() &&
                        /* @__PURE__ */ _jsx8(motion7.div, {
                          className: "framer-1igj8fa-container",
                          layoutDependency,
                          layoutId: "tvs76iJpG-container",
                          style: { opacity: 1 },
                          variants: { l5FvQV66Q: { opacity: 0 } },
                          ...addPropertyOverrides6(
                            {
                              l5FvQV66Q: {
                                transformTemplate: transformTemplate4,
                              },
                              qMUngWgkC: {
                                transformTemplate: transformTemplate4,
                              },
                            },
                            baseVariant,
                            gestureVariant
                          ),
                          children: /* @__PURE__ */ _jsx8(stdin_default4, {
                            bGyluXMcm: "C-2",
                            C0xbi_CXP: "B",
                            cRMlaJb1_:
                              'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                            eZ_WIO8yz: "Choice 3",
                            fxy_09app:
                              "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                            height: "100%",
                            id: "tvs76iJpG",
                            iDjlfHFIv: "C-2",
                            Jdv7M1lr6: "A",
                            JM8R5zcqV: true,
                            k4ezTegiq: 50,
                            K5BysgXsx: "zAJDHJhkW",
                            layoutId: "tvs76iJpG",
                            LNNJy1jnm: "FNw58JHcH",
                            NvMMjvlBy:
                              "Please provide the dimensions of the drawing board (width, height, and depth).",
                            OJMet4Rjs: "Choice 1",
                            qQ_BO9qk8: "Choice 2",
                            TTpsRmZqr: true,
                            variant: "QKKRwxza_",
                            VOTcq87Vu: true,
                            vZATQhujj: "Board Dimensions",
                            width: "100%",
                            Xo22rvSfa: "B-2",
                            Z93yscm8P: "A-1",
                            ...addPropertyOverrides6(
                              {
                                epmnVbMnt: {
                                  cRMlaJb1_:
                                    'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                rfZM8jP4B: {
                                  cRMlaJb1_:
                                    'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                                UQg3oaiFk: {
                                  cRMlaJb1_:
                                    'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                                  style: { width: "100%" },
                                  variant: "FXIjKjDPL",
                                },
                              },
                              baseVariant,
                              gestureVariant
                            ),
                          }),
                        }),
                    ],
                  }),
              }),
            isDisplayed7() &&
              /* @__PURE__ */ _jsx8(motion7.div, {
                className: "framer-1jstyen-container",
                layoutDependency,
                layoutId: "uG8Z9CRoe-container",
                style: { opacity: 1 },
                variants: { qMUngWgkC: { opacity: 0 } },
                ...addPropertyOverrides6(
                  { qMUngWgkC: { transformTemplate: transformTemplate1 } },
                  baseVariant,
                  gestureVariant
                ),
                children: /* @__PURE__ */ _jsx8(stdin_default4, {
                  bGyluXMcm: "C-2",
                  C0xbi_CXP: "B",
                  cRMlaJb1_:
                    'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                  eZ_WIO8yz: "Choice 3",
                  fxy_09app:
                    "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                  height: "100%",
                  id: "uG8Z9CRoe",
                  iDjlfHFIv: "C-2",
                  Jdv7M1lr6: "A",
                  JM8R5zcqV: true,
                  k4ezTegiq: 50,
                  K5BysgXsx: "zAJDHJhkW",
                  layoutId: "uG8Z9CRoe",
                  LNNJy1jnm: "FNw58JHcH",
                  NvMMjvlBy:
                    "Please provide the dimensions of the drawing board (width, height, and depth).",
                  OJMet4Rjs: "Choice 1",
                  qQ_BO9qk8: "Choice 2",
                  TTpsRmZqr: true,
                  variant: "l6T5PxAnq",
                  VOTcq87Vu: true,
                  vZATQhujj: "Board Dimensions",
                  width: "100%",
                  Xo22rvSfa: "B-2",
                  Z93yscm8P: "A-1",
                  ...addPropertyOverrides6(
                    { qMUngWgkC: { variant: "K8oqZ2hdT" } },
                    baseVariant,
                    gestureVariant
                  ),
                }),
              }),
            /* @__PURE__ */ _jsx8(Transition6, {
              ...addPropertyOverrides6(
                { HovROSEim: { value: transition2 } },
                baseVariant,
                gestureVariant
              ),
              children: /* @__PURE__ */ _jsx8(motion7.div, {
                className: "framer-10sdq10-container",
                layoutDependency,
                layoutId: "iSyHAlfzE-container",
                children: /* @__PURE__ */ _jsx8(stdin_default5, {
                  height: "100%",
                  id: "iSyHAlfzE",
                  layoutId: "iSyHAlfzE",
                  style: { height: "100%", width: "100%" },
                  variant: "RspHZjbvA",
                  width: "100%",
                  ...addPropertyOverrides6(
                    {
                      dVLWELU6e: { variant: "KzyHUFutd" },
                      epmnVbMnt: { variant: "NfdKYRGKU" },
                      HovROSEim: { variant: "CDTOPoYwJ" },
                      lBUZui6j9: { variant: "R_0SntBXV" },
                      p6HKTvlB3: { variant: "AKBlJHd8s" },
                      rfZM8jP4B: { variant: "NfdKYRGKU" },
                      UQg3oaiFk: { variant: "NfdKYRGKU" },
                      XACXI8mDn: { variant: "lR29aQ4aC" },
                    },
                    baseVariant,
                    gestureVariant
                  ),
                }),
              }),
            }),
            isDisplayed8() &&
              /* @__PURE__ */ _jsx8(motion7.div, {
                className: "framer-8j7eic-container",
                layoutDependency,
                layoutId: "R87ZiPGik-container",
                ...addPropertyOverrides6(
                  {
                    epmnVbMnt: { transformTemplate: transformTemplate4 },
                    UQg3oaiFk: { transformTemplate: transformTemplate4 },
                  },
                  baseVariant,
                  gestureVariant
                ),
                children: /* @__PURE__ */ _jsx8(stdin_default4, {
                  bGyluXMcm: "C-2",
                  C0xbi_CXP: "B",
                  cRMlaJb1_:
                    'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                  eZ_WIO8yz: "Choice 3",
                  fxy_09app:
                    "Width: 24 inches, Height: 36 inches, Depth: 0.5 inches",
                  height: "100%",
                  id: "R87ZiPGik",
                  iDjlfHFIv: "C-2",
                  Jdv7M1lr6: "A",
                  JM8R5zcqV: true,
                  k4ezTegiq: 50,
                  K5BysgXsx: "zAJDHJhkW",
                  layoutId: "R87ZiPGik",
                  LNNJy1jnm: "FNw58JHcH",
                  NvMMjvlBy:
                    "Please provide the dimensions of the drawing board (width, height, and depth).",
                  OJMet4Rjs: "Choice 1",
                  qQ_BO9qk8: "Choice 2",
                  style: { height: "100%", width: "100%" },
                  TTpsRmZqr: true,
                  variant: "FXIjKjDPL",
                  VOTcq87Vu: true,
                  vZATQhujj: "Board Dimensions",
                  width: "100%",
                  Xo22rvSfa: "B-2",
                  Z93yscm8P: "A-1",
                  ...addPropertyOverrides6(
                    {
                      epmnVbMnt: {
                        style: { width: "100%" },
                        variant: "tVxl2ewSx",
                      },
                      UQg3oaiFk: {
                        style: { width: "100%" },
                        variant: "z1ffbxAcs",
                      },
                    },
                    baseVariant,
                    gestureVariant
                  ),
                }),
              }),
          ],
        }),
      }),
    }),
  });
});
var css7 = [
  '.framer-ZiJgx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-ZiJgx .framer-1w3po97 { display: block; }",
  ".framer-ZiJgx .framer-hpdod { cursor: pointer; height: 537px; position: relative; width: 1009px; }",
  ".framer-ZiJgx .framer-6s0tzo, .framer-ZiJgx .framer-1mvnusd { flex: none; height: 393px; left: calc(49.653121902874155% - 391px / 2); overflow: visible; position: absolute; top: calc(48.60335195530728% - 393px / 2); width: 391px; }",
  ".framer-ZiJgx .framer-4b524j-container { flex: none; height: auto; left: 28px; position: absolute; top: 77px; width: auto; }",
  ".framer-ZiJgx .framer-vvhei8-container { flex: none; height: auto; left: 48%; position: absolute; top: 0px; width: auto; }",
  ".framer-ZiJgx .framer-d60suy-container { flex: none; height: auto; position: absolute; right: 40px; top: 69px; width: auto; }",
  ".framer-ZiJgx .framer-1iaswxc-container { bottom: 119px; flex: none; height: auto; position: absolute; right: 0px; width: auto; }",
  ".framer-ZiJgx .framer-ereqn5-container { bottom: 0px; flex: none; height: auto; position: absolute; right: 89px; width: auto; }",
  ".framer-ZiJgx .framer-8jq7kp-container { bottom: 6px; flex: none; height: auto; left: 70px; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-121179n-container { bottom: 149px; flex: none; height: auto; left: 0px; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-1w2gq54 { flex: none; height: 50px; overflow: visible; position: absolute; right: 421px; top: 114px; width: 50px; }",
  ".framer-ZiJgx .framer-1togqzb-container { bottom: -108px; flex: none; height: auto; position: absolute; right: -89px; width: auto; }",
  ".framer-ZiJgx .framer-u2l7lb-container { bottom: -234px; flex: none; height: auto; position: absolute; right: -56px; width: auto; }",
  ".framer-ZiJgx .framer-dt1nri-container { bottom: -279px; flex: none; height: auto; left: -73px; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-vm0lt-container { bottom: -219px; flex: none; height: auto; left: -187px; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-1xv0t2j-container { bottom: -93px; flex: none; height: auto; left: -204px; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-lc2jrz-container { flex: none; height: auto; left: -122px; position: absolute; top: -5px; width: auto; }",
  ".framer-ZiJgx .framer-15swu5u-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }",
  ".framer-ZiJgx .framer-ywbmcs { flex: none; height: 233px; left: calc(49.9504459861249% - 233px / 2); overflow: visible; position: absolute; top: calc(49.90689013035384% - 233px / 2); width: 233px; }",
  ".framer-ZiJgx .framer-1egxi8f-container { flex: none; height: auto; left: 16px; position: absolute; top: 28px; width: auto; }",
  ".framer-ZiJgx .framer-17glung-container { bottom: 5px; flex: none; height: auto; left: 40px; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-xsw623-container { bottom: 69px; flex: none; height: auto; left: -2px; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-15gph2n-container { bottom: 60px; flex: none; height: auto; position: absolute; right: 0px; width: auto; }",
  ".framer-ZiJgx .framer-yox9q5-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; width: auto; }",
  ".framer-ZiJgx .framer-n0gl4w-container { bottom: 0px; flex: none; height: auto; position: absolute; right: 53px; width: auto; }",
  ".framer-ZiJgx .framer-10kjnxc-container { flex: none; height: auto; position: absolute; right: 15px; top: 34px; width: auto; }",
  ".framer-ZiJgx .framer-1k3vrbv { bottom: -21px; flex: none; height: 395px; left: -9px; overflow: visible; position: absolute; right: -10px; }",
  ".framer-ZiJgx .framer-gkoso3-container { flex: none; height: auto; left: 91px; position: absolute; top: 1px; width: auto; }",
  ".framer-ZiJgx .framer-1yvmtw8-container { flex: none; height: auto; position: absolute; right: 0px; top: 134px; width: auto; }",
  ".framer-ZiJgx .framer-w97bgk-container { bottom: 57px; flex: none; height: auto; position: absolute; right: 29px; width: auto; }",
  ".framer-ZiJgx .framer-fpq9rw-container { bottom: 0px; flex: none; height: auto; left: 51%; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-160pc9z-container { bottom: 77px; flex: none; height: auto; left: 7px; position: absolute; width: auto; }",
  ".framer-ZiJgx .framer-1jw6h9g-container { flex: none; height: auto; left: 0px; position: absolute; top: 125px; width: auto; }",
  ".framer-ZiJgx .framer-1igj8fa-container { flex: none; height: auto; position: absolute; right: 103px; top: 1px; width: auto; }",
  ".framer-ZiJgx .framer-1jstyen-container { flex: none; height: auto; position: absolute; right: 51px; top: 64px; width: auto; }",
  ".framer-ZiJgx .framer-10sdq10-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",
  ".framer-ZiJgx .framer-8j7eic-container { flex: none; height: 22px; left: calc(53.32011892963332% - 56px / 2); position: absolute; top: 168px; width: 56px; }",
  ".framer-ZiJgx.framer-v-f73ajw .framer-1egxi8f-container, .framer-ZiJgx.framer-v-1odncvf .framer-1egxi8f-container, .framer-ZiJgx.framer-v-d973em .framer-1egxi8f-container, .framer-ZiJgx.framer-v-13tsvzn .framer-1egxi8f-container, .framer-ZiJgx.framer-v-yrn57e .framer-1egxi8f-container, .framer-ZiJgx.framer-v-13llhv3 .framer-1egxi8f-container, .framer-ZiJgx.framer-v-13llhv3 .framer-yox9q5-container { left: 50%; top: 50%; }",
  ".framer-ZiJgx.framer-v-f73ajw .framer-17glung-container, .framer-ZiJgx.framer-v-f73ajw .framer-xsw623-container, .framer-ZiJgx.framer-v-1odncvf .framer-17glung-container, .framer-ZiJgx.framer-v-1odncvf .framer-xsw623-container, .framer-ZiJgx.framer-v-d973em .framer-17glung-container, .framer-ZiJgx.framer-v-d973em .framer-xsw623-container, .framer-ZiJgx.framer-v-13tsvzn .framer-17glung-container, .framer-ZiJgx.framer-v-13tsvzn .framer-xsw623-container, .framer-ZiJgx.framer-v-yrn57e .framer-17glung-container, .framer-ZiJgx.framer-v-yrn57e .framer-xsw623-container, .framer-ZiJgx.framer-v-13llhv3 .framer-17glung-container, .framer-ZiJgx.framer-v-13llhv3 .framer-xsw623-container { bottom: unset; left: 50%; top: 50%; }",
  ".framer-ZiJgx.framer-v-f73ajw .framer-15gph2n-container, .framer-ZiJgx.framer-v-f73ajw .framer-n0gl4w-container, .framer-ZiJgx.framer-v-1odncvf .framer-15gph2n-container, .framer-ZiJgx.framer-v-1odncvf .framer-n0gl4w-container, .framer-ZiJgx.framer-v-d973em .framer-15gph2n-container, .framer-ZiJgx.framer-v-d973em .framer-n0gl4w-container, .framer-ZiJgx.framer-v-13tsvzn .framer-15gph2n-container, .framer-ZiJgx.framer-v-13tsvzn .framer-n0gl4w-container, .framer-ZiJgx.framer-v-yrn57e .framer-15gph2n-container, .framer-ZiJgx.framer-v-yrn57e .framer-n0gl4w-container, .framer-ZiJgx.framer-v-13llhv3 .framer-15gph2n-container, .framer-ZiJgx.framer-v-13llhv3 .framer-n0gl4w-container { bottom: unset; left: 50%; right: unset; top: 50%; }",
  ".framer-ZiJgx.framer-v-f73ajw .framer-yox9q5-container, .framer-ZiJgx.framer-v-1odncvf .framer-yox9q5-container, .framer-ZiJgx.framer-v-d973em .framer-yox9q5-container, .framer-ZiJgx.framer-v-13tsvzn .framer-yox9q5-container, .framer-ZiJgx.framer-v-yrn57e .framer-yox9q5-container { top: 50%; }",
  ".framer-ZiJgx.framer-v-f73ajw .framer-10kjnxc-container, .framer-ZiJgx.framer-v-1odncvf .framer-10kjnxc-container, .framer-ZiJgx.framer-v-d973em .framer-10kjnxc-container, .framer-ZiJgx.framer-v-13tsvzn .framer-10kjnxc-container, .framer-ZiJgx.framer-v-yrn57e .framer-10kjnxc-container, .framer-ZiJgx.framer-v-13llhv3 .framer-10kjnxc-container { left: 50%; right: unset; top: 50%; }",
  ".framer-ZiJgx.framer-v-1l5e6kx .framer-10kjnxc-container, .framer-ZiJgx.framer-v-15llivf .framer-10kjnxc-container, .framer-ZiJgx.framer-v-162rgdv .framer-10kjnxc-container { right: -260px; top: -33px; }",
  ".framer-ZiJgx.framer-v-15llivf .framer-xsw623-container, .framer-ZiJgx.framer-v-162rgdv .framer-xsw623-container { bottom: 15px; left: -262px; }",
  ".framer-ZiJgx.framer-v-162rgdv .framer-n0gl4w-container { bottom: -51px; right: -220px; }",
  ".framer-ZiJgx.framer-v-18c1qok .framer-xsw623-container { bottom: 68px; }",
  ".framer-ZiJgx.framer-v-18c1qok .framer-n0gl4w-container { right: 49px; }",
  ".framer-ZiJgx.framer-v-18c1qok .framer-10kjnxc-container { right: -266px; top: 48%; }",
  ".framer-ZiJgx.framer-v-f3lruz .framer-1togqzb-container, .framer-ZiJgx.framer-v-f3lruz .framer-u2l7lb-container { bottom: -137px; left: -57px; right: unset; }",
  ".framer-ZiJgx.framer-v-f3lruz .framer-dt1nri-container, .framer-ZiJgx.framer-v-f3lruz .framer-vm0lt-container, .framer-ZiJgx.framer-v-f3lruz .framer-1xv0t2j-container { bottom: -137px; left: -57px; }",
  ".framer-ZiJgx.framer-v-f3lruz .framer-lc2jrz-container { bottom: -137px; left: -57px; top: unset; }",
  ".framer-ZiJgx.framer-v-f3lruz .framer-15swu5u-container { bottom: -123px; left: -57px; top: unset; }",
  ".framer-ZiJgx.framer-v-f3lruz .framer-10kjnxc-container { right: 13px; }",
  ".framer-ZiJgx.framer-v-87eqop .framer-10kjnxc-container { right: 6px; top: 33px; }",
  ".framer-ZiJgx.framer-v-ewze6y .framer-gkoso3-container { left: 42px; top: 64px; }",
  ".framer-ZiJgx.framer-v-ewze6y .framer-1yvmtw8-container { right: 57px; top: 55px; }",
  ".framer-ZiJgx.framer-v-ewze6y .framer-w97bgk-container { bottom: 146px; right: 15px; }",
  ".framer-ZiJgx.framer-v-ewze6y .framer-fpq9rw-container, .framer-ZiJgx.framer-v-tv2zos .framer-fpq9rw-container { bottom: 25px; left: unset; right: 104px; }",
  ".framer-ZiJgx.framer-v-ewze6y .framer-160pc9z-container { bottom: 34px; left: 84px; }",
  ".framer-ZiJgx.framer-v-ewze6y .framer-1jw6h9g-container { left: 14px; top: 53%; }",
  ".framer-ZiJgx.framer-v-ewze6y .framer-1igj8fa-container { left: 49%; right: unset; top: -14px; }",
  ".framer-ZiJgx.framer-v-ewze6y .framer-1jstyen-container { left: 50%; right: unset; top: 54%; }",
  ".framer-ZiJgx.framer-v-1ewhbs6 .framer-1igj8fa-container { right: 92px; top: -10px; }",
  ".framer-ZiJgx.framer-v-47329 .framer-1igj8fa-container, .framer-ZiJgx.framer-v-16mzam7 .framer-1igj8fa-container { right: 98px; top: 9px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-6s0tzo, .framer-ZiJgx.framer-v-q73e3h .framer-6s0tzo, .framer-ZiJgx.framer-v-1xwigab .framer-6s0tzo { left: 215px; top: calc(50.0931098696462% - 393px / 2); }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-4b524j-container, .framer-ZiJgx.framer-v-q73e3h .framer-4b524j-container, .framer-ZiJgx.framer-v-1xwigab .framer-4b524j-container { left: 46%; top: 97px; width: 53px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-vvhei8-container, .framer-ZiJgx.framer-v-q73e3h .framer-vvhei8-container, .framer-ZiJgx.framer-v-1xwigab .framer-vvhei8-container { left: 152px; top: 127px; width: 40px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-d60suy-container, .framer-ZiJgx.framer-v-q73e3h .framer-d60suy-container, .framer-ZiJgx.framer-v-1xwigab .framer-d60suy-container { left: 47%; right: unset; top: 157px; width: 61px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1iaswxc-container, .framer-ZiJgx.framer-v-q73e3h .framer-1iaswxc-container, .framer-ZiJgx.framer-v-1xwigab .framer-1iaswxc-container { bottom: unset; left: 46%; right: unset; top: 50%; width: 52px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-ereqn5-container, .framer-ZiJgx.framer-v-q73e3h .framer-ereqn5-container, .framer-ZiJgx.framer-v-1xwigab .framer-ereqn5-container { bottom: 157px; left: 45%; right: unset; width: 50px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-8jq7kp-container, .framer-ZiJgx.framer-v-q73e3h .framer-8jq7kp-container, .framer-ZiJgx.framer-v-1xwigab .framer-8jq7kp-container { bottom: 127px; left: 47%; width: 61px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-121179n-container, .framer-ZiJgx.framer-v-q73e3h .framer-121179n-container, .framer-ZiJgx.framer-v-1xwigab .framer-121179n-container { bottom: 97px; left: 152px; width: 40px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1w2gq54, .framer-ZiJgx.framer-v-q73e3h .framer-1w2gq54, .framer-ZiJgx.framer-v-1xwigab .framer-1w2gq54 { height: 271px; right: 428px; top: calc(50.0931098696462% - 271px / 2); }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1togqzb-container, .framer-ZiJgx.framer-v-q73e3h .framer-1togqzb-container, .framer-ZiJgx.framer-v-1xwigab .framer-1togqzb-container { bottom: unset; left: -21px; right: unset; top: 36px; width: 56px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-u2l7lb-container, .framer-ZiJgx.framer-v-q73e3h .framer-u2l7lb-container, .framer-ZiJgx.framer-v-1xwigab .framer-u2l7lb-container { bottom: unset; left: -64px; right: unset; top: 66px; width: 64px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-dt1nri-container, .framer-ZiJgx.framer-v-q73e3h .framer-dt1nri-container, .framer-ZiJgx.framer-v-1xwigab .framer-dt1nri-container { bottom: unset; left: -38px; right: 0px; top: 96px; width: unset; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-vm0lt-container, .framer-ZiJgx.framer-v-q73e3h .framer-vm0lt-container, .framer-ZiJgx.framer-v-1xwigab .framer-vm0lt-container { bottom: unset; left: -18px; top: 50%; width: 54px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1xv0t2j-container, .framer-ZiJgx.framer-v-q73e3h .framer-1xv0t2j-container, .framer-ZiJgx.framer-v-1xwigab .framer-1xv0t2j-container { bottom: 96px; left: -37px; right: -9px; width: unset; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-lc2jrz-container, .framer-ZiJgx.framer-v-q73e3h .framer-lc2jrz-container, .framer-ZiJgx.framer-v-1xwigab .framer-lc2jrz-container { bottom: 66px; left: -31px; top: unset; width: 43px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-15swu5u-container, .framer-ZiJgx.framer-v-q73e3h .framer-15swu5u-container, .framer-ZiJgx.framer-v-1xwigab .framer-15swu5u-container { bottom: 36px; left: -52px; top: unset; width: 91px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-ywbmcs, .framer-ZiJgx.framer-v-q73e3h .framer-ywbmcs, .framer-ZiJgx.framer-v-1xwigab .framer-ywbmcs { left: calc(45.29236868186325% - 233px / 2); top: calc(50.0931098696462% - 233px / 2); }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1egxi8f-container, .framer-ZiJgx.framer-v-q73e3h .framer-1egxi8f-container, .framer-ZiJgx.framer-v-1xwigab .framer-1egxi8f-container { left: 53%; top: 17px; width: 72px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-17glung-container, .framer-ZiJgx.framer-v-q73e3h .framer-17glung-container, .framer-ZiJgx.framer-v-1xwigab .framer-17glung-container { bottom: unset; left: 73px; top: 47px; width: 44px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-xsw623-container, .framer-ZiJgx.framer-v-q73e3h .framer-xsw623-container, .framer-ZiJgx.framer-v-1xwigab .framer-xsw623-container { bottom: unset; left: 51%; top: 77px; width: 52px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-15gph2n-container, .framer-ZiJgx.framer-v-q73e3h .framer-15gph2n-container, .framer-ZiJgx.framer-v-1xwigab .framer-15gph2n-container { bottom: unset; left: 53%; right: unset; top: 50%; width: 78px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-yox9q5-container, .framer-ZiJgx.framer-v-q73e3h .framer-yox9q5-container, .framer-ZiJgx.framer-v-1xwigab .framer-yox9q5-container { bottom: 77px; left: 49%; top: unset; width: 62px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-n0gl4w-container, .framer-ZiJgx.framer-v-q73e3h .framer-n0gl4w-container, .framer-ZiJgx.framer-v-1xwigab .framer-n0gl4w-container { bottom: 47px; left: 53%; right: unset; width: 55px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-10kjnxc-container, .framer-ZiJgx.framer-v-q73e3h .framer-10kjnxc-container, .framer-ZiJgx.framer-v-1xwigab .framer-10kjnxc-container { bottom: 17px; left: 73px; right: unset; top: unset; width: 56px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1mvnusd, .framer-ZiJgx.framer-v-q73e3h .framer-1mvnusd, .framer-ZiJgx.framer-v-1xwigab .framer-1mvnusd { left: 246px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1k3vrbv, .framer-ZiJgx.framer-v-q73e3h .framer-1k3vrbv, .framer-ZiJgx.framer-v-1xwigab .framer-1k3vrbv { align-content: flex-end; align-items: flex-end; bottom: -9px; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; left: -19px; padding: 0px 0px 0px 0px; right: 0px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-gkoso3-container, .framer-ZiJgx.framer-v-q73e3h .framer-gkoso3-container, .framer-ZiJgx.framer-v-1xwigab .framer-gkoso3-container { left: unset; position: relative; top: unset; width: 65px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1yvmtw8-container, .framer-ZiJgx.framer-v-q73e3h .framer-1yvmtw8-container, .framer-ZiJgx.framer-v-1xwigab .framer-1yvmtw8-container { position: relative; right: unset; top: unset; width: 101px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-w97bgk-container, .framer-ZiJgx.framer-v-q73e3h .framer-w97bgk-container, .framer-ZiJgx.framer-v-1xwigab .framer-w97bgk-container { bottom: unset; position: relative; right: unset; width: 47px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-fpq9rw-container, .framer-ZiJgx.framer-v-q73e3h .framer-fpq9rw-container, .framer-ZiJgx.framer-v-1xwigab .framer-fpq9rw-container { bottom: unset; left: unset; position: relative; width: 63px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-160pc9z-container, .framer-ZiJgx.framer-v-q73e3h .framer-160pc9z-container, .framer-ZiJgx.framer-v-1xwigab .framer-160pc9z-container { bottom: unset; left: unset; position: relative; width: 38px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1jw6h9g-container, .framer-ZiJgx.framer-v-q73e3h .framer-1jw6h9g-container, .framer-ZiJgx.framer-v-1xwigab .framer-1jw6h9g-container { left: unset; position: relative; top: unset; width: 85px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-1igj8fa-container, .framer-ZiJgx.framer-v-q73e3h .framer-1igj8fa-container, .framer-ZiJgx.framer-v-1xwigab .framer-1igj8fa-container { position: relative; right: unset; top: unset; width: 55px; }",
  ".framer-ZiJgx.framer-v-n0vpn9 .framer-10sdq10-container, .framer-ZiJgx.framer-v-q73e3h .framer-10sdq10-container, .framer-ZiJgx.framer-v-1xwigab .framer-10sdq10-container { mix-blend-mode: multiply; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZiJgx.framer-v-n0vpn9 .framer-1k3vrbv { gap: 0px; } .framer-ZiJgx.framer-v-n0vpn9 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ZiJgx.framer-v-n0vpn9 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-ZiJgx.framer-v-n0vpn9 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }",
  ".framer-ZiJgx.framer-v-q73e3h .framer-8j7eic-container, .framer-ZiJgx.framer-v-1xwigab .framer-8j7eic-container { height: auto; left: 52%; top: 22px; width: 730px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZiJgx.framer-v-q73e3h .framer-1k3vrbv { gap: 0px; } .framer-ZiJgx.framer-v-q73e3h .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ZiJgx.framer-v-q73e3h .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-ZiJgx.framer-v-q73e3h .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZiJgx.framer-v-1xwigab .framer-1k3vrbv { gap: 0px; } .framer-ZiJgx.framer-v-1xwigab .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ZiJgx.framer-v-1xwigab .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-ZiJgx.framer-v-1xwigab .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }",
  ".framer-ZiJgx.framer-v-tv2zos .framer-gkoso3-container { left: 42px; top: 63px; }",
  ".framer-ZiJgx.framer-v-tv2zos .framer-1yvmtw8-container { right: 54px; top: 56px; }",
  ".framer-ZiJgx.framer-v-tv2zos .framer-w97bgk-container { bottom: 144px; right: 14px; }",
  ".framer-ZiJgx.framer-v-tv2zos .framer-160pc9z-container { bottom: 32px; left: 84px; }",
  ".framer-ZiJgx.framer-v-tv2zos .framer-1jw6h9g-container { left: 15px; top: 53%; }",
  ".framer-ZiJgx.framer-v-tv2zos .framer-1igj8fa-container { left: 48%; right: unset; top: -14px; }",
  ".framer-ZiJgx.framer-v-1j14qwb .framer-4b524j-container { left: 33px; top: 157px; }",
  ".framer-ZiJgx.framer-v-1j14qwb .framer-vvhei8-container { left: 115px; top: 50px; }",
  ".framer-ZiJgx.framer-v-1j14qwb .framer-d60suy-container { right: 119px; top: 59px; }",
  ".framer-ZiJgx.framer-v-1j14qwb .framer-1iaswxc-container { bottom: unset; right: 26px; top: 48%; }",
  ".framer-ZiJgx.framer-v-1j14qwb .framer-ereqn5-container { bottom: 65px; right: 58px; }",
  ".framer-ZiJgx.framer-v-1j14qwb .framer-8jq7kp-container { bottom: 20px; left: 46%; }",
  ".framer-ZiJgx.framer-v-1j14qwb .framer-121179n-container { bottom: 81px; left: 51px; }",
  ".framer-ZiJgx.framer-v-1sk9d83 .framer-1togqzb-container { bottom: -67px; right: -12px; }",
  ".framer-ZiJgx.framer-v-1sk9d83 .framer-u2l7lb-container { bottom: -156px; right: -27px; }",
  ".framer-ZiJgx.framer-v-1sk9d83 .framer-dt1nri-container { bottom: -216px; left: -15px; }",
  ".framer-ZiJgx.framer-v-1sk9d83 .framer-vm0lt-container { bottom: -211px; left: -106px; }",
  ".framer-ZiJgx.framer-v-1sk9d83 .framer-1xv0t2j-container { bottom: -147px; left: -148px; }",
  ".framer-ZiJgx.framer-v-1sk9d83 .framer-lc2jrz-container { bottom: -61px; left: -129px; top: unset; }",
  ".framer-ZiJgx.framer-v-1sk9d83 .framer-15swu5u-container { bottom: -33px; left: -54px; top: unset; }",
  ".framer-ZiJgx.framer-v-13llhv3 .framer-hpdod { cursor: unset; }",
];
var FramerC6ZYtBmll = withCSS8(Component6, css7, "framer-ZiJgx");
var stdin_default6 = FramerC6ZYtBmll;
FramerC6ZYtBmll.displayName = "FYLO COMPOSITION";
FramerC6ZYtBmll.defaultProps = { height: 537, width: 1009 };
addPropertyControls8(FramerC6ZYtBmll, {
  variant: {
    options: [
      "zEXSsGxpE",
      "HovROSEim",
      "lBUZui6j9",
      "dVLWELU6e",
      "XACXI8mDn",
      "vf_oeYc8q",
      "Wzv1r0oKb",
      "ovIpGU7cl",
      "aOPZX8nJO",
      "X7nXpe0gP",
      "y0Wse_j8v",
      "QcEIwdpHn",
      "r8IR85ZDv",
      "qMUngWgkC",
      "gDTDJiCJ2",
      "p6HKTvlB3",
      "rfZM8jP4B",
      "epmnVbMnt",
      "UQg3oaiFk",
      "kFGmGEOUz",
      "l5FvQV66Q",
      "udHfq45LS",
      "Z1sTRLzN1",
      "cq7D62bxc",
    ],
    optionTitles: [
      "Variant 6",
      "Variant 1",
      "Variant 2",
      "Variant 3",
      "Variant 4",
      "Variant 5",
      "Variant 7",
      "Variant 8",
      "Variant 9",
      "Variant 10",
      "Variant 11",
      "Variant 12",
      "Variant 13",
      "Variant 14",
      "Variant 15",
      "Variant 16",
      "Variant 17",
      "Variant 18",
      "Variant 19",
      "Variant 21",
      "Variant 22",
      "Variant 23",
      "Variant 24",
      "Variant 25",
    ],
    title: "Variant",
    type: ControlType11.Enum,
  },
});
addFonts6(FramerC6ZYtBmll, [...NodeFonts, ...SeedFonts]);

// composition.js
import { WithFramerBreakpoints } from "installable-framer/dist/react";
import { jsx } from "react/jsx-runtime";
stdin_default6.Responsive = (props) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, {
    Component: stdin_default6,
    ...props,
  });
};
var composition_default = stdin_default6;
export { composition_default as default };
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
