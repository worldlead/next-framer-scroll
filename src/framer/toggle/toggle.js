'use client';

// https:https://framer.com/m/Toggle-qPdP.js@pm5Nwf7R4L4y4V92NhuS
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
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
var enabledGestures = { jy1UKfzw2: { hover: true, pressed: true, }, KDR2W3FAc: { hover: true, pressed: true, }, };
var cycleOrder = ['jy1UKfzw2', 'KDR2W3FAc',];
var variantClassNames = { jy1UKfzw2: 'framer-v-34fava', KDR2W3FAc: 'framer-v-dxxjoq', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var transformTemplate = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap = { left: 'KDR2W3FAc', right: 'jy1UKfzw2', };
var getProps = ({ height, id, width, ...props },) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref = (_variant = humanReadableVariantMap[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref !== void 0
        ? ref
        : 'jy1UKfzw2',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'jy1UKfzw2',
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap1gqof9 = activeVariantCallback(async (...args) => {
    setVariant('KDR2W3FAc',);
  },);
  const onTap16ok80 = activeVariantCallback(async (...args) => {
    setVariant('jy1UKfzw2',);
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
      className: cx('framer-TCiri', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          className: cx('framer-34fava', className,),
          'data-framer-name': 'right',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'jy1UKfzw2',
          onTap: onTap1gqof9,
          ref,
          style: { ...style, },
          ...addPropertyOverrides(
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
          children: /* @__PURE__ */ _jsxs(motion.div, {
            className: 'framer-1ooqcgs',
            'data-framer-name': 'Selected=true, State=pressed, Icon=true',
            layoutDependency,
            layoutId: 'Ei4wdAtNu',
            children: [
              /* @__PURE__ */ _jsx(motion.div, {
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
                ...addPropertyOverrides({ KDR2W3FAc: { 'data-border': true, }, }, baseVariant, gestureVariant,),
              },),
              /* @__PURE__ */ _jsxs(motion.div, {
                className: 'framer-fh6gm0',
                'data-framer-name': 'Handle container',
                layoutDependency,
                layoutId: 'dMpLVgXmB',
                children: [
                  /* @__PURE__ */ _jsx(motion.div, {
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
                  /* @__PURE__ */ _jsx(motion.div, {
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
                  /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-2q425d',
                    'data-framer-name': 'Icons/navigate_next',
                    layoutDependency,
                    layoutId: 'xC2098cIf',
                    transformTemplate,
                    children: /* @__PURE__ */ _jsx(SVG, {
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
                      ...addPropertyOverrides(
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
var css = [
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
var FramervvRGywRFH = withCSS(Component, css, 'framer-TCiri',);
var stdin_default = FramervvRGywRFH;
FramervvRGywRFH.displayName = 'Toggle';
FramervvRGywRFH.defaultProps = { height: 32, width: 52, };
addPropertyControls(FramervvRGywRFH, {
  variant: { options: ['jy1UKfzw2', 'KDR2W3FAc',], optionTitles: ['right', 'left',], title: 'Variant', type: ControlType.Enum, },
},);
addFonts(FramervvRGywRFH, [],);

// toggle.js
import { WithFramerBreakpoints, } from 'installable-framer/dist/react';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var toggle_default = stdin_default;
export { toggle_default as default, };
