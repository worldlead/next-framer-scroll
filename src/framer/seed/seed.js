'use client';
var __defProp = Object.defineProperty;
var __export = (target, all,) => {
  for (var name in all) {
    __defProp(target, name, { get: all[name], enumerable: true, },);
  }
};

// https:https://framer.com/m/Seed-aLgb.js@iyYRGD4DpZrrjfEv0XTS
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx,
  getFonts,
  RichText,
  SVG,
  useLocaleInfo,
  useVariantState,
  withCSS as withCSS2,
} from 'installable-framer/dist/framer';
import { LayoutGroup, motion, MotionConfigContext, } from 'framer-motion';
import * as React from 'react';

// https:https://framerusercontent.com/modules/vgSbxmWWvbgW6ShllXld/9oZlwlOxsp6zJVFpVkIp/Typewriter.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addPropertyControls, ControlType, RenderTarget, withCSS, } from 'installable-framer/dist/framer';

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
},);
var cn = Object.create;
var Ie = Object.defineProperty;
var fn = Object.getOwnPropertyDescriptor;
var ln = Object.getOwnPropertyNames;
var pn = Object.getPrototypeOf;
var dn = Object.prototype.hasOwnProperty;
var De = (t, o,) => () => (o || t((o = { exports: {}, }).exports, o,), o.exports);
var vn = (t, o,) => {
  for (var c in o) {
    Ie(t, c, { get: o[c], enumerable: true, },);
  }
};
var je = (t, o, c, y,) => {
  if (o && typeof o == 'object' || typeof o == 'function') {
    for (let l of ln(o,)) {
      !dn.call(t, l,) && l !== c && Ie(t, l, { get: () => o[l], enumerable: !(y = fn(o, l,)) || y.enumerable, },);
    }
  }
  return t;
};
var F = (t, o, c,) => (je(t, o, 'default',), c && je(c, o, 'default',));
var jr = (
  t,
  o,
  c,
) => (c = t != null ? cn(pn(t,),) : {}, je(o || !t || !t.__esModule ? Ie(c, 'default', { value: t, enumerable: true, },) : c, t,));
var Yr = De((p,) => {
  'use strict';
  var G = Symbol.for('react.element',),
    yn = Symbol.for('react.portal',),
    hn = Symbol.for('react.fragment',),
    mn = Symbol.for('react.strict_mode',),
    _n = Symbol.for('react.profiler',),
    gn = Symbol.for('react.provider',),
    bn = Symbol.for('react.context',),
    En = Symbol.for('react.forward_ref',),
    Rn = Symbol.for('react.suspense',),
    Cn = Symbol.for('react.memo',),
    wn = Symbol.for('react.lazy',),
    Ir = Symbol.iterator;
  function Sn(t,) {
    return t === null || typeof t != 'object' ? null : (t = Ir && t[Ir] || t['@@iterator'], typeof t == 'function' ? t : null);
  }
  var Fr = {
      isMounted: function () {
        return false;
      },
      enqueueForceUpdate: function () {
      },
      enqueueReplaceState: function () {
      },
      enqueueSetState: function () {
      },
    },
    Lr = Object.assign,
    Nr = {};
  function z(t, o, c,) {
    this.props = t, this.context = o, this.refs = Nr, this.updater = c || Fr;
  }
  z.prototype.isReactComponent = {};
  z.prototype.setState = function (t, o,) {
    if (typeof t != 'object' && typeof t != 'function' && t != null) {
      throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.',);
    }
    this.updater.enqueueSetState(this, t, o, 'setState',);
  };
  z.prototype.forceUpdate = function (t,) {
    this.updater.enqueueForceUpdate(this, t, 'forceUpdate',);
  };
  function Mr() {
  }
  Mr.prototype = z.prototype;
  function Fe(t, o, c,) {
    this.props = t, this.context = o, this.refs = Nr, this.updater = c || Fr;
  }
  var Le = Fe.prototype = new Mr();
  Le.constructor = Fe;
  Lr(Le, z.prototype,);
  Le.isPureReactComponent = true;
  var Dr = Array.isArray,
    Vr = Object.prototype.hasOwnProperty,
    Ne = { current: null, },
    Ur = { key: true, ref: true, __self: true, __source: true, };
  function Wr(t, o, c,) {
    var y, l = {}, b = null, C = null;
    if (o != null) {
      for (y in o.ref !== void 0 && (C = o.ref), o.key !== void 0 && (b = '' + o.key), o) {
        Vr.call(o, y,) && !Ur.hasOwnProperty(y,) && (l[y] = o[y]);
      }
    }
    var g = arguments.length - 2;
    if (g === 1) {
      l.children = c;
    } else if (1 < g) {
      for (var m = Array(g,), T = 0; T < g; T++) {
        m[T] = arguments[T + 2];
      }
      l.children = m;
    }
    if (t && t.defaultProps) {
      for (y in g = t.defaultProps, g) {
        l[y] === void 0 && (l[y] = g[y]);
      }
    }
    return { $$typeof: G, type: t, key: b, ref: C, props: l, _owner: Ne.current, };
  }
  function On(t, o,) {
    return { $$typeof: G, type: t.type, key: o, ref: t.ref, props: t.props, _owner: t._owner, };
  }
  function Me(t,) {
    return typeof t == 'object' && t !== null && t.$$typeof === G;
  }
  function Tn(t,) {
    var o = { '=': '=0', ':': '=2', };
    return '$' + t.replace(/[=:]/g, function (c,) {
      return o[c];
    },);
  }
  var $r = /\/+/g;
  function $e(t, o,) {
    return typeof t == 'object' && t !== null && t.key != null ? Tn('' + t.key,) : o.toString(36,);
  }
  function fe(t, o, c, y, l,) {
    var b = typeof t;
    (b === 'undefined' || b === 'boolean') && (t = null);
    var C = false;
    if (t === null) {
      C = true;
    } else {
      switch (b) {
        case 'string':
        case 'number':
          C = true;
          break;
        case 'object':
          switch (t.$$typeof) {
            case G:
            case yn:
              C = true;
          }
      }
    }
    if (C) {
      return C = t,
        l = l(C,),
        t = y === '' ? '.' + $e(C, 0,) : y,
        Dr(l,)
          ? (c = '',
            t != null && (c = t.replace($r, '$&/',) + '/'),
            fe(l, o, c, '', function (T,) {
              return T;
            },))
          : l != null &&
            (Me(l,) && (l = On(l, c + (!l.key || C && C.key === l.key ? '' : ('' + l.key).replace($r, '$&/',) + '/') + t,)), o.push(l,)),
        1;
    }
    if (C = 0, y = y === '' ? '.' : y + ':', Dr(t,)) {
      for (var g = 0; g < t.length; g++) {
        b = t[g];
        var m = y + $e(b, g,);
        C += fe(b, o, c, m, l,);
      }
    } else if (m = Sn(t,), typeof m == 'function') {
      for (t = m.call(t,), g = 0; !(b = t.next()).done;) {
        b = b.value, m = y + $e(b, g++,), C += fe(b, o, c, m, l,);
      }
    } else if (b === 'object') {
      throw o = String(t,),
        Error(
          'Objects are not valid as a React child (found: ' +
            (o === '[object Object]' ? 'object with keys {' + Object.keys(t,).join(', ',) + '}' : o) +
            '). If you meant to render a collection of children, use an array instead.',
        );
    }
    return C;
  }
  function ce(t, o, c,) {
    if (t == null) {
      return t;
    }
    var y = [], l = 0;
    return fe(t, y, '', '', function (b,) {
      return o.call(c, b, l++,);
    },),
      y;
  }
  function kn(t,) {
    if (t._status === -1) {
      var o = t._result;
      o = o(),
        o.then(function (c,) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = c);
        }, function (c,) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = c);
        },),
        t._status === -1 && (t._status = 0, t._result = o);
    }
    if (t._status === 1) {
      return t._result.default;
    }
    throw t._result;
  }
  var x = { current: null, },
    le = { transition: null, },
    Pn = { ReactCurrentDispatcher: x, ReactCurrentBatchConfig: le, ReactCurrentOwner: Ne, };
  p.Children = {
    map: ce,
    forEach: function (t, o, c,) {
      ce(t, function () {
        o.apply(this, arguments,);
      }, c,);
    },
    count: function (t,) {
      var o = 0;
      return ce(t, function () {
        o++;
      },),
        o;
    },
    toArray: function (t,) {
      return ce(t, function (o,) {
        return o;
      },) || [];
    },
    only: function (t,) {
      if (!Me(t,)) {
        throw Error('React.Children.only expected to receive a single React element child.',);
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
  p.cloneElement = function (t, o, c,) {
    if (t == null) {
      throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.',);
    }
    var y = Lr({}, t.props,), l = t.key, b = t.ref, C = t._owner;
    if (o != null) {
      if (o.ref !== void 0 && (b = o.ref, C = Ne.current), o.key !== void 0 && (l = '' + o.key), t.type && t.type.defaultProps) {
        var g = t.type.defaultProps;
      }
      for (m in o) {
        Vr.call(o, m,) && !Ur.hasOwnProperty(m,) && (y[m] = o[m] === void 0 && g !== void 0 ? g[m] : o[m]);
      }
    }
    var m = arguments.length - 2;
    if (m === 1) {
      y.children = c;
    } else if (1 < m) {
      g = Array(m,);
      for (var T = 0; T < m; T++) {
        g[T] = arguments[T + 2];
      }
      y.children = g;
    }
    return { $$typeof: G, type: t.type, key: l, ref: b, props: y, _owner: C, };
  };
  p.createContext = function (t,) {
    return t = {
      $$typeof: bn,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    },
      t.Provider = { $$typeof: gn, _context: t, },
      t.Consumer = t;
  };
  p.createElement = Wr;
  p.createFactory = function (t,) {
    var o = Wr.bind(null, t,);
    return o.type = t, o;
  };
  p.createRef = function () {
    return { current: null, };
  };
  p.forwardRef = function (t,) {
    return { $$typeof: En, render: t, };
  };
  p.isValidElement = Me;
  p.lazy = function (t,) {
    return { $$typeof: wn, _payload: { _status: -1, _result: t, }, _init: kn, };
  };
  p.memo = function (t, o,) {
    return { $$typeof: Cn, type: t, compare: o === void 0 ? null : o, };
  };
  p.startTransition = function (t,) {
    var o = le.transition;
    le.transition = {};
    try {
      t();
    } finally {
      le.transition = o;
    }
  };
  p.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.',);
  };
  p.useCallback = function (t, o,) {
    return x.current.useCallback(t, o,);
  };
  p.useContext = function (t,) {
    return x.current.useContext(t,);
  };
  p.useDebugValue = function () {
  };
  p.useDeferredValue = function (t,) {
    return x.current.useDeferredValue(t,);
  };
  p.useEffect = function (t, o,) {
    return x.current.useEffect(t, o,);
  };
  p.useId = function () {
    return x.current.useId();
  };
  p.useImperativeHandle = function (t, o, c,) {
    return x.current.useImperativeHandle(t, o, c,);
  };
  p.useInsertionEffect = function (t, o,) {
    return x.current.useInsertionEffect(t, o,);
  };
  p.useLayoutEffect = function (t, o,) {
    return x.current.useLayoutEffect(t, o,);
  };
  p.useMemo = function (t, o,) {
    return x.current.useMemo(t, o,);
  };
  p.useReducer = function (t, o, c,) {
    return x.current.useReducer(t, o, c,);
  };
  p.useRef = function (t,) {
    return x.current.useRef(t,);
  };
  p.useState = function (t,) {
    return x.current.useState(t,);
  };
  p.useSyncExternalStore = function (t, o, c,) {
    return x.current.useSyncExternalStore(t, o, c,);
  };
  p.useTransition = function () {
    return x.current.useTransition();
  };
  p.version = '18.2.0';
},);
var zr = De((d, pe,) => {
  'use strict';
  (function () {
    'use strict';
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == 'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error(),);
    var t = '18.2.0',
      o = Symbol.for('react.element',),
      c = Symbol.for('react.portal',),
      y = Symbol.for('react.fragment',),
      l = Symbol.for('react.strict_mode',),
      b = Symbol.for('react.profiler',),
      C = Symbol.for('react.provider',),
      g = Symbol.for('react.context',),
      m = Symbol.for('react.forward_ref',),
      T = Symbol.for('react.suspense',),
      de = Symbol.for('react.suspense_list',),
      L = Symbol.for('react.memo',),
      Q = Symbol.for('react.lazy',),
      Kr = Symbol.for('react.offscreen',),
      We = Symbol.iterator,
      qr = '@@iterator';
    function Ye(e,) {
      if (e === null || typeof e != 'object') {
        return null;
      }
      var r = We && e[We] || e[qr];
      return typeof r == 'function' ? r : null;
    }
    var ze = { current: null, },
      N = { transition: null, },
      k = { current: null, isBatchingLegacy: false, didScheduleLegacyUpdate: false, },
      A = { current: null, },
      B = {},
      J = null;
    function Be(e,) {
      J = e;
    }
    B.setExtraStackFrame = function (e,) {
      J = e;
    },
      B.getCurrentStack = null,
      B.getStackAddendum = function () {
        var e = '';
        J && (e += J);
        var r = B.getCurrentStack;
        return r && (e += r() || ''), e;
      };
    var Gr = false,
      Qr = false,
      Jr = false,
      Xr = false,
      Zr = false,
      M = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: N, ReactCurrentOwner: A, };
    M.ReactDebugCurrentFrame = B, M.ReactCurrentActQueue = k;
    function V(e,) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0,), a = 1; a < r; a++) {
          n[a - 1] = arguments[a];
        }
        He('warn', e, n,);
      }
    }
    function h(e,) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0,), a = 1; a < r; a++) {
          n[a - 1] = arguments[a];
        }
        He('error', e, n,);
      }
    }
    function He(e, r, n,) {
      {
        var a = M.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== '' && (r += '%s', n = n.concat([u,],));
        var s = n.map(function (i,) {
          return String(i,);
        },);
        s.unshift('Warning: ' + r,), Function.prototype.apply.call(console[e], console, s,);
      }
    }
    var Ke = {};
    function ve(e, r,) {
      {
        var n = e.constructor, a = n && (n.displayName || n.name) || 'ReactClass', u = a + '.' + r;
        if (Ke[u]) {
          return;
        }
        h(
          'Can\'t call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.',
          r,
          a,
        ), Ke[u] = true;
      }
    }
    var qe = {
        isMounted: function (e,) {
          return false;
        },
        enqueueForceUpdate: function (e, r, n,) {
          ve(e, 'forceUpdate',);
        },
        enqueueReplaceState: function (e, r, n, a,) {
          ve(e, 'replaceState',);
        },
        enqueueSetState: function (e, r, n, a,) {
          ve(e, 'setState',);
        },
      },
      j = Object.assign,
      ye = {};
    Object.freeze(ye,);
    function $(e, r, n,) {
      this.props = e, this.context = r, this.refs = ye, this.updater = n || qe;
    }
    $.prototype.isReactComponent = {},
      $.prototype.setState = function (e, r,) {
        if (typeof e != 'object' && typeof e != 'function' && e != null) {
          throw new Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
          );
        }
        this.updater.enqueueSetState(this, e, r, 'setState',);
      },
      $.prototype.forceUpdate = function (e,) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate',);
      };
    {
      var he = {
          isMounted: [
            'isMounted',
            'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
          ],
          replaceState: [
            'replaceState',
            'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
          ],
        },
        et = function (e, r,) {
          Object.defineProperty($.prototype, e, {
            get: function () {
              V('%s(...) is deprecated in plain JavaScript React classes. %s', r[0], r[1],);
            },
          },);
        };
      for (var me in he) {
        he.hasOwnProperty(me,) && et(me, he[me],);
      }
    }
    function Ge() {
    }
    Ge.prototype = $.prototype;
    function _e(e, r, n,) {
      this.props = e, this.context = r, this.refs = ye, this.updater = n || qe;
    }
    var ge = _e.prototype = new Ge();
    ge.constructor = _e, j(ge, $.prototype,), ge.isPureReactComponent = true;
    function rt() {
      var e = { current: null, };
      return Object.seal(e,), e;
    }
    var tt = Array.isArray;
    function X(e,) {
      return tt(e,);
    }
    function nt(e,) {
      {
        var r = typeof Symbol == 'function' && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || 'Object';
        return n;
      }
    }
    function at2(e,) {
      try {
        return Qe(e,), false;
      } catch {
        return true;
      }
    }
    function Qe(e,) {
      return '' + e;
    }
    function Z(e,) {
      if (at2(e,)) {
        return h(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          nt(e,),
        ),
          Qe(e,);
      }
    }
    function ot2(e, r, n,) {
      var a = e.displayName;
      if (a) {
        return a;
      }
      var u = r.displayName || r.name || '';
      return u !== '' ? n + '(' + u + ')' : n;
    }
    function Je(e,) {
      return e.displayName || 'Context';
    }
    function I(e,) {
      if (e == null) {
        return null;
      }
      if (
        typeof e.tag == 'number' &&
        h('Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',),
          typeof e == 'function'
      ) {
        return e.displayName || e.name || null;
      }
      if (typeof e == 'string') {
        return e;
      }
      switch (e) {
        case y:
          return 'Fragment';
        case c:
          return 'Portal';
        case b:
          return 'Profiler';
        case l:
          return 'StrictMode';
        case T:
          return 'Suspense';
        case de:
          return 'SuspenseList';
      }
      if (typeof e == 'object') {
        switch (e.$$typeof) {
          case g:
            var r = e;
            return Je(r,) + '.Consumer';
          case C:
            var n = e;
            return Je(n._context,) + '.Provider';
          case m:
            return ot2(e, e.render, 'ForwardRef',);
          case L:
            var a = e.displayName || null;
            return a !== null ? a : I(e.type,) || 'Memo';
          case Q: {
            var u = e, s = u._payload, i = u._init;
            try {
              return I(i(s,),);
            } catch {
              return null;
            }
          }
        }
      }
      return null;
    }
    var H = Object.prototype.hasOwnProperty, Xe = { key: true, ref: true, __self: true, __source: true, }, Ze, er, be;
    be = {};
    function rr(e,) {
      if (H.call(e, 'ref',)) {
        var r = Object.getOwnPropertyDescriptor(e, 'ref',).get;
        if (r && r.isReactWarning) {
          return false;
        }
      }
      return e.ref !== void 0;
    }
    function tr(e,) {
      if (H.call(e, 'key',)) {
        var r = Object.getOwnPropertyDescriptor(e, 'key',).get;
        if (r && r.isReactWarning) {
          return false;
        }
      }
      return e.key !== void 0;
    }
    function ut(e, r,) {
      var n = function () {
        Ze ||
          (Ze = true,
            h(
              '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
              r,
            ));
      };
      n.isReactWarning = true, Object.defineProperty(e, 'key', { get: n, configurable: true, },);
    }
    function it(e, r,) {
      var n = function () {
        er ||
          (er = true,
            h(
              '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
              r,
            ));
      };
      n.isReactWarning = true, Object.defineProperty(e, 'ref', { get: n, configurable: true, },);
    }
    function st2(e,) {
      if (typeof e.ref == 'string' && A.current && e.__self && A.current.stateNode !== e.__self) {
        var r = I(A.current.type,);
        be[r] ||
          (h(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            r,
            e.ref,
          ),
            be[r] = true);
      }
    }
    var Ee = function (e, r, n, a, u, s, i,) {
      var f = { $$typeof: o, type: e, key: r, ref: n, props: i, _owner: s, };
      return f._store = {},
        Object.defineProperty(f._store, 'validated', { configurable: false, enumerable: false, writable: true, value: false, },),
        Object.defineProperty(f, '_self', { configurable: false, enumerable: false, writable: false, value: a, },),
        Object.defineProperty(f, '_source', { configurable: false, enumerable: false, writable: false, value: u, },),
        Object.freeze && (Object.freeze(f.props,), Object.freeze(f,)),
        f;
    };
    function ct(e, r, n,) {
      var a, u = {}, s = null, i = null, f = null, v = null;
      if (r != null) {
        rr(r,) && (i = r.ref, st2(r,)),
          tr(r,) && (Z(r.key,), s = '' + r.key),
          f = r.__self === void 0 ? null : r.__self,
          v = r.__source === void 0 ? null : r.__source;
        for (a in r) {
          H.call(r, a,) && !Xe.hasOwnProperty(a,) && (u[a] = r[a]);
        }
      }
      var _ = arguments.length - 2;
      if (_ === 1) {
        u.children = n;
      } else if (_ > 1) {
        for (var E = Array(_,), R = 0; R < _; R++) {
          E[R] = arguments[R + 2];
        }
        Object.freeze && Object.freeze(E,), u.children = E;
      }
      if (e && e.defaultProps) {
        var w = e.defaultProps;
        for (a in w) {
          u[a] === void 0 && (u[a] = w[a]);
        }
      }
      if (s || i) {
        var S = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e;
        s && ut(u, S,), i && it(u, S,);
      }
      return Ee(e, s, i, f, v, A.current, u,);
    }
    function ft(e, r,) {
      var n = Ee(e.type, r, e.ref, e._self, e._source, e._owner, e.props,);
      return n;
    }
    function lt(e, r, n,) {
      if (e == null) {
        throw new Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',);
      }
      var a, u = j({}, e.props,), s = e.key, i = e.ref, f = e._self, v = e._source, _ = e._owner;
      if (r != null) {
        rr(r,) && (i = r.ref, _ = A.current), tr(r,) && (Z(r.key,), s = '' + r.key);
        var E;
        e.type && e.type.defaultProps && (E = e.type.defaultProps);
        for (a in r) {
          H.call(r, a,) && !Xe.hasOwnProperty(a,) && (r[a] === void 0 && E !== void 0 ? u[a] = E[a] : u[a] = r[a]);
        }
      }
      var R = arguments.length - 2;
      if (R === 1) {
        u.children = n;
      } else if (R > 1) {
        for (var w = Array(R,), S = 0; S < R; S++) {
          w[S] = arguments[S + 2];
        }
        u.children = w;
      }
      return Ee(e.type, s, i, f, v, _, u,);
    }
    function U(e,) {
      return typeof e == 'object' && e !== null && e.$$typeof === o;
    }
    var nr = '.', pt = ':';
    function dt2(e,) {
      var r = /[=:]/g,
        n = { '=': '=0', ':': '=2', },
        a = e.replace(r, function (u,) {
          return n[u];
        },);
      return '$' + a;
    }
    var ar = false, vt2 = /\/+/g;
    function or(e,) {
      return e.replace(vt2, '$&/',);
    }
    function Re(e, r,) {
      return typeof e == 'object' && e !== null && e.key != null ? (Z(e.key,), dt2('' + e.key,)) : r.toString(36,);
    }
    function ee(e, r, n, a, u,) {
      var s = typeof e;
      (s === 'undefined' || s === 'boolean') && (e = null);
      var i = false;
      if (e === null) {
        i = true;
      } else {
        switch (s) {
          case 'string':
          case 'number':
            i = true;
            break;
          case 'object':
            switch (e.$$typeof) {
              case o:
              case c:
                i = true;
            }
        }
      }
      if (i) {
        var f = e, v = u(f,), _ = a === '' ? nr + Re(f, 0,) : a;
        if (X(v,)) {
          var E = '';
          _ != null && (E = or(_,) + '/'),
            ee(v, r, E, '', function (sn,) {
              return sn;
            },);
        } else {
          v != null &&
            (U(v,) &&
              (v.key && (!f || f.key !== v.key) && Z(v.key,),
                v = ft(v, n + (v.key && (!f || f.key !== v.key) ? or('' + v.key,) + '/' : '') + _,)),
              r.push(v,));
        }
        return 1;
      }
      var R, w, S = 0, O = a === '' ? nr : a + pt;
      if (X(e,)) {
        for (var se = 0; se < e.length; se++) {
          R = e[se], w = O + Re(R, se,), S += ee(R, r, n, w, u,);
        }
      } else {
        var Ae = Ye(e,);
        if (typeof Ae == 'function') {
          var Pr = e;
          Ae === Pr.entries &&
            (ar || V('Using Maps as children is not supported. Use an array of keyed ReactElements instead.',), ar = true);
          for (var on = Ae.call(Pr,), xr, un = 0; !(xr = on.next()).done;) {
            R = xr.value, w = O + Re(R, un++,), S += ee(R, r, n, w, u,);
          }
        } else if (s === 'object') {
          var Ar = String(e,);
          throw new Error(
            'Objects are not valid as a React child (found: ' +
              (Ar === '[object Object]' ? 'object with keys {' + Object.keys(e,).join(', ',) + '}' : Ar) +
              '). If you meant to render a collection of children, use an array instead.',
          );
        }
      }
      return S;
    }
    function re(e, r, n,) {
      if (e == null) {
        return e;
      }
      var a = [], u = 0;
      return ee(e, a, '', '', function (s,) {
        return r.call(n, s, u++,);
      },),
        a;
    }
    function yt(e,) {
      var r = 0;
      return re(e, function () {
        r++;
      },),
        r;
    }
    function ht2(e, r, n,) {
      re(e, function () {
        r.apply(this, arguments,);
      }, n,);
    }
    function mt(e,) {
      return re(e, function (r,) {
        return r;
      },) || [];
    }
    function _t(e,) {
      if (!U(e,)) {
        throw new Error('React.Children.only expected to receive a single React element child.',);
      }
      return e;
    }
    function gt(e,) {
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
      r.Provider = { $$typeof: C, _context: r, };
      var n = false, a = false, u = false;
      {
        var s = { $$typeof: g, _context: r, };
        Object.defineProperties(s, {
          Provider: {
            get: function () {
              return a ||
                (a = true,
                  h('Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?',)),
                r.Provider;
            },
            set: function (i,) {
              r.Provider = i;
            },
          },
          _currentValue: {
            get: function () {
              return r._currentValue;
            },
            set: function (i,) {
              r._currentValue = i;
            },
          },
          _currentValue2: {
            get: function () {
              return r._currentValue2;
            },
            set: function (i,) {
              r._currentValue2 = i;
            },
          },
          _threadCount: {
            get: function () {
              return r._threadCount;
            },
            set: function (i,) {
              r._threadCount = i;
            },
          },
          Consumer: {
            get: function () {
              return n ||
                (n = true,
                  h('Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?',)),
                r.Consumer;
            },
          },
          displayName: {
            get: function () {
              return r.displayName;
            },
            set: function (i,) {
              u ||
                (V(
                  'Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = \'%s\'.',
                  i,
                ),
                  u = true);
            },
          },
        },), r.Consumer = s;
      }
      return r._currentRenderer = null, r._currentRenderer2 = null, r;
    }
    var K = -1, Ce = 0, ur = 1, bt = 2;
    function Et2(e,) {
      if (e._status === K) {
        var r = e._result, n = r();
        if (
          n.then(function (s,) {
            if (e._status === Ce || e._status === K) {
              var i = e;
              i._status = ur, i._result = s;
            }
          }, function (s,) {
            if (e._status === Ce || e._status === K) {
              var i = e;
              i._status = bt, i._result = s;
            }
          },), e._status === K
        ) {
          var a = e;
          a._status = Ce, a._result = n;
        }
      }
      if (e._status === ur) {
        var u = e._result;
        return u === void 0 && h(
          `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
          u,
        ),
          'default' in u || h(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            u,
          ),
          u.default;
      } else {
        throw e._result;
      }
    }
    function Rt(e,) {
      var r = { _status: K, _result: e, }, n = { $$typeof: Q, _payload: r, _init: Et2, };
      {
        var a, u;
        Object.defineProperties(n, {
          defaultProps: {
            configurable: true,
            get: function () {
              return a;
            },
            set: function (s,) {
              h('React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.',),
                a = s,
                Object.defineProperty(n, 'defaultProps', { enumerable: true, },);
            },
          },
          propTypes: {
            configurable: true,
            get: function () {
              return u;
            },
            set: function (s,) {
              h('React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.',),
                u = s,
                Object.defineProperty(n, 'propTypes', { enumerable: true, },);
            },
          },
        },);
      }
      return n;
    }
    function Ct2(e,) {
      e != null && e.$$typeof === L
        ? h(
          'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).',
        )
        : typeof e != 'function'
        ? h('forwardRef requires a render function but was given %s.', e === null ? 'null' : typeof e,)
        : e.length !== 0 && e.length !== 2 &&
          h(
            'forwardRef render functions accept exactly two parameters: props and ref. %s',
            e.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.',
          ),
        e != null && (e.defaultProps != null || e.propTypes != null) &&
        h('forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?',);
      var r = { $$typeof: m, render: e, };
      {
        var n;
        Object.defineProperty(r, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function () {
            return n;
          },
          set: function (a,) {
            n = a, !e.name && !e.displayName && (e.displayName = a);
          },
        },);
      }
      return r;
    }
    var ir;
    ir = Symbol.for('react.module.reference',);
    function sr(e,) {
      return !!(typeof e == 'string' || typeof e == 'function' || e === y || e === b || Zr || e === l || e === T || e === de || Xr ||
        e === Kr || Gr || Qr || Jr ||
        typeof e == 'object' && e !== null &&
          (e.$$typeof === Q || e.$$typeof === L || e.$$typeof === C || e.$$typeof === g || e.$$typeof === m || e.$$typeof === ir ||
            e.getModuleId !== void 0));
    }
    function wt(e, r,) {
      sr(e,) || h('memo: The first argument must be a component. Instead received: %s', e === null ? 'null' : typeof e,);
      var n = { $$typeof: L, type: e, compare: r === void 0 ? null : r, };
      {
        var a;
        Object.defineProperty(n, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function () {
            return a;
          },
          set: function (u,) {
            a = u, !e.name && !e.displayName && (e.displayName = u);
          },
        },);
      }
      return n;
    }
    function P() {
      var e = ze.current;
      return e === null &&
        h(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`,),
        e;
    }
    function St2(e,) {
      var r = P();
      if (e._context !== void 0) {
        var n = e._context;
        n.Consumer === e
          ? h(
            'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?',
          )
          : n.Provider === e &&
            h('Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?',);
      }
      return r.useContext(e,);
    }
    function Ot2(e,) {
      var r = P();
      return r.useState(e,);
    }
    function Tt2(e, r, n,) {
      var a = P();
      return a.useReducer(e, r, n,);
    }
    function kt(e,) {
      var r = P();
      return r.useRef(e,);
    }
    function Pt2(e, r,) {
      var n = P();
      return n.useEffect(e, r,);
    }
    function xt(e, r,) {
      var n = P();
      return n.useInsertionEffect(e, r,);
    }
    function At2(e, r,) {
      var n = P();
      return n.useLayoutEffect(e, r,);
    }
    function jt(e, r,) {
      var n = P();
      return n.useCallback(e, r,);
    }
    function It(e, r,) {
      var n = P();
      return n.useMemo(e, r,);
    }
    function Dt(e, r, n,) {
      var a = P();
      return a.useImperativeHandle(e, r, n,);
    }
    function $t(e, r,) {
      {
        var n = P();
        return n.useDebugValue(e, r,);
      }
    }
    function Ft() {
      var e = P();
      return e.useTransition();
    }
    function Lt2(e,) {
      var r = P();
      return r.useDeferredValue(e,);
    }
    function Nt2() {
      var e = P();
      return e.useId();
    }
    function Mt2(e, r, n,) {
      var a = P();
      return a.useSyncExternalStore(e, r, n,);
    }
    var q2 = 0, cr, fr, lr, pr, dr, vr, yr;
    function hr() {
    }
    hr.__reactDisabledLog = true;
    function Vt() {
      {
        if (q2 === 0) {
          cr = console.log,
            fr = console.info,
            lr = console.warn,
            pr = console.error,
            dr = console.group,
            vr = console.groupCollapsed,
            yr = console.groupEnd;
          var e = { configurable: true, enumerable: true, value: hr, writable: true, };
          Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e, },);
        }
        q2++;
      }
    }
    function Ut() {
      {
        if (q2--, q2 === 0) {
          var e = { configurable: true, enumerable: true, writable: true, };
          Object.defineProperties(console, {
            log: j({}, e, { value: cr, },),
            info: j({}, e, { value: fr, },),
            warn: j({}, e, { value: lr, },),
            error: j({}, e, { value: pr, },),
            group: j({}, e, { value: dr, },),
            groupCollapsed: j({}, e, { value: vr, },),
            groupEnd: j({}, e, { value: yr, },),
          },);
        }
        q2 < 0 && h('disabledDepth fell below zero. This is a bug in React. Please file an issue.',);
      }
    }
    var we = M.ReactCurrentDispatcher, Se;
    function te(e, r, n,) {
      {
        if (Se === void 0) {
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/,);
            Se = a && a[1] || '';
          }
        }
        return `
` + Se + e;
      }
    }
    var Oe = false, ne;
    {
      var Wt = typeof WeakMap == 'function' ? WeakMap : Map;
      ne = new Wt();
    }
    function mr(e, r,) {
      if (!e || Oe) {
        return '';
      }
      {
        var n = ne.get(e,);
        if (n !== void 0) {
          return n;
        }
      }
      var a;
      Oe = true;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = we.current, we.current = null, Vt();
      try {
        if (r) {
          var i = function () {
            throw Error();
          };
          if (
            Object.defineProperty(i.prototype, 'props', {
              set: function () {
                throw Error();
              },
            },), typeof Reflect == 'object' && Reflect.construct
          ) {
            try {
              Reflect.construct(i, [],);
            } catch (O) {
              a = O;
            }
            Reflect.construct(e, [], i,);
          } else {
            try {
              i.call();
            } catch (O) {
              a = O;
            }
            e.call(i.prototype,);
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
        if (O && a && typeof O.stack == 'string') {
          for (
            var f = O.stack.split(`
`,),
              v = a.stack.split(`
`,),
              _ = f.length - 1,
              E = v.length - 1;
            _ >= 1 && E >= 0 && f[_] !== v[E];
          ) {
            E--;
          }
          for (; _ >= 1 && E >= 0; _--, E--) {
            if (f[_] !== v[E]) {
              if (_ !== 1 || E !== 1) {
                do if (_--, E--, E < 0 || f[_] !== v[E]) {
                  var R = `
` + f[_].replace(' at new ', ' at ',);
                  return e.displayName && R.includes('<anonymous>',) && (R = R.replace('<anonymous>', e.displayName,)),
                    typeof e == 'function' && ne.set(e, R,),
                    R;
                } while (_ >= 1 && E >= 0);
              }
              break;
            }
          }
        }
      } finally {
        Oe = false, we.current = s, Ut(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : '', S = w ? te(w,) : '';
      return typeof e == 'function' && ne.set(e, S,), S;
    }
    function Yt(e, r, n,) {
      return mr(e, false,);
    }
    function zt(e,) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, n,) {
      if (e == null) {
        return '';
      }
      if (typeof e == 'function') {
        return mr(e, zt(e,),);
      }
      if (typeof e == 'string') {
        return te(e,);
      }
      switch (e) {
        case T:
          return te('Suspense',);
        case de:
          return te('SuspenseList',);
      }
      if (typeof e == 'object') {
        switch (e.$$typeof) {
          case m:
            return Yt(e.render,);
          case L:
            return ae(e.type, r, n,);
          case Q: {
            var a = e, u = a._payload, s = a._init;
            try {
              return ae(s(u,), r, n,);
            } catch {
            }
          }
        }
      }
      return '';
    }
    var _r = {}, gr = M.ReactDebugCurrentFrame;
    function oe(e,) {
      if (e) {
        var r = e._owner, n = ae(e.type, e._source, r ? r.type : null,);
        gr.setExtraStackFrame(n,);
      } else {
        gr.setExtraStackFrame(null,);
      }
    }
    function Bt(e, r, n, a, u,) {
      {
        var s = Function.call.bind(H,);
        for (var i in e) {
          if (s(e, i,)) {
            var f = void 0;
            try {
              if (typeof e[i] != 'function') {
                var v = Error(
                  (a || 'React class') + ': ' + n + ' type `' + i +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' + typeof e[i] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                );
                throw v.name = 'Invariant Violation', v;
              }
              f = e[i](r, i, a, n, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',);
            } catch (_) {
              f = _;
            }
            f && !(f instanceof Error) && (oe(u,),
              h(
                '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                a || 'React class',
                n,
                i,
                typeof f,
              ),
              oe(null,)),
              f instanceof Error && !(f.message in _r) && (_r[f.message] = true, oe(u,), h('Failed %s type: %s', n, f.message,), oe(null,));
          }
        }
      }
    }
    function W2(e,) {
      if (e) {
        var r = e._owner, n = ae(e.type, e._source, r ? r.type : null,);
        Be(n,);
      } else {
        Be(null,);
      }
    }
    var Te;
    Te = false;
    function br() {
      if (A.current) {
        var e = I(A.current.type,);
        if (e) {
          return `

Check the render method of \`` + e + '`.';
        }
      }
      return '';
    }
    function Ht(e,) {
      if (e !== void 0) {
        var r = e.fileName.replace(/^.*[\\\/]/, '',), n = e.lineNumber;
        return `

Check your code at ` + r + ':' + n + '.';
      }
      return '';
    }
    function Kt(e,) {
      return e != null ? Ht(e.__source,) : '';
    }
    var Er = {};
    function qt(e,) {
      var r = br();
      if (!r) {
        var n = typeof e == 'string' ? e : e.displayName || e.name;
        n && (r = `

Check the top-level render call using <` + n + '>.');
      }
      return r;
    }
    function Rr(e, r,) {
      if (!(!e._store || e._store.validated || e.key != null)) {
        e._store.validated = true;
        var n = qt(r,);
        if (!Er[n]) {
          Er[n] = true;
          var a = '';
          e && e._owner && e._owner !== A.current && (a = ' It was passed a child from ' + I(e._owner.type,) + '.'),
            W2(e,),
            h(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              n,
              a,
            ),
            W2(null,);
        }
      }
    }
    function Cr(e, r,) {
      if (typeof e == 'object') {
        if (X(e,)) {
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            U(a,) && Rr(a, r,);
          }
        } else if (U(e,)) {
          e._store && (e._store.validated = true);
        } else if (e) {
          var u = Ye(e,);
          if (typeof u == 'function' && u !== e.entries) {
            for (var s = u.call(e,), i; !(i = s.next()).done;) {
              U(i.value,) && Rr(i.value, r,);
            }
          }
        }
      }
    }
    function wr(e,) {
      {
        var r = e.type;
        if (r == null || typeof r == 'string') {
          return;
        }
        var n;
        if (typeof r == 'function') {
          n = r.propTypes;
        } else if (typeof r == 'object' && (r.$$typeof === m || r.$$typeof === L)) {
          n = r.propTypes;
        } else {
          return;
        }
        if (n) {
          var a = I(r,);
          Bt(n, e.props, 'prop', a, e,);
        } else if (r.PropTypes !== void 0 && !Te) {
          Te = true;
          var u = I(r,);
          h('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', u || 'Unknown',);
        }
        typeof r.getDefaultProps == 'function' && !r.getDefaultProps.isReactClassApproved &&
          h('getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',);
      }
    }
    function Gt(e,) {
      {
        for (var r = Object.keys(e.props,), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== 'children' && a !== 'key') {
            W2(e,),
              h('Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.', a,),
              W2(null,);
            break;
          }
        }
        e.ref !== null && (W2(e,), h('Invalid attribute `ref` supplied to `React.Fragment`.',), W2(null,));
      }
    }
    function Sr(e, r, n,) {
      var a = sr(e,);
      if (!a) {
        var u = '';
        (e === void 0 || typeof e == 'object' && e !== null && Object.keys(e,).length === 0) &&
          (u +=
            ' You likely forgot to export your component from the file it\'s defined in, or you might have mixed up default and named imports.');
        var s = Kt(r,);
        s ? u += s : u += br();
        var i;
        e === null
          ? i = 'null'
          : X(e,)
          ? i = 'array'
          : e !== void 0 && e.$$typeof === o
          ? (i = '<' + (I(e.type,) || 'Unknown') + ' />', u = ' Did you accidentally export a JSX literal instead of a component?')
          : i = typeof e,
          h(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            i,
            u,
          );
      }
      var f = ct.apply(this, arguments,);
      if (f == null) {
        return f;
      }
      if (a) {
        for (var v = 2; v < arguments.length; v++) {
          Cr(arguments[v], e,);
        }
      }
      return e === y ? Gt(f,) : wr(f,), f;
    }
    var Or = false;
    function Qt(e,) {
      var r = Sr.bind(null, e,);
      return r.type = e,
        Or ||
        (Or = true,
          V('React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.',)),
        Object.defineProperty(r, 'type', {
          enumerable: false,
          get: function () {
            return V('Factory.type is deprecated. Access the class directly before passing it to createFactory.',),
              Object.defineProperty(this, 'type', { value: e, },),
              e;
          },
        },),
        r;
    }
    function Jt(e, r, n,) {
      for (var a = lt.apply(this, arguments,), u = 2; u < arguments.length; u++) {
        Cr(arguments[u], a.type,);
      }
      return wr(a,), a;
    }
    function Xt(e, r,) {
      var n = N.transition;
      N.transition = {};
      var a = N.transition;
      N.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e();
      } finally {
        if (N.transition = n, n === null && a._updatedFibers) {
          var u = a._updatedFibers.size;
          u > 10 &&
          V('Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.',),
            a._updatedFibers.clear();
        }
      }
    }
    var Tr = false, ue = null;
    function Zt(e,) {
      if (ue === null) {
        try {
          var r = ('require' + Math.random()).slice(0, 7,), n = pe && pe[r];
          ue = n.call(pe, 'timers',).setImmediate;
        } catch {
          ue = function (u,) {
            Tr === false &&
              (Tr = true,
                typeof MessageChannel > 'u' &&
                h('This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.',));
            var s = new MessageChannel();
            s.port1.onmessage = u, s.port2.postMessage(void 0,);
          };
        }
      }
      return ue(e,);
    }
    var Y = 0, kr = false;
    function en(e,) {
      {
        var r = Y;
        Y++, k.current === null && (k.current = []);
        var n = k.isBatchingLegacy, a;
        try {
          if (k.isBatchingLegacy = true, a = e(), !n && k.didScheduleLegacyUpdate) {
            var u = k.current;
            u !== null && (k.didScheduleLegacyUpdate = false, xe(u,));
          }
        } catch (w) {
          throw ie(r,), w;
        } finally {
          k.isBatchingLegacy = n;
        }
        if (a !== null && typeof a == 'object' && typeof a.then == 'function') {
          var s = a,
            i = false,
            f = {
              then: function (w, S,) {
                i = true,
                  s.then(function (O,) {
                    ie(r,), Y === 0 ? ke(O, w, S,) : w(O,);
                  }, function (O,) {
                    ie(r,), S(O,);
                  },);
              },
            };
          return !kr && typeof Promise < 'u' && Promise.resolve().then(function () {
          },).then(function () {
            i ||
              (kr = true,
                h('You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);',));
          },),
            f;
        } else {
          var v = a;
          if (ie(r,), Y === 0) {
            var _ = k.current;
            _ !== null && (xe(_,), k.current = null);
            var E = {
              then: function (w, S,) {
                k.current === null ? (k.current = [], ke(v, w, S,)) : w(v,);
              },
            };
            return E;
          } else {
            var R = {
              then: function (w, S,) {
                w(v,);
              },
            };
            return R;
          }
        }
      }
    }
    function ie(e,) {
      e !== Y - 1 &&
      h('You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ',),
        Y = e;
    }
    function ke(e, r, n,) {
      {
        var a = k.current;
        if (a !== null) {
          try {
            xe(a,),
              Zt(function () {
                a.length === 0 ? (k.current = null, r(e,)) : ke(e, r, n,);
              },);
          } catch (u) {
            n(u,);
          }
        } else {
          r(e,);
        }
      }
    }
    var Pe = false;
    function xe(e,) {
      if (!Pe) {
        Pe = true;
        var r = 0;
        try {
          for (; r < e.length; r++) {
            var n = e[r];
            do n = n(true,); while (n !== null);
          }
          e.length = 0;
        } catch (a) {
          throw e = e.slice(r + 1,), a;
        } finally {
          Pe = false;
        }
      }
    }
    var rn = Sr, tn = Jt, nn = Qt, an = { map: re, forEach: ht2, count: yt, toArray: mt, only: _t, };
    d.Children = an,
      d.Component = $,
      d.Fragment = y,
      d.Profiler = b,
      d.PureComponent = _e,
      d.StrictMode = l,
      d.Suspense = T,
      d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M,
      d.cloneElement = tn,
      d.createContext = gt,
      d.createElement = rn,
      d.createFactory = nn,
      d.createRef = rt,
      d.forwardRef = Ct2,
      d.isValidElement = U,
      d.lazy = Rt,
      d.memo = wt,
      d.startTransition = Xt,
      d.unstable_act = en,
      d.useCallback = jt,
      d.useContext = St2,
      d.useDebugValue = $t,
      d.useDeferredValue = Lt2,
      d.useEffect = Pt2,
      d.useId = Nt2,
      d.useImperativeHandle = Dt,
      d.useInsertionEffect = xt,
      d.useLayoutEffect = At2,
      d.useMemo = It,
      d.useReducer = Tt2,
      d.useRef = kt,
      d.useState = Ot2,
      d.useSyncExternalStore = Mt2,
      d.useTransition = Ft,
      d.version = t,
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == 'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error(),);
  })();
},);
var Ue = De((ya, Ve,) => {
  'use strict';
  false ? Ve.exports = Yr() : Ve.exports = zr();
},);
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
},);
var Hr = jr(Ue(),);
F(D, jr(Ue(),),);
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
var require2 = (n,) => {
  const e = (m,) => typeof m.default < 'u' ? m.default : m, c = (m,) => Object.assign({}, m,);
  switch (n) {
    case 'react':
      return e(react_exports,);
    default:
      throw new Error('module "' + n + '" not found',);
  }
};
var Et = Object.create;
var at = Object.defineProperty;
var Ot = Object.getOwnPropertyDescriptor;
var Tt = Object.getOwnPropertyNames;
var At = Object.getPrototypeOf;
var St = Object.prototype.hasOwnProperty;
var vt =
  ((C,) =>
    typeof require2 < 'u'
      ? require2
      : typeof Proxy < 'u'
      ? new Proxy(C, { get: (P, z,) => (typeof require2 < 'u' ? require2 : P)[z], },)
      : C)(function (C,) {
      if (typeof require2 < 'u') {
        return require2.apply(this, arguments,);
      }
      throw Error('Dynamic require of "' + C + '" is not supported',);
    },);
