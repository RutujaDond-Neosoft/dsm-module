"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Switch.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Switch = _ref => {
  let {
    name,
    label,
    value = false,
    handleChangeValue
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "switch-wrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: value,
    onChange: handleChangeValue,
    name: name,
    "data-testid": `${name}-switch`
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "switch-slider"
  }), label && /*#__PURE__*/_react.default.createElement("span", {
    className: "switch-label"
  }, label));
};
var _default = exports.default = Switch;