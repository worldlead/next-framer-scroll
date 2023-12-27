'use client';
var __defProp = Object.defineProperty;
var __export = (target, all,) => {
  for (var name in all) {
    __defProp(target, name, { get: all[name], enumerable: true, },);
  }
};

// https:https://framer.com/m/FYLO-COMPOSITION-5nyv.js@S5rHpqacrRxOsXxBZaGG
import { jsx as _jsx8, jsxs as _jsxs6, } from 'react/jsx-runtime';
import {
  addFonts as addFonts6,
  addPropertyControls as addPropertyControls8,
  ControlType as ControlType11,
  cx as cx6,
  getFonts as getFonts5,
  RichText as RichText5,
  SVG as SVG6,
  useActiveVariantCallback as useActiveVariantCallback3,
  useLocaleInfo as useLocaleInfo6,
  useOnVariantChange,
  useVariantState as useVariantState6,
  withCSS as withCSS8,
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup6, motion as motion7, MotionConfigContext as MotionConfigContext6, } from 'framer-motion';
import * as React8 from 'react';

// https:https://framerusercontent.com/modules/Oud72c2V1Mr3Jz9fGInx/PMc2ZIa5dlMK1YzuFBmG/C_odUWZqr.js
import { jsx as _jsx6, jsxs as _jsxs4, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls6,
  ControlType as ControlType9,
  cx as cx4,
  getFonts as getFonts3,
  getPropertyControls as getPropertyControls2,
  RichText as RichText3,
  SVG as SVG4,
  useActiveVariantCallback as useActiveVariantCallback2,
  useLocaleInfo as useLocaleInfo4,
  useVariantState as useVariantState4,
  withCSS as withCSS6,
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup4, motion as motion5, MotionConfigContext as MotionConfigContext4, } from 'framer-motion';
import * as React6 from 'react';

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
var De = (t3, o3,) => () => (o3 || t3((o3 = { exports: {}, }).exports, o3,), o3.exports);
var vn = (t3, o3,) => {
  for (var c3 in o3) {
    Ie(t3, c3, { get: o3[c3], enumerable: true, },);
  }
};
var je = (t3, o3, c3, y3,) => {
  if (o3 && typeof o3 == 'object' || typeof o3 == 'function') {
    for (let l3 of ln(o3,)) {
      !dn.call(t3, l3,) && l3 !== c3 && Ie(t3, l3, { get: () => o3[l3], enumerable: !(y3 = fn(o3, l3,)) || y3.enumerable, },);
    }
  }
  return t3;
};
var F = (t3, o3, c3,) => (je(t3, o3, 'default',), c3 && je(c3, o3, 'default',));
var jr = (
  t3,
  o3,
  c3,
) => (c3 = t3 != null ? cn(pn(t3,),) : {},
  je(o3 || !t3 || !t3.__esModule ? Ie(c3, 'default', { value: t3, enumerable: true, },) : c3, t3,));
var Yr = De((p3,) => {
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
  function Sn(t3,) {
    return t3 === null || typeof t3 != 'object' ? null : (t3 = Ir && t3[Ir] || t3['@@iterator'], typeof t3 == 'function' ? t3 : null);
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
  function z(t3, o3, c3,) {
    this.props = t3, this.context = o3, this.refs = Nr, this.updater = c3 || Fr;
  }
  z.prototype.isReactComponent = {};
  z.prototype.setState = function (t3, o3,) {
    if (typeof t3 != 'object' && typeof t3 != 'function' && t3 != null) {
      throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.',);
    }
    this.updater.enqueueSetState(this, t3, o3, 'setState',);
  };
  z.prototype.forceUpdate = function (t3,) {
    this.updater.enqueueForceUpdate(this, t3, 'forceUpdate',);
  };
  function Mr() {
  }
  Mr.prototype = z.prototype;
  function Fe(t3, o3, c3,) {
    this.props = t3, this.context = o3, this.refs = Nr, this.updater = c3 || Fr;
  }
  var Le = Fe.prototype = new Mr();
  Le.constructor = Fe;
  Lr(Le, z.prototype,);
  Le.isPureReactComponent = true;
  var Dr = Array.isArray,
    Vr = Object.prototype.hasOwnProperty,
    Ne = { current: null, },
    Ur = { key: true, ref: true, __self: true, __source: true, };
  function Wr(t3, o3, c3,) {
    var y3, l3 = {}, b2 = null, C2 = null;
    if (o3 != null) {
      for (y3 in o3.ref !== void 0 && (C2 = o3.ref), o3.key !== void 0 && (b2 = '' + o3.key), o3) {
        Vr.call(o3, y3,) && !Ur.hasOwnProperty(y3,) && (l3[y3] = o3[y3]);
      }
    }
    var g3 = arguments.length - 2;
    if (g3 === 1) {
      l3.children = c3;
    } else if (1 < g3) {
      for (var m3 = Array(g3,), T = 0; T < g3; T++) {
        m3[T] = arguments[T + 2];
      }
      l3.children = m3;
    }
    if (t3 && t3.defaultProps) {
      for (y3 in g3 = t3.defaultProps, g3) {
        l3[y3] === void 0 && (l3[y3] = g3[y3]);
      }
    }
    return { $$typeof: G, type: t3, key: b2, ref: C2, props: l3, _owner: Ne.current, };
  }
  function On(t3, o3,) {
    return { $$typeof: G, type: t3.type, key: o3, ref: t3.ref, props: t3.props, _owner: t3._owner, };
  }
  function Me(t3,) {
    return typeof t3 == 'object' && t3 !== null && t3.$$typeof === G;
  }
  function Tn(t3,) {
    var o3 = { '=': '=0', ':': '=2', };
    return '$' + t3.replace(/[=:]/g, function (c3,) {
      return o3[c3];
    },);
  }
  var $r = /\/+/g;
  function $e(t3, o3,) {
    return typeof t3 == 'object' && t3 !== null && t3.key != null ? Tn('' + t3.key,) : o3.toString(36,);
  }
  function fe(t3, o3, c3, y3, l3,) {
    var b2 = typeof t3;
    (b2 === 'undefined' || b2 === 'boolean') && (t3 = null);
    var C2 = false;
    if (t3 === null) {
      C2 = true;
    } else {
      switch (b2) {
        case 'string':
        case 'number':
          C2 = true;
          break;
        case 'object':
          switch (t3.$$typeof) {
            case G:
            case yn:
              C2 = true;
          }
      }
    }
    if (C2) {
      return C2 = t3,
        l3 = l3(C2,),
        t3 = y3 === '' ? '.' + $e(C2, 0,) : y3,
        Dr(l3,)
          ? (c3 = '',
            t3 != null && (c3 = t3.replace($r, '$&/',) + '/'),
            fe(l3, o3, c3, '', function (T,) {
              return T;
            },))
          : l3 != null &&
          (Me(l3,) && (l3 = On(l3, c3 + (!l3.key || C2 && C2.key === l3.key ? '' : ('' + l3.key).replace($r, '$&/',) + '/') + t3,)),
            o3.push(l3,)),
        1;
    }
    if (C2 = 0, y3 = y3 === '' ? '.' : y3 + ':', Dr(t3,)) {
      for (var g3 = 0; g3 < t3.length; g3++) {
        b2 = t3[g3];
        var m3 = y3 + $e(b2, g3,);
        C2 += fe(b2, o3, c3, m3, l3,);
      }
    } else if (m3 = Sn(t3,), typeof m3 == 'function') {
      for (t3 = m3.call(t3,), g3 = 0; !(b2 = t3.next()).done;) {
        b2 = b2.value, m3 = y3 + $e(b2, g3++,), C2 += fe(b2, o3, c3, m3, l3,);
      }
    } else if (b2 === 'object') {
      throw o3 = String(t3,),
      Error(
        'Objects are not valid as a React child (found: ' +
        (o3 === '[object Object]' ? 'object with keys {' + Object.keys(t3,).join(', ',) + '}' : o3) +
        '). If you meant to render a collection of children, use an array instead.',
      );
    }
    return C2;
  }
  function ce(t3, o3, c3,) {
    if (t3 == null) {
      return t3;
    }
    var y3 = [], l3 = 0;
    return fe(t3, y3, '', '', function (b2,) {
      return o3.call(c3, b2, l3++,);
    },),
      y3;
  }
  function kn(t3,) {
    if (t3._status === -1) {
      var o3 = t3._result;
      o3 = o3(),
        o3.then(function (c3,) {
          (t3._status === 0 || t3._status === -1) && (t3._status = 1, t3._result = c3);
        }, function (c3,) {
          (t3._status === 0 || t3._status === -1) && (t3._status = 2, t3._result = c3);
        },),
        t3._status === -1 && (t3._status = 0, t3._result = o3);
    }
    if (t3._status === 1) {
      return t3._result.default;
    }
    throw t3._result;
  }
  var x3 = { current: null, },
    le = { transition: null, },
    Pn = { ReactCurrentDispatcher: x3, ReactCurrentBatchConfig: le, ReactCurrentOwner: Ne, };
  p3.Children = {
    map: ce,
    forEach: function (t3, o3, c3,) {
      ce(t3, function () {
        o3.apply(this, arguments,);
      }, c3,);
    },
    count: function (t3,) {
      var o3 = 0;
      return ce(t3, function () {
        o3++;
      },),
        o3;
    },
    toArray: function (t3,) {
      return ce(t3, function (o3,) {
        return o3;
      },) || [];
    },
    only: function (t3,) {
      if (!Me(t3,)) {
        throw Error('React.Children.only expected to receive a single React element child.',);
      }
      return t3;
    },
  };
  p3.Component = z;
  p3.Fragment = hn;
  p3.Profiler = _n;
  p3.PureComponent = Fe;
  p3.StrictMode = mn;
  p3.Suspense = Rn;
  p3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pn;
  p3.cloneElement = function (t3, o3, c3,) {
    if (t3 == null) {
      throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + t3 + '.',);
    }
    var y3 = Lr({}, t3.props,), l3 = t3.key, b2 = t3.ref, C2 = t3._owner;
    if (o3 != null) {
      if (o3.ref !== void 0 && (b2 = o3.ref, C2 = Ne.current), o3.key !== void 0 && (l3 = '' + o3.key), t3.type && t3.type.defaultProps) {
        var g3 = t3.type.defaultProps;
      }
      for (m3 in o3) {
        Vr.call(o3, m3,) && !Ur.hasOwnProperty(m3,) && (y3[m3] = o3[m3] === void 0 && g3 !== void 0 ? g3[m3] : o3[m3]);
      }
    }
    var m3 = arguments.length - 2;
    if (m3 === 1) {
      y3.children = c3;
    } else if (1 < m3) {
      g3 = Array(m3,);
      for (var T = 0; T < m3; T++) {
        g3[T] = arguments[T + 2];
      }
      y3.children = g3;
    }
    return { $$typeof: G, type: t3.type, key: l3, ref: b2, props: y3, _owner: C2, };
  };
  p3.createContext = function (t3,) {
    return t3 = {
      $$typeof: bn,
      _currentValue: t3,
      _currentValue2: t3,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    },
      t3.Provider = { $$typeof: gn, _context: t3, },
      t3.Consumer = t3;
  };
  p3.createElement = Wr;
  p3.createFactory = function (t3,) {
    var o3 = Wr.bind(null, t3,);
    return o3.type = t3, o3;
  };
  p3.createRef = function () {
    return { current: null, };
  };
  p3.forwardRef = function (t3,) {
    return { $$typeof: En, render: t3, };
  };
  p3.isValidElement = Me;
  p3.lazy = function (t3,) {
    return { $$typeof: wn, _payload: { _status: -1, _result: t3, }, _init: kn, };
  };
  p3.memo = function (t3, o3,) {
    return { $$typeof: Cn, type: t3, compare: o3 === void 0 ? null : o3, };
  };
  p3.startTransition = function (t3,) {
    var o3 = le.transition;
    le.transition = {};
    try {
      t3();
    } finally {
      le.transition = o3;
    }
  };
  p3.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.',);
  };
  p3.useCallback = function (t3, o3,) {
    return x3.current.useCallback(t3, o3,);
  };
  p3.useContext = function (t3,) {
    return x3.current.useContext(t3,);
  };
  p3.useDebugValue = function () {
  };
  p3.useDeferredValue = function (t3,) {
    return x3.current.useDeferredValue(t3,);
  };
  p3.useEffect = function (t3, o3,) {
    return x3.current.useEffect(t3, o3,);
  };
  p3.useId = function () {
    return x3.current.useId();
  };
  p3.useImperativeHandle = function (t3, o3, c3,) {
    return x3.current.useImperativeHandle(t3, o3, c3,);
  };
  p3.useInsertionEffect = function (t3, o3,) {
    return x3.current.useInsertionEffect(t3, o3,);
  };
  p3.useLayoutEffect = function (t3, o3,) {
    return x3.current.useLayoutEffect(t3, o3,);
  };
  p3.useMemo = function (t3, o3,) {
    return x3.current.useMemo(t3, o3,);
  };
  p3.useReducer = function (t3, o3, c3,) {
    return x3.current.useReducer(t3, o3, c3,);
  };
  p3.useRef = function (t3,) {
    return x3.current.useRef(t3,);
  };
  p3.useState = function (t3,) {
    return x3.current.useState(t3,);
  };
  p3.useSyncExternalStore = function (t3, o3, c3,) {
    return x3.current.useSyncExternalStore(t3, o3, c3,);
  };
  p3.useTransition = function () {
    return x3.current.useTransition();
  };
  p3.version = '18.2.0';
},);
var zr = De((d3, pe,) => {
  'use strict';
  (function () {
    'use strict';
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == 'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error(),);
    var t3 = '18.2.0',
      o3 = Symbol.for('react.element',),
      c3 = Symbol.for('react.portal',),
      y3 = Symbol.for('react.fragment',),
      l3 = Symbol.for('react.strict_mode',),
      b2 = Symbol.for('react.profiler',),
      C2 = Symbol.for('react.provider',),
      g3 = Symbol.for('react.context',),
      m3 = Symbol.for('react.forward_ref',),
      T = Symbol.for('react.suspense',),
      de = Symbol.for('react.suspense_list',),
      L = Symbol.for('react.memo',),
      Q = Symbol.for('react.lazy',),
      Kr = Symbol.for('react.offscreen',),
      We = Symbol.iterator,
      qr = '@@iterator';
    function Ye(e3,) {
      if (e3 === null || typeof e3 != 'object') {
        return null;
      }
      var r4 = We && e3[We] || e3[qr];
      return typeof r4 == 'function' ? r4 : null;
    }
    var ze = { current: null, },
      N = { transition: null, },
      k2 = { current: null, isBatchingLegacy: false, didScheduleLegacyUpdate: false, },
      A2 = { current: null, },
      B2 = {},
      J = null;
    function Be(e3,) {
      J = e3;
    }
    B2.setExtraStackFrame = function (e3,) {
      J = e3;
    },
      B2.getCurrentStack = null,
      B2.getStackAddendum = function () {
        var e3 = '';
        J && (e3 += J);
        var r4 = B2.getCurrentStack;
        return r4 && (e3 += r4() || ''), e3;
      };
    var Gr = false,
      Qr = false,
      Jr = false,
      Xr = false,
      Zr = false,
      M2 = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: N, ReactCurrentOwner: A2, };
    M2.ReactDebugCurrentFrame = B2, M2.ReactCurrentActQueue = k2;
    function V(e3,) {
      {
        for (var r4 = arguments.length, n3 = new Array(r4 > 1 ? r4 - 1 : 0,), a3 = 1; a3 < r4; a3++) {
          n3[a3 - 1] = arguments[a3];
        }
        He('warn', e3, n3,);
      }
    }
    function h3(e3,) {
      {
        for (var r4 = arguments.length, n3 = new Array(r4 > 1 ? r4 - 1 : 0,), a3 = 1; a3 < r4; a3++) {
          n3[a3 - 1] = arguments[a3];
        }
        He('error', e3, n3,);
      }
    }
    function He(e3, r4, n3,) {
      {
        var a3 = M2.ReactDebugCurrentFrame, u2 = a3.getStackAddendum();
        u2 !== '' && (r4 += '%s', n3 = n3.concat([u2,],));
        var s3 = n3.map(function (i3,) {
          return String(i3,);
        },);
        s3.unshift('Warning: ' + r4,), Function.prototype.apply.call(console[e3], console, s3,);
      }
    }
    var Ke = {};
    function ve(e3, r4,) {
      {
        var n3 = e3.constructor, a3 = n3 && (n3.displayName || n3.name) || 'ReactClass', u2 = a3 + '.' + r4;
        if (Ke[u2]) {
          return;
        }
        h3(
          'Can\'t call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.',
          r4,
          a3,
        ), Ke[u2] = true;
      }
    }
    var qe = {
      isMounted: function (e3,) {
        return false;
      },
      enqueueForceUpdate: function (e3, r4, n3,) {
        ve(e3, 'forceUpdate',);
      },
      enqueueReplaceState: function (e3, r4, n3, a3,) {
        ve(e3, 'replaceState',);
      },
      enqueueSetState: function (e3, r4, n3, a3,) {
        ve(e3, 'setState',);
      },
    },
      j2 = Object.assign,
      ye = {};
    Object.freeze(ye,);
    function $(e3, r4, n3,) {
      this.props = e3, this.context = r4, this.refs = ye, this.updater = n3 || qe;
    }
    $.prototype.isReactComponent = {},
      $.prototype.setState = function (e3, r4,) {
        if (typeof e3 != 'object' && typeof e3 != 'function' && e3 != null) {
          throw new Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
          );
        }
        this.updater.enqueueSetState(this, e3, r4, 'setState',);
      },
      $.prototype.forceUpdate = function (e3,) {
        this.updater.enqueueForceUpdate(this, e3, 'forceUpdate',);
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
        et = function (e3, r4,) {
          Object.defineProperty($.prototype, e3, {
            get: function () {
              V('%s(...) is deprecated in plain JavaScript React classes. %s', r4[0], r4[1],);
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
    function _e(e3, r4, n3,) {
      this.props = e3, this.context = r4, this.refs = ye, this.updater = n3 || qe;
    }
    var ge = _e.prototype = new Ge();
    ge.constructor = _e, j2(ge, $.prototype,), ge.isPureReactComponent = true;
    function rt() {
      var e3 = { current: null, };
      return Object.seal(e3,), e3;
    }
    var tt = Array.isArray;
    function X3(e3,) {
      return tt(e3,);
    }
    function nt(e3,) {
      {
        var r4 = typeof Symbol == 'function' && Symbol.toStringTag, n3 = r4 && e3[Symbol.toStringTag] || e3.constructor.name || 'Object';
        return n3;
      }
    }
    function at2(e3,) {
      try {
        return Qe(e3,), false;
      } catch {
        return true;
      }
    }
    function Qe(e3,) {
      return '' + e3;
    }
    function Z(e3,) {
      if (at2(e3,)) {
        return h3(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          nt(e3,),
        ),
          Qe(e3,);
      }
    }
    function ot2(e3, r4, n3,) {
      var a3 = e3.displayName;
      if (a3) {
        return a3;
      }
      var u2 = r4.displayName || r4.name || '';
      return u2 !== '' ? n3 + '(' + u2 + ')' : n3;
    }
    function Je(e3,) {
      return e3.displayName || 'Context';
    }
    function I(e3,) {
      if (e3 == null) {
        return null;
      }
      if (
        typeof e3.tag == 'number' &&
        h3('Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',),
        typeof e3 == 'function'
      ) {
        return e3.displayName || e3.name || null;
      }
      if (typeof e3 == 'string') {
        return e3;
      }
      switch (e3) {
        case y3:
          return 'Fragment';
        case c3:
          return 'Portal';
        case b2:
          return 'Profiler';
        case l3:
          return 'StrictMode';
        case T:
          return 'Suspense';
        case de:
          return 'SuspenseList';
      }
      if (typeof e3 == 'object') {
        switch (e3.$$typeof) {
          case g3:
            var r4 = e3;
            return Je(r4,) + '.Consumer';
          case C2:
            var n3 = e3;
            return Je(n3._context,) + '.Provider';
          case m3:
            return ot2(e3, e3.render, 'ForwardRef',);
          case L:
            var a3 = e3.displayName || null;
            return a3 !== null ? a3 : I(e3.type,) || 'Memo';
          case Q: {
            var u2 = e3, s3 = u2._payload, i3 = u2._init;
            try {
              return I(i3(s3,),);
            } catch {
              return null;
            }
          }
        }
      }
      return null;
    }
    var H2 = Object.prototype.hasOwnProperty, Xe = { key: true, ref: true, __self: true, __source: true, }, Ze, er, be;
    be = {};
    function rr(e3,) {
      if (H2.call(e3, 'ref',)) {
        var r4 = Object.getOwnPropertyDescriptor(e3, 'ref',).get;
        if (r4 && r4.isReactWarning) {
          return false;
        }
      }
      return e3.ref !== void 0;
    }
    function tr(e3,) {
      if (H2.call(e3, 'key',)) {
        var r4 = Object.getOwnPropertyDescriptor(e3, 'key',).get;
        if (r4 && r4.isReactWarning) {
          return false;
        }
      }
      return e3.key !== void 0;
    }
    function ut(e3, r4,) {
      var n3 = function () {
        Ze ||
          (Ze = true,
            h3(
              '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
              r4,
            ));
      };
      n3.isReactWarning = true, Object.defineProperty(e3, 'key', { get: n3, configurable: true, },);
    }
    function it(e3, r4,) {
      var n3 = function () {
        er ||
          (er = true,
            h3(
              '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
              r4,
            ));
      };
      n3.isReactWarning = true, Object.defineProperty(e3, 'ref', { get: n3, configurable: true, },);
    }
    function st2(e3,) {
      if (typeof e3.ref == 'string' && A2.current && e3.__self && A2.current.stateNode !== e3.__self) {
        var r4 = I(A2.current.type,);
        be[r4] ||
          (h3(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            r4,
            e3.ref,
          ),
            be[r4] = true);
      }
    }
    var Ee = function (e3, r4, n3, a3, u2, s3, i3,) {
      var f3 = { $$typeof: o3, type: e3, key: r4, ref: n3, props: i3, _owner: s3, };
      return f3._store = {},
        Object.defineProperty(f3._store, 'validated', { configurable: false, enumerable: false, writable: true, value: false, },),
        Object.defineProperty(f3, '_self', { configurable: false, enumerable: false, writable: false, value: a3, },),
        Object.defineProperty(f3, '_source', { configurable: false, enumerable: false, writable: false, value: u2, },),
        Object.freeze && (Object.freeze(f3.props,), Object.freeze(f3,)),
        f3;
    };
    function ct(e3, r4, n3,) {
      var a3, u2 = {}, s3 = null, i3 = null, f3 = null, v3 = null;
      if (r4 != null) {
        rr(r4,) && (i3 = r4.ref, st2(r4,)),
          tr(r4,) && (Z(r4.key,), s3 = '' + r4.key),
          f3 = r4.__self === void 0 ? null : r4.__self,
          v3 = r4.__source === void 0 ? null : r4.__source;
        for (a3 in r4) {
          H2.call(r4, a3,) && !Xe.hasOwnProperty(a3,) && (u2[a3] = r4[a3]);
        }
      }
      var _ = arguments.length - 2;
      if (_ === 1) {
        u2.children = n3;
      } else if (_ > 1) {
        for (var E = Array(_,), R3 = 0; R3 < _; R3++) {
          E[R3] = arguments[R3 + 2];
        }
        Object.freeze && Object.freeze(E,), u2.children = E;
      }
      if (e3 && e3.defaultProps) {
        var w3 = e3.defaultProps;
        for (a3 in w3) {
          u2[a3] === void 0 && (u2[a3] = w3[a3]);
        }
      }
      if (s3 || i3) {
        var S = typeof e3 == 'function' ? e3.displayName || e3.name || 'Unknown' : e3;
        s3 && ut(u2, S,), i3 && it(u2, S,);
      }
      return Ee(e3, s3, i3, f3, v3, A2.current, u2,);
    }
    function ft(e3, r4,) {
      var n3 = Ee(e3.type, r4, e3.ref, e3._self, e3._source, e3._owner, e3.props,);
      return n3;
    }
    function lt(e3, r4, n3,) {
      if (e3 == null) {
        throw new Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e3 + '.',);
      }
      var a3, u2 = j2({}, e3.props,), s3 = e3.key, i3 = e3.ref, f3 = e3._self, v3 = e3._source, _ = e3._owner;
      if (r4 != null) {
        rr(r4,) && (i3 = r4.ref, _ = A2.current), tr(r4,) && (Z(r4.key,), s3 = '' + r4.key);
        var E;
        e3.type && e3.type.defaultProps && (E = e3.type.defaultProps);
        for (a3 in r4) {
          H2.call(r4, a3,) && !Xe.hasOwnProperty(a3,) && (r4[a3] === void 0 && E !== void 0 ? u2[a3] = E[a3] : u2[a3] = r4[a3]);
        }
      }
      var R3 = arguments.length - 2;
      if (R3 === 1) {
        u2.children = n3;
      } else if (R3 > 1) {
        for (var w3 = Array(R3,), S = 0; S < R3; S++) {
          w3[S] = arguments[S + 2];
        }
        u2.children = w3;
      }
      return Ee(e3.type, s3, i3, f3, v3, _, u2,);
    }
    function U(e3,) {
      return typeof e3 == 'object' && e3 !== null && e3.$$typeof === o3;
    }
    var nr = '.', pt = ':';
    function dt2(e3,) {
      var r4 = /[=:]/g,
        n3 = { '=': '=0', ':': '=2', },
        a3 = e3.replace(r4, function (u2,) {
          return n3[u2];
        },);
      return '$' + a3;
    }
    var ar = false, vt2 = /\/+/g;
    function or(e3,) {
      return e3.replace(vt2, '$&/',);
    }
    function Re(e3, r4,) {
      return typeof e3 == 'object' && e3 !== null && e3.key != null ? (Z(e3.key,), dt2('' + e3.key,)) : r4.toString(36,);
    }
    function ee(e3, r4, n3, a3, u2,) {
      var s3 = typeof e3;
      (s3 === 'undefined' || s3 === 'boolean') && (e3 = null);
      var i3 = false;
      if (e3 === null) {
        i3 = true;
      } else {
        switch (s3) {
          case 'string':
          case 'number':
            i3 = true;
            break;
          case 'object':
            switch (e3.$$typeof) {
              case o3:
              case c3:
                i3 = true;
            }
        }
      }
      if (i3) {
        var f3 = e3, v3 = u2(f3,), _ = a3 === '' ? nr + Re(f3, 0,) : a3;
        if (X3(v3,)) {
          var E = '';
          _ != null && (E = or(_,) + '/'),
            ee(v3, r4, E, '', function (sn,) {
              return sn;
            },);
        } else {
          v3 != null &&
            (U(v3,) &&
              (v3.key && (!f3 || f3.key !== v3.key) && Z(v3.key,),
                v3 = ft(v3, n3 + (v3.key && (!f3 || f3.key !== v3.key) ? or('' + v3.key,) + '/' : '') + _,)),
              r4.push(v3,));
        }
        return 1;
      }
      var R3, w3, S = 0, O = a3 === '' ? nr : a3 + pt;
      if (X3(e3,)) {
        for (var se = 0; se < e3.length; se++) {
          R3 = e3[se], w3 = O + Re(R3, se,), S += ee(R3, r4, n3, w3, u2,);
        }
      } else {
        var Ae = Ye(e3,);
        if (typeof Ae == 'function') {
          var Pr = e3;
          Ae === Pr.entries &&
            (ar || V('Using Maps as children is not supported. Use an array of keyed ReactElements instead.',), ar = true);
          for (var on = Ae.call(Pr,), xr, un = 0; !(xr = on.next()).done;) {
            R3 = xr.value, w3 = O + Re(R3, un++,), S += ee(R3, r4, n3, w3, u2,);
          }
        } else if (s3 === 'object') {
          var Ar = String(e3,);
          throw new Error(
            'Objects are not valid as a React child (found: ' +
            (Ar === '[object Object]' ? 'object with keys {' + Object.keys(e3,).join(', ',) + '}' : Ar) +
            '). If you meant to render a collection of children, use an array instead.',
          );
        }
      }
      return S;
    }
    function re(e3, r4, n3,) {
      if (e3 == null) {
        return e3;
      }
      var a3 = [], u2 = 0;
      return ee(e3, a3, '', '', function (s3,) {
        return r4.call(n3, s3, u2++,);
      },),
        a3;
    }
    function yt(e3,) {
      var r4 = 0;
      return re(e3, function () {
        r4++;
      },),
        r4;
    }
    function ht2(e3, r4, n3,) {
      re(e3, function () {
        r4.apply(this, arguments,);
      }, n3,);
    }
    function mt(e3,) {
      return re(e3, function (r4,) {
        return r4;
      },) || [];
    }
    function _t(e3,) {
      if (!U(e3,)) {
        throw new Error('React.Children.only expected to receive a single React element child.',);
      }
      return e3;
    }
    function gt(e3,) {
      var r4 = {
        $$typeof: g3,
        _currentValue: e3,
        _currentValue2: e3,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      r4.Provider = { $$typeof: C2, _context: r4, };
      var n3 = false, a3 = false, u2 = false;
      {
        var s3 = { $$typeof: g3, _context: r4, };
        Object.defineProperties(s3, {
          Provider: {
            get: function () {
              return a3 ||
                (a3 = true,
                  h3(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?',
                  )),
                r4.Provider;
            },
            set: function (i3,) {
              r4.Provider = i3;
            },
          },
          _currentValue: {
            get: function () {
              return r4._currentValue;
            },
            set: function (i3,) {
              r4._currentValue = i3;
            },
          },
          _currentValue2: {
            get: function () {
              return r4._currentValue2;
            },
            set: function (i3,) {
              r4._currentValue2 = i3;
            },
          },
          _threadCount: {
            get: function () {
              return r4._threadCount;
            },
            set: function (i3,) {
              r4._threadCount = i3;
            },
          },
          Consumer: {
            get: function () {
              return n3 ||
                (n3 = true,
                  h3(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?',
                  )),
                r4.Consumer;
            },
          },
          displayName: {
            get: function () {
              return r4.displayName;
            },
            set: function (i3,) {
              u2 ||
                (V(
                  'Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = \'%s\'.',
                  i3,
                ),
                  u2 = true);
            },
          },
        },), r4.Consumer = s3;
      }
      return r4._currentRenderer = null, r4._currentRenderer2 = null, r4;
    }
    var K2 = -1, Ce = 0, ur = 1, bt = 2;
    function Et2(e3,) {
      if (e3._status === K2) {
        var r4 = e3._result, n3 = r4();
        if (
          n3.then(function (s3,) {
            if (e3._status === Ce || e3._status === K2) {
              var i3 = e3;
              i3._status = ur, i3._result = s3;
            }
          }, function (s3,) {
            if (e3._status === Ce || e3._status === K2) {
              var i3 = e3;
              i3._status = bt, i3._result = s3;
            }
          },), e3._status === K2
        ) {
          var a3 = e3;
          a3._status = Ce, a3._result = n3;
        }
      }
      if (e3._status === ur) {
        var u2 = e3._result;
        return u2 === void 0 && h3(
          `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
          u2,
        ),
          'default' in u2 || h3(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            u2,
          ),
          u2.default;
      } else {
        throw e3._result;
      }
    }
    function Rt(e3,) {
      var r4 = { _status: K2, _result: e3, }, n3 = { $$typeof: Q, _payload: r4, _init: Et2, };
      {
        var a3, u2;
        Object.defineProperties(n3, {
          defaultProps: {
            configurable: true,
            get: function () {
              return a3;
            },
            set: function (s3,) {
              h3(
                'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.',
              ),
                a3 = s3,
                Object.defineProperty(n3, 'defaultProps', { enumerable: true, },);
            },
          },
          propTypes: {
            configurable: true,
            get: function () {
              return u2;
            },
            set: function (s3,) {
              h3(
                'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.',
              ),
                u2 = s3,
                Object.defineProperty(n3, 'propTypes', { enumerable: true, },);
            },
          },
        },);
      }
      return n3;
    }
    function Ct2(e3,) {
      e3 != null && e3.$$typeof === L
        ? h3(
          'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).',
        )
        : typeof e3 != 'function'
          ? h3('forwardRef requires a render function but was given %s.', e3 === null ? 'null' : typeof e3,)
          : e3.length !== 0 && e3.length !== 2 &&
          h3(
            'forwardRef render functions accept exactly two parameters: props and ref. %s',
            e3.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.',
          ),
        e3 != null && (e3.defaultProps != null || e3.propTypes != null) &&
        h3('forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?',);
      var r4 = { $$typeof: m3, render: e3, };
      {
        var n3;
        Object.defineProperty(r4, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function () {
            return n3;
          },
          set: function (a3,) {
            n3 = a3, !e3.name && !e3.displayName && (e3.displayName = a3);
          },
        },);
      }
      return r4;
    }
    var ir;
    ir = Symbol.for('react.module.reference',);
    function sr(e3,) {
      return !!(typeof e3 == 'string' || typeof e3 == 'function' || e3 === y3 || e3 === b2 || Zr || e3 === l3 || e3 === T || e3 === de ||
        Xr || e3 === Kr || Gr || Qr || Jr ||
        typeof e3 == 'object' && e3 !== null &&
        (e3.$$typeof === Q || e3.$$typeof === L || e3.$$typeof === C2 || e3.$$typeof === g3 || e3.$$typeof === m3 || e3.$$typeof === ir ||
          e3.getModuleId !== void 0));
    }
    function wt(e3, r4,) {
      sr(e3,) || h3('memo: The first argument must be a component. Instead received: %s', e3 === null ? 'null' : typeof e3,);
      var n3 = { $$typeof: L, type: e3, compare: r4 === void 0 ? null : r4, };
      {
        var a3;
        Object.defineProperty(n3, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function () {
            return a3;
          },
          set: function (u2,) {
            a3 = u2, !e3.name && !e3.displayName && (e3.displayName = u2);
          },
        },);
      }
      return n3;
    }
    function P() {
      var e3 = ze.current;
      return e3 === null &&
        h3(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`,
        ),
        e3;
    }
    function St2(e3,) {
      var r4 = P();
      if (e3._context !== void 0) {
        var n3 = e3._context;
        n3.Consumer === e3
          ? h3(
            'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?',
          )
          : n3.Provider === e3 &&
          h3('Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?',);
      }
      return r4.useContext(e3,);
    }
    function Ot2(e3,) {
      var r4 = P();
      return r4.useState(e3,);
    }
    function Tt2(e3, r4, n3,) {
      var a3 = P();
      return a3.useReducer(e3, r4, n3,);
    }
    function kt(e3,) {
      var r4 = P();
      return r4.useRef(e3,);
    }
    function Pt2(e3, r4,) {
      var n3 = P();
      return n3.useEffect(e3, r4,);
    }
    function xt(e3, r4,) {
      var n3 = P();
      return n3.useInsertionEffect(e3, r4,);
    }
    function At2(e3, r4,) {
      var n3 = P();
      return n3.useLayoutEffect(e3, r4,);
    }
    function jt(e3, r4,) {
      var n3 = P();
      return n3.useCallback(e3, r4,);
    }
    function It(e3, r4,) {
      var n3 = P();
      return n3.useMemo(e3, r4,);
    }
    function Dt(e3, r4, n3,) {
      var a3 = P();
      return a3.useImperativeHandle(e3, r4, n3,);
    }
    function $t(e3, r4,) {
      {
        var n3 = P();
        return n3.useDebugValue(e3, r4,);
      }
    }
    function Ft() {
      var e3 = P();
      return e3.useTransition();
    }
    function Lt2(e3,) {
      var r4 = P();
      return r4.useDeferredValue(e3,);
    }
    function Nt2() {
      var e3 = P();
      return e3.useId();
    }
    function Mt2(e3, r4, n3,) {
      var a3 = P();
      return a3.useSyncExternalStore(e3, r4, n3,);
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
          var e3 = { configurable: true, enumerable: true, value: hr, writable: true, };
          Object.defineProperties(console, { info: e3, log: e3, warn: e3, error: e3, group: e3, groupCollapsed: e3, groupEnd: e3, },);
        }
        q2++;
      }
    }
    function Ut() {
      {
        if (q2--, q2 === 0) {
          var e3 = { configurable: true, enumerable: true, writable: true, };
          Object.defineProperties(console, {
            log: j2({}, e3, { value: cr, },),
            info: j2({}, e3, { value: fr, },),
            warn: j2({}, e3, { value: lr, },),
            error: j2({}, e3, { value: pr, },),
            group: j2({}, e3, { value: dr, },),
            groupCollapsed: j2({}, e3, { value: vr, },),
            groupEnd: j2({}, e3, { value: yr, },),
          },);
        }
        q2 < 0 && h3('disabledDepth fell below zero. This is a bug in React. Please file an issue.',);
      }
    }
    var we = M2.ReactCurrentDispatcher, Se;
    function te(e3, r4, n3,) {
      {
        if (Se === void 0) {
          try {
            throw Error();
          } catch (u2) {
            var a3 = u2.stack.trim().match(/\n( *(at )?)/,);
            Se = a3 && a3[1] || '';
          }
        }
        return `
` + Se + e3;
      }
    }
    var Oe = false, ne;
    {
      var Wt = typeof WeakMap == 'function' ? WeakMap : Map;
      ne = new Wt();
    }
    function mr(e3, r4,) {
      if (!e3 || Oe) {
        return '';
      }
      {
        var n3 = ne.get(e3,);
        if (n3 !== void 0) {
          return n3;
        }
      }
      var a3;
      Oe = true;
      var u2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s3;
      s3 = we.current, we.current = null, Vt();
      try {
        if (r4) {
          var i3 = function () {
            throw Error();
          };
          if (
            Object.defineProperty(i3.prototype, 'props', {
              set: function () {
                throw Error();
              },
            },), typeof Reflect == 'object' && Reflect.construct
          ) {
            try {
              Reflect.construct(i3, [],);
            } catch (O) {
              a3 = O;
            }
            Reflect.construct(e3, [], i3,);
          } else {
            try {
              i3.call();
            } catch (O) {
              a3 = O;
            }
            e3.call(i3.prototype,);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            a3 = O;
          }
          e3();
        }
      } catch (O) {
        if (O && a3 && typeof O.stack == 'string') {
          for (
            var f3 = O.stack.split(`
`,),
            v3 = a3.stack.split(`
`,),
            _ = f3.length - 1,
            E = v3.length - 1;
            _ >= 1 && E >= 0 && f3[_] !== v3[E];
          ) {
            E--;
          }
          for (; _ >= 1 && E >= 0; _--, E--) {
            if (f3[_] !== v3[E]) {
              if (_ !== 1 || E !== 1) {
                do if (_--, E--, E < 0 || f3[_] !== v3[E]) {
                  var R3 = `
` + f3[_].replace(' at new ', ' at ',);
                  return e3.displayName && R3.includes('<anonymous>',) && (R3 = R3.replace('<anonymous>', e3.displayName,)),
                    typeof e3 == 'function' && ne.set(e3, R3,),
                    R3;
                } while (_ >= 1 && E >= 0);
              }
              break;
            }
          }
        }
      } finally {
        Oe = false, we.current = s3, Ut(), Error.prepareStackTrace = u2;
      }
      var w3 = e3 ? e3.displayName || e3.name : '', S = w3 ? te(w3,) : '';
      return typeof e3 == 'function' && ne.set(e3, S,), S;
    }
    function Yt(e3, r4, n3,) {
      return mr(e3, false,);
    }
    function zt(e3,) {
      var r4 = e3.prototype;
      return !!(r4 && r4.isReactComponent);
    }
    function ae(e3, r4, n3,) {
      if (e3 == null) {
        return '';
      }
      if (typeof e3 == 'function') {
        return mr(e3, zt(e3,),);
      }
      if (typeof e3 == 'string') {
        return te(e3,);
      }
      switch (e3) {
        case T:
          return te('Suspense',);
        case de:
          return te('SuspenseList',);
      }
      if (typeof e3 == 'object') {
        switch (e3.$$typeof) {
          case m3:
            return Yt(e3.render,);
          case L:
            return ae(e3.type, r4, n3,);
          case Q: {
            var a3 = e3, u2 = a3._payload, s3 = a3._init;
            try {
              return ae(s3(u2,), r4, n3,);
            } catch {
            }
          }
        }
      }
      return '';
    }
    var _r = {}, gr = M2.ReactDebugCurrentFrame;
    function oe(e3,) {
      if (e3) {
        var r4 = e3._owner, n3 = ae(e3.type, e3._source, r4 ? r4.type : null,);
        gr.setExtraStackFrame(n3,);
      } else {
        gr.setExtraStackFrame(null,);
      }
    }
    function Bt(e3, r4, n3, a3, u2,) {
      {
        var s3 = Function.call.bind(H2,);
        for (var i3 in e3) {
          if (s3(e3, i3,)) {
            var f3 = void 0;
            try {
              if (typeof e3[i3] != 'function') {
                var v3 = Error(
                  (a3 || 'React class') + ': ' + n3 + ' type `' + i3 +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' + typeof e3[i3] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                );
                throw v3.name = 'Invariant Violation', v3;
              }
              f3 = e3[i3](r4, i3, a3, n3, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',);
            } catch (_) {
              f3 = _;
            }
            f3 && !(f3 instanceof Error) && (oe(u2,),
              h3(
                '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                a3 || 'React class',
                n3,
                i3,
                typeof f3,
              ),
              oe(null,)),
              f3 instanceof Error && !(f3.message in _r) &&
              (_r[f3.message] = true, oe(u2,), h3('Failed %s type: %s', n3, f3.message,), oe(null,));
          }
        }
      }
    }
    function W2(e3,) {
      if (e3) {
        var r4 = e3._owner, n3 = ae(e3.type, e3._source, r4 ? r4.type : null,);
        Be(n3,);
      } else {
        Be(null,);
      }
    }
    var Te;
    Te = false;
    function br() {
      if (A2.current) {
        var e3 = I(A2.current.type,);
        if (e3) {
          return `

Check the render method of \`` + e3 + '`.';
        }
      }
      return '';
    }
    function Ht(e3,) {
      if (e3 !== void 0) {
        var r4 = e3.fileName.replace(/^.*[\\\/]/, '',), n3 = e3.lineNumber;
        return `

Check your code at ` + r4 + ':' + n3 + '.';
      }
      return '';
    }
    function Kt(e3,) {
      return e3 != null ? Ht(e3.__source,) : '';
    }
    var Er = {};
    function qt(e3,) {
      var r4 = br();
      if (!r4) {
        var n3 = typeof e3 == 'string' ? e3 : e3.displayName || e3.name;
        n3 && (r4 = `

Check the top-level render call using <` + n3 + '>.');
      }
      return r4;
    }
    function Rr(e3, r4,) {
      if (!(!e3._store || e3._store.validated || e3.key != null)) {
        e3._store.validated = true;
        var n3 = qt(r4,);
        if (!Er[n3]) {
          Er[n3] = true;
          var a3 = '';
          e3 && e3._owner && e3._owner !== A2.current && (a3 = ' It was passed a child from ' + I(e3._owner.type,) + '.'),
            W2(e3,),
            h3(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              n3,
              a3,
            ),
            W2(null,);
        }
      }
    }
    function Cr(e3, r4,) {
      if (typeof e3 == 'object') {
        if (X3(e3,)) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var a3 = e3[n3];
            U(a3,) && Rr(a3, r4,);
          }
        } else if (U(e3,)) {
          e3._store && (e3._store.validated = true);
        } else if (e3) {
          var u2 = Ye(e3,);
          if (typeof u2 == 'function' && u2 !== e3.entries) {
            for (var s3 = u2.call(e3,), i3; !(i3 = s3.next()).done;) {
              U(i3.value,) && Rr(i3.value, r4,);
            }
          }
        }
      }
    }
    function wr(e3,) {
      {
        var r4 = e3.type;
        if (r4 == null || typeof r4 == 'string') {
          return;
        }
        var n3;
        if (typeof r4 == 'function') {
          n3 = r4.propTypes;
        } else if (typeof r4 == 'object' && (r4.$$typeof === m3 || r4.$$typeof === L)) {
          n3 = r4.propTypes;
        } else {
          return;
        }
        if (n3) {
          var a3 = I(r4,);
          Bt(n3, e3.props, 'prop', a3, e3,);
        } else if (r4.PropTypes !== void 0 && !Te) {
          Te = true;
          var u2 = I(r4,);
          h3('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', u2 || 'Unknown',);
        }
        typeof r4.getDefaultProps == 'function' && !r4.getDefaultProps.isReactClassApproved &&
          h3('getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',);
      }
    }
    function Gt(e3,) {
      {
        for (var r4 = Object.keys(e3.props,), n3 = 0; n3 < r4.length; n3++) {
          var a3 = r4[n3];
          if (a3 !== 'children' && a3 !== 'key') {
            W2(e3,),
              h3('Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.', a3,),
              W2(null,);
            break;
          }
        }
        e3.ref !== null && (W2(e3,), h3('Invalid attribute `ref` supplied to `React.Fragment`.',), W2(null,));
      }
    }
    function Sr(e3, r4, n3,) {
      var a3 = sr(e3,);
      if (!a3) {
        var u2 = '';
        (e3 === void 0 || typeof e3 == 'object' && e3 !== null && Object.keys(e3,).length === 0) &&
          (u2 +=
            ' You likely forgot to export your component from the file it\'s defined in, or you might have mixed up default and named imports.');
        var s3 = Kt(r4,);
        s3 ? u2 += s3 : u2 += br();
        var i3;
        e3 === null
          ? i3 = 'null'
          : X3(e3,)
            ? i3 = 'array'
            : e3 !== void 0 && e3.$$typeof === o3
              ? (i3 = '<' + (I(e3.type,) || 'Unknown') + ' />', u2 = ' Did you accidentally export a JSX literal instead of a component?')
              : i3 = typeof e3,
          h3(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            i3,
            u2,
          );
      }
      var f3 = ct.apply(this, arguments,);
      if (f3 == null) {
        return f3;
      }
      if (a3) {
        for (var v3 = 2; v3 < arguments.length; v3++) {
          Cr(arguments[v3], e3,);
        }
      }
      return e3 === y3 ? Gt(f3,) : wr(f3,), f3;
    }
    var Or = false;
    function Qt(e3,) {
      var r4 = Sr.bind(null, e3,);
      return r4.type = e3,
        Or ||
        (Or = true,
          V('React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.',)),
        Object.defineProperty(r4, 'type', {
          enumerable: false,
          get: function () {
            return V('Factory.type is deprecated. Access the class directly before passing it to createFactory.',),
              Object.defineProperty(this, 'type', { value: e3, },),
              e3;
          },
        },),
        r4;
    }
    function Jt(e3, r4, n3,) {
      for (var a3 = lt.apply(this, arguments,), u2 = 2; u2 < arguments.length; u2++) {
        Cr(arguments[u2], a3.type,);
      }
      return wr(a3,), a3;
    }
    function Xt(e3, r4,) {
      var n3 = N.transition;
      N.transition = {};
      var a3 = N.transition;
      N.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e3();
      } finally {
        if (N.transition = n3, n3 === null && a3._updatedFibers) {
          var u2 = a3._updatedFibers.size;
          u2 > 10 &&
            V('Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.',),
            a3._updatedFibers.clear();
        }
      }
    }
    var Tr = false, ue = null;
    function Zt(e3,) {
      if (ue === null) {
        try {
          var r4 = ('require' + Math.random()).slice(0, 7,), n3 = pe && pe[r4];
          ue = n3.call(pe, 'timers',).setImmediate;
        } catch {
          ue = function (u2,) {
            Tr === false &&
              (Tr = true,
                typeof MessageChannel > 'u' &&
                h3(
                  'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.',
                ));
            var s3 = new MessageChannel();
            s3.port1.onmessage = u2, s3.port2.postMessage(void 0,);
          };
        }
      }
      return ue(e3,);
    }
    var Y = 0, kr = false;
    function en(e3,) {
      {
        var r4 = Y;
        Y++, k2.current === null && (k2.current = []);
        var n3 = k2.isBatchingLegacy, a3;
        try {
          if (k2.isBatchingLegacy = true, a3 = e3(), !n3 && k2.didScheduleLegacyUpdate) {
            var u2 = k2.current;
            u2 !== null && (k2.didScheduleLegacyUpdate = false, xe(u2,));
          }
        } catch (w3) {
          throw ie(r4,), w3;
        } finally {
          k2.isBatchingLegacy = n3;
        }
        if (a3 !== null && typeof a3 == 'object' && typeof a3.then == 'function') {
          var s3 = a3,
            i3 = false,
            f3 = {
              then: function (w3, S,) {
                i3 = true,
                  s3.then(function (O,) {
                    ie(r4,), Y === 0 ? ke(O, w3, S,) : w3(O,);
                  }, function (O,) {
                    ie(r4,), S(O,);
                  },);
              },
            };
          return !kr && typeof Promise < 'u' && Promise.resolve().then(function () {
          },).then(function () {
            i3 ||
              (kr = true,
                h3(
                  'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);',
                ));
          },),
            f3;
        } else {
          var v3 = a3;
          if (ie(r4,), Y === 0) {
            var _ = k2.current;
            _ !== null && (xe(_,), k2.current = null);
            var E = {
              then: function (w3, S,) {
                k2.current === null ? (k2.current = [], ke(v3, w3, S,)) : w3(v3,);
              },
            };
            return E;
          } else {
            var R3 = {
              then: function (w3, S,) {
                w3(v3,);
              },
            };
            return R3;
          }
        }
      }
    }
    function ie(e3,) {
      e3 !== Y - 1 &&
        h3(
          'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ',
        ), Y = e3;
    }
    function ke(e3, r4, n3,) {
      {
        var a3 = k2.current;
        if (a3 !== null) {
          try {
            xe(a3,),
              Zt(function () {
                a3.length === 0 ? (k2.current = null, r4(e3,)) : ke(e3, r4, n3,);
              },);
          } catch (u2) {
            n3(u2,);
          }
        } else {
          r4(e3,);
        }
      }
    }
    var Pe = false;
    function xe(e3,) {
      if (!Pe) {
        Pe = true;
        var r4 = 0;
        try {
          for (; r4 < e3.length; r4++) {
            var n3 = e3[r4];
            do n3 = n3(true,); while (n3 !== null);
          }
          e3.length = 0;
        } catch (a3) {
          throw e3 = e3.slice(r4 + 1,), a3;
        } finally {
          Pe = false;
        }
      }
    }
    var rn = Sr, tn = Jt, nn = Qt, an = { map: re, forEach: ht2, count: yt, toArray: mt, only: _t, };
    d3.Children = an,
      d3.Component = $,
      d3.Fragment = y3,
      d3.Profiler = b2,
      d3.PureComponent = _e,
      d3.StrictMode = l3,
      d3.Suspense = T,
      d3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M2,
      d3.cloneElement = tn,
      d3.createContext = gt,
      d3.createElement = rn,
      d3.createFactory = nn,
      d3.createRef = rt,
      d3.forwardRef = Ct2,
      d3.isValidElement = U,
      d3.lazy = Rt,
      d3.memo = wt,
      d3.startTransition = Xt,
      d3.unstable_act = en,
      d3.useCallback = jt,
      d3.useContext = St2,
      d3.useDebugValue = $t,
      d3.useDeferredValue = Lt2,
      d3.useEffect = Pt2,
      d3.useId = Nt2,
      d3.useImperativeHandle = Dt,
      d3.useInsertionEffect = xt,
      d3.useLayoutEffect = At2,
      d3.useMemo = It,
      d3.useReducer = Tt2,
      d3.useRef = kt,
      d3.useState = Ot2,
      d3.useSyncExternalStore = Mt2,
      d3.useTransition = Ft,
      d3.version = t3,
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

// https:https://esm.sh/v135/typewriter-effect@2.21.0/node/typewriter-effect.mjs
var require2 = (n3,) => {
  const e3 = (m3,) => typeof m3.default < 'u' ? m3.default : m3, c3 = (m3,) => Object.assign({}, m3,);
  switch (n3) {
    case 'react':
      return e3(react_exports,);
    default:
      throw new Error('module "' + n3 + '" not found',);
  }
};
var Et = Object.create;
var at = Object.defineProperty;
var Ot = Object.getOwnPropertyDescriptor;
var Tt = Object.getOwnPropertyNames;
var At = Object.getPrototypeOf;
var St = Object.prototype.hasOwnProperty;
var vt =
  ((C2,) =>
    typeof require2 < 'u'
      ? require2
      : typeof Proxy < 'u'
        ? new Proxy(C2, { get: (P, z,) => (typeof require2 < 'u' ? require2 : P)[z], },)
        : C2)(function (C2,) {
          if (typeof require2 < 'u') {
            return require2.apply(this, arguments,);
          }
          throw Error('Dynamic require of "' + C2 + '" is not supported',);
        },);
var Nt = (C2, P,) => () => (P || C2((P = { exports: {}, }).exports, P,), P.exports);
var Pt = (C2, P,) => {
  for (var z in P) {
    at(C2, z, { get: P[z], enumerable: true, },);
  }
};
var ot = (C2, P, z, R3,) => {
  if (P && typeof P == 'object' || typeof P == 'function') {
    for (let B2 of Tt(P,)) {
      !St.call(C2, B2,) && B2 !== z && at(C2, B2, { get: () => P[B2], enumerable: !(R3 = Ot(P, B2,)) || R3.enumerable, },);
    }
  }
  return C2;
};
var q = (C2, P, z,) => (ot(C2, P, 'default',), z && ot(z, P, 'default',));
var dt = (
  C2,
  P,
  z,
) => (z = C2 != null ? Et(At(C2,),) : {}, ot(P || !C2 || !C2.__esModule ? at(z, 'default', { value: C2, enumerable: true, },) : z, C2,));
var st = Nt((X3, it,) => {
  (function (C2, P,) {
    typeof X3 == 'object' && typeof it == 'object'
      ? it.exports = P(vt('react',),)
      : typeof define == 'function' && define.amd
        ? define('Typewriter', ['react',], P,)
        : typeof X3 == 'object'
          ? X3.Typewriter = P(vt('react',),)
          : C2.Typewriter = P(C2.react,);
  })(typeof self < 'u' ? self : X3, (C2,) =>
    (() => {
      var P = {
        7403: (e3, o3, t3,) => {
          'use strict';
          t3.d(o3, { default: () => V, },);
          var r4 = t3(4087,), i3 = t3.n(r4,);
          let a3 = function (x3,) {
            return new RegExp(/<[a-z][\s\S]*>/i,).test(x3,);
          },
            n3 = function (x3, h3,) {
              return Math.floor(Math.random() * (h3 - x3 + 1),) + x3;
            };
          var u2 = 'TYPE_CHARACTER',
            c3 = 'REMOVE_CHARACTER',
            p3 = 'REMOVE_ALL',
            f3 = 'REMOVE_LAST_VISIBLE_NODE',
            l3 = 'PAUSE_FOR',
            v3 = 'CALL_FUNCTION',
            y3 = 'ADD_HTML_TAG_ELEMENT',
            d3 = 'CHANGE_DELETE_SPEED',
            g3 = 'CHANGE_DELAY',
            _ = 'CHANGE_CURSOR',
            E = 'PASTE_STRING',
            A2 = 'HTML_TAG';
          function O(x3,) {
            return O = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (h3,) {
                return typeof h3;
              }
              : function (h3,) {
                return h3 && typeof Symbol == 'function' && h3.constructor === Symbol && h3 !== Symbol.prototype ? 'symbol' : typeof h3;
              },
              O(x3,);
          }
          function m3(x3, h3,) {
            var T = Object.keys(x3,);
            if (Object.getOwnPropertySymbols) {
              var j2 = Object.getOwnPropertySymbols(x3,);
              h3 && (j2 = j2.filter(function (H2,) {
                return Object.getOwnPropertyDescriptor(x3, H2,).enumerable;
              },)), T.push.apply(T, j2,);
            }
            return T;
          }
          function w3(x3,) {
            for (var h3 = 1; h3 < arguments.length; h3++) {
              var T = arguments[h3] != null ? arguments[h3] : {};
              h3 % 2
                ? m3(Object(T,), true,).forEach(function (j2,) {
                  S(x3, j2, T[j2],);
                },)
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(x3, Object.getOwnPropertyDescriptors(T,),)
                  : m3(Object(T,),).forEach(function (j2,) {
                    Object.defineProperty(x3, j2, Object.getOwnPropertyDescriptor(T, j2,),);
                  },);
            }
            return x3;
          }
          function N(x3,) {
            return function (h3,) {
              if (Array.isArray(h3,)) {
                return L(h3,);
              }
            }(x3,) || function (h3,) {
              if (typeof Symbol < 'u' && h3[Symbol.iterator] != null || h3['@@iterator'] != null) {
                return Array.from(h3,);
              }
            }(x3,) || function (h3, T,) {
              if (h3) {
                if (typeof h3 == 'string') {
                  return L(h3, T,);
                }
                var j2 = Object.prototype.toString.call(h3,).slice(8, -1,);
                return j2 === 'Object' && h3.constructor && (j2 = h3.constructor.name),
                  j2 === 'Map' || j2 === 'Set'
                    ? Array.from(h3,)
                    : j2 === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j2,)
                      ? L(h3, T,)
                      : void 0;
              }
            }(x3,) || function () {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,);
            }();
          }
          function L(x3, h3,) {
            (h3 == null || h3 > x3.length) && (h3 = x3.length);
            for (var T = 0, j2 = new Array(h3,); T < h3; T++) {
              j2[T] = x3[T];
            }
            return j2;
          }
          function M2(x3, h3,) {
            for (var T = 0; T < h3.length; T++) {
              var j2 = h3[T];
              j2.enumerable = j2.enumerable || false,
                j2.configurable = true,
                'value' in j2 && (j2.writable = true),
                Object.defineProperty(x3, U(j2.key,), j2,);
            }
          }
          function S(x3, h3, T,) {
            return (h3 = U(h3,)) in x3
              ? Object.defineProperty(x3, h3, { value: T, enumerable: true, configurable: true, writable: true, },)
              : x3[h3] = T,
              x3;
          }
          function U(x3,) {
            var h3 = function (T, j2,) {
              if (O(T,) !== 'object' || T === null) {
                return T;
              }
              var H2 = T[Symbol.toPrimitive];
              if (H2 !== void 0) {
                var s3 = H2.call(T, 'string',);
                if (O(s3,) !== 'object') {
                  return s3;
                }
                throw new TypeError('@@toPrimitive must return a primitive value.',);
              }
              return String(T,);
            }(x3,);
            return O(h3,) === 'symbol' ? h3 : String(h3,);
          }
          let V = function () {
            function x3(j2, H2,) {
              var s3 = this;
              if (
                function (b2, k2,) {
                  if (!(b2 instanceof k2)) {
                    throw new TypeError('Cannot call a class as a function',);
                  }
                }(this, x3,),
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
                  s3.state.elements.container && (s3.state.elements.wrapper.className = s3.options.wrapperClassName,
                    s3.state.elements.cursor.className = s3.options.cursorClassName,
                    s3.state.elements.cursor.innerHTML = s3.options.cursor,
                    s3.state.elements.container.innerHTML = '',
                    s3.state.elements.container.appendChild(s3.state.elements.wrapper,),
                    s3.state.elements.container.appendChild(s3.state.elements.cursor,));
                },),
                S(this, 'start', function () {
                  return s3.state.eventLoopPaused = false, s3.runEventLoop(), s3;
                },),
                S(this, 'pause', function () {
                  return s3.state.eventLoopPaused = true, s3;
                },),
                S(this, 'stop', function () {
                  return s3.state.eventLoop && ((0, r4.cancel)(s3.state.eventLoop,), s3.state.eventLoop = null), s3;
                },),
                S(this, 'pauseFor', function (b2,) {
                  return s3.addEventToQueue(l3, { ms: b2, },), s3;
                },),
                S(this, 'typeOutAllStrings', function () {
                  return typeof s3.options.strings == 'string'
                    ? (s3.typeString(s3.options.strings,).pauseFor(s3.options.pauseFor,), s3)
                    : (s3.options.strings.forEach(function (b2,) {
                      s3.typeString(b2,).pauseFor(s3.options.pauseFor,).deleteAll(s3.options.deleteSpeed,);
                    },),
                      s3);
                },),
                S(this, 'typeString', function (b2,) {
                  var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                  if (a3(b2,)) {
                    return s3.typeOutHTMLString(b2, k2,);
                  }
                  if (b2) {
                    var F3 = (s3.options || {}).stringSplitter, Q = typeof F3 == 'function' ? F3(b2,) : b2.split('',);
                    s3.typeCharacters(Q, k2,);
                  }
                  return s3;
                },),
                S(this, 'pasteString', function (b2,) {
                  var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                  return a3(b2,)
                    ? s3.typeOutHTMLString(b2, k2, true,)
                    : (b2 && s3.addEventToQueue(E, { character: b2, node: k2, },), s3);
                },),
                S(this, 'typeOutHTMLString', function (b2,) {
                  var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                    F3 = arguments.length > 2 ? arguments[2] : void 0,
                    Q = function (G,) {
                      var Y = document.createElement('div',);
                      return Y.innerHTML = G, Y.childNodes;
                    }(b2,);
                  if (Q.length > 0) {
                    for (var D4 = 0; D4 < Q.length; D4++) {
                      var I = Q[D4], $ = I.innerHTML;
                      I && I.nodeType !== 3
                        ? (I.innerHTML = '',
                          s3.addEventToQueue(y3, { node: I, parentNode: k2, },),
                          F3 ? s3.pasteString($, I,) : s3.typeString($, I,))
                        : I.textContent && (F3 ? s3.pasteString(I.textContent, k2,) : s3.typeString(I.textContent, k2,));
                    }
                  }
                  return s3;
                },),
                S(this, 'deleteAll', function () {
                  var b2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'natural';
                  return s3.addEventToQueue(p3, { speed: b2, },), s3;
                },),
                S(this, 'changeDeleteSpeed', function (b2,) {
                  if (!b2) {
                    throw new Error('Must provide new delete speed',);
                  }
                  return s3.addEventToQueue(d3, { speed: b2, },), s3;
                },),
                S(this, 'changeDelay', function (b2,) {
                  if (!b2) {
                    throw new Error('Must provide new delay',);
                  }
                  return s3.addEventToQueue(g3, { delay: b2, },), s3;
                },),
                S(this, 'changeCursor', function (b2,) {
                  if (!b2) {
                    throw new Error('Must provide new cursor',);
                  }
                  return s3.addEventToQueue(_, { cursor: b2, },), s3;
                },),
                S(this, 'deleteChars', function (b2,) {
                  if (!b2) {
                    throw new Error('Must provide amount of characters to delete',);
                  }
                  for (var k2 = 0; k2 < b2; k2++) {
                    s3.addEventToQueue(c3,);
                  }
                  return s3;
                },),
                S(this, 'callFunction', function (b2, k2,) {
                  if (!b2 || typeof b2 != 'function') {
                    throw new Error('Callback must be a function',);
                  }
                  return s3.addEventToQueue(v3, { cb: b2, thisArg: k2, },), s3;
                },),
                S(this, 'typeCharacters', function (b2,) {
                  var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                  if (!b2 || !Array.isArray(b2,)) {
                    throw new Error('Characters must be an array',);
                  }
                  return b2.forEach(function (F3,) {
                    s3.addEventToQueue(u2, { character: F3, node: k2, },);
                  },),
                    s3;
                },),
                S(this, 'removeCharacters', function (b2,) {
                  if (!b2 || !Array.isArray(b2,)) {
                    throw new Error('Characters must be an array',);
                  }
                  return b2.forEach(function () {
                    s3.addEventToQueue(c3,);
                  },),
                    s3;
                },),
                S(this, 'addEventToQueue', function (b2, k2,) {
                  var F3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                  return s3.addEventToStateProperty(b2, k2, F3, 'eventQueue',);
                },),
                S(this, 'addReverseCalledEvent', function (b2, k2,) {
                  var F3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                  return s3.options.loop ? s3.addEventToStateProperty(b2, k2, F3, 'reverseCalledEvents',) : s3;
                },),
                S(this, 'addEventToStateProperty', function (b2, k2,) {
                  var F3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
                    Q = arguments.length > 3 ? arguments[3] : void 0,
                    D4 = { eventName: b2, eventArgs: k2 || {}, };
                  return s3.state[Q] = F3 ? [D4,].concat(N(s3.state[Q],),) : [].concat(N(s3.state[Q],), [D4,],), s3;
                },),
                S(this, 'runEventLoop', function () {
                  s3.state.lastFrameTime || (s3.state.lastFrameTime = Date.now());
                  var b2 = Date.now(), k2 = b2 - s3.state.lastFrameTime;
                  if (!s3.state.eventQueue.length) {
                    if (!s3.options.loop) {
                      return;
                    }
                    s3.state.eventQueue = N(s3.state.calledEvents,),
                      s3.state.calledEvents = [],
                      s3.options = w3({}, s3.state.initialOptions,);
                  }
                  if (s3.state.eventLoop = i3()(s3.runEventLoop,), !s3.state.eventLoopPaused) {
                    if (s3.state.pauseUntil) {
                      if (b2 < s3.state.pauseUntil) {
                        return;
                      }
                      s3.state.pauseUntil = null;
                    }
                    var F3, Q = N(s3.state.eventQueue,), D4 = Q.shift();
                    if (
                      !(k2 <= (F3 = D4.eventName === f3 || D4.eventName === c3
                        ? s3.options.deleteSpeed === 'natural' ? n3(40, 80,) : s3.options.deleteSpeed
                        : s3.options.delay === 'natural'
                          ? n3(120, 160,)
                          : s3.options.delay))
                    ) {
                      var I = D4.eventName, $ = D4.eventArgs;
                      switch (s3.logInDevMode({ currentEvent: D4, state: s3.state, delay: F3, },), I) {
                        case E:
                        case u2:
                          var G = $.character, Y = $.node, ct = document.createTextNode(G,), J = ct;
                          s3.options.onCreateTextNode && typeof s3.options.onCreateTextNode == 'function' &&
                            (J = s3.options.onCreateTextNode(G, ct,)),
                            J && (Y ? Y.appendChild(J,) : s3.state.elements.wrapper.appendChild(J,)),
                            s3.state.visibleNodes = [].concat(N(s3.state.visibleNodes,), [{
                              type: 'TEXT_NODE',
                              character: G,
                              node: J,
                            },],);
                          break;
                        case c3:
                          Q.unshift({ eventName: f3, eventArgs: { removingCharacterNode: true, }, },);
                          break;
                        case l3:
                          var yt = D4.eventArgs.ms;
                          s3.state.pauseUntil = Date.now() + parseInt(yt,);
                          break;
                        case v3:
                          var pt = D4.eventArgs, mt = pt.cb, bt = pt.thisArg;
                          mt.call(bt, { elements: s3.state.elements, },);
                          break;
                        case y3:
                          var lt = D4.eventArgs, tt = lt.node, et = lt.parentNode;
                          et ? et.appendChild(tt,) : s3.state.elements.wrapper.appendChild(tt,),
                            s3.state.visibleNodes = [].concat(N(s3.state.visibleNodes,), [{
                              type: A2,
                              node: tt,
                              parentNode: et || s3.state.elements.wrapper,
                            },],);
                          break;
                        case p3:
                          var gt = s3.state.visibleNodes, rt = $.speed, K2 = [];
                          rt && K2.push({ eventName: d3, eventArgs: { speed: rt, temp: true, }, },);
                          for (var ft = 0, _t = gt.length; ft < _t; ft++) {
                            K2.push({ eventName: f3, eventArgs: { removingCharacterNode: false, }, },);
                          }
                          rt && K2.push({ eventName: d3, eventArgs: { speed: s3.options.deleteSpeed, temp: true, }, },),
                            Q.unshift.apply(Q, K2,);
                          break;
                        case f3:
                          var wt = D4.eventArgs.removingCharacterNode;
                          if (s3.state.visibleNodes.length) {
                            var nt = s3.state.visibleNodes.pop(), xt = nt.type, Z = nt.node, jt = nt.character;
                            s3.options.onRemoveNode && typeof s3.options.onRemoveNode == 'function' &&
                              s3.options.onRemoveNode({ node: Z, character: jt, },),
                              Z && Z.parentNode.removeChild(Z,),
                              xt === A2 && wt && Q.unshift({ eventName: f3, eventArgs: {}, },);
                          }
                          break;
                        case d3:
                          s3.options.deleteSpeed = D4.eventArgs.speed;
                          break;
                        case g3:
                          s3.options.delay = D4.eventArgs.delay;
                          break;
                        case _:
                          s3.options.cursor = D4.eventArgs.cursor, s3.state.elements.cursor.innerHTML = D4.eventArgs.cursor;
                      }
                      s3.options.loop &&
                        (D4.eventName === f3 || D4.eventArgs && D4.eventArgs.temp ||
                          (s3.state.calledEvents = [].concat(N(s3.state.calledEvents,), [D4,],))),
                        s3.state.eventQueue = Q,
                        s3.state.lastFrameTime = b2;
                    }
                  }
                },),
                j2
              ) {
                if (typeof j2 == 'string') {
                  var ut = document.querySelector(j2,);
                  if (!ut) {
                    throw new Error('Could not find container element',);
                  }
                  this.state.elements.container = ut;
                } else {
                  this.state.elements.container = j2;
                }
              }
              H2 && (this.options = w3(w3({}, this.options,), H2,)), this.state.initialOptions = w3({}, this.options,), this.init();
            }
            var h3, T;
            return h3 = x3,
              (T = [{
                key: 'init',
                value: function () {
                  var j2, H2;
                  this.setupWrapperElement(),
                    this.addEventToQueue(_, { cursor: this.options.cursor, }, true,),
                    this.addEventToQueue(p3, null, true,),
                    !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles ||
                    (j2 =
                      '.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}',
                      (H2 = document.createElement('style',)).appendChild(document.createTextNode(j2,),),
                      document.head.appendChild(H2,),
                      window.___TYPEWRITER_JS_STYLES_ADDED___ = true),
                    this.options.autoStart === true && this.options.strings && this.typeOutAllStrings().start();
                },
              }, {
                key: 'logInDevMode',
                value: function (j2,) {
                  this.options.devMode && console.log(j2,);
                },
              },]) && M2(h3.prototype, T,),
              Object.defineProperty(h3, 'prototype', { writable: false, },),
              x3;
          }();
        },
        8552: (e3, o3, t3,) => {
          var r4 = t3(852,)(t3(5639,), 'DataView',);
          e3.exports = r4;
        },
        1989: (e3, o3, t3,) => {
          var r4 = t3(1789,), i3 = t3(401,), a3 = t3(7667,), n3 = t3(1327,), u2 = t3(1866,);
          function c3(p3,) {
            var f3 = -1, l3 = p3 == null ? 0 : p3.length;
            for (this.clear(); ++f3 < l3;) {
              var v3 = p3[f3];
              this.set(v3[0], v3[1],);
            }
          }
          c3.prototype.clear = r4,
            c3.prototype.delete = i3,
            c3.prototype.get = a3,
            c3.prototype.has = n3,
            c3.prototype.set = u2,
            e3.exports = c3;
        },
        8407: (e3, o3, t3,) => {
          var r4 = t3(7040,), i3 = t3(4125,), a3 = t3(2117,), n3 = t3(7518,), u2 = t3(4705,);
          function c3(p3,) {
            var f3 = -1, l3 = p3 == null ? 0 : p3.length;
            for (this.clear(); ++f3 < l3;) {
              var v3 = p3[f3];
              this.set(v3[0], v3[1],);
            }
          }
          c3.prototype.clear = r4,
            c3.prototype.delete = i3,
            c3.prototype.get = a3,
            c3.prototype.has = n3,
            c3.prototype.set = u2,
            e3.exports = c3;
        },
        7071: (e3, o3, t3,) => {
          var r4 = t3(852,)(t3(5639,), 'Map',);
          e3.exports = r4;
        },
        3369: (e3, o3, t3,) => {
          var r4 = t3(4785,), i3 = t3(1285,), a3 = t3(6e3,), n3 = t3(9916,), u2 = t3(5265,);
          function c3(p3,) {
            var f3 = -1, l3 = p3 == null ? 0 : p3.length;
            for (this.clear(); ++f3 < l3;) {
              var v3 = p3[f3];
              this.set(v3[0], v3[1],);
            }
          }
          c3.prototype.clear = r4,
            c3.prototype.delete = i3,
            c3.prototype.get = a3,
            c3.prototype.has = n3,
            c3.prototype.set = u2,
            e3.exports = c3;
        },
        3818: (e3, o3, t3,) => {
          var r4 = t3(852,)(t3(5639,), 'Promise',);
          e3.exports = r4;
        },
        8525: (e3, o3, t3,) => {
          var r4 = t3(852,)(t3(5639,), 'Set',);
          e3.exports = r4;
        },
        8668: (e3, o3, t3,) => {
          var r4 = t3(3369,), i3 = t3(619,), a3 = t3(2385,);
          function n3(u2,) {
            var c3 = -1, p3 = u2 == null ? 0 : u2.length;
            for (this.__data__ = new r4(); ++c3 < p3;) {
              this.add(u2[c3],);
            }
          }
          n3.prototype.add = n3.prototype.push = i3, n3.prototype.has = a3, e3.exports = n3;
        },
        6384: (e3, o3, t3,) => {
          var r4 = t3(8407,), i3 = t3(7465,), a3 = t3(3779,), n3 = t3(7599,), u2 = t3(4758,), c3 = t3(4309,);
          function p3(f3,) {
            var l3 = this.__data__ = new r4(f3,);
            this.size = l3.size;
          }
          p3.prototype.clear = i3,
            p3.prototype.delete = a3,
            p3.prototype.get = n3,
            p3.prototype.has = u2,
            p3.prototype.set = c3,
            e3.exports = p3;
        },
        2705: (e3, o3, t3,) => {
          var r4 = t3(5639,).Symbol;
          e3.exports = r4;
        },
        1149: (e3, o3, t3,) => {
          var r4 = t3(5639,).Uint8Array;
          e3.exports = r4;
        },
        577: (e3, o3, t3,) => {
          var r4 = t3(852,)(t3(5639,), 'WeakMap',);
          e3.exports = r4;
        },
        4963: (e3,) => {
          e3.exports = function (o3, t3,) {
            for (var r4 = -1, i3 = o3 == null ? 0 : o3.length, a3 = 0, n3 = []; ++r4 < i3;) {
              var u2 = o3[r4];
              t3(u2, r4, o3,) && (n3[a3++] = u2);
            }
            return n3;
          };
        },
        4636: (e3, o3, t3,) => {
          var r4 = t3(2545,),
            i3 = t3(5694,),
            a3 = t3(1469,),
            n3 = t3(4144,),
            u2 = t3(5776,),
            c3 = t3(6719,),
            p3 = Object.prototype.hasOwnProperty;
          e3.exports = function (f3, l3,) {
            var v3 = a3(f3,),
              y3 = !v3 && i3(f3,),
              d3 = !v3 && !y3 && n3(f3,),
              g3 = !v3 && !y3 && !d3 && c3(f3,),
              _ = v3 || y3 || d3 || g3,
              E = _ ? r4(f3.length, String,) : [],
              A2 = E.length;
            for (var O in f3) {
              !l3 && !p3.call(f3, O,) ||
                _ &&
                (O == 'length' || d3 && (O == 'offset' || O == 'parent') ||
                  g3 && (O == 'buffer' || O == 'byteLength' || O == 'byteOffset') || u2(O, A2,)) ||
                E.push(O,);
            }
            return E;
          };
        },
        2488: (e3,) => {
          e3.exports = function (o3, t3,) {
            for (var r4 = -1, i3 = t3.length, a3 = o3.length; ++r4 < i3;) {
              o3[a3 + r4] = t3[r4];
            }
            return o3;
          };
        },
        2908: (e3,) => {
          e3.exports = function (o3, t3,) {
            for (var r4 = -1, i3 = o3 == null ? 0 : o3.length; ++r4 < i3;) {
              if (t3(o3[r4], r4, o3,)) {
                return true;
              }
            }
            return false;
          };
        },
        8470: (e3, o3, t3,) => {
          var r4 = t3(7813,);
          e3.exports = function (i3, a3,) {
            for (var n3 = i3.length; n3--;) {
              if (r4(i3[n3][0], a3,)) {
                return n3;
              }
            }
            return -1;
          };
        },
        8866: (e3, o3, t3,) => {
          var r4 = t3(2488,), i3 = t3(1469,);
          e3.exports = function (a3, n3, u2,) {
            var c3 = n3(a3,);
            return i3(a3,) ? c3 : r4(c3, u2(a3,),);
          };
        },
        4239: (e3, o3, t3,) => {
          var r4 = t3(2705,), i3 = t3(9607,), a3 = t3(2333,), n3 = r4 ? r4.toStringTag : void 0;
          e3.exports = function (u2,) {
            return u2 == null ? u2 === void 0 ? '[object Undefined]' : '[object Null]' : n3 && n3 in Object(u2,) ? i3(u2,) : a3(u2,);
          };
        },
        9454: (e3, o3, t3,) => {
          var r4 = t3(4239,), i3 = t3(7005,);
          e3.exports = function (a3,) {
            return i3(a3,) && r4(a3,) == '[object Arguments]';
          };
        },
        939: (e3, o3, t3,) => {
          var r4 = t3(2492,), i3 = t3(7005,);
          e3.exports = function a3(n3, u2, c3, p3, f3,) {
            return n3 === u2 || (n3 == null || u2 == null || !i3(n3,) && !i3(u2,) ? n3 != n3 && u2 != u2 : r4(n3, u2, c3, p3, a3, f3,));
          };
        },
        2492: (e3, o3, t3,) => {
          var r4 = t3(6384,),
            i3 = t3(7114,),
            a3 = t3(8351,),
            n3 = t3(6096,),
            u2 = t3(4160,),
            c3 = t3(1469,),
            p3 = t3(4144,),
            f3 = t3(6719,),
            l3 = '[object Arguments]',
            v3 = '[object Array]',
            y3 = '[object Object]',
            d3 = Object.prototype.hasOwnProperty;
          e3.exports = function (g3, _, E, A2, O, m3,) {
            var w3 = c3(g3,),
              N = c3(_,),
              L = w3 ? v3 : u2(g3,),
              M2 = N ? v3 : u2(_,),
              S = (L = L == l3 ? y3 : L) == y3,
              U = (M2 = M2 == l3 ? y3 : M2) == y3,
              V = L == M2;
            if (V && p3(g3,)) {
              if (!p3(_,)) {
                return false;
              }
              w3 = true, S = false;
            }
            if (V && !S) {
              return m3 || (m3 = new r4()), w3 || f3(g3,) ? i3(g3, _, E, A2, O, m3,) : a3(g3, _, L, E, A2, O, m3,);
            }
            if (!(1 & E)) {
              var x3 = S && d3.call(g3, '__wrapped__',), h3 = U && d3.call(_, '__wrapped__',);
              if (x3 || h3) {
                var T = x3 ? g3.value() : g3, j2 = h3 ? _.value() : _;
                return m3 || (m3 = new r4()), O(T, j2, E, A2, m3,);
              }
            }
            return !!V && (m3 || (m3 = new r4()), n3(g3, _, E, A2, O, m3,));
          };
        },
        8458: (e3, o3, t3,) => {
          var r4 = t3(3560,),
            i3 = t3(5346,),
            a3 = t3(3218,),
            n3 = t3(346,),
            u2 = /^\[object .+?Constructor\]$/,
            c3 = Function.prototype,
            p3 = Object.prototype,
            f3 = c3.toString,
            l3 = p3.hasOwnProperty,
            v3 = RegExp(
              '^' +
              f3.call(l3,).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&',).replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ) + '$',
            );
          e3.exports = function (y3,) {
            return !(!a3(y3,) || i3(y3,)) && (r4(y3,) ? v3 : u2).test(n3(y3,),);
          };
        },
        8749: (e3, o3, t3,) => {
          var r4 = t3(4239,), i3 = t3(1780,), a3 = t3(7005,), n3 = {};
          n3['[object Float32Array]'] =
            n3['[object Float64Array]'] =
            n3['[object Int8Array]'] =
            n3['[object Int16Array]'] =
            n3['[object Int32Array]'] =
            n3['[object Uint8Array]'] =
            n3['[object Uint8ClampedArray]'] =
            n3['[object Uint16Array]'] =
            n3['[object Uint32Array]'] =
            true,
            n3['[object Arguments]'] =
            n3['[object Array]'] =
            n3['[object ArrayBuffer]'] =
            n3['[object Boolean]'] =
            n3['[object DataView]'] =
            n3['[object Date]'] =
            n3['[object Error]'] =
            n3['[object Function]'] =
            n3['[object Map]'] =
            n3['[object Number]'] =
            n3['[object Object]'] =
            n3['[object RegExp]'] =
            n3['[object Set]'] =
            n3['[object String]'] =
            n3['[object WeakMap]'] =
            false,
            e3.exports = function (u2,) {
              return a3(u2,) && i3(u2.length,) && !!n3[r4(u2,)];
            };
        },
        280: (e3, o3, t3,) => {
          var r4 = t3(5726,), i3 = t3(6916,), a3 = Object.prototype.hasOwnProperty;
          e3.exports = function (n3,) {
            if (!r4(n3,)) {
              return i3(n3,);
            }
            var u2 = [];
            for (var c3 in Object(n3,)) {
              a3.call(n3, c3,) && c3 != 'constructor' && u2.push(c3,);
            }
            return u2;
          };
        },
        2545: (e3,) => {
          e3.exports = function (o3, t3,) {
            for (var r4 = -1, i3 = Array(o3,); ++r4 < o3;) {
              i3[r4] = t3(r4,);
            }
            return i3;
          };
        },
        1717: (e3,) => {
          e3.exports = function (o3,) {
            return function (t3,) {
              return o3(t3,);
            };
          };
        },
        4757: (e3,) => {
          e3.exports = function (o3, t3,) {
            return o3.has(t3,);
          };
        },
        4429: (e3, o3, t3,) => {
          var r4 = t3(5639,)['__core-js_shared__'];
          e3.exports = r4;
        },
        7114: (e3, o3, t3,) => {
          var r4 = t3(8668,), i3 = t3(2908,), a3 = t3(4757,);
          e3.exports = function (n3, u2, c3, p3, f3, l3,) {
            var v3 = 1 & c3, y3 = n3.length, d3 = u2.length;
            if (y3 != d3 && !(v3 && d3 > y3)) {
              return false;
            }
            var g3 = l3.get(n3,), _ = l3.get(u2,);
            if (g3 && _) {
              return g3 == u2 && _ == n3;
            }
            var E = -1, A2 = true, O = 2 & c3 ? new r4() : void 0;
            for (l3.set(n3, u2,), l3.set(u2, n3,); ++E < y3;) {
              var m3 = n3[E], w3 = u2[E];
              if (p3) {
                var N = v3 ? p3(w3, m3, E, u2, n3, l3,) : p3(m3, w3, E, n3, u2, l3,);
              }
              if (N !== void 0) {
                if (N) {
                  continue;
                }
                A2 = false;
                break;
              }
              if (O) {
                if (
                  !i3(u2, function (L, M2,) {
                    if (!a3(O, M2,) && (m3 === L || f3(m3, L, c3, p3, l3,))) {
                      return O.push(M2,);
                    }
                  },)
                ) {
                  A2 = false;
                  break;
                }
              } else if (m3 !== w3 && !f3(m3, w3, c3, p3, l3,)) {
                A2 = false;
                break;
              }
            }
            return l3.delete(n3,), l3.delete(u2,), A2;
          };
        },
        8351: (e3, o3, t3,) => {
          var r4 = t3(2705,),
            i3 = t3(1149,),
            a3 = t3(7813,),
            n3 = t3(7114,),
            u2 = t3(8776,),
            c3 = t3(1814,),
            p3 = r4 ? r4.prototype : void 0,
            f3 = p3 ? p3.valueOf : void 0;
          e3.exports = function (l3, v3, y3, d3, g3, _, E,) {
            switch (y3) {
              case '[object DataView]':
                if (l3.byteLength != v3.byteLength || l3.byteOffset != v3.byteOffset) {
                  return false;
                }
                l3 = l3.buffer, v3 = v3.buffer;
              case '[object ArrayBuffer]':
                return !(l3.byteLength != v3.byteLength || !_(new i3(l3,), new i3(v3,),));
              case '[object Boolean]':
              case '[object Date]':
              case '[object Number]':
                return a3(+l3, +v3,);
              case '[object Error]':
                return l3.name == v3.name && l3.message == v3.message;
              case '[object RegExp]':
              case '[object String]':
                return l3 == v3 + '';
              case '[object Map]':
                var A2 = u2;
              case '[object Set]':
                var O = 1 & d3;
                if (A2 || (A2 = c3), l3.size != v3.size && !O) {
                  return false;
                }
                var m3 = E.get(l3,);
                if (m3) {
                  return m3 == v3;
                }
                d3 |= 2, E.set(l3, v3,);
                var w3 = n3(A2(l3,), A2(v3,), d3, g3, _, E,);
                return E.delete(l3,), w3;
              case '[object Symbol]':
                if (f3) {
                  return f3.call(l3,) == f3.call(v3,);
                }
            }
            return false;
          };
        },
        6096: (e3, o3, t3,) => {
          var r4 = t3(8234,), i3 = Object.prototype.hasOwnProperty;
          e3.exports = function (a3, n3, u2, c3, p3, f3,) {
            var l3 = 1 & u2, v3 = r4(a3,), y3 = v3.length;
            if (y3 != r4(n3,).length && !l3) {
              return false;
            }
            for (var d3 = y3; d3--;) {
              var g3 = v3[d3];
              if (!(l3 ? g3 in n3 : i3.call(n3, g3,))) {
                return false;
              }
            }
            var _ = f3.get(a3,), E = f3.get(n3,);
            if (_ && E) {
              return _ == n3 && E == a3;
            }
            var A2 = true;
            f3.set(a3, n3,), f3.set(n3, a3,);
            for (var O = l3; ++d3 < y3;) {
              var m3 = a3[g3 = v3[d3]], w3 = n3[g3];
              if (c3) {
                var N = l3 ? c3(w3, m3, g3, n3, a3, f3,) : c3(m3, w3, g3, a3, n3, f3,);
              }
              if (!(N === void 0 ? m3 === w3 || p3(m3, w3, u2, c3, f3,) : N)) {
                A2 = false;
                break;
              }
              O || (O = g3 == 'constructor');
            }
            if (A2 && !O) {
              var L = a3.constructor, M2 = n3.constructor;
              L == M2 || !('constructor' in a3) || !('constructor' in n3) ||
                typeof L == 'function' && L instanceof L && typeof M2 == 'function' && M2 instanceof M2 || (A2 = false);
            }
            return f3.delete(a3,), f3.delete(n3,), A2;
          };
        },
        1957: (e3, o3, t3,) => {
          var r4 = typeof t3.g == 'object' && t3.g && t3.g.Object === Object && t3.g;
          e3.exports = r4;
        },
        8234: (e3, o3, t3,) => {
          var r4 = t3(8866,), i3 = t3(9551,), a3 = t3(3674,);
          e3.exports = function (n3,) {
            return r4(n3, a3, i3,);
          };
        },
        5050: (e3, o3, t3,) => {
          var r4 = t3(7019,);
          e3.exports = function (i3, a3,) {
            var n3 = i3.__data__;
            return r4(a3,) ? n3[typeof a3 == 'string' ? 'string' : 'hash'] : n3.map;
          };
        },
        852: (e3, o3, t3,) => {
          var r4 = t3(8458,), i3 = t3(7801,);
          e3.exports = function (a3, n3,) {
            var u2 = i3(a3, n3,);
            return r4(u2,) ? u2 : void 0;
          };
        },
        9607: (e3, o3, t3,) => {
          var r4 = t3(2705,), i3 = Object.prototype, a3 = i3.hasOwnProperty, n3 = i3.toString, u2 = r4 ? r4.toStringTag : void 0;
          e3.exports = function (c3,) {
            var p3 = a3.call(c3, u2,), f3 = c3[u2];
            try {
              c3[u2] = void 0;
              var l3 = true;
            } catch {
            }
            var v3 = n3.call(c3,);
            return l3 && (p3 ? c3[u2] = f3 : delete c3[u2]), v3;
          };
        },
        9551: (e3, o3, t3,) => {
          var r4 = t3(4963,),
            i3 = t3(479,),
            a3 = Object.prototype.propertyIsEnumerable,
            n3 = Object.getOwnPropertySymbols,
            u2 = n3
              ? function (c3,) {
                return c3 == null ? [] : (c3 = Object(c3,),
                  r4(n3(c3,), function (p3,) {
                    return a3.call(c3, p3,);
                  },));
              }
              : i3;
          e3.exports = u2;
        },
        4160: (e3, o3, t3,) => {
          var r4 = t3(8552,),
            i3 = t3(7071,),
            a3 = t3(3818,),
            n3 = t3(8525,),
            u2 = t3(577,),
            c3 = t3(4239,),
            p3 = t3(346,),
            f3 = '[object Map]',
            l3 = '[object Promise]',
            v3 = '[object Set]',
            y3 = '[object WeakMap]',
            d3 = '[object DataView]',
            g3 = p3(r4,),
            _ = p3(i3,),
            E = p3(a3,),
            A2 = p3(n3,),
            O = p3(u2,),
            m3 = c3;
          (r4 && m3(new r4(new ArrayBuffer(1,),),) != d3 || i3 && m3(new i3(),) != f3 || a3 && m3(a3.resolve(),) != l3 ||
            n3 && m3(new n3(),) != v3 || u2 && m3(new u2(),) != y3) && (m3 = function (w3,) {
              var N = c3(w3,), L = N == '[object Object]' ? w3.constructor : void 0, M2 = L ? p3(L,) : '';
              if (M2) {
                switch (M2) {
                  case g3:
                    return d3;
                  case _:
                    return f3;
                  case E:
                    return l3;
                  case A2:
                    return v3;
                  case O:
                    return y3;
                }
              }
              return N;
            }), e3.exports = m3;
        },
        7801: (e3,) => {
          e3.exports = function (o3, t3,) {
            return o3?.[t3];
          };
        },
        1789: (e3, o3, t3,) => {
          var r4 = t3(4536,);
          e3.exports = function () {
            this.__data__ = r4 ? r4(null,) : {}, this.size = 0;
          };
        },
        401: (e3,) => {
          e3.exports = function (o3,) {
            var t3 = this.has(o3,) && delete this.__data__[o3];
            return this.size -= t3 ? 1 : 0, t3;
          };
        },
        7667: (e3, o3, t3,) => {
          var r4 = t3(4536,), i3 = Object.prototype.hasOwnProperty;
          e3.exports = function (a3,) {
            var n3 = this.__data__;
            if (r4) {
              var u2 = n3[a3];
              return u2 === '__lodash_hash_undefined__' ? void 0 : u2;
            }
            return i3.call(n3, a3,) ? n3[a3] : void 0;
          };
        },
        1327: (e3, o3, t3,) => {
          var r4 = t3(4536,), i3 = Object.prototype.hasOwnProperty;
          e3.exports = function (a3,) {
            var n3 = this.__data__;
            return r4 ? n3[a3] !== void 0 : i3.call(n3, a3,);
          };
        },
        1866: (e3, o3, t3,) => {
          var r4 = t3(4536,);
          e3.exports = function (i3, a3,) {
            var n3 = this.__data__;
            return this.size += this.has(i3,) ? 0 : 1, n3[i3] = r4 && a3 === void 0 ? '__lodash_hash_undefined__' : a3, this;
          };
        },
        5776: (e3,) => {
          var o3 = /^(?:0|[1-9]\d*)$/;
          e3.exports = function (t3, r4,) {
            var i3 = typeof t3;
            return !!(r4 = r4 ?? 9007199254740991) && (i3 == 'number' || i3 != 'symbol' && o3.test(t3,)) && t3 > -1 && t3 % 1 == 0 &&
              t3 < r4;
          };
        },
        7019: (e3,) => {
          e3.exports = function (o3,) {
            var t3 = typeof o3;
            return t3 == 'string' || t3 == 'number' || t3 == 'symbol' || t3 == 'boolean' ? o3 !== '__proto__' : o3 === null;
          };
        },
        5346: (e3, o3, t3,) => {
          var r4, i3 = t3(4429,), a3 = (r4 = /[^.]+$/.exec(i3 && i3.keys && i3.keys.IE_PROTO || '',)) ? 'Symbol(src)_1.' + r4 : '';
          e3.exports = function (n3,) {
            return !!a3 && a3 in n3;
          };
        },
        5726: (e3,) => {
          var o3 = Object.prototype;
          e3.exports = function (t3,) {
            var r4 = t3 && t3.constructor;
            return t3 === (typeof r4 == 'function' && r4.prototype || o3);
          };
        },
        7040: (e3,) => {
          e3.exports = function () {
            this.__data__ = [], this.size = 0;
          };
        },
        4125: (e3, o3, t3,) => {
          var r4 = t3(8470,), i3 = Array.prototype.splice;
          e3.exports = function (a3,) {
            var n3 = this.__data__, u2 = r4(n3, a3,);
            return !(u2 < 0 || (u2 == n3.length - 1 ? n3.pop() : i3.call(n3, u2, 1,), --this.size, 0));
          };
        },
        2117: (e3, o3, t3,) => {
          var r4 = t3(8470,);
          e3.exports = function (i3,) {
            var a3 = this.__data__, n3 = r4(a3, i3,);
            return n3 < 0 ? void 0 : a3[n3][1];
          };
        },
        7518: (e3, o3, t3,) => {
          var r4 = t3(8470,);
          e3.exports = function (i3,) {
            return r4(this.__data__, i3,) > -1;
          };
        },
        4705: (e3, o3, t3,) => {
          var r4 = t3(8470,);
          e3.exports = function (i3, a3,) {
            var n3 = this.__data__, u2 = r4(n3, i3,);
            return u2 < 0 ? (++this.size, n3.push([i3, a3,],)) : n3[u2][1] = a3, this;
          };
        },
        4785: (e3, o3, t3,) => {
          var r4 = t3(1989,), i3 = t3(8407,), a3 = t3(7071,);
          e3.exports = function () {
            this.size = 0, this.__data__ = { hash: new r4(), map: new (a3 || i3)(), string: new r4(), };
          };
        },
        1285: (e3, o3, t3,) => {
          var r4 = t3(5050,);
          e3.exports = function (i3,) {
            var a3 = r4(this, i3,).delete(i3,);
            return this.size -= a3 ? 1 : 0, a3;
          };
        },
        6e3: (e3, o3, t3,) => {
          var r4 = t3(5050,);
          e3.exports = function (i3,) {
            return r4(this, i3,).get(i3,);
          };
        },
        9916: (e3, o3, t3,) => {
          var r4 = t3(5050,);
          e3.exports = function (i3,) {
            return r4(this, i3,).has(i3,);
          };
        },
        5265: (e3, o3, t3,) => {
          var r4 = t3(5050,);
          e3.exports = function (i3, a3,) {
            var n3 = r4(this, i3,), u2 = n3.size;
            return n3.set(i3, a3,), this.size += n3.size == u2 ? 0 : 1, this;
          };
        },
        8776: (e3,) => {
          e3.exports = function (o3,) {
            var t3 = -1, r4 = Array(o3.size,);
            return o3.forEach(function (i3, a3,) {
              r4[++t3] = [a3, i3,];
            },),
              r4;
          };
        },
        4536: (e3, o3, t3,) => {
          var r4 = t3(852,)(Object, 'create',);
          e3.exports = r4;
        },
        6916: (e3, o3, t3,) => {
          var r4 = t3(5569,)(Object.keys, Object,);
          e3.exports = r4;
        },
        1167: (e3, o3, t3,) => {
          e3 = t3.nmd(e3,);
          var r4 = t3(1957,),
            i3 = o3 && !o3.nodeType && o3,
            a3 = i3 && e3 && !e3.nodeType && e3,
            n3 = a3 && a3.exports === i3 && r4.process,
            u2 = function () {
              try {
                return a3 && a3.require && a3.require('util',).types || n3 && n3.binding && n3.binding('util',);
              } catch {
              }
            }();
          e3.exports = u2;
        },
        2333: (e3,) => {
          var o3 = Object.prototype.toString;
          e3.exports = function (t3,) {
            return o3.call(t3,);
          };
        },
        5569: (e3,) => {
          e3.exports = function (o3, t3,) {
            return function (r4,) {
              return o3(t3(r4,),);
            };
          };
        },
        5639: (e3, o3, t3,) => {
          var r4 = t3(1957,),
            i3 = typeof self == 'object' && self && self.Object === Object && self,
            a3 = r4 || i3 || Function('return this',)();
          e3.exports = a3;
        },
        619: (e3,) => {
          e3.exports = function (o3,) {
            return this.__data__.set(o3, '__lodash_hash_undefined__',), this;
          };
        },
        2385: (e3,) => {
          e3.exports = function (o3,) {
            return this.__data__.has(o3,);
          };
        },
        1814: (e3,) => {
          e3.exports = function (o3,) {
            var t3 = -1, r4 = Array(o3.size,);
            return o3.forEach(function (i3,) {
              r4[++t3] = i3;
            },),
              r4;
          };
        },
        7465: (e3, o3, t3,) => {
          var r4 = t3(8407,);
          e3.exports = function () {
            this.__data__ = new r4(), this.size = 0;
          };
        },
        3779: (e3,) => {
          e3.exports = function (o3,) {
            var t3 = this.__data__, r4 = t3.delete(o3,);
            return this.size = t3.size, r4;
          };
        },
        7599: (e3,) => {
          e3.exports = function (o3,) {
            return this.__data__.get(o3,);
          };
        },
        4758: (e3,) => {
          e3.exports = function (o3,) {
            return this.__data__.has(o3,);
          };
        },
        4309: (e3, o3, t3,) => {
          var r4 = t3(8407,), i3 = t3(7071,), a3 = t3(3369,);
          e3.exports = function (n3, u2,) {
            var c3 = this.__data__;
            if (c3 instanceof r4) {
              var p3 = c3.__data__;
              if (!i3 || p3.length < 199) {
                return p3.push([n3, u2,],), this.size = ++c3.size, this;
              }
              c3 = this.__data__ = new a3(p3,);
            }
            return c3.set(n3, u2,), this.size = c3.size, this;
          };
        },
        346: (e3,) => {
          var o3 = Function.prototype.toString;
          e3.exports = function (t3,) {
            if (t3 != null) {
              try {
                return o3.call(t3,);
              } catch {
              }
              try {
                return t3 + '';
              } catch {
              }
            }
            return '';
          };
        },
        7813: (e3,) => {
          e3.exports = function (o3, t3,) {
            return o3 === t3 || o3 != o3 && t3 != t3;
          };
        },
        5694: (e3, o3, t3,) => {
          var r4 = t3(9454,),
            i3 = t3(7005,),
            a3 = Object.prototype,
            n3 = a3.hasOwnProperty,
            u2 = a3.propertyIsEnumerable,
            c3 = r4(/* @__PURE__ */ function () {
              return arguments;
            }(),)
              ? r4
              : function (p3,) {
                return i3(p3,) && n3.call(p3, 'callee',) && !u2.call(p3, 'callee',);
              };
          e3.exports = c3;
        },
        1469: (e3,) => {
          var o3 = Array.isArray;
          e3.exports = o3;
        },
        8612: (e3, o3, t3,) => {
          var r4 = t3(3560,), i3 = t3(1780,);
          e3.exports = function (a3,) {
            return a3 != null && i3(a3.length,) && !r4(a3,);
          };
        },
        4144: (e3, o3, t3,) => {
          e3 = t3.nmd(e3,);
          var r4 = t3(5639,),
            i3 = t3(5062,),
            a3 = o3 && !o3.nodeType && o3,
            n3 = a3 && e3 && !e3.nodeType && e3,
            u2 = n3 && n3.exports === a3 ? r4.Buffer : void 0,
            c3 = (u2 ? u2.isBuffer : void 0) || i3;
          e3.exports = c3;
        },
        8446: (e3, o3, t3,) => {
          var r4 = t3(939,);
          e3.exports = function (i3, a3,) {
            return r4(i3, a3,);
          };
        },
        3560: (e3, o3, t3,) => {
          var r4 = t3(4239,), i3 = t3(3218,);
          e3.exports = function (a3,) {
            if (!i3(a3,)) {
              return false;
            }
            var n3 = r4(a3,);
            return n3 == '[object Function]' || n3 == '[object GeneratorFunction]' || n3 == '[object AsyncFunction]' ||
              n3 == '[object Proxy]';
          };
        },
        1780: (e3,) => {
          e3.exports = function (o3,) {
            return typeof o3 == 'number' && o3 > -1 && o3 % 1 == 0 && o3 <= 9007199254740991;
          };
        },
        3218: (e3,) => {
          e3.exports = function (o3,) {
            var t3 = typeof o3;
            return o3 != null && (t3 == 'object' || t3 == 'function');
          };
        },
        7005: (e3,) => {
          e3.exports = function (o3,) {
            return o3 != null && typeof o3 == 'object';
          };
        },
        6719: (e3, o3, t3,) => {
          var r4 = t3(8749,), i3 = t3(1717,), a3 = t3(1167,), n3 = a3 && a3.isTypedArray, u2 = n3 ? i3(n3,) : r4;
          e3.exports = u2;
        },
        3674: (e3, o3, t3,) => {
          var r4 = t3(4636,), i3 = t3(280,), a3 = t3(8612,);
          e3.exports = function (n3,) {
            return a3(n3,) ? r4(n3,) : i3(n3,);
          };
        },
        479: (e3,) => {
          e3.exports = function () {
            return [];
          };
        },
        5062: (e3,) => {
          e3.exports = function () {
            return false;
          };
        },
        75: function (e3,) {
          (function () {
            var o3, t3, r4, i3, a3, n3;
            typeof performance < 'u' && performance !== null && performance.now
              ? e3.exports = function () {
                return performance.now();
              }
              : typeof process < 'u' && process !== null && process.hrtime
                ? (e3.exports = function () {
                  return (o3() - a3) / 1e6;
                },
                  t3 = process.hrtime,
                  i3 = (o3 = function () {
                    var u2;
                    return 1e9 * (u2 = t3())[0] + u2[1];
                  })(),
                  n3 = 1e9 * process.uptime(),
                  a3 = i3 - n3)
                : Date.now
                  ? (e3.exports = function () {
                    return Date.now() - r4;
                  },
                    r4 = Date.now())
                  : (e3.exports = function () {
                    return (/* @__PURE__ */ new Date()).getTime() - r4;
                  },
                    r4 = (/* @__PURE__ */ new Date()).getTime());
          }).call(this,);
        },
        4087: (e3, o3, t3,) => {
          for (
            var r4 = t3(75,),
            i3 = typeof window > 'u' ? t3.g : window,
            a3 = ['moz', 'webkit',],
            n3 = 'AnimationFrame',
            u2 = i3['request' + n3],
            c3 = i3['cancel' + n3] || i3['cancelRequest' + n3],
            p3 = 0;
            !u2 && p3 < a3.length;
            p3++
          ) {
            u2 = i3[a3[p3] + 'Request' + n3], c3 = i3[a3[p3] + 'Cancel' + n3] || i3[a3[p3] + 'CancelRequest' + n3];
          }
          if (!u2 || !c3) {
            var f3 = 0, l3 = 0, v3 = [];
            u2 = function (y3,) {
              if (v3.length === 0) {
                var d3 = r4(), g3 = Math.max(0, 16.666666666666668 - (d3 - f3),);
                f3 = g3 + d3,
                  setTimeout(function () {
                    var _ = v3.slice(0,);
                    v3.length = 0;
                    for (var E = 0; E < _.length; E++) {
                      if (!_[E].cancelled) {
                        try {
                          _[E].callback(f3,);
                        } catch (A2) {
                          setTimeout(function () {
                            throw A2;
                          }, 0,);
                        }
                      }
                    }
                  }, Math.round(g3,),);
              }
              return v3.push({ handle: ++l3, callback: y3, cancelled: false, },), l3;
            },
              c3 = function (y3,) {
                for (var d3 = 0; d3 < v3.length; d3++) {
                  v3[d3].handle === y3 && (v3[d3].cancelled = true);
                }
              };
          }
          e3.exports = function (y3,) {
            return u2.call(i3, y3,);
          },
            e3.exports.cancel = function () {
              c3.apply(i3, arguments,);
            },
            e3.exports.polyfill = function (y3,) {
              y3 || (y3 = i3), y3.requestAnimationFrame = u2, y3.cancelAnimationFrame = c3;
            };
        },
        8156: (e3,) => {
          'use strict';
          e3.exports = C2;
        },
      },
        z = {};
      function R3(e3,) {
        var o3 = z[e3];
        if (o3 !== void 0) {
          return o3.exports;
        }
        var t3 = z[e3] = { id: e3, loaded: false, exports: {}, };
        return P[e3].call(t3.exports, t3, t3.exports, R3,), t3.loaded = true, t3.exports;
      }
      R3.n = (e3,) => {
        var o3 = e3 && e3.__esModule ? () => e3.default : () => e3;
        return R3.d(o3, { a: o3, },), o3;
      },
        R3.d = (e3, o3,) => {
          for (var t3 in o3) {
            R3.o(o3, t3,) && !R3.o(e3, t3,) && Object.defineProperty(e3, t3, { enumerable: true, get: o3[t3], },);
          }
        },
        R3.g = function () {
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
        R3.o = (e3, o3,) => Object.prototype.hasOwnProperty.call(e3, o3,),
        R3.nmd = (e3,) => (e3.paths = [], e3.children || (e3.children = []), e3);
      var B2 = {};
      return (() => {
        'use strict';
        R3.d(B2, { default: () => v3, },);
        var e3 = R3(8156,), o3 = R3.n(e3,), t3 = R3(7403,), r4 = R3(8446,), i3 = R3.n(r4,);
        function a3(y3,) {
          return a3 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (d3,) {
              return typeof d3;
            }
            : function (d3,) {
              return d3 && typeof Symbol == 'function' && d3.constructor === Symbol && d3 !== Symbol.prototype ? 'symbol' : typeof d3;
            },
            a3(y3,);
        }
        function n3(y3, d3,) {
          for (var g3 = 0; g3 < d3.length; g3++) {
            var _ = d3[g3];
            _.enumerable = _.enumerable || false,
              _.configurable = true,
              'value' in _ && (_.writable = true),
              Object.defineProperty(y3, f3(_.key,), _,);
          }
        }
        function u2(y3, d3,) {
          return u2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (g3, _,) {
            return g3.__proto__ = _, g3;
          },
            u2(y3, d3,);
        }
        function c3(y3,) {
          if (y3 === void 0) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called',);
          }
          return y3;
        }
        function p3(y3,) {
          return p3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (d3,) {
            return d3.__proto__ || Object.getPrototypeOf(d3,);
          },
            p3(y3,);
        }
        function f3(y3,) {
          var d3 = function (g3, _,) {
            if (a3(g3,) !== 'object' || g3 === null) {
              return g3;
            }
            var E = g3[Symbol.toPrimitive];
            if (E !== void 0) {
              var A2 = E.call(g3, 'string',);
              if (a3(A2,) !== 'object') {
                return A2;
              }
              throw new TypeError('@@toPrimitive must return a primitive value.',);
            }
            return String(g3,);
          }(y3,);
          return a3(d3,) === 'symbol' ? d3 : String(d3,);
        }
        var l3 = function (y3,) {
          (function (m3, w3,) {
            if (typeof w3 != 'function' && w3 !== null) {
              throw new TypeError('Super expression must either be null or a function',);
            }
            m3.prototype = Object.create(w3 && w3.prototype, { constructor: { value: m3, writable: true, configurable: true, }, },),
              Object.defineProperty(m3, 'prototype', { writable: false, },),
              w3 && u2(m3, w3,);
          })(O, y3,);
          var d3,
            g3,
            _,
            E,
            A2 = (_ = O,
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
                var m3, w3 = p3(_,);
                if (E) {
                  var N = p3(this,).constructor;
                  m3 = Reflect.construct(w3, arguments, N,);
                } else {
                  m3 = w3.apply(this, arguments,);
                }
                return function (L, M2,) {
                  if (M2 && (a3(M2,) === 'object' || typeof M2 == 'function')) {
                    return M2;
                  }
                  if (M2 !== void 0) {
                    throw new TypeError('Derived constructors may only return object or undefined',);
                  }
                  return c3(L,);
                }(this, m3,);
              });
          function O() {
            var m3, w3, N, L;
            (function (V, x3,) {
              if (!(V instanceof x3)) {
                throw new TypeError('Cannot call a class as a function',);
              }
            })(this, O,);
            for (var M2 = arguments.length, S = new Array(M2,), U = 0; U < M2; U++) {
              S[U] = arguments[U];
            }
            return w3 = c3(m3 = A2.call.apply(A2, [this,].concat(S,),),),
              L = { instance: null, },
              (N = f3(N = 'state',)) in w3
                ? Object.defineProperty(w3, N, { value: L, enumerable: true, configurable: true, writable: true, },)
                : w3[N] = L,
              m3;
          }
          return d3 = O,
            (g3 = [{
              key: 'componentDidMount',
              value: function () {
                var m3 = this, w3 = new t3.default(this.typewriter, this.props.options,);
                this.setState({ instance: w3, }, function () {
                  var N = m3.props.onInit;
                  N && N(w3,);
                },);
              },
            }, {
              key: 'componentDidUpdate',
              value: function (m3,) {
                i3()(this.props.options, m3.options,) ||
                  this.setState({ instance: new t3.default(this.typewriter, this.props.options,), },);
              },
            }, {
              key: 'componentWillUnmount',
              value: function () {
                this.state.instance && this.state.instance.stop();
              },
            }, {
              key: 'render',
              value: function () {
                var m3 = this, w3 = this.props.component;
                return o3().createElement(w3, {
                  ref: function (N,) {
                    return m3.typewriter = N;
                  },
                  className: 'Typewriter',
                  'data-testid': 'typewriter-wrapper',
                },);
              },
            },]) && n3(d3.prototype, g3,),
            Object.defineProperty(d3, 'prototype', { writable: false, },),
            O;
        }(e3.Component,);
        l3.defaultProps = { component: 'div', };
        let v3 = l3;
      })(),
        B2.default;
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

// https:https://framerusercontent.com/modules/dts3KkzoHO6kQWh7b5Ug/B1Gsx1bsoWgEcHZ6ixdx/A4GdXWFMj.js
import { jsx as _jsx5, jsxs as _jsxs3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls5,
  ControlType as ControlType8,
  cx as cx3,
  getFonts as getFonts2,
  getPropertyControls,
  RichText as RichText2,
  SVG as SVG3,
  useLocaleInfo as useLocaleInfo3,
  useVariantState as useVariantState3,
  withCSS as withCSS5,
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext3, } from 'framer-motion';
import * as React5 from 'react';

// https:https://framerusercontent.com/modules/GuWa1Ud162ubWf1k1mKH/kGi9lI9nvgupW4e2VxtJ/FpOKcRGFb.js
import { jsx as _jsx4, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls4,
  ControlType as ControlType7,
  cx as cx2,
  getFonts,
  RichText,
  SVG as SVG2,
  useLocaleCode,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS4,
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2, } from 'framer-motion';
import * as React4 from 'react';

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
var isMotionValue = (v3,) => v3 instanceof MotionValue;

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
  const handleInputChange = (e3,) => {
    updateValue(parseFloat(e3.target.value,), value,);
  };
  const handleMouseDown = (e3,) => {
    if (parseFloat(e3.target.value,) !== 0) {
      updateValue(parseFloat(e3.target.value,), value,);
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

// https:https://framerusercontent.com/modules/VFd7g4pPpeQfOVRIoRr0/wzMpOw8WySsXu5Z3mOOv/ydC9w7qn8.js
import { fontStore as r, } from 'installable-framer/dist/framer';
r.loadWebFontsFromSelectors(['CUSTOM;PP Supply Sans Medium',],);
var fonts = [{ family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },];
var css = [
  '.framer-flOLY .framer-styles-preset-90m2e0:not(.rich-text-wrapper), .framer-flOLY .framer-styles-preset-90m2e0.rich-text-wrapper h4 { --framer-font-family: "PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, #101942); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className = 'framer-flOLY';

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

// https:https://framerusercontent.com/modules/XVtd2bf3UBXWeoE8atnJ/p0XqgJqJRcMVAc0XLYkI/O3yRlw71i.js
import { jsx as r2, jsxs as e, } from 'react/jsx-runtime';
import {
  addFonts as a,
  addPropertyControls as t,
  ControlType as o,
  cx as i,
  SVG as d,
  useActiveVariantCallback as n,
  useLocaleInfo as l,
  useVariantState as s,
  withCSS as p,
} from 'installable-framer/dist/framer';
import { LayoutGroup as m, motion as f, MotionConfigContext as g, } from 'framer-motion';
import * as v from 'react';
var h = { J6MeOBYHD: { hover: true, pressed: true, }, ygo8X2vVX: { hover: true, pressed: true, }, };
var c = ['ygo8X2vVX', 'J6MeOBYHD',];
var b = { J6MeOBYHD: 'framer-v-1d5zi15', ygo8X2vVX: 'framer-v-1gklv01', };
function x(r22, ...e22) {
  let a22 = {};
  return null == e22 || e22.forEach((e3,) => e3 && Object.assign(a22, r22[e3],)), a22;
}
var y = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var k = (r22, e22,) => `translateY(-50%) ${e22}`;
var w = (r22, e22,) => `translate(-50%, -50%) ${e22}`;
var X = ({ value: e22, children: a22, },) => {
  let t22 = v.useContext(g,),
    o22 = null != e22 ? e22 : t22.transition,
    i22 = v.useMemo(() => ({ ...t22, transition: o22, }), [JSON.stringify(o22,),],);
  return /* @__PURE__ */ r2(g.Provider, { value: i22, children: a22, },);
};
var D2 = { left: 'J6MeOBYHD', right: 'ygo8X2vVX', };
var B = ({ height: r22, id: e22, width: a22, ...t22 },) => {
  var o22, i22;
  return {
    ...t22,
    variant: null !== (i22 = null !== (o22 = D2[t22.variant]) && void 0 !== o22 ? o22 : t22.variant) && void 0 !== i22 ? i22 : 'ygo8X2vVX',
  };
};
var A = (r22, e22,) => e22.join('-',) + r22.layoutDependency;
var H = /* @__PURE__ */ v.forwardRef(function (a22, t22,) {
  let { activeLocale: o22, } = l(),
    { style: p22, className: g22, layoutId: u2, variant: D22, ...H2 } = B(a22,),
    { baseVariant: R22, classNames: M2, gestureVariant: O, setGestureState: Y, setVariant: J, transition: T, variants: C2, } = s({
      cycleOrder: c,
      defaultVariant: 'ygo8X2vVX',
      enabledGestures: h,
      transitions: y,
      variant: D22,
      variantClassNames: b,
    },),
    L = A(a22, C2,),
    { activeVariantCallback: V, delay: z, } = n(R22,),
    I = V(async (...r22) => {
      J('J6MeOBYHD',);
    },),
    j2 = V(async (...r22) => {
      J('ygo8X2vVX',);
    },),
    N = v.useRef(null,),
    S = v.useId();
  return /* @__PURE__ */ r2(m, {
    id: null != u2 ? u2 : S,
    children: /* @__PURE__ */ r2(f.div, {
      initial: D22,
      animate: C2,
      onHoverStart: () => Y({ isHovered: true, },),
      onHoverEnd: () => Y({ isHovered: false, },),
      onTapStart: () => Y({ isPressed: true, },),
      onTap: () => Y({ isPressed: false, },),
      onTapCancel: () => Y({ isPressed: false, },),
      className: i('framer-9Ak9i', ...[], M2,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ r2(X, {
        value: T,
        children: /* @__PURE__ */ r2(f.div, {
          ...H2,
          className: i('framer-1gklv01', g22,),
          'data-framer-name': 'right',
          'data-highlight': true,
          layoutDependency: L,
          layoutId: 'ygo8X2vVX',
          onTap: I,
          ref: null != t22 ? t22 : N,
          style: { ...p22, },
          ...x(
            {
              'J6MeOBYHD-hover': { 'data-framer-name': void 0, },
              'J6MeOBYHD-pressed': { 'data-framer-name': void 0, },
              'ygo8X2vVX-hover': { 'data-framer-name': void 0, },
              'ygo8X2vVX-pressed': { 'data-framer-name': void 0, },
              J6MeOBYHD: { 'data-framer-name': 'left', onTap: j2, },
            },
            R22,
            O,
          ),
          children: /* @__PURE__ */ e(f.div, {
            className: 'framer-1hgdkhu',
            'data-framer-name': 'Selected=true, State=pressed, Icon=true',
            layoutDependency: L,
            layoutId: 'IiXwKNFQk',
            children: [
              /* @__PURE__ */ r2(f.div, {
              className: 'framer-5lpapb',
              'data-framer-name': 'Track',
              layoutDependency: L,
              layoutId: 'G6WOZVctI',
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
                J6MeOBYHD: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(111, 121, 122)',
                  '--border-left-width': '1px',
                  '--border-right-width': '1px',
                  '--border-style': 'solid',
                  '--border-top-width': '1px',
                  backgroundColor: 'rgb(226, 226, 229)',
                },
              },
              ...x({ J6MeOBYHD: { 'data-border': true, }, }, R22, O,),
            },),
              /* @__PURE__ */ e(f.div, {
              className: 'framer-hlafz0',
              'data-framer-name': 'Handle container',
              layoutDependency: L,
              layoutId: 'XRj_lwNYA',
              children: [
                  /* @__PURE__ */ r2(f.div, {
                className: 'framer-1gko0jg',
                'data-framer-name': 'State layer',
                layoutDependency: L,
                layoutId: 'LQLptTlcV',
                style: {
                  backgroundColor: 'rgba(103, 80, 164, 0.12)',
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                  opacity: 0,
                },
                variants: {
                  'J6MeOBYHD-hover': { backgroundColor: 'rgba(29, 27, 32, 0.08)', opacity: 1, },
                  'J6MeOBYHD-pressed': { backgroundColor: 'rgba(29, 27, 32, 0.08)', opacity: 1, },
                  'ygo8X2vVX-hover': { opacity: 1, },
                  'ygo8X2vVX-pressed': { opacity: 1, },
                },
              },),
                  /* @__PURE__ */ r2(f.div, {
                className: 'framer-nsr17c',
                'data-framer-name': 'Handle',
                layoutDependency: L,
                layoutId: 'ySzvyGC5C',
                style: {
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderBottomLeftRadius: 23,
                  borderBottomRightRadius: 23,
                  borderTopLeftRadius: 23,
                  borderTopRightRadius: 23,
                },
                transformTemplate: k,
                variants: {
                  'J6MeOBYHD-hover': { backgroundColor: 'rgb(63, 72, 74)', },
                  'J6MeOBYHD-pressed': { backgroundColor: 'rgb(63, 72, 74)', },
                  'ygo8X2vVX-hover': { backgroundColor: 'rgb(144, 241, 255)', },
                  'ygo8X2vVX-pressed': { backgroundColor: 'rgb(144, 241, 255)', },
                  J6MeOBYHD: {
                    backgroundColor: 'rgb(111, 121, 122)',
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                  },
                },
                ...x(
                  {
                    'J6MeOBYHD-hover': { transformTemplate: void 0, },
                    'J6MeOBYHD-pressed': { transformTemplate: void 0, },
                    J6MeOBYHD: { transformTemplate: void 0, },
                  },
                  R22,
                  O,
                ),
              },),
                  /* @__PURE__ */ r2(f.div, {
                className: 'framer-9l6nfs',
                'data-framer-name': 'Icons/navigate_next',
                layoutDependency: L,
                layoutId: 'qnpH0sC8r',
                transformTemplate: w,
                ...x({ J6MeOBYHD: { transformTemplate: k, }, }, R22, O,),
                children: /* @__PURE__ */ r2(d, {
                  className: 'framer-1w4j10a',
                  'data-framer-name': 'icon',
                  layout: 'position',
                  layoutDependency: L,
                  layoutId: 'DDF46dCqY',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 6"><path d="M 0.777 0 L 0.025 0.705 L 2.468 3 L 0.025 5.295 L 0.777 6 L 3.977 3 Z" fill="rgb(0,31,35)"></path></svg>',
                  svgContentId: 2501881375,
                  withExternalLayout: true,
                  ...x(
                    {
                      'ygo8X2vVX-hover': { svgContentId: 1128838910, },
                      J6MeOBYHD: {
                        svg:
                          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 6"><path d="M 2.46 1 L 3.031 1.587 L 1.177 3.5 L 3.031 5.412 L 2.46 6 L 0.031 3.5 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                        svgContentId: 2777384572,
                      },
                    },
                    R22,
                    O,
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
var R = [
  '.framer-9Ak9i [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-9Ak9i .framer-194fwp6 { display: block; }',
  '.framer-9Ak9i .framer-1gklv01 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-9Ak9i .framer-1hgdkhu { flex: none; height: 15px; overflow: visible; position: relative; width: 24px; }',
  '.framer-9Ak9i .framer-5lpapb { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-9Ak9i .framer-hlafz0 { bottom: -16px; flex: none; left: -8px; overflow: visible; position: absolute; right: -16px; top: -16px; }',
  '.framer-9Ak9i .framer-1gko0jg { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); width: 40px; }',
  '.framer-9Ak9i .framer-nsr17c { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: absolute; right: 18px; top: 50%; width: 12px; }',
  '.framer-9Ak9i .framer-9l6nfs { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 16px; }',
  '.framer-9Ak9i .framer-1w4j10a { flex: none; height: 6px; position: absolute; right: 5px; top: calc(50.00000000000002% - 6px / 2); width: 4px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9Ak9i .framer-1gklv01 { gap: 0px; } .framer-9Ak9i .framer-1gklv01 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-9Ak9i .framer-1gklv01 > :first-child { margin-top: 0px; } .framer-9Ak9i .framer-1gklv01 > :last-child { margin-bottom: 0px; } }',
  '.framer-9Ak9i.framer-v-1d5zi15 .framer-hlafz0 { bottom: -8px; right: unset; top: -8px; width: 48px; }',
  '.framer-9Ak9i.framer-v-1d5zi15 .framer-nsr17c { right: 27px; top: 10px; }',
  '.framer-9Ak9i.framer-v-1d5zi15 .framer-9l6nfs { left: 7px; top: 48%; }',
  '.framer-9Ak9i.framer-v-1d5zi15 .framer-1w4j10a { left: calc(50.00000000000002% - 4px / 2); right: unset; }',
  '.framer-9Ak9i.framer-v-1gklv01.hover .framer-1w4j10a { right: 4px; }',
  '.framer-9Ak9i.framer-v-1gklv01.pressed .framer-nsr17c { height: var(--framer-aspect-ratio-supported, 14px); }',
  '.framer-9Ak9i.framer-v-1d5zi15.hover .framer-hlafz0, .framer-9Ak9i.framer-v-1d5zi15.hover .framer-1w4j10a, .framer-9Ak9i.framer-v-1d5zi15.pressed .framer-hlafz0 { right: unset; }',
  '.framer-9Ak9i.framer-v-1d5zi15.pressed .framer-9l6nfs { left: 9px; }',
  '.framer-9Ak9i.framer-v-1d5zi15.pressed .framer-1w4j10a { left: 5px; right: unset; }',
];
var M = p(H, R, 'framer-9Ak9i',);
var stdin_default2 = M;
M.displayName = 'Toggle Copy',
  M.defaultProps = { height: 15, width: 24, },
  t(M, { variant: { options: ['ygo8X2vVX', 'J6MeOBYHD',], optionTitles: ['right', 'left',], title: 'Variant', type: o.Enum, }, },),
  a(M, [],);

// https:https://framerusercontent.com/modules/2hkg5XCE2rQboltCwgjw/PVmOOsL0Kqg5DoBKyDp4/vvRGywRFH.js
import { jsx as r3, jsxs as e2, } from 'react/jsx-runtime';
import {
  addFonts as a2,
  addPropertyControls as t2,
  ControlType as o2,
  cx as i2,
  SVG as d2,
  useActiveVariantCallback as n2,
  useLocaleInfo as s2,
  useVariantState as l2,
  withCSS as f2,
} from 'installable-framer/dist/framer';
import { LayoutGroup as m2, motion as p2, MotionConfigContext as c2, } from 'framer-motion';
import * as h2 from 'react';
var u = { jy1UKfzw2: { hover: true, pressed: true, }, KDR2W3FAc: { hover: true, pressed: true, }, };
var g2 = ['jy1UKfzw2', 'KDR2W3FAc',];
var x2 = { jy1UKfzw2: 'framer-v-34fava', KDR2W3FAc: 'framer-v-dxxjoq', };
function v2(r22, ...e22) {
  let a22 = {};
  return null == e22 || e22.forEach((e3,) => e3 && Object.assign(a22, r22[e3],)), a22;
}
var y2 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var w2 = (r22, e22,) => `translate(-50%, -50%) ${e22}`;
var R2 = ({ value: e22, children: a22, },) => {
  let t22 = h2.useContext(c2,),
    o22 = null != e22 ? e22 : t22.transition,
    i22 = h2.useMemo(() => ({ ...t22, transition: o22, }), [JSON.stringify(o22,),],);
  return /* @__PURE__ */ r3(c2.Provider, { value: i22, children: a22, },);
};
var C = { left: 'KDR2W3FAc', right: 'jy1UKfzw2', };
var F2 = ({ height: r22, id: e22, width: a22, ...t22 },) => {
  var o22, i22;
  return {
    ...t22,
    variant: null !== (i22 = null !== (o22 = C[t22.variant]) && void 0 !== o22 ? o22 : t22.variant) && void 0 !== i22 ? i22 : 'jy1UKfzw2',
  };
};
var j = (r22, e22,) => e22.join('-',) + r22.layoutDependency;
var K = /* @__PURE__ */ h2.forwardRef(function (a22, t22,) {
  let { activeLocale: o22, } = s2(),
    { style: f22, className: c22, layoutId: b2, variant: C2, ...K2 } = F2(a22,),
    { baseVariant: D22, classNames: X22, gestureVariant: k2, setGestureState: z, setVariant: A2, transition: L, variants: T, } = l2({
      cycleOrder: g2,
      defaultVariant: 'jy1UKfzw2',
      enabledGestures: u,
      transitions: y2,
      variant: C2,
      variantClassNames: x2,
    },),
    W2 = j(a22, T,),
    { activeVariantCallback: U, delay: I, } = n2(D22,),
    q2 = U(async (...r22) => {
      A2('KDR2W3FAc',);
    },),
    N = U(async (...r22) => {
      A2('jy1UKfzw2',);
    },),
    B2 = h2.useRef(null,),
    S = h2.useId();
  return /* @__PURE__ */ r3(m2, {
    id: null != b2 ? b2 : S,
    children: /* @__PURE__ */ r3(p2.div, {
      initial: C2,
      animate: T,
      onHoverStart: () => z({ isHovered: true, },),
      onHoverEnd: () => z({ isHovered: false, },),
      onTapStart: () => z({ isPressed: true, },),
      onTap: () => z({ isPressed: false, },),
      onTapCancel: () => z({ isPressed: false, },),
      className: i2('framer-FX84C', ...[], X22,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ r3(R2, {
        value: L,
        children: /* @__PURE__ */ r3(p2.div, {
          ...K2,
          className: i2('framer-34fava', c22,),
          'data-framer-name': 'right',
          'data-highlight': true,
          layoutDependency: W2,
          layoutId: 'jy1UKfzw2',
          onTap: q2,
          ref: null != t22 ? t22 : B2,
          style: { ...f22, },
          ...v2(
            {
              'jy1UKfzw2-hover': { 'data-framer-name': void 0, },
              'jy1UKfzw2-pressed': { 'data-framer-name': void 0, },
              'KDR2W3FAc-hover': { 'data-framer-name': void 0, },
              'KDR2W3FAc-pressed': { 'data-framer-name': void 0, },
              KDR2W3FAc: { 'data-framer-name': 'left', onTap: N, },
            },
            D22,
            k2,
          ),
          children: /* @__PURE__ */ e2(p2.div, {
            className: 'framer-1ooqcgs',
            'data-framer-name': 'Selected=true, State=pressed, Icon=true',
            layoutDependency: W2,
            layoutId: 'Ei4wdAtNu',
            children: [
              /* @__PURE__ */ r3(p2.div, {
              className: 'framer-5vfx9p',
              'data-framer-name': 'Track',
              layoutDependency: W2,
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
              ...v2({ KDR2W3FAc: { 'data-border': true, }, }, D22, k2,),
            },),
              /* @__PURE__ */ e2(p2.div, {
              className: 'framer-fh6gm0',
              'data-framer-name': 'Handle container',
              layoutDependency: W2,
              layoutId: 'dMpLVgXmB',
              children: [
                  /* @__PURE__ */ r3(p2.div, {
                className: 'framer-j9yhje',
                'data-framer-name': 'State layer',
                layoutDependency: W2,
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
                  /* @__PURE__ */ r3(p2.div, {
                className: 'framer-1jzmbae',
                'data-framer-name': 'Handle',
                layoutDependency: W2,
                layoutId: 'DtlSm4uVE',
                style: {
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderBottomLeftRadius: 23,
                  borderBottomRightRadius: 23,
                  borderTopLeftRadius: 23,
                  borderTopRightRadius: 23,
                },
                transformTemplate: w2,
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
                  /* @__PURE__ */ r3(p2.div, {
                className: 'framer-2q425d',
                'data-framer-name': 'Icons/navigate_next',
                layoutDependency: W2,
                layoutId: 'xC2098cIf',
                transformTemplate: w2,
                children: /* @__PURE__ */ r3(d2, {
                  className: 'framer-1b0kmaq',
                  'data-framer-name': 'icon',
                  layout: 'position',
                  layoutDependency: W2,
                  layoutId: 'A4QRMsAMx',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 0.971 0 L 0.031 0.94 L 3.085 4 L 0.031 7.06 L 0.971 8 L 4.971 4 Z" fill="rgb(0,31,35)"></path></svg>',
                  svgContentId: 227539786,
                  withExternalLayout: true,
                  ...v2(
                    {
                      KDR2W3FAc: {
                        svg:
                          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 4.031 0 L 4.971 0.94 L 1.918 4 L 4.971 7.06 L 4.031 8 L 0.031 4 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                        svgContentId: 2477479149,
                      },
                    },
                    D22,
                    k2,
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
var D3 = [
  '.framer-FX84C [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-FX84C .framer-1srx8tz { display: block; }',
  '.framer-FX84C .framer-34fava { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-FX84C .framer-1ooqcgs { flex: none; height: 32px; overflow: visible; position: relative; width: 52px; }',
  '.framer-FX84C .framer-5vfx9p { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-FX84C .framer-fh6gm0 { flex: none; height: 48px; overflow: visible; position: absolute; right: -8px; top: calc(50% - 48px / 2); width: 48px; }',
  '.framer-FX84C .framer-j9yhje { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); width: 40px; }',
  '.framer-FX84C .framer-1jzmbae { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 50%; position: absolute; top: 50%; width: 24px; }',
  '.framer-FX84C .framer-2q425d { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 16px; }',
  '.framer-FX84C .framer-1b0kmaq { flex: none; height: 8px; left: 6px; position: absolute; top: 4px; width: 5px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-FX84C .framer-34fava { gap: 0px; } .framer-FX84C .framer-34fava > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-FX84C .framer-34fava > :first-child { margin-top: 0px; } .framer-FX84C .framer-34fava > :last-child { margin-bottom: 0px; } }',
  '.framer-FX84C.framer-v-dxxjoq .framer-fh6gm0 { bottom: -8px; height: unset; left: -8px; right: unset; top: -8px; }',
  '.framer-FX84C.framer-v-dxxjoq .framer-1jzmbae, .framer-FX84C.framer-v-34fava.hover .framer-1jzmbae { left: 50%; top: 50%; }',
  '.framer-FX84C.framer-v-dxxjoq.hover .framer-fh6gm0, .framer-FX84C.framer-v-dxxjoq.pressed .framer-fh6gm0 { height: unset; right: unset; }',
  '.framer-FX84C.framer-v-dxxjoq.pressed .framer-1jzmbae { height: var(--framer-aspect-ratio-supported, 28px); width: 28px; }',
];
var X2 = f2(K, D3, 'framer-FX84C',);
var stdin_default3 = X2;
X2.displayName = 'Toggle',
  X2.defaultProps = { height: 32, width: 52, },
  t2(X2, { variant: { options: ['jy1UKfzw2', 'KDR2W3FAc',], optionTitles: ['right', 'left',], title: 'Variant', type: o2.Enum, }, },),
  a2(X2, [],);

// https:https://framerusercontent.com/modules/GuWa1Ud162ubWf1k1mKH/kGi9lI9nvgupW4e2VxtJ/FpOKcRGFb.js
var TypewriterFonts = getFonts(TypeWriter,);
var SliderFonts = getFonts(Slider,);
var RadioFonts = getFonts(stdin_default,);
var ToggleFonts = getFonts(stdin_default3,);
var ToggleCopyFonts = getFonts(stdin_default2,);
var cycleOrder2 = ['wHWVBWbCh', 'u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g', 'fSJwriuSS', 'qV5XCavMo', 'tp4ldCYgZ', 'XTPzGOQNq',];
var variantClassNames2 = {
  cJW2ksH1e: 'framer-v-cameip',
  fSJwriuSS: 'framer-v-o5kv5u',
  qV5XCavMo: 'framer-v-117x2zl',
  tp4ldCYgZ: 'framer-v-1xhso81',
  u5YClbSTz: 'framer-v-bqdfuj',
  Wfe2yFy4g: 'framer-v-ajsg1n',
  wHWVBWbCh: 'framer-v-ubmi04',
  XTPzGOQNq: 'framer-v-1pumkev',
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions2 = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  qV5XCavMo: { delay: 0.5, duration: 0.7, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  tp4ldCYgZ: { delay: 0.2, duration: 0.7, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  XTPzGOQNq: { delay: 0.3, duration: 0.8, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
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
var convertFromBoolean1 = (value,) => {
  if (value) {
    return 'ygo8X2vVX';
  } else {
    return 'J6MeOBYHD';
  }
};
var Transition2 = ({ value, children, },) => {
  const config = React4.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap2 = {
  'Boolean Smalll': 'qV5XCavMo',
  'Input Small': 'fSJwriuSS',
  'MC Small': 'XTPzGOQNq',
  'Multiple Choice': 'wHWVBWbCh',
  'Slider Small': 'tp4ldCYgZ',
  Boolean: 'cJW2ksH1e',
  Input: 'Wfe2yFy4g',
  Slider: 'u5YClbSTz',
};
var getProps2 = (
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
  var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _humanReadableVariantMap_props_variant, _ref9, _ref10;
  return {
    ...props,
    AA_oylHc1: booleanToggle !== null && booleanToggle !== void 0 ? booleanToggle : props.AA_oylHc1,
    B9Ye7wHiX: (_ref = choice1 !== null && choice1 !== void 0 ? choice1 : props.B9Ye7wHiX) !== null && _ref !== void 0 ? _ref : 'A',
    cib0E0Vb9: (_ref1 = option2 !== null && option2 !== void 0 ? option2 : props.cib0E0Vb9) !== null && _ref1 !== void 0 ? _ref1 : 'B',
    Cpm7YdhW6: (_ref2 = option1 !== null && option1 !== void 0 ? option1 : props.Cpm7YdhW6) !== null && _ref2 !== void 0 ? _ref2 : 'A',
    dxSidP8LF: (_ref3 = choice3 !== null && choice3 !== void 0 ? choice3 : props.dxSidP8LF) !== null && _ref3 !== void 0 ? _ref3 : 'C',
    eePEcZAuW: (_ref4 = option !== null && option !== void 0 ? option : props.eePEcZAuW) !== null && _ref4 !== void 0 ? _ref4 : 'zAJDHJhkW',
    Gu4Kp5hWx: (_ref5 = title !== null && title !== void 0 ? title : props.Gu4Kp5hWx) !== null && _ref5 !== void 0 ? _ref5 : 'Title',
    kRgq0jgQR: (_ref6 = sliiderValue !== null && sliiderValue !== void 0 ? sliiderValue : props.kRgq0jgQR) !== null && _ref6 !== void 0
      ? _ref6
      : 50,
    NPSt7VsjX: (_ref7 = streaming !== null && streaming !== void 0 ? streaming : props.NPSt7VsjX) !== null && _ref7 !== void 0
      ? _ref7
      : true,
    nQb7W3cjE: (_ref8 = input !== null && input !== void 0 ? input : props.nQb7W3cjE) !== null && _ref8 !== void 0
      ? _ref8
      : 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    variant:
      (_ref9 =
        (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null &&
          _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref9 !== void 0
        ? _ref9
        : 'wHWVBWbCh',
    yBMe3I4G7: (_ref10 = choice2 !== null && choice2 !== void 0 ? choice2 : props.yBMe3I4G7) !== null && _ref10 !== void 0 ? _ref10 : 'B',
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo2();
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
  } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'wHWVBWbCh',
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const ref1 = React4.useRef(null,);
  const isDisplayed = () => {
    if (['Wfe2yFy4g', 'fSJwriuSS',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed1 = () => {
    if (['u5YClbSTz', 'tp4ldCYgZ',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (['u5YClbSTz', 'tp4ldCYgZ',].includes(baseVariant,)) {
      return negate(NPSt7VsjX,);
    }
    return true;
  };
  const activeLocaleCode = useLocaleCode();
  const isDisplayed3 = () => {
    if (['Wfe2yFy4g', 'fSJwriuSS',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed4 = () => {
    if (baseVariant === 'Wfe2yFy4g') {
      return negate(NPSt7VsjX,);
    }
    if (baseVariant === 'fSJwriuSS') {
      return true;
    }
    return false;
  };
  const isDisplayed5 = () => {
    if (baseVariant === 'fSJwriuSS') {
      return false;
    }
    return NPSt7VsjX;
  };
  const isDisplayed6 = () => {
    if (['u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g', 'fSJwriuSS', 'qV5XCavMo', 'tp4ldCYgZ',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (['cJW2ksH1e', 'qV5XCavMo',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed8 = () => {
    if (['cJW2ksH1e', 'qV5XCavMo',].includes(baseVariant,)) {
      return negate(NPSt7VsjX,);
    }
    return true;
  };
  const isDisplayed9 = () => {
    if (baseVariant === 'qV5XCavMo') {
      return false;
    }
    return true;
  };
  const isDisplayed10 = () => {
    if (baseVariant === 'cJW2ksH1e') {
      return false;
    }
    return true;
  };
  const isDisplayed11 = () => {
    if (['Wfe2yFy4g', 'fSJwriuSS',].includes(baseVariant,)) {
      return negate(NPSt7VsjX,);
    }
    return true;
  };
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [className,];
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
      className: cx2('framer-w8xRu', ...sharedStyleClassNames, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx4(Transition2, {
        value: transition,
        children: /* @__PURE__ */ _jsxs2(motion3.div, {
          ...restProps,
          className: cx2('framer-ubmi04', className2,),
          'data-framer-name': 'Multiple Choice',
          layoutDependency,
          layoutId: 'wHWVBWbCh',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.59)',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            ...style,
          },
          ...addPropertyOverrides2(
            {
              cJW2ksH1e: { 'data-framer-name': 'Boolean', },
              fSJwriuSS: { 'data-framer-name': 'Input Small', },
              qV5XCavMo: { 'data-framer-name': 'Boolean Smalll', },
              tp4ldCYgZ: { 'data-framer-name': 'Slider Small', },
              u5YClbSTz: { 'data-framer-name': 'Slider', },
              Wfe2yFy4g: { 'data-framer-name': 'Input', },
              XTPzGOQNq: { 'data-framer-name': 'MC Small', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-s8ik11',
              layoutDependency,
              layoutId: 'ZML_QoWcQ',
              children: [
                negate(NPSt7VsjX,) && /* @__PURE__ */ _jsx4(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion3.p, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                        '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                        '--framer-font-size': '8px',
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
                  ...addPropertyOverrides2(
                    {
                      tp4ldCYgZ: {
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion3.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                              '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                              '--framer-font-size': '8px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                            },
                            children: 'Title',
                          },),
                        },),
                      },
                      u5YClbSTz: {
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion3.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                              '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                              '--framer-font-size': '8px',
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
                NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-12y26uo-container',
                  layoutDependency,
                  layoutId: 'epUupU4HK-container',
                  children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
                    ...addPropertyOverrides2(
                      {
                        qV5XCavMo: {
                          font: {
                            fontFamily: 'PP Supply Sans Medium',
                            fontSize: 8,
                            fontWeight: 500,
                            letterSpacing: 0,
                            lineHeight: 1.5,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: 'left',
                            whiteSpace: 'normal',
                          },
                        },
                        tp4ldCYgZ: {
                          font: {
                            fontFamily: 'PP Supply Sans Medium',
                            fontSize: 8,
                            fontWeight: 500,
                            letterSpacing: 0,
                            lineHeight: 1.5,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: 'left',
                            whiteSpace: 'normal',
                          },
                        },
                        XTPzGOQNq: {
                          font: {
                            fontFamily: 'PP Supply Sans Medium',
                            fontSize: 8,
                            fontWeight: 500,
                            letterSpacing: 0,
                            lineHeight: 1.5,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: 'left',
                            whiteSpace: 'normal',
                          },
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              ],
            },),
            isDisplayed1() && /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-19lcyrf',
              layoutDependency,
              layoutId: 'j2bvRU3DL',
              children: [
                isDisplayed2() && /* @__PURE__ */ _jsx4(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion3.p, {
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
                NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-6epta2-container',
                  layoutDependency,
                  layoutId: 'GjyMm_jMc-container',
                  children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
                /* @__PURE__ */ _jsx4(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion3.p, {
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
                  ...addPropertyOverrides2(
                    {
                      tp4ldCYgZ: {
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion3.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFNlbWlib2xk',
                              '--framer-font-family': '"PP Supply Sans Semibold", "PP Supply Sans Semibold Placeholder", sans-serif',
                              '--framer-font-size': '10px',
                              '--framer-letter-spacing': '0.35px',
                              '--framer-line-height': '12px',
                              '--framer-text-alignment': 'center',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                            },
                            children: '50',
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                isDisplayed2() && /* @__PURE__ */ _jsx4(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion3.p, {
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
                NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-ii7jep-container',
                  layoutDependency,
                  layoutId: 'RaG0o5JJN-container',
                  children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
            isDisplayed3() && /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-1vu5yst',
              layoutDependency,
              layoutId: 'S6KvIs150',
              children: [
                isDisplayed4() && /* @__PURE__ */ _jsx4(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion3.p, {
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
                isDisplayed5() && /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-yrdgrn-container',
                  layoutDependency,
                  layoutId: 'dFtUYLY7q-container',
                  children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
            isDisplayed1() && /* @__PURE__ */ _jsx4(motion3.div, {
              className: 'framer-1cypg73',
              layoutDependency,
              layoutId: 'W7v0dnOBr',
              children: isDisplayed1() && /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-j34qcq-container',
                layoutDependency,
                layoutId: 'y3OmF6OSb-container',
                children: /* @__PURE__ */ _jsx4(Slider, {
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
            isDisplayed6() && /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-s5cdq5',
              layoutDependency,
              layoutId: 'ueUtpSOCB',
              style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
              children: [
                /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-crweby',
                layoutDependency,
                layoutId: 'IvlCVPVPf',
                children: [
                    /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-14jci97-container',
                  layoutDependency,
                  layoutId: 'KJOwPbb8F-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default, {
                    height: '100%',
                    id: 'KJOwPbb8F',
                    layoutId: 'KJOwPbb8F',
                    variant: convertFromEnum(eePEcZAuW,),
                    width: '100%',
                  },),
                },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-1kyowmy-container',
                    layoutDependency,
                    layoutId: 'v9pHCTSvV-container',
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
                      ...addPropertyOverrides2(
                        {
                          XTPzGOQNq: {
                            font: {
                              fontFamily: 'PP Supply Sans Medium',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  negate(NPSt7VsjX,) && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                          '--framer-letter-spacing': '0.04em',
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                        },
                        children: 'A',
                      },),
                    },),
                    className: 'framer-2mo03c',
                    'data-framer-name': 'Board Dimensions',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
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
                /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-1ferc8i',
                layoutDependency,
                layoutId: 'R905nnpUi',
                children: [
                    /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-1hj9m21-container',
                  layoutDependency,
                  layoutId: 'nN3lKdmks-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default, {
                    height: '100%',
                    id: 'nN3lKdmks',
                    layoutId: 'nN3lKdmks',
                    variant: convertFromEnum1(eePEcZAuW,),
                    width: '100%',
                  },),
                },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-1ofvx9w-container',
                    layoutDependency,
                    layoutId: 'rDpMrm8Tz-container',
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
                      ...addPropertyOverrides2(
                        {
                          XTPzGOQNq: {
                            font: {
                              fontFamily: 'PP Supply Sans Medium',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  negate(NPSt7VsjX,) && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                          '--framer-letter-spacing': '0.04em',
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                        },
                        children: 'B',
                      },),
                    },),
                    className: 'framer-1yflnix',
                    'data-framer-name': 'Board Dimensions',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
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
                /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-m3o52p',
                layoutDependency,
                layoutId: 'fTVGy5qSW',
                children: [
                    /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-1tqvnrb-container',
                  layoutDependency,
                  layoutId: 'TK5DtHbAx-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default, {
                    height: '100%',
                    id: 'TK5DtHbAx',
                    layoutId: 'TK5DtHbAx',
                    variant: convertFromEnum2(eePEcZAuW,),
                    width: '100%',
                  },),
                },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-qqau2w-container',
                    layoutDependency,
                    layoutId: 'Vz4vSXp4B-container',
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
                      ...addPropertyOverrides2(
                        {
                          XTPzGOQNq: {
                            font: {
                              fontFamily: 'PP Supply Sans Medium',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  negate(NPSt7VsjX,) && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                          '--framer-letter-spacing': '0.04em',
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                        },
                        children: 'C',
                      },),
                    },),
                    className: 'framer-yxub92',
                    'data-framer-name': 'Board Dimensions',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
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
            isDisplayed7() && /* @__PURE__ */ _jsx4(motion3.div, {
              className: 'framer-11t7ch5',
              layoutDependency,
              layoutId: 'gqRV57KH3',
              style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
              children: /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-mydmw0',
                layoutDependency,
                layoutId: 'a3_Mf4FDG',
                children: [
                  isDisplayed8() && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.h4, {
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
                    variants: {
                      qV5XCavMo: { '--extracted-1eung3n': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))', },
                    },
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                    ...addPropertyOverrides2(
                      {
                        qV5XCavMo: {
                          children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                            children: /* @__PURE__ */ _jsx4(motion3.h4, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                '--framer-font-size': '13px',
                                '--framer-letter-spacing': '0.04em',
                                '--framer-text-color':
                                  'var(--extracted-1eung3n, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                              },
                              children: 'A',
                            },),
                          },),
                          fonts: ['CUSTOM;PP Supply Sans Medium',],
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-sbe7bz-container',
                    layoutDependency,
                    layoutId: 'aKuf_fMd7-container',
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
                      ...addPropertyOverrides2(
                        {
                          qV5XCavMo: {
                            font: {
                              fontFamily: 'PP Supply Sans Medium',
                              fontSize: 10,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  isDisplayed8() && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.h4, {
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
                    variants: {
                      qV5XCavMo: { '--extracted-1eung3n': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))', },
                    },
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                    ...addPropertyOverrides2(
                      {
                        qV5XCavMo: {
                          children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                            children: /* @__PURE__ */ _jsx4(motion3.h4, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                '--framer-font-size': '13px',
                                '--framer-letter-spacing': '0.04em',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color':
                                  'var(--extracted-1eung3n, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                              },
                              children: 'B',
                            },),
                          },),
                          fonts: ['CUSTOM;PP Supply Sans Medium',],
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-13ltp5y-container',
                    layoutDependency,
                    layoutId: 'ddVwnbWnZ-container',
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
                      ...addPropertyOverrides2(
                        {
                          qV5XCavMo: {
                            font: {
                              fontFamily: 'PP Supply Sans Medium',
                              fontSize: 10,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'right',
                              whiteSpace: 'nowrap',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  isDisplayed9() && /* @__PURE__ */
                  _jsx4(motion3.div, {
                    className: 'framer-11ipqiw-container',
                    layoutDependency,
                    layoutId: 'pYbKGMi0I-container',
                    children: /* @__PURE__ */ _jsx4(stdin_default3, {
                      height: '100%',
                      id: 'pYbKGMi0I',
                      layoutId: 'pYbKGMi0I',
                      variant: convertFromBoolean(AA_oylHc1,),
                      width: '100%',
                    },),
                  },),
                  isDisplayed10() && /* @__PURE__ */
                  _jsx4(motion3.div, {
                    className: 'framer-xv96wz-container',
                    layoutDependency,
                    layoutId: 'AYob5DRWp-container',
                    children: /* @__PURE__ */ _jsx4(stdin_default2, {
                      height: '100%',
                      id: 'AYob5DRWp',
                      layoutId: 'AYob5DRWp',
                      variant: convertFromBoolean1(AA_oylHc1,),
                      width: '100%',
                    },),
                  },),
                ],
              },),
            },),
            isDisplayed3() && /* @__PURE__ */ _jsx4(motion3.div, {
              className: 'framer-1cyqgqh',
              'data-framer-name': 'Input',
              layoutDependency,
              layoutId: 'nImH06vgx',
              style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
              children: /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-o1k220',
                'data-framer-name': 'Content',
                layoutDependency,
                layoutId: 'EbqS70Gxh',
                children: [
                  isDisplayed11() && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
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
                    ...addPropertyOverrides2(
                      {
                        fSJwriuSS: {
                          children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                            children: /* @__PURE__ */ _jsx4(motion3.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                '--framer-font-size': '10px',
                                '--framer-letter-spacing': '0.5px',
                                '--framer-line-height': '1.5em',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                              },
                              children: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                            },),
                          },),
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-5wsa7o-container',
                    layoutDependency,
                    layoutId: 'jC8ftCsb3-container',
                    style: { rotate: 34, },
                    variants: { fSJwriuSS: { rotate: 0, }, Wfe2yFy4g: { rotate: 0, }, },
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
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
                      ...addPropertyOverrides2(
                        { fSJwriuSS: { delayNumber: 0.03, loop: false, pauseFor: 1, }, Wfe2yFy4g: { delayNumber: 0.05, }, },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-15wkik3',
                    'data-framer-name': 'Adorn. End Container',
                    layoutDependency,
                    layoutId: 'lZW8el5CE',
                    children: /* @__PURE__ */ _jsx4(motion3.div, {
                      className: 'framer-9cc7lb',
                      'data-framer-name': 'AdornmentEnd',
                      layoutDependency,
                      layoutId: 'gXObIIVW8',
                      children: /* @__PURE__ */ _jsx4(SVG2, {
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
                        ...addPropertyOverrides2(
                          {
                            fSJwriuSS: {
                              svg:
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 1.388 10.941 L 2.146 10.941 L 9.13 3.957 L 8.372 3.2 L 1.388 10.184 Z M 10.641 3.449 L 8.876 1.693 L 9.728 0.84 C 9.872 0.696 10.044 0.624 10.244 0.624 C 10.443 0.624 10.615 0.696 10.759 0.84 L 11.489 1.571 C 11.633 1.714 11.706 1.885 11.709 2.082 C 11.712 2.279 11.641 2.449 11.497 2.593 Z M 10.133 3.961 L 2.447 11.647 L 0.682 11.647 L 0.682 9.882 L 8.368 2.196 Z M 8.744 3.572 L 8.372 3.2 L 9.13 3.957 Z" fill="var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {&quot;name&quot;:&quot;Space&quot;} */"></path></svg>',
                              svgContentId: 218827995,
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
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css3 = [
  '.framer-w8xRu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-w8xRu .framer-17k9lcm { display: block; }',
  '.framer-w8xRu .framer-ubmi04 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-w8xRu .framer-s8ik11 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 10px 0px 10px; position: relative; width: auto; }',
  '.framer-w8xRu .framer-lyzunu, .framer-w8xRu .framer-1kpfvtt, .framer-w8xRu .framer-841zpz, .framer-w8xRu .framer-1fro32h { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-w8xRu .framer-12y26uo-container, .framer-w8xRu .framer-6epta2-container, .framer-w8xRu .framer-ii7jep-container, .framer-w8xRu .framer-j34qcq-container, .framer-w8xRu .framer-1kyowmy-container, .framer-w8xRu .framer-1ofvx9w-container, .framer-w8xRu .framer-qqau2w-container, .framer-w8xRu .framer-sbe7bz-container, .framer-w8xRu .framer-13ltp5y-container, .framer-w8xRu .framer-5wsa7o-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
  '.framer-w8xRu .framer-19lcyrf { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 9px 10px; position: relative; width: auto; }',
  '.framer-w8xRu .framer-1vu5yst { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }',
  '.framer-w8xRu .framer-1v7c9ix { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-w8xRu .framer-yrdgrn-container { flex: none; height: auto; position: relative; width: 100%; }',
  '.framer-w8xRu .framer-1cypg73 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 24px; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }',
  '.framer-w8xRu .framer-s5cdq5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 5px 0px 5px 0px; position: relative; width: 277px; }',
  '.framer-w8xRu .framer-crweby, .framer-w8xRu .framer-1ferc8i, .framer-w8xRu .framer-m3o52p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-w8xRu .framer-14jci97-container, .framer-w8xRu .framer-1hj9m21-container, .framer-w8xRu .framer-1tqvnrb-container, .framer-w8xRu .framer-11ipqiw-container, .framer-w8xRu .framer-xv96wz-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-w8xRu .framer-2mo03c, .framer-w8xRu .framer-1yflnix, .framer-w8xRu .framer-yxub92, .framer-w8xRu .framer-1d8zajo, .framer-w8xRu .framer-eva85o { flex: 1 0 0px; height: 24px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-w8xRu .framer-11t7ch5 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 8px 12px 8px 12px; position: relative; width: auto; }',
  '.framer-w8xRu .framer-mydmw0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 213px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-w8xRu .framer-1cyqgqh { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 9px 12px 8px 12px; position: relative; width: min-content; }',
  '.framer-w8xRu .framer-o1k220 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 253px; }',
  '.framer-w8xRu .framer-ivgzyi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 221px; word-break: break-word; word-wrap: break-word; }',
  '.framer-w8xRu .framer-15wkik3 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-w8xRu .framer-9cc7lb { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; }',
  '.framer-w8xRu .framer-3bebcg { flex: none; height: 17px; left: 4px; position: absolute; top: 4px; width: 17px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-w8xRu .framer-ubmi04, .framer-w8xRu .framer-s8ik11, .framer-w8xRu .framer-19lcyrf, .framer-w8xRu .framer-1vu5yst, .framer-w8xRu .framer-1cypg73, .framer-w8xRu .framer-s5cdq5, .framer-w8xRu .framer-crweby, .framer-w8xRu .framer-1ferc8i, .framer-w8xRu .framer-m3o52p, .framer-w8xRu .framer-1cyqgqh, .framer-w8xRu .framer-o1k220, .framer-w8xRu .framer-15wkik3 { gap: 0px; } .framer-w8xRu .framer-ubmi04 > *, .framer-w8xRu .framer-s5cdq5 > *, .framer-w8xRu .framer-15wkik3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-w8xRu .framer-ubmi04 > :first-child, .framer-w8xRu .framer-1vu5yst > :first-child, .framer-w8xRu .framer-s5cdq5 > :first-child, .framer-w8xRu .framer-1cyqgqh > :first-child, .framer-w8xRu .framer-15wkik3 > :first-child { margin-top: 0px; } .framer-w8xRu .framer-ubmi04 > :last-child, .framer-w8xRu .framer-1vu5yst > :last-child, .framer-w8xRu .framer-s5cdq5 > :last-child, .framer-w8xRu .framer-1cyqgqh > :last-child, .framer-w8xRu .framer-15wkik3 > :last-child { margin-bottom: 0px; } .framer-w8xRu .framer-s8ik11 > *, .framer-w8xRu .framer-19lcyrf > *, .framer-w8xRu .framer-1cypg73 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-w8xRu .framer-s8ik11 > :first-child, .framer-w8xRu .framer-19lcyrf > :first-child, .framer-w8xRu .framer-1cypg73 > :first-child, .framer-w8xRu .framer-crweby > :first-child, .framer-w8xRu .framer-1ferc8i > :first-child, .framer-w8xRu .framer-m3o52p > :first-child, .framer-w8xRu .framer-o1k220 > :first-child { margin-left: 0px; } .framer-w8xRu .framer-s8ik11 > :last-child, .framer-w8xRu .framer-19lcyrf > :last-child, .framer-w8xRu .framer-1cypg73 > :last-child, .framer-w8xRu .framer-crweby > :last-child, .framer-w8xRu .framer-1ferc8i > :last-child, .framer-w8xRu .framer-m3o52p > :last-child, .framer-w8xRu .framer-o1k220 > :last-child { margin-right: 0px; } .framer-w8xRu .framer-1vu5yst > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-w8xRu .framer-crweby > *, .framer-w8xRu .framer-1ferc8i > *, .framer-w8xRu .framer-m3o52p > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-w8xRu .framer-1cyqgqh > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-w8xRu .framer-o1k220 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }',
  '.framer-w8xRu.framer-v-bqdfuj .framer-ubmi04 { width: 203px; }',
  '.framer-w8xRu.framer-v-bqdfuj .framer-s8ik11, .framer-w8xRu.framer-v-cameip .framer-s8ik11 { align-self: unset; order: 0; width: 100%; }',
  '.framer-w8xRu.framer-v-bqdfuj .framer-19lcyrf, .framer-w8xRu.framer-v-1xhso81 .framer-19lcyrf { align-self: unset; order: 2; width: 100%; }',
  '.framer-w8xRu.framer-v-bqdfuj .framer-1cypg73 { align-self: unset; min-height: unset; order: 1; width: 100%; }',
  '.framer-w8xRu.framer-v-cameip .framer-ubmi04 { width: 243px; }',
  '.framer-w8xRu.framer-v-cameip .framer-11t7ch5, .framer-w8xRu.framer-v-117x2zl .framer-11t7ch5 { align-self: unset; order: 3; width: 100%; }',
  '.framer-w8xRu.framer-v-cameip .framer-mydmw0, .framer-w8xRu.framer-v-117x2zl .framer-mydmw0 { height: 32px; order: 0; }',
  '.framer-w8xRu.framer-v-cameip .framer-1d8zajo, .framer-w8xRu.framer-v-117x2zl .framer-1d8zajo { order: 0; }',
  '.framer-w8xRu.framer-v-cameip .framer-sbe7bz-container, .framer-w8xRu.framer-v-117x2zl .framer-sbe7bz-container { order: 1; }',
  '.framer-w8xRu.framer-v-cameip .framer-eva85o, .framer-w8xRu.framer-v-117x2zl .framer-xv96wz-container { order: 3; }',
  '.framer-w8xRu.framer-v-cameip .framer-13ltp5y-container, .framer-w8xRu.framer-v-117x2zl .framer-eva85o { order: 4; }',
  '.framer-w8xRu.framer-v-cameip .framer-11ipqiw-container { order: 2; }',
  '.framer-w8xRu.framer-v-ajsg1n .framer-ubmi04 { width: 277px; }',
  '.framer-w8xRu.framer-v-ajsg1n .framer-1vu5yst { align-self: unset; flex-direction: row; order: 0; width: 100%; }',
  '.framer-w8xRu.framer-v-ajsg1n .framer-1v7c9ix, .framer-w8xRu.framer-v-ajsg1n .framer-yrdgrn-container, .framer-w8xRu.framer-v-ajsg1n .framer-ivgzyi, .framer-w8xRu.framer-v-o5kv5u .framer-1v7c9ix, .framer-w8xRu.framer-v-o5kv5u .framer-ivgzyi { flex: 1 0 0px; width: 1px; }',
  '.framer-w8xRu.framer-v-ajsg1n .framer-1cyqgqh, .framer-w8xRu.framer-v-o5kv5u .framer-1cyqgqh { order: 4; padding: 0px 12px 8px 12px; width: 100%; }',
  '.framer-w8xRu.framer-v-ajsg1n .framer-o1k220, .framer-w8xRu.framer-v-o5kv5u .framer-o1k220, .framer-w8xRu.framer-v-1pumkev .framer-s5cdq5 { width: 100%; }',
  '.framer-w8xRu.framer-v-ajsg1n .framer-15wkik3 { width: 24px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-w8xRu.framer-v-ajsg1n .framer-1vu5yst { gap: 0px; } .framer-w8xRu.framer-v-ajsg1n .framer-1vu5yst > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-w8xRu.framer-v-ajsg1n .framer-1vu5yst > :first-child { margin-left: 0px; } .framer-w8xRu.framer-v-ajsg1n .framer-1vu5yst > :last-child { margin-right: 0px; } }',
  '.framer-w8xRu.framer-v-o5kv5u .framer-ubmi04 { justify-content: flex-start; width: 193px; }',
  '.framer-w8xRu.framer-v-o5kv5u .framer-1vu5yst { align-content: start; align-items: start; align-self: unset; flex-direction: row; order: 0; padding: 6px 10px 6px 10px; width: 100%; }',
  '.framer-w8xRu.framer-v-o5kv5u .framer-3bebcg { height: 12px; left: unset; right: 4px; top: 4px; width: 12px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-w8xRu.framer-v-o5kv5u .framer-1vu5yst { gap: 0px; } .framer-w8xRu.framer-v-o5kv5u .framer-1vu5yst > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-w8xRu.framer-v-o5kv5u .framer-1vu5yst > :first-child { margin-left: 0px; } .framer-w8xRu.framer-v-o5kv5u .framer-1vu5yst > :last-child { margin-right: 0px; } }',
  '.framer-w8xRu.framer-v-117x2zl .framer-ubmi04 { width: 127px; }',
  '.framer-w8xRu.framer-v-117x2zl .framer-s8ik11, .framer-w8xRu.framer-v-1xhso81 .framer-s8ik11 { align-self: unset; order: 0; padding: 6px 10px 6px 10px; width: 100%; }',
  '.framer-w8xRu.framer-v-117x2zl .framer-13ltp5y-container { order: 5; }',
  '.framer-w8xRu.framer-v-1xhso81 .framer-ubmi04 { width: 114px; }',
  '.framer-w8xRu.framer-v-1xhso81 .framer-1cypg73 { align-self: unset; min-height: unset; order: 1; padding: 0px 10px 0px 10px; width: 100%; }',
  '.framer-w8xRu.framer-v-1pumkev .framer-ubmi04 { width: 139px; }',
  '.framer-w8xRu.framer-v-1pumkev .framer-s8ik11 { align-self: unset; width: 100%; }',
  ...css,
];
var FramerFpOKcRGFb = withCSS4(Component2, css3, 'framer-w8xRu',);
var stdin_default4 = FramerFpOKcRGFb;
FramerFpOKcRGFb.displayName = 'node-type';
FramerFpOKcRGFb.defaultProps = { height: 134, width: 277, };
addPropertyControls4(FramerFpOKcRGFb, {
  variant: {
    options: ['wHWVBWbCh', 'u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g', 'fSJwriuSS', 'qV5XCavMo', 'tp4ldCYgZ', 'XTPzGOQNq',],
    optionTitles: ['Multiple Choice', 'Slider', 'Boolean', 'Input', 'Input Small', 'Boolean Smalll', 'Slider Small', 'MC Small',],
    title: 'Variant',
    type: ControlType7.Enum,
  },
  eePEcZAuW: {
    defaultValue: 'zAJDHJhkW',
    options: ['zAJDHJhkW', 's7bcrIMxH', 'jmeUKm4BT',],
    optionTitles: ['Option 1', 'Option 2', 'Option 3',],
    title: 'Option',
    type: ControlType7.Enum,
  },
  kRgq0jgQR: { defaultValue: 50, displayStepper: false, max: 100, min: 0, title: 'Sliider Value', type: ControlType7.Number, },
  Cpm7YdhW6: { defaultValue: 'A', placeholder: 'A', title: 'Option 1', type: ControlType7.String, },
  cib0E0Vb9: { defaultValue: 'B', displayTextArea: false, placeholder: 'B', title: 'Option 2', type: ControlType7.String, },
  B9Ye7wHiX: { defaultValue: 'A', placeholder: 'A', title: 'Choice 1', type: ControlType7.String, },
  yBMe3I4G7: { defaultValue: 'B', placeholder: 'B', title: 'Choice 2', type: ControlType7.String, },
  dxSidP8LF: { defaultValue: 'C', placeholder: 'C', title: 'Choice 3', type: ControlType7.String, },
  NPSt7VsjX: { defaultValue: true, title: 'Streaming', type: ControlType7.Boolean, },
  Gu4Kp5hWx: { defaultValue: 'Title', displayTextArea: false, placeholder: 'Title', title: 'Title', type: ControlType7.String, },
  nQb7W3cjE: {
    defaultValue: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    displayTextArea: true,
    title: 'Input',
    type: ControlType7.String,
  },
  AA_oylHc1: { defaultValue: false, title: 'Boolean Toggle', type: ControlType7.Boolean, },
},);
addFonts2(FramerFpOKcRGFb, [
  { family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },
  { family: 'PP Supply Sans Semibold', url: 'https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf', },
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  ...TypewriterFonts,
  ...SliderFonts,
  ...RadioFonts,
  ...ToggleFonts,
  ...ToggleCopyFonts,
  ...fonts,
],);

// https:https://framerusercontent.com/modules/dts3KkzoHO6kQWh7b5Ug/B1Gsx1bsoWgEcHZ6ixdx/A4GdXWFMj.js
var NodeTypeFonts = getFonts2(stdin_default4,);
var NodeTypeControls = getPropertyControls(stdin_default4,);
var cycleOrder3 = ['wZ2vnzihB', 'cbq3T4JIp',];
var variantClassNames3 = { cbq3T4JIp: 'framer-v-u1sef0', wZ2vnzihB: 'framer-v-11roolr', };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions3 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition3 = ({ value, children, },) => {
  const config = React5.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap3 = { default: 'cbq3T4JIp', hover: 'wZ2vnzihB', };
var getProps3 = ({ height, id, index, input, streaming, title2, type, width, ...props },) => {
  var _ref, _ref1, _ref2, _humanReadableVariantMap_props_variant, _ref3, _ref4;
  return {
    ...props,
    AoRZX1H1N: streaming !== null && streaming !== void 0 ? streaming : props.AoRZX1H1N,
    lxdU5EATK: (_ref = type !== null && type !== void 0 ? type : props.lxdU5EATK) !== null && _ref !== void 0 ? _ref : 'fSJwriuSS',
    NJqu6koZC: (_ref1 = input !== null && input !== void 0 ? input : props.NJqu6koZC) !== null && _ref1 !== void 0
      ? _ref1
      : 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    QCOPRCUSC: (_ref2 = index !== null && index !== void 0 ? index : props.QCOPRCUSC) !== null && _ref2 !== void 0 ? _ref2 : 'A-2',
    variant:
      (_ref3 =
        (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null &&
          _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref3 !== void 0
        ? _ref3
        : 'wZ2vnzihB',
    W1dUHMesf: (_ref4 = title2 !== null && title2 !== void 0 ? title2 : props.W1dUHMesf) !== null && _ref4 !== void 0
      ? _ref4
      : 'Define Primary Goal',
  };
};
var createLayoutDependency3 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component3 = /* @__PURE__ */ React5.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo3();
  const { style, className: className2, layoutId, variant, QCOPRCUSC, lxdU5EATK, W1dUHMesf, NJqu6koZC, AoRZX1H1N, ...restProps } =
    getProps3(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'wZ2vnzihB',
    transitions: transitions3,
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const ref1 = React5.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'cbq3T4JIp') {
      return false;
    }
    return true;
  };
  const defaultLayoutId = React5.useId();
  const sharedStyleClassNames = [];
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
      className: cx3('framer-PDsqR', ...sharedStyleClassNames, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx5(Transition3, {
        value: transition,
        children: /* @__PURE__ */ _jsx5(motion4.div, {
          ...restProps,
          className: cx3('framer-11roolr', className2,),
          'data-framer-name': 'hover',
          layoutDependency,
          layoutId: 'wZ2vnzihB',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides3({ cbq3T4JIp: { 'data-framer-name': 'default', }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx5(motion4.div, {
            className: 'framer-198tq80',
            'data-framer-name': 'Frame 2608513',
            layoutDependency,
            layoutId: 'EOsWO_QI1',
            children: /* @__PURE__ */ _jsxs3(motion4.div, {
              className: 'framer-wcil6r',
              'data-framer-name': 'Search bar',
              layoutDependency,
              layoutId: 'kaNzx5LzP',
              style: {
                backgroundColor: 'rgb(237, 238, 241)',
                borderBottomLeftRadius: 28,
                borderBottomRightRadius: 28,
                borderTopLeftRadius: 28,
                borderTopRightRadius: 28,
                boxShadow: '0px 13px 16px -1px rgba(0, 0, 0, 0.23)',
              },
              variants: {
                cbq3T4JIp: {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  boxShadow: 'none',
                },
              },
              children: [
                /* @__PURE__ */ _jsxs3(motion4.div, {
                className: 'framer-z4y7c8',
                'data-framer-name': 'state-layer',
                layoutDependency,
                layoutId: 'TvDEjHH6w',
                children: [
                    /* @__PURE__ */ _jsx5(motion4.div, {
                  className: 'framer-1mc0qah',
                  'data-framer-name': 'Trailing-Elements',
                  layoutDependency,
                  layoutId: 'vZLIIn6dW',
                  children: /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-1ickzll',
                    'data-framer-name': 'Avatar-target',
                    layoutDependency,
                    layoutId: 'YubHZA293',
                    children: /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-mzr60a',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'tefoqV_mq',
                      children: /* @__PURE__ */ _jsx5(motion4.div, {
                        className: 'framer-1oshf39',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'unQWFotM5',
                        style: {
                          backgroundColor: 'rgb(69, 164, 176)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx5(RichText2, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                            children: /* @__PURE__ */ _jsx5(motion4.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-nc1jdp',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'smxMuzlJ1',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                          text: QCOPRCUSC,
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                      },),
                    },),
                  },),
                },),
                  isDisplayed() && /* @__PURE__ */ _jsxs3(motion4.div, {
                    className: 'framer-e83wz3',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'bKslJ4TgA',
                    children: [
                        /* @__PURE__ */ _jsxs3(motion4.div, {
                      className: 'framer-1t4brwe',
                      layoutDependency,
                      layoutId: 'wVJfg4hIM',
                      children: [
                            /* @__PURE__ */ _jsx5(RichText2, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                          children: /* @__PURE__ */ _jsx5(motion4.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                              '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-letter-spacing': '0.5px',
                              '--framer-line-height': '24px',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                            },
                            children: 'Decision Node',
                          },),
                        },),
                        className: 'framer-13eay36',
                        'data-framer-name': 'supporting-text',
                        fonts: ['CUSTOM;PP Supply Sans Medium',],
                        layoutDependency,
                        layoutId: 'tYOiIMZDy',
                        style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                        verticalAlignment: 'center',
                        withExternalLayout: true,
                      },),
                            /* @__PURE__ */ _jsx5(RichText2, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                          children: /* @__PURE__ */ _jsx5(motion4.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                              '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                              '--framer-text-transform': 'capitalize',
                            },
                            children: 'Define Primary Goal',
                          },),
                        },),
                        className: 'framer-e4h0q9',
                        'data-framer-name': 'supporting-text',
                        fonts: ['CUSTOM;PP Supply Sans Light',],
                        layoutDependency,
                        layoutId: 'mHlvgTPwH',
                        style: { '--framer-paragraph-spacing': '0px', },
                        text: W1dUHMesf,
                        verticalAlignment: 'center',
                        withExternalLayout: true,
                      },),
                      ],
                    },),
                        /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-sy5g44',
                      'data-framer-name': 'Leading-icon',
                      layoutDependency,
                      layoutId: 'iRCcIBiIk',
                      children: /* @__PURE__ */ _jsx5(motion4.div, {
                        className: 'framer-n1rm4',
                        'data-framer-name': 'container',
                        layoutDependency,
                        layoutId: 'XWUxp0uFB',
                        style: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        children: /* @__PURE__ */ _jsx5(motion4.div, {
                          className: 'framer-vqyzwc',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'zFjwVocJZ',
                          children: /* @__PURE__ */ _jsx5(motion4.div, {
                            className: 'framer-kl16gq',
                            'data-framer-name': 'Icon',
                            layoutDependency,
                            layoutId: 'ya6P5S7z1',
                            children: /* @__PURE__ */ _jsx5(SVG3, {
                              className: 'framer-xu11w6',
                              'data-framer-name': 'icon',
                              fill: 'rgba(0,0,0,1)',
                              intrinsicHeight: 16,
                              intrinsicWidth: 4,
                              layoutDependency,
                              layoutId: 'LJ1VmVGJb',
                              svg:
                                '<svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z" fill="#3F484A"/>\n</svg>\n',
                              withExternalLayout: true,
                            },),
                          },),
                        },),
                      },),
                    },),
                    ],
                  },),
                ],
              },),
                isDisplayed() && /* @__PURE__ */ _jsx5(motion4.div, {
                  className: 'framer-maj9oe',
                  layoutDependency,
                  layoutId: 'YWPrfQt8J',
                  children: /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-60028p-container',
                    layoutDependency,
                    layoutId: 'I0lrz3W9r-container',
                    children: /* @__PURE__ */ _jsx5(stdin_default4, {
                      AA_oylHc1: false,
                      B9Ye7wHiX: 'A',
                      cib0E0Vb9: 'B',
                      Cpm7YdhW6: 'A',
                      dxSidP8LF: 'C',
                      eePEcZAuW: 'zAJDHJhkW',
                      Gu4Kp5hWx: W1dUHMesf,
                      height: '100%',
                      id: 'I0lrz3W9r',
                      kRgq0jgQR: 50,
                      layoutId: 'I0lrz3W9r',
                      NPSt7VsjX: AoRZX1H1N,
                      nQb7W3cjE: NJqu6koZC,
                      style: { width: '100%', },
                      variant: lxdU5EATK,
                      width: '100%',
                      yBMe3I4G7: 'B',
                    },),
                  },),
                },),
              ],
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css4 = [
  '.framer-PDsqR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-PDsqR .framer-36ul35 { display: block; }',
  '.framer-PDsqR .framer-11roolr { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-PDsqR .framer-198tq80 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 366px; }',
  '.framer-PDsqR .framer-wcil6r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-PDsqR .framer-z4y7c8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 56px; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 100%; }',
  '.framer-PDsqR .framer-1mc0qah { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-PDsqR .framer-1ickzll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-PDsqR .framer-mzr60a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-PDsqR .framer-1oshf39 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-PDsqR .framer-nc1jdp { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); white-space: pre-wrap; width: 40px; word-break: break-word; word-wrap: break-word; }',
  '.framer-PDsqR .framer-e83wz3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-PDsqR .framer-1t4brwe { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-PDsqR .framer-13eay36 { flex: none; height: 12px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }',
  '.framer-PDsqR .framer-e4h0q9 { flex: none; height: 19px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }',
  '.framer-PDsqR .framer-sy5g44 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-PDsqR .framer-n1rm4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-PDsqR .framer-vqyzwc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-PDsqR .framer-kl16gq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-PDsqR .framer-xu11w6 { bottom: 4px; flex: none; left: 10px; position: absolute; right: 10px; top: 4px; }',
  '.framer-PDsqR .framer-maj9oe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 13px 12px; position: relative; width: min-content; }',
  '.framer-PDsqR .framer-60028p-container { flex: none; height: auto; position: relative; width: 342px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PDsqR .framer-11roolr, .framer-PDsqR .framer-198tq80, .framer-PDsqR .framer-wcil6r, .framer-PDsqR .framer-z4y7c8, .framer-PDsqR .framer-1mc0qah, .framer-PDsqR .framer-1ickzll, .framer-PDsqR .framer-mzr60a, .framer-PDsqR .framer-e83wz3, .framer-PDsqR .framer-1t4brwe, .framer-PDsqR .framer-sy5g44, .framer-PDsqR .framer-n1rm4, .framer-PDsqR .framer-vqyzwc, .framer-PDsqR .framer-maj9oe { gap: 0px; } .framer-PDsqR .framer-11roolr > *, .framer-PDsqR .framer-1mc0qah > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-PDsqR .framer-11roolr > :first-child, .framer-PDsqR .framer-z4y7c8 > :first-child, .framer-PDsqR .framer-1mc0qah > :first-child, .framer-PDsqR .framer-1ickzll > :first-child, .framer-PDsqR .framer-e83wz3 > :first-child, .framer-PDsqR .framer-n1rm4 > :first-child, .framer-PDsqR .framer-vqyzwc > :first-child, .framer-PDsqR .framer-maj9oe > :first-child { margin-left: 0px; } .framer-PDsqR .framer-11roolr > :last-child, .framer-PDsqR .framer-z4y7c8 > :last-child, .framer-PDsqR .framer-1mc0qah > :last-child, .framer-PDsqR .framer-1ickzll > :last-child, .framer-PDsqR .framer-e83wz3 > :last-child, .framer-PDsqR .framer-n1rm4 > :last-child, .framer-PDsqR .framer-vqyzwc > :last-child, .framer-PDsqR .framer-maj9oe > :last-child { margin-right: 0px; } .framer-PDsqR .framer-198tq80 > *, .framer-PDsqR .framer-mzr60a > *, .framer-PDsqR .framer-1t4brwe > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-PDsqR .framer-198tq80 > :first-child, .framer-PDsqR .framer-wcil6r > :first-child, .framer-PDsqR .framer-mzr60a > :first-child, .framer-PDsqR .framer-1t4brwe > :first-child, .framer-PDsqR .framer-sy5g44 > :first-child { margin-top: 0px; } .framer-PDsqR .framer-198tq80 > :last-child, .framer-PDsqR .framer-wcil6r > :last-child, .framer-PDsqR .framer-mzr60a > :last-child, .framer-PDsqR .framer-1t4brwe > :last-child, .framer-PDsqR .framer-sy5g44 > :last-child { margin-bottom: 0px; } .framer-PDsqR .framer-wcil6r > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-PDsqR .framer-z4y7c8 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-PDsqR .framer-1ickzll > *, .framer-PDsqR .framer-e83wz3 > *, .framer-PDsqR .framer-n1rm4 > *, .framer-PDsqR .framer-vqyzwc > *, .framer-PDsqR .framer-maj9oe > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PDsqR .framer-sy5g44 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }',
  '.framer-PDsqR.framer-v-u1sef0 .framer-198tq80, .framer-PDsqR.framer-v-u1sef0 .framer-wcil6r, .framer-PDsqR.framer-v-u1sef0 .framer-z4y7c8 { width: min-content; }',
];
var FramerA4GdXWFMj = withCSS5(Component3, css4, 'framer-PDsqR',);
var stdin_default5 = FramerA4GdXWFMj;
FramerA4GdXWFMj.displayName = 'node-detail';
FramerA4GdXWFMj.defaultProps = { height: 135, width: 366, };
addPropertyControls5(FramerA4GdXWFMj, {
  variant: { options: ['wZ2vnzihB', 'cbq3T4JIp',], optionTitles: ['hover', 'default',], title: 'Variant', type: ControlType8.Enum, },
  QCOPRCUSC: { defaultValue: 'A-2', displayTextArea: false, title: 'Index', type: ControlType8.String, },
  lxdU5EATK: (NodeTypeControls === null || NodeTypeControls === void 0 ? void 0 : NodeTypeControls['variant']) &&
    { ...NodeTypeControls['variant'], defaultValue: 'fSJwriuSS', hidden: void 0, title: 'Type', },
  W1dUHMesf: { defaultValue: 'Define Primary Goal', displayTextArea: false, title: 'Title 2', type: ControlType8.String, },
  NJqu6koZC: {
    defaultValue: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    displayTextArea: true,
    title: 'Input',
    type: ControlType8.String,
  },
  AoRZX1H1N: { defaultValue: false, title: 'Streaming', type: ControlType8.Boolean, },
},);
addFonts3(FramerA4GdXWFMj, [
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  { family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },
  ...NodeTypeFonts,
],);

// https:https://framerusercontent.com/modules/Oud72c2V1Mr3Jz9fGInx/PMc2ZIa5dlMK1YzuFBmG/C_odUWZqr.js
var NodeDetailFonts = getFonts3(stdin_default5,);
var TypewriterFonts2 = getFonts3(TypeWriter,);
var NodeTypeFonts2 = getFonts3(stdin_default4,);
var NodeTypeControls2 = getPropertyControls2(stdin_default4,);
var NodeDetailControls = getPropertyControls2(stdin_default5,);
var cycleOrder4 = [
  'glP89HQPH',
  'PvhAKPvc8',
  'uyxhsUNZq',
  'uTj0cEPb8',
  'vVjMhdARB',
  'K8oqZ2hdT',
  'QKKRwxza_',
  'l6T5PxAnq',
  'FXIjKjDPL',
  'tVxl2ewSx',
  'z1ffbxAcs',
  'pmi554o5Z',
  'Cr7AsQCPR',
  'iqrSONtoO',
  'jFWx1BeuK',
];
var variantClassNames4 = {
  Cr7AsQCPR: 'framer-v-1s83m4o',
  FXIjKjDPL: 'framer-v-w4miu7',
  glP89HQPH: 'framer-v-15k1mix',
  iqrSONtoO: 'framer-v-1twsf6e',
  jFWx1BeuK: 'framer-v-vry1od',
  K8oqZ2hdT: 'framer-v-1khlikx',
  l6T5PxAnq: 'framer-v-40zvo0',
  pmi554o5Z: 'framer-v-14j2671',
  PvhAKPvc8: 'framer-v-1fc3t3a',
  QKKRwxza_: 'framer-v-18q1m16',
  tVxl2ewSx: 'framer-v-1kuanhy',
  uTj0cEPb8: 'framer-v-1a8pern',
  uyxhsUNZq: 'framer-v-tlkqch',
  vVjMhdARB: 'framer-v-uax94b',
  z1ffbxAcs: 'framer-v-uiz0vr',
};
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions4 = {
  Cr7AsQCPR: { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  FXIjKjDPL: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  iqrSONtoO: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  jFWx1BeuK: { delay: 0, duration: 0.33, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  K8oqZ2hdT: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  QKKRwxza_: { delay: 0, duration: 0.33, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  uTj0cEPb8: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  uyxhsUNZq: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  vVjMhdARB: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
var transformTemplate = (_, t3,) => `translateX(-50%) ${t3}`;
var transformTemplate1 = (_, t3,) => `translateY(-50%) ${t3}`;
var negate2 = (value,) => {
  return !value;
};
var convertFromEnum3 = (value,) => {
  switch (value) {
    case 'FNw58JHcH':
      return 'Wfe2yFy4g';
    case 'pXF5zK4BB':
      return 'u5YClbSTz';
    case 'hjUA_q4Xo':
      return 'wHWVBWbCh';
    case 'R8yTQtly5':
      return 'cJW2ksH1e';
    default:
      return void 0;
  }
};
var convertFromEnum12 = (value,) => {
  switch (value) {
    case 'LNmrAjenO':
      return 'XTPzGOQNq';
    case 'IHKJNDltd':
      return 'qV5XCavMo';
    case 'nWf8FHUKr':
      return 'tp4ldCYgZ';
    case 'M5KMhG7fk':
      return 'fSJwriuSS';
    default:
      return 'tp4ldCYgZ';
  }
};
var Transition4 = ({ value, children, },) => {
  const config = React6.useContext(MotionConfigContext4,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx6(MotionConfigContext4.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap4 = {
  'Node-LG': 'uTj0cEPb8',
  'Node-MD': 'vVjMhdARB',
  'Node-SM': 'K8oqZ2hdT',
  'Node-XL': 'uyxhsUNZq',
  'Node-XS': 'QKKRwxza_',
  'Variant 10': 'tVxl2ewSx',
  'Variant 13': 'z1ffbxAcs',
  'Variant 14': 'iqrSONtoO',
  'Variant 8': 'l6T5PxAnq',
  Clockface: 'pmi554o5Z',
  Compact: 'Cr7AsQCPR',
  Expanded: 'glP89HQPH',
  Hover: 'PvhAKPvc8',
  Line: 'FXIjKjDPL',
  ticker: 'jFWx1BeuK',
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
  decisionTypeNormal,
  decisionTypeSmall,
  dependencyIndex1,
  dependencyIndex2,
  dependencyIndex3,
  dependencyVisible,
  height,
  hover,
  id,
  input,
  scaleX1,
  scaleX2,
  sliderValue,
  streaming,
  width,
  ...props
},) => {
  var _ref,
    _ref1,
    _ref2,
    _ref3,
    _ref4,
    _ref5,
    _ref6,
    _ref7,
    _ref8,
    _ref9,
    _ref10,
    _ref11,
    _ref12,
    _ref13,
    _ref14,
    _humanReadableVariantMap_props_variant,
    _ref15,
    _ref16,
    _ref17,
    _ref18,
    _ref19,
    _ref20;
  return {
    ...props,
    bGyluXMcm:
      (_ref = dependencyIndex3 !== null && dependencyIndex3 !== void 0 ? dependencyIndex3 : props.bGyluXMcm) !== null && _ref !== void 0
        ? _ref
        : 'C-2',
    C0xbi_CXP: (_ref1 = scaleX2 !== null && scaleX2 !== void 0 ? scaleX2 : props.C0xbi_CXP) !== null && _ref1 !== void 0 ? _ref1 : 'B',
    cRMlaJb1_: (_ref2 = color !== null && color !== void 0 ? color : props.cRMlaJb1_) !== null && _ref2 !== void 0
      ? _ref2
      : 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
    eZ_WIO8yz: (_ref3 = choice3 !== null && choice3 !== void 0 ? choice3 : props.eZ_WIO8yz) !== null && _ref3 !== void 0
      ? _ref3
      : 'Choice 3',
    fxy_09app: (_ref4 = input !== null && input !== void 0 ? input : props.fxy_09app) !== null && _ref4 !== void 0
      ? _ref4
      : 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    Gb15ibvMU: (_ref5 = hover !== null && hover !== void 0 ? hover : props.Gb15ibvMU) !== null && _ref5 !== void 0 ? _ref5 : 'wZ2vnzihB',
    iDjlfHFIv: (_ref6 = decisionIndex !== null && decisionIndex !== void 0 ? decisionIndex : props.iDjlfHFIv) !== null && _ref6 !== void 0
      ? _ref6
      : 'C-2',
    Jdv7M1lr6: (_ref7 = scaleX1 !== null && scaleX1 !== void 0 ? scaleX1 : props.Jdv7M1lr6) !== null && _ref7 !== void 0 ? _ref7 : 'A',
    JM8R5zcqV: booleanToggle !== null && booleanToggle !== void 0 ? booleanToggle : props.JM8R5zcqV,
    k4ezTegiq: (_ref8 = sliderValue !== null && sliderValue !== void 0 ? sliderValue : props.k4ezTegiq) !== null && _ref8 !== void 0
      ? _ref8
      : 50,
    K5BysgXsx: (_ref9 = choice !== null && choice !== void 0 ? choice : props.K5BysgXsx) !== null && _ref9 !== void 0 ? _ref9 : 'zAJDHJhkW',
    LNNJy1jnm:
      (_ref10 = decisionTypeNormal !== null && decisionTypeNormal !== void 0 ? decisionTypeNormal : props.LNNJy1jnm) !== null &&
        _ref10 !== void 0
        ? _ref10
        : 'FNw58JHcH',
    NvMMjvlBy:
      (_ref11 = decisionDescription !== null && decisionDescription !== void 0 ? decisionDescription : props.NvMMjvlBy) !== null &&
        _ref11 !== void 0
        ? _ref11
        : 'Please provide the dimensions of the drawing board (width, height, and depth).',
    OJMet4Rjs: (_ref12 = choice1 !== null && choice1 !== void 0 ? choice1 : props.OJMet4Rjs) !== null && _ref12 !== void 0
      ? _ref12
      : 'Choice 1',
    qQ_BO9qk8: (_ref13 = choice2 !== null && choice2 !== void 0 ? choice2 : props.qQ_BO9qk8) !== null && _ref13 !== void 0
      ? _ref13
      : 'Choice 2',
    TTpsRmZqr:
      (_ref14 = dependencyVisible !== null && dependencyVisible !== void 0 ? dependencyVisible : props.TTpsRmZqr) !== null &&
        _ref14 !== void 0
        ? _ref14
        : true,
    variant:
      (_ref15 =
        (_humanReadableVariantMap_props_variant = humanReadableVariantMap4[props.variant]) !== null &&
          _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref15 !== void 0
        ? _ref15
        : 'glP89HQPH',
    VOTcq87Vu: (_ref16 = streaming !== null && streaming !== void 0 ? streaming : props.VOTcq87Vu) !== null && _ref16 !== void 0
      ? _ref16
      : true,
    vZATQhujj: (_ref17 = decisionTitle !== null && decisionTitle !== void 0 ? decisionTitle : props.vZATQhujj) !== null && _ref17 !== void 0
      ? _ref17
      : 'Board Dimensions',
    Xo22rvSfa:
      (_ref18 = dependencyIndex2 !== null && dependencyIndex2 !== void 0 ? dependencyIndex2 : props.Xo22rvSfa) !== null && _ref18 !== void 0
        ? _ref18
        : 'B-2',
    Z93yscm8P:
      (_ref19 = dependencyIndex1 !== null && dependencyIndex1 !== void 0 ? dependencyIndex1 : props.Z93yscm8P) !== null && _ref19 !== void 0
        ? _ref19
        : 'A-1',
    zgF6TYXbc:
      (_ref20 = decisionTypeSmall !== null && decisionTypeSmall !== void 0 ? decisionTypeSmall : props.zgF6TYXbc) !== null &&
        _ref20 !== void 0
        ? _ref20
        : 'LNmrAjenO',
  };
};
var createLayoutDependency4 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component4 = /* @__PURE__ */ React6.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo4();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    vZATQhujj,
    NvMMjvlBy,
    iDjlfHFIv,
    LNNJy1jnm,
    zgF6TYXbc,
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
    Gb15ibvMU,
    ...restProps
  } = getProps4(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: 'glP89HQPH',
    transitions: transitions4,
    variant,
    variantClassNames: variantClassNames4,
  },);
  const layoutDependency = createLayoutDependency4(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const onTap141kr03 = activeVariantCallback(async (...args) => {
    setVariant('glP89HQPH',);
  },);
  const ref1 = React6.useRef(null,);
  const isDisplayed = () => {
    if (['tVxl2ewSx', 'z1ffbxAcs', 'pmi554o5Z',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === 'pmi554o5Z') {
      return false;
    }
    return true;
  };
  const isDisplayed2 = () => {
    if (baseVariant === 'pmi554o5Z') {
      return true;
    }
    return false;
  };
  const isDisplayed3 = () => {
    if (['tVxl2ewSx', 'z1ffbxAcs',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed4 = () => {
    if (
      ['uyxhsUNZq', 'uTj0cEPb8', 'vVjMhdARB', 'K8oqZ2hdT', 'QKKRwxza_', 'FXIjKjDPL', 'tVxl2ewSx', 'z1ffbxAcs', 'iqrSONtoO', 'jFWx1BeuK',]
        .includes(baseVariant,)
    ) {
      return false;
    }
    return VOTcq87Vu;
  };
  const isDisplayed5 = () => {
    if (['uyxhsUNZq', 'uTj0cEPb8', 'vVjMhdARB', 'K8oqZ2hdT', 'QKKRwxza_', 'FXIjKjDPL', 'iqrSONtoO', 'jFWx1BeuK',].includes(baseVariant,)) {
      return false;
    }
    return negate2(VOTcq87Vu,);
  };
  const isDisplayed6 = () => {
    if (['tVxl2ewSx', 'z1ffbxAcs',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (
      ['uyxhsUNZq', 'uTj0cEPb8', 'vVjMhdARB', 'K8oqZ2hdT', 'QKKRwxza_', 'FXIjKjDPL', 'tVxl2ewSx', 'z1ffbxAcs', 'iqrSONtoO', 'jFWx1BeuK',]
        .includes(baseVariant,)
    ) {
      return false;
    }
    return true;
  };
  const isDisplayed8 = () => {
    if (
      [
        'PvhAKPvc8',
        'uyxhsUNZq',
        'uTj0cEPb8',
        'vVjMhdARB',
        'K8oqZ2hdT',
        'QKKRwxza_',
        'FXIjKjDPL',
        'tVxl2ewSx',
        'z1ffbxAcs',
        'pmi554o5Z',
        'iqrSONtoO',
        'jFWx1BeuK',
      ].includes(baseVariant,)
    ) {
      return false;
    }
    return true;
  };
  const isDisplayed9 = () => {
    if (baseVariant === 'l6T5PxAnq') {
      return TTpsRmZqr;
    }
    return false;
  };
  const isDisplayed10 = () => {
    if (baseVariant === 'z1ffbxAcs') {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [];
  return /* @__PURE__ */ _jsx6(LayoutGroup4, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx6(motion5.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx4('framer-cZDAH', ...sharedStyleClassNames, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx6(Transition4, {
        value: transition,
        children: /* @__PURE__ */ _jsx6(motion5.div, {
          ...restProps,
          className: cx4('framer-15k1mix', className2,),
          'data-framer-name': 'Expanded',
          layoutDependency,
          layoutId: 'glP89HQPH',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides4(
            {
              Cr7AsQCPR: { 'data-framer-name': 'Compact', },
              FXIjKjDPL: { 'data-framer-name': 'Line', },
              iqrSONtoO: { 'data-framer-name': 'Variant 14', },
              jFWx1BeuK: { 'data-framer-name': 'ticker', },
              K8oqZ2hdT: { 'data-framer-name': 'Node-SM', },
              l6T5PxAnq: { 'data-framer-name': 'Variant 8', },
              pmi554o5Z: { 'data-framer-name': 'Clockface', },
              PvhAKPvc8: { 'data-framer-name': 'Hover', 'data-highlight': true, onTap: onTap141kr03, },
              QKKRwxza_: { 'data-framer-name': 'Node-XS', },
              tVxl2ewSx: { 'data-framer-name': 'Variant 10', },
              uTj0cEPb8: { 'data-framer-name': 'Node-LG', },
              uyxhsUNZq: { 'data-framer-name': 'Node-XL', },
              vVjMhdARB: { 'data-framer-name': 'Node-MD', },
              z1ffbxAcs: { 'data-framer-name': 'Variant 13', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: /* @__PURE__ */ _jsxs4(motion5.div, {
            className: 'framer-u952ip',
            'data-framer-name': 'Property 1=Variant3',
            layoutDependency,
            layoutId: 'R7_JcPYV4',
            style: {
              '--border-bottom-width': '0px',
              '--border-color': 'rgba(0, 0, 0, 0)',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-style': 'solid',
              '--border-top-width': '0px',
              backdropFilter: 'blur(14px)',
              backgroundColor: 'rgba(232, 232, 232, 0.58)',
              borderBottomLeftRadius: 19,
              borderBottomRightRadius: 19,
              borderTopLeftRadius: 19,
              borderTopRightRadius: 19,
              boxShadow: 'none',
              WebkitBackdropFilter: 'blur(14px)',
            },
            variants: {
              FXIjKjDPL: { borderBottomLeftRadius: 37, borderBottomRightRadius: 37, borderTopLeftRadius: 37, borderTopRightRadius: 37, },
              iqrSONtoO: {
                backdropFilter: 'none',
                background:
                  'linear-gradient(154deg, var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */ -6.837499999999845%, var(--token-99545d54-94e2-40c6-a83a-7a0b21f2cb8c, rgb(210, 216, 232)) /* {"name":"Lavendar"} */ 100%)',
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
                WebkitBackdropFilter: 'none',
              },
              jFWx1BeuK: { borderBottomLeftRadius: 3, borderBottomRightRadius: 3, borderTopLeftRadius: 3, borderTopRightRadius: 3, },
              K8oqZ2hdT: { borderBottomLeftRadius: 37, borderBottomRightRadius: 37, borderTopLeftRadius: 37, borderTopRightRadius: 37, },
              pmi554o5Z: {
                '--border-bottom-width': '1px',
                '--border-color': 'rgba(232, 232, 235, 0.74)',
                '--border-left-width': '1px',
                '--border-right-width': '1px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
                backdropFilter: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 140,
                borderBottomRightRadius: 140,
                borderTopLeftRadius: 140,
                borderTopRightRadius: 140,
                boxShadow: '0px 1px 9px 0px rgba(0,0,0,0.25), 0px 51px 32px -13px rgba(0, 0, 0, 0.11)',
                WebkitBackdropFilter: 'none',
              },
              QKKRwxza_: { borderBottomLeftRadius: 37, borderBottomRightRadius: 37, borderTopLeftRadius: 37, borderTopRightRadius: 37, },
              tVxl2ewSx: {
                '--border-bottom-width': '1px',
                '--border-color': 'rgba(232, 232, 235, 0.74)',
                '--border-left-width': '1px',
                '--border-right-width': '1px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
                backgroundColor: 'rgba(232, 232, 235, 0.59)',
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                boxShadow: '0px 0px 26px 3px rgba(0,0,0,0.25)',
              },
              uTj0cEPb8: { borderBottomLeftRadius: 37, borderBottomRightRadius: 37, borderTopLeftRadius: 37, borderTopRightRadius: 37, },
              uyxhsUNZq: {
                backdropFilter: 'none',
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
                WebkitBackdropFilter: 'none',
              },
              vVjMhdARB: { borderBottomLeftRadius: 37, borderBottomRightRadius: 37, borderTopLeftRadius: 37, borderTopRightRadius: 37, },
              z1ffbxAcs: {
                '--border-bottom-width': '1px',
                '--border-color': 'rgba(232, 232, 235, 0.74)',
                '--border-left-width': '1px',
                '--border-right-width': '1px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
                backgroundColor: 'rgba(232, 232, 235, 0.51)',
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
              },
            },
            ...addPropertyOverrides4(
              { pmi554o5Z: { 'data-border': true, }, tVxl2ewSx: { 'data-border': true, }, z1ffbxAcs: { 'data-border': true, }, },
              baseVariant,
              gestureVariant,
            ),
            children: [
              isDisplayed() && /* @__PURE__ */ _jsxs4(motion5.div, {
                className: 'framer-16jcubo',
                'data-framer-name': 'Clock face - 12 hour',
                layoutDependency,
                layoutId: 'WYvDh9tTX',
                style: {
                  backgroundColor: 'rgb(226, 226, 229)',
                  borderBottomLeftRadius: 500,
                  borderBottomRightRadius: 500,
                  borderTopLeftRadius: 500,
                  borderTopRightRadius: 500,
                },
                children: [
                  /* @__PURE__ */ _jsx6(SVG4, {
                  className: 'framer-pgz1il',
                  'data-framer-name': 'Vector 1',
                  fill: 'rgba(0,0,0,1)',
                  intrinsicHeight: 4,
                  intrinsicWidth: 260,
                  layoutDependency,
                  layoutId: 'gW_5SwpSl',
                  svg:
                    '<svg width="260" height="4" viewBox="-1 -1 260 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 1L257 1.00002" stroke="#BEC8CA" stroke-linecap="round" stroke-dasharray="2 5"/>\n</svg>\n',
                  withExternalLayout: true,
                },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                  className: 'framer-t88y97',
                  'data-border': true,
                  'data-framer-name': 'Center Ellipse',
                  layoutDependency,
                  layoutId: 'xRnljz54b',
                  style: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'rgb(0, 105, 115)',
                    '--border-left-width': '1px',
                    '--border-right-width': '1px',
                    '--border-style': 'solid',
                    '--border-top-width': '1px',
                    backgroundColor: 'rgb(0, 105, 115)',
                    borderBottomLeftRadius: '100%',
                    borderBottomRightRadius: '100%',
                    borderTopLeftRadius: '100%',
                    borderTopRightRadius: '100%',
                    rotate: -90,
                  },
                },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                  className: 'framer-1bz5g0t',
                  'data-framer-name': 'Building Blocks/hour-line',
                  layout: 'position',
                  layoutDependency,
                  layoutId: 'RXuxIjRpw',
                  opacity: 0.22,
                  style: { opacity: 0.22, },
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 15.277 99.908 C 15.276 35.086 46.379 6.725 46.379 6.725" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 2843491711,
                  withExternalLayout: true,
                },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                  className: 'framer-s80oao',
                  'data-framer-name': 'Building Blocks/hour-line',
                  layout: 'position',
                  layoutDependency,
                  layoutId: 'VlwfQd9my',
                  opacity: 1,
                  style: { opacity: 1, },
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 99.908 C 46.38 35.086 15.277 6.725 15.277 6.725" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 1730963088,
                  variants: { tVxl2ewSx: { opacity: 0.22, }, },
                  withExternalLayout: true,
                  ...addPropertyOverrides4(
                    {
                      pmi554o5Z: {
                        svg:
                          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 99.908 C 46.38 35.086 15.277 6.725 15.277 6.725" fill="transparent" stroke-width="2" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                        svgContentId: 4285060552,
                      },
                      tVxl2ewSx: { opacity: 0.22, svgContentId: 2946061060, },
                      z1ffbxAcs: {
                        svg:
                          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 99.908 C 46.38 35.086 15.277 6.725 15.277 6.725" fill="transparent" stroke-width="2" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                        svgContentId: 4285060552,
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                  className: 'framer-grahyw',
                  'data-framer-name': 'Building Blocks/hour-line',
                  layout: 'position',
                  layoutDependency,
                  layoutId: 'P17m7StQW',
                  opacity: 0.22,
                  style: { opacity: 0.22, },
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 6.816 C 46.381 71.511 -3.621 99.816 -3.621 99.816" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 1399265944,
                  withExternalLayout: true,
                },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                  className: 'framer-ters9i',
                  'data-framer-name': 'Building Blocks/hour-line',
                  layout: 'position',
                  layoutDependency,
                  layoutId: 'NNKcByfsb',
                  opacity: 0.22,
                  style: { opacity: 0.22, },
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 0.621 6.816 C 0.619 71.511 50.621 99.816 50.621 99.816" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 1631026620,
                  withExternalLayout: true,
                },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                  className: 'framer-ygxorp',
                  'data-framer-name': 'Building Blocks/hour-line',
                  layout: 'position',
                  layoutDependency,
                  layoutId: 'oH75iPoJ1',
                  opacity: 0.22,
                  style: { opacity: 0.22, },
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 9.5 7.5 C 9.497 72.194 9.002 100 9.002 100" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 3276682908,
                  withExternalLayout: true,
                },),
                  isDisplayed1() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-gaigs9',
                    'data-framer-name': 'Hour 14',
                    layoutDependency,
                    layoutId: 'nMpM9YaWP',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-19e96pz',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'flGQU_VyT',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-67o6ax',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'zP73eCjun',
                        style: {
                          backgroundColor: 'rgb(69, 164, 176)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-1er1yu3',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'IVgQH8zb7',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                      },),
                    },),
                  },),
                  isDisplayed2() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-zsae62',
                    layoutDependency,
                    layoutId: 'bDyldThfV',
                    transformTemplate,
                    ...addPropertyOverrides4({ pmi554o5Z: { transformTemplate: void 0, }, }, baseVariant, gestureVariant,),
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-mkcxyc-container',
                      layoutDependency,
                      layoutId: 'WZHozuJOS-container',
                      children: /* @__PURE__ */ _jsx6(stdin_default5, {
                        AoRZX1H1N: VOTcq87Vu,
                        height: '100%',
                        id: 'WZHozuJOS',
                        layoutId: 'WZHozuJOS',
                        lxdU5EATK: 'fSJwriuSS',
                        NJqu6koZC: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        QCOPRCUSC: 'A-2',
                        variant: 'cbq3T4JIp',
                        W1dUHMesf: 'Define Primary Goal',
                        width: '100%',
                        ...addPropertyOverrides4(
                          { pmi554o5Z: { NJqu6koZC: fxy_09app, variant: Gb15ibvMU, }, },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-16lays1',
                    'data-framer-name': 'Hour 13',
                    layoutDependency,
                    layoutId: 'GIdxe8ttk',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1r78rj3',
                      'data-border': true,
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'dHgEeuKPX',
                      style: {
                        '--border-bottom-width': '3px',
                        '--border-color': 'rgb(171, 171, 171)',
                        '--border-left-width': '3px',
                        '--border-right-width': '3px',
                        '--border-style': 'solid',
                        '--border-top-width': '3px',
                        borderBottomLeftRadius: 33,
                        borderBottomRightRadius: 33,
                        borderTopLeftRadius: 33,
                        borderTopRightRadius: 33,
                      },
                      variants: {
                        tVxl2ewSx: {
                          '--border-bottom-width': '0px',
                          '--border-left-width': '0px',
                          '--border-right-width': '0px',
                          '--border-top-width': '0px',
                        },
                      },
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-1slmo9y',
                        'data-border': true,
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'ut9_JjQux',
                        style: {
                          '--border-bottom-width': '3px',
                          '--border-color': 'rgb(190, 200, 202)',
                          '--border-left-width': '3px',
                          '--border-right-width': '3px',
                          '--border-style': 'solid',
                          '--border-top-width': '3px',
                          backgroundColor: 'rgb(144, 241, 255)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        variants: {
                          tVxl2ewSx: {
                            '--border-bottom-width': '0px',
                            '--border-left-width': '0px',
                            '--border-right-width': '0px',
                            '--border-top-width': '0px',
                          },
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '23px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 31, 35))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-1iiryhe',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'kSj4a5el_',
                          style: { '--extracted-r6o4lv': 'rgb(0, 31, 35)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              pmi554o5Z: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '23px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 31, 35))',
                                    },
                                    children: 'A-1',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-hm8hzz',
                    'data-framer-name': 'Hour 7',
                    layoutDependency,
                    layoutId: 'RKbNbyXNN',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-bxm0gv',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'VTI0VzvGT',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-13irvgu',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'VSbG8o7c3',
                        style: {
                          backgroundColor: 'rgb(150, 55, 78)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 219, 202))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-1v0hux5',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'asz0BD9Ng',
                          style: { '--extracted-r6o4lv': 'rgb(255, 219, 202)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              pmi554o5Z: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '22px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 219, 202))',
                                    },
                                    children: 'B-1',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-b81srs',
                    'data-framer-name': 'Hour 15',
                    layoutDependency,
                    layoutId: 'UD0ADclsv',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1seihbr',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'U8E456R_5',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-b95frv',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'zAv3WT4os',
                        style: {
                          backgroundColor: 'rgb(245, 122, 41)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(248, 242, 239))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-1gnv6f9',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'alE6E0r_7',
                          style: { '--extracted-r6o4lv': 'rgb(248, 242, 239)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              pmi554o5Z: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '22px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(248, 242, 239))',
                                    },
                                    children: 'B-2',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-eie4hr',
                    'data-framer-name': 'Hour 16',
                    layoutDependency,
                    layoutId: 'RwCIEaxUx',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1x7jv21',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'RovaPqUr5',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-1iqm9oi',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'SvZwSxqLy',
                        style: {
                          backgroundColor: 'rgb(205, 93, 204)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 232, 254))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-10xeruc',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'b0L1mHhSz',
                          style: { '--extracted-r6o4lv': 'rgb(255, 232, 254)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              pmi554o5Z: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '22px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 232, 254))',
                                    },
                                    children: 'B-5',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                          '--framer-font-size': '10px',
                          '--framer-letter-spacing': '0.5px',
                          '--framer-line-height': '16px',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                        },
                        children: 'ROOTS',
                      },),
                    },),
                    className: 'framer-pk4yjk',
                    'data-framer-name': 'Title',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'STZvevj6M',
                    style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                          '--framer-font-size': '10px',
                          '--framer-letter-spacing': '0.5px',
                          '--framer-line-height': '16px',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                        },
                        children: 'BRANCHES',
                      },),
                    },),
                    className: 'framer-1saw3ai',
                    'data-framer-name': 'Title',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'SplMHIcz7',
                    style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                    transformTemplate: transformTemplate1,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                ],
              },),
              isDisplayed1() && /* @__PURE__ */ _jsxs4(motion5.div, {
                className: 'framer-6vo91e',
                'data-framer-name': 'Frame 18',
                layoutDependency,
                layoutId: 'gPdwXBLtX',
                children: [
                  isDisplayed3() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-1bz3drm',
                    'data-framer-name': 'Header',
                    layoutDependency,
                    layoutId: 'RV_qbEcij',
                    children: /* @__PURE__ */ _jsx6(RichText3, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFNlbWlib2xk',
                            '--framer-font-family': '"PP Supply Sans Semibold", sans-serif',
                            '--framer-font-size': '12px',
                            '--framer-letter-spacing': '0.5px',
                            '--framer-line-height': '16px',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                          },
                          children: 'COMPONENT IDEA',
                        },),
                      },),
                      className: 'framer-rxhn3z',
                      'data-framer-name': 'Title',
                      fonts: ['CUSTOM;PP Supply Sans Semibold',],
                      layoutDependency,
                      layoutId: 'Jug1OtyCX',
                      style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                  },),
                  isDisplayed3() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-z3jaf1',
                    'data-framer-name': 'headline',
                    layoutDependency,
                    layoutId: 'X6QKXCzwN',
                    children: /* @__PURE__ */ _jsx6(RichText3, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                            '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                            '--framer-font-size': '14px',
                            '--framer-letter-spacing': '0.25px',
                            '--framer-line-height': '20px',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                          },
                          children: 'Describing the medium and method of the tool.',
                        },),
                      },),
                      className: 'framer-1dzdi2f',
                      'data-framer-name': 'subhead',
                      fonts: ['CUSTOM;PP Supply Sans Light',],
                      layoutDependency,
                      layoutId: 'JMZOOi5ss',
                      style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                      ...addPropertyOverrides4(
                        {
                          tVxl2ewSx: {
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                  '--framer-letter-spacing': '0.25px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                },
                                children: 'Describing the medium and method of the tool.',
                              },),
                            },),
                          },
                          z1ffbxAcs: {
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                  '--framer-letter-spacing': '0.25px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                },
                                children: 'Describing the medium and method of the tool.',
                              },),
                            },),
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-1t15ltz',
                    'data-framer-name': 'Frame 3',
                    layoutDependency,
                    layoutId: 'XgLQHhi6z',
                    children: /* @__PURE__ */ _jsxs4(motion5.div, {
                      className: 'framer-relj6k',
                      'data-framer-name': 'Frame 20',
                      layoutDependency,
                      layoutId: 'zmCmB8SKh',
                      children: [
                        isDisplayed4() && /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-g6jc3c-container',
                          layoutDependency,
                          layoutId: 'v7q4Kvml4-container',
                          children: /* @__PURE__ */ _jsx6(TypeWriter, {
                            autoStart: true,
                            caretVisibility: false,
                            color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                            cursor: '\u25CF',
                            cursorColor: 'rgba(136, 136, 136, 0.5)',
                            delayNumber: 0.06,
                            delayType: false,
                            font: {
                              fontFamily: 'PP Supply Sans Light',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0.4,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                            height: '100%',
                            id: 'v7q4Kvml4',
                            layoutId: 'v7q4Kvml4',
                            loop: false,
                            pauseFor: 1,
                            split: false,
                            style: { width: '100%', },
                            tag: 'heading1',
                            text: vZATQhujj,
                            width: '100%',
                            ...addPropertyOverrides4(
                              {
                                l6T5PxAnq: {
                                  font: {
                                    fontFamily: 'PP Supply Sans Light',
                                    fontSize: 20,
                                    fontWeight: 500,
                                    letterSpacing: 0.4,
                                    lineHeight: 1.2,
                                    lineHeightPixels: 100,
                                    lineHeightType: true,
                                    offset: 0,
                                    textAlign: 'left',
                                    whiteSpace: 'nowrap',
                                  },
                                },
                                PvhAKPvc8: {
                                  font: {
                                    fontFamily: 'PP Supply Sans Light',
                                    fontSize: 20,
                                    fontWeight: 500,
                                    letterSpacing: 0.4,
                                    lineHeight: 1.2,
                                    lineHeightPixels: 100,
                                    lineHeightType: true,
                                    offset: 0,
                                    textAlign: 'left',
                                    whiteSpace: 'nowrap',
                                  },
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                        },),
                        isDisplayed5() && /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-font-size': '20px',
                                '--framer-letter-spacing': '0.04em',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                              },
                              children: 'Board Dimensions',
                            },),
                          },),
                          className: 'framer-s3klti',
                          'data-framer-name': 'Board Dimensions',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'VpZUXHRQ1',
                          style: {
                            '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                            '--framer-paragraph-spacing': '0px',
                          },
                          text: vZATQhujj,
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              Cr7AsQCPR: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-font-size': '12px',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                                    },
                                    children: 'Board Dimensions',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                        /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-knxsbs',
                          'data-framer-name': 'Dot',
                          layoutDependency,
                          layoutId: 'y57fJ5mgy',
                          style: {
                            backdropFilter: 'none',
                            backgroundColor: cRMlaJb1_,
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            boxShadow:
                              'inset -0.12072530715522589px -0.12072530715522589px 0px 0px rgba(0, 0, 0, 0.02415), inset -1px -1px 0px 0px rgba(0, 0, 0, 0.2)',
                            WebkitBackdropFilter: 'none',
                          },
                          variants: {
                            FXIjKjDPL: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            iqrSONtoO: {
                              backdropFilter: 'blur(36px)',
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                              boxShadow:
                                'inset 0px -0.5px 1px 0px rgba(0, 0, 0, 0.05), 0.1px 1px 3px 0px rgba(16, 25, 66, 0.14), inset 0.1px 0.25px 4px 0px rgba(0, 0, 0, 0.08), inset -0.1px -0.2px 2px 0px rgb(255, 255, 255)',
                              WebkitBackdropFilter: 'blur(36px)',
                            },
                            jFWx1BeuK: {
                              borderBottomLeftRadius: 2,
                              borderBottomRightRadius: 2,
                              borderTopLeftRadius: 2,
                              borderTopRightRadius: 2,
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
                              backgroundColor: 'rgb(226, 226, 229)',
                              borderBottomLeftRadius: 11,
                              borderBottomRightRadius: 11,
                              borderTopLeftRadius: 11,
                              borderTopRightRadius: 11,
                              boxShadow:
                                'inset 0.12072530715522589px 0.12072530715522589px 0px 0px hsla(0, 0%, 100%, 0.02415), inset 1px 1px 0px 0px hsla(0, 0%, 100%, 0.2)',
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
                              boxShadow:
                                'inset -0.12072530715522589px -0.12072530715522589px 0px 0px rgba(0, 0, 0, 0.02415), inset -1px -1px 0px 0px rgba(0, 0, 0, 0.2), inset 3px -13px 0px -5px rgba(0, 0, 0, 0.1), inset 0.6123797319404547px 0.5417205321011715px 0px -0.8333333333333333px rgba(255, 255, 255, 0.09764), inset 1.5656869846134214px 1.3850307940811035px 0px -1.6666666666666665px rgba(255, 255, 255, 0.09398), inset 3.138857986035873px 2.7766820645701955px 0px -2.5px rgba(255, 255, 255, 0.08793), inset 5.950186588432988px 5.263626597459951px 0px -3.333333333333333px rgba(255, 255, 255, 0.07711), inset 11.827193223321228px 10.462517082168779px 0px -4.166666666666667px rgba(255, 255, 255, 0.05451), inset 26px 23px 0px -5px rgba(255, 255, 255, 0)',
                            },
                            vVjMhdARB: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            z1ffbxAcs: {
                              backgroundColor: 'rgb(226, 226, 229)',
                              borderBottomLeftRadius: 11,
                              borderBottomRightRadius: 11,
                              borderTopLeftRadius: 11,
                              borderTopRightRadius: 11,
                              boxShadow:
                                'inset 0.12072530715522589px 0.12072530715522589px 0px 0px hsla(0, 0%, 100%, 0.02415), inset 1px 1px 0px 0px hsla(0, 0%, 100%, 0.2)',
                            },
                          },
                          children: /* @__PURE__ */ _jsxs4(motion5.div, {
                            className: 'framer-rojnhy',
                            'data-framer-name': 'state-layer',
                            layoutDependency,
                            layoutId: 'I303:2962;53923:27987',
                            style: { backgroundColor: 'rgba(0, 0, 0, 0)', },
                            variants: {
                              tVxl2ewSx: { backgroundColor: 'rgba(144, 241, 255, 0.24)', },
                              z1ffbxAcs: { backgroundColor: 'rgba(144, 241, 255, 0.24)', },
                            },
                            children: [
                              isDisplayed3() && /* @__PURE__ */ _jsxs4(motion5.div, {
                                className: 'framer-tthg7e',
                                'data-framer-name': 'Frame 2608514',
                                layoutDependency,
                                layoutId: 'n_ZUrzmLg',
                                style: {
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                                children: [
                                  /* @__PURE__ */ _jsx6(motion5.div, {
                                  className: 'framer-1hadtwd',
                                  layoutDependency,
                                  layoutId: 'uyjvBXZGD',
                                  children: /* @__PURE__ */ _jsx6(RichText3, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                                        style: {
                                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                          '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                          '--framer-font-size': '14px',
                                          '--framer-letter-spacing': '0.25px',
                                          '--framer-line-height': '26px',
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                                        },
                                        children:
                                          'a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement',
                                      },),
                                    },),
                                    className: 'framer-6porn2',
                                    'data-framer-name': 'supporting-text',
                                    fonts: ['CUSTOM;PP Supply Sans Light',],
                                    layoutDependency,
                                    layoutId: 'oSRMBRi6_',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                                      '--framer-paragraph-spacing': '0px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                    ...addPropertyOverrides4(
                                      {
                                        tVxl2ewSx: {
                                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                                              style: {
                                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                                '--framer-font-size': '14px',
                                                '--framer-letter-spacing': '0.25px',
                                                '--framer-line-height': '24px',
                                                '--framer-text-color':
                                                  'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                                              },
                                              children:
                                                'a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement',
                                            },),
                                          },),
                                        },
                                        z1ffbxAcs: {
                                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                                              style: {
                                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                                '--framer-font-size': '14px',
                                                '--framer-letter-spacing': '0.25px',
                                                '--framer-line-height': '24px',
                                                '--framer-text-color':
                                                  'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                                              },
                                              children:
                                                'a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement',
                                            },),
                                          },),
                                        },
                                      },
                                      baseVariant,
                                      gestureVariant,
                                    ),
                                  },),
                                },),
                                  /* @__PURE__ */ _jsxs4(motion5.div, {
                                  className: 'framer-p6sy63',
                                  layoutDependency,
                                  layoutId: 'XopzhIgQU',
                                  children: [
                                    isDisplayed6() && /* @__PURE__ */
                                    _jsx6(motion5.div, {
                                      className: 'framer-1sckg0c',
                                      'data-framer-name': 'Rectangle 8',
                                      layoutDependency,
                                      layoutId: 'iRzYxu2iB',
                                      style: {
                                        backgroundColor: 'rgb(237, 110, 235)',
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,
                                        borderTopLeftRadius: 6,
                                        borderTopRightRadius: 6,
                                      },
                                    },),
                                    isDisplayed6() && /* @__PURE__ */
                                    _jsx6(motion5.div, {
                                      className: 'framer-4q5s49',
                                      'data-framer-name': 'Rectangle 8',
                                      layoutDependency,
                                      layoutId: 'n9fKOegD2',
                                      style: {
                                        backgroundColor: 'rgb(168, 243, 255)',
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,
                                        borderTopLeftRadius: 6,
                                        borderTopRightRadius: 6,
                                      },
                                    },),
                                    isDisplayed6() && /* @__PURE__ */
                                    _jsx6(motion5.div, {
                                      className: 'framer-btq4z',
                                      'data-framer-name': 'Rectangle 8',
                                      layoutDependency,
                                      layoutId: 'm7kyec2O7',
                                      style: {
                                        backgroundColor: 'rgb(69, 164, 176)',
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,
                                        borderTopLeftRadius: 6,
                                        borderTopRightRadius: 6,
                                      },
                                    },),
                                    isDisplayed6() && /* @__PURE__ */
                                    _jsx6(motion5.div, {
                                      className: 'framer-hccerc',
                                      'data-framer-name': 'Rectangle 8',
                                      layoutDependency,
                                      layoutId: 'Un6XGp9Hx',
                                      style: {
                                        backgroundColor: 'rgb(248, 99, 136)',
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,
                                        borderTopLeftRadius: 6,
                                        borderTopRightRadius: 6,
                                      },
                                    },),
                                    isDisplayed6() && /* @__PURE__ */
                                    _jsx6(motion5.div, {
                                      className: 'framer-1rdnm2h',
                                      'data-framer-name': 'Rectangle 8',
                                      layoutDependency,
                                      layoutId: 'bIlIHQ7WO',
                                      style: {
                                        backgroundColor: 'rgb(255, 148, 77)',
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,
                                        borderTopLeftRadius: 6,
                                        borderTopRightRadius: 6,
                                      },
                                    },),
                                    isDisplayed6() && /* @__PURE__ */
                                    _jsx6(motion5.div, {
                                      className: 'framer-1msl2tx',
                                      'data-framer-name': 'Rectangle 8',
                                      layoutDependency,
                                      layoutId: 'sMikB4eW_',
                                      style: {
                                        backgroundColor: 'rgb(240, 112, 238)',
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,
                                        borderTopLeftRadius: 6,
                                        borderTopRightRadius: 6,
                                      },
                                    },),
                                    isDisplayed6() && /* @__PURE__ */
                                    _jsx6(motion5.div, {
                                      className: 'framer-via5el',
                                      'data-framer-name': 'Rectangle 8',
                                      layoutDependency,
                                      layoutId: 'y0zKgSH6F',
                                      style: {
                                        backgroundColor: 'rgb(168, 230, 240)',
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,
                                        borderTopLeftRadius: 6,
                                        borderTopRightRadius: 6,
                                      },
                                    },),
                                  ],
                                },),
                                ],
                              },),
                              isDisplayed7() && /* @__PURE__ */ _jsx6(RichText3, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-letter-spacing': '0.7px',
                                      '--framer-line-height': '20px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                    },
                                    children: 'C-2',
                                  },),
                                },),
                                className: 'framer-1hg0ea8',
                                'data-framer-name': 'label-text',
                                fonts: ['CUSTOM;PP Supply Sans Light',],
                                layoutDependency,
                                layoutId: 'I303:2962;53923:27988',
                                style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                                text: iDjlfHFIv,
                                verticalAlignment: 'center',
                                withExternalLayout: true,
                                ...addPropertyOverrides4(
                                  {
                                    Cr7AsQCPR: {
                                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                                          style: {
                                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                            '--framer-font-family':
                                              '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                            '--framer-font-size': '8px',
                                            '--framer-letter-spacing': '0.7px',
                                            '--framer-line-height': '20px',
                                            '--framer-text-alignment': 'center',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                          },
                                          children: 'C-2',
                                        },),
                                      },),
                                    },
                                  },
                                  baseVariant,
                                  gestureVariant,
                                ),
                              },),
                            ],
                          },),
                        },),
                      ],
                    },),
                  },),
                  isDisplayed5() && /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-letter-spacing': '0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(16, 25, 66))',
                        },
                        children: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      },),
                    },),
                    className: 'framer-1oh0yiu',
                    'data-framer-name': 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
                    layoutDependency,
                    layoutId: 'qhSPm_I9X',
                    style: { '--extracted-r6o4lv': 'rgb(16, 25, 66)', '--framer-paragraph-spacing': '0px', },
                    text: NvMMjvlBy,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                    ...addPropertyOverrides4(
                      {
                        Cr7AsQCPR: {
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                '--framer-font-size': '8px',
                                '--framer-line-height': '1.5em',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(16, 25, 66))',
                              },
                              children: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                            },),
                          },),
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                  isDisplayed4() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-274qgp-container',
                    layoutDependency,
                    layoutId: 'bYwxfJYzC-container',
                    children: /* @__PURE__ */ _jsx6(TypeWriter, {
                      autoStart: true,
                      caretVisibility: false,
                      color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                      cursor: '\u25CF',
                      cursorColor: 'rgba(136, 136, 136, 0.5)',
                      delayNumber: 0,
                      delayType: false,
                      font: {
                        fontFamily: 'PP Supply Sans Light',
                        fontSize: 8,
                        fontWeight: 500,
                        letterSpacing: 0.2,
                        lineHeight: 1.5,
                        lineHeightPixels: 100,
                        lineHeightType: true,
                        offset: 0,
                        textAlign: 'left',
                        whiteSpace: 'normal',
                      },
                      height: '100%',
                      id: 'bYwxfJYzC',
                      layoutId: 'bYwxfJYzC',
                      loop: false,
                      pauseFor: 1,
                      split: false,
                      style: { width: '100%', },
                      tag: 'heading1',
                      text: NvMMjvlBy,
                      width: '100%',
                      ...addPropertyOverrides4(
                        {
                          l6T5PxAnq: {
                            font: {
                              fontFamily: 'PP Supply Sans Light',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0.2,
                              lineHeight: 1.5,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'normal',
                            },
                          },
                          PvhAKPvc8: {
                            font: {
                              fontFamily: 'PP Supply Sans Light',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0.2,
                              lineHeight: 1.5,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'normal',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                ],
              },),
              isDisplayed8() && /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-8z588a',
                'data-framer-name': 'Divider',
                layoutDependency,
                layoutId: 'ThuYqZPF1',
                children: /* @__PURE__ */ _jsx6(SVG4, {
                  className: 'framer-q310jp',
                  'data-framer-name': 'Divider',
                  fill: 'rgba(0,0,0,1)',
                  intrinsicHeight: 3,
                  intrinsicWidth: 362,
                  layoutDependency,
                  layoutId: 'I52977:33967;51816:5861',
                  svg:
                    '<svg width="362" height="3" viewBox="-1 -1 362 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n<line y1="0.5" x2="360" y2="0.5" stroke="#6F797A"/>\n</svg>\n',
                  withExternalLayout: true,
                },),
              },),
              isDisplayed9() && /* @__PURE__ */ _jsxs4(motion5.div, {
                className: 'framer-s5kk1i',
                'data-framer-name': 'Frame 19',
                layoutDependency,
                layoutId: 'deAcFRQkZ',
                children: [
                  /* @__PURE__ */ _jsx6(motion5.div, {
                  className: 'framer-1o7rnow',
                  'data-framer-name': 'Frame 4',
                  layoutDependency,
                  layoutId: 'MXvMU4ja8',
                  children: /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                          '--framer-font-size': '10px',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(16, 25, 66))',
                        },
                        children: 'Dependencies',
                      },),
                    },),
                    className: 'framer-rluzxm',
                    'data-framer-name': 'Dependencies',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'ca5w6dtAm',
                    style: { '--extracted-r6o4lv': 'rgb(16, 25, 66)', '--framer-paragraph-spacing': '0px', },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                  /* @__PURE__ */ _jsxs4(motion5.div, {
                  className: 'framer-b3batm',
                  'data-framer-name': 'Frame 17',
                  layoutDependency,
                  layoutId: 'BjqpKAw3A',
                  children: [
                      /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-1u81hx0',
                    'data-framer-name': 'Input chip',
                    layoutDependency,
                    layoutId: 'gI4qKg22n',
                    style: {
                      backgroundColor: 'rgb(187, 238, 242)',
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1m02nfp',
                      'data-framer-name': 'state-layer',
                      layoutDependency,
                      layoutId: 'I303:2970;53923:27987',
                      children: /* @__PURE__ */ _jsx6(RichText3, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx6(motion5.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                              '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                              '--framer-font-size': '10px',
                              '--framer-letter-spacing': '0.1px',
                              '--framer-line-height': '20px',
                              '--framer-text-alignment': 'center',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(55, 0, 58))',
                            },
                            children: 'A-1',
                          },),
                        },),
                        className: 'framer-dad9fl',
                        'data-framer-name': 'label-text',
                        fonts: ['CUSTOM;PP Supply Sans Light',],
                        layoutDependency,
                        layoutId: 'I303:2970;53923:27988',
                        style: { '--extracted-r6o4lv': 'rgb(55, 0, 58)', '--framer-paragraph-spacing': '0px', },
                        text: Z93yscm8P,
                        verticalAlignment: 'center',
                        withExternalLayout: true,
                      },),
                    },),
                  },),
                      /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-160injg',
                    'data-framer-name': 'Input chip',
                    layoutDependency,
                    layoutId: 'gjT2zzuK7',
                    style: {
                      backgroundColor: 'rgb(232, 173, 166)',
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1h7yeih',
                      'data-framer-name': 'state-layer',
                      layoutDependency,
                      layoutId: 'I303:2971;53923:27987',
                      children: /* @__PURE__ */ _jsx6(RichText3, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx6(motion5.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                              '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                              '--framer-font-size': '10px',
                              '--framer-letter-spacing': '0.1px',
                              '--framer-line-height': '20px',
                              '--framer-text-alignment': 'center',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(55, 0, 58))',
                            },
                            children: 'B-3',
                          },),
                        },),
                        className: 'framer-d8tsbz',
                        'data-framer-name': 'label-text',
                        fonts: ['CUSTOM;PP Supply Sans Light',],
                        layoutDependency,
                        layoutId: 'I303:2971;53923:27988',
                        style: { '--extracted-r6o4lv': 'rgb(55, 0, 58)', '--framer-paragraph-spacing': '0px', },
                        text: Xo22rvSfa,
                        verticalAlignment: 'center',
                        withExternalLayout: true,
                      },),
                    },),
                  },),
                      /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-3iw8sr',
                    'data-framer-name': 'Input chip',
                    layoutDependency,
                    layoutId: 'C1mKJu16t',
                    style: {
                      backgroundColor: 'rgb(245, 122, 41)',
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-vkt06o',
                      'data-framer-name': 'state-layer',
                      layoutDependency,
                      layoutId: 'I303:2972;53923:27987',
                      children: /* @__PURE__ */ _jsx6(RichText3, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx6(motion5.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                              '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                              '--framer-font-size': '10px',
                              '--framer-letter-spacing': '0.1px',
                              '--framer-line-height': '20px',
                              '--framer-text-alignment': 'center',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(55, 0, 58))',
                            },
                            children: 'B-4',
                          },),
                        },),
                        className: 'framer-fo4y0u',
                        'data-framer-name': 'label-text',
                        fonts: ['CUSTOM;PP Supply Sans Light',],
                        layoutDependency,
                        layoutId: 'I303:2972;53923:27988',
                        style: { '--extracted-r6o4lv': 'rgb(55, 0, 58)', '--framer-paragraph-spacing': '0px', },
                        text: bGyluXMcm,
                        verticalAlignment: 'center',
                        withExternalLayout: true,
                      },),
                    },),
                  },),
                  ],
                },),
                ],
              },),
              isDisplayed8() && /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-mlqagl',
                'data-framer-name': 'Multiline/Filled',
                layoutDependency,
                layoutId: 'RRJp3CM3F',
                children: /* @__PURE__ */ _jsx6(motion5.div, {
                  className: 'framer-1e67f1l',
                  'data-framer-name': 'Text Field/Filled',
                  layoutDependency,
                  layoutId: 'I68:3468;7624:93641',
                  children: /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-1nwn68q',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'I68:3468;7624:93641;7623:77382',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1as28oh-container',
                      layoutDependency,
                      layoutId: 'HOAIAfIHR-container',
                      children: /* @__PURE__ */ _jsx6(stdin_default4, {
                        AA_oylHc1: JM8R5zcqV,
                        B9Ye7wHiX: OJMet4Rjs,
                        cib0E0Vb9: C0xbi_CXP,
                        Cpm7YdhW6: Jdv7M1lr6,
                        dxSidP8LF: eZ_WIO8yz,
                        eePEcZAuW: K5BysgXsx,
                        Gu4Kp5hWx: vZATQhujj,
                        height: '100%',
                        id: 'HOAIAfIHR',
                        kRgq0jgQR: k4ezTegiq,
                        layoutId: 'HOAIAfIHR',
                        NPSt7VsjX: VOTcq87Vu,
                        nQb7W3cjE: fxy_09app,
                        style: { width: '100%', },
                        variant: convertFromEnum3(LNNJy1jnm,),
                        width: '100%',
                        yBMe3I4G7: qQ_BO9qk8,
                        ...addPropertyOverrides4({ Cr7AsQCPR: { variant: convertFromEnum12(zgF6TYXbc,), }, }, baseVariant, gestureVariant,),
                      },),
                    },),
                  },),
                },),
              },),
              isDisplayed8() && /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-zo2az3',
                'data-framer-name': 'Button-dark',
                layoutDependency,
                layoutId: 'KAf5_wkAp',
                style: {
                  backgroundColor: 'rgb(0, 105, 115)',
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
                children: /* @__PURE__ */ _jsx6(motion5.div, {
                  className: 'framer-so5fwt',
                  'data-framer-name': 'state-layer',
                  layoutDependency,
                  layoutId: 'I303:2975;53923:27817',
                  children: /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-letter-spacing': '3.2px',
                          '--framer-line-height': '20px',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                        },
                        children: 'SUBMIT',
                      },),
                    },),
                    className: 'framer-19gd5fv',
                    'data-framer-name': 'label-text',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'I303:2975;53923:27818',
                    style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                    ...addPropertyOverrides4(
                      {
                        Cr7AsQCPR: {
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                '--framer-font-size': '10px',
                                '--framer-letter-spacing': '2.9px',
                                '--framer-line-height': '20px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'SUBMIT',
                            },),
                          },),
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed10() && /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-l87yju',
                'data-framer-name': 'Frame 2608513',
                layoutDependency,
                layoutId: 'uI8Q2DWZZ',
                children: /* @__PURE__ */ _jsxs4(motion5.div, {
                  className: 'framer-r0em8m',
                  'data-framer-name': 'Search bar',
                  layoutDependency,
                  layoutId: 'Pv0E4vHIr',
                  style: {
                    backgroundColor: 'rgb(237, 238, 241)',
                    borderBottomLeftRadius: 28,
                    borderBottomRightRadius: 28,
                    borderTopLeftRadius: 28,
                    borderTopRightRadius: 28,
                  },
                  children: [
                    /* @__PURE__ */ _jsxs4(motion5.div, {
                    className: 'framer-1dvq414',
                    'data-framer-name': 'state-layer',
                    layoutDependency,
                    layoutId: 'Lccr6sgjb',
                    children: [
                        /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1p1bo23',
                      'data-framer-name': 'Trailing-Elements',
                      layoutDependency,
                      layoutId: 'T3ghZskdD',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-zqh2nn',
                        'data-framer-name': 'Avatar-target',
                        layoutDependency,
                        layoutId: 'dA0DBdc3o',
                        children: /* @__PURE__ */ _jsxs4(motion5.div, {
                          className: 'framer-pbr21r',
                          'data-framer-name': 'Avatar',
                          layoutDependency,
                          layoutId: 'cfeGun5r6',
                          children: [
                                /* @__PURE__ */ _jsx6(motion5.div, {
                            className: 'framer-cnr1k8',
                            'data-framer-name': 'Background',
                            layoutDependency,
                            layoutId: 'g1zm_vuax',
                            style: {
                              backgroundColor: 'rgb(144, 241, 255)',
                              borderBottomLeftRadius: '100%',
                              borderBottomRightRadius: '100%',
                              borderTopLeftRadius: '100%',
                              borderTopRightRadius: '100%',
                            },
                          },),
                                /* @__PURE__ */ _jsx6(RichText3, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                  '--framer-font-size': '13px',
                                  '--framer-letter-spacing': '0.15px',
                                  '--framer-line-height': '24px',
                                  '--framer-text-alignment': 'center',
                                },
                                children: 'A-2',
                              },),
                            },),
                            className: 'framer-krm87b',
                            'data-framer-name': 'Initial',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'rgXnE_qqi',
                            style: { '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                          ],
                        },),
                      },),
                    },),
                        /* @__PURE__ */ _jsxs4(motion5.div, {
                      className: 'framer-87mzjl',
                      'data-framer-name': 'Content',
                      layoutDependency,
                      layoutId: 'n_bgiVlSg',
                      children: [
                            /* @__PURE__ */ _jsxs4(motion5.div, {
                        className: 'framer-di8oog',
                        layoutDependency,
                        layoutId: 'x70rl52m1',
                        children: [
                                /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                                '--framer-font-size': '12px',
                                '--framer-letter-spacing': '0.5px',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                              },
                              children: 'Decision Node',
                            },),
                          },),
                          className: 'framer-a1wsp2',
                          'data-framer-name': 'supporting-text',
                          fonts: ['CUSTOM;PP Supply Sans Medium',],
                          layoutDependency,
                          layoutId: 'WsucBkVUz',
                          style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                                /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                                '--framer-letter-spacing': '0.5px',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                              },
                              children: 'Define Primary Goal',
                            },),
                          },),
                          className: 'framer-1awvx7p',
                          'data-framer-name': 'supporting-text',
                          fonts: ['CUSTOM;PP Supply Sans Medium',],
                          layoutDependency,
                          layoutId: 'opOu0sqRn',
                          style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                        ],
                      },),
                            /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-3tnxcx',
                        'data-framer-name': 'Leading-icon',
                        layoutDependency,
                        layoutId: 'p5HW_zmJw',
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-zfqid9',
                          'data-framer-name': 'container',
                          layoutDependency,
                          layoutId: 'WrrEwbxTu',
                          style: {
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                          children: /* @__PURE__ */ _jsx6(motion5.div, {
                            className: 'framer-1bsvo3k',
                            'data-framer-name': 'state-layer',
                            layoutDependency,
                            layoutId: 'ltq3iN3cA',
                            children: /* @__PURE__ */ _jsx6(motion5.div, {
                              className: 'framer-1vjxg04',
                              'data-framer-name': 'Icon',
                              layoutDependency,
                              layoutId: 'FL77cuW9w',
                              children: /* @__PURE__ */ _jsx6(SVG4, {
                                className: 'framer-8x5cq0',
                                'data-framer-name': 'icon',
                                fill: 'rgba(0,0,0,1)',
                                intrinsicHeight: 16,
                                intrinsicWidth: 4,
                                layoutDependency,
                                layoutId: 'nYgYJQYoH',
                                svg:
                                  '<svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z" fill="#3F484A"/>\n</svg>\n',
                                withExternalLayout: true,
                              },),
                            },),
                          },),
                        },),
                      },),
                      ],
                    },),
                    ],
                  },),
                    /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-tb2a78',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'VtJJ7CbYW',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-r4j7qq',
                      'data-framer-name': 'Frame 2608516',
                      layoutDependency,
                      layoutId: 'u0pNrfPeD',
                      style: {
                        backgroundColor: 'rgb(249, 249, 252)',
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: /* @__PURE__ */ _jsx6(RichText3, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx6(motion5.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                              '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                              '--framer-letter-spacing': '1px',
                              '--framer-line-height': '24px',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(26, 28, 30))',
                            },
                            children:
                              '\u201CTo create a tool that enhances users\' memory retention and recall capabilities through various interactive exercises and activities, utilizing personalized data to optimize and tailor experiences.\u201D',
                          },),
                        },),
                        className: 'framer-1uxqpch',
                        'data-framer-name': 'Headline',
                        fonts: ['CUSTOM;PP Supply Sans Light',],
                        layoutDependency,
                        layoutId: 'vwgmDfcb6',
                        style: { '--extracted-r6o4lv': 'rgb(26, 28, 30)', '--framer-paragraph-spacing': '0px', },
                        verticalAlignment: 'center',
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
    },),
  },);
},);
var css5 = [
  '.framer-cZDAH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-cZDAH .framer-13itnim { display: block; }',
  '.framer-cZDAH .framer-15k1mix { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-u952ip { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: 325px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-cZDAH .framer-16jcubo { flex: none; height: 256px; overflow: visible; position: relative; width: 256px; }',
  '.framer-cZDAH .framer-pgz1il { flex: none; height: 4px; left: calc(50% - 260px / 2); position: absolute; top: calc(50.000004371139184% - 4px / 2); width: 260px; }',
  '.framer-cZDAH .framer-t88y97 { aspect-ratio: 1 / 1; bottom: var(--framer-aspect-ratio-supported, 123px); flex: none; height: 9px; left: 123px; position: absolute; right: 123px; top: 123px; }',
  '.framer-cZDAH .framer-1bz5g0t { flex: none; height: 100px; left: calc(53.90625000000002% - 49px / 2); position: absolute; top: 28px; width: 49px; }',
  '.framer-cZDAH .framer-s80oao { flex: none; height: 100px; left: 82px; position: absolute; top: 28px; width: 49px; }',
  '.framer-cZDAH .framer-grahyw { bottom: 35px; flex: none; height: 100px; left: 82px; position: absolute; width: 49px; }',
  '.framer-cZDAH .framer-ters9i { bottom: 35px; flex: none; height: 100px; position: absolute; right: 79px; width: 49px; }',
  '.framer-cZDAH .framer-ygxorp { bottom: 35px; flex: none; height: 100px; position: absolute; right: 88px; width: 49px; }',
  '.framer-cZDAH .framer-gaigs9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 133px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 8px; width: 48px; }',
  '.framer-cZDAH .framer-19e96pz, .framer-cZDAH .framer-bxm0gv, .framer-cZDAH .framer-1seihbr, .framer-cZDAH .framer-1x7jv21 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-67o6ax, .framer-cZDAH .framer-13irvgu, .framer-cZDAH .framer-b95frv, .framer-cZDAH .framer-1iqm9oi { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-cZDAH .framer-1er1yu3, .framer-cZDAH .framer-1iiryhe, .framer-cZDAH .framer-1v0hux5, .framer-cZDAH .framer-1gnv6f9, .framer-cZDAH .framer-10xeruc, .framer-cZDAH .framer-krm87b { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); white-space: pre-wrap; width: 40px; word-break: break-word; word-wrap: break-word; }',
  '.framer-cZDAH .framer-zsae62 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 52%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: -92px; width: min-content; }',
  '.framer-cZDAH .framer-mkcxyc-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-cZDAH .framer-16lays1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 75px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 8px; width: 48px; }',
  '.framer-cZDAH .framer-1r78rj3 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 2px 2px 2px 2px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-1slmo9y { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-cZDAH .framer-hm8hzz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 54px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 192px; width: 48px; }',
  '.framer-cZDAH .framer-b81srs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 104px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 206px; width: 48px; }',
  '.framer-cZDAH .framer-eie4hr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 154px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 192px; width: 48px; }',
  '.framer-cZDAH .framer-pk4yjk { flex: none; height: auto; left: 9px; position: absolute; top: 107px; white-space: pre; width: auto; }',
  '.framer-cZDAH .framer-1saw3ai { flex: none; height: auto; left: 9px; position: absolute; top: 54%; white-space: pre; width: auto; }',
  '.framer-cZDAH .framer-6vo91e { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-1bz3drm { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-rxhn3z, .framer-cZDAH .framer-1hg0ea8, .framer-cZDAH .framer-d8tsbz, .framer-cZDAH .framer-fo4y0u, .framer-cZDAH .framer-19gd5fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-cZDAH .framer-z3jaf1, .framer-cZDAH .framer-mlqagl, .framer-cZDAH .framer-1nwn68q { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-1dzdi2f { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 638px; word-break: break-word; word-wrap: break-word; }',
  '.framer-cZDAH .framer-1t15ltz, .framer-cZDAH .framer-1o7rnow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-relj6k { align-content: start; align-items: start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-cZDAH .framer-g6jc3c-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
  '.framer-cZDAH .framer-s3klti { flex: none; height: 24px; position: relative; white-space: pre-wrap; width: 226px; word-break: break-word; word-wrap: break-word; }',
  '.framer-cZDAH .framer-knxsbs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-cZDAH .framer-rojnhy, .framer-cZDAH .framer-1m02nfp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-tthg7e { align-content: start; align-items: start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-cZDAH .framer-1hadtwd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-cZDAH .framer-6porn2 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-cZDAH .framer-p6sy63 { flex: none; height: 125px; left: -3px; mix-blend-mode: multiply; overflow: visible; position: absolute; top: calc(49.230769230769255% - 125px / 2); width: 314px; z-index: 1; }',
  '.framer-cZDAH .framer-1sckg0c { bottom: 26px; flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 27px; width: 71px; z-index: 1; }',
  '.framer-cZDAH .framer-4q5s49 { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 1px; top: 0px; width: 241px; z-index: 1; }',
  '.framer-cZDAH .framer-btq4z { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 59px; top: 26px; width: 162px; z-index: 1; }',
  '.framer-cZDAH .framer-hccerc { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 37px; top: calc(50.40000000000002% - 21px / 2); width: 205px; z-index: 1; }',
  '.framer-cZDAH .framer-1rdnm2h { bottom: 26px; flex: none; height: 21px; left: 1px; mix-blend-mode: multiply; position: absolute; width: 115px; z-index: 1; }',
  '.framer-cZDAH .framer-1msl2tx { bottom: 1px; flex: none; height: 21px; left: 1px; mix-blend-mode: multiply; position: absolute; width: 94px; z-index: 1; }',
  '.framer-cZDAH .framer-via5el { flex: none; height: 21px; left: 2px; position: absolute; top: 26px; width: 65px; z-index: 1; }',
  '.framer-cZDAH .framer-1oh0yiu, .framer-cZDAH .framer-rluzxm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 277px; word-break: break-word; word-wrap: break-word; }',
  '.framer-cZDAH .framer-274qgp-container, .framer-cZDAH .framer-1as28oh-container { flex: none; height: auto; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-8z588a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 325px; }',
  '.framer-cZDAH .framer-q310jp { flex: 1 0 0px; height: 3px; position: relative; width: 1px; }',
  '.framer-cZDAH .framer-s5kk1i { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-b3batm { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-1u81hx0, .framer-cZDAH .framer-160injg, .framer-cZDAH .framer-3iw8sr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 16px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-cZDAH .framer-dad9fl { flex: none; height: 100%; position: relative; white-space: pre; width: auto; }',
  '.framer-cZDAH .framer-1h7yeih, .framer-cZDAH .framer-vkt06o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-1e67f1l { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-zo2az3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-cZDAH .framer-so5fwt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 10px 24px 10px 24px; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-l87yju { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-r0em8m { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-cZDAH .framer-1dvq414 { align-content: start; align-items: start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 56px; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: auto; }',
  '.framer-cZDAH .framer-1p1bo23 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-zqh2nn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-cZDAH .framer-pbr21r { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: hidden; position: relative; width: 30px; }',
  '.framer-cZDAH .framer-cnr1k8 { aspect-ratio: 1 / 1; bottom: var(--framer-aspect-ratio-supported, 0px); flex: none; height: 30px; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-cZDAH .framer-87mzjl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-cZDAH .framer-di8oog { align-content: start; align-items: start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-cZDAH .framer-a1wsp2 { flex: none; height: 12px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }',
  '.framer-cZDAH .framer-1awvx7p { flex: none; height: 19px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }',
  '.framer-cZDAH .framer-3tnxcx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-cZDAH .framer-zfqid9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-cZDAH .framer-1bsvo3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-cZDAH .framer-1vjxg04 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-cZDAH .framer-8x5cq0 { bottom: 4px; flex: none; left: 10px; position: absolute; right: 10px; top: 4px; }',
  '.framer-cZDAH .framer-tb2a78 { align-content: start; align-items: start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 18px 18px 18px; position: relative; width: auto; }',
  '.framer-cZDAH .framer-r4j7qq { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 10px 12px 10px 12px; position: relative; width: 100%; }',
  '.framer-cZDAH .framer-1uxqpch { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 306px; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cZDAH .framer-15k1mix, .framer-cZDAH .framer-u952ip, .framer-cZDAH .framer-gaigs9, .framer-cZDAH .framer-19e96pz, .framer-cZDAH .framer-zsae62, .framer-cZDAH .framer-16lays1, .framer-cZDAH .framer-1r78rj3, .framer-cZDAH .framer-hm8hzz, .framer-cZDAH .framer-bxm0gv, .framer-cZDAH .framer-b81srs, .framer-cZDAH .framer-1seihbr, .framer-cZDAH .framer-eie4hr, .framer-cZDAH .framer-1x7jv21, .framer-cZDAH .framer-6vo91e, .framer-cZDAH .framer-1bz3drm, .framer-cZDAH .framer-z3jaf1, .framer-cZDAH .framer-1t15ltz, .framer-cZDAH .framer-knxsbs, .framer-cZDAH .framer-rojnhy, .framer-cZDAH .framer-tthg7e, .framer-cZDAH .framer-1hadtwd, .framer-cZDAH .framer-8z588a, .framer-cZDAH .framer-s5kk1i, .framer-cZDAH .framer-1o7rnow, .framer-cZDAH .framer-b3batm, .framer-cZDAH .framer-1u81hx0, .framer-cZDAH .framer-1m02nfp, .framer-cZDAH .framer-160injg, .framer-cZDAH .framer-1h7yeih, .framer-cZDAH .framer-3iw8sr, .framer-cZDAH .framer-vkt06o, .framer-cZDAH .framer-mlqagl, .framer-cZDAH .framer-1e67f1l, .framer-cZDAH .framer-1nwn68q, .framer-cZDAH .framer-zo2az3, .framer-cZDAH .framer-so5fwt, .framer-cZDAH .framer-l87yju, .framer-cZDAH .framer-r0em8m, .framer-cZDAH .framer-1dvq414, .framer-cZDAH .framer-1p1bo23, .framer-cZDAH .framer-zqh2nn, .framer-cZDAH .framer-87mzjl, .framer-cZDAH .framer-di8oog, .framer-cZDAH .framer-3tnxcx, .framer-cZDAH .framer-zfqid9, .framer-cZDAH .framer-1bsvo3k, .framer-cZDAH .framer-tb2a78, .framer-cZDAH .framer-r4j7qq { gap: 0px; } .framer-cZDAH .framer-15k1mix > *, .framer-cZDAH .framer-1bz3drm > *, .framer-cZDAH .framer-3tnxcx > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-cZDAH .framer-15k1mix > :first-child, .framer-cZDAH .framer-u952ip > :first-child, .framer-cZDAH .framer-19e96pz > :first-child, .framer-cZDAH .framer-1r78rj3 > :first-child, .framer-cZDAH .framer-bxm0gv > :first-child, .framer-cZDAH .framer-1seihbr > :first-child, .framer-cZDAH .framer-1x7jv21 > :first-child, .framer-cZDAH .framer-6vo91e > :first-child, .framer-cZDAH .framer-1bz3drm > :first-child, .framer-cZDAH .framer-z3jaf1 > :first-child, .framer-cZDAH .framer-s5kk1i > :first-child, .framer-cZDAH .framer-mlqagl > :first-child, .framer-cZDAH .framer-1e67f1l > :first-child, .framer-cZDAH .framer-1nwn68q > :first-child, .framer-cZDAH .framer-zo2az3 > :first-child, .framer-cZDAH .framer-l87yju > :first-child, .framer-cZDAH .framer-r0em8m > :first-child, .framer-cZDAH .framer-di8oog > :first-child, .framer-cZDAH .framer-3tnxcx > :first-child, .framer-cZDAH .framer-tb2a78 > :first-child, .framer-cZDAH .framer-r4j7qq > :first-child { margin-top: 0px; } .framer-cZDAH .framer-15k1mix > :last-child, .framer-cZDAH .framer-u952ip > :last-child, .framer-cZDAH .framer-19e96pz > :last-child, .framer-cZDAH .framer-1r78rj3 > :last-child, .framer-cZDAH .framer-bxm0gv > :last-child, .framer-cZDAH .framer-1seihbr > :last-child, .framer-cZDAH .framer-1x7jv21 > :last-child, .framer-cZDAH .framer-6vo91e > :last-child, .framer-cZDAH .framer-1bz3drm > :last-child, .framer-cZDAH .framer-z3jaf1 > :last-child, .framer-cZDAH .framer-s5kk1i > :last-child, .framer-cZDAH .framer-mlqagl > :last-child, .framer-cZDAH .framer-1e67f1l > :last-child, .framer-cZDAH .framer-1nwn68q > :last-child, .framer-cZDAH .framer-zo2az3 > :last-child, .framer-cZDAH .framer-l87yju > :last-child, .framer-cZDAH .framer-r0em8m > :last-child, .framer-cZDAH .framer-di8oog > :last-child, .framer-cZDAH .framer-3tnxcx > :last-child, .framer-cZDAH .framer-tb2a78 > :last-child, .framer-cZDAH .framer-r4j7qq > :last-child { margin-bottom: 0px; } .framer-cZDAH .framer-u952ip > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-cZDAH .framer-gaigs9 > *, .framer-cZDAH .framer-16lays1 > *, .framer-cZDAH .framer-hm8hzz > *, .framer-cZDAH .framer-b81srs > *, .framer-cZDAH .framer-eie4hr > *, .framer-cZDAH .framer-1t15ltz > *, .framer-cZDAH .framer-knxsbs > *, .framer-cZDAH .framer-8z588a > *, .framer-cZDAH .framer-1o7rnow > *, .framer-cZDAH .framer-1u81hx0 > *, .framer-cZDAH .framer-160injg > *, .framer-cZDAH .framer-3iw8sr > *, .framer-cZDAH .framer-1p1bo23 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-cZDAH .framer-gaigs9 > :first-child, .framer-cZDAH .framer-zsae62 > :first-child, .framer-cZDAH .framer-16lays1 > :first-child, .framer-cZDAH .framer-hm8hzz > :first-child, .framer-cZDAH .framer-b81srs > :first-child, .framer-cZDAH .framer-eie4hr > :first-child, .framer-cZDAH .framer-1t15ltz > :first-child, .framer-cZDAH .framer-knxsbs > :first-child, .framer-cZDAH .framer-rojnhy > :first-child, .framer-cZDAH .framer-tthg7e > :first-child, .framer-cZDAH .framer-1hadtwd > :first-child, .framer-cZDAH .framer-8z588a > :first-child, .framer-cZDAH .framer-1o7rnow > :first-child, .framer-cZDAH .framer-b3batm > :first-child, .framer-cZDAH .framer-1u81hx0 > :first-child, .framer-cZDAH .framer-1m02nfp > :first-child, .framer-cZDAH .framer-160injg > :first-child, .framer-cZDAH .framer-1h7yeih > :first-child, .framer-cZDAH .framer-3iw8sr > :first-child, .framer-cZDAH .framer-vkt06o > :first-child, .framer-cZDAH .framer-so5fwt > :first-child, .framer-cZDAH .framer-1dvq414 > :first-child, .framer-cZDAH .framer-1p1bo23 > :first-child, .framer-cZDAH .framer-zqh2nn > :first-child, .framer-cZDAH .framer-87mzjl > :first-child, .framer-cZDAH .framer-zfqid9 > :first-child, .framer-cZDAH .framer-1bsvo3k > :first-child { margin-left: 0px; } .framer-cZDAH .framer-gaigs9 > :last-child, .framer-cZDAH .framer-zsae62 > :last-child, .framer-cZDAH .framer-16lays1 > :last-child, .framer-cZDAH .framer-hm8hzz > :last-child, .framer-cZDAH .framer-b81srs > :last-child, .framer-cZDAH .framer-eie4hr > :last-child, .framer-cZDAH .framer-1t15ltz > :last-child, .framer-cZDAH .framer-knxsbs > :last-child, .framer-cZDAH .framer-rojnhy > :last-child, .framer-cZDAH .framer-tthg7e > :last-child, .framer-cZDAH .framer-1hadtwd > :last-child, .framer-cZDAH .framer-8z588a > :last-child, .framer-cZDAH .framer-1o7rnow > :last-child, .framer-cZDAH .framer-b3batm > :last-child, .framer-cZDAH .framer-1u81hx0 > :last-child, .framer-cZDAH .framer-1m02nfp > :last-child, .framer-cZDAH .framer-160injg > :last-child, .framer-cZDAH .framer-1h7yeih > :last-child, .framer-cZDAH .framer-3iw8sr > :last-child, .framer-cZDAH .framer-vkt06o > :last-child, .framer-cZDAH .framer-so5fwt > :last-child, .framer-cZDAH .framer-1dvq414 > :last-child, .framer-cZDAH .framer-1p1bo23 > :last-child, .framer-cZDAH .framer-zqh2nn > :last-child, .framer-cZDAH .framer-87mzjl > :last-child, .framer-cZDAH .framer-zfqid9 > :last-child, .framer-cZDAH .framer-1bsvo3k > :last-child { margin-right: 0px; } .framer-cZDAH .framer-19e96pz > *, .framer-cZDAH .framer-1r78rj3 > *, .framer-cZDAH .framer-bxm0gv > *, .framer-cZDAH .framer-1seihbr > *, .framer-cZDAH .framer-1x7jv21 > *, .framer-cZDAH .framer-z3jaf1 > *, .framer-cZDAH .framer-mlqagl > *, .framer-cZDAH .framer-1nwn68q > *, .framer-cZDAH .framer-zo2az3 > *, .framer-cZDAH .framer-l87yju > *, .framer-cZDAH .framer-di8oog > *, .framer-cZDAH .framer-tb2a78 > *, .framer-cZDAH .framer-r4j7qq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-cZDAH .framer-zsae62 > *, .framer-cZDAH .framer-tthg7e > *, .framer-cZDAH .framer-1hadtwd > *, .framer-cZDAH .framer-zqh2nn > *, .framer-cZDAH .framer-87mzjl > *, .framer-cZDAH .framer-zfqid9 > *, .framer-cZDAH .framer-1bsvo3k > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-cZDAH .framer-6vo91e > *, .framer-cZDAH .framer-s5kk1i > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-cZDAH .framer-rojnhy > *, .framer-cZDAH .framer-b3batm > *, .framer-cZDAH .framer-1m02nfp > *, .framer-cZDAH .framer-1h7yeih > *, .framer-cZDAH .framer-vkt06o > *, .framer-cZDAH .framer-so5fwt > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-cZDAH .framer-1e67f1l > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-cZDAH .framer-r0em8m > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-cZDAH .framer-1dvq414 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }',
  '.framer-cZDAH.framer-v-1fc3t3a .framer-15k1mix { cursor: pointer; }',
  '.framer-cZDAH.framer-v-tlkqch .framer-u952ip, .framer-cZDAH.framer-v-1twsf6e .framer-u952ip { height: 60px; padding: 17px 17px 17px 17px; width: 60px; }',
  '.framer-cZDAH.framer-v-tlkqch .framer-6vo91e, .framer-cZDAH.framer-v-tlkqch .framer-1t15ltz, .framer-cZDAH.framer-v-1a8pern .framer-6vo91e, .framer-cZDAH.framer-v-1a8pern .framer-1t15ltz, .framer-cZDAH.framer-v-uax94b .framer-6vo91e, .framer-cZDAH.framer-v-uax94b .framer-1t15ltz, .framer-cZDAH.framer-v-1khlikx .framer-6vo91e, .framer-cZDAH.framer-v-1khlikx .framer-1t15ltz, .framer-cZDAH.framer-v-18q1m16 .framer-6vo91e, .framer-cZDAH.framer-v-18q1m16 .framer-1t15ltz, .framer-cZDAH.framer-v-w4miu7 .framer-6vo91e, .framer-cZDAH.framer-v-w4miu7 .framer-1t15ltz, .framer-cZDAH.framer-v-1twsf6e .framer-1t15ltz { flex: 1 0 0px; height: 1px; }',
  '.framer-cZDAH.framer-v-tlkqch .framer-relj6k, .framer-cZDAH.framer-v-1a8pern .framer-relj6k, .framer-cZDAH.framer-v-uax94b .framer-relj6k, .framer-cZDAH.framer-v-1khlikx .framer-relj6k, .framer-cZDAH.framer-v-18q1m16 .framer-relj6k, .framer-cZDAH.framer-v-w4miu7 .framer-relj6k, .framer-cZDAH.framer-v-1twsf6e .framer-relj6k { height: 100%; }',
  '.framer-cZDAH.framer-v-tlkqch .framer-knxsbs, .framer-cZDAH.framer-v-1a8pern .framer-knxsbs, .framer-cZDAH.framer-v-uax94b .framer-knxsbs, .framer-cZDAH.framer-v-1khlikx .framer-knxsbs, .framer-cZDAH.framer-v-18q1m16 .framer-knxsbs, .framer-cZDAH.framer-v-w4miu7 .framer-knxsbs, .framer-cZDAH.framer-v-1twsf6e .framer-knxsbs { flex: 1 0 0px; height: 100%; overflow: visible; width: 1px; }',
  '.framer-cZDAH.framer-v-tlkqch .framer-rojnhy, .framer-cZDAH.framer-v-1a8pern .framer-rojnhy, .framer-cZDAH.framer-v-uax94b .framer-rojnhy, .framer-cZDAH.framer-v-1khlikx .framer-rojnhy, .framer-cZDAH.framer-v-18q1m16 .framer-rojnhy, .framer-cZDAH.framer-v-w4miu7 .framer-rojnhy, .framer-cZDAH.framer-v-1twsf6e .framer-rojnhy, .framer-cZDAH.framer-v-vry1od .framer-rojnhy { flex: 1 0 0px; width: 1px; }',
  '.framer-cZDAH.framer-v-1a8pern .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 50px); padding: 14px 14px 14px 14px; width: 50px; }',
  '.framer-cZDAH.framer-v-uax94b .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); padding: 11px 11px 11px 11px; width: 40px; }',
  '.framer-cZDAH.framer-v-1khlikx .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 30px); padding: 8px 8px 8px 8px; width: 30px; }',
  '.framer-cZDAH.framer-v-18q1m16 .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 20px); padding: 5px 5px 5px 5px; width: 20px; }',
  '.framer-cZDAH.framer-v-w4miu7 .framer-15k1mix { width: 86px; }',
  '.framer-cZDAH.framer-v-w4miu7 .framer-u952ip { height: 20px; padding: 5px 5px 5px 5px; width: 100%; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-15k1mix, .framer-cZDAH.framer-v-uiz0vr .framer-15k1mix, .framer-cZDAH.framer-v-14j2671 .framer-15k1mix { gap: 0px; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-u952ip, .framer-cZDAH.framer-v-uiz0vr .framer-u952ip { align-content: start; align-items: start; flex-direction: row; overflow: visible; padding: 32px 16px 16px 16px; width: min-content; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-16jcubo, .framer-cZDAH.framer-v-1kuanhy .framer-1hadtwd, .framer-cZDAH.framer-v-uiz0vr .framer-16jcubo, .framer-cZDAH.framer-v-uiz0vr .framer-1hadtwd, .framer-cZDAH.framer-v-14j2671 .framer-16jcubo { order: 1; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-6vo91e, .framer-cZDAH.framer-v-uiz0vr .framer-6vo91e { order: 0; padding: 0px 23px 0px 23px; width: 385px; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-1bz3drm, .framer-cZDAH.framer-v-1kuanhy .framer-s3klti, .framer-cZDAH.framer-v-uiz0vr .framer-1bz3drm, .framer-cZDAH.framer-v-uiz0vr .framer-s3klti, .framer-cZDAH.framer-v-uiz0vr .framer-l87yju { order: 2; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-z3jaf1, .framer-cZDAH.framer-v-uiz0vr .framer-z3jaf1 { order: 3; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-1dzdi2f, .framer-cZDAH.framer-v-uiz0vr .framer-1dzdi2f, .framer-cZDAH.framer-v-1s83m4o .framer-1oh0yiu, .framer-cZDAH.framer-v-1s83m4o .framer-8z588a { width: 100%; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-1t15ltz, .framer-cZDAH.framer-v-uiz0vr .framer-1t15ltz { order: 4; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-relj6k, .framer-cZDAH.framer-v-uiz0vr .framer-relj6k { flex-direction: column; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-knxsbs, .framer-cZDAH.framer-v-uiz0vr .framer-knxsbs { height: min-content; order: 0; width: 100%; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-rojnhy, .framer-cZDAH.framer-v-uiz0vr .framer-rojnhy { flex: 1 0 0px; height: min-content; padding: 16px 16px 16px 16px; width: 1px; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-p6sy63, .framer-cZDAH.framer-v-uiz0vr .framer-p6sy63 { bottom: -9px; height: unset; order: 0; top: -11px; width: 372px; }',
  '.framer-cZDAH.framer-v-1kuanhy .framer-1oh0yiu, .framer-cZDAH.framer-v-uiz0vr .framer-1oh0yiu { order: 5; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cZDAH.framer-v-1kuanhy .framer-15k1mix, .framer-cZDAH.framer-v-1kuanhy .framer-u952ip, .framer-cZDAH.framer-v-1kuanhy .framer-relj6k { gap: 0px; } .framer-cZDAH.framer-v-1kuanhy .framer-15k1mix > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-cZDAH.framer-v-1kuanhy .framer-15k1mix > :first-child { margin-top: 0px; } .framer-cZDAH.framer-v-1kuanhy .framer-15k1mix > :last-child { margin-bottom: 0px; } .framer-cZDAH.framer-v-1kuanhy .framer-u952ip > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-cZDAH.framer-v-1kuanhy .framer-u952ip > :first-child { margin-left: 0px; } .framer-cZDAH.framer-v-1kuanhy .framer-u952ip > :last-child { margin-right: 0px; } .framer-cZDAH.framer-v-1kuanhy .framer-relj6k > *, .framer-cZDAH.framer-v-1kuanhy .framer-relj6k > :first-child, .framer-cZDAH.framer-v-1kuanhy .framer-relj6k > :last-child { margin: 0px; } }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cZDAH.framer-v-uiz0vr .framer-15k1mix, .framer-cZDAH.framer-v-uiz0vr .framer-u952ip, .framer-cZDAH.framer-v-uiz0vr .framer-relj6k { gap: 0px; } .framer-cZDAH.framer-v-uiz0vr .framer-15k1mix > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-cZDAH.framer-v-uiz0vr .framer-15k1mix > :first-child { margin-top: 0px; } .framer-cZDAH.framer-v-uiz0vr .framer-15k1mix > :last-child { margin-bottom: 0px; } .framer-cZDAH.framer-v-uiz0vr .framer-u952ip > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-cZDAH.framer-v-uiz0vr .framer-u952ip > :first-child { margin-left: 0px; } .framer-cZDAH.framer-v-uiz0vr .framer-u952ip > :last-child { margin-right: 0px; } .framer-cZDAH.framer-v-uiz0vr .framer-relj6k > *, .framer-cZDAH.framer-v-uiz0vr .framer-relj6k > :first-child, .framer-cZDAH.framer-v-uiz0vr .framer-relj6k > :last-child { margin: 0px; } }',
  '.framer-cZDAH.framer-v-14j2671 .framer-u952ip { align-content: start; align-items: start; flex-direction: row; overflow: visible; padding: 16px 16px 16px 16px; width: min-content; }',
  '.framer-cZDAH.framer-v-14j2671 .framer-zsae62 { left: 127px; top: 4px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cZDAH.framer-v-14j2671 .framer-15k1mix, .framer-cZDAH.framer-v-14j2671 .framer-u952ip { gap: 0px; } .framer-cZDAH.framer-v-14j2671 .framer-15k1mix > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-cZDAH.framer-v-14j2671 .framer-15k1mix > :first-child { margin-top: 0px; } .framer-cZDAH.framer-v-14j2671 .framer-15k1mix > :last-child { margin-bottom: 0px; } .framer-cZDAH.framer-v-14j2671 .framer-u952ip > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-cZDAH.framer-v-14j2671 .framer-u952ip > :first-child { margin-left: 0px; } .framer-cZDAH.framer-v-14j2671 .framer-u952ip > :last-child { margin-right: 0px; } }',
  '.framer-cZDAH.framer-v-1s83m4o .framer-u952ip { gap: 5px; padding: 15px 15px 15px 15px; width: 211px; }',
  '.framer-cZDAH.framer-v-1s83m4o .framer-6vo91e { gap: 4px; }',
  '.framer-cZDAH.framer-v-1s83m4o .framer-s3klti { align-self: stretch; flex: 1 0 0px; height: auto; width: 1px; }',
  '.framer-cZDAH.framer-v-1s83m4o .framer-knxsbs { height: 15px; }',
  '.framer-cZDAH.framer-v-1s83m4o .framer-so5fwt { padding: 3px 24px 3px 24px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cZDAH.framer-v-1s83m4o .framer-u952ip, .framer-cZDAH.framer-v-1s83m4o .framer-6vo91e { gap: 0px; } .framer-cZDAH.framer-v-1s83m4o .framer-u952ip > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-cZDAH.framer-v-1s83m4o .framer-u952ip > :first-child, .framer-cZDAH.framer-v-1s83m4o .framer-6vo91e > :first-child { margin-top: 0px; } .framer-cZDAH.framer-v-1s83m4o .framer-u952ip > :last-child, .framer-cZDAH.framer-v-1s83m4o .framer-6vo91e > :last-child { margin-bottom: 0px; } .framer-cZDAH.framer-v-1s83m4o .framer-6vo91e > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }',
  '.framer-cZDAH.framer-v-1twsf6e .framer-6vo91e { flex: 1 0 0px; height: 1px; overflow: visible; }',
  '.framer-cZDAH.framer-v-vry1od .framer-15k1mix { height: 71px; width: 20px; }',
  '.framer-cZDAH.framer-v-vry1od .framer-u952ip { flex: 1 0 0px; height: 1px; order: 0; padding: 23px 3px 23px 3px; width: min-content; }',
  '.framer-cZDAH.framer-v-vry1od .framer-6vo91e, .framer-cZDAH.framer-v-vry1od .framer-1t15ltz { width: min-content; }',
  '.framer-cZDAH.framer-v-vry1od .framer-relj6k { flex: none; gap: 0px; height: 19px; justify-content: center; width: min-content; }',
  '.framer-cZDAH.framer-v-vry1od .framer-knxsbs { height: 100%; overflow: visible; width: 12px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cZDAH.framer-v-vry1od .framer-relj6k { gap: 0px; } .framer-cZDAH.framer-v-vry1od .framer-relj6k > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-cZDAH.framer-v-vry1od .framer-relj6k > :first-child { margin-left: 0px; } .framer-cZDAH.framer-v-vry1od .framer-relj6k > :last-child { margin-right: 0px; } }',
];
var FramerC_odUWZqr = withCSS6(Component4, css5, 'framer-cZDAH',);
var stdin_default6 = FramerC_odUWZqr;
FramerC_odUWZqr.displayName = 'node';
FramerC_odUWZqr.defaultProps = { height: 295, width: 325, };
addPropertyControls6(FramerC_odUWZqr, {
  variant: {
    options: [
      'glP89HQPH',
      'PvhAKPvc8',
      'uyxhsUNZq',
      'uTj0cEPb8',
      'vVjMhdARB',
      'K8oqZ2hdT',
      'QKKRwxza_',
      'l6T5PxAnq',
      'FXIjKjDPL',
      'tVxl2ewSx',
      'z1ffbxAcs',
      'pmi554o5Z',
      'Cr7AsQCPR',
      'iqrSONtoO',
      'jFWx1BeuK',
    ],
    optionTitles: [
      'Expanded',
      'Hover',
      'Node-XL',
      'Node-LG',
      'Node-MD',
      'Node-SM',
      'Node-XS',
      'Variant 8',
      'Line',
      'Variant 10',
      'Variant 13',
      'Clockface',
      'Compact',
      'Variant 14',
      'ticker',
    ],
    title: 'Variant',
    type: ControlType9.Enum,
  },
  vZATQhujj: {
    defaultValue: 'Board Dimensions',
    displayTextArea: false,
    placeholder: '',
    title: 'Decision Title',
    type: ControlType9.String,
  },
  NvMMjvlBy: {
    defaultValue: 'Please provide the dimensions of the drawing board (width, height, and depth).',
    displayTextArea: true,
    placeholder: '',
    title: 'Decision Description',
    type: ControlType9.String,
  },
  iDjlfHFIv: { defaultValue: 'C-2', displayTextArea: false, title: 'Decision Index', type: ControlType9.String, },
  LNNJy1jnm: {
    defaultValue: 'FNw58JHcH',
    options: ['FNw58JHcH', 'pXF5zK4BB', 'hjUA_q4Xo', 'R8yTQtly5',],
    optionTitles: ['Input', 'Slider', 'Choice', 'Boolean',],
    title: 'Decision Type Normal',
    type: ControlType9.Enum,
  },
  zgF6TYXbc: {
    defaultValue: 'LNmrAjenO',
    options: ['LNmrAjenO', 'nWf8FHUKr', 'M5KMhG7fk', 'IHKJNDltd',],
    optionTitles: ['Multiple Choice', 'Slider', 'Input', 'Boolean',],
    title: 'Decision Type Small',
    type: ControlType9.Enum,
  },
  K5BysgXsx: (NodeTypeControls2 === null || NodeTypeControls2 === void 0 ? void 0 : NodeTypeControls2['eePEcZAuW']) &&
    { ...NodeTypeControls2['eePEcZAuW'], defaultValue: 'zAJDHJhkW', hidden: void 0, title: 'Choice', },
  OJMet4Rjs: { defaultValue: 'Choice 1', placeholder: 'Choice 1', title: 'Choice 1', type: ControlType9.String, },
  qQ_BO9qk8: { defaultValue: 'Choice 2', placeholder: 'Choice 2', title: 'Choice 2', type: ControlType9.String, },
  eZ_WIO8yz: { defaultValue: 'Choice 3', placeholder: 'Choice 3', title: 'Choice 3', type: ControlType9.String, },
  Jdv7M1lr6: { defaultValue: 'A', placeholder: 'A', title: 'Scale X1', type: ControlType9.String, },
  C0xbi_CXP: { defaultValue: 'B', displayTextArea: false, placeholder: 'B', title: 'Scale X2', type: ControlType9.String, },
  k4ezTegiq: { defaultValue: 50, displayStepper: false, max: 100, min: 0, step: 10, title: 'Slider Value', type: ControlType9.Number, },
  VOTcq87Vu: { defaultValue: true, title: 'Streaming', type: ControlType9.Boolean, },
  fxy_09app: {
    defaultValue: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    displayTextArea: true,
    title: 'Input',
    type: ControlType9.String,
  },
  JM8R5zcqV: { defaultValue: false, title: 'Boolean Toggle', type: ControlType9.Boolean, },
  cRMlaJb1_: {
    defaultValue: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
    title: 'Color',
    type: ControlType9.Color,
  },
  Z93yscm8P: { defaultValue: 'A-1', displayTextArea: false, placeholder: 'A-1', title: ' Dependency Index 1', type: ControlType9.String, },
  Xo22rvSfa: { defaultValue: 'B-2', placeholder: 'B-2', title: 'Dependency Index 2', type: ControlType9.String, },
  bGyluXMcm: { defaultValue: 'C-2', displayTextArea: false, title: 'Dependency Index 3', type: ControlType9.String, },
  TTpsRmZqr: { defaultValue: true, title: 'Dependency Visible', type: ControlType9.Boolean, },
  Gb15ibvMU: (NodeDetailControls === null || NodeDetailControls === void 0 ? void 0 : NodeDetailControls['variant']) &&
    { ...NodeDetailControls['variant'], defaultValue: 'wZ2vnzihB', hidden: void 0, title: 'Hover', },
},);
addFonts4(FramerC_odUWZqr, [
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  { family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },
  { family: 'PP Supply Sans Semibold', url: 'https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf', },
  ...NodeDetailFonts,
  ...TypewriterFonts2,
  ...NodeTypeFonts2,
],);

// https:https://framerusercontent.com/modules/dL0m3LArmiMN513smqCL/2e29dnicOth2D2W6k2dF/pSxPslti_.js
import { jsx as _jsx7, jsxs as _jsxs5, } from 'react/jsx-runtime';
import {
  addFonts as addFonts5,
  addPropertyControls as addPropertyControls7,
  ControlType as ControlType10,
  cx as cx5,
  getFonts as getFonts4,
  RichText as RichText4,
  SVG as SVG5,
  useLocaleInfo as useLocaleInfo5,
  useVariantState as useVariantState5,
  withCSS as withCSS7,
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup5, motion as motion6, MotionConfigContext as MotionConfigContext5, } from 'framer-motion';
import * as React7 from 'react';
var TypewriterFonts3 = getFonts4(TypeWriter,);
var cycleOrder5 = ['R_0SntBXV', 'RspHZjbvA', 'KzyHUFutd', 'lR29aQ4aC', 'CDTOPoYwJ', 'AKBlJHd8s', 'NfdKYRGKU',];
var variantClassNames5 = {
  AKBlJHd8s: 'framer-v-14ttska',
  CDTOPoYwJ: 'framer-v-wmnvsy',
  KzyHUFutd: 'framer-v-1u2jgkx',
  lR29aQ4aC: 'framer-v-15ekw7u',
  NfdKYRGKU: 'framer-v-n0zl46',
  R_0SntBXV: 'framer-v-1xd6uv3',
  RspHZjbvA: 'framer-v-15mvvd2',
};
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions5 = {
  CDTOPoYwJ: { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  RspHZjbvA: { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
var transformTemplate2 = (_, t3,) => `translate(-50%, -50%) ${t3}`;
var transition1 = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition2 = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.29, 0.99,], type: 'tween', };
var Transition5 = ({ value, children, },) => {
  const config = React7.useContext(MotionConfigContext5,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx7(MotionConfigContext5.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap5 = {
  'Variant 7': 'NfdKYRGKU',
  expanded: 'KzyHUFutd',
  generate: 'AKBlJHd8s',
  logo: 'CDTOPoYwJ',
  search: 'R_0SntBXV',
  seed: 'RspHZjbvA',
  type: 'lR29aQ4aC',
};
var getProps5 = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
        (_humanReadableVariantMap_props_variant = humanReadableVariantMap5[props.variant]) !== null &&
          _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'R_0SntBXV',
  };
};
var createLayoutDependency5 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component5 = /* @__PURE__ */ React7.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo5();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps5(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: 'R_0SntBXV',
    transitions: transitions5,
    variant,
    variantClassNames: variantClassNames5,
  },);
  const layoutDependency = createLayoutDependency5(props, variants,);
  const ref1 = React7.useRef(null,);
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
  const defaultLayoutId = React7.useId();
  const sharedStyleClassNames = [];
  return /* @__PURE__ */ _jsx7(LayoutGroup5, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx7(motion6.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx5('framer-h6z8J', ...sharedStyleClassNames, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx7(Transition5, {
        value: transition,
        children: /* @__PURE__ */ _jsx7(motion6.div, {
          ...restProps,
          className: cx5('framer-1xd6uv3', className2,),
          'data-framer-name': 'search',
          layoutDependency,
          layoutId: 'R_0SntBXV',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides5(
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
          children: /* @__PURE__ */ _jsx7(Transition5, {
            ...addPropertyOverrides5({ CDTOPoYwJ: { value: transition1, }, }, baseVariant, gestureVariant,),
            children: /* @__PURE__ */ _jsx7(motion6.div, {
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
              transformTemplate: transformTemplate2,
              variants: {
                CDTOPoYwJ: {
                  borderBottomLeftRadius: 106,
                  borderBottomRightRadius: 106,
                  borderTopLeftRadius: 106,
                  borderTopRightRadius: 106,
                },
                RspHZjbvA: { borderBottomLeftRadius: 66, borderBottomRightRadius: 66, borderTopLeftRadius: 66, borderTopRightRadius: 66, },
              },
              ...addPropertyOverrides5(
                {
                  AKBlJHd8s: { transformTemplate: void 0, },
                  lR29aQ4aC: { transformTemplate: void 0, },
                  NfdKYRGKU: { transformTemplate: void 0, },
                },
                baseVariant,
                gestureVariant,
              ),
              children: /* @__PURE__ */ _jsxs5(motion6.div, {
                className: 'framer-102rpj4',
                'data-framer-name': 'state-layer',
                layoutDependency,
                layoutId: 'ldDmdZXhT',
                children: [
                  /* @__PURE__ */ _jsxs5(motion6.div, {
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
                    isDisplayed() && /* @__PURE__ */ _jsx7(motion6.div, {
                      className: 'framer-onwzwe',
                      'data-framer-name': 'Leading-icon-button',
                      layoutDependency,
                      layoutId: 'LP0LOwP3R',
                      children: /* @__PURE__ */ _jsx7(motion6.div, {
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
                        children: /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-1klpfuo',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'EmVl06lFH',
                          children: /* @__PURE__ */ _jsxs5(motion6.div, {
                            className: 'framer-4hz2zg',
                            'data-framer-name': 'Icon',
                            layoutDependency,
                            layoutId: 'QzLvSZx_y',
                            children: [
                              isDisplayed1() && /* @__PURE__ */ _jsx7(SVG5, {
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
                              isDisplayed2() && /* @__PURE__ */ _jsx7(SVG5, {
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
                    isDisplayed() && /* @__PURE__ */ _jsxs5(motion6.div, {
                      className: 'framer-a5vvyf',
                      'data-framer-name': 'Content',
                      layoutDependency,
                      layoutId: 'dHgJhO3P9',
                      children: [
                        isDisplayed3() && /* @__PURE__ */ _jsx7(RichText4, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx7(motion6.p, {
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
                          style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides5(
                            {
                              NfdKYRGKU: {
                                children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                                  children: /* @__PURE__ */ _jsx7(motion6.p, {
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
                        isDisplayed4() && /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-b3bbqg',
                          'data-framer-name': 'Typed Content',
                          layoutDependency,
                          layoutId: 'ooGcjaCIs',
                          children: /* @__PURE__ */ _jsx7(motion6.div, {
                            className: 'framer-q46j6z-container',
                            layoutDependency,
                            layoutId: 'wQ8u93V0Q-container',
                            children: /* @__PURE__ */ _jsx7(TypeWriter, {
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
                              ...addPropertyOverrides5(
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
                                  lR29aQ4aC: { delayNumber: 0.04, delayType: false, },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          },),
                        },),
                      ],
                    },),
                      /* @__PURE__ */ _jsxs5(motion6.div, {
                      className: 'framer-o3gcmt',
                      'data-framer-name': 'Trailing-Elements',
                      layoutDependency,
                      layoutId: 'kDcsPSPnH',
                      children: [
                        isDisplayed5() && /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-8y7dsi',
                          'data-framer-name': '1st trailing-icon',
                          layoutDependency,
                          layoutId: 'nKrJlDrIs',
                          children: /* @__PURE__ */ _jsx7(motion6.div, {
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
                            children: /* @__PURE__ */ _jsx7(motion6.div, {
                              className: 'framer-1o52rms',
                              'data-framer-name': 'state-layer',
                              layoutDependency,
                              layoutId: 'kDzc7Cncp',
                              children: /* @__PURE__ */ _jsxs5(motion6.div, {
                                className: 'framer-1xo5sxg',
                                'data-framer-name': 'Icon',
                                layoutDependency,
                                layoutId: 'mPD9hz3KO',
                                children: [
                                  isDisplayed6() && /* @__PURE__ */ _jsx7(SVG5, {
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
                                  isDisplayed7() && /* @__PURE__ */ _jsx7(SVG5, {
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
                          /* @__PURE__ */ _jsx7(motion6.div, {
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
                          children: /* @__PURE__ */ _jsx7(Transition5, {
                            value: transition1,
                            ...addPropertyOverrides5({ CDTOPoYwJ: { value: transition2, }, }, baseVariant, gestureVariant,),
                            children: /* @__PURE__ */ _jsx7(SVG5, {
                              className: 'framer-wmmfv',
                              'data-framer-name': 'Frame 15',
                              layout: 'position',
                              layoutDependency,
                              layoutId: 'eRNDyXM4I',
                              opacity: 1,
                              svg:
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 22"><path d="M 11.649 9.11 C 12.525 8.178 13.093 7.038 13.661 5.899 C 14.991 3.229 16.322 0.559 21.605 0.559 L 23.342 0.559 C 24.883 0.559 26.024 1.808 26.023 3.349 C 26.023 4.889 24.774 6.137 23.233 6.137 L 21.604 6.137 C 16.321 6.137 14.99 8.373 13.66 10.608 C 13.539 10.81 13.419 11.012 13.295 11.213 C 13.419 11.416 13.539 11.62 13.66 11.824 C 14.99 14.082 16.321 16.34 21.604 16.34 L 23.472 16.34 C 24.881 16.34 26.023 17.481 26.023 18.89 C 26.024 20.299 24.881 21.441 23.472 21.441 L 21.605 21.441 C 16.322 21.441 14.991 18.89 13.661 16.34 C 13.095 15.256 12.53 14.172 11.662 13.284 C 10.486 14.339 8.755 15.079 5.715 15.079 L 4.863 15.079 C 2.716 15.079 0.976 13.339 0.976 11.194 C 0.976 9.048 2.716 7.309 4.863 7.309 L 5.715 7.309 C 8.744 7.309 10.474 8.051 11.649 9.11 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                              svgContentId: 3105722239,
                              withExternalLayout: true,
                              ...addPropertyOverrides5(
                                {
                                  CDTOPoYwJ: {
                                    svg:
                                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135 117"><g><defs><path d="M 59.993 50.348 C 63.78 46.328 66.238 41.414 68.695 36.5 C 74.453 24.986 80.21 13.472 103.068 13.472 L 110.581 13.472 C 117.249 13.472 122.184 18.859 122.183 25.503 C 122.181 32.145 116.777 37.529 110.11 37.529 L 103.064 37.529 C 80.206 37.529 74.448 47.169 68.691 56.809 C 68.17 57.681 67.649 58.553 67.115 59.418 C 67.649 60.292 68.17 61.173 68.691 62.054 C 74.448 71.79 80.206 81.527 103.064 81.527 L 111.143 81.527 C 117.239 81.527 122.181 86.45 122.183 92.524 C 122.184 98.6 117.241 103.526 111.143 103.526 L 103.068 103.526 C 80.21 103.526 74.453 92.527 68.695 81.527 C 66.249 76.854 63.803 72.181 60.046 68.352 C 54.959 72.898 47.469 76.089 34.318 76.089 L 30.631 76.089 C 21.344 76.089 13.815 68.588 13.815 59.335 C 13.815 50.081 21.344 42.58 30.631 42.58 L 34.318 42.58 C 47.423 42.58 54.907 45.781 59.993 50.348 Z" id="a1004z"></path><filter id="a1006z" x="-25.2%" y="-30.3%" width="150.2%" height="160.5%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="0" in="SourceAlpha" result="a1008z"></feOffset><feGaussianBlur stdDeviation="6.5" in="a1008z" result="a1009z"></feGaussianBlur><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.09 0" type="matrix" in="a1009z" result="a1010z"></feColorMatrix></filter><filter id="a1011z" x="-0.9%" y="-2.2%" width="101.8%" height="104.3%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="0" in="SourceAlpha" result="a1013z"></feGaussianBlur><feOffset dx="-1" dy="-2" in="a1013z" result="a1014z"></feOffset><feComposite in="a1014z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1015z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0" type="matrix" in="a1015z" result="a1016z"></feColorMatrix></filter></defs><g filter="url(#a1006z)"><use fill="black" fill-opacity="1" stroke="black" stroke-opacity="0" stroke-width="0" xlink:href="#a1004z" clip-path="url(#a1005z)"></use></g><use xlink:href="#a1004z" fill="hsl(0, 0%, 100%)" clip-path="url(#a1005z)"></use><use fill="black" fill-opacity="1" filter="url(#a1011z)" xlink:href="#a1004z"></use></g></svg>',
                                    svgContentId: 1544449624,
                                  },
                                  RspHZjbvA: {
                                    svg:
                                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 42"><path d="M 21.45 17.377 C 23.129 15.59 24.219 13.406 25.308 11.222 C 27.861 6.105 30.414 0.988 40.549 0.988 L 43.88 0.988 C 46.837 0.988 49.025 3.382 49.024 6.335 C 49.024 9.287 46.627 11.679 43.671 11.679 L 40.547 11.679 C 30.412 11.679 27.859 15.964 25.306 20.248 C 25.075 20.636 24.844 21.024 24.608 21.408 C 24.844 21.796 25.075 22.188 25.306 22.579 C 27.859 26.907 30.412 31.234 40.547 31.234 L 44.129 31.234 C 46.832 31.234 49.024 33.422 49.024 36.122 C 49.025 38.822 46.833 41.012 44.129 41.012 L 40.549 41.012 C 30.414 41.012 27.861 36.123 25.308 31.234 C 24.224 29.157 23.139 27.08 21.473 25.378 C 19.218 27.399 15.897 28.817 10.065 28.817 L 8.431 28.817 C 4.313 28.817 0.975 25.483 0.975 21.371 C 0.975 17.258 4.313 13.925 8.431 13.925 L 10.065 13.925 C 15.876 13.925 19.195 15.347 21.45 17.377 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                                    svgContentId: 3729822177,
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
                    isDisplayed7() && /* @__PURE__ */ _jsx7(motion6.div, {
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
                      children: /* @__PURE__ */ _jsx7(motion6.div, {
                        className: 'framer-1ko8d44',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'p96NAqcgT',
                        children: /* @__PURE__ */ _jsx7(RichText4, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx7(motion6.p, {
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
                  isDisplayed1() && /* @__PURE__ */ _jsxs5(motion6.div, {
                    className: 'framer-4fuql9',
                    'data-framer-name': 'Frame 1069',
                    layoutDependency,
                    layoutId: 'qBBzUFy05',
                    children: [
                      /* @__PURE__ */ _jsx7(motion6.div, {
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
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-jg6s93',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'a8kznWgNw',
                        children: [
                            /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-1trg1ag',
                          'data-framer-name': 'icon',
                          layoutDependency,
                          layoutId: 'woNxE8IKQ',
                          children: /* @__PURE__ */ _jsx7(SVG5, {
                            className: 'framer-14ki56d',
                            'data-framer-name': 'upload_file_FILL0_wght300_GRAD0_opsz24',
                            fill: 'black',
                            intrinsicHeight: 24,
                            intrinsicWidth: 24,
                            layoutDependency,
                            layoutId: 'lPgp95iDs',
                            svg:
                              '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M450.001-224.617h59.998v-177.386L584-328.002l42.153-42.768L480-516.923 333.847-370.77l42.768 42.153 73.386-73.386v177.386ZM252.309-100.001q-30.308 0-51.308-21t-21-51.308v-615.382q0-30.308 21-51.308t51.308-21h317.692l209.998 209.998v477.692q0 30.308-21 51.308t-51.308 21H252.309Zm287.692-520V-800H252.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v615.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h455.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-447.692H540.001ZM240-800v179.999V-800v640-640Z"/></svg>',
                            withExternalLayout: true,
                          },),
                        },),
                            /* @__PURE__ */ _jsx7(RichText4, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx7(motion6.p, {
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
                          style: { '--extracted-r6o4lv': 'rgb(0, 105, 115)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                        ],
                      },),
                    },),
                      /* @__PURE__ */ _jsx7(motion6.div, {
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
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-r697fa',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'AApLais__',
                        children: [
                            /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-1l3eqf8',
                          'data-framer-name': 'icon',
                          layoutDependency,
                          layoutId: 'l36JTzfdi',
                          children: /* @__PURE__ */ _jsx7(SVG5, {
                            className: 'framer-21svtl',
                            'data-framer-name': 'add_notes_FILL0_wght300_GRAD0_opsz24',
                            fill: 'black',
                            intrinsicHeight: 24,
                            intrinsicWidth: 24,
                            layoutDependency,
                            layoutId: 'LifUSCFtb',
                            svg:
                              '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M212.309-140.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115v-535.382q0-29.923 21.193-51.115 21.192-21.193 51.115-21.193h535.382q29.923 0 51.115 21.193 21.193 21.192 21.193 51.115v252.998Q805.23-501 790.422-505.384q-14.807-4.385-30.422-7v-235.307q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v535.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h234.307q2.23 16.615 6.615 31.422 4.384 14.808 10.692 28.577H212.309ZM200-240v40-560 247.616-3V-240Zm90.001-54.616h160.692q2.615-15.615 7.769-30.423 5.154-14.807 11.231-29.576H290.001v59.999Zm0-155.385h253.616q25.846-21.922 55.152-36.73 29.307-14.807 62.768-21.038v-2.23H290.001v59.998Zm0-155.384h379.998v-59.999H290.001v59.999ZM720-57.694q-74.922 0-127.461-52.538-52.538-52.538-52.538-127.46 0-74.923 52.538-127.461Q645.078-417.691 720-417.691t127.461 52.538q52.538 52.538 52.538 127.461 0 74.922-52.538 127.46Q794.922-57.694 720-57.694ZM702.308-120h35.384v-100h100v-35.384h-100v-100h-35.384v100h-100V-220h100v100Z"/></svg>',
                            withExternalLayout: true,
                          },),
                        },),
                            /* @__PURE__ */ _jsx7(RichText4, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx7(motion6.p, {
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
                          style: { '--extracted-r6o4lv': 'rgb(0, 105, 115)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                        ],
                      },),
                    },),
                      /* @__PURE__ */ _jsx7(motion6.div, {
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
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-i9rcfr',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'BZ3pT8Y5b',
                        style: { backgroundColor: 'rgb(240, 240, 240)', },
                        children: [
                            /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-1cp1dxx',
                          'data-framer-name': 'icon',
                          layoutDependency,
                          layoutId: 'fwQBSQVFw',
                          children: /* @__PURE__ */ _jsx7(SVG5, {
                            className: 'framer-1io54rj',
                            'data-framer-name': 'lightbulb_FILL0_wght300_GRAD0_opsz24',
                            fill: 'black',
                            intrinsicHeight: 24,
                            intrinsicWidth: 24,
                            layoutDependency,
                            layoutId: 'Tp4REuqvj',
                            svg:
                              '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-96.924q-30.307 0-52.269-21-21.961-21-23.885-51.307h152.308q-1.924 30.307-23.885 51.307-21.962 21-52.269 21ZM330.001-224.617v-59.999h299.998v59.999H330.001Zm6.153-115.384q-62.845-39.077-99.499-102.115Q200.001-505.154 200.001-580q0-116.922 81.538-198.461Q363.078-859.999 480-859.999q116.922 0 198.461 81.538Q759.999-696.922 759.999-580q0 74.846-36.654 137.884-36.654 63.038-99.499 102.115H336.154ZM354-400h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"/></svg>',
                            withExternalLayout: true,
                          },),
                        },),
                            /* @__PURE__ */ _jsx7(RichText4, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx7(motion6.p, {
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
                          style: { '--extracted-r6o4lv': 'rgb(0, 105, 115)', '--framer-paragraph-spacing': '0px', },
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
    },),
  },);
},);
var css6 = [
  '.framer-h6z8J [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-h6z8J .framer-b9y4c0 { display: block; }',
  '.framer-h6z8J .framer-1xd6uv3 { height: 537px; overflow: hidden; position: relative; width: 1009px; }',
  '.framer-h6z8J .framer-th6quy { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 50%; width: 360px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-h6z8J .framer-102rpj4 { align-content: start; align-items: start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 1px; z-index: 1; }',
  '.framer-h6z8J .framer-1x3xeex { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-h6z8J .framer-onwzwe, .framer-h6z8J .framer-8y7dsi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-h6z8J .framer-1d3you, .framer-h6z8J .framer-vyt6dv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-h6z8J .framer-1klpfuo, .framer-h6z8J .framer-1o52rms { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-h6z8J .framer-4hz2zg, .framer-h6z8J .framer-1xo5sxg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-h6z8J .framer-1pd2dzy { bottom: 4px; flex: none; left: 4px; position: absolute; right: 5px; top: 4px; }',
  '.framer-h6z8J .framer-2jm16e { bottom: 6px; flex: none; left: 3px; position: absolute; right: 3px; top: 6px; }',
  '.framer-h6z8J .framer-a5vvyf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 49px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-h6z8J .framer-er2jrd, .framer-h6z8J .framer-1xc11ty, .framer-h6z8J .framer-1s5l2r8, .framer-h6z8J .framer-16jmr7f, .framer-h6z8J .framer-1j2s96v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-h6z8J .framer-b3bbqg { align-content: start; align-items: start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-h6z8J .framer-q46j6z-container { flex: 1 0 0px; height: 50px; position: relative; width: 1px; }',
  '.framer-h6z8J .framer-o3gcmt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-h6z8J .framer-dpkc67 { bottom: 4px; flex: none; left: 3px; position: absolute; right: 4px; top: 3px; }',
  '.framer-h6z8J .framer-11pjihq { bottom: -8px; flex: none; left: -8px; position: absolute; right: -8px; top: -8px; }',
  '.framer-h6z8J .framer-1togmrv { flex: none; height: 49px; overflow: visible; position: relative; width: 50px; }',
  '.framer-h6z8J .framer-wmmfv { flex: none; height: 22px; left: calc(50.00000000000002% - 27px / 2); position: absolute; top: calc(51.02040816326533% - 22px / 2); width: 27px; }',
  '.framer-h6z8J .framer-12cmvwa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 35px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-h6z8J .framer-1ko8d44 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 32px; justify-content: center; overflow: visible; padding: 6px 16px 6px 16px; position: relative; width: min-content; }',
  '.framer-h6z8J .framer-4fuql9 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 100%; }',
  '.framer-h6z8J .framer-9xr0lm, .framer-h6z8J .framer-1j7qf8c, .framer-h6z8J .framer-1oqfwc7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-h6z8J .framer-jg6s93, .framer-h6z8J .framer-r697fa, .framer-h6z8J .framer-i9rcfr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: center; overflow: visible; padding: 10px 16px 10px 12px; position: relative; width: 100%; }',
  '.framer-h6z8J .framer-1trg1ag, .framer-h6z8J .framer-1l3eqf8, .framer-h6z8J .framer-1cp1dxx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 18px; }',
  '.framer-h6z8J .framer-14ki56d, .framer-h6z8J .framer-1io54rj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-h6z8J .framer-21svtl { aspect-ratio: 1 / 1; bottom: 0px; flex: none; position: absolute; right: 0px; top: 0px; width: var(--framer-aspect-ratio-supported, 18px); }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h6z8J .framer-th6quy, .framer-h6z8J .framer-102rpj4, .framer-h6z8J .framer-1x3xeex, .framer-h6z8J .framer-onwzwe, .framer-h6z8J .framer-1d3you, .framer-h6z8J .framer-1klpfuo, .framer-h6z8J .framer-a5vvyf, .framer-h6z8J .framer-b3bbqg, .framer-h6z8J .framer-o3gcmt, .framer-h6z8J .framer-8y7dsi, .framer-h6z8J .framer-vyt6dv, .framer-h6z8J .framer-1o52rms, .framer-h6z8J .framer-12cmvwa, .framer-h6z8J .framer-1ko8d44, .framer-h6z8J .framer-4fuql9, .framer-h6z8J .framer-9xr0lm, .framer-h6z8J .framer-jg6s93, .framer-h6z8J .framer-1j7qf8c, .framer-h6z8J .framer-r697fa, .framer-h6z8J .framer-1oqfwc7, .framer-h6z8J .framer-i9rcfr { gap: 0px; } .framer-h6z8J .framer-th6quy > *, .framer-h6z8J .framer-1x3xeex > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-h6z8J .framer-th6quy > :first-child, .framer-h6z8J .framer-1x3xeex > :first-child, .framer-h6z8J .framer-1d3you > :first-child, .framer-h6z8J .framer-1klpfuo > :first-child, .framer-h6z8J .framer-a5vvyf > :first-child, .framer-h6z8J .framer-b3bbqg > :first-child, .framer-h6z8J .framer-o3gcmt > :first-child, .framer-h6z8J .framer-vyt6dv > :first-child, .framer-h6z8J .framer-1o52rms > :first-child, .framer-h6z8J .framer-12cmvwa > :first-child, .framer-h6z8J .framer-1ko8d44 > :first-child, .framer-h6z8J .framer-jg6s93 > :first-child, .framer-h6z8J .framer-r697fa > :first-child, .framer-h6z8J .framer-i9rcfr > :first-child { margin-left: 0px; } .framer-h6z8J .framer-th6quy > :last-child, .framer-h6z8J .framer-1x3xeex > :last-child, .framer-h6z8J .framer-1d3you > :last-child, .framer-h6z8J .framer-1klpfuo > :last-child, .framer-h6z8J .framer-a5vvyf > :last-child, .framer-h6z8J .framer-b3bbqg > :last-child, .framer-h6z8J .framer-o3gcmt > :last-child, .framer-h6z8J .framer-vyt6dv > :last-child, .framer-h6z8J .framer-1o52rms > :last-child, .framer-h6z8J .framer-12cmvwa > :last-child, .framer-h6z8J .framer-1ko8d44 > :last-child, .framer-h6z8J .framer-jg6s93 > :last-child, .framer-h6z8J .framer-r697fa > :last-child, .framer-h6z8J .framer-i9rcfr > :last-child { margin-right: 0px; } .framer-h6z8J .framer-102rpj4 > *, .framer-h6z8J .framer-4fuql9 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-h6z8J .framer-102rpj4 > :first-child, .framer-h6z8J .framer-onwzwe > :first-child, .framer-h6z8J .framer-8y7dsi > :first-child, .framer-h6z8J .framer-4fuql9 > :first-child, .framer-h6z8J .framer-9xr0lm > :first-child, .framer-h6z8J .framer-1j7qf8c > :first-child, .framer-h6z8J .framer-1oqfwc7 > :first-child { margin-top: 0px; } .framer-h6z8J .framer-102rpj4 > :last-child, .framer-h6z8J .framer-onwzwe > :last-child, .framer-h6z8J .framer-8y7dsi > :last-child, .framer-h6z8J .framer-4fuql9 > :last-child, .framer-h6z8J .framer-9xr0lm > :last-child, .framer-h6z8J .framer-1j7qf8c > :last-child, .framer-h6z8J .framer-1oqfwc7 > :last-child { margin-bottom: 0px; } .framer-h6z8J .framer-onwzwe > *, .framer-h6z8J .framer-8y7dsi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-h6z8J .framer-1d3you > *, .framer-h6z8J .framer-1klpfuo > *, .framer-h6z8J .framer-a5vvyf > *, .framer-h6z8J .framer-b3bbqg > *, .framer-h6z8J .framer-vyt6dv > *, .framer-h6z8J .framer-1o52rms > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-h6z8J .framer-o3gcmt > *, .framer-h6z8J .framer-12cmvwa > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-h6z8J .framer-1ko8d44 > *, .framer-h6z8J .framer-jg6s93 > *, .framer-h6z8J .framer-r697fa > *, .framer-h6z8J .framer-i9rcfr > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-h6z8J .framer-9xr0lm > *, .framer-h6z8J .framer-1j7qf8c > *, .framer-h6z8J .framer-1oqfwc7 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }',
  '.framer-h6z8J.framer-v-15mvvd2 .framer-th6quy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 98px); width: 98px; }',
  '.framer-h6z8J.framer-v-15mvvd2 .framer-102rpj4, .framer-h6z8J.framer-v-wmnvsy .framer-102rpj4 { flex: none; height: 188%; width: min-content; }',
  '.framer-h6z8J.framer-v-15mvvd2 .framer-1x3xeex { height: 90px; width: 90px; }',
  '.framer-h6z8J.framer-v-15mvvd2 .framer-1togmrv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 90px); width: 90px; }',
  '.framer-h6z8J.framer-v-15mvvd2 .framer-wmmfv { height: 42px; left: calc(50.00000000000002% - 50px / 2); top: calc(50.00000000000002% - 42px / 2); width: 50px; }',
  '.framer-h6z8J.framer-v-1u2jgkx .framer-102rpj4 { flex: none; width: 360px; }',
  '.framer-h6z8J.framer-v-15ekw7u .framer-th6quy, .framer-h6z8J.framer-v-14ttska .framer-th6quy { height: 57px; left: calc(50.04955401387514% - 584px / 2); top: calc(49.90689013035384% - 57px / 2); width: 584px; }',
  '.framer-h6z8J.framer-v-wmnvsy .framer-th6quy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 186px); width: 186px; }',
  '.framer-h6z8J.framer-v-wmnvsy .framer-1x3xeex { height: 178px; width: 178px; }',
  '.framer-h6z8J.framer-v-wmnvsy .framer-1togmrv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 178px); width: 178px; }',
  '.framer-h6z8J.framer-v-wmnvsy .framer-wmmfv { bottom: 29px; height: 117px; left: calc(50.00000000000002% - 135px / 2); top: unset; width: 135px; }',
  '.framer-h6z8J.framer-v-14ttska .framer-1x3xeex, .framer-h6z8J.framer-v-n0zl46 .framer-1x3xeex { align-content: center; align-items: center; }',
  '.framer-h6z8J.framer-v-14ttska .framer-onwzwe, .framer-h6z8J.framer-v-n0zl46 .framer-onwzwe { order: 0; }',
  '.framer-h6z8J.framer-v-14ttska .framer-a5vvyf, .framer-h6z8J.framer-v-n0zl46 .framer-a5vvyf { order: 2; }',
  '.framer-h6z8J.framer-v-14ttska .framer-o3gcmt, .framer-h6z8J.framer-v-n0zl46 .framer-o3gcmt { order: 3; }',
  '.framer-h6z8J.framer-v-14ttska .framer-12cmvwa { order: 1; }',
  '.framer-h6z8J.framer-v-n0zl46 .framer-th6quy { height: 301px; left: calc(50.04955401387514% - 326px / 2); top: calc(47.113594040968366% - 301px / 2); width: 326px; }',
];
var FramerpSxPslti_ = withCSS7(Component5, css6, 'framer-h6z8J',);
var stdin_default7 = FramerpSxPslti_;
FramerpSxPslti_.displayName = 'Seed';
FramerpSxPslti_.defaultProps = { height: 537, width: 1009, };
addPropertyControls7(FramerpSxPslti_, {
  variant: {
    options: ['R_0SntBXV', 'RspHZjbvA', 'KzyHUFutd', 'lR29aQ4aC', 'CDTOPoYwJ', 'AKBlJHd8s', 'NfdKYRGKU',],
    optionTitles: ['search', 'seed', 'expanded', 'type', 'logo', 'generate', 'Variant 7',],
    title: 'Variant',
    type: ControlType10.Enum,
  },
},);
addFonts5(FramerpSxPslti_, [
  { family: 'PP Supply Sans Variable', url: 'https://framerusercontent.com/assets/nTnfVPKvx4BNtayjhoEgyhNSc.ttf', },
  { family: 'PP Supply Sans Regular', url: 'https://framerusercontent.com/assets/IIwW8kvIZ9g5LjEOU4ekY5CtLI.ttf', },
  ...TypewriterFonts3,
],);

// https:https://framer.com/m/FYLO-COMPOSITION-5nyv.js@S5rHpqacrRxOsXxBZaGG
var NodeFonts = getFonts5(stdin_default6,);
var SeedFonts = getFonts5(stdin_default7,);
var cycleOrder6 = [
  'zEXSsGxpE',
  'HovROSEim',
  'lBUZui6j9',
  'dVLWELU6e',
  'XACXI8mDn',
  'vf_oeYc8q',
  'Wzv1r0oKb',
  'ovIpGU7cl',
  'aOPZX8nJO',
  'QkfIEoKbU',
  'Du1gnhwdF',
  'MX2TbvLxw',
  'cg1e52nt2',
  'QcEIwdpHn',
  'r8IR85ZDv',
  'qMUngWgkC',
  'gDTDJiCJ2',
  'p6HKTvlB3',
  'rfZM8jP4B',
  'fhIf6dGTg',
  'Ugn1WXH_Q',
  'NsO3auvSc',
  'HAgS9njVa',
  'vhOykwvnY',
  'bmOYz6gay',
  'qT5kEYyp_',
  'ZNHbdIJKd',
  'h124nvy2N',
  'Cr5qNjOdj',
  'kFGmGEOUz',
  'l5FvQV66Q',
  'udHfq45LS',
  'Z1sTRLzN1',
  'cq7D62bxc',
];
var variantClassNames6 = {
  aOPZX8nJO: 'framer-v-162rgdv',
  bmOYz6gay: 'framer-v-1ymudb1',
  cg1e52nt2: 'framer-v-8ciawy',
  cq7D62bxc: 'framer-v-13llhv3',
  Cr5qNjOdj: 'framer-v-1anadwn',
  Du1gnhwdF: 'framer-v-19a269d',
  dVLWELU6e: 'framer-v-d973em',
  fhIf6dGTg: 'framer-v-655dk4',
  gDTDJiCJ2: 'framer-v-1ewhbs6',
  h124nvy2N: 'framer-v-1f09y03',
  HAgS9njVa: 'framer-v-96r6q7',
  HovROSEim: 'framer-v-f73ajw',
  kFGmGEOUz: 'framer-v-16mzam7',
  l5FvQV66Q: 'framer-v-tv2zos',
  lBUZui6j9: 'framer-v-1odncvf',
  MX2TbvLxw: 'framer-v-1b7v10g',
  NsO3auvSc: 'framer-v-18wwg9a',
  ovIpGU7cl: 'framer-v-15llivf',
  p6HKTvlB3: 'framer-v-47329',
  QcEIwdpHn: 'framer-v-87eqop',
  QkfIEoKbU: 'framer-v-16r9b51',
  qMUngWgkC: 'framer-v-ewze6y',
  qT5kEYyp_: 'framer-v-qkkkjw',
  r8IR85ZDv: 'framer-v-zdyy2d',
  rfZM8jP4B: 'framer-v-n0vpn9',
  udHfq45LS: 'framer-v-1j14qwb',
  Ugn1WXH_Q: 'framer-v-ae0cwc',
  vf_oeYc8q: 'framer-v-yrn57e',
  vhOykwvnY: 'framer-v-10pngp5',
  Wzv1r0oKb: 'framer-v-1l5e6kx',
  XACXI8mDn: 'framer-v-13tsvzn',
  Z1sTRLzN1: 'framer-v-1sk9d83',
  zEXSsGxpE: 'framer-v-hpdod',
  ZNHbdIJKd: 'framer-v-30clu8',
};
function addPropertyOverrides6(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions6 = {
  aOPZX8nJO: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  bmOYz6gay: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  cg1e52nt2: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  Cr5qNjOdj: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  dVLWELU6e: { delay: 0, duration: 5.8, ease: [0.81, -0.01, 0.28, 1,], type: 'tween', },
  h124nvy2N: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  HovROSEim: { delay: 0, duration: 3.75, ease: [0.66, -0.02, 0.27, 1.04,], type: 'tween', },
  kFGmGEOUz: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  l5FvQV66Q: { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  lBUZui6j9: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  p6HKTvlB3: { delay: 0, duration: 1.6, ease: [0.4, -0.02, 0.56, 1,], type: 'tween', },
  QcEIwdpHn: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  QkfIEoKbU: { delay: 0, duration: 1.1, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  qT5kEYyp_: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  udHfq45LS: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  vf_oeYc8q: { delay: 0, duration: 3, ease: [0.81, -0.01, 0.28, 1,], type: 'tween', },
  XACXI8mDn: { delay: 0, duration: 5.8, ease: [0.81, -0.01, 0.28, 1,], type: 'tween', },
  Z1sTRLzN1: { delay: 0, duration: 3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  ZNHbdIJKd: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
var transformTemplate3 = (_, t3,) => `translateX(-50%) ${t3}`;
var transition12 = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var Transition6 = ({ value, children, },) => {
  const config = React8.useContext(MotionConfigContext6,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx8(MotionConfigContext6.Provider, { value: contextValue, children, },);
};
var transition22 = { delay: 0.4, duration: 0.5, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transformTemplate12 = (_, t3,) => `translateY(-50%) ${t3}`;
var transition3 = { delay: 0, duration: 0.4, ease: [0.7, -0.02, 0.58, 1.04,], type: 'tween', };
var transition4 = { damping: 66, delay: 0, mass: 3.2, stiffness: 526, type: 'spring', };
var transition5 = { delay: 0.2, duration: 0.4, ease: [0.59, -0.01, 0.56, 1,], type: 'tween', };
var transition6 = { delay: 0, duration: 5.6, ease: [0.66, -0.02, 0.12, 1,], type: 'tween', };
var transition7 = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transformTemplate22 = (_, t3,) => `translate(-50%, -50%) ${t3}`;
var transition8 = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition9 = { delay: 0.5, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition10 = { delay: 0.5, duration: 0.6, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition11 = { delay: 0, duration: 0.3, ease: [0.66, -0.02, 0.27, 1.02,], type: 'tween', };
var transition122 = { damping: 30, delay: 0, mass: 1, stiffness: 430, type: 'spring', };
var transition13 = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition14 = { delay: 0.8, duration: 0.5, ease: [0.73, 0.04, 0.54, 1,], type: 'tween', };
var transition15 = { delay: 0, duration: 0.9, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition16 = { delay: 0.2, duration: 0.8, ease: [0.64, 0, 0.53, 1.03,], type: 'tween', };
var transition17 = { delay: 0.6, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition18 = { delay: 0.4, duration: 0.3, ease: [0.59, 0.02, 0.56, 1,], type: 'tween', };
var humanReadableVariantMap6 = {
  'Variant A-1': 'HovROSEim',
  'Variant A-2': 'lBUZui6j9',
  'Variant A-3': 'dVLWELU6e',
  'Variant A-4': 'XACXI8mDn',
  'Variant B-1': 'vf_oeYc8q',
  'Variant B-2': 'zEXSsGxpE',
  'Variant B-3': 'Wzv1r0oKb',
  'Variant B-4': 'ovIpGU7cl',
  'Variant B-5': 'aOPZX8nJO',
  'Variant B-6': 'QkfIEoKbU',
  'Variant B-7': 'Du1gnhwdF',
  'Variant B-8': 'MX2TbvLxw',
  'Variant C-1': 'cg1e52nt2',
  'Variant C-2': 'QcEIwdpHn',
  'Variant C-3': 'r8IR85ZDv',
  'Variant C-4': 'qMUngWgkC',
  'Variant C-5': 'gDTDJiCJ2',
  'Variant C-6': 'p6HKTvlB3',
  'Variant D-1': 'rfZM8jP4B',
  'Variant D-2': 'fhIf6dGTg',
  'Variant D-3': 'Ugn1WXH_Q',
  'Variant D-4': 'NsO3auvSc',
  'Variant E-1': 'HAgS9njVa',
  'Variant E-2': 'vhOykwvnY',
  'Variant E-3': 'bmOYz6gay',
  'Variant E-4': 'qT5kEYyp_',
  'Variant E-5': 'ZNHbdIJKd',
  'Variant E-6': 'h124nvy2N',
  'Variant E-7': 'Cr5qNjOdj',
  'Variant F-1': 'kFGmGEOUz',
  'Variant F-2': 'l5FvQV66Q',
  'Variant F-3': 'udHfq45LS',
  'Variant F-4': 'Z1sTRLzN1',
  'Variant F-5': 'cq7D62bxc',
};
var getProps6 = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
        (_humanReadableVariantMap_props_variant = humanReadableVariantMap6[props.variant]) !== null &&
          _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'zEXSsGxpE',
  };
};
var createLayoutDependency6 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component6 = /* @__PURE__ */ React8.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo6();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps6(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState6({
    cycleOrder: cycleOrder6,
    defaultVariant: 'zEXSsGxpE',
    transitions: transitions6,
    variant,
    variantClassNames: variantClassNames6,
  },);
  const layoutDependency = createLayoutDependency6(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback3(baseVariant,);
  const onAppear1lm4twz = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('Wzv1r0oKb',), 400,);
  },);
  const onTaphbyqyv = activeVariantCallback(async (...args) => {
    setVariant('lBUZui6j9',);
  },);
  const onAppearmttkl3 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('lBUZui6j9',), 700,);
  },);
  const onTap6nb57o = activeVariantCallback(async (...args) => {
    setVariant('dVLWELU6e',);
  },);
  const onAppear1w3pbxc = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('dVLWELU6e',), 800,);
  },);
  const onTap1tb5txm = activeVariantCallback(async (...args) => {
    setVariant('XACXI8mDn',);
  },);
  const onAppear92gtia = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('XACXI8mDn',), 1500,);
  },);
  const onTap1lpg9gm = activeVariantCallback(async (...args) => {
    setVariant('vf_oeYc8q',);
  },);
  const onAppearjbiye1 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('zEXSsGxpE',), 600,);
  },);
  const onAppear18u9pk = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('ovIpGU7cl',), 2e3,);
  },);
  const onAppeark73pii = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('aOPZX8nJO',), 2e3,);
  },);
  const onTap6gcwj6 = activeVariantCallback(async (...args) => {
    setVariant('QkfIEoKbU',);
  },);
  const onTapxd73pb = activeVariantCallback(async (...args) => {
    setVariant('Du1gnhwdF',);
  },);
  const onTap1au3ee4 = activeVariantCallback(async (...args) => {
    setVariant('MX2TbvLxw',);
  },);
  const onTap1wr2pua = activeVariantCallback(async (...args) => {
    setVariant('cg1e52nt2',);
  },);
  const onTapg5dw3g = activeVariantCallback(async (...args) => {
    setVariant('QcEIwdpHn',);
  },);
  const onAppear72lkqo = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('QcEIwdpHn',), 400,);
  },);
  const onAppear1660fro = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('r8IR85ZDv',), 300,);
  },);
  const onAppear1skz1qb = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('qMUngWgkC',), 300,);
  },);
  const onAppear1fop6mg = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('gDTDJiCJ2',), 300,);
  },);
  const onTapnjmz91 = activeVariantCallback(async (...args) => {
    setVariant('p6HKTvlB3',);
  },);
  const onTap1t6fcap = activeVariantCallback(async (...args) => {
    setVariant('rfZM8jP4B',);
  },);
  const onAppear5cy2cc = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('rfZM8jP4B',), 1700,);
  },);
  const onTap1casv4y = activeVariantCallback(async (...args) => {
    setVariant('fhIf6dGTg',);
  },);
  const onAppearuj7ay4 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('fhIf6dGTg',), 1500,);
  },);
  const onTapuqru5d = activeVariantCallback(async (...args) => {
    setVariant('Ugn1WXH_Q',);
  },);
  const onAppear1k9apdf = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('Ugn1WXH_Q',), 1e3,);
  },);
  const onTap15j4phh = activeVariantCallback(async (...args) => {
    setVariant('NsO3auvSc',);
  },);
  const onAppear183s3yt = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('NsO3auvSc',), 1e3,);
  },);
  const onTap1gglq3f = activeVariantCallback(async (...args) => {
    setVariant('HAgS9njVa',);
  },);
  const onAppear1d05iw9 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('HAgS9njVa',), 1e3,);
  },);
  const onTap1dtjibr = activeVariantCallback(async (...args) => {
    setVariant('vhOykwvnY',);
  },);
  const onAppear13ef6yw = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('vhOykwvnY',), 1e3,);
  },);
  const onTapatxdzz = activeVariantCallback(async (...args) => {
    setVariant('bmOYz6gay',);
  },);
  const onAppearxt4uid = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('bmOYz6gay',), 1e3,);
  },);
  const onTap1f8o5wz = activeVariantCallback(async (...args) => {
    setVariant('qT5kEYyp_',);
  },);
  const onTap1q5xpce = activeVariantCallback(async (...args) => {
    setVariant('ZNHbdIJKd',);
  },);
  const onAppear42kjx9 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('ZNHbdIJKd',), 400,);
  },);
  const onTapt8mge2 = activeVariantCallback(async (...args) => {
    setVariant('h124nvy2N',);
  },);
  const onAppearpfs35t = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('h124nvy2N',), 700,);
  },);
  const onTaplra39s = activeVariantCallback(async (...args) => {
    setVariant('Cr5qNjOdj',);
  },);
  const onAppearmcrp7k = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('Cr5qNjOdj',), 1e3,);
  },);
  const onTapdgwaag = activeVariantCallback(async (...args) => {
    setVariant('l5FvQV66Q',);
  },);
  const onAppearjqbfxa = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('l5FvQV66Q',), 600,);
  },);
  const onTapmj47t2 = activeVariantCallback(async (...args) => {
    setVariant('udHfq45LS',);
  },);
  const onAppear1u675qa = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('udHfq45LS',), 500,);
  },);
  const onTap1ide8ge = activeVariantCallback(async (...args) => {
    setVariant('Z1sTRLzN1',);
  },);
  const onAppear1nq4qdk = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('Z1sTRLzN1',), 400,);
  },);
  const onTap11u4nzo = activeVariantCallback(async (...args) => {
    setVariant('cq7D62bxc',);
  },);
  const onAppear17h0p06 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('cq7D62bxc',), 500,);
  },);
  useOnVariantChange(baseVariant, {
    aOPZX8nJO: void 0,
    bmOYz6gay: void 0,
    cg1e52nt2: onAppear72lkqo,
    cq7D62bxc: void 0,
    Cr5qNjOdj: void 0,
    default: onAppear1lm4twz,
    Du1gnhwdF: void 0,
    dVLWELU6e: onAppear92gtia,
    fhIf6dGTg: onAppear1k9apdf,
    gDTDJiCJ2: void 0,
    h124nvy2N: onAppearmcrp7k,
    HAgS9njVa: onAppear13ef6yw,
    HovROSEim: onAppearmttkl3,
    kFGmGEOUz: onAppearjqbfxa,
    l5FvQV66Q: onAppear1u675qa,
    lBUZui6j9: onAppear1w3pbxc,
    MX2TbvLxw: void 0,
    NsO3auvSc: onAppear1d05iw9,
    ovIpGU7cl: onAppeark73pii,
    p6HKTvlB3: onAppear5cy2cc,
    QcEIwdpHn: onAppear1660fro,
    QkfIEoKbU: void 0,
    qMUngWgkC: onAppear1fop6mg,
    qT5kEYyp_: onAppear42kjx9,
    r8IR85ZDv: onAppear1skz1qb,
    rfZM8jP4B: onAppearuj7ay4,
    udHfq45LS: onAppear1nq4qdk,
    Ugn1WXH_Q: onAppear183s3yt,
    vf_oeYc8q: onAppearjbiye1,
    vhOykwvnY: onAppearxt4uid,
    Wzv1r0oKb: onAppear18u9pk,
    XACXI8mDn: void 0,
    Z1sTRLzN1: onAppear17h0p06,
    ZNHbdIJKd: onAppearpfs35t,
  },);
  const ref1 = React8.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'Cr5qNjOdj') {
      return true;
    }
    return false;
  };
  const isDisplayed1 = () => {
    if (['HAgS9njVa', 'vhOykwvnY', 'bmOYz6gay',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (
      [
        'cg1e52nt2',
        'QcEIwdpHn',
        'r8IR85ZDv',
        'qMUngWgkC',
        'gDTDJiCJ2',
        'p6HKTvlB3',
        'rfZM8jP4B',
        'fhIf6dGTg',
        'Ugn1WXH_Q',
        'NsO3auvSc',
        'HAgS9njVa',
        'vhOykwvnY',
        'bmOYz6gay',
        'qT5kEYyp_',
        'ZNHbdIJKd',
        'h124nvy2N',
        'Cr5qNjOdj',
        'kFGmGEOUz',
        'l5FvQV66Q',
        'udHfq45LS',
        'Z1sTRLzN1',
        'cq7D62bxc',
      ].includes(baseVariant,)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed3 = () => {
    if (['Z1sTRLzN1', 'cq7D62bxc',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed4 = () => {
    if (baseVariant === 'cq7D62bxc') {
      return false;
    }
    return true;
  };
  const isDisplayed5 = () => {
    if (['Ugn1WXH_Q', 'NsO3auvSc', 'HAgS9njVa', 'vhOykwvnY', 'bmOYz6gay',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed6 = () => {
    if (['qT5kEYyp_', 'ZNHbdIJKd', 'h124nvy2N', 'Cr5qNjOdj',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (
      [
        'r8IR85ZDv',
        'qMUngWgkC',
        'gDTDJiCJ2',
        'p6HKTvlB3',
        'rfZM8jP4B',
        'fhIf6dGTg',
        'Ugn1WXH_Q',
        'NsO3auvSc',
        'HAgS9njVa',
        'vhOykwvnY',
        'bmOYz6gay',
        'qT5kEYyp_',
        'ZNHbdIJKd',
        'h124nvy2N',
        'Cr5qNjOdj',
        'kFGmGEOUz',
        'l5FvQV66Q',
        'udHfq45LS',
        'Z1sTRLzN1',
        'cq7D62bxc',
      ].includes(baseVariant,)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed8 = () => {
    if (['udHfq45LS', 'Z1sTRLzN1', 'cq7D62bxc',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed9 = () => {
    if (baseVariant === 'qMUngWgkC') {
      return true;
    }
    return false;
  };
  const isDisplayed10 = () => {
    if (['QkfIEoKbU', 'Du1gnhwdF', 'MX2TbvLxw',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed11 = () => {
    if (
      [
        'rfZM8jP4B',
        'fhIf6dGTg',
        'Ugn1WXH_Q',
        'NsO3auvSc',
        'HAgS9njVa',
        'vhOykwvnY',
        'bmOYz6gay',
        'qT5kEYyp_',
        'ZNHbdIJKd',
        'h124nvy2N',
        'Cr5qNjOdj',
      ].includes(baseVariant,)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed12 = () => {
    if (
      [
        'aOPZX8nJO',
        'QkfIEoKbU',
        'Du1gnhwdF',
        'MX2TbvLxw',
        'rfZM8jP4B',
        'fhIf6dGTg',
        'Ugn1WXH_Q',
        'NsO3auvSc',
        'HAgS9njVa',
        'vhOykwvnY',
        'bmOYz6gay',
      ].includes(baseVariant,)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed13 = () => {
    if (['QkfIEoKbU', 'Du1gnhwdF', 'MX2TbvLxw',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed14 = () => {
    if (
      ['QkfIEoKbU', 'Du1gnhwdF', 'MX2TbvLxw', 'fhIf6dGTg', 'Ugn1WXH_Q', 'NsO3auvSc', 'HAgS9njVa', 'vhOykwvnY', 'bmOYz6gay',].includes(
        baseVariant,
      )
    ) {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React8.useId();
  const sharedStyleClassNames = [];
  return /* @__PURE__ */ _jsx8(LayoutGroup6, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx8(motion7.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx6('framer-Yw3ZX', ...sharedStyleClassNames, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx8(Transition6, {
        value: transition,
        children: /* @__PURE__ */ _jsxs6(motion7.div, {
          ...restProps,
          className: cx6('framer-hpdod', className2,),
          'data-framer-name': 'Variant B-2',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'zEXSsGxpE',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          ...addPropertyOverrides6(
            {
              aOPZX8nJO: { 'data-framer-name': 'Variant B-5', onTap: onTap6gcwj6, },
              bmOYz6gay: { 'data-framer-name': 'Variant E-3', onTap: onTap1f8o5wz, },
              cg1e52nt2: { 'data-framer-name': 'Variant C-1', onTap: onTapg5dw3g, },
              cq7D62bxc: { 'data-framer-name': 'Variant F-5', 'data-highlight': void 0, },
              Cr5qNjOdj: { 'data-framer-name': 'Variant E-7', onTap: onTapdgwaag, },
              Du1gnhwdF: { 'data-framer-name': 'Variant B-7', onTap: onTap1au3ee4, },
              dVLWELU6e: { 'data-framer-name': 'Variant A-3', onTap: onTap1tb5txm, },
              fhIf6dGTg: { 'data-framer-name': 'Variant D-2', onTap: onTapuqru5d, },
              gDTDJiCJ2: { 'data-framer-name': 'Variant C-5', onTap: onTapnjmz91, },
              h124nvy2N: { 'data-framer-name': 'Variant E-6', onTap: onTaplra39s, },
              HAgS9njVa: { 'data-framer-name': 'Variant E-1', onTap: onTap1dtjibr, },
              HovROSEim: { 'data-framer-name': 'Variant A-1', onTap: onTaphbyqyv, },
              kFGmGEOUz: { 'data-framer-name': 'Variant F-1', onTap: onTapdgwaag, },
              l5FvQV66Q: { 'data-framer-name': 'Variant F-2', onTap: onTapmj47t2, },
              lBUZui6j9: { 'data-framer-name': 'Variant A-2', onTap: onTap6nb57o, },
              MX2TbvLxw: { 'data-framer-name': 'Variant B-8', onTap: onTap1wr2pua, },
              NsO3auvSc: { 'data-framer-name': 'Variant D-4', onTap: onTap1gglq3f, },
              ovIpGU7cl: { 'data-framer-name': 'Variant B-4', },
              p6HKTvlB3: { 'data-framer-name': 'Variant C-6', onTap: onTap1t6fcap, },
              QcEIwdpHn: { 'data-framer-name': 'Variant C-2', },
              QkfIEoKbU: { 'data-framer-name': 'Variant B-6', onTap: onTapxd73pb, },
              qMUngWgkC: { 'data-framer-name': 'Variant C-4', },
              qT5kEYyp_: { 'data-framer-name': 'Variant E-4', onTap: onTap1q5xpce, },
              r8IR85ZDv: { 'data-framer-name': 'Variant C-3', },
              rfZM8jP4B: { 'data-framer-name': 'Variant D-1', onTap: onTap1casv4y, },
              udHfq45LS: { 'data-framer-name': 'Variant F-3', onTap: onTap1ide8ge, },
              Ugn1WXH_Q: { 'data-framer-name': 'Variant D-3', onTap: onTap15j4phh, },
              vf_oeYc8q: { 'data-framer-name': 'Variant B-1', },
              vhOykwvnY: { 'data-framer-name': 'Variant E-2', onTap: onTapatxdzz, },
              Wzv1r0oKb: { 'data-framer-name': 'Variant B-3', },
              XACXI8mDn: { 'data-framer-name': 'Variant A-4', onTap: onTap1lpg9gm, },
              Z1sTRLzN1: { 'data-framer-name': 'Variant F-4', onTap: onTap11u4nzo, },
              ZNHbdIJKd: { 'data-framer-name': 'Variant E-5', onTap: onTapt8mge2, },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsx8(SVG6, {
              className: 'framer-1ycw9vo',
              'data-framer-name': 'Vector 105',
              layout: 'position',
              layoutDependency,
              layoutId: 'eqG2RbVKy',
              opacity: 1,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 771 198"><path d="M 1.316 196.508 C 35.771 196.508 72.064 158.45 97.758 158.45 C 123.451 158.45 123.451 182.672 143.401 182.672 C 163.352 182.672 171.513 158.45 187.534 158.45 C 203.555 158.45 211.716 182.672 234.085 182.672 C 256.453 182.672 260.685 133.017 278.217 133.017 C 295.749 133.017 302.457 101.752 323.323 101.752 C 344.189 101.752 357.097 129.258 381.259 129.258 C 405.421 129.258 412.855 101.752 441.974 101.752 C 471.092 101.752 475.918 138.613 503.649 138.613 C 531.38 138.613 533.749 62.632 562.328 62.632 C 590.908 62.632 602.519 84.997 632.885 84.997 C 663.251 84.997 669.503 0.904 703.442 0.904 C 737.38 0.904 740.508 62.632 770.164 62.632" fill="transparent" stroke-width="1.2" stroke="rgba(0, 0, 0, 0.42)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="0, 5"></path></svg>',
              svgContentId: 2031109906,
              withExternalLayout: true,
              ...addPropertyOverrides6({ Cr5qNjOdj: { svgContentId: 1792152398, }, }, baseVariant, gestureVariant,),
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx8(Transition6, {
              ...addPropertyOverrides6({ HAgS9njVa: { value: transition12, }, }, baseVariant, gestureVariant,),
              children: /* @__PURE__ */ _jsxs6(motion7.div, {
                className: 'framer-8vddoc',
                'data-framer-name': 'Dial picker',
                layoutDependency,
                layoutId: 'noegUpLE7',
                style: {
                  backgroundColor: 'rgb(250, 250, 250)',
                  borderBottomLeftRadius: 28,
                  borderBottomRightRadius: 28,
                  borderTopLeftRadius: 28,
                  borderTopRightRadius: 28,
                  boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
                  filter: 'none',
                  WebkitFilter: 'none',
                },
                transformTemplate: transformTemplate3,
                variants: {
                  bmOYz6gay: { filter: 'blur(5px)', WebkitFilter: 'blur(5px)', },
                  HAgS9njVa: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  vhOykwvnY: { filter: 'blur(5px)', WebkitFilter: 'blur(5px)', },
                },
                children: [
                  /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-3jhvp',
                  'data-framer-name': 'Header',
                  layoutDependency,
                  layoutId: 'WxA9YA_8X',
                  children: /* @__PURE__ */ _jsx8(RichText5, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                      children: /* @__PURE__ */ _jsx8(motion7.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-letter-spacing': '0.5px',
                          '--framer-line-height': '16px',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                        },
                        children: 'COMPONENT IDEA',
                      },),
                    },),
                    className: 'framer-58jcgq',
                    'data-framer-name': 'Title',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'jhZE2KFB3',
                    style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                  /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-k3rqov',
                  'data-framer-name': 'Input Selection',
                  layoutDependency,
                  layoutId: 'UhcRycNtR',
                  children: /* @__PURE__ */ _jsxs6(motion7.div, {
                    className: 'framer-ovz0el',
                    'data-framer-name': 'Input',
                    layoutDependency,
                    layoutId: 'lK3TjGT60',
                    children: [
                        /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-1cjxhy0',
                      'data-framer-name': 'headline',
                      layoutDependency,
                      layoutId: 'hkLaO70Lr',
                      children: /* @__PURE__ */ _jsx8(RichText5, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                          children: /* @__PURE__ */ _jsx8(motion7.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                              '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-letter-spacing': '0.25px',
                              '--framer-line-height': '20px',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                            },
                            children: 'Describing the medium and method of the tool.',
                          },),
                        },),
                        className: 'framer-1ebn6ix',
                        'data-framer-name': 'subhead',
                        fonts: ['CUSTOM;PP Supply Sans Light',],
                        layoutDependency,
                        layoutId: 'w31DsTlZr',
                        style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                    },),
                        /* @__PURE__ */ _jsxs6(motion7.div, {
                      className: 'framer-1twb4mw',
                      'data-framer-name': 'Frame 2608514',
                      layoutDependency,
                      layoutId: 'Ifo7_8nhh',
                      style: {
                        backgroundColor: 'rgb(219, 228, 230)',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      children: [
                            /* @__PURE__ */ _jsx8(RichText5, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                          children: /* @__PURE__ */ _jsx8(motion7.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                              '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-letter-spacing': '0.25px',
                              '--framer-line-height': '20px',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                            },
                            children:
                              'a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement',
                          },),
                        },),
                        className: 'framer-1qyytje',
                        'data-framer-name': 'supporting-text',
                        fonts: ['CUSTOM;PP Supply Sans Light',],
                        layoutDependency,
                        layoutId: 'gF58LoXMj',
                        style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                            /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-1kj1ldo',
                        'data-framer-name': 'Rectangle 8',
                        layoutDependency,
                        layoutId: 'z_lhUo_7q',
                        style: {
                          backgroundColor: 'rgb(205, 248, 255)',
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        },
                      },),
                      ],
                    },),
                    ],
                  },),
                },),
                  /* @__PURE__ */ _jsxs6(motion7.div, {
                  className: 'framer-101gxbs',
                  'data-framer-name': 'Actions',
                  layoutDependency,
                  layoutId: 'ncLLYMcQj',
                  children: [
                      /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-k8lsxt',
                    'data-framer-name': 'Icon button',
                    layoutDependency,
                    layoutId: 'mt4LTPa7S',
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-u4tus2',
                      'data-framer-name': 'container',
                      layoutDependency,
                      layoutId: 'lf97XrvaO',
                      style: {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-1nyjb26',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'B6RWHuxE2',
                        children: /* @__PURE__ */ _jsx8(motion7.div, {
                          className: 'framer-1t8lizg',
                          'data-framer-name': 'Icon',
                          layoutDependency,
                          layoutId: 'lRt_sjvrx',
                          children: /* @__PURE__ */ _jsx8(SVG6, {
                            className: 'framer-8qwf3t',
                            'data-framer-name': 'icon',
                            fill: 'rgba(0,0,0,1)',
                            intrinsicHeight: 20,
                            intrinsicWidth: 20,
                            layoutDependency,
                            layoutId: 'Xk9eJhGaU',
                            svg:
                              '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H4L2 16V2H18V14Z" fill="#3F484A"/>\n</svg>\n',
                            withExternalLayout: true,
                          },),
                        },),
                      },),
                    },),
                  },),
                      /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-td7305',
                    'data-framer-name': 'Actions',
                    layoutDependency,
                    layoutId: 'xykc2cmYt',
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-moaqya',
                      'data-framer-name': 'Primary button',
                      layoutDependency,
                      layoutId: 'Ap9JVtS8k',
                      style: {
                        backgroundColor: 'rgb(0, 105, 115)',
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: /* @__PURE__ */ _jsxs6(motion7.div, {
                        className: 'framer-191z50s',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'AgFOKnyWl',
                        children: [
                              /* @__PURE__ */ _jsx8(motion7.div, {
                          className: 'framer-1sofjn6',
                          'data-framer-name': 'icon',
                          layoutDependency,
                          layoutId: 'rqt1bS_FD',
                          children: /* @__PURE__ */ _jsx8(SVG6, {
                            className: 'framer-j61epy',
                            'data-framer-name': 'icon',
                            fill: 'rgba(0,0,0,1)',
                            intrinsicHeight: 11,
                            intrinsicWidth: 14,
                            layoutDependency,
                            layoutId: 'ZHhrdaBNV',
                            svg:
                              '<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4.75109 8.12738L1.62359 4.99988L0.558594 6.05738L4.75109 10.2499L13.7511 1.24988L12.6936 0.192383L4.75109 8.12738Z" fill="white"/>\n</svg>\n',
                            withExternalLayout: true,
                          },),
                        },),
                              /* @__PURE__ */ _jsx8(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                            children: /* @__PURE__ */ _jsx8(motion7.p, {
                              style: {
                                '--font-selector': 'R0Y7Um9ib3RvLTUwMA==',
                                '--framer-font-family': '"Roboto", "Roboto Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '500',
                                '--framer-letter-spacing': '0.1px',
                                '--framer-line-height': '20px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'OK',
                            },),
                          },),
                          className: 'framer-1558cx',
                          'data-framer-name': 'label-text',
                          fonts: ['GF;Roboto-500',],
                          layoutDependency,
                          layoutId: 'DchzKzVV6',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                        ],
                      },),
                    },),
                  },),
                  ],
                },),
                ],
              },),
            },),
            isDisplayed2() && /* @__PURE__ */ _jsxs6(motion7.div, {
              className: 'framer-6s0tzo',
              'data-framer-name': 'Layer 3',
              layoutDependency,
              layoutId: 'IhV5X0KRI',
              style: { filter: 'none', opacity: 1, rotate: 0, WebkitFilter: 'none', },
              variants: {
                bmOYz6gay: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                cq7D62bxc: { filter: 'blur(1px)', WebkitFilter: 'blur(1px)', },
                Cr5qNjOdj: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                fhIf6dGTg: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                gDTDJiCJ2: { filter: 'blur(5px)', rotate: -35, WebkitFilter: 'blur(5px)', },
                h124nvy2N: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                HAgS9njVa: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                kFGmGEOUz: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                l5FvQV66Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                NsO3auvSc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                p6HKTvlB3: { filter: 'blur(7px)', WebkitFilter: 'blur(7px)', },
                qT5kEYyp_: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                rfZM8jP4B: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                udHfq45LS: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                Ugn1WXH_Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                vhOykwvnY: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                Z1sTRLzN1: { filter: 'blur(1px)', WebkitFilter: 'blur(1px)', },
                ZNHbdIJKd: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              },
              children: [
                isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition22, }, h124nvy2N: { value: transition22, }, ZNHbdIJKd: { value: transition22, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-4b524j-container',
                    layoutDependency,
                    layoutId: 'WWuXDBWRZ-container',
                    style: { opacity: 1, },
                    variants: {
                      cg1e52nt2: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      QcEIwdpHn: { opacity: 0, },
                      udHfq45LS: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'WWuXDBWRZ',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'WWuXDBWRZ',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'vVjMhdARB',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                          h124nvy2N: { variant: 'K8oqZ2hdT', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                          l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                          qMUngWgkC: { variant: 'K8oqZ2hdT', },
                          qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                          r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'K8oqZ2hdT', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition22, }, h124nvy2N: { value: transition22, }, ZNHbdIJKd: { value: transition22, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-vvhei8-container',
                    layoutDependency,
                    layoutId: 'EiFaCbusC-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate3,
                    variants: {
                      cg1e52nt2: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      QcEIwdpHn: { opacity: 0, },
                      udHfq45LS: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        cg1e52nt2: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        HAgS9njVa: { transformTemplate: void 0, },
                        NsO3auvSc: { transformTemplate: void 0, },
                        QcEIwdpHn: { transformTemplate: void 0, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                        udHfq45LS: { transformTemplate: void 0, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'EiFaCbusC',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'EiFaCbusC',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'vVjMhdARB',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                          h124nvy2N: { variant: 'K8oqZ2hdT', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                          l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                          qMUngWgkC: { variant: 'K8oqZ2hdT', },
                          qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                          r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'K8oqZ2hdT', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition22, }, h124nvy2N: { value: transition22, }, ZNHbdIJKd: { value: transition22, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-d60suy-container',
                    layoutDependency,
                    layoutId: 'UrEVv8Wpi-container',
                    style: { opacity: 1, },
                    variants: {
                      cg1e52nt2: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      QcEIwdpHn: { opacity: 0, },
                      udHfq45LS: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'UrEVv8Wpi',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'UrEVv8Wpi',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'vVjMhdARB',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                          h124nvy2N: { variant: 'K8oqZ2hdT', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                          l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                          qMUngWgkC: { variant: 'K8oqZ2hdT', },
                          qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                          r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'K8oqZ2hdT', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1iaswxc-container',
                    layoutDependency,
                    layoutId: 'damywTtdg-container',
                    style: { opacity: 1, },
                    variants: { cg1e52nt2: { opacity: 0, }, QcEIwdpHn: { opacity: 0, }, udHfq45LS: { opacity: 0, }, },
                    ...addPropertyOverrides6(
                      {
                        cg1e52nt2: { transformTemplate: transformTemplate12, },
                        h124nvy2N: { transformTemplate: transformTemplate12, },
                        QcEIwdpHn: { transformTemplate: transformTemplate12, },
                        udHfq45LS: { transformTemplate: transformTemplate12, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'damywTtdg',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'damywTtdg',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'vVjMhdARB',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                          l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                          qMUngWgkC: { variant: 'K8oqZ2hdT', },
                          qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                          r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'K8oqZ2hdT', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-ereqn5-container',
                    layoutDependency,
                    layoutId: 'GNBmiGjGk-container',
                    style: { opacity: 1, },
                    variants: { cg1e52nt2: { opacity: 0, }, QcEIwdpHn: { opacity: 0, }, udHfq45LS: { opacity: 0, }, },
                    ...addPropertyOverrides6({ h124nvy2N: { transformTemplate: transformTemplate12, }, }, baseVariant, gestureVariant,),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'GNBmiGjGk',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'GNBmiGjGk',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'vVjMhdARB',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                          l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                          qMUngWgkC: { variant: 'K8oqZ2hdT', },
                          qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                          r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'K8oqZ2hdT', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition22, }, h124nvy2N: { value: transition22, }, ZNHbdIJKd: { value: transition22, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-8jq7kp-container',
                    layoutDependency,
                    layoutId: 'yT9ZoWJyq-container',
                    style: { opacity: 1, },
                    variants: {
                      cg1e52nt2: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      QcEIwdpHn: { opacity: 0, },
                      udHfq45LS: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        cg1e52nt2: { transformTemplate: transformTemplate3, },
                        QcEIwdpHn: { transformTemplate: transformTemplate3, },
                        udHfq45LS: { transformTemplate: transformTemplate3, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'yT9ZoWJyq',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'yT9ZoWJyq',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'vVjMhdARB',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                          h124nvy2N: { variant: 'K8oqZ2hdT', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                          l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                          qMUngWgkC: { variant: 'K8oqZ2hdT', },
                          qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                          r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'K8oqZ2hdT', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition22, }, h124nvy2N: { value: transition22, }, ZNHbdIJKd: { value: transition22, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-121179n-container',
                    layoutDependency,
                    layoutId: 'WKaH2EbbI-container',
                    style: { opacity: 1, },
                    variants: {
                      cg1e52nt2: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      QcEIwdpHn: { opacity: 0, },
                      udHfq45LS: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'WKaH2EbbI',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'WKaH2EbbI',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'vVjMhdARB',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                          h124nvy2N: { variant: 'K8oqZ2hdT', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                          l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                          qMUngWgkC: { variant: 'K8oqZ2hdT', },
                          qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                          r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'K8oqZ2hdT', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
              ],
            },),
            isDisplayed2() && /* @__PURE__ */ _jsx8(Transition6, {
              ...addPropertyOverrides6(
                { Cr5qNjOdj: { value: transition5, }, h124nvy2N: { value: transition5, }, ZNHbdIJKd: { value: transition5, }, },
                baseVariant,
                gestureVariant,
              ),
              children: /* @__PURE__ */ _jsxs6(motion7.div, {
                className: 'framer-1w2gq54',
                'data-framer-name': 'Layer 2',
                layoutDependency,
                layoutId: 'GuJgVxdD8',
                style: { filter: 'none', opacity: 1, rotate: 0, WebkitFilter: 'none', },
                variants: {
                  bmOYz6gay: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                  cq7D62bxc: { filter: 'blur(1px)', WebkitFilter: 'blur(1px)', },
                  Cr5qNjOdj: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  fhIf6dGTg: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  gDTDJiCJ2: { filter: 'blur(3px)', rotate: 11, WebkitFilter: 'blur(3px)', },
                  h124nvy2N: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  HAgS9njVa: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                  kFGmGEOUz: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  l5FvQV66Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  NsO3auvSc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  p6HKTvlB3: { filter: 'blur(5px)', WebkitFilter: 'blur(5px)', },
                  qT5kEYyp_: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  rfZM8jP4B: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  udHfq45LS: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  Ugn1WXH_Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  vhOykwvnY: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                  Z1sTRLzN1: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  ZNHbdIJKd: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                },
                children: [
                  isDisplayed4() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-1togqzb-container',
                      layoutDependency,
                      layoutId: 'HiU_aZKvz-container',
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'HiU_aZKvz',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'HiU_aZKvz',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'uTj0cEPb8',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            gDTDJiCJ2: { variant: 'vVjMhdARB', },
                            HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            kFGmGEOUz: { variant: 'vVjMhdARB', },
                            l5FvQV66Q: { variant: 'vVjMhdARB', },
                            NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            p6HKTvlB3: { variant: 'vVjMhdARB', },
                            qMUngWgkC: { variant: 'vVjMhdARB', },
                            qT5kEYyp_: { variant: 'vVjMhdARB', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            udHfq45LS: { variant: 'vVjMhdARB', },
                            Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Z1sTRLzN1: { style: { height: '100%', width: '100%', }, variant: 'vVjMhdARB', },
                            ZNHbdIJKd: { variant: 'vVjMhdARB', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed4() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-u2l7lb-container',
                      layoutDependency,
                      layoutId: 'R_SllmlLt-container',
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'R_SllmlLt',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'R_SllmlLt',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'uTj0cEPb8',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            gDTDJiCJ2: { variant: 'vVjMhdARB', },
                            HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            kFGmGEOUz: { variant: 'vVjMhdARB', },
                            l5FvQV66Q: { variant: 'vVjMhdARB', },
                            NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            p6HKTvlB3: { variant: 'vVjMhdARB', },
                            qMUngWgkC: { variant: 'vVjMhdARB', },
                            qT5kEYyp_: { variant: 'vVjMhdARB', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            udHfq45LS: { variant: 'vVjMhdARB', },
                            Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Z1sTRLzN1: { style: { height: '100%', width: '100%', }, variant: 'vVjMhdARB', },
                            ZNHbdIJKd: { variant: 'vVjMhdARB', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-dt1nri-container',
                    layoutDependency,
                    layoutId: 'AMZsQkyu0-container',
                    style: { opacity: 1, },
                    variants: { Cr5qNjOdj: { opacity: 0, }, h124nvy2N: { opacity: 0, }, ZNHbdIJKd: { opacity: 0, }, },
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'AMZsQkyu0',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'AMZsQkyu0',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uTj0cEPb8',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'vVjMhdARB', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'vVjMhdARB', },
                          h124nvy2N: { variant: 'vVjMhdARB', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'vVjMhdARB', },
                          l5FvQV66Q: { variant: 'vVjMhdARB', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'vVjMhdARB', },
                          qMUngWgkC: { variant: 'vVjMhdARB', },
                          qT5kEYyp_: { variant: 'vVjMhdARB', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'vVjMhdARB', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { style: { height: '100%', }, variant: 'vVjMhdARB', },
                          ZNHbdIJKd: { variant: 'vVjMhdARB', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-vm0lt-container',
                    layoutDependency,
                    layoutId: 'CNXy5TkRd-container',
                    style: { opacity: 1, },
                    variants: { Cr5qNjOdj: { opacity: 0, }, h124nvy2N: { opacity: 0, }, ZNHbdIJKd: { opacity: 0, }, },
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'CNXy5TkRd',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'CNXy5TkRd',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uTj0cEPb8',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'vVjMhdARB', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'vVjMhdARB', },
                          h124nvy2N: { variant: 'vVjMhdARB', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'vVjMhdARB', },
                          l5FvQV66Q: { variant: 'vVjMhdARB', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'vVjMhdARB', },
                          qMUngWgkC: { variant: 'vVjMhdARB', },
                          qT5kEYyp_: { variant: 'vVjMhdARB', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'vVjMhdARB', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { style: { height: '100%', }, variant: 'vVjMhdARB', },
                          ZNHbdIJKd: { variant: 'vVjMhdARB', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1xv0t2j-container',
                    layoutDependency,
                    layoutId: 'nDR3RU8yt-container',
                    style: { opacity: 1, },
                    variants: { Cr5qNjOdj: { opacity: 0, }, h124nvy2N: { opacity: 0, }, ZNHbdIJKd: { opacity: 0, }, },
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'nDR3RU8yt',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'nDR3RU8yt',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uTj0cEPb8',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'vVjMhdARB', },
                          fhIf6dGTg: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'vVjMhdARB', },
                          h124nvy2N: { variant: 'vVjMhdARB', },
                          HAgS9njVa: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'vVjMhdARB', },
                          l5FvQV66Q: { variant: 'vVjMhdARB', },
                          NsO3auvSc: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'vVjMhdARB', },
                          qMUngWgkC: { variant: 'vVjMhdARB', },
                          qT5kEYyp_: { variant: 'vVjMhdARB', },
                          rfZM8jP4B: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'vVjMhdARB', },
                          Ugn1WXH_Q: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { style: { height: '100%', }, variant: 'vVjMhdARB', },
                          ZNHbdIJKd: { variant: 'vVjMhdARB', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-lc2jrz-container',
                    layoutDependency,
                    layoutId: 'G5F6iqn5_-container',
                    style: { opacity: 0.36, },
                    variants: {
                      bmOYz6gay: { opacity: 1, },
                      cg1e52nt2: { opacity: 1, },
                      Cr5qNjOdj: { opacity: 0, },
                      fhIf6dGTg: { opacity: 1, },
                      gDTDJiCJ2: { opacity: 1, },
                      h124nvy2N: { opacity: 0, },
                      HAgS9njVa: { opacity: 1, },
                      kFGmGEOUz: { opacity: 1, },
                      l5FvQV66Q: { opacity: 1, },
                      NsO3auvSc: { opacity: 1, },
                      p6HKTvlB3: { opacity: 1, },
                      QcEIwdpHn: { opacity: 1, },
                      qMUngWgkC: { opacity: 1, },
                      qT5kEYyp_: { opacity: 1, },
                      r8IR85ZDv: { opacity: 1, },
                      rfZM8jP4B: { opacity: 1, },
                      udHfq45LS: { opacity: 1, },
                      Ugn1WXH_Q: { opacity: 1, },
                      vhOykwvnY: { opacity: 1, },
                      Z1sTRLzN1: { opacity: 1, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'G5F6iqn5_',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'G5F6iqn5_',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uTj0cEPb8',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'vVjMhdARB', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'vVjMhdARB', },
                          h124nvy2N: { variant: 'vVjMhdARB', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'vVjMhdARB', },
                          l5FvQV66Q: { variant: 'vVjMhdARB', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'vVjMhdARB', },
                          qMUngWgkC: { variant: 'vVjMhdARB', },
                          qT5kEYyp_: { variant: 'vVjMhdARB', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'vVjMhdARB', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { variant: 'vVjMhdARB', },
                          ZNHbdIJKd: { variant: 'vVjMhdARB', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-15swu5u-container',
                    layoutDependency,
                    layoutId: 'H154cZRUZ-container',
                    style: { opacity: 1, },
                    variants: { Cr5qNjOdj: { opacity: 0, }, h124nvy2N: { opacity: 0, }, ZNHbdIJKd: { opacity: 0, }, },
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'H154cZRUZ',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'H154cZRUZ',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uTj0cEPb8',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { variant: 'vVjMhdARB', },
                          fhIf6dGTg: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'vVjMhdARB', },
                          h124nvy2N: { variant: 'vVjMhdARB', },
                          HAgS9njVa: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'vVjMhdARB', },
                          l5FvQV66Q: { variant: 'vVjMhdARB', },
                          NsO3auvSc: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'vVjMhdARB', },
                          qMUngWgkC: { variant: 'vVjMhdARB', },
                          qT5kEYyp_: { variant: 'vVjMhdARB', },
                          rfZM8jP4B: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'vVjMhdARB', },
                          Ugn1WXH_Q: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { style: { height: '100%', }, variant: 'vVjMhdARB', },
                          ZNHbdIJKd: { variant: 'vVjMhdARB', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                ],
              },),
            },),
            /* @__PURE__ */ _jsx8(Transition6, {
              ...addPropertyOverrides6(
                {
                  Cr5qNjOdj: { value: transition7, },
                  h124nvy2N: { value: transition7, },
                  HovROSEim: { value: transition6, },
                  ZNHbdIJKd: { value: transition7, },
                },
                baseVariant,
                gestureVariant,
              ),
              children: /* @__PURE__ */ _jsxs6(motion7.div, {
                className: 'framer-ywbmcs',
                'data-framer-name': 'Layer 1',
                layoutDependency,
                layoutId: 'ETAGciIqA',
                style: { filter: 'none', opacity: 1, rotate: 0, WebkitFilter: 'none', },
                variants: {
                  bmOYz6gay: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                  cq7D62bxc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  Cr5qNjOdj: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  fhIf6dGTg: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  gDTDJiCJ2: { filter: 'blur(1px)', rotate: 64, WebkitFilter: 'blur(1px)', },
                  h124nvy2N: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  HAgS9njVa: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                  kFGmGEOUz: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  l5FvQV66Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  NsO3auvSc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  p6HKTvlB3: { filter: 'blur(3px)', WebkitFilter: 'blur(3px)', },
                  qT5kEYyp_: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  rfZM8jP4B: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  udHfq45LS: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  Ugn1WXH_Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  vhOykwvnY: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                  Z1sTRLzN1: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  ZNHbdIJKd: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                },
                children: [
                  /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6({ Z1sTRLzN1: { value: transition8, }, }, baseVariant, gestureVariant,),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1egxi8f-container',
                    layoutDependency,
                    layoutId: 'D5EbKbo6S-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate22,
                    variants: {
                      cq7D62bxc: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      Du1gnhwdF: { opacity: 0, },
                      dVLWELU6e: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      HovROSEim: { opacity: 0, },
                      lBUZui6j9: { opacity: 0, },
                      MX2TbvLxw: { opacity: 0, },
                      QkfIEoKbU: { opacity: 0, },
                      vf_oeYc8q: { opacity: 0, },
                      XACXI8mDn: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        HAgS9njVa: { transformTemplate: void 0, },
                        NsO3auvSc: { transformTemplate: void 0, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'D5EbKbo6S',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'D5EbKbo6S',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uyxhsUNZq',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          cq7D62bxc: { variant: 'uTj0cEPb8', },
                          Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'uTj0cEPb8', },
                          l5FvQV66Q: { variant: 'uTj0cEPb8', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'uTj0cEPb8', },
                          qMUngWgkC: { variant: 'uTj0cEPb8', },
                          qT5kEYyp_: { variant: 'uTj0cEPb8', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'uTj0cEPb8', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                          ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                  isDisplayed5() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Du1gnhwdF: { value: transition9, }, MX2TbvLxw: { value: transition9, }, Z1sTRLzN1: { value: transition8, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-xsw623-container',
                      layoutDependency,
                      layoutId: 'RmjeBraiJ-container',
                      style: { opacity: 1, },
                      transformTemplate: transformTemplate22,
                      variants: {
                        cq7D62bxc: { opacity: 0, },
                        Cr5qNjOdj: { opacity: 0, },
                        dVLWELU6e: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        HovROSEim: { opacity: 0, },
                        lBUZui6j9: { opacity: 0, },
                        vf_oeYc8q: { opacity: 0, },
                        XACXI8mDn: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6(
                        {
                          aOPZX8nJO: { transformTemplate: void 0, },
                          Du1gnhwdF: { transformTemplate: void 0, },
                          fhIf6dGTg: { transformTemplate: void 0, },
                          MX2TbvLxw: { transformTemplate: void 0, },
                          ovIpGU7cl: { transformTemplate: void 0, },
                          QkfIEoKbU: { transformTemplate: void 0, },
                          rfZM8jP4B: { transformTemplate: void 0, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'RmjeBraiJ',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'RmjeBraiJ',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'uyxhsUNZq',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            aOPZX8nJO: {
                              NvMMjvlBy: 'Describe the primary goal of your tool.',
                              variant: 'PvhAKPvc8',
                              VOTcq87Vu: false,
                              vZATQhujj: 'Define Primary Goal',
                            },
                            cq7D62bxc: { variant: 'uTj0cEPb8', },
                            Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                            Du1gnhwdF: {
                              LNNJy1jnm: 'pXF5zK4BB',
                              NvMMjvlBy: 'Describe the primary goal of your tool.',
                              variant: 'Cr7AsQCPR',
                              VOTcq87Vu: false,
                              vZATQhujj: 'Define Primary Goal',
                              zgF6TYXbc: 'nWf8FHUKr',
                            },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                            h124nvy2N: { variant: 'uTj0cEPb8', },
                            kFGmGEOUz: { variant: 'uTj0cEPb8', },
                            l5FvQV66Q: { variant: 'uTj0cEPb8', },
                            MX2TbvLxw: {
                              k4ezTegiq: 80,
                              LNNJy1jnm: 'pXF5zK4BB',
                              NvMMjvlBy: 'Describe the primary goal of your tool.',
                              variant: 'Cr7AsQCPR',
                              VOTcq87Vu: false,
                              vZATQhujj: 'Define Primary Goal',
                              zgF6TYXbc: 'nWf8FHUKr',
                            },
                            ovIpGU7cl: {
                              NvMMjvlBy: 'Describe the primary goal of your tool.',
                              variant: 'PvhAKPvc8',
                              vZATQhujj: 'Define Primary Goal',
                            },
                            p6HKTvlB3: { variant: 'uTj0cEPb8', },
                            QkfIEoKbU: {
                              LNNJy1jnm: 'pXF5zK4BB',
                              NvMMjvlBy: 'Describe the primary goal of your tool.',
                              variant: 'Cr7AsQCPR',
                              VOTcq87Vu: false,
                              vZATQhujj: 'Define Primary Goal',
                              zgF6TYXbc: 'nWf8FHUKr',
                            },
                            qMUngWgkC: { variant: 'uTj0cEPb8', },
                            qT5kEYyp_: { variant: 'uTj0cEPb8', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            udHfq45LS: { variant: 'uTj0cEPb8', },
                            Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                            ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6({ Z1sTRLzN1: { value: transition8, }, }, baseVariant, gestureVariant,),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-15gph2n-container',
                      layoutDependency,
                      layoutId: 'h6Nd9WFsm-container',
                      style: { opacity: 1, },
                      transformTemplate: transformTemplate22,
                      variants: {
                        cq7D62bxc: { opacity: 0, },
                        Cr5qNjOdj: { opacity: 0, },
                        Du1gnhwdF: { opacity: 0, },
                        dVLWELU6e: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        HovROSEim: { opacity: 0, },
                        lBUZui6j9: { opacity: 0, },
                        MX2TbvLxw: { opacity: 0, },
                        QkfIEoKbU: { opacity: 0, },
                        vf_oeYc8q: { opacity: 0, },
                        XACXI8mDn: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { transformTemplate: void 0, },
                          fhIf6dGTg: { transformTemplate: void 0, },
                          HAgS9njVa: { transformTemplate: void 0, },
                          NsO3auvSc: { transformTemplate: void 0, },
                          rfZM8jP4B: { transformTemplate: void 0, },
                          Ugn1WXH_Q: { transformTemplate: void 0, },
                          vhOykwvnY: { transformTemplate: void 0, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'h6Nd9WFsm',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'h6Nd9WFsm',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'uyxhsUNZq',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            cq7D62bxc: { variant: 'uTj0cEPb8', },
                            Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                            h124nvy2N: { variant: 'uTj0cEPb8', },
                            HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            kFGmGEOUz: { variant: 'uTj0cEPb8', },
                            l5FvQV66Q: { variant: 'uTj0cEPb8', },
                            NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            p6HKTvlB3: { variant: 'uTj0cEPb8', },
                            qMUngWgkC: { variant: 'uTj0cEPb8', },
                            qT5kEYyp_: { variant: 'uTj0cEPb8', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            udHfq45LS: { variant: 'uTj0cEPb8', },
                            Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                            ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6({ Z1sTRLzN1: { value: transition8, }, }, baseVariant, gestureVariant,),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-yox9q5-container',
                      layoutDependency,
                      layoutId: 'tExCQhNKD-container',
                      style: { opacity: 1, },
                      transformTemplate: transformTemplate22,
                      variants: {
                        cq7D62bxc: { opacity: 0, },
                        Cr5qNjOdj: { opacity: 0, },
                        Du1gnhwdF: { opacity: 0, },
                        dVLWELU6e: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        HovROSEim: { opacity: 0, },
                        lBUZui6j9: { opacity: 0, },
                        MX2TbvLxw: { opacity: 0, },
                        QkfIEoKbU: { opacity: 0, },
                        vf_oeYc8q: { opacity: 0, },
                        XACXI8mDn: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { transformTemplate: void 0, },
                          fhIf6dGTg: { transformTemplate: void 0, },
                          HAgS9njVa: { transformTemplate: void 0, },
                          NsO3auvSc: { transformTemplate: void 0, },
                          rfZM8jP4B: { transformTemplate: void 0, },
                          Ugn1WXH_Q: { transformTemplate: void 0, },
                          vhOykwvnY: { transformTemplate: void 0, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'tExCQhNKD',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'tExCQhNKD',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'uyxhsUNZq',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            cq7D62bxc: { variant: 'uTj0cEPb8', },
                            Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                            h124nvy2N: { variant: 'uTj0cEPb8', },
                            HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            kFGmGEOUz: { variant: 'uTj0cEPb8', },
                            l5FvQV66Q: { variant: 'uTj0cEPb8', },
                            NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            p6HKTvlB3: { variant: 'uTj0cEPb8', },
                            qMUngWgkC: { variant: 'uTj0cEPb8', },
                            qT5kEYyp_: { variant: 'uTj0cEPb8', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            udHfq45LS: { variant: 'uTj0cEPb8', },
                            Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                            ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6({ Z1sTRLzN1: { value: transition8, }, }, baseVariant, gestureVariant,),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-17glung-container',
                      layoutDependency,
                      layoutId: 'H9WPJC9De-container',
                      style: { opacity: 1, },
                      variants: {
                        cq7D62bxc: { opacity: 0, },
                        Cr5qNjOdj: { opacity: 0, },
                        Du1gnhwdF: { opacity: 0, },
                        dVLWELU6e: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        HovROSEim: { opacity: 0, },
                        lBUZui6j9: { opacity: 0, },
                        MX2TbvLxw: { opacity: 0, },
                        QkfIEoKbU: { opacity: 0, },
                        vf_oeYc8q: { opacity: 0, },
                        XACXI8mDn: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6(
                        {
                          cq7D62bxc: { transformTemplate: transformTemplate22, },
                          dVLWELU6e: { transformTemplate: transformTemplate22, },
                          HovROSEim: { transformTemplate: transformTemplate22, },
                          lBUZui6j9: { transformTemplate: transformTemplate22, },
                          vf_oeYc8q: { transformTemplate: transformTemplate22, },
                          XACXI8mDn: { transformTemplate: transformTemplate22, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'H9WPJC9De',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'H9WPJC9De',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'uyxhsUNZq',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            cq7D62bxc: { variant: 'uTj0cEPb8', },
                            Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                            h124nvy2N: { variant: 'uTj0cEPb8', },
                            HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            kFGmGEOUz: { variant: 'uTj0cEPb8', },
                            l5FvQV66Q: { variant: 'uTj0cEPb8', },
                            NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            p6HKTvlB3: { variant: 'uTj0cEPb8', },
                            qMUngWgkC: { variant: 'uTj0cEPb8', },
                            qT5kEYyp_: { variant: 'uTj0cEPb8', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            udHfq45LS: { variant: 'uTj0cEPb8', },
                            Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                            ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Du1gnhwdF: { value: transition9, }, MX2TbvLxw: { value: transition9, }, Z1sTRLzN1: { value: transition8, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-n0gl4w-container',
                      layoutDependency,
                      layoutId: 'ZymjGBNkx-container',
                      style: { opacity: 1, },
                      transformTemplate: transformTemplate22,
                      variants: {
                        cq7D62bxc: { opacity: 0, },
                        Cr5qNjOdj: { opacity: 0, },
                        dVLWELU6e: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        HovROSEim: { opacity: 0, },
                        lBUZui6j9: { opacity: 0, },
                        vf_oeYc8q: { opacity: 0, },
                        XACXI8mDn: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6(
                        {
                          aOPZX8nJO: { transformTemplate: void 0, },
                          bmOYz6gay: { transformTemplate: void 0, },
                          Du1gnhwdF: { transformTemplate: void 0, },
                          fhIf6dGTg: { transformTemplate: void 0, },
                          HAgS9njVa: { transformTemplate: void 0, },
                          MX2TbvLxw: { transformTemplate: void 0, },
                          NsO3auvSc: { transformTemplate: void 0, },
                          QkfIEoKbU: { transformTemplate: void 0, },
                          rfZM8jP4B: { transformTemplate: void 0, },
                          Ugn1WXH_Q: { transformTemplate: void 0, },
                          vhOykwvnY: { transformTemplate: void 0, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'ZymjGBNkx',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'ZymjGBNkx',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'uyxhsUNZq',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            aOPZX8nJO: {
                              NvMMjvlBy: 'Select whether the tool is a physical device or a software application.',
                              variant: 'PvhAKPvc8',
                              vZATQhujj: 'Hardware or Software',
                            },
                            bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            cq7D62bxc: { variant: 'uTj0cEPb8', },
                            Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                            Du1gnhwdF: {
                              C0xbi_CXP: 'Software',
                              Jdv7M1lr6: 'Hardware',
                              k4ezTegiq: 80,
                              LNNJy1jnm: 'R8yTQtly5',
                              NvMMjvlBy: 'Select whether the tool is a physical device or a software application.',
                              variant: 'Cr7AsQCPR',
                              VOTcq87Vu: false,
                              vZATQhujj: 'Hardware or Software',
                              zgF6TYXbc: 'IHKJNDltd',
                            },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                            h124nvy2N: { variant: 'uTj0cEPb8', },
                            HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            kFGmGEOUz: { variant: 'uTj0cEPb8', },
                            l5FvQV66Q: { variant: 'uTj0cEPb8', },
                            MX2TbvLxw: {
                              C0xbi_CXP: 'Software',
                              Jdv7M1lr6: 'Hardware',
                              JM8R5zcqV: true,
                              k4ezTegiq: 80,
                              LNNJy1jnm: 'R8yTQtly5',
                              NvMMjvlBy: 'Select whether the tool is a physical device or a software application.',
                              variant: 'Cr7AsQCPR',
                              VOTcq87Vu: false,
                              vZATQhujj: 'Hardware or Software',
                              zgF6TYXbc: 'IHKJNDltd',
                            },
                            NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            p6HKTvlB3: { variant: 'uTj0cEPb8', },
                            QkfIEoKbU: {
                              C0xbi_CXP: 'Software',
                              Jdv7M1lr6: 'Hardware',
                              k4ezTegiq: 40,
                              LNNJy1jnm: 'R8yTQtly5',
                              NvMMjvlBy: 'Select whether the tool is a physical device or a software application.',
                              qQ_BO9qk8: '',
                              variant: 'Cr7AsQCPR',
                              VOTcq87Vu: false,
                              vZATQhujj: 'Hardware or Software',
                              zgF6TYXbc: 'IHKJNDltd',
                            },
                            qMUngWgkC: { variant: 'uTj0cEPb8', },
                            qT5kEYyp_: { variant: 'uTj0cEPb8', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            udHfq45LS: { variant: 'uTj0cEPb8', },
                            Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                            ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed6() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Du1gnhwdF: { value: transition9, }, MX2TbvLxw: { value: transition9, }, Z1sTRLzN1: { value: transition8, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-10kjnxc-container',
                      layoutDependency,
                      layoutId: 'w3kNSZaAk-container',
                      style: { opacity: 1, },
                      transformTemplate: transformTemplate22,
                      variants: {
                        cq7D62bxc: { opacity: 0, },
                        dVLWELU6e: { opacity: 0, },
                        HovROSEim: { opacity: 0, },
                        lBUZui6j9: { opacity: 0, },
                        vf_oeYc8q: { opacity: 0, },
                        XACXI8mDn: { opacity: 0, },
                      },
                      ...addPropertyOverrides6(
                        {
                          aOPZX8nJO: { transformTemplate: void 0, },
                          bmOYz6gay: { transformTemplate: void 0, },
                          Du1gnhwdF: { transformTemplate: void 0, },
                          fhIf6dGTg: { transformTemplate: void 0, },
                          HAgS9njVa: { transformTemplate: void 0, },
                          MX2TbvLxw: { transformTemplate: void 0, },
                          NsO3auvSc: { transformTemplate: void 0, },
                          ovIpGU7cl: { transformTemplate: transformTemplate12, },
                          QkfIEoKbU: { transformTemplate: void 0, },
                          rfZM8jP4B: { transformTemplate: void 0, },
                          Ugn1WXH_Q: { transformTemplate: void 0, },
                          vhOykwvnY: { transformTemplate: void 0, },
                          Wzv1r0oKb: { transformTemplate: void 0, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'w3kNSZaAk',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'w3kNSZaAk',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'uyxhsUNZq',
                        VOTcq87Vu: false,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            aOPZX8nJO: {
                              NvMMjvlBy: 'What area of cognition do you want to improve?',
                              variant: 'PvhAKPvc8',
                              vZATQhujj: 'Select Cognitive Area',
                            },
                            bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            cq7D62bxc: { variant: 'uTj0cEPb8', },
                            Du1gnhwdF: {
                              eZ_WIO8yz: 'Language',
                              JM8R5zcqV: true,
                              LNNJy1jnm: 'hjUA_q4Xo',
                              NvMMjvlBy: 'What area of cognition do you want to improve?',
                              OJMet4Rjs: 'Memory',
                              qQ_BO9qk8: 'Perception',
                              variant: 'Cr7AsQCPR',
                              vZATQhujj: 'Select Cognitive Area',
                            },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                            HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            kFGmGEOUz: { variant: 'uTj0cEPb8', },
                            l5FvQV66Q: { variant: 'uTj0cEPb8', },
                            MX2TbvLxw: {
                              eZ_WIO8yz: 'Language',
                              JM8R5zcqV: true,
                              K5BysgXsx: 's7bcrIMxH',
                              LNNJy1jnm: 'hjUA_q4Xo',
                              NvMMjvlBy: 'What area of cognition do you want to improve?',
                              OJMet4Rjs: 'Memory',
                              qQ_BO9qk8: 'Perception',
                              variant: 'Cr7AsQCPR',
                              vZATQhujj: 'Select Cognitive Area',
                            },
                            NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            ovIpGU7cl: {
                              NvMMjvlBy: 'What area of cognition do you want to improve?',
                              variant: 'PvhAKPvc8',
                              vZATQhujj: 'Select Cognitive Area',
                            },
                            p6HKTvlB3: { variant: 'uTj0cEPb8', },
                            QkfIEoKbU: {
                              eZ_WIO8yz: 'Language',
                              JM8R5zcqV: true,
                              LNNJy1jnm: 'hjUA_q4Xo',
                              NvMMjvlBy: 'What area of cognition do you want to improve?',
                              OJMet4Rjs: 'Memory',
                              qQ_BO9qk8: 'Perception',
                              variant: 'Cr7AsQCPR',
                              vZATQhujj: 'Select Cognitive Area',
                            },
                            qMUngWgkC: { variant: 'uTj0cEPb8', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            udHfq45LS: { variant: 'uTj0cEPb8', },
                            Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Wzv1r0oKb: {
                              NvMMjvlBy: 'What area of cognition do you want to improve?',
                              variant: 'PvhAKPvc8',
                              VOTcq87Vu: true,
                              vZATQhujj: 'Select Cognitive Area',
                            },
                            Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                ],
              },),
            },),
            isDisplayed7() && /* @__PURE__ */ _jsx8(motion7.div, {
              className: 'framer-1mvnusd',
              'data-framer-name': 'Layer 4',
              layoutDependency,
              layoutId: 'mtEkOBUqz',
              style: { opacity: 1, rotate: 0, },
              variants: {
                bmOYz6gay: { opacity: 0, },
                gDTDJiCJ2: { rotate: -86, },
                HAgS9njVa: { opacity: 0, },
                qMUngWgkC: { opacity: 0, },
                vhOykwvnY: { opacity: 0, },
              },
              children: isDisplayed7() && /* @__PURE__ */ _jsxs6(motion7.div, {
                className: 'framer-1k3vrbv',
                layoutDependency,
                layoutId: 'CMunQga3Q',
                style: { filter: 'blur(7px)', opacity: 1, WebkitFilter: 'blur(7px)', },
                variants: {
                  bmOYz6gay: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  cq7D62bxc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  Cr5qNjOdj: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  fhIf6dGTg: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  h124nvy2N: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  HAgS9njVa: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  kFGmGEOUz: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  l5FvQV66Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  NsO3auvSc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  p6HKTvlB3: { filter: 'blur(9px)', WebkitFilter: 'blur(9px)', },
                  qMUngWgkC: { opacity: 0, },
                  qT5kEYyp_: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  rfZM8jP4B: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  udHfq45LS: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  Ugn1WXH_Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  vhOykwvnY: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  Z1sTRLzN1: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                  ZNHbdIJKd: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                },
                children: [
                  isDisplayed8() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { h124nvy2N: { value: transition10, }, ZNHbdIJKd: { value: transition10, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-gkoso3-container',
                      layoutDependency,
                      layoutId: 'xDNxvPTdp-container',
                      style: { opacity: 1, },
                      variants: {
                        Cr5qNjOdj: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        l5FvQV66Q: { opacity: 0, },
                        qMUngWgkC: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6({ r8IR85ZDv: { transformTemplate: transformTemplate22, }, }, baseVariant, gestureVariant,),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'xDNxvPTdp',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'xDNxvPTdp',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'QKKRwxza_',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: {
                              cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            fhIf6dGTg: {
                              cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            HAgS9njVa: {
                              cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            NsO3auvSc: {
                              cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            rfZM8jP4B: {
                              cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            Ugn1WXH_Q: {
                              cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            vhOykwvnY: {
                              cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed8() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { h124nvy2N: { value: transition10, }, ZNHbdIJKd: { value: transition10, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-1yvmtw8-container',
                      layoutDependency,
                      layoutId: 'wvz648S9W-container',
                      style: { opacity: 1, },
                      variants: {
                        Cr5qNjOdj: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        l5FvQV66Q: { opacity: 0, },
                        qMUngWgkC: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6({ r8IR85ZDv: { transformTemplate: transformTemplate22, }, }, baseVariant, gestureVariant,),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'wvz648S9W',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'wvz648S9W',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'QKKRwxza_',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: {
                              cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            fhIf6dGTg: {
                              cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            HAgS9njVa: {
                              cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            NsO3auvSc: {
                              cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            rfZM8jP4B: {
                              cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            Ugn1WXH_Q: {
                              cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            vhOykwvnY: {
                              cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed8() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-w97bgk-container',
                      layoutDependency,
                      layoutId: 'WjMMah5to-container',
                      style: { opacity: 1, },
                      variants: { l5FvQV66Q: { opacity: 0, }, qMUngWgkC: { opacity: 0, }, },
                      ...addPropertyOverrides6(
                        { h124nvy2N: { transformTemplate: transformTemplate12, }, r8IR85ZDv: { transformTemplate: transformTemplate22, }, },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'WjMMah5to',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'WjMMah5to',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'QKKRwxza_',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: {
                              cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                            fhIf6dGTg: {
                              cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            h124nvy2N: { variant: 'uTj0cEPb8', },
                            HAgS9njVa: {
                              cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            NsO3auvSc: {
                              cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            rfZM8jP4B: {
                              cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            Ugn1WXH_Q: {
                              cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            vhOykwvnY: {
                              cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed8() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-fpq9rw-container',
                      layoutDependency,
                      layoutId: 'djTUjO54n-container',
                      style: { opacity: 1, },
                      transformTemplate: transformTemplate3,
                      variants: { l5FvQV66Q: { opacity: 0, }, qMUngWgkC: { opacity: 0, }, },
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { transformTemplate: void 0, },
                          Cr5qNjOdj: { transformTemplate: void 0, },
                          fhIf6dGTg: { transformTemplate: void 0, },
                          h124nvy2N: { transformTemplate: transformTemplate12, },
                          HAgS9njVa: { transformTemplate: void 0, },
                          l5FvQV66Q: { transformTemplate: void 0, },
                          NsO3auvSc: { transformTemplate: void 0, },
                          qMUngWgkC: { transformTemplate: void 0, },
                          r8IR85ZDv: { transformTemplate: transformTemplate22, },
                          rfZM8jP4B: { transformTemplate: void 0, },
                          Ugn1WXH_Q: { transformTemplate: void 0, },
                          vhOykwvnY: { transformTemplate: void 0, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'djTUjO54n',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'djTUjO54n',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'QKKRwxza_',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: {
                              cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                            fhIf6dGTg: {
                              cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            h124nvy2N: { variant: 'uTj0cEPb8', },
                            HAgS9njVa: {
                              cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            NsO3auvSc: {
                              cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            rfZM8jP4B: {
                              cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            Ugn1WXH_Q: {
                              cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            vhOykwvnY: {
                              cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed8() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, ZNHbdIJKd: { value: transition10, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-160pc9z-container',
                      layoutDependency,
                      layoutId: 'xJw0y7a7r-container',
                      style: { opacity: 1, },
                      variants: { l5FvQV66Q: { opacity: 0, }, qMUngWgkC: { opacity: 0, }, },
                      ...addPropertyOverrides6(
                        { h124nvy2N: { transformTemplate: transformTemplate12, }, r8IR85ZDv: { transformTemplate: transformTemplate22, }, },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'xJw0y7a7r',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'xJw0y7a7r',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'QKKRwxza_',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                            fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            h124nvy2N: { variant: 'uTj0cEPb8', },
                            HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                            vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed8() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { h124nvy2N: { value: transition10, }, ZNHbdIJKd: { value: transition10, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-1jw6h9g-container',
                      layoutDependency,
                      layoutId: 'fbzUeHx9R-container',
                      style: { opacity: 1, },
                      variants: {
                        Cr5qNjOdj: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        l5FvQV66Q: { opacity: 0, },
                        qMUngWgkC: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6(
                        {
                          l5FvQV66Q: { transformTemplate: transformTemplate12, },
                          qMUngWgkC: { transformTemplate: transformTemplate12, },
                          r8IR85ZDv: { transformTemplate: transformTemplate22, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'fbzUeHx9R',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'fbzUeHx9R',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'QKKRwxza_',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: {
                              cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            fhIf6dGTg: {
                              cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            HAgS9njVa: {
                              cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            NsO3auvSc: {
                              cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            rfZM8jP4B: {
                              cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            Ugn1WXH_Q: {
                              cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            vhOykwvnY: {
                              cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed8() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { h124nvy2N: { value: transition10, }, ZNHbdIJKd: { value: transition10, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-1igj8fa-container',
                      layoutDependency,
                      layoutId: 'tvs76iJpG-container',
                      style: { opacity: 1, },
                      variants: {
                        Cr5qNjOdj: { opacity: 0, },
                        h124nvy2N: { opacity: 0, },
                        l5FvQV66Q: { opacity: 0, },
                        qMUngWgkC: { opacity: 0, },
                        ZNHbdIJKd: { opacity: 0, },
                      },
                      ...addPropertyOverrides6(
                        {
                          l5FvQV66Q: { transformTemplate: transformTemplate3, },
                          qMUngWgkC: { transformTemplate: transformTemplate3, },
                          r8IR85ZDv: { transformTemplate: transformTemplate22, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx8(stdin_default6, {
                        bGyluXMcm: 'C-2',
                        C0xbi_CXP: 'B',
                        cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                        eZ_WIO8yz: 'Choice 3',
                        fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        Gb15ibvMU: 'wZ2vnzihB',
                        height: '100%',
                        id: 'tvs76iJpG',
                        iDjlfHFIv: 'C-2',
                        Jdv7M1lr6: 'A',
                        JM8R5zcqV: false,
                        k4ezTegiq: 50,
                        K5BysgXsx: 'zAJDHJhkW',
                        layoutId: 'tvs76iJpG',
                        LNNJy1jnm: 'FNw58JHcH',
                        NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                        OJMet4Rjs: 'Choice 1',
                        qQ_BO9qk8: 'Choice 2',
                        TTpsRmZqr: true,
                        variant: 'QKKRwxza_',
                        VOTcq87Vu: true,
                        vZATQhujj: 'Board Dimensions',
                        width: '100%',
                        Xo22rvSfa: 'B-2',
                        Z93yscm8P: 'A-1',
                        zgF6TYXbc: 'LNmrAjenO',
                        ...addPropertyOverrides6(
                          {
                            bmOYz6gay: {
                              cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            fhIf6dGTg: {
                              cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            HAgS9njVa: {
                              cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            NsO3auvSc: {
                              cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            rfZM8jP4B: {
                              cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            Ugn1WXH_Q: {
                              cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
                            },
                            vhOykwvnY: {
                              cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                              style: { width: '100%', },
                              variant: 'FXIjKjDPL',
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
            },),
            isDisplayed9() && /* @__PURE__ */ _jsx8(motion7.div, {
              className: 'framer-1jstyen-container',
              layoutDependency,
              layoutId: 'uG8Z9CRoe-container',
              style: { opacity: 1, },
              variants: { qMUngWgkC: { opacity: 0, }, },
              ...addPropertyOverrides6({ qMUngWgkC: { transformTemplate: transformTemplate22, }, }, baseVariant, gestureVariant,),
              children: /* @__PURE__ */ _jsx8(stdin_default6, {
                bGyluXMcm: 'C-2',
                C0xbi_CXP: 'B',
                cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                eZ_WIO8yz: 'Choice 3',
                fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                Gb15ibvMU: 'wZ2vnzihB',
                height: '100%',
                id: 'uG8Z9CRoe',
                iDjlfHFIv: 'C-2',
                Jdv7M1lr6: 'A',
                JM8R5zcqV: false,
                k4ezTegiq: 50,
                K5BysgXsx: 'zAJDHJhkW',
                layoutId: 'uG8Z9CRoe',
                LNNJy1jnm: 'FNw58JHcH',
                NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                OJMet4Rjs: 'Choice 1',
                qQ_BO9qk8: 'Choice 2',
                TTpsRmZqr: true,
                variant: 'l6T5PxAnq',
                VOTcq87Vu: true,
                vZATQhujj: 'Board Dimensions',
                width: '100%',
                Xo22rvSfa: 'B-2',
                Z93yscm8P: 'A-1',
                zgF6TYXbc: 'LNmrAjenO',
                ...addPropertyOverrides6({ qMUngWgkC: { variant: 'K8oqZ2hdT', }, }, baseVariant, gestureVariant,),
              },),
            },),
            isDisplayed10() && /* @__PURE__ */ _jsx8(Transition6, {
              ...addPropertyOverrides6(
                { Cr5qNjOdj: { value: transition7, }, h124nvy2N: { value: transition122, }, HovROSEim: { value: transition11, }, },
                baseVariant,
                gestureVariant,
              ),
              children: /* @__PURE__ */ _jsx8(motion7.div, {
                className: 'framer-p493zr-container',
                layoutDependency,
                layoutId: 'QpaYeYDIg-container',
                style: { opacity: 1, },
                variants: { bmOYz6gay: { opacity: 0, }, HAgS9njVa: { opacity: 0, }, vhOykwvnY: { opacity: 0, }, },
                children: /* @__PURE__ */ _jsx8(stdin_default7, {
                  height: '100%',
                  id: 'QpaYeYDIg',
                  layoutId: 'QpaYeYDIg',
                  style: { height: '100%', width: '100%', },
                  variant: 'RspHZjbvA',
                  width: '100%',
                  ...addPropertyOverrides6(
                    {
                      dVLWELU6e: { variant: 'KzyHUFutd', },
                      fhIf6dGTg: { variant: 'NfdKYRGKU', },
                      gDTDJiCJ2: { variant: 'AKBlJHd8s', },
                      HovROSEim: { variant: 'CDTOPoYwJ', },
                      NsO3auvSc: { variant: 'NfdKYRGKU', },
                      rfZM8jP4B: { variant: 'NfdKYRGKU', },
                      Ugn1WXH_Q: { variant: 'NfdKYRGKU', },
                      XACXI8mDn: { variant: 'lR29aQ4aC', },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
              },),
            },),
            isDisplayed11() && /* @__PURE__ */ _jsx8(Transition6, {
              ...addPropertyOverrides6(
                {
                  bmOYz6gay: { value: transition12, },
                  Cr5qNjOdj: { value: transition4, },
                  h124nvy2N: { value: transition3, },
                  NsO3auvSc: { value: transition13, },
                },
                baseVariant,
                gestureVariant,
              ),
              children: /* @__PURE__ */ _jsx8(motion7.div, {
                className: 'framer-8j7eic-container',
                layoutDependency,
                layoutId: 'R87ZiPGik-container',
                children: /* @__PURE__ */ _jsx8(stdin_default6, {
                  bGyluXMcm: 'C-2',
                  C0xbi_CXP: 'B',
                  cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                  eZ_WIO8yz: 'Choice 3',
                  fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                  Gb15ibvMU: 'wZ2vnzihB',
                  height: '100%',
                  id: 'R87ZiPGik',
                  iDjlfHFIv: 'C-2',
                  Jdv7M1lr6: 'A',
                  JM8R5zcqV: false,
                  k4ezTegiq: 50,
                  K5BysgXsx: 'zAJDHJhkW',
                  layoutId: 'R87ZiPGik',
                  LNNJy1jnm: 'FNw58JHcH',
                  NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                  OJMet4Rjs: 'Choice 1',
                  qQ_BO9qk8: 'Choice 2',
                  style: { height: '100%', width: '100%', },
                  TTpsRmZqr: true,
                  variant: 'FXIjKjDPL',
                  VOTcq87Vu: true,
                  vZATQhujj: 'Board Dimensions',
                  width: '100%',
                  Xo22rvSfa: 'B-2',
                  Z93yscm8P: 'A-1',
                  zgF6TYXbc: 'LNmrAjenO',
                  ...addPropertyOverrides6(
                    {
                      bmOYz6gay: { fxy_09app: 'Create an interactive tool to augment decision-making and ideation', variant: 'pmi554o5Z', },
                      Cr5qNjOdj: { variant: 'jFWx1BeuK', },
                      h124nvy2N: { variant: 'uTj0cEPb8', },
                      HAgS9njVa: { Gb15ibvMU: 'cbq3T4JIp', variant: 'pmi554o5Z', },
                      qT5kEYyp_: { variant: 'uTj0cEPb8', },
                      vhOykwvnY: {
                        fxy_09app: 'Create an interactive tool to enhance human cognition',
                        variant: 'pmi554o5Z',
                        VOTcq87Vu: false,
                      },
                      ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
              },),
            },),
            isDisplayed12() && /* @__PURE__ */ _jsx8(Transition6, {
              ...addPropertyOverrides6({ QkfIEoKbU: { value: transition14, }, }, baseVariant, gestureVariant,),
              children: /* @__PURE__ */ _jsxs6(motion7.div, {
                className: 'framer-10roqpf',
                'data-framer-name': 'Cursors',
                layoutDependency,
                layoutId: 'GOKJ37Vod',
                style: { opacity: 1, },
                variants: { aOPZX8nJO: { opacity: 0, }, MX2TbvLxw: { opacity: 0, }, },
                children: [
                  isDisplayed13() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      { Du1gnhwdF: { value: transition15, }, MX2TbvLxw: { value: transition15, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsxs6(motion7.div, {
                      className: 'framer-1baknbo',
                      'data-framer-name': 'Cursor 3',
                      layoutDependency,
                      layoutId: 'P_xP6ga5i',
                      children: [
                        /* @__PURE__ */ _jsx8(SVG6, {
                        className: 'framer-1rymr0x',
                        'data-framer-name': 'Cursor',
                        fill: 'rgba(0,0,0,1)',
                        intrinsicHeight: 27,
                        intrinsicWidth: 27,
                        layoutDependency,
                        layoutId: 'Nku6cRO5X',
                        svg:
                          '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d_319_54525)">\n<path d="M2.9663 12.4666L18.9578 7.908C19.7835 7.67261 20.4966 8.53023 20.1235 9.31006L12.8984 24.4128C12.5143 25.2158 11.3617 25.1554 11.0645 24.3167L8.86375 18.1054C8.78382 17.8798 8.62653 17.6906 8.42029 17.572L2.74154 14.306C1.97476 13.865 2.11602 12.709 2.9663 12.4666Z" fill="#7B3BC3"/>\n<path d="M18.8232 7.4247L2.83166 11.9833C1.55625 12.3468 1.34436 14.0809 2.49453 14.7424L8.17328 18.0084C8.2764 18.0677 8.35505 18.1623 8.39501 18.2751L10.5958 24.4865C11.0416 25.7445 12.7704 25.835 13.3467 24.6305L20.5717 9.5278C21.1313 8.35806 20.0618 7.07163 18.8232 7.4247Z" stroke="#7B3BC3"/>\n</g>\n<defs>\n<filter id="filter0_d_319_54525" x="-0.755981" y="5.8623" width="23.9794" height="23.124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="1"/>\n<feComposite in2="hardAlpha" operator="out"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_54525"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_54525" result="shape"/>\n</filter>\n</defs>\n</svg>\n',
                        withExternalLayout: true,
                      },),
                        /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-1jtt2gu',
                        'data-framer-name': 'Comment',
                        layoutDependency,
                        layoutId: 'gR2oOys7M',
                        style: {
                          backgroundColor: 'rgb(123, 59, 195)',
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 25px 17px -8px rgba(0,0,0,0.25)',
                        },
                        children: /* @__PURE__ */ _jsx8(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                            children: /* @__PURE__ */ _jsx8(motion7.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'DESIGNER',
                            },),
                          },),
                          className: 'framer-1act9ll',
                          fonts: ['CUSTOM;PP Supply Sans Medium',],
                          layoutDependency,
                          layoutId: 'uAwO9MCnm',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '16px', opacity: 0.8, },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      },),
                      ],
                    },),
                  },),
                  isDisplayed13() && /* @__PURE__ */ _jsxs6(motion7.div, {
                    className: 'framer-vrov5l',
                    'data-framer-name': 'Cursor 2',
                    layoutDependency,
                    layoutId: 'ehZCrwpW_',
                    children: [
                      /* @__PURE__ */ _jsx8(SVG6, {
                      className: 'framer-66j59f',
                      'data-framer-name': 'Cursor',
                      fill: 'rgba(0,0,0,1)',
                      intrinsicHeight: 27,
                      intrinsicWidth: 27,
                      layoutDependency,
                      layoutId: 'K4_fqlXgf',
                      style: { rotate: -90, },
                      svg:
                        '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d_319_54525)">\n<path d="M2.9663 12.4666L18.9578 7.908C19.7835 7.67261 20.4966 8.53023 20.1235 9.31006L12.8984 24.4128C12.5143 25.2158 11.3617 25.1554 11.0645 24.3167L8.86375 18.1054C8.78382 17.8798 8.62653 17.6906 8.42029 17.572L2.74154 14.306C1.97476 13.865 2.11602 12.709 2.9663 12.4666Z" fill="#7B3BC3"/>\n<path d="M18.8232 7.4247L2.83166 11.9833C1.55625 12.3468 1.34436 14.0809 2.49453 14.7424L8.17328 18.0084C8.2764 18.0677 8.35505 18.1623 8.39501 18.2751L10.5958 24.4865C11.0416 25.7445 12.7704 25.835 13.3467 24.6305L20.5717 9.5278C21.1313 8.35806 20.0618 7.07163 18.8232 7.4247Z" stroke="#7B3BC3"/>\n</g>\n<defs>\n<filter id="filter0_d_319_54525" x="-0.755981" y="5.8623" width="23.9794" height="23.124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="1"/>\n<feComposite in2="hardAlpha" operator="out"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_54525"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_54525" result="shape"/>\n</filter>\n</defs>\n</svg>\n',
                      withExternalLayout: true,
                    },),
                      /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-1hr6ih8',
                      'data-framer-name': 'Comment',
                      layoutDependency,
                      layoutId: 'GlsxFWQVg',
                      style: {
                        backgroundColor: 'rgb(123, 59, 195)',
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 25px 17px -8px rgba(0,0,0,0.25)',
                      },
                      children: /* @__PURE__ */ _jsx8(RichText5, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                          children: /* @__PURE__ */ _jsx8(motion7.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                              '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                              '--framer-line-height': '24px',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'SCIENTIST',
                          },),
                        },),
                        className: 'framer-1k2k6y',
                        fonts: ['CUSTOM;PP Supply Sans Medium',],
                        layoutDependency,
                        layoutId: 'ma9qai6hE',
                        style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '16px', opacity: 0.8, },
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                    },),
                    ],
                  },),
                  isDisplayed14() && /* @__PURE__ */ _jsx8(Transition6, {
                    ...addPropertyOverrides6(
                      {
                        Du1gnhwdF: { value: transition16, },
                        HAgS9njVa: { value: transition17, },
                        MX2TbvLxw: { value: transition16, },
                        vhOykwvnY: { value: transition18, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsxs6(motion7.div, {
                      className: 'framer-125axmh',
                      'data-framer-name': 'Cursor 1',
                      layoutDependency,
                      layoutId: 'ORQ_RGdFu',
                      transformTemplate: transformTemplate22,
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { transformTemplate: void 0, },
                          Du1gnhwdF: { transformTemplate: void 0, },
                          fhIf6dGTg: { transformTemplate: void 0, },
                          HAgS9njVa: { transformTemplate: transformTemplate3, },
                          MX2TbvLxw: { transformTemplate: transformTemplate3, },
                          NsO3auvSc: { transformTemplate: transformTemplate3, },
                          QkfIEoKbU: { transformTemplate: transformTemplate3, },
                          Ugn1WXH_Q: { transformTemplate: void 0, },
                          vhOykwvnY: { transformTemplate: void 0, },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: [
                        /* @__PURE__ */ _jsx8(SVG6, {
                        className: 'framer-1k2rh2o',
                        'data-framer-name': 'Cursor',
                        fill: 'rgba(0,0,0,1)',
                        intrinsicHeight: 27,
                        intrinsicWidth: 27,
                        layoutDependency,
                        layoutId: 'J3r_4r9KH',
                        style: { rotate: -52, },
                        svg:
                          '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d_319_54525)">\n<path d="M2.9663 12.4666L18.9578 7.908C19.7835 7.67261 20.4966 8.53023 20.1235 9.31006L12.8984 24.4128C12.5143 25.2158 11.3617 25.1554 11.0645 24.3167L8.86375 18.1054C8.78382 17.8798 8.62653 17.6906 8.42029 17.572L2.74154 14.306C1.97476 13.865 2.11602 12.709 2.9663 12.4666Z" fill="#7B3BC3"/>\n<path d="M18.8232 7.4247L2.83166 11.9833C1.55625 12.3468 1.34436 14.0809 2.49453 14.7424L8.17328 18.0084C8.2764 18.0677 8.35505 18.1623 8.39501 18.2751L10.5958 24.4865C11.0416 25.7445 12.7704 25.835 13.3467 24.6305L20.5717 9.5278C21.1313 8.35806 20.0618 7.07163 18.8232 7.4247Z" stroke="#7B3BC3"/>\n</g>\n<defs>\n<filter id="filter0_d_319_54525" x="-0.755981" y="5.8623" width="23.9794" height="23.124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="1"/>\n<feComposite in2="hardAlpha" operator="out"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_54525"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_54525" result="shape"/>\n</filter>\n</defs>\n</svg>\n',
                        withExternalLayout: true,
                      },),
                        /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-11jec6m',
                        'data-framer-name': 'Comment',
                        layoutDependency,
                        layoutId: 'kbnkn1Fri',
                        style: {
                          backgroundColor: 'rgb(123, 59, 195)',
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 25px 17px -8px rgba(0,0,0,0.25)',
                        },
                        variants: {
                          fhIf6dGTg: { boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 14px 17px -8px rgba(0,0,0,0.25)', },
                          NsO3auvSc: {
                            boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 25px 17px -8px rgba(0, 0, 0, 0.4)',
                          },
                        },
                        children: /* @__PURE__ */ _jsx8(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                            children: /* @__PURE__ */ _jsx8(motion7.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'ENGINEER',
                            },),
                          },),
                          className: 'framer-tu0py0',
                          fonts: ['CUSTOM;PP Supply Sans Medium',],
                          layoutDependency,
                          layoutId: 'Zj6Dd7vJj',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '16px', opacity: 0.8, },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      },),
                      ],
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
var css7 = [
  '.framer-Yw3ZX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-Yw3ZX .framer-1w3po97 { display: block; }',
  '.framer-Yw3ZX .framer-hpdod { height: 537px; position: relative; width: 1009px; }',
  '.framer-Yw3ZX .framer-1ycw9vo { flex: none; height: 198px; left: calc(49.9504459861249% - 771px / 2); position: absolute; top: calc(50.0931098696462% - 198px / 2); width: 771px; }',
  '.framer-Yw3ZX .framer-8vddoc { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 52px; width: 618px; }',
  '.framer-Yw3ZX .framer-3jhvp { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 24px 0px 24px; position: relative; width: 100%; }',
  '.framer-Yw3ZX .framer-58jcgq, .framer-Yw3ZX .framer-1558cx, .framer-Yw3ZX .framer-1act9ll, .framer-Yw3ZX .framer-1k2k6y, .framer-Yw3ZX .framer-tu0py0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-Yw3ZX .framer-k3rqov { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }',
  '.framer-Yw3ZX .framer-ovz0el { align-content: start; align-items: start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-Yw3ZX .framer-1cjxhy0 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-Yw3ZX .framer-1ebn6ix { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 638px; word-break: break-word; word-wrap: break-word; }',
  '.framer-Yw3ZX .framer-1twb4mw { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 11px 15px 11px 15px; position: relative; width: 100%; }',
  '.framer-Yw3ZX .framer-1qyytje { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-Yw3ZX .framer-1kj1ldo { flex: none; height: 25px; left: 12px; mix-blend-mode: multiply; position: absolute; top: 9px; width: 67%; z-index: 1; }',
  '.framer-Yw3ZX .framer-101gxbs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 20px 24px 20px 12px; position: relative; width: 100%; }',
  '.framer-Yw3ZX .framer-k8lsxt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-Yw3ZX .framer-u4tus2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-Yw3ZX .framer-1nyjb26 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-Yw3ZX .framer-1t8lizg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: hidden; position: relative; width: 24px; }',
  '.framer-Yw3ZX .framer-8qwf3t { bottom: 2px; flex: none; left: 2px; position: absolute; right: 2px; top: 2px; }',
  '.framer-Yw3ZX .framer-td7305 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-Yw3ZX .framer-moaqya { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-Yw3ZX .framer-191z50s { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: center; overflow: visible; padding: 10px 24px 10px 16px; position: relative; width: 100%; }',
  '.framer-Yw3ZX .framer-1sofjn6 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 18px; }',
  '.framer-Yw3ZX .framer-j61epy { bottom: 4px; flex: none; left: 2px; position: absolute; right: 3px; top: 4px; }',
  '.framer-Yw3ZX .framer-6s0tzo, .framer-Yw3ZX .framer-1mvnusd { flex: none; height: 393px; left: calc(49.653121902874155% - 391px / 2); overflow: visible; position: absolute; top: calc(48.60335195530728% - 393px / 2); width: 391px; }',
  '.framer-Yw3ZX .framer-4b524j-container { flex: none; height: auto; left: 28px; position: absolute; top: 77px; width: auto; }',
  '.framer-Yw3ZX .framer-vvhei8-container { flex: none; height: auto; left: 48%; position: absolute; top: 0px; width: auto; }',
  '.framer-Yw3ZX .framer-d60suy-container { flex: none; height: auto; position: absolute; right: 40px; top: 69px; width: auto; }',
  '.framer-Yw3ZX .framer-1iaswxc-container { bottom: 119px; flex: none; height: auto; position: absolute; right: 0px; width: auto; }',
  '.framer-Yw3ZX .framer-ereqn5-container { bottom: 0px; flex: none; height: auto; position: absolute; right: 89px; width: auto; }',
  '.framer-Yw3ZX .framer-8jq7kp-container { bottom: 6px; flex: none; height: auto; left: 70px; position: absolute; width: auto; }',
  '.framer-Yw3ZX .framer-121179n-container { bottom: 149px; flex: none; height: auto; left: 0px; position: absolute; width: auto; }',
  '.framer-Yw3ZX .framer-1w2gq54 { bottom: 114px; flex: none; left: calc(49.9504459861249% - 319px / 2); overflow: visible; position: absolute; top: 114px; width: 319px; }',
  '.framer-Yw3ZX .framer-1togqzb-container { flex: none; height: auto; left: 282px; position: absolute; top: 109px; width: auto; }',
  '.framer-Yw3ZX .framer-u2l7lb-container { flex: none; height: auto; left: 249px; position: absolute; top: 234px; width: auto; }',
  '.framer-Yw3ZX .framer-dt1nri-container { flex: none; height: auto; left: 120px; position: absolute; top: 279px; width: auto; }',
  '.framer-Yw3ZX .framer-vm0lt-container { flex: none; height: auto; left: 6px; position: absolute; top: 219px; width: auto; }',
  '.framer-Yw3ZX .framer-1xv0t2j-container { flex: none; height: auto; left: -11px; position: absolute; top: 94px; width: auto; }',
  '.framer-Yw3ZX .framer-lc2jrz-container { flex: none; height: auto; left: 71px; position: absolute; top: -5px; width: auto; }',
  '.framer-Yw3ZX .framer-15swu5u-container { flex: none; height: auto; left: 193px; position: absolute; top: 0px; width: auto; }',
  '.framer-Yw3ZX .framer-ywbmcs { flex: none; height: 233px; left: calc(49.9504459861249% - 233px / 2); overflow: visible; position: absolute; top: calc(49.90689013035384% - 233px / 2); width: 233px; }',
  '.framer-Yw3ZX .framer-1egxi8f-container { flex: none; height: auto; left: 20%; position: absolute; top: 25%; width: auto; }',
  '.framer-Yw3ZX .framer-xsw623-container { flex: none; height: auto; left: 12%; position: absolute; top: 58%; width: auto; }',
  '.framer-Yw3ZX .framer-15gph2n-container { flex: none; height: auto; left: 87%; position: absolute; top: 61%; width: auto; }',
  '.framer-Yw3ZX .framer-yox9q5-container { flex: none; height: auto; left: 50%; position: absolute; top: 13%; width: auto; }',
  '.framer-Yw3ZX .framer-17glung-container { bottom: 5px; flex: none; height: auto; left: 40px; position: absolute; width: auto; }',
  '.framer-Yw3ZX .framer-n0gl4w-container { flex: none; height: auto; left: 64%; position: absolute; top: 87%; width: auto; }',
  '.framer-Yw3ZX .framer-10kjnxc-container { flex: none; height: auto; left: 81%; position: absolute; top: 27%; width: auto; }',
  '.framer-Yw3ZX .framer-1k3vrbv { bottom: -21px; flex: none; height: 395px; left: -9px; overflow: visible; position: absolute; right: -10px; }',
  '.framer-Yw3ZX .framer-gkoso3-container { flex: none; height: auto; left: 91px; position: absolute; top: 1px; width: auto; }',
  '.framer-Yw3ZX .framer-1yvmtw8-container { flex: none; height: auto; position: absolute; right: 0px; top: 134px; width: auto; }',
  '.framer-Yw3ZX .framer-w97bgk-container { bottom: 57px; flex: none; height: auto; position: absolute; right: 29px; width: auto; }',
  '.framer-Yw3ZX .framer-fpq9rw-container { bottom: 0px; flex: none; height: auto; left: 51%; position: absolute; width: auto; }',
  '.framer-Yw3ZX .framer-160pc9z-container { bottom: 77px; flex: none; height: auto; left: 7px; position: absolute; width: auto; }',
  '.framer-Yw3ZX .framer-1jw6h9g-container { flex: none; height: auto; left: 0px; position: absolute; top: 125px; width: auto; }',
  '.framer-Yw3ZX .framer-1igj8fa-container { flex: none; height: auto; position: absolute; right: 103px; top: 1px; width: auto; }',
  '.framer-Yw3ZX .framer-1jstyen-container { flex: none; height: auto; position: absolute; right: 51px; top: 64px; width: auto; }',
  '.framer-Yw3ZX .framer-p493zr-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-Yw3ZX .framer-8j7eic-container { flex: none; height: 22px; left: calc(53.32011892963332% - 56px / 2); position: absolute; top: 168px; width: 56px; }',
  '.framer-Yw3ZX .framer-10roqpf { bottom: 111px; flex: none; height: 200px; left: calc(50.04955401387514% - 872px / 2); overflow: visible; position: absolute; width: 872px; }',
  '.framer-Yw3ZX .framer-1baknbo { flex: none; height: 63px; left: 0px; overflow: visible; position: absolute; top: calc(48.051948051948074% - 63px / 2); width: 132px; }',
  '.framer-Yw3ZX .framer-1rymr0x { flex: none; height: 27px; left: 105px; position: absolute; top: -1px; width: 27px; }',
  '.framer-Yw3ZX .framer-1jtt2gu, .framer-Yw3ZX .framer-1hr6ih8 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 8px 16px 8px 16px; position: absolute; top: 24px; width: min-content; }',
  '.framer-Yw3ZX .framer-vrov5l { flex: none; height: 63px; overflow: visible; position: absolute; right: 0px; top: calc(48.051948051948074% - 63px / 2); width: 104px; }',
  '.framer-Yw3ZX .framer-66j59f { flex: none; height: 27px; left: -28px; position: absolute; top: -4px; width: 27px; }',
  '.framer-Yw3ZX .framer-125axmh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 49%; width: min-content; }',
  '.framer-Yw3ZX .framer-1k2rh2o { flex: none; height: 27px; position: relative; width: 27px; }',
  '.framer-Yw3ZX .framer-11jec6m { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 16px 8px 16px; position: relative; width: min-content; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yw3ZX .framer-8vddoc, .framer-Yw3ZX .framer-3jhvp, .framer-Yw3ZX .framer-k3rqov, .framer-Yw3ZX .framer-ovz0el, .framer-Yw3ZX .framer-1cjxhy0, .framer-Yw3ZX .framer-1twb4mw, .framer-Yw3ZX .framer-k8lsxt, .framer-Yw3ZX .framer-u4tus2, .framer-Yw3ZX .framer-1nyjb26, .framer-Yw3ZX .framer-td7305, .framer-Yw3ZX .framer-moaqya, .framer-Yw3ZX .framer-191z50s, .framer-Yw3ZX .framer-1jtt2gu, .framer-Yw3ZX .framer-1hr6ih8, .framer-Yw3ZX .framer-125axmh, .framer-Yw3ZX .framer-11jec6m { gap: 0px; } .framer-Yw3ZX .framer-8vddoc > *, .framer-Yw3ZX .framer-1cjxhy0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Yw3ZX .framer-8vddoc > :first-child, .framer-Yw3ZX .framer-ovz0el > :first-child, .framer-Yw3ZX .framer-1cjxhy0 > :first-child, .framer-Yw3ZX .framer-k8lsxt > :first-child, .framer-Yw3ZX .framer-moaqya > :first-child, .framer-Yw3ZX .framer-125axmh > :first-child { margin-top: 0px; } .framer-Yw3ZX .framer-8vddoc > :last-child, .framer-Yw3ZX .framer-ovz0el > :last-child, .framer-Yw3ZX .framer-1cjxhy0 > :last-child, .framer-Yw3ZX .framer-k8lsxt > :last-child, .framer-Yw3ZX .framer-moaqya > :last-child, .framer-Yw3ZX .framer-125axmh > :last-child { margin-bottom: 0px; } .framer-Yw3ZX .framer-3jhvp > *, .framer-Yw3ZX .framer-1twb4mw > *, .framer-Yw3ZX .framer-u4tus2 > *, .framer-Yw3ZX .framer-1nyjb26 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Yw3ZX .framer-3jhvp > :first-child, .framer-Yw3ZX .framer-k3rqov > :first-child, .framer-Yw3ZX .framer-1twb4mw > :first-child, .framer-Yw3ZX .framer-u4tus2 > :first-child, .framer-Yw3ZX .framer-1nyjb26 > :first-child, .framer-Yw3ZX .framer-td7305 > :first-child, .framer-Yw3ZX .framer-191z50s > :first-child, .framer-Yw3ZX .framer-1jtt2gu > :first-child, .framer-Yw3ZX .framer-1hr6ih8 > :first-child, .framer-Yw3ZX .framer-11jec6m > :first-child { margin-left: 0px; } .framer-Yw3ZX .framer-3jhvp > :last-child, .framer-Yw3ZX .framer-k3rqov > :last-child, .framer-Yw3ZX .framer-1twb4mw > :last-child, .framer-Yw3ZX .framer-u4tus2 > :last-child, .framer-Yw3ZX .framer-1nyjb26 > :last-child, .framer-Yw3ZX .framer-td7305 > :last-child, .framer-Yw3ZX .framer-191z50s > :last-child, .framer-Yw3ZX .framer-1jtt2gu > :last-child, .framer-Yw3ZX .framer-1hr6ih8 > :last-child, .framer-Yw3ZX .framer-11jec6m > :last-child { margin-right: 0px; } .framer-Yw3ZX .framer-k3rqov > * { margin: 0px; margin-left: calc(26px / 2); margin-right: calc(26px / 2); } .framer-Yw3ZX .framer-ovz0el > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Yw3ZX .framer-k8lsxt > *, .framer-Yw3ZX .framer-125axmh > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yw3ZX .framer-td7305 > *, .framer-Yw3ZX .framer-191z50s > *, .framer-Yw3ZX .framer-1jtt2gu > *, .framer-Yw3ZX .framer-1hr6ih8 > *, .framer-Yw3ZX .framer-11jec6m > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-Yw3ZX .framer-moaqya > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }',
  '.framer-Yw3ZX.framer-v-f73ajw .framer-hpdod, .framer-Yw3ZX.framer-v-1odncvf .framer-hpdod, .framer-Yw3ZX.framer-v-d973em .framer-hpdod, .framer-Yw3ZX.framer-v-13tsvzn .framer-hpdod, .framer-Yw3ZX.framer-v-162rgdv .framer-hpdod, .framer-Yw3ZX.framer-v-16r9b51 .framer-hpdod, .framer-Yw3ZX.framer-v-19a269d .framer-hpdod, .framer-Yw3ZX.framer-v-1b7v10g .framer-hpdod, .framer-Yw3ZX.framer-v-8ciawy .framer-hpdod, .framer-Yw3ZX.framer-v-1ewhbs6 .framer-hpdod, .framer-Yw3ZX.framer-v-47329 .framer-hpdod, .framer-Yw3ZX.framer-v-n0vpn9 .framer-hpdod, .framer-Yw3ZX.framer-v-655dk4 .framer-hpdod, .framer-Yw3ZX.framer-v-ae0cwc .framer-hpdod, .framer-Yw3ZX.framer-v-18wwg9a .framer-hpdod, .framer-Yw3ZX.framer-v-96r6q7 .framer-hpdod, .framer-Yw3ZX.framer-v-10pngp5 .framer-hpdod, .framer-Yw3ZX.framer-v-1ymudb1 .framer-hpdod, .framer-Yw3ZX.framer-v-qkkkjw .framer-hpdod, .framer-Yw3ZX.framer-v-30clu8 .framer-hpdod, .framer-Yw3ZX.framer-v-1f09y03 .framer-hpdod, .framer-Yw3ZX.framer-v-1anadwn .framer-hpdod, .framer-Yw3ZX.framer-v-16mzam7 .framer-hpdod, .framer-Yw3ZX.framer-v-tv2zos .framer-hpdod, .framer-Yw3ZX.framer-v-1j14qwb .framer-hpdod, .framer-Yw3ZX.framer-v-1sk9d83 .framer-hpdod { cursor: pointer; }',
  '.framer-Yw3ZX.framer-v-f73ajw .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-f73ajw .framer-xsw623-container, .framer-Yw3ZX.framer-v-f73ajw .framer-15gph2n-container, .framer-Yw3ZX.framer-v-f73ajw .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-f73ajw .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-1odncvf .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-1odncvf .framer-xsw623-container, .framer-Yw3ZX.framer-v-1odncvf .framer-15gph2n-container, .framer-Yw3ZX.framer-v-1odncvf .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-1odncvf .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-d973em .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-d973em .framer-xsw623-container, .framer-Yw3ZX.framer-v-d973em .framer-15gph2n-container, .framer-Yw3ZX.framer-v-d973em .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-d973em .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-13tsvzn .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-13tsvzn .framer-xsw623-container, .framer-Yw3ZX.framer-v-13tsvzn .framer-15gph2n-container, .framer-Yw3ZX.framer-v-13tsvzn .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-13tsvzn .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-yrn57e .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-yrn57e .framer-xsw623-container, .framer-Yw3ZX.framer-v-yrn57e .framer-15gph2n-container, .framer-Yw3ZX.framer-v-yrn57e .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-yrn57e .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-13llhv3 .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-13llhv3 .framer-xsw623-container, .framer-Yw3ZX.framer-v-13llhv3 .framer-15gph2n-container, .framer-Yw3ZX.framer-v-13llhv3 .framer-yox9q5-container, .framer-Yw3ZX.framer-v-13llhv3 .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-13llhv3 .framer-10kjnxc-container { left: 50%; top: 50%; }',
  '.framer-Yw3ZX.framer-v-f73ajw .framer-yox9q5-container, .framer-Yw3ZX.framer-v-1odncvf .framer-yox9q5-container, .framer-Yw3ZX.framer-v-d973em .framer-yox9q5-container, .framer-Yw3ZX.framer-v-13tsvzn .framer-yox9q5-container, .framer-Yw3ZX.framer-v-yrn57e .framer-yox9q5-container { top: 50%; }',
  '.framer-Yw3ZX.framer-v-f73ajw .framer-17glung-container, .framer-Yw3ZX.framer-v-1odncvf .framer-17glung-container, .framer-Yw3ZX.framer-v-d973em .framer-17glung-container, .framer-Yw3ZX.framer-v-13tsvzn .framer-17glung-container, .framer-Yw3ZX.framer-v-yrn57e .framer-17glung-container, .framer-Yw3ZX.framer-v-13llhv3 .framer-17glung-container { bottom: unset; left: 50%; top: 50%; }',
  '.framer-Yw3ZX.framer-v-1l5e6kx .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-162rgdv .framer-10kjnxc-container { left: 168px; top: -33px; }',
  '.framer-Yw3ZX.framer-v-15llivf .framer-xsw623-container { bottom: 15px; left: -262px; top: unset; }',
  '.framer-Yw3ZX.framer-v-15llivf .framer-10kjnxc-container { left: unset; right: -260px; top: 7%; }',
  '.framer-Yw3ZX.framer-v-162rgdv .framer-xsw623-container { left: -262px; top: 120px; }',
  '.framer-Yw3ZX.framer-v-162rgdv .framer-n0gl4w-container { left: 128px; top: 168px; }',
  '.framer-Yw3ZX.framer-v-162rgdv .framer-10roqpf { bottom: -80px; }',
  '.framer-Yw3ZX.framer-v-16r9b51 .framer-xsw623-container, .framer-Yw3ZX.framer-v-19a269d .framer-xsw623-container, .framer-Yw3ZX.framer-v-1b7v10g .framer-xsw623-container { left: -240px; top: 28px; }',
  '.framer-Yw3ZX.framer-v-16r9b51 .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-19a269d .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-1b7v10g .framer-n0gl4w-container { left: 273px; top: 24px; }',
  '.framer-Yw3ZX.framer-v-16r9b51 .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-19a269d .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-1b7v10g .framer-10kjnxc-container { left: 11px; top: 26px; }',
  '.framer-Yw3ZX.framer-v-16r9b51 .framer-10roqpf { bottom: 71px; height: 77px; }',
  '.framer-Yw3ZX.framer-v-16r9b51 .framer-1baknbo { bottom: -12px; left: -30px; top: unset; }',
  '.framer-Yw3ZX.framer-v-16r9b51 .framer-vrov5l { bottom: -10px; right: -47px; top: unset; }',
  '.framer-Yw3ZX.framer-v-16r9b51 .framer-125axmh { bottom: -39px; top: unset; }',
  '.framer-Yw3ZX.framer-v-19a269d .framer-10roqpf { height: 77px; }',
  '.framer-Yw3ZX.framer-v-19a269d .framer-1baknbo { left: 110px; top: -84px; }',
  '.framer-Yw3ZX.framer-v-19a269d .framer-vrov5l { right: 49px; top: -54px; }',
  '.framer-Yw3ZX.framer-v-19a269d .framer-125axmh { left: 316px; top: -40px; }',
  '.framer-Yw3ZX.framer-v-1b7v10g .framer-10roqpf { bottom: -69px; height: 77px; }',
  '.framer-Yw3ZX.framer-v-1b7v10g .framer-1baknbo { left: -220px; top: -84px; }',
  '.framer-Yw3ZX.framer-v-1b7v10g .framer-vrov5l { right: -201px; top: -54px; }',
  '.framer-Yw3ZX.framer-v-1b7v10g .framer-125axmh { bottom: -19px; left: 48%; top: unset; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-4b524j-container, .framer-Yw3ZX.framer-v-87eqop .framer-4b524j-container { left: 34px; top: 146px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-vvhei8-container, .framer-Yw3ZX.framer-v-87eqop .framer-vvhei8-container, .framer-Yw3ZX.framer-v-1j14qwb .framer-vvhei8-container { left: 115px; top: 50px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-d60suy-container, .framer-Yw3ZX.framer-v-87eqop .framer-d60suy-container { right: 115px; top: 53px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-1iaswxc-container, .framer-Yw3ZX.framer-v-87eqop .framer-1iaswxc-container { bottom: unset; right: 23px; top: 46%; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-ereqn5-container, .framer-Yw3ZX.framer-v-87eqop .framer-ereqn5-container { bottom: 67px; right: 60px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-8jq7kp-container, .framer-Yw3ZX.framer-v-87eqop .framer-8jq7kp-container { bottom: 20px; left: 47%; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-121179n-container, .framer-Yw3ZX.framer-v-87eqop .framer-121179n-container { bottom: 82px; left: 51px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-1w2gq54, .framer-Yw3ZX.framer-v-87eqop .framer-1w2gq54, .framer-Yw3ZX.framer-v-zdyy2d .framer-1w2gq54, .framer-Yw3ZX.framer-v-ewze6y .framer-1w2gq54, .framer-Yw3ZX.framer-v-1ewhbs6 .framer-1w2gq54, .framer-Yw3ZX.framer-v-47329 .framer-1w2gq54 { bottom: unset; height: 309px; top: calc(49.90689013035384% - 309px / 2); }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-1togqzb-container { left: 208px; top: 78px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-u2l7lb-container { left: 222px; top: 158px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-dt1nri-container { left: 168px; top: 217px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-vm0lt-container { left: 88px; top: 212px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-1xv0t2j-container { left: 45px; top: 147px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-lc2jrz-container { left: 65px; top: 71px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-15swu5u-container { left: 134px; top: 42px; }',
  '.framer-Yw3ZX.framer-v-8ciawy .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-87eqop .framer-10kjnxc-container { left: 82%; }',
  '.framer-Yw3ZX.framer-v-zdyy2d .framer-gkoso3-container, .framer-Yw3ZX.framer-v-zdyy2d .framer-1jw6h9g-container { left: 52%; top: 50%; }',
  '.framer-Yw3ZX.framer-v-zdyy2d .framer-1yvmtw8-container, .framer-Yw3ZX.framer-v-zdyy2d .framer-1igj8fa-container { left: 52%; right: unset; top: 50%; }',
  '.framer-Yw3ZX.framer-v-zdyy2d .framer-w97bgk-container { bottom: unset; left: 52%; right: unset; top: 50%; }',
  '.framer-Yw3ZX.framer-v-zdyy2d .framer-fpq9rw-container, .framer-Yw3ZX.framer-v-zdyy2d .framer-160pc9z-container { bottom: unset; left: 52%; top: 50%; }',
  '.framer-Yw3ZX.framer-v-zdyy2d .framer-p493zr-container, .framer-Yw3ZX.framer-v-1ewhbs6 .framer-p493zr-container, .framer-Yw3ZX.framer-v-47329 .framer-p493zr-container { bottom: unset; height: 537px; left: calc(49.9504459861249% - 1009px / 2); right: unset; top: calc(49.90689013035384% - 537px / 2); width: 1009px; }',
  '.framer-Yw3ZX.framer-v-ewze6y .framer-gkoso3-container { left: 42px; top: 64px; }',
  '.framer-Yw3ZX.framer-v-ewze6y .framer-1yvmtw8-container { right: 57px; top: 55px; }',
  '.framer-Yw3ZX.framer-v-ewze6y .framer-w97bgk-container { bottom: 146px; right: 15px; }',
  '.framer-Yw3ZX.framer-v-ewze6y .framer-fpq9rw-container, .framer-Yw3ZX.framer-v-tv2zos .framer-fpq9rw-container { bottom: 25px; left: unset; right: 104px; }',
  '.framer-Yw3ZX.framer-v-ewze6y .framer-160pc9z-container { bottom: 34px; left: 84px; }',
  '.framer-Yw3ZX.framer-v-ewze6y .framer-1jw6h9g-container { left: 14px; top: 53%; }',
  '.framer-Yw3ZX.framer-v-ewze6y .framer-1igj8fa-container { left: 49%; right: unset; top: -14px; }',
  '.framer-Yw3ZX.framer-v-ewze6y .framer-1jstyen-container { left: 50%; right: unset; top: 54%; }',
  '.framer-Yw3ZX.framer-v-1ewhbs6 .framer-1igj8fa-container { right: 92px; top: -10px; }',
  '.framer-Yw3ZX.framer-v-47329 .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-qkkkjw .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-30clu8 .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-1f09y03 .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-16mzam7 .framer-1igj8fa-container { right: 98px; top: 9px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-6s0tzo, .framer-Yw3ZX.framer-v-655dk4 .framer-6s0tzo, .framer-Yw3ZX.framer-v-ae0cwc .framer-6s0tzo, .framer-Yw3ZX.framer-v-18wwg9a .framer-6s0tzo, .framer-Yw3ZX.framer-v-96r6q7 .framer-6s0tzo, .framer-Yw3ZX.framer-v-10pngp5 .framer-6s0tzo, .framer-Yw3ZX.framer-v-1ymudb1 .framer-6s0tzo { height: 200px; left: calc(49.7522299306244% - 270px / 2); top: calc(50.279329608938575% - 200px / 2); width: 270px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-4b524j-container, .framer-Yw3ZX.framer-v-655dk4 .framer-4b524j-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-4b524j-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-4b524j-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-4b524j-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-4b524j-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-4b524j-container { bottom: 180px; left: unset; right: 217px; top: unset; width: 53px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-vvhei8-container, .framer-Yw3ZX.framer-v-655dk4 .framer-vvhei8-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-vvhei8-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-vvhei8-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-vvhei8-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-vvhei8-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-vvhei8-container { bottom: 150px; left: unset; right: 230px; top: unset; width: 40px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-d60suy-container, .framer-Yw3ZX.framer-v-655dk4 .framer-d60suy-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-d60suy-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-d60suy-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-d60suy-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-d60suy-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-d60suy-container { bottom: 120px; right: 209px; top: unset; width: 61px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1iaswxc-container, .framer-Yw3ZX.framer-v-655dk4 .framer-1iaswxc-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-1iaswxc-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-1iaswxc-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-1iaswxc-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-1iaswxc-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1iaswxc-container { bottom: 91px; right: 218px; width: 52px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-ereqn5-container, .framer-Yw3ZX.framer-v-655dk4 .framer-ereqn5-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-ereqn5-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-ereqn5-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-ereqn5-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-ereqn5-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-ereqn5-container { bottom: 60px; right: 220px; width: 50px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-8jq7kp-container, .framer-Yw3ZX.framer-v-655dk4 .framer-8jq7kp-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-8jq7kp-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-8jq7kp-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-8jq7kp-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-8jq7kp-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-8jq7kp-container { bottom: 30px; left: unset; right: 209px; width: 61px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-121179n-container, .framer-Yw3ZX.framer-v-655dk4 .framer-121179n-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-121179n-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-121179n-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-121179n-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-121179n-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-121179n-container { bottom: 0px; left: unset; right: 230px; width: 40px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1w2gq54, .framer-Yw3ZX.framer-v-655dk4 .framer-1w2gq54, .framer-Yw3ZX.framer-v-ae0cwc .framer-1w2gq54, .framer-Yw3ZX.framer-v-18wwg9a .framer-1w2gq54, .framer-Yw3ZX.framer-v-96r6q7 .framer-1w2gq54, .framer-Yw3ZX.framer-v-10pngp5 .framer-1w2gq54, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1w2gq54 { bottom: unset; height: 199px; left: calc(49.7522299306244% - 270px / 2); top: calc(50.0931098696462% - 199px / 2); width: 270px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1togqzb-container, .framer-Yw3ZX.framer-v-655dk4 .framer-1togqzb-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-1togqzb-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-1togqzb-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-1togqzb-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-1togqzb-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1togqzb-container { left: 143px; top: 0px; width: 56px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-u2l7lb-container, .framer-Yw3ZX.framer-v-655dk4 .framer-u2l7lb-container { left: 98px; top: 30px; width: 64px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-dt1nri-container, .framer-Yw3ZX.framer-v-655dk4 .framer-dt1nri-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-dt1nri-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-dt1nri-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-dt1nri-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-dt1nri-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-dt1nri-container { left: 128px; top: 60px; width: 87px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-vm0lt-container, .framer-Yw3ZX.framer-v-655dk4 .framer-vm0lt-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-vm0lt-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-vm0lt-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-vm0lt-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-vm0lt-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-vm0lt-container { left: 112px; top: 179px; width: 95px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1xv0t2j-container, .framer-Yw3ZX.framer-v-655dk4 .framer-1xv0t2j-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-1xv0t2j-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-1xv0t2j-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-1xv0t2j-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-1xv0t2j-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1xv0t2j-container { height: 20px; left: 128px; top: 120px; width: 95px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-lc2jrz-container, .framer-Yw3ZX.framer-v-655dk4 .framer-lc2jrz-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-lc2jrz-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-lc2jrz-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-lc2jrz-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-lc2jrz-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-lc2jrz-container { left: 134px; top: 150px; width: 43px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-15swu5u-container, .framer-Yw3ZX.framer-v-655dk4 .framer-15swu5u-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-15swu5u-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-15swu5u-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-15swu5u-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-15swu5u-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-15swu5u-container { height: 20px; left: 145px; top: 89px; width: 54px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-ywbmcs, .framer-Yw3ZX.framer-v-655dk4 .framer-ywbmcs, .framer-Yw3ZX.framer-v-ae0cwc .framer-ywbmcs, .framer-Yw3ZX.framer-v-18wwg9a .framer-ywbmcs, .framer-Yw3ZX.framer-v-96r6q7 .framer-ywbmcs, .framer-Yw3ZX.framer-v-10pngp5 .framer-ywbmcs, .framer-Yw3ZX.framer-v-1ymudb1 .framer-ywbmcs { height: 199px; left: calc(49.7522299306244% - 270px / 2); top: calc(50.0931098696462% - 199px / 2); width: 270px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-655dk4 .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-1egxi8f-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1egxi8f-container { bottom: 179px; left: unset; right: 137px; top: unset; width: 72px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-xsw623-container, .framer-Yw3ZX.framer-v-655dk4 .framer-xsw623-container { bottom: 119px; left: unset; right: 151px; top: unset; width: 52px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-15gph2n-container, .framer-Yw3ZX.framer-v-655dk4 .framer-15gph2n-container { bottom: 90px; left: unset; right: 133px; top: unset; width: 78px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-yox9q5-container, .framer-Yw3ZX.framer-v-655dk4 .framer-yox9q5-container { bottom: 59px; left: unset; right: 151px; top: unset; width: 62px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-17glung-container, .framer-Yw3ZX.framer-v-655dk4 .framer-17glung-container { bottom: 149px; left: unset; right: 179px; width: 44px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-655dk4 .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-n0gl4w-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-n0gl4w-container { bottom: 29px; left: unset; right: 145px; top: unset; width: 55px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-655dk4 .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-10kjnxc-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-10kjnxc-container { bottom: -1px; left: unset; right: 167px; top: unset; width: 56px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1mvnusd, .framer-Yw3ZX.framer-v-655dk4 .framer-1mvnusd, .framer-Yw3ZX.framer-v-ae0cwc .framer-1mvnusd, .framer-Yw3ZX.framer-v-18wwg9a .framer-1mvnusd, .framer-Yw3ZX.framer-v-96r6q7 .framer-1mvnusd, .framer-Yw3ZX.framer-v-10pngp5 .framer-1mvnusd, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1mvnusd { height: 201px; left: calc(49.7522299306244% - 270px / 2); top: calc(49.90689013035384% - 201px / 2); width: 270px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1k3vrbv, .framer-Yw3ZX.framer-v-655dk4 .framer-1k3vrbv, .framer-Yw3ZX.framer-v-ae0cwc .framer-1k3vrbv, .framer-Yw3ZX.framer-v-18wwg9a .framer-1k3vrbv, .framer-Yw3ZX.framer-v-96r6q7 .framer-1k3vrbv, .framer-Yw3ZX.framer-v-10pngp5 .framer-1k3vrbv, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1k3vrbv { align-content: end; align-items: end; bottom: unset; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; left: calc(46.29629629629632% - 289px / 2); padding: 0px 0px 0px 0px; right: unset; top: -96px; width: 289px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-gkoso3-container, .framer-Yw3ZX.framer-v-655dk4 .framer-gkoso3-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-gkoso3-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-gkoso3-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-gkoso3-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-gkoso3-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-gkoso3-container { left: unset; position: relative; top: unset; width: 65px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1yvmtw8-container, .framer-Yw3ZX.framer-v-655dk4 .framer-1yvmtw8-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-1yvmtw8-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-1yvmtw8-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-1yvmtw8-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-1yvmtw8-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1yvmtw8-container { position: relative; right: unset; top: unset; width: 101px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-w97bgk-container, .framer-Yw3ZX.framer-v-655dk4 .framer-w97bgk-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-w97bgk-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-w97bgk-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-w97bgk-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-w97bgk-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-w97bgk-container { bottom: unset; position: relative; right: unset; width: 47px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-fpq9rw-container, .framer-Yw3ZX.framer-v-655dk4 .framer-fpq9rw-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-fpq9rw-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-fpq9rw-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-fpq9rw-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-fpq9rw-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-fpq9rw-container { bottom: unset; left: unset; position: relative; width: 63px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-160pc9z-container, .framer-Yw3ZX.framer-v-655dk4 .framer-160pc9z-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-160pc9z-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-160pc9z-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-160pc9z-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-160pc9z-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-160pc9z-container { bottom: unset; left: unset; position: relative; width: 38px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1jw6h9g-container, .framer-Yw3ZX.framer-v-655dk4 .framer-1jw6h9g-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-1jw6h9g-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-1jw6h9g-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-1jw6h9g-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-1jw6h9g-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1jw6h9g-container { left: unset; position: relative; top: unset; width: 85px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-655dk4 .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-1igj8fa-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-1igj8fa-container { position: relative; right: unset; top: unset; width: 55px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-p493zr-container, .framer-Yw3ZX.framer-v-655dk4 .framer-p493zr-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-p493zr-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-p493zr-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-p493zr-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-p493zr-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-p493zr-container { bottom: unset; height: 537px; left: calc(49.9504459861249% - 1009px / 2); mix-blend-mode: multiply; right: unset; top: calc(49.90689013035384% - 537px / 2); width: 1009px; }',
  '.framer-Yw3ZX.framer-v-n0vpn9 .framer-8j7eic-container, .framer-Yw3ZX.framer-v-655dk4 .framer-8j7eic-container, .framer-Yw3ZX.framer-v-ae0cwc .framer-8j7eic-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-8j7eic-container { bottom: 347px; height: unset; left: 510px; right: 443px; width: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yw3ZX.framer-v-n0vpn9 .framer-1k3vrbv { gap: 0px; } .framer-Yw3ZX.framer-v-n0vpn9 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yw3ZX.framer-v-n0vpn9 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-Yw3ZX.framer-v-n0vpn9 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-Yw3ZX.framer-v-655dk4 .framer-125axmh { left: 322px; top: -14px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yw3ZX.framer-v-655dk4 .framer-1k3vrbv { gap: 0px; } .framer-Yw3ZX.framer-v-655dk4 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yw3ZX.framer-v-655dk4 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-Yw3ZX.framer-v-655dk4 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-Yw3ZX.framer-v-ae0cwc .framer-u2l7lb-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-u2l7lb-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-u2l7lb-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-u2l7lb-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-u2l7lb-container { left: 52px; top: 30px; width: 110px; }',
  '.framer-Yw3ZX.framer-v-ae0cwc .framer-15gph2n-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-15gph2n-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-15gph2n-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-15gph2n-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-15gph2n-container { bottom: 119px; left: unset; right: 149px; top: unset; width: 54px; }',
  '.framer-Yw3ZX.framer-v-ae0cwc .framer-yox9q5-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-yox9q5-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-yox9q5-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-yox9q5-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-yox9q5-container { bottom: 89px; left: unset; right: 133px; top: unset; width: 80px; }',
  '.framer-Yw3ZX.framer-v-ae0cwc .framer-17glung-container, .framer-Yw3ZX.framer-v-18wwg9a .framer-17glung-container, .framer-Yw3ZX.framer-v-96r6q7 .framer-17glung-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-17glung-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-17glung-container { bottom: unset; left: 58px; top: 120px; width: 61px; }',
  '.framer-Yw3ZX.framer-v-ae0cwc .framer-125axmh { bottom: 48px; left: 339px; top: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yw3ZX.framer-v-ae0cwc .framer-1k3vrbv { gap: 0px; } .framer-Yw3ZX.framer-v-ae0cwc .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yw3ZX.framer-v-ae0cwc .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-Yw3ZX.framer-v-ae0cwc .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-Yw3ZX.framer-v-18wwg9a .framer-125axmh { left: 54%; top: -50px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yw3ZX.framer-v-18wwg9a .framer-1k3vrbv { gap: 0px; } .framer-Yw3ZX.framer-v-18wwg9a .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yw3ZX.framer-v-18wwg9a .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-Yw3ZX.framer-v-18wwg9a .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-Yw3ZX.framer-v-96r6q7 .framer-8j7eic-container, .framer-Yw3ZX.framer-v-10pngp5 .framer-8j7eic-container, .framer-Yw3ZX.framer-v-1ymudb1 .framer-8j7eic-container { bottom: 157px; height: unset; left: 477px; right: 476px; top: 358px; width: unset; }',
  '.framer-Yw3ZX.framer-v-96r6q7 .framer-125axmh { left: 53%; top: 50px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yw3ZX.framer-v-96r6q7 .framer-1k3vrbv { gap: 0px; } .framer-Yw3ZX.framer-v-96r6q7 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yw3ZX.framer-v-96r6q7 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-Yw3ZX.framer-v-96r6q7 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-Yw3ZX.framer-v-10pngp5 .framer-125axmh { bottom: -8px; left: unset; right: 60px; top: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yw3ZX.framer-v-10pngp5 .framer-1k3vrbv { gap: 0px; } .framer-Yw3ZX.framer-v-10pngp5 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yw3ZX.framer-v-10pngp5 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-Yw3ZX.framer-v-10pngp5 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-Yw3ZX.framer-v-1ymudb1 .framer-125axmh { bottom: -26px; left: unset; right: 60px; top: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yw3ZX.framer-v-1ymudb1 .framer-1k3vrbv { gap: 0px; } .framer-Yw3ZX.framer-v-1ymudb1 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yw3ZX.framer-v-1ymudb1 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-Yw3ZX.framer-v-1ymudb1 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-Yw3ZX.framer-v-qkkkjw .framer-8j7eic-container, .framer-Yw3ZX.framer-v-30clu8 .framer-8j7eic-container { left: unset; right: 405px; top: 206px; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-1iaswxc-container { bottom: unset; right: -56px; top: 53%; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-ereqn5-container { bottom: unset; right: 14px; top: 53%; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-1togqzb-container { left: 8px; top: 135px; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-u2l7lb-container { left: 148px; top: 135px; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-w97bgk-container { bottom: unset; right: -116px; top: 48%; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-fpq9rw-container { bottom: unset; left: unset; right: 94px; top: 48%; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-160pc9z-container { bottom: unset; left: 126px; top: 48%; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-p493zr-container { bottom: -4px; height: 537px; left: -306px; right: unset; top: unset; width: 1009px; }',
  '.framer-Yw3ZX.framer-v-1f09y03 .framer-8j7eic-container { left: 266px; top: calc(51.02420856610803% - 22px / 2); width: 75px; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-1iaswxc-container { bottom: 101px; height: 108px; left: 87px; right: unset; width: 13px; z-index: 0; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-ereqn5-container { bottom: 73px; height: 71px; left: 42px; right: unset; width: 14px; z-index: 0; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-1togqzb-container { height: 71px; left: -173px; top: 200px; width: 12px; z-index: 0; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-u2l7lb-container { height: 71px; left: -85px; top: 200px; width: 13px; z-index: 0; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-w97bgk-container { bottom: unset; height: 74px; left: 141px; right: unset; top: calc(47.34177215189876% - 74px / 2); width: 12px; z-index: 0; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-fpq9rw-container { bottom: 108px; height: 86px; left: 7px; width: 13px; z-index: 0; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-160pc9z-container { bottom: 107px; height: 93px; left: -81px; width: 14px; z-index: 0; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-p493zr-container { z-index: 1; }',
  '.framer-Yw3ZX.framer-v-1anadwn .framer-8j7eic-container { bottom: 110px; height: 126px; left: 104px; top: unset; width: 48px; z-index: 0; }',
  '.framer-Yw3ZX.framer-v-tv2zos .framer-gkoso3-container { left: 42px; top: 63px; }',
  '.framer-Yw3ZX.framer-v-tv2zos .framer-1yvmtw8-container { right: 54px; top: 56px; }',
  '.framer-Yw3ZX.framer-v-tv2zos .framer-w97bgk-container { bottom: 144px; right: 14px; }',
  '.framer-Yw3ZX.framer-v-tv2zos .framer-160pc9z-container { bottom: 32px; left: 84px; }',
  '.framer-Yw3ZX.framer-v-tv2zos .framer-1jw6h9g-container { left: 15px; top: 53%; }',
  '.framer-Yw3ZX.framer-v-tv2zos .framer-1igj8fa-container { left: 48%; right: unset; top: -14px; }',
  '.framer-Yw3ZX.framer-v-1j14qwb .framer-4b524j-container { left: 33px; top: 157px; }',
  '.framer-Yw3ZX.framer-v-1j14qwb .framer-d60suy-container { right: 119px; top: 59px; }',
  '.framer-Yw3ZX.framer-v-1j14qwb .framer-1iaswxc-container { bottom: unset; right: 26px; top: 48%; }',
  '.framer-Yw3ZX.framer-v-1j14qwb .framer-ereqn5-container { bottom: 65px; right: 58px; }',
  '.framer-Yw3ZX.framer-v-1j14qwb .framer-8jq7kp-container { bottom: 20px; left: 46%; }',
  '.framer-Yw3ZX.framer-v-1j14qwb .framer-121179n-container { bottom: 81px; left: 51px; }',
  '.framer-Yw3ZX.framer-v-1sk9d83 .framer-1togqzb-container { height: 50px; left: 206px; top: 76px; width: 50px; }',
  '.framer-Yw3ZX.framer-v-1sk9d83 .framer-u2l7lb-container { height: 50px; left: 222px; top: 157px; width: 50px; }',
  '.framer-Yw3ZX.framer-v-1sk9d83 .framer-dt1nri-container { height: 50px; left: 172px; top: 216px; }',
  '.framer-Yw3ZX.framer-v-1sk9d83 .framer-vm0lt-container { height: 50px; left: 89px; top: 218px; }',
  '.framer-Yw3ZX.framer-v-1sk9d83 .framer-1xv0t2j-container { height: 50px; left: 51px; top: 147px; }',
  '.framer-Yw3ZX.framer-v-1sk9d83 .framer-lc2jrz-container { bottom: 191px; left: 69px; top: unset; }',
  '.framer-Yw3ZX.framer-v-1sk9d83 .framer-15swu5u-container { height: 50px; left: 141px; top: 40px; }',
];
var FramerC6ZYtBmll = withCSS8(Component6, css7, 'framer-Yw3ZX',);
var stdin_default8 = FramerC6ZYtBmll;
FramerC6ZYtBmll.displayName = 'FYLO COMPOSITION';
FramerC6ZYtBmll.defaultProps = { height: 537, width: 1009, };
addPropertyControls8(FramerC6ZYtBmll, {
  variant: {
    options: [
      'zEXSsGxpE',
      'HovROSEim',
      'lBUZui6j9',
      'dVLWELU6e',
      'XACXI8mDn',
      'vf_oeYc8q',
      'Wzv1r0oKb',
      'ovIpGU7cl',
      'aOPZX8nJO',
      'QkfIEoKbU',
      'Du1gnhwdF',
      'MX2TbvLxw',
      'cg1e52nt2',
      'QcEIwdpHn',
      'r8IR85ZDv',
      'qMUngWgkC',
      'gDTDJiCJ2',
      'p6HKTvlB3',
      'rfZM8jP4B',
      'fhIf6dGTg',
      'Ugn1WXH_Q',
      'NsO3auvSc',
      'HAgS9njVa',
      'vhOykwvnY',
      'bmOYz6gay',
      'qT5kEYyp_',
      'ZNHbdIJKd',
      'h124nvy2N',
      'Cr5qNjOdj',
      'kFGmGEOUz',
      'l5FvQV66Q',
      'udHfq45LS',
      'Z1sTRLzN1',
      'cq7D62bxc',
    ],
    optionTitles: [
      'Variant B-2',
      'Variant A-1',
      'Variant A-2',
      'Variant A-3',
      'Variant A-4',
      'Variant B-1',
      'Variant B-3',
      'Variant B-4',
      'Variant B-5',
      'Variant B-6',
      'Variant B-7',
      'Variant B-8',
      'Variant C-1',
      'Variant C-2',
      'Variant C-3',
      'Variant C-4',
      'Variant C-5',
      'Variant C-6',
      'Variant D-1',
      'Variant D-2',
      'Variant D-3',
      'Variant D-4',
      'Variant E-1',
      'Variant E-2',
      'Variant E-3',
      'Variant E-4',
      'Variant E-5',
      'Variant E-6',
      'Variant E-7',
      'Variant F-1',
      'Variant F-2',
      'Variant F-3',
      'Variant F-4',
      'Variant F-5',
    ],
    title: 'Variant',
    type: ControlType11.Enum,
  },
},);
addFonts6(FramerC6ZYtBmll, [
  { family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  { family: 'Roboto', style: 'normal', url: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vBh05IsDqlA.woff2', weight: '500', },
  ...NodeFonts,
  ...SeedFonts,
],);

// comp.js
import { WithFramerBreakpoints, } from 'installable-framer/dist/react';
import { jsx, } from 'react/jsx-runtime';
stdin_default8.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default8, ...props, },);
};
var comp_default = stdin_default8;
export { comp_default as default, };
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
