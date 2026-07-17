"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaywallOfferModal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _themes = require("../../../themes");
var _bottomSheet = require("../bottomSheet");
var _button = require("../button");
var _utils = require("../../../utils");
var _styles = require("./styles");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _images = _interopRequireDefault(require("../../../assets/images"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const PaywallOfferContent = ({
  paywallInfo,
  onAccept,
  onClose,
  containerStyle
}) => {
  const {
    themeColors,
    typography
  } = (0, _themes.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography);
  const {
    bgImageSource = _images.default.contentTab.premiumBackgroundImage,
    title,
    subtitle,
    cta,
    secondaryCta
  } = paywallInfo;
  const paywallBannerAspectRatio = (0, _react.useMemo)(() => {
    const resolved = _reactNative.Image.resolveAssetSource(bgImageSource);
    if (resolved?.width && resolved?.height) {
      return resolved.width / resolved.height;
    }
    return 1;
  }, [bgImageSource]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeGestureHandler.ScrollView, {
    bounces: false,
    contentContainerStyle: [styles.paywallGradient, {
      paddingTop: bgImageSource ? undefined : _themes.spacing.md
    }, containerStyle],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ImageBackground, {
      source: bgImageSource,
      resizeMode: "contain",
      style: [styles.paywallHeroImage, {
        aspectRatio: paywallBannerAspectRatio,
        height: bgImageSource ? undefined : 120
      }],
      imageStyle: styles.paywallHeroImageContent,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
        style: styles.paywallHeroGradient,
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 1
        },
        locations: [0.65, 1],
        colors: [(0, _utils.hexWithAlpha)(themeColors.icon.clubPerifitRemainsBlack, 0), (0, _utils.hexWithAlpha)(themeColors.icon.clubPerifitRemainsBlack, 1)]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
        source: _images.default.contentTab.premiumLargeIcon,
        resizeMode: "contain",
        style: styles.paywallLargePremiumIcon
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.paywallBody,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.paywallTitle,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.paywallSubtitle,
        children: subtitle
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.paywallButtons,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
          title: cta,
          onPress: onAccept,
          variant: "inversed",
          size: "big",
          style: styles.paywallPrimaryButton,
          titleStyle: {
            color: themeColors.text.clubPerifit
          }
        }), !!secondaryCta && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
          title: secondaryCta,
          onPress: onClose,
          variant: "primary",
          size: "big",
          style: styles.paywallSecondaryButton,
          titleStyle: {
            color: themeColors.text.inversedRemainsWhite
          }
        })]
      })]
    })]
  });
};
const PaywallOfferModal = props => {
  const {
    visible,
    onClose,
    renderBackdrop,
    isModal = true
  } = props;
  if (isModal) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_bottomSheet.BottomSheet, {
      showCloseButton: false,
      showDragHandle: false,
      renderBackdrop: renderBackdrop,
      visible: visible,
      onClose: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PaywallOfferContent, {
        ...props
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PaywallOfferContent, {
    ...props
  });
};
exports.PaywallOfferModal = PaywallOfferModal;
PaywallOfferModal.displayName = "PaywallOfferModal";
//# sourceMappingURL=index.js.map