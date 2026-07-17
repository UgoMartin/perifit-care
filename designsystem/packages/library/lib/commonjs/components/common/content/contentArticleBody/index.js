"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentArticleBody = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeHtmlview = _interopRequireDefault(require("react-native-htmlview"));
var _themes = require("../../../../themes");
var _articleRating = require("../articleRating");
var _images = _interopRequireDefault(require("../../../../assets/images"));
var _styles = require("./styles");
var _htmlEntities = require("html-entities");
var _cachedImage = require("../utils/cachedImage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const getScaledSize = (width, height, maxWidth) => {
  if (width <= maxWidth) {
    return {
      width,
      height
    };
  }
  const ratio = maxWidth / width;
  return {
    width: maxWidth,
    height: height * ratio
  };
};
const resolveImageSize = ({
  maxWidth,
  width,
  height,
  naturalWidth,
  naturalHeight
}) => {
  if (width && height) {
    return getScaledSize(width, height, maxWidth);
  }
  if (!naturalWidth || !naturalHeight) {
    return null;
  }
  if (width) {
    return getScaledSize(width, naturalHeight * width / naturalWidth, maxWidth);
  }
  if (height) {
    return getScaledSize(naturalWidth * height / naturalHeight, height, maxWidth);
  }
  return getScaledSize(naturalWidth, naturalHeight, maxWidth);
};
const parseDimension = value => {
  if (!value) {
    return undefined;
  }
  const parsed = Number.parseInt(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
};
const HtmlImage = ({
  uri,
  maxWidth,
  width,
  height
}) => {
  const [size, setSize] = (0, _react.useState)(() => resolveImageSize({
    maxWidth,
    width,
    height
  }));
  (0, _react.useEffect)(() => {
    let isCancelled = false;
    const setResolvedSize = (naturalWidth, naturalHeight) => {
      if (isCancelled) {
        return;
      }
      setSize(resolveImageSize({
        maxWidth,
        width,
        height,
        naturalWidth,
        naturalHeight
      }));
    };
    if (width && height) {
      setResolvedSize();
      return () => {
        isCancelled = true;
      };
    }
    _reactNative.Image.getSize(uri, (naturalWidth, naturalHeight) => {
      setResolvedSize(naturalWidth, naturalHeight);
    }, () => {
      setResolvedSize();
    });
    return () => {
      isCancelled = true;
    };
  }, [height, maxWidth, uri, width]);
  if (!size) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
    source: {
      uri
    },
    resizeMode: "contain",
    style: {
      width: size.width,
      height: size.height,
      marginVertical: _themes.spacing.xs
    }
  });
};
const ContentArticleBody = ({
  title,
  htmlContent,
  isScrollLocked,
  bottomPadding,
  feedbackResult,
  ratingTitle,
  onRatingChange,
  showPremiumIcon = false
}) => {
  const {
    typography,
    themeColors
  } = (0, _themes.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors);
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const sanitizedHtmlContent = (0, _react.useMemo)(() => htmlContent?.replace(/\n/g, ""), [htmlContent]);
  const contentWidth = width - _themes.spacing.md * 2;
  const renderNode = (0, _react.useCallback)((node, index) => {
    if (node.name !== "img" || !node.attribs?.src) {
      return undefined;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlImage, {
      uri: node.attribs.src,
      maxWidth: contentWidth,
      width: parseDimension(node.attribs.width) ?? parseDimension(node.attribs["data-width"]),
      height: parseDimension(node.attribs.height) ?? parseDimension(node.attribs["data-height"])
    }, index);
  }, [contentWidth]);
  const stylesheet = (0, _react.useMemo)(() => ({
    p: {
      ...typography.body
    },
    h1: {
      ...typography.h3
    },
    h2: {
      ...typography.h4
    },
    h3: {
      ...typography.h5
    },
    h4: {
      ...typography.subtitle
    },
    h5: {
      ...typography.subtitle
    },
    ul: {
      ...typography.body,
      marginBottom: _themes.spacing.s
    },
    ol: {
      ...typography.body
    },
    li: {
      ...typography.body
    }
  }), [typography]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: styles.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
      showsVerticalScrollIndicator: false,
      contentContainerStyle: [styles.contentContainer, {
        paddingBottom: bottomPadding
      }],
      scrollEnabled: !isScrollLocked,
      children: [showPremiumIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.iconContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
          source: _images.default.contentTab.premiumIcon,
          style: styles.icon
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: typography.h1,
        children: (0, _htmlEntities.decode)(title)
      }), !!sanitizedHtmlContent && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeHtmlview.default, {
        value: sanitizedHtmlContent,
        paragraphBreak: "",
        renderNode: renderNode,
        stylesheet: stylesheet
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_articleRating.ArticleRating, {
        title: ratingTitle ?? "",
        feedbackResult: feedbackResult,
        onRatingChange: onRatingChange
      })]
    })
  });
};
exports.ContentArticleBody = ContentArticleBody;
//# sourceMappingURL=index.js.map