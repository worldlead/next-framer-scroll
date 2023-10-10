'use client';
var __defProp = Object.defineProperty;
var __export = (target, all,) => {
  for (var name in all) {
    __defProp(target, name, { get: all[name], enumerable: true, },);
  }
};

// https:https://framer.com/m/node-type-IpAV.js@dBQfRNTkpNoLwYmhAT4y
import { jsx as _jsx5, jsxs as _jsxs3, } from 'react/jsx-runtime';
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
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext3, } from 'framer-motion';
import * as React5 from 'react';

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

// https:https://framerusercontent.com/modules/TjsuAE5glU2n7MoNSdHk/uk4tNJP8azIVk1aBSiz4/Slider_1.js
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType5,
  RenderTarget as RenderTarget4,
  withCSS as withCSS2,
} from 'installable-framer/dist/framer';
import { animate as animate2, motion, transform, useTransform, } from 'framer-motion';
import { useCallback as useCallback2, useRef as useRef3, useState as useState3, } from 'react';

// https:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType as ControlType2, } from 'installable-framer/dist/framer';
var containerStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: 'rgba(136, 85, 255, 0.3)',
  color: '#85F',
  border: '1px dashed #85F',
  flexDirection: 'column',
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
  title: 'Font Size',
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true,
};
var fontControls = {
  font: {
    type: ControlType2.Boolean,
    title: 'Font',
    defaultValue: false,
    disabledTitle: 'Default',
    enabledTitle: 'Custom',
  },
  fontFamily: {
    type: ControlType2.String,
    title: 'Family',
    placeholder: 'Inter',
    hidden: ({ font, },) => !font,
  },
  fontWeight: {
    type: ControlType2.Enum,
    title: 'Weight',
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
    ],
    optionTitles: [
      'Thin',
      'Extra-light',
      'Light',
      'Regular',
      'Medium',
      'Semi-bold',
      'Bold',
      'Extra-bold',
      'Black',
    ],
    hidden: ({ font, },) => !font,
  },
};

// https:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget, } from 'installable-framer/dist/framer';
import { useEffect, } from 'react';

// https:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef, } from 'react';
function useConstant(init,) {
  const ref = useRef(null,);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// https:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color, } from 'installable-framer/dist/framer';

// https:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue, } from 'installable-framer/dist/framer';
var isMotionValue = (v,) => v instanceof MotionValue;

// https:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from 'react';

// https:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType3, } from 'installable-framer/dist/framer';

// https:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo, } from 'react';

// https:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3, } from 'react';
function useOnChange(value, callback,) {
  useEffect3(
    () => (
      // @ts-ignore this should be detected as a MV :shrug:
      isMotionValue(value,) ? value.onChange(callback,) : void 0
    ),
  );
}

// https:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2, } from 'react';
import { animate, motionValue, RenderTarget as RenderTarget2, } from 'installable-framer/dist/framer';
function useAutoMotionValue(inputValue, options,) {
  var ref;
  const optionsRef = useRef2(options,);
  const animation = useRef2();
  const didInitialMount = useRef2(false,);
  const isOnCanvas = RenderTarget2.current() === RenderTarget2.canvas;
  const onChangeDeps = (options === null || options === void 0 ? void 0 : options.onChangeDeps) ? options.onChangeDeps : [];
  const onChange = useCallback(options === null || options === void 0 ? void 0 : options.onChange, [
    ...onChangeDeps,
  ],);
  const transformer = useCallback(
    (value2,) =>
      ((ref = optionsRef.current) === null || ref === void 0 ? void 0 : ref.transform) ? optionsRef.current.transform(value2,) : value2,
    [],
  );
  const value = useConstant(
    () => isMotionValue(inputValue,) ? inputValue : motionValue(transformer(inputValue,),),
  );
  useEffect4(() => {
    if (!isMotionValue(inputValue,) && didInitialMount.current) {
      var ref1, ref2;
      const newValue = transformer(inputValue,);
      (ref1 = animation.current) === null || ref1 === void 0 ? void 0 : ref1.stop();
      if (onChange) {
        onChange(newValue, value,);
      }
      if (((ref2 = optionsRef.current) === null || ref2 === void 0 ? void 0 : ref2.animate) && !isOnCanvas) {
        var ref3;
        animation.current = animate(value, newValue, (ref3 = optionsRef.current) === null || ref3 === void 0 ? void 0 : ref3.transition,);
      } else {
        value.set(newValue,);
      }
    }
    didInitialMount.current = true;
  }, [
    inputValue,
    ...onChangeDeps,
  ],);
  return value;
}

// https:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore, } from 'installable-framer/dist/framer';
import { useEffect as useEffect5, } from 'react';

// https:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2, } from 'react';
import { RenderTarget as RenderTarget3, } from 'installable-framer/dist/framer';

// https:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from 'react';

// https:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3, } from 'react';
import { ControlType as ControlType4, } from 'installable-framer/dist/framer';
var borderRadiusControl = {
  borderRadius: {
    title: 'Radius',
    type: ControlType4.FusedNumber,
    toggleKey: 'isMixedBorderRadius',
    toggleTitles: [
      'Radius',
      'Radius per corner',
    ],
    valueKeys: [
      'topLeftRadius',
      'topRightRadius',
      'bottomRightRadius',
      'bottomLeftRadius',
    ],
    valueLabels: [
      'TL',
      'TR',
      'BR',
      'BL',
    ],
    min: 0,
  },
};
var paddingControl = {
  padding: {
    type: ControlType4.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: [
      'Padding',
      'Padding per side',
    ],
    valueKeys: [
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
    ],
    valueLabels: [
      'T',
      'R',
      'B',
      'L',
    ],
    min: 0,
    title: 'Padding',
  },
};

// https:https://framer.com/m/framer/lodash.js@0.3.0
var FUNC_ERROR_TEXT = 'Expected a function';
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
function isObject(value,) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
function toNumber(value,) {
  if (typeof value == 'number') {
    return value;
  }
  if (typeof value == 'symbol') {
    return NAN;
  }
  if (isObject(value,)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other,) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '',);
  var isBinary = reIsBinary.test(value,);
  return isBinary || reIsOctal.test(value,) ? freeParseInt(value.slice(2,), isBinary ? 2 : 8,) : reIsBadHex.test(value,) ? NAN : +value;
}
function debounce(func, wait, options,) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT,);
  }
  wait = toNumber(wait,) || 0;
  if (isObject(options,)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait,) || 0, wait,) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time,) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args,);
    return result;
  }
  function leadingEdge(time,) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait,);
    return leading ? invokeFunc(time,) : result;
  }
  function remainingWait(time,) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke,) : timeWaiting;
  }
  function shouldInvoke(time,) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time,)) {
      return trailingEdge(time,);
    }
    timerId = setTimeout(timerExpired, remainingWait(time,),);
  }
  function trailingEdge(time,) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time,);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId,);
    }
    lastInvokeTime = 0;
    lastArgs =
      lastCallTime =
      lastThis =
      timerId =
        void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now(),);
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time,);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime,);
      }
      if (maxing) {
        clearTimeout(timerId,);
        timerId = setTimeout(timerExpired, wait,);
        return invokeFunc(lastCallTime,);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait,);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function throttle(func, wait, options,) {
  var leading = true, trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT,);
  }
  if (isObject(options,)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    maxWait: wait,
    trailing,
  },);
}

