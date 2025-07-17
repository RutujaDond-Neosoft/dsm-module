"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _Typography = _interopRequireDefault(require("./Typography"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: 'Example/Typography',
  component: _Typography.default,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'caption']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default']
    }
  }
};
var _default = exports.default = meta;
const Default = exports.Default = {
  args: {
    variant: 'h3',
    color: 'primary',
    children: 'Hello Typography'
  }
};