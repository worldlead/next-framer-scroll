'use client';

// https:https://framer.com/m/Radio-BcDa.js@UCSXqWITtmuGmi2ZERWH
import { jsx as _jsx, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  SVG,
  useActiveVariantCallback,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'installable-framer/dist/framer';
import { LayoutGroup, motion, MotionConfigContext, } from 'framer-motion';
import * as React from 'react';
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
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
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
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
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
  const defaultLayoutId = React.useId();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(motion.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx('framer-L5s7X', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          className: cx('framer-afvvw', className,),
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
          children: /* @__PURE__ */ _jsx(motion.div, {
            className: 'framer-4zjiij',
            'data-framer-name': 'Selected=true, State=Pressed',
            layoutDependency,
            layoutId: 'n23OCPwPr',
            children: /* @__PURE__ */ _jsx(motion.div, {
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
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1n0ftg3',
                'data-framer-name': 'state-layer',
                layoutDependency,
                layoutId: 'ysxxTKwvI',
                style: { backgroundColor: 'rgba(0, 0, 0, 0)', },
                variants: {
                  'nPpSWwiWE-hover': { backgroundColor: 'rgba(29, 27, 32, 0.08)', },
                  'r5tWv5mqY-hover': { backgroundColor: 'rgba(29, 27, 32, 0.12)', },
                },
                children: /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-utueao',
                  'data-framer-name': 'icon',
                  layoutDependency,
                  layoutId: 'B_Q84JU7b',
                  children: /* @__PURE__ */ _jsx(SVG, {
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
var css = [
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
var FramergGsg8DxuX = withCSS(Component, css, 'framer-L5s7X',);
var stdin_default = FramergGsg8DxuX;
FramergGsg8DxuX.displayName = 'Radio';
FramergGsg8DxuX.defaultProps = { height: 48, width: 48, };
addPropertyControls(FramergGsg8DxuX, {
  variant: { options: ['r5tWv5mqY', 'nPpSWwiWE',], optionTitles: ['off', 'on',], title: 'Variant', type: ControlType.Enum, },
},);
addFonts(FramergGsg8DxuX, [],);

// radio.js
import { WithFramerBreakpoints, } from 'installable-framer/dist/react';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var radio_default = stdin_default;
export { radio_default as default, };
