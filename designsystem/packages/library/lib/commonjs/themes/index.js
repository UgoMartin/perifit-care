"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  brandToken: true
};
Object.defineProperty(exports, "brandToken", {
  enumerable: true,
  get: function () {
    return _brandToken.brandToken;
  }
});
var _colors = require("./colors");
Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _colors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _colors[key];
    }
  });
});
var _fontNames = require("./fontNames");
Object.keys(_fontNames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _fontNames[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fontNames[key];
    }
  });
});
var _spacing = require("./spacing");
Object.keys(_spacing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _spacing[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _spacing[key];
    }
  });
});
var _themeContext = require("./themeContext");
Object.keys(_themeContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _themeContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _themeContext[key];
    }
  });
});
var _brandToken = require("./brandToken");
var _iconSize = require("./iconSize");
Object.keys(_iconSize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _iconSize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iconSize[key];
    }
  });
});
//# sourceMappingURL=index.js.map