var Nt = (C, P,) => () => (P || C((P = { exports: {}, }).exports, P,), P.exports);
var Pt = (C, P,) => {
  for (var z in P) {
    at(C, z, { get: P[z], enumerable: true, },);
  }
};
var ot = (C, P, z, R,) => {
  if (P && typeof P == 'object' || typeof P == 'function') {
    for (let B of Tt(P,)) {
      !St.call(C, B,) && B !== z && at(C, B, { get: () => P[B], enumerable: !(R = Ot(P, B,)) || R.enumerable, },);
    }
  }
  return C;
};
var q = (C, P, z,) => (ot(C, P, 'default',), z && ot(z, P, 'default',));
var dt = (
  C,
  P,
  z,
) => (z = C != null ? Et(At(C,),) : {}, ot(P || !C || !C.__esModule ? at(z, 'default', { value: C, enumerable: true, },) : z, C,));
var st = Nt((X, it,) => {
  (function (C, P,) {
    typeof X == 'object' && typeof it == 'object'
      ? it.exports = P(vt('react',),)
      : typeof define == 'function' && define.amd
      ? define('Typewriter', ['react',], P,)
      : typeof X == 'object'
      ? X.Typewriter = P(vt('react',),)
      : C.Typewriter = P(C.react,);
  })(typeof self < 'u' ? self : X, (C,) =>
    (() => {
      var P = {
          7403: (e, o, t,) => {
            'use strict';
            t.d(o, { default: () => V, },);
            var r = t(4087,), i = t.n(r,);
            let a = function (x,) {
                return new RegExp(/<[a-z][\s\S]*>/i,).test(x,);
              },
              n = function (x, h,) {
                return Math.floor(Math.random() * (h - x + 1),) + x;
              };
            var u = 'TYPE_CHARACTER',
              c = 'REMOVE_CHARACTER',
              p = 'REMOVE_ALL',
              f = 'REMOVE_LAST_VISIBLE_NODE',
              l = 'PAUSE_FOR',
              v = 'CALL_FUNCTION',
              y = 'ADD_HTML_TAG_ELEMENT',
              d = 'CHANGE_DELETE_SPEED',
              g = 'CHANGE_DELAY',
              _ = 'CHANGE_CURSOR',
              E = 'PASTE_STRING',
              A = 'HTML_TAG';
            function O(x,) {
              return O = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (h,) {
                  return typeof h;
                }
                : function (h,) {
                  return h && typeof Symbol == 'function' && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
                },
                O(x,);
            }
            function m(x, h,) {
              var T = Object.keys(x,);
              if (Object.getOwnPropertySymbols) {
                var j = Object.getOwnPropertySymbols(x,);
                h && (j = j.filter(function (H,) {
                  return Object.getOwnPropertyDescriptor(x, H,).enumerable;
                },)), T.push.apply(T, j,);
              }
              return T;
            }
            function w(x,) {
              for (var h = 1; h < arguments.length; h++) {
                var T = arguments[h] != null ? arguments[h] : {};
                h % 2
                  ? m(Object(T,), true,).forEach(function (j,) {
                    S(x, j, T[j],);
                  },)
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(T,),)
                  : m(Object(T,),).forEach(function (j,) {
                    Object.defineProperty(x, j, Object.getOwnPropertyDescriptor(T, j,),);
                  },);
              }
              return x;
            }
            function N(x,) {
              return function (h,) {
                if (Array.isArray(h,)) {
                  return L(h,);
                }
              }(x,) || function (h,) {
                if (typeof Symbol < 'u' && h[Symbol.iterator] != null || h['@@iterator'] != null) {
                  return Array.from(h,);
                }
              }(x,) || function (h, T,) {
                if (h) {
                  if (typeof h == 'string') {
                    return L(h, T,);
                  }
                  var j = Object.prototype.toString.call(h,).slice(8, -1,);
                  return j === 'Object' && h.constructor && (j = h.constructor.name),
                    j === 'Map' || j === 'Set'
                      ? Array.from(h,)
                      : j === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j,)
                      ? L(h, T,)
                      : void 0;
                }
              }(x,) || function () {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,);
              }();
            }
            function L(x, h,) {
              (h == null || h > x.length) && (h = x.length);
              for (var T = 0, j = new Array(h,); T < h; T++) {
                j[T] = x[T];
              }
              return j;
            }
            function M(x, h,) {
              for (var T = 0; T < h.length; T++) {
                var j = h[T];
                j.enumerable = j.enumerable || false,
                  j.configurable = true,
                  'value' in j && (j.writable = true),
                  Object.defineProperty(x, U(j.key,), j,);
              }
            }
            function S(x, h, T,) {
              return (h = U(h,)) in x
                ? Object.defineProperty(x, h, { value: T, enumerable: true, configurable: true, writable: true, },)
                : x[h] = T,
                x;
            }
            function U(x,) {
              var h = function (T, j,) {
                if (O(T,) !== 'object' || T === null) {
                  return T;
                }
                var H = T[Symbol.toPrimitive];
                if (H !== void 0) {
                  var s = H.call(T, 'string',);
                  if (O(s,) !== 'object') {
                    return s;
                  }
                  throw new TypeError('@@toPrimitive must return a primitive value.',);
                }
                return String(T,);
              }(x,);
              return O(h,) === 'symbol' ? h : String(h,);
            }
            let V = function () {
              function x(j, H,) {
                var s = this;
                if (
                  function (b, k,) {
                    if (!(b instanceof k)) {
                      throw new TypeError('Cannot call a class as a function',);
                    }
                  }(this, x,),
                    S(this, 'state', {
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
                      elements: { container: null, wrapper: document.createElement('span',), cursor: document.createElement('span',), },
                    },),
                    S(this, 'options', {
                      strings: null,
                      cursor: '|',
                      delay: 'natural',
                      pauseFor: 1500,
                      deleteSpeed: 'natural',
                      loop: false,
                      autoStart: false,
                      devMode: false,
                      skipAddStyles: false,
                      wrapperClassName: 'Typewriter__wrapper',
                      cursorClassName: 'Typewriter__cursor',
                      stringSplitter: null,
                      onCreateTextNode: null,
                      onRemoveNode: null,
                    },),
                    S(this, 'setupWrapperElement', function () {
                      s.state.elements.container && (s.state.elements.wrapper.className = s.options.wrapperClassName,
                        s.state.elements.cursor.className = s.options.cursorClassName,
                        s.state.elements.cursor.innerHTML = s.options.cursor,
                        s.state.elements.container.innerHTML = '',
                        s.state.elements.container.appendChild(s.state.elements.wrapper,),
                        s.state.elements.container.appendChild(s.state.elements.cursor,));
                    },),
                    S(this, 'start', function () {
                      return s.state.eventLoopPaused = false, s.runEventLoop(), s;
                    },),
                    S(this, 'pause', function () {
                      return s.state.eventLoopPaused = true, s;
                    },),
                    S(this, 'stop', function () {
                      return s.state.eventLoop && ((0, r.cancel)(s.state.eventLoop,), s.state.eventLoop = null), s;
                    },),
                    S(this, 'pauseFor', function (b,) {
                      return s.addEventToQueue(l, { ms: b, },), s;
                    },),
                    S(this, 'typeOutAllStrings', function () {
                      return typeof s.options.strings == 'string'
                        ? (s.typeString(s.options.strings,).pauseFor(s.options.pauseFor,), s)
                        : (s.options.strings.forEach(function (b,) {
                          s.typeString(b,).pauseFor(s.options.pauseFor,).deleteAll(s.options.deleteSpeed,);
                        },),
                          s);
                    },),
                    S(this, 'typeString', function (b,) {
                      var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      if (a(b,)) {
                        return s.typeOutHTMLString(b, k,);
                      }
                      if (b) {
                        var F2 = (s.options || {}).stringSplitter, Q = typeof F2 == 'function' ? F2(b,) : b.split('',);
                        s.typeCharacters(Q, k,);
                      }
                      return s;
                    },),
                    S(this, 'pasteString', function (b,) {
                      var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      return a(b,) ? s.typeOutHTMLString(b, k, true,) : (b && s.addEventToQueue(E, { character: b, node: k, },), s);
                    },),
                    S(this, 'typeOutHTMLString', function (b,) {
                      var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                        F2 = arguments.length > 2 ? arguments[2] : void 0,
                        Q = function (G,) {
                          var Y = document.createElement('div',);
                          return Y.innerHTML = G, Y.childNodes;
                        }(b,);
                      if (Q.length > 0) {
                        for (var D2 = 0; D2 < Q.length; D2++) {
                          var I = Q[D2], $ = I.innerHTML;
                          I && I.nodeType !== 3
                            ? (I.innerHTML = '',
                              s.addEventToQueue(y, { node: I, parentNode: k, },),
                              F2 ? s.pasteString($, I,) : s.typeString($, I,))
                            : I.textContent && (F2 ? s.pasteString(I.textContent, k,) : s.typeString(I.textContent, k,));
                        }
                      }
                      return s;
                    },),
                    S(this, 'deleteAll', function () {
                      var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'natural';
                      return s.addEventToQueue(p, { speed: b, },), s;
                    },),
                    S(this, 'changeDeleteSpeed', function (b,) {
                      if (!b) {
                        throw new Error('Must provide new delete speed',);
                      }
                      return s.addEventToQueue(d, { speed: b, },), s;
                    },),
                    S(this, 'changeDelay', function (b,) {
                      if (!b) {
                        throw new Error('Must provide new delay',);
                      }
                      return s.addEventToQueue(g, { delay: b, },), s;
                    },),
                    S(this, 'changeCursor', function (b,) {
                      if (!b) {
                        throw new Error('Must provide new cursor',);
                      }
                      return s.addEventToQueue(_, { cursor: b, },), s;
                    },),
                    S(this, 'deleteChars', function (b,) {
                      if (!b) {
                        throw new Error('Must provide amount of characters to delete',);
                      }
                      for (var k = 0; k < b; k++) {
                        s.addEventToQueue(c,);
                      }
                      return s;
                    },),
                    S(this, 'callFunction', function (b, k,) {
                      if (!b || typeof b != 'function') {
                        throw new Error('Callback must be a function',);
                      }
                      return s.addEventToQueue(v, { cb: b, thisArg: k, },), s;
                    },),
                    S(this, 'typeCharacters', function (b,) {
                      var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      if (!b || !Array.isArray(b,)) {
                        throw new Error('Characters must be an array',);
                      }
                      return b.forEach(function (F2,) {
                        s.addEventToQueue(u, { character: F2, node: k, },);
                      },),
                        s;
                    },),
                    S(this, 'removeCharacters', function (b,) {
                      if (!b || !Array.isArray(b,)) {
                        throw new Error('Characters must be an array',);
                      }
                      return b.forEach(function () {
                        s.addEventToQueue(c,);
                      },),
                        s;
                    },),
                    S(this, 'addEventToQueue', function (b, k,) {
                      var F2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                      return s.addEventToStateProperty(b, k, F2, 'eventQueue',);
                    },),
                    S(this, 'addReverseCalledEvent', function (b, k,) {
                      var F2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                      return s.options.loop ? s.addEventToStateProperty(b, k, F2, 'reverseCalledEvents',) : s;
                    },),
                    S(this, 'addEventToStateProperty', function (b, k,) {
                      var F2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
                        Q = arguments.length > 3 ? arguments[3] : void 0,
                        D2 = { eventName: b, eventArgs: k || {}, };
                      return s.state[Q] = F2 ? [D2,].concat(N(s.state[Q],),) : [].concat(N(s.state[Q],), [D2,],), s;
                    },),
                    S(this, 'runEventLoop', function () {
                      s.state.lastFrameTime || (s.state.lastFrameTime = Date.now());
                      var b = Date.now(), k = b - s.state.lastFrameTime;
                      if (!s.state.eventQueue.length) {
                        if (!s.options.loop) {
                          return;
                        }
                        s.state.eventQueue = N(s.state.calledEvents,),
                          s.state.calledEvents = [],
                          s.options = w({}, s.state.initialOptions,);
                      }
                      if (s.state.eventLoop = i()(s.runEventLoop,), !s.state.eventLoopPaused) {
                        if (s.state.pauseUntil) {
                          if (b < s.state.pauseUntil) {
                            return;
                          }
                          s.state.pauseUntil = null;
                        }
                        var F2, Q = N(s.state.eventQueue,), D2 = Q.shift();
                        if (
                          !(k <= (F2 = D2.eventName === f || D2.eventName === c
                            ? s.options.deleteSpeed === 'natural' ? n(40, 80,) : s.options.deleteSpeed
                            : s.options.delay === 'natural'
                            ? n(120, 160,)
                            : s.options.delay))
                        ) {
                          var I = D2.eventName, $ = D2.eventArgs;
                          switch (s.logInDevMode({ currentEvent: D2, state: s.state, delay: F2, },), I) {
                            case E:
                            case u:
                              var G = $.character, Y = $.node, ct = document.createTextNode(G,), J = ct;
                              s.options.onCreateTextNode && typeof s.options.onCreateTextNode == 'function' &&
                              (J = s.options.onCreateTextNode(G, ct,)),
                                J && (Y ? Y.appendChild(J,) : s.state.elements.wrapper.appendChild(J,)),
                                s.state.visibleNodes = [].concat(N(s.state.visibleNodes,), [{
                                  type: 'TEXT_NODE',
                                  character: G,
                                  node: J,
                                },],);
                              break;
                            case c:
                              Q.unshift({ eventName: f, eventArgs: { removingCharacterNode: true, }, },);
                              break;
                            case l:
                              var yt = D2.eventArgs.ms;
                              s.state.pauseUntil = Date.now() + parseInt(yt,);
                              break;
                            case v:
                              var pt = D2.eventArgs, mt = pt.cb, bt = pt.thisArg;
                              mt.call(bt, { elements: s.state.elements, },);
                              break;
                            case y:
                              var lt = D2.eventArgs, tt = lt.node, et = lt.parentNode;
                              et ? et.appendChild(tt,) : s.state.elements.wrapper.appendChild(tt,),
                                s.state.visibleNodes = [].concat(N(s.state.visibleNodes,), [{
                                  type: A,
                                  node: tt,
                                  parentNode: et || s.state.elements.wrapper,
                                },],);
                              break;
                            case p:
                              var gt = s.state.visibleNodes, rt = $.speed, K = [];
                              rt && K.push({ eventName: d, eventArgs: { speed: rt, temp: true, }, },);
                              for (var ft = 0, _t = gt.length; ft < _t; ft++) {
                                K.push({ eventName: f, eventArgs: { removingCharacterNode: false, }, },);
                              }
                              rt && K.push({ eventName: d, eventArgs: { speed: s.options.deleteSpeed, temp: true, }, },),
                                Q.unshift.apply(Q, K,);
                              break;
                            case f:
                              var wt = D2.eventArgs.removingCharacterNode;
                              if (s.state.visibleNodes.length) {
                                var nt = s.state.visibleNodes.pop(), xt = nt.type, Z = nt.node, jt = nt.character;
                                s.options.onRemoveNode && typeof s.options.onRemoveNode == 'function' &&
                                s.options.onRemoveNode({ node: Z, character: jt, },),
                                  Z && Z.parentNode.removeChild(Z,),
                                  xt === A && wt && Q.unshift({ eventName: f, eventArgs: {}, },);
                              }
                              break;
                            case d:
                              s.options.deleteSpeed = D2.eventArgs.speed;
                              break;
                            case g:
                              s.options.delay = D2.eventArgs.delay;
                              break;
                            case _:
                              s.options.cursor = D2.eventArgs.cursor, s.state.elements.cursor.innerHTML = D2.eventArgs.cursor;
                          }
                          s.options.loop &&
                          (D2.eventName === f || D2.eventArgs && D2.eventArgs.temp ||
                            (s.state.calledEvents = [].concat(N(s.state.calledEvents,), [D2,],))),
                            s.state.eventQueue = Q,
                            s.state.lastFrameTime = b;
                        }
                      }
                    },),
                    j
                ) {
                  if (typeof j == 'string') {
                    var ut = document.querySelector(j,);
                    if (!ut) {
                      throw new Error('Could not find container element',);
                    }
                    this.state.elements.container = ut;
                  } else {
                    this.state.elements.container = j;
                  }
                }
                H && (this.options = w(w({}, this.options,), H,)), this.state.initialOptions = w({}, this.options,), this.init();
              }
              var h, T;
              return h = x,
                (T = [{
                  key: 'init',
                  value: function () {
                    var j, H;
                    this.setupWrapperElement(),
                      this.addEventToQueue(_, { cursor: this.options.cursor, }, true,),
                      this.addEventToQueue(p, null, true,),
                      !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles ||
                      (j =
                        '.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}',
                        (H = document.createElement('style',)).appendChild(document.createTextNode(j,),),
                        document.head.appendChild(H,),
                        window.___TYPEWRITER_JS_STYLES_ADDED___ = true),
                      this.options.autoStart === true && this.options.strings && this.typeOutAllStrings().start();
                  },
                }, {
                  key: 'logInDevMode',
                  value: function (j,) {
                    this.options.devMode && console.log(j,);
                  },
                },]) && M(h.prototype, T,),
                Object.defineProperty(h, 'prototype', { writable: false, },),
                x;
            }();
          },
          8552: (e, o, t,) => {
            var r = t(852,)(t(5639,), 'DataView',);
            e.exports = r;
          },
          1989: (e, o, t,) => {
            var r = t(1789,), i = t(401,), a = t(7667,), n = t(1327,), u = t(1866,);
            function c(p,) {
              var f = -1, l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l;) {
                var v = p[f];
                this.set(v[0], v[1],);
              }
            }
            c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = n, c.prototype.set = u, e.exports = c;
          },
          8407: (e, o, t,) => {
            var r = t(7040,), i = t(4125,), a = t(2117,), n = t(7518,), u = t(4705,);
            function c(p,) {
              var f = -1, l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l;) {
                var v = p[f];
                this.set(v[0], v[1],);
              }
            }
            c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = n, c.prototype.set = u, e.exports = c;
          },
          7071: (e, o, t,) => {
            var r = t(852,)(t(5639,), 'Map',);
            e.exports = r;
          },
          3369: (e, o, t,) => {
            var r = t(4785,), i = t(1285,), a = t(6e3,), n = t(9916,), u = t(5265,);
            function c(p,) {
              var f = -1, l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l;) {
                var v = p[f];
                this.set(v[0], v[1],);
              }
            }
            c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = n, c.prototype.set = u, e.exports = c;
          },
          3818: (e, o, t,) => {
            var r = t(852,)(t(5639,), 'Promise',);
            e.exports = r;
          },
          8525: (e, o, t,) => {
            var r = t(852,)(t(5639,), 'Set',);
            e.exports = r;
          },
          8668: (e, o, t,) => {
            var r = t(3369,), i = t(619,), a = t(2385,);
            function n(u,) {
              var c = -1, p = u == null ? 0 : u.length;
              for (this.__data__ = new r(); ++c < p;) {
                this.add(u[c],);
              }
            }
            n.prototype.add = n.prototype.push = i, n.prototype.has = a, e.exports = n;
          },
          6384: (e, o, t,) => {
            var r = t(8407,), i = t(7465,), a = t(3779,), n = t(7599,), u = t(4758,), c = t(4309,);
            function p(f,) {
              var l = this.__data__ = new r(f,);
              this.size = l.size;
            }
            p.prototype.clear = i, p.prototype.delete = a, p.prototype.get = n, p.prototype.has = u, p.prototype.set = c, e.exports = p;
          },
          2705: (e, o, t,) => {
            var r = t(5639,).Symbol;
            e.exports = r;
          },
          1149: (e, o, t,) => {
            var r = t(5639,).Uint8Array;
            e.exports = r;
          },
          577: (e, o, t,) => {
            var r = t(852,)(t(5639,), 'WeakMap',);
            e.exports = r;
          },
          4963: (e,) => {
            e.exports = function (o, t,) {
              for (var r = -1, i = o == null ? 0 : o.length, a = 0, n = []; ++r < i;) {
                var u = o[r];
                t(u, r, o,) && (n[a++] = u);
              }
              return n;
            };
          },
          4636: (e, o, t,) => {
            var r = t(2545,), i = t(5694,), a = t(1469,), n = t(4144,), u = t(5776,), c = t(6719,), p = Object.prototype.hasOwnProperty;
            e.exports = function (f, l,) {
              var v = a(f,),
                y = !v && i(f,),
                d = !v && !y && n(f,),
                g = !v && !y && !d && c(f,),
                _ = v || y || d || g,
                E = _ ? r(f.length, String,) : [],
                A = E.length;
              for (var O in f) {
                !l && !p.call(f, O,) ||
                  _ &&
                    (O == 'length' || d && (O == 'offset' || O == 'parent') ||
                      g && (O == 'buffer' || O == 'byteLength' || O == 'byteOffset') || u(O, A,)) ||
                  E.push(O,);
              }
              return E;
            };
          },
          2488: (e,) => {
            e.exports = function (o, t,) {
              for (var r = -1, i = t.length, a = o.length; ++r < i;) {
                o[a + r] = t[r];
              }
              return o;
            };
          },
          2908: (e,) => {
            e.exports = function (o, t,) {
              for (var r = -1, i = o == null ? 0 : o.length; ++r < i;) {
                if (t(o[r], r, o,)) {
                  return true;
                }
              }
              return false;
            };
          },
          8470: (e, o, t,) => {
            var r = t(7813,);
            e.exports = function (i, a,) {
              for (var n = i.length; n--;) {
                if (r(i[n][0], a,)) {
                  return n;
                }
              }
              return -1;
            };
          },
          8866: (e, o, t,) => {
            var r = t(2488,), i = t(1469,);
            e.exports = function (a, n, u,) {
              var c = n(a,);
              return i(a,) ? c : r(c, u(a,),);
            };
          },
          4239: (e, o, t,) => {
            var r = t(2705,), i = t(9607,), a = t(2333,), n = r ? r.toStringTag : void 0;
            e.exports = function (u,) {
              return u == null ? u === void 0 ? '[object Undefined]' : '[object Null]' : n && n in Object(u,) ? i(u,) : a(u,);
            };
          },
          9454: (e, o, t,) => {
            var r = t(4239,), i = t(7005,);
            e.exports = function (a,) {
              return i(a,) && r(a,) == '[object Arguments]';
            };
          },
          939: (e, o, t,) => {
            var r = t(2492,), i = t(7005,);
            e.exports = function a(n, u, c, p, f,) {
              return n === u || (n == null || u == null || !i(n,) && !i(u,) ? n != n && u != u : r(n, u, c, p, a, f,));
            };
          },
          2492: (e, o, t,) => {
            var r = t(6384,),
              i = t(7114,),
              a = t(8351,),
              n = t(6096,),
              u = t(4160,),
              c = t(1469,),
              p = t(4144,),
              f = t(6719,),
              l = '[object Arguments]',
              v = '[object Array]',
              y = '[object Object]',
              d = Object.prototype.hasOwnProperty;
            e.exports = function (g, _, E, A, O, m,) {
              var w = c(g,),
                N = c(_,),
                L = w ? v : u(g,),
                M = N ? v : u(_,),
                S = (L = L == l ? y : L) == y,
                U = (M = M == l ? y : M) == y,
                V = L == M;
              if (V && p(g,)) {
                if (!p(_,)) {
                  return false;
                }
                w = true, S = false;
              }
              if (V && !S) {
                return m || (m = new r()), w || f(g,) ? i(g, _, E, A, O, m,) : a(g, _, L, E, A, O, m,);
              }
              if (!(1 & E)) {
                var x = S && d.call(g, '__wrapped__',), h = U && d.call(_, '__wrapped__',);
                if (x || h) {
                  var T = x ? g.value() : g, j = h ? _.value() : _;
                  return m || (m = new r()), O(T, j, E, A, m,);
                }
              }
              return !!V && (m || (m = new r()), n(g, _, E, A, O, m,));
            };
          },
          8458: (e, o, t,) => {
            var r = t(3560,),
              i = t(5346,),
              a = t(3218,),
              n = t(346,),
              u = /^\[object .+?Constructor\]$/,
              c = Function.prototype,
              p = Object.prototype,
              f = c.toString,
              l = p.hasOwnProperty,
              v = RegExp(
                '^' +
                  f.call(l,).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&',).replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?',
                  ) + '$',
              );
            e.exports = function (y,) {
              return !(!a(y,) || i(y,)) && (r(y,) ? v : u).test(n(y,),);
            };
          },
          8749: (e, o, t,) => {
            var r = t(4239,), i = t(1780,), a = t(7005,), n = {};
            n['[object Float32Array]'] =
              n['[object Float64Array]'] =
              n['[object Int8Array]'] =
              n['[object Int16Array]'] =
              n['[object Int32Array]'] =
              n['[object Uint8Array]'] =
              n['[object Uint8ClampedArray]'] =
              n['[object Uint16Array]'] =
              n['[object Uint32Array]'] =
                true,
              n['[object Arguments]'] =
                n['[object Array]'] =
                n['[object ArrayBuffer]'] =
                n['[object Boolean]'] =
                n['[object DataView]'] =
                n['[object Date]'] =
                n['[object Error]'] =
                n['[object Function]'] =
                n['[object Map]'] =
                n['[object Number]'] =
                n['[object Object]'] =
                n['[object RegExp]'] =
                n['[object Set]'] =
                n['[object String]'] =
                n['[object WeakMap]'] =
                  false,
              e.exports = function (u,) {
                return a(u,) && i(u.length,) && !!n[r(u,)];
              };
          },
          280: (e, o, t,) => {
            var r = t(5726,), i = t(6916,), a = Object.prototype.hasOwnProperty;
            e.exports = function (n,) {
              if (!r(n,)) {
                return i(n,);
              }
              var u = [];
              for (var c in Object(n,)) {
                a.call(n, c,) && c != 'constructor' && u.push(c,);
              }
              return u;
            };
          },
          2545: (e,) => {
            e.exports = function (o, t,) {
              for (var r = -1, i = Array(o,); ++r < o;) {
                i[r] = t(r,);
              }
              return i;
            };
          },
          1717: (e,) => {
            e.exports = function (o,) {
              return function (t,) {
                return o(t,);
              };
            };
          },
          4757: (e,) => {
            e.exports = function (o, t,) {
              return o.has(t,);
            };
          },
          4429: (e, o, t,) => {
            var r = t(5639,)['__core-js_shared__'];
            e.exports = r;
          },
          7114: (e, o, t,) => {
            var r = t(8668,), i = t(2908,), a = t(4757,);
            e.exports = function (n, u, c, p, f, l,) {
              var v = 1 & c, y = n.length, d = u.length;
              if (y != d && !(v && d > y)) {
                return false;
              }
              var g = l.get(n,), _ = l.get(u,);
              if (g && _) {
                return g == u && _ == n;
              }
              var E = -1, A = true, O = 2 & c ? new r() : void 0;
              for (l.set(n, u,), l.set(u, n,); ++E < y;) {
                var m = n[E], w = u[E];
                if (p) {
                  var N = v ? p(w, m, E, u, n, l,) : p(m, w, E, n, u, l,);
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
                    !i(u, function (L, M,) {
                      if (!a(O, M,) && (m === L || f(m, L, c, p, l,))) {
                        return O.push(M,);
                      }
                    },)
                  ) {
                    A = false;
                    break;
                  }
                } else if (m !== w && !f(m, w, c, p, l,)) {
                  A = false;
                  break;
                }
              }
              return l.delete(n,), l.delete(u,), A;
            };
          },
          8351: (e, o, t,) => {
            var r = t(2705,),
              i = t(1149,),
              a = t(7813,),
              n = t(7114,),
              u = t(8776,),
              c = t(1814,),
              p = r ? r.prototype : void 0,
              f = p ? p.valueOf : void 0;
            e.exports = function (l, v, y, d, g, _, E,) {
              switch (y) {
                case '[object DataView]':
                  if (l.byteLength != v.byteLength || l.byteOffset != v.byteOffset) {
                    return false;
                  }
                  l = l.buffer, v = v.buffer;
                case '[object ArrayBuffer]':
                  return !(l.byteLength != v.byteLength || !_(new i(l,), new i(v,),));
                case '[object Boolean]':
                case '[object Date]':
                case '[object Number]':
                  return a(+l, +v,);
                case '[object Error]':
                  return l.name == v.name && l.message == v.message;
                case '[object RegExp]':
                case '[object String]':
                  return l == v + '';
                case '[object Map]':
                  var A = u;
                case '[object Set]':
                  var O = 1 & d;
                  if (A || (A = c), l.size != v.size && !O) {
                    return false;
                  }
                  var m = E.get(l,);
                  if (m) {
                    return m == v;
                  }
                  d |= 2, E.set(l, v,);
                  var w = n(A(l,), A(v,), d, g, _, E,);
                  return E.delete(l,), w;
                case '[object Symbol]':
                  if (f) {
                    return f.call(l,) == f.call(v,);
                  }
              }
              return false;
            };
          },
          6096: (e, o, t,) => {
            var r = t(8234,), i = Object.prototype.hasOwnProperty;
            e.exports = function (a, n, u, c, p, f,) {
              var l = 1 & u, v = r(a,), y = v.length;
              if (y != r(n,).length && !l) {
                return false;
              }
              for (var d = y; d--;) {
                var g = v[d];
                if (!(l ? g in n : i.call(n, g,))) {
                  return false;
                }
              }
              var _ = f.get(a,), E = f.get(n,);
              if (_ && E) {
                return _ == n && E == a;
              }
              var A = true;
              f.set(a, n,), f.set(n, a,);
              for (var O = l; ++d < y;) {
                var m = a[g = v[d]], w = n[g];
                if (c) {
                  var N = l ? c(w, m, g, n, a, f,) : c(m, w, g, a, n, f,);
                }
                if (!(N === void 0 ? m === w || p(m, w, u, c, f,) : N)) {
                  A = false;
                  break;
                }
                O || (O = g == 'constructor');
              }
              if (A && !O) {
                var L = a.constructor, M = n.constructor;
                L == M || !('constructor' in a) || !('constructor' in n) ||
                  typeof L == 'function' && L instanceof L && typeof M == 'function' && M instanceof M || (A = false);
              }
              return f.delete(a,), f.delete(n,), A;
            };
          },
          1957: (e, o, t,) => {
            var r = typeof t.g == 'object' && t.g && t.g.Object === Object && t.g;
            e.exports = r;
          },
          8234: (e, o, t,) => {
            var r = t(8866,), i = t(9551,), a = t(3674,);
            e.exports = function (n,) {
              return r(n, a, i,);
            };
          },
          5050: (e, o, t,) => {
            var r = t(7019,);
            e.exports = function (i, a,) {
              var n = i.__data__;
              return r(a,) ? n[typeof a == 'string' ? 'string' : 'hash'] : n.map;
            };
          },
          852: (e, o, t,) => {
            var r = t(8458,), i = t(7801,);
            e.exports = function (a, n,) {
              var u = i(a, n,);
              return r(u,) ? u : void 0;
            };
          },
          9607: (e, o, t,) => {
            var r = t(2705,), i = Object.prototype, a = i.hasOwnProperty, n = i.toString, u = r ? r.toStringTag : void 0;
            e.exports = function (c,) {
              var p = a.call(c, u,), f = c[u];
              try {
                c[u] = void 0;
                var l = true;
              } catch {
              }
              var v = n.call(c,);
              return l && (p ? c[u] = f : delete c[u]), v;
            };
          },
          9551: (e, o, t,) => {
            var r = t(4963,),
              i = t(479,),
              a = Object.prototype.propertyIsEnumerable,
              n = Object.getOwnPropertySymbols,
              u = n
                ? function (c,) {
                  return c == null ? [] : (c = Object(c,),
                    r(n(c,), function (p,) {
                      return a.call(c, p,);
                    },));
                }
                : i;
            e.exports = u;
          },
          4160: (e, o, t,) => {
            var r = t(8552,),
              i = t(7071,),
              a = t(3818,),
              n = t(8525,),
              u = t(577,),
              c = t(4239,),
              p = t(346,),
              f = '[object Map]',
              l = '[object Promise]',
              v = '[object Set]',
              y = '[object WeakMap]',
              d = '[object DataView]',
              g = p(r,),
              _ = p(i,),
              E = p(a,),
              A = p(n,),
              O = p(u,),
              m = c;
            (r && m(new r(new ArrayBuffer(1,),),) != d || i && m(new i(),) != f || a && m(a.resolve(),) != l || n && m(new n(),) != v ||
              u && m(new u(),) != y) && (m = function (w,) {
                var N = c(w,), L = N == '[object Object]' ? w.constructor : void 0, M = L ? p(L,) : '';
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
              }), e.exports = m;
          },
          7801: (e,) => {
            e.exports = function (o, t,) {
              return o?.[t];
            };
          },
          1789: (e, o, t,) => {
            var r = t(4536,);
            e.exports = function () {
              this.__data__ = r ? r(null,) : {}, this.size = 0;
            };
          },
          401: (e,) => {
            e.exports = function (o,) {
              var t = this.has(o,) && delete this.__data__[o];
              return this.size -= t ? 1 : 0, t;
            };
          },
          7667: (e, o, t,) => {
            var r = t(4536,), i = Object.prototype.hasOwnProperty;
            e.exports = function (a,) {
              var n = this.__data__;
              if (r) {
                var u = n[a];
                return u === '__lodash_hash_undefined__' ? void 0 : u;
              }
              return i.call(n, a,) ? n[a] : void 0;
            };
          },
          1327: (e, o, t,) => {
            var r = t(4536,), i = Object.prototype.hasOwnProperty;
            e.exports = function (a,) {
              var n = this.__data__;
              return r ? n[a] !== void 0 : i.call(n, a,);
            };
          },
          1866: (e, o, t,) => {
            var r = t(4536,);
            e.exports = function (i, a,) {
              var n = this.__data__;
              return this.size += this.has(i,) ? 0 : 1, n[i] = r && a === void 0 ? '__lodash_hash_undefined__' : a, this;
            };
          },
          5776: (e,) => {
            var o = /^(?:0|[1-9]\d*)$/;
            e.exports = function (t, r,) {
              var i = typeof t;
              return !!(r = r ?? 9007199254740991) && (i == 'number' || i != 'symbol' && o.test(t,)) && t > -1 && t % 1 == 0 && t < r;
            };
          },
          7019: (e,) => {
            e.exports = function (o,) {
              var t = typeof o;
              return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? o !== '__proto__' : o === null;
            };
          },
          5346: (e, o, t,) => {
            var r, i = t(4429,), a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || '',)) ? 'Symbol(src)_1.' + r : '';
            e.exports = function (n,) {
              return !!a && a in n;
            };
          },
          5726: (e,) => {
            var o = Object.prototype;
            e.exports = function (t,) {
              var r = t && t.constructor;
              return t === (typeof r == 'function' && r.prototype || o);
            };
          },
          7040: (e,) => {
            e.exports = function () {
              this.__data__ = [], this.size = 0;
            };
          },
          4125: (e, o, t,) => {
            var r = t(8470,), i = Array.prototype.splice;
            e.exports = function (a,) {
              var n = this.__data__, u = r(n, a,);
              return !(u < 0 || (u == n.length - 1 ? n.pop() : i.call(n, u, 1,), --this.size, 0));
            };
          },
          2117: (e, o, t,) => {
            var r = t(8470,);
            e.exports = function (i,) {
              var a = this.__data__, n = r(a, i,);
              return n < 0 ? void 0 : a[n][1];
            };
          },
          7518: (e, o, t,) => {
            var r = t(8470,);
            e.exports = function (i,) {
              return r(this.__data__, i,) > -1;
            };
          },
          4705: (e, o, t,) => {
            var r = t(8470,);
            e.exports = function (i, a,) {
              var n = this.__data__, u = r(n, i,);
              return u < 0 ? (++this.size, n.push([i, a,],)) : n[u][1] = a, this;
            };
          },
          4785: (e, o, t,) => {
            var r = t(1989,), i = t(8407,), a = t(7071,);
            e.exports = function () {
              this.size = 0, this.__data__ = { hash: new r(), map: new (a || i)(), string: new r(), };
            };
          },
          1285: (e, o, t,) => {
            var r = t(5050,);
            e.exports = function (i,) {
              var a = r(this, i,).delete(i,);
              return this.size -= a ? 1 : 0, a;
            };
          },
          6e3: (e, o, t,) => {
            var r = t(5050,);
            e.exports = function (i,) {
              return r(this, i,).get(i,);
            };
          },
          9916: (e, o, t,) => {
            var r = t(5050,);
            e.exports = function (i,) {
              return r(this, i,).has(i,);
            };
          },
          5265: (e, o, t,) => {
            var r = t(5050,);
            e.exports = function (i, a,) {
              var n = r(this, i,), u = n.size;
              return n.set(i, a,), this.size += n.size == u ? 0 : 1, this;
            };
          },
          8776: (e,) => {
            e.exports = function (o,) {
              var t = -1, r = Array(o.size,);
              return o.forEach(function (i, a,) {
                r[++t] = [a, i,];
              },),
                r;
            };
          },
          4536: (e, o, t,) => {
            var r = t(852,)(Object, 'create',);
            e.exports = r;
          },
          6916: (e, o, t,) => {
            var r = t(5569,)(Object.keys, Object,);
            e.exports = r;
          },
          1167: (e, o, t,) => {
            e = t.nmd(e,);
            var r = t(1957,),
              i = o && !o.nodeType && o,
              a = i && e && !e.nodeType && e,
              n = a && a.exports === i && r.process,
              u = function () {
                try {
                  return a && a.require && a.require('util',).types || n && n.binding && n.binding('util',);
                } catch {
                }
              }();
            e.exports = u;
          },
          2333: (e,) => {
            var o = Object.prototype.toString;
            e.exports = function (t,) {
              return o.call(t,);
            };
          },
          5569: (e,) => {
            e.exports = function (o, t,) {
              return function (r,) {
                return o(t(r,),);
              };
            };
          },
          5639: (e, o, t,) => {
            var r = t(1957,),
              i = typeof self == 'object' && self && self.Object === Object && self,
              a = r || i || Function('return this',)();
            e.exports = a;
          },
          619: (e,) => {
            e.exports = function (o,) {
              return this.__data__.set(o, '__lodash_hash_undefined__',), this;
            };
          },
          2385: (e,) => {
            e.exports = function (o,) {
              return this.__data__.has(o,);
            };
          },
          1814: (e,) => {
            e.exports = function (o,) {
              var t = -1, r = Array(o.size,);
              return o.forEach(function (i,) {
                r[++t] = i;
              },),
                r;
            };
          },
          7465: (e, o, t,) => {
            var r = t(8407,);
            e.exports = function () {
              this.__data__ = new r(), this.size = 0;
            };
          },
          3779: (e,) => {
            e.exports = function (o,) {
              var t = this.__data__, r = t.delete(o,);
              return this.size = t.size, r;
            };
          },
          7599: (e,) => {
            e.exports = function (o,) {
              return this.__data__.get(o,);
            };
          },
          4758: (e,) => {
            e.exports = function (o,) {
              return this.__data__.has(o,);
            };
          },
          4309: (e, o, t,) => {
            var r = t(8407,), i = t(7071,), a = t(3369,);
            e.exports = function (n, u,) {
              var c = this.__data__;
              if (c instanceof r) {
                var p = c.__data__;
                if (!i || p.length < 199) {
                  return p.push([n, u,],), this.size = ++c.size, this;
                }
                c = this.__data__ = new a(p,);
              }
              return c.set(n, u,), this.size = c.size, this;
            };
          },
          346: (e,) => {
            var o = Function.prototype.toString;
            e.exports = function (t,) {
              if (t != null) {
                try {
                  return o.call(t,);
                } catch {
                }
                try {
                  return t + '';
                } catch {
                }
              }
              return '';
            };
          },
          7813: (e,) => {
            e.exports = function (o, t,) {
              return o === t || o != o && t != t;
            };
          },
          5694: (e, o, t,) => {
            var r = t(9454,),
              i = t(7005,),
              a = Object.prototype,
              n = a.hasOwnProperty,
              u = a.propertyIsEnumerable,
              c = r(function () {
                  return arguments;
                }(),)
                ? r
                : function (p,) {
                  return i(p,) && n.call(p, 'callee',) && !u.call(p, 'callee',);
                };
            e.exports = c;
          },
          1469: (e,) => {
            var o = Array.isArray;
            e.exports = o;
          },
          8612: (e, o, t,) => {
            var r = t(3560,), i = t(1780,);
            e.exports = function (a,) {
              return a != null && i(a.length,) && !r(a,);
            };
          },
          4144: (e, o, t,) => {
            e = t.nmd(e,);
            var r = t(5639,),
              i = t(5062,),
              a = o && !o.nodeType && o,
              n = a && e && !e.nodeType && e,
              u = n && n.exports === a ? r.Buffer : void 0,
              c = (u ? u.isBuffer : void 0) || i;
            e.exports = c;
          },
          8446: (e, o, t,) => {
            var r = t(939,);
            e.exports = function (i, a,) {
              return r(i, a,);
            };
          },
          3560: (e, o, t,) => {
            var r = t(4239,), i = t(3218,);
            e.exports = function (a,) {
              if (!i(a,)) {
                return false;
              }
              var n = r(a,);
              return n == '[object Function]' || n == '[object GeneratorFunction]' || n == '[object AsyncFunction]' ||
                n == '[object Proxy]';
            };
          },
          1780: (e,) => {
            e.exports = function (o,) {
              return typeof o == 'number' && o > -1 && o % 1 == 0 && o <= 9007199254740991;
            };
          },
          3218: (e,) => {
            e.exports = function (o,) {
              var t = typeof o;
              return o != null && (t == 'object' || t == 'function');
            };
          },
          7005: (e,) => {
            e.exports = function (o,) {
              return o != null && typeof o == 'object';
            };
          },
          6719: (e, o, t,) => {
            var r = t(8749,), i = t(1717,), a = t(1167,), n = a && a.isTypedArray, u = n ? i(n,) : r;
            e.exports = u;
          },
          3674: (e, o, t,) => {
            var r = t(4636,), i = t(280,), a = t(8612,);
            e.exports = function (n,) {
              return a(n,) ? r(n,) : i(n,);
            };
          },
          479: (e,) => {
            e.exports = function () {
              return [];
            };
          },
          5062: (e,) => {
            e.exports = function () {
              return false;
            };
          },
          75: function (e,) {
            (function () {
              var o, t, r, i, a, n;
              typeof performance < 'u' && performance !== null && performance.now
                ? e.exports = function () {
                  return performance.now();
                }
                : typeof process < 'u' && process !== null && process.hrtime
                ? (e.exports = function () {
                  return (o() - a) / 1e6;
                },
                  t = process.hrtime,
                  i = (o = function () {
                    var u;
                    return 1e9 * (u = t())[0] + u[1];
                  })(),
                  n = 1e9 * process.uptime(),
                  a = i - n)
                : Date.now
                ? (e.exports = function () {
                  return Date.now() - r;
                },
                  r = Date.now())
                : (e.exports = function () {
                  return (/* @__PURE__ */ new Date()).getTime() - r;
                },
                  r = (/* @__PURE__ */ new Date()).getTime());
            }).call(this,);
          },
          4087: (e, o, t,) => {
            for (
              var r = t(75,),
                i = typeof window > 'u' ? t.g : window,
                a = ['moz', 'webkit',],
                n = 'AnimationFrame',
                u = i['request' + n],
                c = i['cancel' + n] || i['cancelRequest' + n],
                p = 0;
              !u && p < a.length;
              p++
            ) {
              u = i[a[p] + 'Request' + n], c = i[a[p] + 'Cancel' + n] || i[a[p] + 'CancelRequest' + n];
            }
            if (!u || !c) {
              var f = 0, l = 0, v = [];
              u = function (y,) {
                if (v.length === 0) {
                  var d = r(), g = Math.max(0, 16.666666666666668 - (d - f),);
                  f = g + d,
                    setTimeout(function () {
                      var _ = v.slice(0,);
                      v.length = 0;
                      for (var E = 0; E < _.length; E++) {
                        if (!_[E].cancelled) {
                          try {
                            _[E].callback(f,);
                          } catch (A) {
                            setTimeout(function () {
                              throw A;
                            }, 0,);
                          }
                        }
                      }
                    }, Math.round(g,),);
                }
                return v.push({ handle: ++l, callback: y, cancelled: false, },), l;
              },
                c = function (y,) {
                  for (var d = 0; d < v.length; d++) {
                    v[d].handle === y && (v[d].cancelled = true);
                  }
                };
            }
            e.exports = function (y,) {
              return u.call(i, y,);
            },
              e.exports.cancel = function () {
                c.apply(i, arguments,);
              },
              e.exports.polyfill = function (y,) {
                y || (y = i), y.requestAnimationFrame = u, y.cancelAnimationFrame = c;
              };
          },
          8156: (e,) => {
            'use strict';
            e.exports = C;
          },
        },
        z = {};
      function R(e,) {
        var o = z[e];
        if (o !== void 0) {
          return o.exports;
        }
        var t = z[e] = { id: e, loaded: false, exports: {}, };
        return P[e].call(t.exports, t, t.exports, R,), t.loaded = true, t.exports;
      }
      R.n = (e,) => {
        var o = e && e.__esModule ? () => e.default : () => e;
        return R.d(o, { a: o, },), o;
      },
        R.d = (e, o,) => {
          for (var t in o) {
            R.o(o, t,) && !R.o(e, t,) && Object.defineProperty(e, t, { enumerable: true, get: o[t], },);
          }
        },
        R.g = function () {
          if (typeof globalThis == 'object') {
            return globalThis;
          }
          try {
            return this || new Function('return this',)();
          } catch {
            if (typeof window == 'object') {
              return window;
            }
          }
        }(),
        R.o = (e, o,) => Object.prototype.hasOwnProperty.call(e, o,),
        R.nmd = (e,) => (e.paths = [], e.children || (e.children = []), e);
      var B = {};
      return (() => {
        'use strict';
        R.d(B, { default: () => v, },);
        var e = R(8156,), o = R.n(e,), t = R(7403,), r = R(8446,), i = R.n(r,);
        function a(y,) {
          return a = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (d,) {
              return typeof d;
            }
            : function (d,) {
              return d && typeof Symbol == 'function' && d.constructor === Symbol && d !== Symbol.prototype ? 'symbol' : typeof d;
            },
            a(y,);
        }
        function n(y, d,) {
          for (var g = 0; g < d.length; g++) {
            var _ = d[g];
            _.enumerable = _.enumerable || false,
              _.configurable = true,
              'value' in _ && (_.writable = true),
              Object.defineProperty(y, f(_.key,), _,);
          }
        }
        function u(y, d,) {
          return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (g, _,) {
            return g.__proto__ = _, g;
          },
            u(y, d,);
        }
        function c(y,) {
          if (y === void 0) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called',);
          }
          return y;
        }
        function p(y,) {
          return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (d,) {
            return d.__proto__ || Object.getPrototypeOf(d,);
          },
            p(y,);
        }
        function f(y,) {
          var d = function (g, _,) {
            if (a(g,) !== 'object' || g === null) {
              return g;
            }
            var E = g[Symbol.toPrimitive];
            if (E !== void 0) {
              var A = E.call(g, 'string',);
              if (a(A,) !== 'object') {
                return A;
              }
              throw new TypeError('@@toPrimitive must return a primitive value.',);
            }
            return String(g,);
          }(y,);
          return a(d,) === 'symbol' ? d : String(d,);
        }
        var l = function (y,) {
          (function (m, w,) {
            if (typeof w != 'function' && w !== null) {
              throw new TypeError('Super expression must either be null or a function',);
            }
            m.prototype = Object.create(w && w.prototype, { constructor: { value: m, writable: true, configurable: true, }, },),
              Object.defineProperty(m, 'prototype', { writable: false, },),
              w && u(m, w,);
          })(O, y,);
          var d,
            g,
            _,
            E,
            A = (_ = O,
              E = function () {
                if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) {
                  return false;
                }
                if (typeof Proxy == 'function') {
                  return true;
                }
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                  },),),
                    true;
                } catch {
                  return false;
                }
              }(),
              function () {
                var m, w = p(_,);
                if (E) {
                  var N = p(this,).constructor;
                  m = Reflect.construct(w, arguments, N,);
                } else {
                  m = w.apply(this, arguments,);
                }
                return function (L, M,) {
                  if (M && (a(M,) === 'object' || typeof M == 'function')) {
                    return M;
                  }
                  if (M !== void 0) {
                    throw new TypeError('Derived constructors may only return object or undefined',);
                  }
                  return c(L,);
                }(this, m,);
              });
          function O() {
            var m, w, N, L;
            (function (V, x,) {
              if (!(V instanceof x)) {
                throw new TypeError('Cannot call a class as a function',);
              }
            })(this, O,);
            for (var M = arguments.length, S = new Array(M,), U = 0; U < M; U++) {
              S[U] = arguments[U];
            }
            return w = c(m = A.call.apply(A, [this,].concat(S,),),),
              L = { instance: null, },
              (N = f(N = 'state',)) in w
                ? Object.defineProperty(w, N, { value: L, enumerable: true, configurable: true, writable: true, },)
                : w[N] = L,
              m;
          }
          return d = O,
            (g = [{
              key: 'componentDidMount',
              value: function () {
                var m = this, w = new t.default(this.typewriter, this.props.options,);
                this.setState({ instance: w, }, function () {
                  var N = m.props.onInit;
                  N && N(w,);
                },);
              },
            }, {
              key: 'componentDidUpdate',
              value: function (m,) {
                i()(this.props.options, m.options,) || this.setState({ instance: new t.default(this.typewriter, this.props.options,), },);
              },
            }, {
              key: 'componentWillUnmount',
              value: function () {
                this.state.instance && this.state.instance.stop();
              },
            }, {
              key: 'render',
              value: function () {
                var m = this, w = this.props.component;
                return o().createElement(w, {
                  ref: function (N,) {
                    return m.typewriter = N;
                  },
                  className: 'Typewriter',
                  'data-testid': 'typewriter-wrapper',
                },);
              },
            },]) && n(d.prototype, g,),
            Object.defineProperty(d, 'prototype', { writable: false, },),
            O;
        }(e.Component,);
        l.defaultProps = { component: 'div', };
        let v = l;
      })(),
        B.default;
    })(),);
},);
var W = {};
Pt(W, { default: () => Mt, },);
var Ct = dt(st(),);
q(W, dt(st(),),);
var { default: ht, ...Lt } = Ct;
var Mt = ht !== void 0 ? ht : Lt;

