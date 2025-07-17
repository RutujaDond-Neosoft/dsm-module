"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Typography.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const VariantProps = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  caption: "span"
};
const Typography = _ref => {
  let {
    variant,
    color = "primary",
    children,
    className = "",
    onClick
  } = _ref;
  const Tag = VariantProps[variant];
  return /*#__PURE__*/_react.default.createElement(Tag, {
    className: `typography-${variant} typography-${color} ${className}`,
    onClick: onClick
  }, children);
};
var _default = exports.default = Typography;