// https:https://framerusercontent.com/modules/TjsuAE5glU2n7MoNSdHk/uk4tNJP8azIVk1aBSiz4/Slider_1.js
var KnobOptions;
(function (KnobOptions2,) {
  KnobOptions2['Hide'] = 'Hide';
  KnobOptions2['Hover'] = 'Hover';
  KnobOptions2['Show'] = 'Show';
})(KnobOptions || (KnobOptions = {}),);
var Slider = withCSS2(function Slider2(props,) {
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
  const [hovered, setHovered,] = useState3(false,);
  const [focused, setFocused,] = useState3(false,);
  const onCanvas = RenderTarget4.current() === RenderTarget4.canvas;
  const shouldAnimate = shouldAnimateChange && !onCanvas;
  const isConstrained = constrainKnob && knobSetting === KnobOptions.Show;
  const showKnob = knobSetting !== KnobOptions.Hide;
  const input = useRef3();
  const knobPadding = 8;
  const updateValue = useCallback2((newVal, target,) => {
    throttledInputUpdate(newVal,);
    if (onChange) {
      onChange(newVal,);
    }
    if (shouldAnimate) {
      animate2(target, newVal, transition,);
    } else {
      requestAnimationFrame(() => target.set(newVal,));
    }
  }, [transition, shouldAnimate, onChange,],);
  const value = useAutoMotionValue(valueProp, {
    onChange: updateValue,
    transform: (value2,) => transform(value2, [0, 100,], [min, max,],),
  },);
  const knobX = useTransform(value, [min, max,], ['0%', '100%',],);
  const normalizedValue = useTransform(value, [min, max,], [0, 1,],);
  const throttledInputUpdate = useCallback2(
    throttle((val,) => {
      var ref;
      if ((ref = input.current) === null || ref === void 0 ? void 0 : ref.value) {
        input.current.value = val;
      }
    }, 100,),
    [input,],
  );
  useOnChange(value, (val,) => {
    if (isMotionValue(valueProp,)) {
      throttledInputUpdate(val,);
    }
    if (onMax && val >= max) {
      onMax();
    }
    if (onMin && val <= min) {
      onMin();
    }
    if (onChangeLive) {
      onChangeLive(val,);
    }
  },);
  const handleInputChange = (e,) => {
    updateValue(parseFloat(e.target.value,), value,);
  };
  const handleMouseDown = (e,) => {
    if (parseFloat(e.target.value,) !== 0) {
      updateValue(parseFloat(e.target.value,), value,);
    }
  };
  const handleMouseUp = () => {
  };
  const totalKnobWidth = showKnob ? knobSize + knobPadding : knobPadding;
  const totalHeight = Math.max(knobSize + knobPadding, trackHeight,);
  return /* @__PURE__ */ _jsxs('div', {
    className: 'framer-default-slider',
    onMouseEnter: () => setHovered(true,),
    onMouseLeave: () => setHovered(false,),
    style: {
      position: 'relative',
      ...style,
      alignItems: 'center',
      justifyContent: 'flex-start',
      border: `0px solid ${focusColor}`,
      '--framer-default-slider-height': totalHeight,
      '--framer-default-slider-width': totalKnobWidth,
    },
    children: [
      /* @__PURE__ */ _jsx2('input', {
        ref: input,
        style: {
          flexShrink: 0,
          minHeight: totalHeight,
          opacity: 0,
          margin: 0,
          display: 'flex',
          ...style,
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          ...!isConstrained && { width: `calc(100% + ${totalKnobWidth}px)`, marginLeft: -totalKnobWidth / 2, },
        },
        onFocus: () => setFocused(true,),
        onBlur: () => setFocused(false,),
        type: 'range',
        min,
        max,
        defaultValue: -1,
        step: 'any',
        onChange: handleInputChange,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
      },),
      /* @__PURE__ */ _jsx2('div', {
        style: {
          background: trackColor,
          position: 'absolute',
          top: `calc(50% - ${Math.ceil(trackHeight / 2,)}px)`,
          borderRadius: trackRadius,
          display: 'flex',
          height: trackHeight,
          width: '100%',
          transformOrigin: 'left',
          pointerEvents: 'none',
          overflow: 'hidden',
        },
        children: /* @__PURE__ */ _jsx2(motion.div, {
          style: {
            height: trackHeight,
            width: '100%',
            background: fillColor,
            scaleX: normalizedValue,
            position: 'absolute',
            top: `calc(50% - ${Math.ceil(trackHeight / 2,)}px)`,
            transformOrigin: 'left',
            pointerEvents: 'none',
          },
        },),
      },),
      /* @__PURE__ */ _jsx2(motion.div, {
        style: {
          x: knobX,
          position: 'absolute',
          display: 'flex',
          width: '100%',
          top: `calc(50% - ${Math.floor(knobSize / 2,)}px)`,
          pointerEvents: 'none',
          ...isConstrained ? { width: `calc(100% - ${knobSize}px`, left: 0, } : { width: `100%`, left: -knobSize / 2, },
        },
        children: /* @__PURE__ */ _jsx2(motion.div, {
          initial: false,
          animate: { scale: hovered && knobSetting === KnobOptions.Hover || knobSetting === KnobOptions.Show ? 1 : 0, },
          transition: { type: 'spring', stiffness: 900, damping: 40, },
          style: {
            transformOrigin: '50% 50%',
            width: knobSize,
            height: knobSize,
            borderRadius: '50%',
            background: knobColor,
            pointerEvents: 'none',
            boxShadow: `0px 1px 2px 0px ${shadow}, 
                                0px 2px 4px 0px ${shadow}, 
                                0px 4px 8px 0px ${shadow}`,
          },
        },),
      },),
    ],
  },);
}, [
  '.framer-default-slider input[type=range] {  width: 100%; height: 100% background:transparent margin: 0;}',
  '.framer-default-slider input[type=range]:focus { outline: none; }',
  '.framer-default-slider input[type=range]::-ms-track { width: 100%; cursor: pointer; background: transparent; border-color: transparent; color: transparent; }',
  '.framer-default-slider input[type=range]::-webkit-slider-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }',
  '.framer-default-slider input[type=range]::-moz-range-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }',
  '.framer-default-slider input[type=range]::-ms-thumb  { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }',
],);
Slider.displayName = 'Slider';
Slider.defaultProps = {
  height: 20,
  width: 200,
  trackHeight: 4,
  fillColor: '#09F',
  trackColor: '#DDD',
  knobColor: '#FFF',
  focusColor: 'rgba(0, 153, 255,0)',
  shadow: 'rgba(0,0,0,0.1)',
  knobSize: 20,
  overdrag: true,
  min: 0,
  max: 100,
  value: 50,
  trackRadius: 5,
  knobSetting: KnobOptions.Show,
  constrainKnob: false,
  transition: { type: 'spring', delay: 0, stiffness: 750, damping: 50, },
  shouldAnimateChange: true,
};
addPropertyControls2(Slider, {
  fillColor: { title: 'Tint', type: ControlType5.Color, },
  trackColor: { title: 'Track', type: ControlType5.Color, },
  knobColor: { title: 'Knob', type: ControlType5.Color, },
  shadow: { type: ControlType5.Color, title: 'Shadow', },
  // focusColor: {
  //     title: "Focus",
  //     type: ControlType.Color,
  // },
  shouldAnimateChange: { type: ControlType5.Boolean, title: 'Changes', enabledTitle: 'Animate', disabledTitle: 'Instant', },
  transition: { type: ControlType5.Transition, defaultValue: Slider.defaultProps.transition, },
  knobSetting: { type: ControlType5.Enum, displaySegmentedControl: true, title: 'Knob', options: ['Hide', 'Hover', 'Show',], },
  constrainKnob: {
    type: ControlType5.Boolean,
    title: 'Constrain',
    enabledTitle: 'Yes',
    disabledTitle: 'No',
    hidden: ({ knobSetting, },) => knobSetting !== KnobOptions.Show,
  },
  knobSize: {
    type: ControlType5.Number,
    title: 'Knob',
    min: 10,
    max: 100,
    hidden: ({ knobSetting, },) => knobSetting === KnobOptions.Hide,
  },
  value: { type: ControlType5.Number, title: 'Value', min: 0, max: 100, unit: '%', },
  trackHeight: { title: 'Height', type: ControlType5.Number, min: 0, },
  min: { title: 'Min', type: ControlType5.Number, displayStepper: true, },
  trackRadius: { type: ControlType5.Number, displayStepper: true, min: 0, max: 200, title: 'Radius', },
  max: { title: 'Max', type: ControlType5.Number, displayStepper: true, },
  onChange: { type: ControlType5.EventHandler, },
  onMax: { type: ControlType5.EventHandler, },
  onMin: { type: ControlType5.EventHandler, },
},);

