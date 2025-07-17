"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Button = _ref => {
  let {
    variant = "default",
    size = "medium",
    backgroundColor,
    label = "",
    onClick,
    disabled = false,
    tooltipText,
    tooltipPlacement = "top",
    startIcon,
    badgeContent = 0,
    type = "button",
    className = "",
    id,
    href,
    style
  } = _ref;
  const baseClasses = ["btn", `btn-${size}`, `btn-${variant}`, disabled && "btn-disabled", className].join(" ");
  const renderContent = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, startIcon && /*#__PURE__*/_react.default.createElement("span", {
    className: "start-icon"
  }, startIcon), label, badgeContent > 0 && /*#__PURE__*/_react.default.createElement("span", {
    className: "badge"
  }, badgeContent));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: tooltipText ? `tooltip tooltip-${tooltipPlacement}` : "",
    "data-tooltip": tooltipText
  }, href ? /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    id: id,
    className: baseClasses,
    onClick: onClick,
    "aria-disabled": disabled
  }, renderContent()) : /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    id: id,
    className: baseClasses,
    style: {
      backgroundColor
    },
    onClick: onClick,
    disabled: disabled
  }, renderContent()));
};
var _default = exports.default = Button;