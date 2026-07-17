"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
const styles = exports.styles = _reactNative.StyleSheet.create({
  wrapper: {
    justifyContent: "center"
  },
  container: {
    width: "100%",
    justifyContent: "center"
  },
  track: {
    width: "100%"
  },
  filledTrack: {
    position: "absolute",
    left: 0,
    top: 0
  },
  knob: {
    position: "absolute",
    top: 0,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    // Android shadow
    elevation: 4
  }
});
//# sourceMappingURL=styles.js.map