// https:https://framerusercontent.com/modules/vgSbxmWWvbgW6ShllXld/9oZlwlOxsp6zJVFpVkIp/Typewriter.js
var headingStyles = (props,) => {
  return {
    width: '100%',
    height: '100%',
    // display: "flex",
    // placeContent: "center",
    // placeItems: "center",
    position: 'relative',
    overflow: 'visible',
    fontSize: props.font.fontSize,
    fontFamily: props.font.fontFamily || 'Inter',
    fontWeight: props.font.fontWeight,
    letterSpacing: props.font.letterSpacing,
    lineHeight: props.font.lineHeightType ? props.font.lineHeight : `${props.font.lineHeightPixels}px`,
    textAlign: props.font.textAlign,
    whiteSpace: props.font.whiteSpace,
    color: props.color,
    left: `${props.font.offset}%`,
    margin: 0,
    padding: 0,
  };
};
function TypeWriter(props,) {
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const strings = props.text.split(' ',);
  const content = props.split ? strings : props.text;
  const canvasContent = props.split ? strings[0] : props.text;
  const tagMap = { paragraph: 'p', heading1: 'h1', heading2: 'h2', heading3: 'h3', };
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
        delay: props.delayType ? 'natural' : props.delayNumber * 1e3,
      },
      onInit: (typewriter,) => {
        typewriter.callFunction((state,) => {
          if (props.loop) {
            return;
          }
          if (!props.caretVisibility) {
            state.elements.cursor.style.display = 'none';
          }
        },);
      },
    },);
  const TypeWriterWithCSS = withCSS(
    () =>
      /* @__PURE__ */ _jsx('span', {
        style: { display: 'contents', },
        className: `${props.id}`,
        children: /* @__PURE__ */ _jsx(TypeWriterPure, {},),
      },),
    cursorStyles,
  );
  return /* @__PURE__ */ _jsx(Tag, {
    style: headingStyles(props,),
    children: isCanvas ? canvasContent : /* @__PURE__ */ _jsx(TypeWriterWithCSS, {},),
  },);
}
TypeWriter.displayName = 'Typewriter';
TypeWriter.defaultProps = {
  text: 'Hello World',
  font: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: 1.2,
    lineHeightType: true,
    lineHeightPixels: 100,
    letterSpacing: 0,
    offset: 0,
    whiteSpace: 'nowrap',
  },
  cursor: '|',
  delayType: true,
  delayNumber: 0.2,
  pauseFor: 1,
  loop: true,
  caretVisibility: true,
  split: false,
  autoStart: true,
  tag: 'heading1',
  color: '#888',
  cursorColor: 'rgba(136, 136, 136, 0.5)',
};
addPropertyControls(TypeWriter, {
  tag: {
    title: 'Tag',
    type: ControlType.Enum,
    options: ['heading1', 'heading2', 'heading3', 'paragraph',],
    optionTitles: ['H1', 'H2', 'H3', 'P',],
    defaultValue: TypeWriter.defaultProps.tag,
    displaySegmentedControl: true,
  },
  text: { type: ControlType.String, title: 'Text', defaultValue: TypeWriter.defaultProps.text, },
  autoStart: { title: 'Autoplay', type: ControlType.Boolean, defaultValue: TypeWriter.defaultProps.autoStart, },
  split: { title: 'Per Word', type: ControlType.Boolean, defaultValue: TypeWriter.defaultProps.split, },
  loop: { title: 'Loop', type: ControlType.Boolean, defaultValue: TypeWriter.defaultProps.loop, },
  caretVisibility: {
    title: 'Caret',
    type: ControlType.Boolean,
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
    defaultValue: TypeWriter.defaultProps.caretVisibility,
    hidden: (props,) => props.loop,
  },
  delayType: {
    title: 'Delay',
    type: ControlType.Boolean,
    enabledTitle: 'Natural',
    disabledTitle: 'Number',
    defaultValue: TypeWriter.defaultProps.delayType,
  },
  delayNumber: {
    title: 'Delay',
    type: ControlType.Number,
    step: 0.1,
    min: 0,
    defaultValue: TypeWriter.defaultProps.delayNumber,
    displayStepper: true,
    hidden: (props,) => props.delayType,
  },
  pauseFor: { title: 'Pause', type: ControlType.Number, min: 0, defaultValue: TypeWriter.defaultProps.pauseFor, displayStepper: true, },
  color: { type: ControlType.Color, defaultValue: TypeWriter.defaultProps.color, },
  font: {
    type: ControlType.Object,
    controls: {
      fontFamily: { title: 'Font', type: ControlType.String, placeholder: 'Inter', defaultValue: TypeWriter.defaultProps.font.fontFamily, },
      fontSize: {
        title: 'Size',
        type: ControlType.Number,
        min: 0,
        max: 500,
        step: 0.5,
        defaultValue: TypeWriter.defaultProps.font.fontSize,
      },
      fontWeight: {
        type: ControlType.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900,],
        defaultValue: TypeWriter.defaultProps.font.fontWeight,
        title: 'Weight',
      },
      textAlign: {
        type: ControlType.Enum,
        displaySegmentedControl: true,
        title: 'Align',
        options: ['left', 'center', 'right',],
        optionTitles: ['Left', 'Center', 'Right',],
        defaultValue: TypeWriter.defaultProps.font.textAlign,
      },
      letterSpacing: {
        title: 'Letter',
        type: ControlType.Number,
        defaultValue: TypeWriter.defaultProps.font.letterSpacing,
        step: 0.1,
        displayStepper: true,
      },
      offset: {
        type: ControlType.Number,
        title: 'Offset',
        min: -100,
        max: 100,
        displayStepper: true,
        step: 0.25,
        defaultValue: TypeWriter.defaultProps.font.offset,
        unit: '%',
      },
      whiteSpace: {
        type: ControlType.Enum,
        title: 'Space',
        options: ['normal', 'nowrap', 'pre', 'pre-wrap', 'preline', 'break-spaces',],
        optionTitles: ['Normal', 'No Wrap', 'Pre', 'Pre Wrap', 'Preline', 'Break Spaces',],
        defaultValue: TypeWriter.defaultProps.font.whiteSpace,
      },
      lineHeight: {
        type: ControlType.Number,
        title: 'Line',
        min: -500,
        max: 500,
        displayStepper: true,
        step: 0.1,
        defaultValue: TypeWriter.defaultProps.font.lineHeight,
        hidden: (props,) => !props.lineHeightType,
      },
      lineHeightPixels: {
        type: ControlType.Number,
        title: 'Line',
        min: -500,
        max: 500,
        displayStepper: true,
        step: 0.1,
        defaultValue: TypeWriter.defaultProps.font.lineHeightPixels,
        hidden: (props,) => props.lineHeightType,
      },
      lineHeightType: {
        type: ControlType.Boolean,
        title: ' ',
        enabledTitle: 'em',
        disabledTitle: 'px',
        defaultValue: TypeWriter.defaultProps.font.lineHeightType,
      },
    },
  },
  cursor: { title: 'Cursor', type: ControlType.String, defaultValue: TypeWriter.defaultProps.cursor, placeholder: 'Character', },
  cursorColor: { type: ControlType.Color, title: ' ', defaultValue: TypeWriter.defaultProps.cursorColor, },
},);

