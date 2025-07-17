"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _Switch = _interopRequireDefault(require("./Switch"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: 'Components/Switch',
  component: _Switch.default,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'boolean'
    }
  }
};
var _default = exports.default = meta;
const Default = exports.Default = {
  args: {
    name: 'testSwitch',
    label: 'Enable feature',
    value: false,
    handleChangeValue: () => alert('Switched!')
  }
};