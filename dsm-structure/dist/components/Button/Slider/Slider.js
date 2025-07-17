"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Slider.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Slider = _ref => {
  let {
    value,
    min,
    max,
    step = 1,
    disabled = false,
    label,
    getValueCallback
  } = _ref;
  const handleChange = e => {
    const newVal = Number(e.target.value);
    getValueCallback(newVal);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: label,
    className: "slider-label"
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    id: label,
    className: "slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: handleChange,
    disabled: disabled,
    "data-testid": label
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "slider-value"
  }, value));
};
var _default = exports.default = Slider;