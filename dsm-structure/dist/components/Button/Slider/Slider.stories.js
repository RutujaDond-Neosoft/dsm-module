"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Slider = _interopRequireDefault(require("./Slider"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const meta = {
  title: 'Example/Slider',
  component: _Slider.default,
  tags: ['autodocs']
};
var _default = exports.default = meta;
const SliderWrapper = () => {
  const [value, setValue] = (0, _react.useState)(50);
  return /*#__PURE__*/_react.default.createElement(_Slider.default, {
    label: "Volume",
    value: value,
    min: 0,
    max: 100,
    step: 1,
    getValueCallback: setValue
  });
};
const Default = exports.Default = {
  render: () => /*#__PURE__*/_react.default.createElement(SliderWrapper, null)
};