// https:https://framerusercontent.com/modules/VFd7g4pPpeQfOVRIoRr0/6fe9heAP3GRyeu6cIdZL/ydC9w7qn8.js
import { fontStore as fontStore2, } from 'installable-framer/dist/framer';
fontStore2.loadWebFontsFromSelectors(['CUSTOM;PP Supply Sans Medium',],);
var fonts = [{
  family: 'PP Supply Sans Medium',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/ydC9w7qn8:default',
    url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf',
  },
  url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf',
},];
var css = [
  '.framer-OP25q .framer-styles-preset-90m2e0:not(.rich-text-wrapper), .framer-OP25q .framer-styles-preset-90m2e0.rich-text-wrapper h4 { --framer-font-family: "PP Supply Sans Medium", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, #101942); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className = 'framer-OP25q';

// https:https://framerusercontent.com/modules/DT1hIxOdb4kno6gt2cr8/UCSXqWITtmuGmi2ZERWH/gGsg8DxuX.js
import { jsx as _jsx3, } from 'react/jsx-runtime';
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
} from 'installable-framer/dist/framer';
import { LayoutGroup, motion as motion2, MotionConfigContext, } from 'framer-motion';
import * as React3 from 'react';
var enabledGestures = { nPpSWwiWE: { hover: true, pressed: true, }, r5tWv5mqY: { hover: true, pressed: true, }, };
var cycleOrder = ['r5tWv5mqY', 'nPpSWwiWE',];
var variantClassNames = { nPpSWwiWE: 'framer-v-1sknhfx', r5tWv5mqY: 'framer-v-afvvw', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap = { off: 'r5tWv5mqY', on: 'nPpSWwiWE', };
var getProps = ({ height, id, width, ...props },) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref = (_variant = humanReadableVariantMap[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref !== void 0
        ? ref
        : 'r5tWv5mqY',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'r5tWv5mqY',
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTaptllhbd = activeVariantCallback(async (...args) => {
    setVariant('nPpSWwiWE',);
  },);
  const onTap1cy162z = activeVariantCallback(async (...args) => {
    setVariant('r5tWv5mqY',);
  },);
  const defaultLayoutId = React3.useId();
  return /* @__PURE__ */ _jsx3(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(motion2.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx('framer-L5s7X', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx3(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx3(motion2.div, {
          ...restProps,
          className: cx('framer-afvvw', className2,),
          'data-framer-name': 'off',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'r5tWv5mqY',
          onTap: onTaptllhbd,
          ref,
          style: { ...style, },
          ...addPropertyOverrides(
            {
              'nPpSWwiWE-hover': { 'data-framer-name': void 0, },
              'nPpSWwiWE-pressed': { 'data-framer-name': void 0, },
              'r5tWv5mqY-hover': { 'data-framer-name': void 0, },
              'r5tWv5mqY-pressed': { 'data-framer-name': void 0, },
              nPpSWwiWE: { 'data-framer-name': 'on', onTap: onTap1cy162z, },
            },
            baseVariant,
            gestureVariant,
          ),
          children: /* @__PURE__ */ _jsx3(motion2.div, {
            className: 'framer-4zjiij',
            'data-framer-name': 'Selected=true, State=Pressed',
            layoutDependency,
            layoutId: 'n23OCPwPr',
            children: /* @__PURE__ */ _jsx3(motion2.div, {
              className: 'framer-ikwtg4',
              'data-framer-name': 'container',
              layoutDependency,
              layoutId: 'LapWIZHAg',
              style: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
              },
              variants: { 'nPpSWwiWE-pressed': { backgroundColor: 'rgba(29, 27, 32, 0.12)', }, },
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-1n0ftg3',
                'data-framer-name': 'state-layer',
                layoutDependency,
                layoutId: 'ysxxTKwvI',
                style: { backgroundColor: 'rgba(0, 0, 0, 0)', },
                variants: {
                  'nPpSWwiWE-hover': { backgroundColor: 'rgba(29, 27, 32, 0.08)', },
                  'r5tWv5mqY-hover': { backgroundColor: 'rgba(29, 27, 32, 0.12)', },
                },
                children: /* @__PURE__ */ _jsx3(motion2.div, {
                  className: 'framer-utueao',
                  'data-framer-name': 'icon',
                  layoutDependency,
                  layoutId: 'B_Q84JU7b',
                  children: /* @__PURE__ */ _jsx3(SVG, {
                    className: 'framer-1us996j',
                    'data-framer-name': 'icon',
                    layout: 'position',
                    layoutDependency,
                    layoutId: 'EjvYoFDFF',
                    opacity: 1,
                    svg:
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z" fill="#3F484A"></path><path d="M 10 15 C 12.761 15 15 12.761 15 10 C 15 7.239 12.761 5 10 5 C 7.239 5 5 7.239 5 10 C 5 12.761 7.239 15 10 15 Z" fill="transparent"></path></svg>',
                    svgContentId: 246232588,
                    withExternalLayout: true,
                    ...addPropertyOverrides(
                      {
                        nPpSWwiWE: {
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z" fill="#006973"></path><path d="M 10 15 C 12.761 15 15 12.761 15 10 C 15 7.239 12.761 5 10 5 C 7.239 5 5 7.239 5 10 C 5 12.761 7.239 15 10 15 Z" fill="rgb(0,105,115)"></path></svg>',
                          svgContentId: 3684307705,
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css2 = [
  '.framer-L5s7X [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-L5s7X .framer-1o2obsq { display: block; }',
  '.framer-L5s7X .framer-afvvw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-L5s7X .framer-4zjiij { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-L5s7X .framer-ikwtg4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-L5s7X .framer-1n0ftg3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-L5s7X .framer-utueao { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-L5s7X .framer-1us996j { flex: none; height: 20px; left: 2px; position: absolute; top: 2px; width: 20px; }',
  '.framer-L5s7X .framer-v-afvvw .framer-afvvw, .framer-L5s7X .framer-v-1sknhfx .framer-afvvw { cursor: pointer; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-L5s7X .framer-afvvw, .framer-L5s7X .framer-4zjiij, .framer-L5s7X .framer-ikwtg4, .framer-L5s7X .framer-1n0ftg3 { gap: 0px; } .framer-L5s7X .framer-afvvw > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-L5s7X .framer-afvvw > :first-child { margin-top: 0px; } .framer-L5s7X .framer-afvvw > :last-child { margin-bottom: 0px; } .framer-L5s7X .framer-4zjiij > *, .framer-L5s7X .framer-ikwtg4 > *, .framer-L5s7X .framer-1n0ftg3 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-L5s7X .framer-4zjiij > :first-child, .framer-L5s7X .framer-ikwtg4 > :first-child, .framer-L5s7X .framer-1n0ftg3 > :first-child { margin-left: 0px; } .framer-L5s7X .framer-4zjiij > :last-child, .framer-L5s7X .framer-ikwtg4 > :last-child, .framer-L5s7X .framer-1n0ftg3 > :last-child { margin-right: 0px; } }',
];
var FramergGsg8DxuX = withCSS3(Component, css2, 'framer-L5s7X',);
var stdin_default = FramergGsg8DxuX;
FramergGsg8DxuX.displayName = 'Radio';
FramergGsg8DxuX.defaultProps = { height: 48, width: 48, };
addPropertyControls3(FramergGsg8DxuX, {
  variant: { options: ['r5tWv5mqY', 'nPpSWwiWE',], optionTitles: ['off', 'on',], title: 'Variant', type: ControlType6.Enum, },
},);
addFonts(FramergGsg8DxuX, [],);

// https:https://framerusercontent.com/modules/2hkg5XCE2rQboltCwgjw/pm5Nwf7R4L4y4V92NhuS/vvRGywRFH.js
import { jsx as _jsx4, jsxs as _jsxs2, } from 'react/jsx-runtime';
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
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2, } from 'framer-motion';
import * as React4 from 'react';
var enabledGestures2 = { jy1UKfzw2: { hover: true, pressed: true, }, KDR2W3FAc: { hover: true, pressed: true, }, };
var cycleOrder2 = ['jy1UKfzw2', 'KDR2W3FAc',];
var variantClassNames2 = { jy1UKfzw2: 'framer-v-34fava', KDR2W3FAc: 'framer-v-dxxjoq', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions2 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var transformTemplate = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition2 = ({ value, children, },) => {
  const config = React4.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap2 = { left: 'KDR2W3FAc', right: 'jy1UKfzw2', };
var getProps2 = ({ height, id, width, ...props },) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref = (_variant = humanReadableVariantMap2[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref !== void 0
        ? ref
        : 'jy1UKfzw2',
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo2();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'jy1UKfzw2',
    enabledGestures: enabledGestures2,
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const onTap1gqof9 = activeVariantCallback(async (...args) => {
    setVariant('KDR2W3FAc',);
  },);
  const onTap16ok80 = activeVariantCallback(async (...args) => {
    setVariant('jy1UKfzw2',);
  },);
  const defaultLayoutId = React4.useId();
  return /* @__PURE__ */ _jsx4(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(motion3.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx2('framer-TCiri', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx4(Transition2, {
        value: transition,
        children: /* @__PURE__ */ _jsx4(motion3.div, {
          ...restProps,
          className: cx2('framer-34fava', className2,),
          'data-framer-name': 'right',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'jy1UKfzw2',
          onTap: onTap1gqof9,
          ref,
          style: { ...style, },
          ...addPropertyOverrides2(
            {
              'jy1UKfzw2-hover': { 'data-framer-name': void 0, },
              'jy1UKfzw2-pressed': { 'data-framer-name': void 0, },
              'KDR2W3FAc-hover': { 'data-framer-name': void 0, },
              'KDR2W3FAc-pressed': { 'data-framer-name': void 0, },
              KDR2W3FAc: { 'data-framer-name': 'left', onTap: onTap16ok80, },
            },
            baseVariant,
            gestureVariant,
          ),
          children: /* @__PURE__ */ _jsxs2(motion3.div, {
            className: 'framer-1ooqcgs',
            'data-framer-name': 'Selected=true, State=pressed, Icon=true',
            layoutDependency,
            layoutId: 'Ei4wdAtNu',
            children: [
              /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-5vfx9p',
                'data-framer-name': 'Track',
                layoutDependency,
                layoutId: 'VoK29m1Dm',
                style: {
                  '--border-bottom-width': '0px',
                  '--border-color': 'rgba(0, 0, 0, 0)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                  backgroundColor: 'rgb(0, 105, 115)',
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                },
                variants: {
                  KDR2W3FAc: {
                    '--border-bottom-width': '2px',
                    '--border-color': 'rgb(111, 121, 122)',
                    '--border-left-width': '2px',
                    '--border-right-width': '2px',
                    '--border-style': 'solid',
                    '--border-top-width': '2px',
                    backgroundColor: 'rgb(226, 226, 229)',
                  },
                },
                ...addPropertyOverrides2({ KDR2W3FAc: { 'data-border': true, }, }, baseVariant, gestureVariant,),
              },),
              /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-fh6gm0',
                'data-framer-name': 'Handle container',
                layoutDependency,
                layoutId: 'dMpLVgXmB',
                children: [
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-j9yhje',
                    'data-framer-name': 'State layer',
                    layoutDependency,
                    layoutId: 'u5WCySR2_',
                    style: {
                      backgroundColor: 'rgba(103, 80, 164, 0.12)',
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      opacity: 0,
                    },
                    variants: {
                      'jy1UKfzw2-hover': { opacity: 1, },
                      'jy1UKfzw2-pressed': { opacity: 1, },
                      'KDR2W3FAc-hover': { backgroundColor: 'rgba(29, 27, 32, 0.08)', opacity: 1, },
                      'KDR2W3FAc-pressed': { backgroundColor: 'rgba(29, 27, 32, 0.08)', opacity: 1, },
                    },
                  },),
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-1jzmbae',
                    'data-framer-name': 'Handle',
                    layoutDependency,
                    layoutId: 'DtlSm4uVE',
                    style: {
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderBottomLeftRadius: 23,
                      borderBottomRightRadius: 23,
                      borderTopLeftRadius: 23,
                      borderTopRightRadius: 23,
                    },
                    transformTemplate,
                    variants: {
                      'jy1UKfzw2-hover': { backgroundColor: 'rgb(144, 241, 255)', },
                      'jy1UKfzw2-pressed': { backgroundColor: 'rgb(144, 241, 255)', },
                      'KDR2W3FAc-hover': { backgroundColor: 'rgb(63, 72, 74)', },
                      'KDR2W3FAc-pressed': { backgroundColor: 'rgb(63, 72, 74)', },
                      KDR2W3FAc: {
                        backgroundColor: 'rgb(111, 121, 122)',
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                    },
                  },),
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-2q425d',
                    'data-framer-name': 'Icons/navigate_next',
                    layoutDependency,
                    layoutId: 'xC2098cIf',
                    transformTemplate,
                    children: /* @__PURE__ */ _jsx4(SVG2, {
                      className: 'framer-1b0kmaq',
                      'data-framer-name': 'icon',
                      layout: 'position',
                      layoutDependency,
                      layoutId: 'A4QRMsAMx',
                      opacity: 1,
                      svg:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 0.971 0 L 0.031 0.94 L 3.085 4 L 0.031 7.06 L 0.971 8 L 4.971 4 Z" fill="rgb(0,31,35)"></path></svg>',
                      svgContentId: 227539786,
                      withExternalLayout: true,
                      ...addPropertyOverrides2(
                        {
                          KDR2W3FAc: {
                            svg:
                              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 4.031 0 L 4.971 0.94 L 1.918 4 L 4.971 7.06 L 4.031 8 L 0.031 4 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                            svgContentId: 2477479149,
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                ],
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var css3 = [
  '.framer-TCiri [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-TCiri .framer-1srx8tz { display: block; }',
  '.framer-TCiri .framer-34fava { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-TCiri .framer-1ooqcgs { flex: none; height: 32px; overflow: visible; position: relative; width: 52px; }',
  '.framer-TCiri .framer-5vfx9p { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-TCiri .framer-fh6gm0 { flex: none; height: 48px; overflow: visible; position: absolute; right: -8px; top: calc(50% - 48px / 2); width: 48px; }',
  '.framer-TCiri .framer-j9yhje { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); width: 40px; }',
  '.framer-TCiri .framer-1jzmbae { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 50%; position: absolute; top: 50%; width: 24px; }',
  '.framer-TCiri .framer-2q425d { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 16px; }',
  '.framer-TCiri .framer-1b0kmaq { flex: none; height: 8px; left: 6px; position: absolute; top: 4px; width: 5px; }',
  '.framer-TCiri .framer-v-34fava .framer-34fava, .framer-TCiri .framer-v-dxxjoq .framer-34fava { cursor: pointer; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TCiri .framer-34fava { gap: 0px; } .framer-TCiri .framer-34fava > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-TCiri .framer-34fava > :first-child { margin-top: 0px; } .framer-TCiri .framer-34fava > :last-child { margin-bottom: 0px; } }',
  '.framer-TCiri.framer-v-dxxjoq .framer-fh6gm0 { bottom: -8px; height: unset; left: -8px; right: unset; top: -8px; }',
  '.framer-TCiri.framer-v-dxxjoq .framer-1jzmbae, .framer-TCiri.framer-v-34fava.hover .framer-1jzmbae { left: 50%; top: 50%; }',
  '.framer-TCiri.framer-v-dxxjoq.hover .framer-fh6gm0, .framer-TCiri.framer-v-dxxjoq.pressed .framer-fh6gm0 { height: unset; right: unset; }',
  '.framer-TCiri.framer-v-dxxjoq.pressed .framer-1jzmbae { height: var(--framer-aspect-ratio-supported, 28px); width: 28px; }',
];
var FramervvRGywRFH = withCSS4(Component2, css3, 'framer-TCiri',);
var stdin_default2 = FramervvRGywRFH;
FramervvRGywRFH.displayName = 'Toggle';
FramervvRGywRFH.defaultProps = { height: 32, width: 52, };
addPropertyControls4(FramervvRGywRFH, {
  variant: { options: ['jy1UKfzw2', 'KDR2W3FAc',], optionTitles: ['right', 'left',], title: 'Variant', type: ControlType7.Enum, },
},);
addFonts2(FramervvRGywRFH, [],);

// https:https://framer.com/m/node-type-IpAV.js@dBQfRNTkpNoLwYmhAT4y
var TypewriterFonts = getFonts(TypeWriter,);
var SliderFonts = getFonts(Slider,);
var RadioFonts = getFonts(stdin_default,);
var ToggleFonts = getFonts(stdin_default2,);
var cycleOrder3 = ['wHWVBWbCh', 'u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g',];
var variantClassNames3 = {
  cJW2ksH1e: 'framer-v-cameip',
  u5YClbSTz: 'framer-v-bqdfuj',
  Wfe2yFy4g: 'framer-v-ajsg1n',
  wHWVBWbCh: 'framer-v-ubmi04',
};
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions3 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var negate = (value,) => {
  return !value;
};
var numberToString = (value, options = {}, activeLocale,) => {
  const fallbackLocale = 'en-US';
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
  const number = Number(value,);
  try {
    return number.toLocaleString(locale, formatOptions,);
  } catch {
    try {
      return number.toLocaleString(fallbackLocale, formatOptions,);
    } catch {
      return number.toLocaleString();
    }
  }
};
var convertFromEnum = (value,) => {
  switch (value) {
    case 'zAJDHJhkW':
      return 'nPpSWwiWE';
    default:
      return 'r5tWv5mqY';
  }
};
var convertFromEnum1 = (value,) => {
  switch (value) {
    case 's7bcrIMxH':
      return 'nPpSWwiWE';
    default:
      return 'r5tWv5mqY';
  }
};
var convertFromEnum2 = (value,) => {
  switch (value) {
    case 'jmeUKm4BT':
      return 'nPpSWwiWE';
    default:
      return 'r5tWv5mqY';
  }
};
var convertFromBoolean = (value,) => {
  if (value) {
    return 'jy1UKfzw2';
  } else {
    return 'KDR2W3FAc';
  }
};
var Transition3 = ({ value, children, },) => {
  const config = React5.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap3 = { 'Multiple Choice': 'wHWVBWbCh', Boolean: 'cJW2ksH1e', Input: 'Wfe2yFy4g', Slider: 'u5YClbSTz', };
var getProps3 = (
  {
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
  },
) => {
  var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, _variant, ref8, ref9;
  return {
    ...props,
    AA_oylHc1: booleanToggle !== null && booleanToggle !== void 0 ? booleanToggle : props.AA_oylHc1,
    B9Ye7wHiX: (ref = choice1 !== null && choice1 !== void 0 ? choice1 : props.B9Ye7wHiX) !== null && ref !== void 0 ? ref : 'A',
    cib0E0Vb9: (ref1 = option2 !== null && option2 !== void 0 ? option2 : props.cib0E0Vb9) !== null && ref1 !== void 0 ? ref1 : 'B',
    Cpm7YdhW6: (ref2 = option1 !== null && option1 !== void 0 ? option1 : props.Cpm7YdhW6) !== null && ref2 !== void 0 ? ref2 : 'A',
    dxSidP8LF: (ref3 = choice3 !== null && choice3 !== void 0 ? choice3 : props.dxSidP8LF) !== null && ref3 !== void 0 ? ref3 : 'C',
    eePEcZAuW: (ref4 = option !== null && option !== void 0 ? option : props.eePEcZAuW) !== null && ref4 !== void 0 ? ref4 : 'zAJDHJhkW',
    Gu4Kp5hWx: (ref5 = title !== null && title !== void 0 ? title : props.Gu4Kp5hWx) !== null && ref5 !== void 0 ? ref5 : 'Title',
    kRgq0jgQR: (ref6 = sliiderValue !== null && sliiderValue !== void 0 ? sliiderValue : props.kRgq0jgQR) !== null && ref6 !== void 0
      ? ref6
      : 50,
    NPSt7VsjX: streaming !== null && streaming !== void 0 ? streaming : props.NPSt7VsjX,
    nQb7W3cjE: (ref7 = input !== null && input !== void 0 ? input : props.nQb7W3cjE) !== null && ref7 !== void 0
      ? ref7
      : 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    variant:
      (ref8 = (_variant = humanReadableVariantMap3[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref8 !== void 0
        ? ref8
        : 'wHWVBWbCh',
    yBMe3I4G7: (ref9 = choice2 !== null && choice2 !== void 0 ? choice2 : props.yBMe3I4G7) !== null && ref9 !== void 0 ? ref9 : 'B',
  };
};
var createLayoutDependency3 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component3 = /* @__PURE__ */ React5.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo3();
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
  } = getProps3(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'wHWVBWbCh',
    transitions: transitions3,
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const isDisplayed = () => {
    if (baseVariant === 'Wfe2yFy4g') {
      return false;
    }
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === 'u5YClbSTz') {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === 'u5YClbSTz') {
      return negate(NPSt7VsjX,);
    }
    return true;
  };
  const activeLocaleCode = useLocaleCode();
  const isDisplayed3 = () => {
    if (baseVariant === 'Wfe2yFy4g') {
      return true;
    }
    return false;
  };
  const isDisplayed4 = () => {
    if (baseVariant === 'Wfe2yFy4g') {
      return negate(NPSt7VsjX,);
    }
    return false;
  };
  const isDisplayed5 = () => {
    if (['u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed6 = () => {
    if (baseVariant === 'cJW2ksH1e') {
      return true;
    }
    return false;
  };
  const isDisplayed7 = () => {
    if (baseVariant === 'cJW2ksH1e') {
      return negate(NPSt7VsjX,);
    }
    return true;
  };
  const isDisplayed8 = () => {
    if (baseVariant === 'Wfe2yFy4g') {
      return NPSt7VsjX;
    }
    return true;
  };
  const isDisplayed9 = () => {
    if (baseVariant === 'Wfe2yFy4g') {
      return negate(NPSt7VsjX,);
    }
    return NPSt7VsjX;
  };
  const defaultLayoutId = React5.useId();
  return /* @__PURE__ */ _jsx5(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx5(motion4.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx3('framer-K8vtP', className, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx5(Transition3, {
        value: transition,
        children: /* @__PURE__ */ _jsxs3(motion4.div, {
          ...restProps,
          className: cx3('framer-ubmi04', className2,),
          'data-framer-name': 'Multiple Choice',
          layoutDependency,
          layoutId: 'wHWVBWbCh',
          ref,
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.13)',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            ...style,
          },
          ...addPropertyOverrides3(
            {
              cJW2ksH1e: { 'data-framer-name': 'Boolean', },
              u5YClbSTz: { 'data-framer-name': 'Slider', },
              Wfe2yFy4g: { 'data-framer-name': 'Input', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsxs3(motion4.div, {
              className: 'framer-s8ik11',
              layoutDependency,
              layoutId: 'ZML_QoWcQ',
              children: [
                negate(NPSt7VsjX,) && /* @__PURE__ */ _jsx5(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx5(motion4.p, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                        '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                        '--framer-font-size': '12px',
                        '--framer-letter-spacing': '0px',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                      },
                      children: 'Title',
                    },),
                  },),
                  className: 'framer-lyzunu',
                  'data-framer-name': 'Label',
                  fonts: ['CUSTOM;PP Supply Sans Medium',],
                  layoutDependency,
                  layoutId: 'wpRihfUy1',
                  style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                  text: Gu4Kp5hWx,
                  verticalAlignment: 'center',
                  withExternalLayout: true,
                  ...addPropertyOverrides3(
                    {
                      u5YClbSTz: {
                        children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                          children: /* @__PURE__ */ _jsx5(motion4.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                              '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                            },
                            children: 'Title',
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                  className: 'framer-12y26uo-container',
                  layoutDependency,
                  layoutId: 'epUupU4HK-container',
                  children: /* @__PURE__ */ _jsx5(TypeWriter, {
                    autoStart: true,
                    caretVisibility: false,
                    color: 'rgba(16, 25, 66, 0.64)',
                    cursor: '\u25CF',
                    cursorColor: 'rgba(136, 136, 136, 0.5)',
                    delayNumber: 0.05,
                    delayType: false,
                    font: {
                      fontFamily: 'PP Supply Sans Medium',
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: 0,
                      lineHeight: 1.5,
                      lineHeightPixels: 100,
                      lineHeightType: true,
                      offset: 0,
                      textAlign: 'left',
                      whiteSpace: 'normal',
                    },
                    height: '100%',
                    id: 'epUupU4HK',
                    layoutId: 'epUupU4HK',
                    loop: false,
                    pauseFor: 0,
                    split: false,
                    style: { width: '100%', },
                    tag: 'heading1',
                    text: Gu4Kp5hWx,
                    width: '100%',
                  },),
                },),
              ],
            },),
            isDisplayed1() && /* @__PURE__ */ _jsxs3(motion4.div, {
              className: 'framer-19lcyrf',
              layoutDependency,
              layoutId: 'j2bvRU3DL',
              children: [
                isDisplayed2() && /* @__PURE__ */ _jsx5(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx5(motion4.p, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                        '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                        '--framer-font-size': '10px',
                        '--framer-letter-spacing': '0.35px',
                        '--framer-line-height': '12px',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                      },
                      children: 'Scale-0',
                    },),
                  },),
                  className: 'framer-1kpfvtt',
                  'data-framer-name': 'Label',
                  fonts: ['CUSTOM;PP Supply Sans Medium',],
                  layoutDependency,
                  layoutId: 'HjdLEywsW',
                  style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                  text: Cpm7YdhW6,
                  verticalAlignment: 'center',
                  withExternalLayout: true,
                },),
                NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                  className: 'framer-6epta2-container',
                  layoutDependency,
                  layoutId: 'GjyMm_jMc-container',
                  children: /* @__PURE__ */ _jsx5(TypeWriter, {
                    autoStart: true,
                    caretVisibility: false,
                    color: 'rgb(16, 25, 66)',
                    cursor: '\u25CF',
                    cursorColor: 'rgba(136, 136, 136, 0.5)',
                    delayNumber: 0.06,
                    delayType: false,
                    font: {
                      fontFamily: 'PP Supply Sans Medium',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: 0.35,
                      lineHeight: 1.2,
                      lineHeightPixels: 100,
                      lineHeightType: true,
                      offset: 0,
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    },
                    height: '100%',
                    id: 'GjyMm_jMc',
                    layoutId: 'GjyMm_jMc',
                    loop: false,
                    pauseFor: 1,
                    split: false,
                    style: { width: '100%', },
                    tag: 'heading1',
                    text: Cpm7YdhW6,
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx5(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx5(motion4.p, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFNlbWlib2xk',
                        '--framer-font-family': '"PP Supply Sans Semibold", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-letter-spacing': '0.35px',
                        '--framer-line-height': '12px',
                        '--framer-text-alignment': 'center',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                      },
                      children: 'A',
                    },),
                  },),
                  className: 'framer-841zpz',
                  'data-framer-name': 'Label',
                  fonts: ['CUSTOM;PP Supply Sans Semibold',],
                  layoutDependency,
                  layoutId: 'SzC7v8nfP',
                  style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                  text: numberToString(kRgq0jgQR, { locale: '', notation: 'standard', style: 'decimal', }, activeLocaleCode,),
                  verticalAlignment: 'center',
                  withExternalLayout: true,
                },),
                isDisplayed2() && /* @__PURE__ */ _jsx5(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx5(motion4.p, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                        '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                        '--framer-font-size': '10px',
                        '--framer-letter-spacing': '0.35px',
                        '--framer-line-height': '12px',
                        '--framer-text-alignment': 'right',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                      },
                      children: 'Scale 1',
                    },),
                  },),
                  className: 'framer-1fro32h',
                  'data-framer-name': 'Label',
                  fonts: ['CUSTOM;PP Supply Sans Medium',],
                  layoutDependency,
                  layoutId: 'hfdX7RAnj',
                  style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                  text: cib0E0Vb9,
                  verticalAlignment: 'center',
                  withExternalLayout: true,
                },),
                NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                  className: 'framer-ii7jep-container',
                  layoutDependency,
                  layoutId: 'RaG0o5JJN-container',
                  children: /* @__PURE__ */ _jsx5(TypeWriter, {
                    autoStart: true,
                    caretVisibility: false,
                    color: 'rgb(16, 25, 66)',
                    cursor: '\u25CF',
                    cursorColor: 'rgba(136, 136, 136, 0.5)',
                    delayNumber: 0.06,
                    delayType: false,
                    font: {
                      fontFamily: 'PP Supply Sans Medium',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: 0.35,
                      lineHeight: 1.2,
                      lineHeightPixels: 100,
                      lineHeightType: true,
                      offset: 0,
                      textAlign: 'right',
                      whiteSpace: 'nowrap',
                    },
                    height: '100%',
                    id: 'RaG0o5JJN',
                    layoutId: 'RaG0o5JJN',
                    loop: false,
                    pauseFor: 1,
                    split: false,
                    style: { width: '100%', },
                    tag: 'heading1',
                    text: cib0E0Vb9,
                    width: '100%',
                  },),
                },),
              ],
            },),
            isDisplayed3() && /* @__PURE__ */ _jsxs3(motion4.div, {
              className: 'framer-1vu5yst',
              layoutDependency,
              layoutId: 'S6KvIs150',
              children: [
                isDisplayed4() && /* @__PURE__ */ _jsx5(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx5(motion4.p, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                        '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                        '--framer-font-size': '12px',
                        '--framer-letter-spacing': '0px',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                      },
                      children: 'Title',
                    },),
                  },),
                  className: 'framer-1v7c9ix',
                  'data-framer-name': 'Label',
                  fonts: ['CUSTOM;PP Supply Sans Medium',],
                  layoutDependency,
                  layoutId: 'W06hdtuBX',
                  style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                  text: Gu4Kp5hWx,
                  verticalAlignment: 'center',
                  withExternalLayout: true,
                },),
                NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                  className: 'framer-yrdgrn-container',
                  layoutDependency,
                  layoutId: 'dFtUYLY7q-container',
                  children: /* @__PURE__ */ _jsx5(TypeWriter, {
                    autoStart: true,
                    caretVisibility: false,
                    color: 'rgba(16, 25, 66, 0.64)',
                    cursor: '\u25CF',
                    cursorColor: 'rgba(136, 136, 136, 0.5)',
                    delayNumber: 0.05,
                    delayType: false,
                    font: {
                      fontFamily: 'PP Supply Sans Medium',
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: 0,
                      lineHeight: 1.5,
                      lineHeightPixels: 100,
                      lineHeightType: true,
                      offset: 0,
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    },
                    height: '100%',
                    id: 'dFtUYLY7q',
                    layoutId: 'dFtUYLY7q',
                    loop: false,
                    pauseFor: 0,
                    split: false,
                    style: { width: '100%', },
                    tag: 'heading1',
                    text: Gu4Kp5hWx,
                    width: '100%',
                  },),
                },),
              ],
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx5(motion4.div, {
              className: 'framer-1cypg73',
              layoutDependency,
              layoutId: 'W7v0dnOBr',
              children: isDisplayed1() && /* @__PURE__ */ _jsx5(motion4.div, {
                className: 'framer-j34qcq-container',
                layoutDependency,
                layoutId: 'y3OmF6OSb-container',
                children: /* @__PURE__ */ _jsx5(Slider, {
                  constrainKnob: false,
                  fillColor: 'rgb(0, 105, 115)',
                  height: '100%',
                  id: 'y3OmF6OSb',
                  knobColor: 'rgb(0, 89, 97)',
                  knobSetting: 'Show',
                  knobSize: 16,
                  layoutId: 'y3OmF6OSb',
                  max: 100,
                  min: 0,
                  shadow: 'rgba(0, 0, 0, 0.1)',
                  shouldAnimateChange: true,
                  style: { width: '100%', },
                  trackColor: 'rgb(221, 221, 221)',
                  trackHeight: 4,
                  trackRadius: 2,
                  transition: { damping: 50, delay: 0, stiffness: 750, type: 'spring', },
                  value: kRgq0jgQR,
                  width: '100%',
                },),
              },),
            },),
            isDisplayed5() && /* @__PURE__ */ _jsxs3(motion4.div, {
              className: 'framer-s5cdq5',
              layoutDependency,
              layoutId: 'ueUtpSOCB',
              style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
              children: [
                /* @__PURE__ */ _jsxs3(motion4.div, {
                  className: 'framer-crweby',
                  layoutDependency,
                  layoutId: 'IvlCVPVPf',
                  children: [
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-14jci97-container',
                      layoutDependency,
                      layoutId: 'KJOwPbb8F-container',
                      children: /* @__PURE__ */ _jsx5(stdin_default, {
                        height: '100%',
                        id: 'KJOwPbb8F',
                        layoutId: 'KJOwPbb8F',
                        variant: convertFromEnum(eePEcZAuW,),
                        width: '100%',
                      },),
                    },),
                    NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-1kyowmy-container',
                      layoutDependency,
                      layoutId: 'v9pHCTSvV-container',
                      children: /* @__PURE__ */ _jsx5(TypeWriter, {
                        autoStart: true,
                        caretVisibility: false,
                        color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                        cursor: '\u25CF',
                        cursorColor: 'rgba(136, 136, 136, 0.5)',
                        delayNumber: 0.06,
                        delayType: false,
                        font: {
                          fontFamily: 'PP Supply Sans Medium',
                          fontSize: 16,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.2,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: 'left',
                          whiteSpace: 'nowrap',
                        },
                        height: '100%',
                        id: 'v9pHCTSvV',
                        layoutId: 'v9pHCTSvV',
                        loop: false,
                        pauseFor: 1,
                        split: false,
                        style: { width: '100%', },
                        tag: 'heading1',
                        text: B9Ye7wHiX,
                        width: '100%',
                      },),
                    },),
                    negate(NPSt7VsjX,) && /* @__PURE__ */ _jsx5(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion4.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                            '--framer-letter-spacing': '0.04em',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                          },
                          children: 'Content',
                        },),
                      },),
                      className: 'framer-2mo03c',
                      'data-framer-name': 'Board Dimensions',
                      fonts: ['CUSTOM;PP Supply Sans Medium',],
                      layoutDependency,
                      layoutId: 'Y2BGHzsNx',
                      style: {
                        '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                        '--framer-paragraph-spacing': '0px',
                      },
                      text: B9Ye7wHiX,
                      verticalAlignment: 'center',
                      withExternalLayout: true,
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs3(motion4.div, {
                  className: 'framer-1ferc8i',
                  layoutDependency,
                  layoutId: 'R905nnpUi',
                  children: [
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-1hj9m21-container',
                      layoutDependency,
                      layoutId: 'nN3lKdmks-container',
                      children: /* @__PURE__ */ _jsx5(stdin_default, {
                        height: '100%',
                        id: 'nN3lKdmks',
                        layoutId: 'nN3lKdmks',
                        variant: convertFromEnum1(eePEcZAuW,),
                        width: '100%',
                      },),
                    },),
                    NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-1ofvx9w-container',
                      layoutDependency,
                      layoutId: 'rDpMrm8Tz-container',
                      children: /* @__PURE__ */ _jsx5(TypeWriter, {
                        autoStart: true,
                        caretVisibility: false,
                        color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                        cursor: '\u25CF',
                        cursorColor: 'rgba(136, 136, 136, 0.5)',
                        delayNumber: 0.06,
                        delayType: false,
                        font: {
                          fontFamily: 'PP Supply Sans Medium',
                          fontSize: 16,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.2,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: 'left',
                          whiteSpace: 'nowrap',
                        },
                        height: '100%',
                        id: 'rDpMrm8Tz',
                        layoutId: 'rDpMrm8Tz',
                        loop: false,
                        pauseFor: 1,
                        split: false,
                        style: { width: '100%', },
                        tag: 'heading1',
                        text: yBMe3I4G7,
                        width: '100%',
                      },),
                    },),
                    negate(NPSt7VsjX,) && /* @__PURE__ */ _jsx5(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion4.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                            '--framer-letter-spacing': '0.04em',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                          },
                          children: 'Content',
                        },),
                      },),
                      className: 'framer-1yflnix',
                      'data-framer-name': 'Board Dimensions',
                      fonts: ['CUSTOM;PP Supply Sans Medium',],
                      layoutDependency,
                      layoutId: 'qTrBDLko2',
                      style: {
                        '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                        '--framer-paragraph-spacing': '0px',
                      },
                      text: yBMe3I4G7,
                      verticalAlignment: 'center',
                      withExternalLayout: true,
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs3(motion4.div, {
                  className: 'framer-m3o52p',
                  layoutDependency,
                  layoutId: 'fTVGy5qSW',
                  children: [
                    /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-1tqvnrb-container',
                      layoutDependency,
                      layoutId: 'TK5DtHbAx-container',
                      children: /* @__PURE__ */ _jsx5(stdin_default, {
                        height: '100%',
                        id: 'TK5DtHbAx',
                        layoutId: 'TK5DtHbAx',
                        variant: convertFromEnum2(eePEcZAuW,),
                        width: '100%',
                      },),
                    },),
                    NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-qqau2w-container',
                      layoutDependency,
                      layoutId: 'Vz4vSXp4B-container',
                      children: /* @__PURE__ */ _jsx5(TypeWriter, {
                        autoStart: true,
                        caretVisibility: false,
                        color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                        cursor: '\u25CF',
                        cursorColor: 'rgba(136, 136, 136, 0.5)',
                        delayNumber: 0.06,
                        delayType: false,
                        font: {
                          fontFamily: 'PP Supply Sans Medium',
                          fontSize: 16,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.2,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: 'left',
                          whiteSpace: 'nowrap',
                        },
                        height: '100%',
                        id: 'Vz4vSXp4B',
                        layoutId: 'Vz4vSXp4B',
                        loop: false,
                        pauseFor: 1,
                        split: false,
                        style: { width: '100%', },
                        tag: 'heading1',
                        text: dxSidP8LF,
                        width: '100%',
                      },),
                    },),
                    negate(NPSt7VsjX,) && /* @__PURE__ */ _jsx5(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion4.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                            '--framer-letter-spacing': '0.04em',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                          },
                          children: 'Content',
                        },),
                      },),
                      className: 'framer-yxub92',
                      'data-framer-name': 'Board Dimensions',
                      fonts: ['CUSTOM;PP Supply Sans Medium',],
                      layoutDependency,
                      layoutId: 'o55iN1S8J',
                      style: {
                        '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                        '--framer-paragraph-spacing': '0px',
                      },
                      text: dxSidP8LF,
                      verticalAlignment: 'center',
                      withExternalLayout: true,
                    },),
                  ],
                },),
              ],
            },),
            isDisplayed6() && /* @__PURE__ */ _jsx5(motion4.div, {
              className: 'framer-11t7ch5',
              layoutDependency,
              layoutId: 'gqRV57KH3',
              style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
              children: /* @__PURE__ */ _jsxs3(motion4.div, {
                className: 'framer-mydmw0',
                layoutDependency,
                layoutId: 'a3_Mf4FDG',
                children: [
                  isDisplayed7() && /* @__PURE__ */ _jsx5(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                      children: /* @__PURE__ */ _jsx5(motion4.h4, {
                        className: 'framer-styles-preset-90m2e0',
                        'data-styles-preset': 'ydC9w7qn8',
                        children: 'text',
                      },),
                    },),
                    className: 'framer-1d8zajo',
                    'data-framer-name': 'Board Dimensions',
                    layoutDependency,
                    layoutId: 'gc4hJG9iZ',
                    style: { '--framer-paragraph-spacing': '0px', },
                    text: Cpm7YdhW6,
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                  },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-sbe7bz-container',
                    layoutDependency,
                    layoutId: 'aKuf_fMd7-container',
                    children: /* @__PURE__ */ _jsx5(TypeWriter, {
                      autoStart: true,
                      caretVisibility: false,
                      color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                      cursor: '\u25CF',
                      cursorColor: 'rgba(136, 136, 136, 0.5)',
                      delayNumber: 0.06,
                      delayType: false,
                      font: {
                        fontFamily: 'PP Supply Sans Medium',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        lineHeightPixels: 100,
                        lineHeightType: true,
                        offset: 0,
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                      },
                      height: '100%',
                      id: 'aKuf_fMd7',
                      layoutId: 'aKuf_fMd7',
                      loop: false,
                      pauseFor: 1,
                      split: false,
                      style: { width: '100%', },
                      tag: 'heading1',
                      text: Cpm7YdhW6,
                      width: '100%',
                    },),
                  },),
                  isDisplayed7() && /* @__PURE__ */ _jsx5(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                      children: /* @__PURE__ */ _jsx5(motion4.h4, {
                        className: 'framer-styles-preset-90m2e0',
                        'data-styles-preset': 'ydC9w7qn8',
                        style: { '--framer-text-alignment': 'right', },
                        children: 'Option 2',
                      },),
                    },),
                    className: 'framer-eva85o',
                    'data-framer-name': 'Board Dimensions',
                    layoutDependency,
                    layoutId: 'nHQ0UoEPv',
                    style: { '--framer-paragraph-spacing': '0px', },
                    text: cib0E0Vb9,
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                  },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-13ltp5y-container',
                    layoutDependency,
                    layoutId: 'ddVwnbWnZ-container',
                    children: /* @__PURE__ */ _jsx5(TypeWriter, {
                      autoStart: true,
                      caretVisibility: false,
                      color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                      cursor: '\u25CF',
                      cursorColor: 'rgba(136, 136, 136, 0.5)',
                      delayNumber: 0.06,
                      delayType: false,
                      font: {
                        fontFamily: 'PP Supply Sans Medium',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        lineHeightPixels: 100,
                        lineHeightType: true,
                        offset: 0,
                        textAlign: 'right',
                        whiteSpace: 'nowrap',
                      },
                      height: '100%',
                      id: 'ddVwnbWnZ',
                      layoutId: 'ddVwnbWnZ',
                      loop: false,
                      pauseFor: 1,
                      split: false,
                      style: { width: '100%', },
                      tag: 'heading1',
                      text: cib0E0Vb9,
                      width: '100%',
                    },),
                  },),
                  /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-11ipqiw-container',
                    layoutDependency,
                    layoutId: 'pYbKGMi0I-container',
                    children: /* @__PURE__ */ _jsx5(stdin_default2, {
                      height: '100%',
                      id: 'pYbKGMi0I',
                      layoutId: 'pYbKGMi0I',
                      variant: convertFromBoolean(AA_oylHc1,),
                      width: '100%',
                    },),
                  },),
                ],
              },),
            },),
            isDisplayed3() && /* @__PURE__ */ _jsx5(motion4.div, {
              className: 'framer-1cyqgqh',
              'data-framer-name': 'Input',
              layoutDependency,
              layoutId: 'nImH06vgx',
              style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
              children: /* @__PURE__ */ _jsxs3(motion4.div, {
                className: 'framer-o1k220',
                'data-framer-name': 'Content',
                layoutDependency,
                layoutId: 'EbqS70Gxh',
                children: [
                  isDisplayed8() && /* @__PURE__ */ _jsx5(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                      children: /* @__PURE__ */ _jsx5(motion4.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                          '--framer-letter-spacing': '0.5px',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                        },
                        children: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      },),
                    },),
                    className: 'framer-ivgzyi',
                    'data-framer-name': 'Value',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
                    layoutDependency,
                    layoutId: 'sytYy87Uv',
                    style: {
                      '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                      '--framer-paragraph-spacing': '0px',
                    },
                    text: nQb7W3cjE,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                  isDisplayed9() && /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-5wsa7o-container',
                    layoutDependency,
                    layoutId: 'jC8ftCsb3-container',
                    children: /* @__PURE__ */ _jsx5(TypeWriter, {
                      autoStart: true,
                      caretVisibility: false,
                      color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                      cursor: '|',
                      cursorColor: 'rgba(136, 136, 136, 0.5)',
                      delayNumber: 0.1,
                      delayType: false,
                      font: {
                        fontFamily: 'PP Supply Sans Light',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0.5,
                        lineHeight: 1.5,
                        lineHeightPixels: 100,
                        lineHeightType: true,
                        offset: 0,
                        textAlign: 'left',
                        whiteSpace: 'normal',
                      },
                      height: '100%',
                      id: 'jC8ftCsb3',
                      layoutId: 'jC8ftCsb3',
                      loop: true,
                      pauseFor: 2,
                      split: false,
                      style: { width: '100%', },
                      tag: 'heading1',
                      text: nQb7W3cjE,
                      width: '100%',
                    },),
                  },),
                  /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-15wkik3',
                    'data-framer-name': 'Adorn. End Container',
                    layoutDependency,
                    layoutId: 'lZW8el5CE',
                    children: /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-9cc7lb',
                      'data-framer-name': 'AdornmentEnd',
                      layoutDependency,
                      layoutId: 'gXObIIVW8',
                      children: /* @__PURE__ */ _jsx5(SVG3, {
                        className: 'framer-3bebcg',
                        'data-framer-name': 'Vector',
                        layout: 'position',
                        layoutDependency,
                        layoutId: 'ZAN56s7P_',
                        opacity: 1,
                        svg:
                          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><path d="M 1.967 15.5 L 3.04 15.5 L 12.934 5.606 L 11.861 4.533 L 1.967 14.427 Z M 15.074 4.887 L 12.574 2.398 L 13.782 1.19 C 13.986 0.987 14.229 0.885 14.512 0.885 C 14.795 0.885 15.038 0.987 15.242 1.19 L 16.276 2.225 C 16.48 2.429 16.584 2.67 16.588 2.949 C 16.592 3.228 16.492 3.469 16.288 3.673 Z M 14.355 5.612 L 3.467 16.5 L 0.967 16.5 L 0.967 14 L 11.855 3.112 Z M 12.388 5.06 L 11.861 4.533 L 12.934 5.606 Z" fill="var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {&quot;name&quot;:&quot;Space&quot;} */"></path></svg>',
                        svgContentId: 1338201683,
                        withExternalLayout: true,
                      },),
                    },),
                  },),
                ],
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css4 = [
  '.framer-K8vtP [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-K8vtP .framer-17k9lcm { display: block; }',
  '.framer-K8vtP .framer-ubmi04 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-K8vtP .framer-s8ik11 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 10px 0px 10px; position: relative; width: auto; }',
  '.framer-K8vtP .framer-lyzunu, .framer-K8vtP .framer-1kpfvtt, .framer-K8vtP .framer-841zpz, .framer-K8vtP .framer-1fro32h { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-K8vtP .framer-12y26uo-container, .framer-K8vtP .framer-6epta2-container, .framer-K8vtP .framer-ii7jep-container, .framer-K8vtP .framer-j34qcq-container, .framer-K8vtP .framer-1kyowmy-container, .framer-K8vtP .framer-1ofvx9w-container, .framer-K8vtP .framer-qqau2w-container, .framer-K8vtP .framer-sbe7bz-container, .framer-K8vtP .framer-13ltp5y-container, .framer-K8vtP .framer-5wsa7o-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
  '.framer-K8vtP .framer-19lcyrf { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 9px 10px; position: relative; width: auto; }',
  '.framer-K8vtP .framer-1vu5yst { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 201px; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }',
  '.framer-K8vtP .framer-1v7c9ix { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-K8vtP .framer-yrdgrn-container { flex: none; height: auto; position: relative; width: 100%; }',
  '.framer-K8vtP .framer-1cypg73 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 24px; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }',
  '.framer-K8vtP .framer-s5cdq5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 5px 0px 5px 0px; position: relative; width: 277px; }',
  '.framer-K8vtP .framer-crweby, .framer-K8vtP .framer-1ferc8i, .framer-K8vtP .framer-m3o52p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-K8vtP .framer-14jci97-container, .framer-K8vtP .framer-1hj9m21-container, .framer-K8vtP .framer-1tqvnrb-container, .framer-K8vtP .framer-11ipqiw-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-K8vtP .framer-2mo03c, .framer-K8vtP .framer-1yflnix, .framer-K8vtP .framer-yxub92, .framer-K8vtP .framer-1d8zajo, .framer-K8vtP .framer-eva85o { flex: 1 0 0px; height: 24px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-K8vtP .framer-11t7ch5 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 8px 12px 8px 12px; position: relative; width: auto; }',
  '.framer-K8vtP .framer-mydmw0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 213px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-K8vtP .framer-1cyqgqh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 9px 12px 8px 12px; position: relative; width: min-content; }',
  '.framer-K8vtP .framer-o1k220 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 253px; }',
  '.framer-K8vtP .framer-ivgzyi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 221px; word-break: break-word; word-wrap: break-word; }',
  '.framer-K8vtP .framer-15wkik3 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-K8vtP .framer-9cc7lb { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; }',
  '.framer-K8vtP .framer-3bebcg { flex: none; height: 17px; left: 4px; position: absolute; top: 4px; width: 17px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-K8vtP .framer-ubmi04, .framer-K8vtP .framer-s8ik11, .framer-K8vtP .framer-19lcyrf, .framer-K8vtP .framer-1vu5yst, .framer-K8vtP .framer-1cypg73, .framer-K8vtP .framer-s5cdq5, .framer-K8vtP .framer-crweby, .framer-K8vtP .framer-1ferc8i, .framer-K8vtP .framer-m3o52p, .framer-K8vtP .framer-1cyqgqh, .framer-K8vtP .framer-o1k220, .framer-K8vtP .framer-15wkik3 { gap: 0px; } .framer-K8vtP .framer-ubmi04 > *, .framer-K8vtP .framer-s5cdq5 > *, .framer-K8vtP .framer-15wkik3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-K8vtP .framer-ubmi04 > :first-child, .framer-K8vtP .framer-1vu5yst > :first-child, .framer-K8vtP .framer-s5cdq5 > :first-child, .framer-K8vtP .framer-1cyqgqh > :first-child, .framer-K8vtP .framer-15wkik3 > :first-child { margin-top: 0px; } .framer-K8vtP .framer-ubmi04 > :last-child, .framer-K8vtP .framer-1vu5yst > :last-child, .framer-K8vtP .framer-s5cdq5 > :last-child, .framer-K8vtP .framer-1cyqgqh > :last-child, .framer-K8vtP .framer-15wkik3 > :last-child { margin-bottom: 0px; } .framer-K8vtP .framer-s8ik11 > *, .framer-K8vtP .framer-19lcyrf > *, .framer-K8vtP .framer-1cypg73 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-K8vtP .framer-s8ik11 > :first-child, .framer-K8vtP .framer-19lcyrf > :first-child, .framer-K8vtP .framer-1cypg73 > :first-child, .framer-K8vtP .framer-crweby > :first-child, .framer-K8vtP .framer-1ferc8i > :first-child, .framer-K8vtP .framer-m3o52p > :first-child, .framer-K8vtP .framer-o1k220 > :first-child { margin-left: 0px; } .framer-K8vtP .framer-s8ik11 > :last-child, .framer-K8vtP .framer-19lcyrf > :last-child, .framer-K8vtP .framer-1cypg73 > :last-child, .framer-K8vtP .framer-crweby > :last-child, .framer-K8vtP .framer-1ferc8i > :last-child, .framer-K8vtP .framer-m3o52p > :last-child, .framer-K8vtP .framer-o1k220 > :last-child { margin-right: 0px; } .framer-K8vtP .framer-1vu5yst > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-K8vtP .framer-crweby > *, .framer-K8vtP .framer-1ferc8i > *, .framer-K8vtP .framer-m3o52p > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-K8vtP .framer-1cyqgqh > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-K8vtP .framer-o1k220 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }',
  '.framer-K8vtP.framer-v-bqdfuj .framer-ubmi04 { width: 203px; }',
  '.framer-K8vtP.framer-v-bqdfuj .framer-s8ik11, .framer-K8vtP.framer-v-cameip .framer-s8ik11 { align-self: unset; order: 0; width: 100%; }',
  '.framer-K8vtP.framer-v-bqdfuj .framer-19lcyrf { align-self: unset; order: 2; width: 100%; }',
  '.framer-K8vtP.framer-v-bqdfuj .framer-1cypg73 { align-self: unset; min-height: unset; order: 1; width: 100%; }',
  '.framer-K8vtP.framer-v-cameip .framer-ubmi04 { width: 243px; }',
  '.framer-K8vtP.framer-v-cameip .framer-11t7ch5 { align-self: unset; order: 3; width: 100%; }',
  '.framer-K8vtP.framer-v-cameip .framer-mydmw0 { height: 32px; order: 0; }',
  '.framer-K8vtP.framer-v-cameip .framer-1d8zajo { order: 0; }',
  '.framer-K8vtP.framer-v-cameip .framer-sbe7bz-container { order: 1; }',
  '.framer-K8vtP.framer-v-cameip .framer-eva85o { order: 3; }',
  '.framer-K8vtP.framer-v-cameip .framer-13ltp5y-container, .framer-K8vtP.framer-v-ajsg1n .framer-1cyqgqh { order: 4; }',
  '.framer-K8vtP.framer-v-cameip .framer-11ipqiw-container { order: 2; }',
  '.framer-K8vtP.framer-v-ajsg1n .framer-ubmi04 { width: 277px; }',
  '.framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst { align-self: unset; flex-direction: row; min-height: unset; order: 0; width: 100%; }',
  '.framer-K8vtP.framer-v-ajsg1n .framer-1v7c9ix, .framer-K8vtP.framer-v-ajsg1n .framer-yrdgrn-container { flex: 1 0 0px; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst { gap: 0px; } .framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst > :first-child { margin-left: 0px; } .framer-K8vtP.framer-v-ajsg1n .framer-1vu5yst > :last-child { margin-right: 0px; } }',
  ...css,
];
var FramerFpOKcRGFb = withCSS5(Component3, css4, 'framer-K8vtP',);
var stdin_default3 = FramerFpOKcRGFb;
FramerFpOKcRGFb.displayName = 'node-type';
FramerFpOKcRGFb.defaultProps = { height: 134, width: 277, };
addPropertyControls5(FramerFpOKcRGFb, {
  variant: {
    options: ['wHWVBWbCh', 'u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g',],
    optionTitles: ['Multiple Choice', 'Slider', 'Boolean', 'Input',],
    title: 'Variant',
    type: ControlType8.Enum,
  },
  eePEcZAuW: {
    defaultValue: 'zAJDHJhkW',
    options: ['zAJDHJhkW', 's7bcrIMxH', 'jmeUKm4BT',],
    optionTitles: ['Option 1', 'Option 2', 'Option 3',],
    title: 'Option',
    type: ControlType8.Enum,
  },
  kRgq0jgQR: { defaultValue: 50, displayStepper: false, max: 100, min: 0, title: 'Sliider Value', type: ControlType8.Number, },
  Cpm7YdhW6: { defaultValue: 'A', placeholder: 'A', title: 'Option 1', type: ControlType8.String, },
  cib0E0Vb9: { defaultValue: 'B', displayTextArea: false, placeholder: 'B', title: 'Option 2', type: ControlType8.String, },
  B9Ye7wHiX: { defaultValue: 'A', placeholder: 'A', title: 'Choice 1', type: ControlType8.String, },
  yBMe3I4G7: { defaultValue: 'B', placeholder: 'B', title: 'Choice 2', type: ControlType8.String, },
  dxSidP8LF: { defaultValue: 'C', placeholder: 'C', title: 'Choice 3', type: ControlType8.String, },
  NPSt7VsjX: { defaultValue: false, title: 'Streaming', type: ControlType8.Boolean, },
  Gu4Kp5hWx: { defaultValue: 'Title', displayTextArea: false, placeholder: 'Title', title: 'Title', type: ControlType8.String, },
  nQb7W3cjE: {
    defaultValue: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    displayTextArea: true,
    title: 'Input',
    type: ControlType8.String,
  },
  AA_oylHc1: { defaultValue: false, title: 'Boolean Toggle', type: ControlType8.Boolean, },
},);
addFonts3(FramerFpOKcRGFb, [
  {
    family: 'PP Supply Sans Medium',
    moduleAsset: {
      localModuleIdentifier: 'local-module:canvasComponent/FpOKcRGFb:default',
      url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf',
    },
    url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf',
  },
  {
    family: 'PP Supply Sans Semibold',
    moduleAsset: {
      localModuleIdentifier: 'local-module:canvasComponent/FpOKcRGFb:default',
      url: 'https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf',
    },
    url: 'https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf',
  },
  {
    family: 'PP Supply Sans Light',
    moduleAsset: {
      localModuleIdentifier: 'local-module:canvasComponent/FpOKcRGFb:default',
      url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf',
    },
    url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf',
  },
  ...TypewriterFonts,
  ...SliderFonts,
  ...RadioFonts,
  ...ToggleFonts,
  ...fonts,
],);

// node_type.js
import { WithFramerBreakpoints, } from 'installable-framer/dist/react';
import { jsx, } from 'react/jsx-runtime';
stdin_default3.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default3, ...props, },);
};
var node_type_default = stdin_default3;
export { node_type_default as default, };
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
