"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Input.css");
var _Typography = _interopRequireDefault(require("../../Typography/Typography"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Input = _ref => {
  let {
    align = "left",
    capitalise = false,
    formId,
    keyboardMode = "text",
    label,
    labelAlwaysShow = false,
    mask,
    maskSeparator,
    maxlength,
    name,
    hintText,
    placeholder,
    placeholderAsLabel = false,
    required = false,
    size = "medium",
    state = "untouched",
    type = "text",
    value,
    onChange,
    floatingLabel
  } = _ref;
  const showFloating = floatingLabel && label;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `input-wrapper input-${size} state-${state} ${showFloating ? "floating" : ""}`
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-field-wrapper"
  }, !showFloating && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: "input-label"
  }, label, " ", required && /*#__PURE__*/_react.default.createElement("span", {
    className: "required-asterisk"
  }, "*")), /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    form: formId,
    name: name,
    type: type,
    inputMode: keyboardMode,
    value: capitalise ? value.toUpperCase() : value,
    onChange: onChange,
    className: `input-field align-${align}`,
    placeholder: showFloating ? " " : placeholder,
    maxLength: maxlength,
    disabled: state === "disabled",
    required: required
  }), showFloating && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: "floating-label"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1"
  }, " ", label), " ", required && /*#__PURE__*/_react.default.createElement("span", {
    className: "required-asterisk"
  }, "*"))), hintText && /*#__PURE__*/_react.default.createElement("div", {
    className: "input-hint"
  }, hintText));
};
var _default = exports.default = Input;