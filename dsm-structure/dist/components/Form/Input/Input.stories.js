"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ValidState = exports.FloatingLabel = exports.ErrorState = exports.DisabledState = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Input = _interopRequireDefault(require("./Input"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const meta = {
  title: "Components/Input",
  component: _Input.default,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "full"]
    },
    state: {
      control: "select",
      options: ["debouncing-error", "untouched", "error", "valid", "disabled"]
    },
    type: {
      control: "select",
      options: ["text", "password", "email"]
    },
    align: {
      control: "select",
      options: ["left", "center", "right"]
    }
  }
};
const ErrorState = exports.ErrorState = {
  args: {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "invalid-email",
    state: "error"
  }
};
const ValidState = exports.ValidState = {
  args: {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "test@example.com",
    state: "valid"
  }
};
const DisabledState = exports.DisabledState = {
  args: {
    name: "email",
    label: "Email",
    placeholder: "Cannot edit",
    value: "readonly@example.com",
    state: "disabled"
  }
};
var _default = exports.default = meta;
const Default = exports.Default = {
  args: {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    value: "",
    size: "medium",
    state: "untouched"
  }
};
const ControlledInput = () => {
  const [value, setValue] = (0, _react.useState)("");
  return /*#__PURE__*/_react.default.createElement(_Input.default, {
    name: "username",
    label: "Username",
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: "Enter username",
    size: "medium",
    state: "valid",
    floatingLabel: true
  });
};
const FloatingLabel = exports.FloatingLabel = {
  render: () => /*#__PURE__*/_react.default.createElement(ControlledInput, null)
};