// https:https://framer.com/m/Seed-aLgb.js@iyYRGD4DpZrrjfEv0XTS
var TypewriterFonts = getFonts(TypeWriter,);
var cycleOrder = ['R_0SntBXV', 'RspHZjbvA', 'KzyHUFutd', 'lR29aQ4aC', 'CDTOPoYwJ', 'AKBlJHd8s', 'NfdKYRGKU',];
var variantClassNames = {
  AKBlJHd8s: 'framer-v-14ttska',
  CDTOPoYwJ: 'framer-v-wmnvsy',
  KzyHUFutd: 'framer-v-1u2jgkx',
  lR29aQ4aC: 'framer-v-15ekw7u',
  NfdKYRGKU: 'framer-v-n0zl46',
  R_0SntBXV: 'framer-v-1xd6uv3',
  RspHZjbvA: 'framer-v-15mvvd2',
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = {
  CDTOPoYwJ: { delay: 0, duration: 3.25, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  RspHZjbvA: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
var transformTemplate = (_, t,) => `translate(-50%, -50%) ${t}`;
var transition1 = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.29, 0.99,], type: 'tween', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap = {
  'Variant 7': 'NfdKYRGKU',
  expanded: 'KzyHUFutd',
  generate: 'AKBlJHd8s',
  logo: 'CDTOPoYwJ',
  search: 'R_0SntBXV',
  seed: 'RspHZjbvA',
  type: 'lR29aQ4aC',
};
var getProps = ({ height, id, width, ...props },) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref = (_variant = humanReadableVariantMap[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref !== void 0
        ? ref
        : 'R_0SntBXV',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'R_0SntBXV',
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const isDisplayed = () => {
    if (['RspHZjbvA', 'CDTOPoYwJ',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === 'KzyHUFutd') {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === 'KzyHUFutd') {
      return false;
    }
    return true;
  };
  const isDisplayed3 = () => {
    if (['lR29aQ4aC', 'AKBlJHd8s',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed4 = () => {
    if (['lR29aQ4aC', 'AKBlJHd8s',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed5 = () => {
    if (['RspHZjbvA', 'CDTOPoYwJ', 'NfdKYRGKU',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed6 = () => {
    if (baseVariant === 'AKBlJHd8s') {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (baseVariant === 'AKBlJHd8s') {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React.useId();
  return /* @__PURE__ */ _jsx2(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(motion.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx('framer-AaXBB', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx2(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx2(motion.div, {
          ...restProps,
          className: cx('framer-1xd6uv3', className,),
          'data-framer-name': 'search',
          layoutDependency,
          layoutId: 'R_0SntBXV',
          ref,
          style: { ...style, },
          ...addPropertyOverrides(
            {
              AKBlJHd8s: { 'data-framer-name': 'generate', },
              CDTOPoYwJ: { 'data-framer-name': 'logo', },
              KzyHUFutd: { 'data-framer-name': 'expanded', },
              lR29aQ4aC: { 'data-framer-name': 'type', },
              NfdKYRGKU: { 'data-framer-name': 'Variant 7', },
              RspHZjbvA: { 'data-framer-name': 'seed', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: /* @__PURE__ */ _jsx2(motion.div, {
            className: 'framer-th6quy',
            'data-framer-name': 'Component 1',
            layoutDependency,
            layoutId: 'sFQLDloAD',
            style: {
              backgroundColor: 'rgb(232, 232, 235)',
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              boxShadow: '0px 1px 26px 2px rgba(0,0,0,0.25)',
            },
            transformTemplate,
            variants: {
              CDTOPoYwJ: {
                borderBottomLeftRadius: 106,
                borderBottomRightRadius: 106,
                borderTopLeftRadius: 106,
                borderTopRightRadius: 106,
              },
              RspHZjbvA: { borderBottomLeftRadius: 66, borderBottomRightRadius: 66, borderTopLeftRadius: 66, borderTopRightRadius: 66, },
            },
            ...addPropertyOverrides(
              {
                AKBlJHd8s: { transformTemplate: void 0, },
                lR29aQ4aC: { transformTemplate: void 0, },
                NfdKYRGKU: { transformTemplate: void 0, },
              },
              baseVariant,
              gestureVariant,
            ),
            children: /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-102rpj4',
              'data-framer-name': 'state-layer',
              layoutDependency,
              layoutId: 'ldDmdZXhT',
              children: [
                /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-1x3xeex',
                  'data-framer-name': 'Frame 1066',
                  layoutDependency,
                  layoutId: 'MrqGHeMQA',
                  style: {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 32,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                  },
                  variants: {
                    AKBlJHd8s: { backgroundColor: 'rgba(0, 0, 0, 0)', },
                    CDTOPoYwJ: {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderBottomLeftRadius: 75,
                      borderBottomRightRadius: 75,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                    },
                    lR29aQ4aC: { backgroundColor: 'rgba(0, 0, 0, 0)', },
                    NfdKYRGKU: { backgroundColor: 'rgba(0, 0, 0, 0)', },
                    RspHZjbvA: {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderBottomLeftRadius: 75,
                      borderBottomRightRadius: 75,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                    },
                  },
                  children: [
                    isDisplayed() && /* @__PURE__ */ _jsx2(motion.div, {
                      className: 'framer-onwzwe',
                      'data-framer-name': 'Leading-icon-button',
                      layoutDependency,
                      layoutId: 'LP0LOwP3R',
                      children: /* @__PURE__ */ _jsx2(motion.div, {
                        className: 'framer-1d3you',
                        'data-framer-name': 'container',
                        layoutDependency,
                        layoutId: 'p3ZJaGqF2',
                        style: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        children: /* @__PURE__ */ _jsx2(motion.div, {
                          className: 'framer-1klpfuo',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'EmVl06lFH',
                          children: /* @__PURE__ */ _jsxs(motion.div, {
                            className: 'framer-4hz2zg',
                            'data-framer-name': 'Icon',
                            layoutDependency,
                            layoutId: 'QzLvSZx_y',
                            children: [
                              isDisplayed1() && /* @__PURE__ */ _jsx2(SVG, {
                                className: 'framer-1pd2dzy',
                                'data-framer-name': 'icon',
                                fill: 'rgba(0,0,0,1)',
                                intrinsicHeight: 16,
                                intrinsicWidth: 17,
                                layoutDependency,
                                layoutId: 'iYV9LkFzg',
                                svg:
                                  '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.5 7H4.33L9.92 1.41L8.5 0L0.5 8L8.5 16L9.91 14.59L4.33 9H16.5V7Z" fill="#3F484A"/>\n</svg>\n',
                                withExternalLayout: true,
                              },),
                              isDisplayed2() && /* @__PURE__ */ _jsx2(SVG, {
                                className: 'framer-2jm16e',
                                'data-framer-name': 'icon',
                                fill: 'rgba(0,0,0,1)',
                                intrinsicHeight: 12,
                                intrinsicWidth: 18,
                                layoutDependency,
                                layoutId: 'LcWaG1b2J',
                                svg:
                                  '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="#3F484A"/>\n</svg>\n',
                                withExternalLayout: true,
                              },),
                            ],
                          },),
                        },),
                      },),
                    },),
                    isDisplayed() && /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-a5vvyf',
                      'data-framer-name': 'Content',
                      layoutDependency,
                      layoutId: 'dHgJhO3P9',
                      children: [
                        isDisplayed3() && /* @__PURE__ */ _jsx2(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx2(React.Fragment, {
                            children: /* @__PURE__ */ _jsx2(motion.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFZhcmlhYmxl',
                                '--framer-font-family': '"PP Supply Sans Variable", sans-serif',
                                '--framer-letter-spacing': '0.5px',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                              },
                              children: 'Your idea begins here...',
                            },),
                          },),
                          className: 'framer-er2jrd',
                          'data-framer-name': 'supporting-text',
                          fonts: ['CUSTOM;PP Supply Sans Variable',],
                          layoutDependency,
                          layoutId: 'KO8mkxbXv',
                          style: { '--extracted-r6o4lv': ' rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides(
                            {
                              NfdKYRGKU: {
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFZhcmlhYmxl',
                                      '--framer-font-family': '"PP Supply Sans Variable", sans-serif',
                                      '--framer-letter-spacing': '0.5px',
                                      '--framer-line-height': '24px',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                    },
                                    children: 'OUTLINE',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                        isDisplayed4() && /* @__PURE__ */ _jsx2(motion.div, {
                          className: 'framer-b3bbqg',
                          'data-framer-name': 'Typed Content',
                          layoutDependency,
                          layoutId: 'ooGcjaCIs',
                          children: /* @__PURE__ */ _jsx2(motion.div, {
                            className: 'framer-q46j6z-container',
                            layoutDependency,
                            layoutId: 'wQ8u93V0Q-container',
                            children: /* @__PURE__ */ _jsx2(TypeWriter, {
                              autoStart: true,
                              caretVisibility: true,
                              color: 'rgb(0, 0, 0)',
                              cursor: '|',
                              cursorColor: 'rgb(153, 153, 153)',
                              delayNumber: 0.1,
                              delayType: true,
                              font: {
                                fontFamily: 'PP Supply Sans',
                                fontSize: 24,
                                fontWeight: 300,
                                letterSpacing: 0,
                                lineHeight: 2.2,
                                lineHeightPixels: 100,
                                lineHeightType: true,
                                offset: 1.5,
                                textAlign: 'left',
                                whiteSpace: 'nowrap',
                              },
                              height: '100%',
                              id: 'wQ8u93V0Q',
                              layoutId: 'wQ8u93V0Q',
                              loop: true,
                              pauseFor: 1,
                              split: false,
                              style: { height: '100%', width: '100%', },
                              tag: 'heading1',
                              text: 'a tool that enhances human cognition',
                              width: '100%',
                              ...addPropertyOverrides(
                                {
                                  AKBlJHd8s: {
                                    delayNumber: 0.05,
                                    delayType: false,
                                    font: {
                                      fontFamily: 'PP Supply Sans',
                                      fontSize: 22.5,
                                      fontWeight: 300,
                                      letterSpacing: 0,
                                      lineHeight: 2.5,
                                      lineHeightPixels: 100,
                                      lineHeightType: true,
                                      offset: 3,
                                      textAlign: 'left',
                                      whiteSpace: 'nowrap',
                                    },
                                    pauseFor: 0.5,
                                    split: true,
                                    text: 'outline report summary proposal presentation book essay',
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          },),
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-o3gcmt',
                      'data-framer-name': 'Trailing-Elements',
                      layoutDependency,
                      layoutId: 'kDcsPSPnH',
                      children: [
                        isDisplayed5() && /* @__PURE__ */ _jsx2(motion.div, {
                          className: 'framer-8y7dsi',
                          'data-framer-name': '1st trailing-icon',
                          layoutDependency,
                          layoutId: 'nKrJlDrIs',
                          children: /* @__PURE__ */ _jsx2(motion.div, {
                            className: 'framer-vyt6dv',
                            'data-framer-name': 'container',
                            layoutDependency,
                            layoutId: 'PocSIdTw3',
                            style: {
                              borderBottomLeftRadius: 100,
                              borderBottomRightRadius: 100,
                              borderTopLeftRadius: 100,
                              borderTopRightRadius: 100,
                            },
                            children: /* @__PURE__ */ _jsx2(motion.div, {
                              className: 'framer-1o52rms',
                              'data-framer-name': 'state-layer',
                              layoutDependency,
                              layoutId: 'kDzc7Cncp',
                              children: /* @__PURE__ */ _jsxs(motion.div, {
                                className: 'framer-1xo5sxg',
                                'data-framer-name': 'Icon',
                                layoutDependency,
                                layoutId: 'mPD9hz3KO',
                                children: [
                                  isDisplayed6() && /* @__PURE__ */ _jsx2(SVG, {
                                    className: 'framer-dpkc67',
                                    'data-framer-name': 'icon',
                                    fill: 'rgba(0,0,0,1)',
                                    intrinsicHeight: 18,
                                    intrinsicWidth: 18,
                                    layoutDependency,
                                    layoutId: 'E4d6wJpmJ',
                                    svg:
                                      '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.26 10.77L17.99 16.5L16.5 17.99L10.77 12.26C9.7 13.03 8.41 13.5 7 13.5C3.41 13.5 0.5 10.59 0.5 7C0.5 3.41 3.41 0.5 7 0.5C10.59 0.5 13.5 3.41 13.5 7C13.5 8.41 13.03 9.7 12.26 10.77ZM7 2.5C4.51 2.5 2.5 4.51 2.5 7C2.5 9.49 4.51 11.5 7 11.5C9.49 11.5 11.5 9.49 11.5 7C11.5 4.51 9.49 2.5 7 2.5Z" fill="#3F484A"/>\n</svg>\n',
                                    withExternalLayout: true,
                                  },),
                                  isDisplayed7() && /* @__PURE__ */ _jsx2(SVG, {
                                    className: 'framer-11pjihq',
                                    'data-framer-name': 'autorenew_FILL0_wght200_GRAD0_opsz24 1',
                                    fill: 'rgba(0,0,0,1)',
                                    intrinsicHeight: 24,
                                    intrinsicWidth: 24,
                                    layoutDependency,
                                    layoutId: 'kVysVdybG',
                                    svg:
                                      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M5.5 12.0499C5.5 12.3679 5.52307 12.6881 5.56922 13.0105C5.61539 13.333 5.69296 13.6512 5.80192 13.9653C5.84679 14.1076 5.84167 14.2439 5.78655 14.374C5.73142 14.5041 5.64295 14.5955 5.52115 14.648C5.39552 14.7044 5.26763 14.7073 5.1375 14.6567C5.00737 14.606 4.91987 14.5096 4.875 14.3672C4.74167 13.9967 4.64583 13.6147 4.5875 13.2211C4.52917 12.8275 4.5 12.4371 4.5 12.0499C4.5 9.95763 5.23012 8.17623 6.69037 6.70573C8.15064 5.23521 9.92052 4.49995 12 4.49995H13.3865L11.6404 2.7538C11.5468 2.66022 11.4968 2.54547 11.4904 2.40957C11.484 2.27367 11.534 2.15252 11.6404 2.0461C11.7468 1.93968 11.8647 1.88647 11.9942 1.88647C12.1237 1.88647 12.2417 1.93968 12.3481 2.0461L14.7365 4.43457C14.8981 4.59611 14.9789 4.78457 14.9789 4.99995C14.9789 5.21533 14.8981 5.40379 14.7365 5.56532L12.3481 7.9538C12.2545 8.04738 12.1397 8.09738 12.0038 8.1038C11.8679 8.11022 11.7468 8.06022 11.6404 7.9538C11.534 7.84738 11.4808 7.72943 11.4808 7.59995C11.4808 7.47047 11.534 7.35252 11.6404 7.2461L13.3865 5.49995H12C10.1923 5.49995 8.65706 6.13552 7.39423 7.40667C6.13141 8.67784 5.5 10.2256 5.5 12.0499ZM18.5 11.95C18.5 11.632 18.4769 11.3118 18.4308 10.9894C18.3846 10.6669 18.307 10.3487 18.1981 10.0346C18.1532 9.89226 18.1583 9.75603 18.2135 9.6259C18.2686 9.49578 18.3571 9.40444 18.4789 9.35188C18.6045 9.29546 18.7292 9.29258 18.8529 9.34323C18.9766 9.39386 19.0609 9.49033 19.1058 9.63265C19.2391 10.0031 19.3381 10.3852 19.4029 10.7788C19.4676 11.1724 19.5 11.5628 19.5 11.95C19.5 14.0423 18.7699 15.8237 17.3096 17.2942C15.8494 18.7647 14.0795 19.5 12 19.5H10.6135L12.3596 21.2461C12.4532 21.3397 12.5032 21.4544 12.5096 21.5904C12.516 21.7262 12.466 21.8474 12.3596 21.9538C12.2532 22.0602 12.1353 22.1134 12.0058 22.1134C11.8763 22.1134 11.7583 22.0602 11.6519 21.9538L9.26345 19.5653C9.10192 19.4038 9.02115 19.2153 9.02115 19C9.02115 18.7846 9.10192 18.5961 9.26345 18.4346L11.6519 16.0461C11.7455 15.9525 11.8603 15.9025 11.9962 15.8961C12.1321 15.8897 12.2532 15.9397 12.3596 16.0461C12.466 16.1525 12.5192 16.2705 12.5192 16.4C12.5192 16.5294 12.466 16.6474 12.3596 16.7538L10.6135 18.5H12C13.8077 18.5 15.3429 17.8644 16.6058 16.5932C17.8686 15.3221 18.5 13.7743 18.5 11.95Z" fill="black"/>\n<path d="M14.4473 12C14.4473 13.3516 13.3516 14.4473 12 14.4473C10.6484 14.4473 9.55273 13.3516 9.55273 12C9.55273 10.6484 10.6484 9.55273 12 9.55273C13.3516 9.55273 14.4473 10.6484 14.4473 12Z" fill="black"/>\n</svg>\n',
                                    withExternalLayout: true,
                                  },),
                                ],
                              },),
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx2(motion.div, {
                          className: 'framer-1togmrv',
                          layoutDependency,
                          layoutId: 'BHWuc6wgS',
                          style: {
                            backgroundColor: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                            borderBottomLeftRadius: 108,
                            borderBottomRightRadius: 108,
                            borderTopLeftRadius: 108,
                            borderTopRightRadius: 108,
                            boxShadow: 'none',
                          },
                          variants: { CDTOPoYwJ: { boxShadow: 'inset 0px 1px 32px 9px rgba(255, 255, 255, 0.05)', }, },
                          children: /* @__PURE__ */ _jsx2(Transition, {
                            ...addPropertyOverrides({ CDTOPoYwJ: { value: transition1, }, }, baseVariant, gestureVariant,),
                            children: /* @__PURE__ */ _jsx2(SVG, {
                              className: 'framer-wmmfv',
                              'data-framer-name': 'Frame 15',
                              layout: 'position',
                              layoutDependency,
                              layoutId: 'eRNDyXM4I',
                              opacity: 1,
                              svg:
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 48"><path d="M 22.649 22.11 C 23.525 21.178 24.093 20.038 24.661 18.899 C 25.991 16.229 27.322 13.559 32.605 13.559 L 34.342 13.559 C 35.883 13.559 37.024 14.808 37.023 16.349 C 37.023 17.889 35.774 19.137 34.233 19.137 L 32.604 19.137 C 27.321 19.137 25.99 21.373 24.66 23.608 C 24.539 23.81 24.419 24.012 24.295 24.213 C 24.419 24.416 24.539 24.62 24.66 24.824 C 25.99 27.082 27.321 29.34 32.604 29.34 L 34.472 29.34 C 35.881 29.34 37.023 30.481 37.023 31.89 C 37.024 33.299 35.881 34.441 34.472 34.441 L 32.605 34.441 C 27.322 34.441 25.991 31.89 24.661 29.34 C 24.095 28.256 23.53 27.172 22.662 26.284 C 21.486 27.339 19.755 28.079 16.715 28.079 L 15.863 28.079 C 13.716 28.079 11.976 26.339 11.976 24.194 C 11.976 22.048 13.716 20.309 15.863 20.309 L 16.715 20.309 C 19.744 20.309 21.474 21.051 22.649 22.11 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                              svgContentId: 564511839,
                              withExternalLayout: true,
                              ...addPropertyOverrides(
                                {
                                  CDTOPoYwJ: {
                                    svg:
                                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 212 207"><g><defs><path d="M 97.993 95.348 C 101.78 91.328 104.238 86.414 106.695 81.5 C 112.453 69.986 118.21 58.472 141.068 58.472 L 148.581 58.472 C 155.249 58.472 160.184 63.859 160.183 70.503 C 160.181 77.145 154.777 82.529 148.11 82.529 L 141.064 82.529 C 118.206 82.529 112.448 92.169 106.691 101.809 C 106.17 102.681 105.649 103.553 105.115 104.418 C 105.649 105.292 106.17 106.173 106.691 107.054 C 112.448 116.79 118.206 126.527 141.064 126.527 L 149.143 126.527 C 155.239 126.527 160.181 131.45 160.183 137.524 C 160.184 143.6 155.241 148.526 149.143 148.526 L 141.068 148.526 C 118.21 148.526 112.453 137.527 106.695 126.527 C 104.249 121.854 101.803 117.181 98.046 113.352 C 92.959 117.898 85.469 121.089 72.318 121.089 L 68.631 121.089 C 59.344 121.089 51.815 113.588 51.815 104.335 C 51.815 95.081 59.344 87.58 68.631 87.58 L 72.318 87.58 C 85.423 87.58 92.907 90.781 97.993 95.348 Z" id="a1020z"></path><filter id="a1022z" x="-25.2%" y="-30.3%" width="150.2%" height="160.5%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="0" in="SourceAlpha" result="a1024z"></feOffset><feGaussianBlur stdDeviation="6.5" in="a1024z" result="a1025z"></feGaussianBlur><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.09 0" type="matrix" in="a1025z" result="a1026z"></feColorMatrix></filter><filter id="a1027z" x="-0.9%" y="-2.2%" width="101.8%" height="104.3%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="0" in="SourceAlpha" result="a1029z"></feGaussianBlur><feOffset dx="-1" dy="-2" in="a1029z" result="a1030z"></feOffset><feComposite in="a1030z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1031z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0" type="matrix" in="a1031z" result="a1032z"></feColorMatrix></filter></defs><g filter="url(#a1022z)"><use fill="black" fill-opacity="1" stroke="black" stroke-opacity="0" stroke-width="0" xlink:href="#a1020z" clip-path="url(#a1021z)"></use></g><use xlink:href="#a1020z" fill="hsl(0, 0%, 100%)" clip-path="url(#a1021z)"></use><use fill="black" fill-opacity="1" filter="url(#a1027z)" xlink:href="#a1020z"></use></g></svg>',
                                    svgContentId: 397634520,
                                  },
                                  RspHZjbvA: {
                                    svg:
                                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 94 92"><path d="M 43.45 42.377 C 45.129 40.59 46.219 38.406 47.308 36.222 C 49.861 31.105 52.414 25.988 62.549 25.988 L 65.88 25.988 C 68.837 25.988 71.025 28.382 71.024 31.335 C 71.024 34.287 68.627 36.679 65.671 36.679 L 62.547 36.679 C 52.412 36.679 49.859 40.964 47.306 45.248 C 47.075 45.636 46.844 46.024 46.608 46.408 C 46.844 46.796 47.075 47.188 47.306 47.579 C 49.859 51.907 52.412 56.234 62.547 56.234 L 66.129 56.234 C 68.832 56.234 71.024 58.422 71.024 61.122 C 71.025 63.822 68.833 66.012 66.129 66.012 L 62.549 66.012 C 52.414 66.012 49.861 61.123 47.308 56.234 C 46.224 54.157 45.139 52.08 43.473 50.378 C 41.218 52.399 37.897 53.817 32.065 53.817 L 30.431 53.817 C 26.313 53.817 22.975 50.483 22.975 46.371 C 22.975 42.258 26.313 38.925 30.431 38.925 L 32.065 38.925 C 37.876 38.925 41.195 40.347 43.45 42.377 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                                    svgContentId: 552771922,
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          },),
                        },),
                      ],
                    },),
                    isDisplayed7() && /* @__PURE__ */ _jsx2(motion.div, {
                      className: 'framer-12cmvwa',
                      'data-framer-name': 'Style=outlined, State=enabled, Selected=true, Show icon=false',
                      layoutDependency,
                      layoutId: 'PemICCCY5',
                      style: {
                        backgroundColor: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239))',
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        boxShadow: 'inset -1px -1px 0px 0px rgba(0, 0, 0, 0.15)',
                      },
                      children: /* @__PURE__ */ _jsx2(motion.div, {
                        className: 'framer-1ko8d44',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'p96NAqcgT',
                        children: /* @__PURE__ */ _jsx2(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx2(React.Fragment, {
                            children: /* @__PURE__ */ _jsx2(motion.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFJlZ3VsYXI=',
                                '--framer-font-family': '"PP Supply Sans Regular", sans-serif',
                                '--framer-letter-spacing': '0.1px',
                                '--framer-line-height': '20px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(55, 0, 58))',
                              },
                              children: 'SYNTHESIZE:',
                            },),
                          },),
                          className: 'framer-1xc11ty',
                          'data-framer-name': 'label-text',
                          fonts: ['CUSTOM;PP Supply Sans Regular',],
                          layoutDependency,
                          layoutId: 'CHq8RWHnu',
                          style: { '--extracted-r6o4lv': 'rgb(55, 0, 58)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                      },),
                    },),
                  ],
                },),
                isDisplayed1() && /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-4fuql9',
                  'data-framer-name': 'Frame 1069',
                  layoutDependency,
                  layoutId: 'qBBzUFy05',
                  children: [
                    /* @__PURE__ */ _jsx2(motion.div, {
                      className: 'framer-9xr0lm',
                      'data-framer-name': 'Button',
                      layoutDependency,
                      layoutId: 'Rnbe2ugWo',
                      style: {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs(motion.div, {
                        className: 'framer-jg6s93',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'a8kznWgNw',
                        children: [
                          /* @__PURE__ */ _jsx2(motion.div, {
                            className: 'framer-1trg1ag',
                            'data-framer-name': 'icon',
                            layoutDependency,
                            layoutId: 'woNxE8IKQ',
                            children: /* @__PURE__ */ _jsx2(SVG, {
                              className: 'framer-15peqkh',
                              'data-framer-name': 'icon',
                              fill: 'rgba(0,0,0,1)',
                              intrinsicHeight: 12,
                              intrinsicWidth: 12,
                              layoutDependency,
                              layoutId: 'IGf4H7_d4',
                              svg:
                                '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z" fill="#006973"/>\n</svg>\n',
                              withExternalLayout: true,
                            },),
                          },),
                          /* @__PURE__ */ _jsx2(RichText, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx2(React.Fragment, {
                              children: /* @__PURE__ */ _jsx2(motion.p, {
                                style: {
                                  '--font-selector': 'R0Y7UFAgU3VwcGx5IFNhbnMtNTAw',
                                  '--framer-font-family': '"PP Supply Sans", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-font-weight': '500',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 105, 115))',
                                },
                                children: 'Add Context',
                              },),
                            },),
                            className: 'framer-1s5l2r8',
                            'data-framer-name': 'label-text',
                            fonts: ['GF;PP Supply Sans-500',],
                            layoutDependency,
                            layoutId: 'DSeRzKlnX',
                            style: { '--extracted-r6o4lv': ' rgb(0, 105, 115)', '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        ],
                      },),
                    },),
                    /* @__PURE__ */ _jsx2(motion.div, {
                      className: 'framer-1j7qf8c',
                      'data-framer-name': 'Button',
                      layoutDependency,
                      layoutId: 'ddZNMNSdB',
                      style: {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs(motion.div, {
                        className: 'framer-r697fa',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'AApLais__',
                        children: [
                          /* @__PURE__ */ _jsx2(motion.div, {
                            className: 'framer-1l3eqf8',
                            'data-framer-name': 'icon',
                            layoutDependency,
                            layoutId: 'l36JTzfdi',
                            children: /* @__PURE__ */ _jsx2(SVG, {
                              className: 'framer-1e7nb68',
                              'data-framer-name': 'icon',
                              fill: 'rgba(0,0,0,1)',
                              intrinsicHeight: 12,
                              intrinsicWidth: 12,
                              layoutDependency,
                              layoutId: 'Iw0ZQRqOJ',
                              svg:
                                '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z" fill="#006973"/>\n</svg>\n',
                              withExternalLayout: true,
                            },),
                          },),
                          /* @__PURE__ */ _jsx2(RichText, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx2(React.Fragment, {
                              children: /* @__PURE__ */ _jsx2(motion.p, {
                                style: {
                                  '--font-selector': 'R0Y7UFAgU3VwcGx5IFNhbnMtNTAw',
                                  '--framer-font-family': '"PP Supply Sans", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-font-weight': '500',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 105, 115))',
                                },
                                children: 'Import Document',
                              },),
                            },),
                            className: 'framer-16jmr7f',
                            'data-framer-name': 'label-text',
                            fonts: ['GF;PP Supply Sans-500',],
                            layoutDependency,
                            layoutId: 'ycs7iHzcA',
                            style: { '--extracted-r6o4lv': ' rgb(0, 105, 115)', '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        ],
                      },),
                    },),
                    /* @__PURE__ */ _jsx2(motion.div, {
                      className: 'framer-1oqfwc7',
                      'data-framer-name': 'Button',
                      layoutDependency,
                      layoutId: 'FKF0FyMcH',
                      style: {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs(motion.div, {
                        className: 'framer-i9rcfr',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'BZ3pT8Y5b',
                        style: { backgroundColor: 'rgb(240, 240, 240)', },
                        children: [
                          /* @__PURE__ */ _jsx2(motion.div, {
                            className: 'framer-1cp1dxx',
                            'data-framer-name': 'icon',
                            layoutDependency,
                            layoutId: 'fwQBSQVFw',
                            children: /* @__PURE__ */ _jsx2(SVG, {
                              className: 'framer-1n3aflp',
                              'data-framer-name': 'icon',
                              fill: 'rgba(0,0,0,1)',
                              intrinsicHeight: 12,
                              intrinsicWidth: 12,
                              layoutDependency,
                              layoutId: 'D49MtMch1',
                              svg:
                                '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z" fill="#006973"/>\n</svg>\n',
                              withExternalLayout: true,
                            },),
                          },),
                          /* @__PURE__ */ _jsx2(RichText, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx2(React.Fragment, {
                              children: /* @__PURE__ */ _jsx2(motion.p, {
                                style: {
                                  '--font-selector': 'R0Y7UFAgU3VwcGx5IFNhbnMtNTAw',
                                  '--framer-font-family': '"PP Supply Sans", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-font-weight': '500',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 105, 115))',
                                },
                                children: 'Random Idea',
                              },),
                            },),
                            className: 'framer-1j2s96v',
                            'data-framer-name': 'label-text',
                            fonts: ['GF;PP Supply Sans-500',],
                            layoutDependency,
                            layoutId: 'g6U9tFdki',
                            style: { '--extracted-r6o4lv': ' rgb(0, 105, 115)', '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        ],
                      },),
                    },),
                  ],
                },),
              ],
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css = [
  '.framer-AaXBB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-AaXBB .framer-b9y4c0 { display: block; }',
  '.framer-AaXBB .framer-1xd6uv3 { height: 537px; overflow: hidden; position: relative; width: 1009px; }',
  '.framer-AaXBB .framer-th6quy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 50%; width: 360px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-AaXBB .framer-102rpj4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 1px; z-index: 1; }',
  '.framer-AaXBB .framer-1x3xeex { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-AaXBB .framer-onwzwe, .framer-AaXBB .framer-8y7dsi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-AaXBB .framer-1d3you, .framer-AaXBB .framer-vyt6dv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-AaXBB .framer-1klpfuo, .framer-AaXBB .framer-1o52rms { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-AaXBB .framer-4hz2zg, .framer-AaXBB .framer-1xo5sxg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-AaXBB .framer-1pd2dzy { bottom: 4px; flex: none; left: 4px; position: absolute; right: 5px; top: 4px; }',
  '.framer-AaXBB .framer-2jm16e { bottom: 6px; flex: none; left: 3px; position: absolute; right: 3px; top: 6px; }',
  '.framer-AaXBB .framer-a5vvyf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 49px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-AaXBB .framer-er2jrd, .framer-AaXBB .framer-1xc11ty, .framer-AaXBB .framer-1s5l2r8, .framer-AaXBB .framer-16jmr7f, .framer-AaXBB .framer-1j2s96v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-AaXBB .framer-b3bbqg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-AaXBB .framer-q46j6z-container { flex: 1 0 0px; height: 50px; position: relative; width: 1px; }',
  '.framer-AaXBB .framer-o3gcmt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-AaXBB .framer-dpkc67 { bottom: 4px; flex: none; left: 3px; position: absolute; right: 4px; top: 3px; }',
  '.framer-AaXBB .framer-11pjihq { bottom: -8px; flex: none; left: -8px; position: absolute; right: -8px; top: -8px; }',
  '.framer-AaXBB .framer-1togmrv { flex: none; height: 49px; overflow: visible; position: relative; width: 50px; }',
  '.framer-AaXBB .framer-wmmfv { bottom: 0px; flex: none; height: 48px; left: calc(50.00000000000002% - 49px / 2); position: absolute; width: 49px; }',
  '.framer-AaXBB .framer-12cmvwa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 35px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-AaXBB .framer-1ko8d44 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 32px; justify-content: center; overflow: visible; padding: 6px 16px 6px 16px; position: relative; width: min-content; }',
  '.framer-AaXBB .framer-4fuql9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 100%; }',
  '.framer-AaXBB .framer-9xr0lm, .framer-AaXBB .framer-1j7qf8c, .framer-AaXBB .framer-1oqfwc7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-AaXBB .framer-jg6s93, .framer-AaXBB .framer-r697fa, .framer-AaXBB .framer-i9rcfr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: center; overflow: visible; padding: 10px 16px 10px 12px; position: relative; width: 100%; }',
  '.framer-AaXBB .framer-1trg1ag, .framer-AaXBB .framer-1l3eqf8, .framer-AaXBB .framer-1cp1dxx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 18px; }',
  '.framer-AaXBB .framer-15peqkh, .framer-AaXBB .framer-1e7nb68, .framer-AaXBB .framer-1n3aflp { bottom: 3px; flex: none; left: 3px; position: absolute; right: 3px; top: 3px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-AaXBB .framer-th6quy, .framer-AaXBB .framer-102rpj4, .framer-AaXBB .framer-1x3xeex, .framer-AaXBB .framer-onwzwe, .framer-AaXBB .framer-1d3you, .framer-AaXBB .framer-1klpfuo, .framer-AaXBB .framer-a5vvyf, .framer-AaXBB .framer-b3bbqg, .framer-AaXBB .framer-o3gcmt, .framer-AaXBB .framer-8y7dsi, .framer-AaXBB .framer-vyt6dv, .framer-AaXBB .framer-1o52rms, .framer-AaXBB .framer-12cmvwa, .framer-AaXBB .framer-1ko8d44, .framer-AaXBB .framer-4fuql9, .framer-AaXBB .framer-9xr0lm, .framer-AaXBB .framer-jg6s93, .framer-AaXBB .framer-1j7qf8c, .framer-AaXBB .framer-r697fa, .framer-AaXBB .framer-1oqfwc7, .framer-AaXBB .framer-i9rcfr { gap: 0px; } .framer-AaXBB .framer-th6quy > *, .framer-AaXBB .framer-1x3xeex > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-AaXBB .framer-th6quy > :first-child, .framer-AaXBB .framer-1x3xeex > :first-child, .framer-AaXBB .framer-1d3you > :first-child, .framer-AaXBB .framer-1klpfuo > :first-child, .framer-AaXBB .framer-a5vvyf > :first-child, .framer-AaXBB .framer-b3bbqg > :first-child, .framer-AaXBB .framer-o3gcmt > :first-child, .framer-AaXBB .framer-vyt6dv > :first-child, .framer-AaXBB .framer-1o52rms > :first-child, .framer-AaXBB .framer-12cmvwa > :first-child, .framer-AaXBB .framer-1ko8d44 > :first-child, .framer-AaXBB .framer-jg6s93 > :first-child, .framer-AaXBB .framer-r697fa > :first-child, .framer-AaXBB .framer-i9rcfr > :first-child { margin-left: 0px; } .framer-AaXBB .framer-th6quy > :last-child, .framer-AaXBB .framer-1x3xeex > :last-child, .framer-AaXBB .framer-1d3you > :last-child, .framer-AaXBB .framer-1klpfuo > :last-child, .framer-AaXBB .framer-a5vvyf > :last-child, .framer-AaXBB .framer-b3bbqg > :last-child, .framer-AaXBB .framer-o3gcmt > :last-child, .framer-AaXBB .framer-vyt6dv > :last-child, .framer-AaXBB .framer-1o52rms > :last-child, .framer-AaXBB .framer-12cmvwa > :last-child, .framer-AaXBB .framer-1ko8d44 > :last-child, .framer-AaXBB .framer-jg6s93 > :last-child, .framer-AaXBB .framer-r697fa > :last-child, .framer-AaXBB .framer-i9rcfr > :last-child { margin-right: 0px; } .framer-AaXBB .framer-102rpj4 > *, .framer-AaXBB .framer-4fuql9 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-AaXBB .framer-102rpj4 > :first-child, .framer-AaXBB .framer-onwzwe > :first-child, .framer-AaXBB .framer-8y7dsi > :first-child, .framer-AaXBB .framer-4fuql9 > :first-child, .framer-AaXBB .framer-9xr0lm > :first-child, .framer-AaXBB .framer-1j7qf8c > :first-child, .framer-AaXBB .framer-1oqfwc7 > :first-child { margin-top: 0px; } .framer-AaXBB .framer-102rpj4 > :last-child, .framer-AaXBB .framer-onwzwe > :last-child, .framer-AaXBB .framer-8y7dsi > :last-child, .framer-AaXBB .framer-4fuql9 > :last-child, .framer-AaXBB .framer-9xr0lm > :last-child, .framer-AaXBB .framer-1j7qf8c > :last-child, .framer-AaXBB .framer-1oqfwc7 > :last-child { margin-bottom: 0px; } .framer-AaXBB .framer-onwzwe > *, .framer-AaXBB .framer-8y7dsi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-AaXBB .framer-1d3you > *, .framer-AaXBB .framer-1klpfuo > *, .framer-AaXBB .framer-a5vvyf > *, .framer-AaXBB .framer-b3bbqg > *, .framer-AaXBB .framer-vyt6dv > *, .framer-AaXBB .framer-1o52rms > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-AaXBB .framer-o3gcmt > *, .framer-AaXBB .framer-12cmvwa > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-AaXBB .framer-1ko8d44 > *, .framer-AaXBB .framer-jg6s93 > *, .framer-AaXBB .framer-r697fa > *, .framer-AaXBB .framer-i9rcfr > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-AaXBB .framer-9xr0lm > *, .framer-AaXBB .framer-1j7qf8c > *, .framer-AaXBB .framer-1oqfwc7 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }',
  '.framer-AaXBB.framer-v-15mvvd2 .framer-th6quy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 98px); width: 98px; }',
  '.framer-AaXBB.framer-v-15mvvd2 .framer-102rpj4, .framer-AaXBB.framer-v-wmnvsy .framer-102rpj4 { flex: none; height: 188%; width: min-content; }',
  '.framer-AaXBB.framer-v-15mvvd2 .framer-1x3xeex { height: 90px; width: 90px; }',
  '.framer-AaXBB.framer-v-15mvvd2 .framer-1togmrv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 90px); width: 90px; }',
  '.framer-AaXBB.framer-v-15mvvd2 .framer-wmmfv { bottom: unset; height: 92px; left: calc(50.00000000000002% - 94px / 2); top: calc(51.11111111111113% - 92px / 2); width: 94px; }',
  '.framer-AaXBB.framer-v-1u2jgkx .framer-102rpj4 { flex: none; width: 360px; }',
  '.framer-AaXBB.framer-v-15ekw7u .framer-th6quy, .framer-AaXBB.framer-v-14ttska .framer-th6quy { height: 57px; left: calc(50.04955401387514% - 584px / 2); top: calc(49.90689013035384% - 57px / 2); width: 584px; }',
  '.framer-AaXBB.framer-v-wmnvsy .framer-th6quy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 186px); width: 186px; }',
  '.framer-AaXBB.framer-v-wmnvsy .framer-1x3xeex { height: 178px; width: 178px; }',
  '.framer-AaXBB.framer-v-wmnvsy .framer-1togmrv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 178px); width: 178px; }',
  '.framer-AaXBB.framer-v-wmnvsy .framer-wmmfv { bottom: unset; height: 207px; left: calc(50.00000000000002% - 212px / 2); top: calc(51.123595505618% - 207px / 2); width: 212px; }',
  '.framer-AaXBB.framer-v-14ttska .framer-1x3xeex, .framer-AaXBB.framer-v-n0zl46 .framer-1x3xeex { align-content: center; align-items: center; }',
  '.framer-AaXBB.framer-v-14ttska .framer-onwzwe, .framer-AaXBB.framer-v-n0zl46 .framer-onwzwe { order: 0; }',
  '.framer-AaXBB.framer-v-14ttska .framer-a5vvyf, .framer-AaXBB.framer-v-n0zl46 .framer-a5vvyf { order: 2; }',
  '.framer-AaXBB.framer-v-14ttska .framer-o3gcmt, .framer-AaXBB.framer-v-n0zl46 .framer-o3gcmt { order: 3; }',
  '.framer-AaXBB.framer-v-14ttska .framer-12cmvwa { order: 1; }',
  '.framer-AaXBB.framer-v-n0zl46 .framer-th6quy { height: 301px; left: calc(50.04955401387514% - 326px / 2); top: calc(47.113594040968366% - 301px / 2); width: 326px; }',
];
var FramerpSxPslti_ = withCSS2(Component, css, 'framer-AaXBB',);
var stdin_default = FramerpSxPslti_;
FramerpSxPslti_.displayName = 'Seed';
FramerpSxPslti_.defaultProps = { height: 537, width: 1009, };
addPropertyControls2(FramerpSxPslti_, {
  variant: {
    options: ['R_0SntBXV', 'RspHZjbvA', 'KzyHUFutd', 'lR29aQ4aC', 'CDTOPoYwJ', 'AKBlJHd8s', 'NfdKYRGKU',],
    optionTitles: ['search', 'seed', 'expanded', 'type', 'logo', 'generate', 'Variant 7',],
    title: 'Variant',
    type: ControlType2.Enum,
  },
},);
addFonts(FramerpSxPslti_, [{
  family: 'PP Supply Sans Variable',
  moduleAsset: {
    localModuleIdentifier: 'local-module:canvasComponent/pSxPslti_:default',
    url: 'https://framerusercontent.com/assets/nTnfVPKvx4BNtayjhoEgyhNSc.ttf',
  },
  url: 'https://framerusercontent.com/assets/nTnfVPKvx4BNtayjhoEgyhNSc.ttf',
}, {
  family: 'PP Supply Sans Regular',
  moduleAsset: {
    localModuleIdentifier: 'local-module:canvasComponent/pSxPslti_:default',
    url: 'https://framerusercontent.com/assets/IIwW8kvIZ9g5LjEOU4ekY5CtLI.ttf',
  },
  url: 'https://framerusercontent.com/assets/IIwW8kvIZ9g5LjEOU4ekY5CtLI.ttf',
}, ...TypewriterFonts,],);

// seed.js
import { WithFramerBreakpoints, } from 'installable-framer/dist/react';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var seed_default = stdin_default;
export { seed_default as default, };
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
