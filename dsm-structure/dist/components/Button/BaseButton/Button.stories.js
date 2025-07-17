"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Success = exports.Small = exports.Secondary = exports.Primary = exports.Large = exports.Default = exports.Danger = void 0;
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: 'Components/Button',
  component: _Button.default,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'default']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    tooltipPlacement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    }
  }
};
var _default = exports.default = meta;
const Primary = exports.Primary = {
  args: {
    variant: 'primary',
    label: 'Primary Button'
  }
};
const Secondary = exports.Secondary = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button'
  }
};
const Danger = exports.Danger = {
  args: {
    variant: 'danger',
    label: 'Danger Button'
  }
};
const Success = exports.Success = {
  args: {
    variant: 'success',
    label: 'Success Button'
  }
};
const Default = exports.Default = {
  args: {
    variant: 'default',
    label: 'Default Button'
  }
};
const Large = exports.Large = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button'
  }
};
const Small = exports.Small = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small Button'
  }
};

// // Story with tooltip
// export const WithTooltip: Story = {
//   args: {
//     variant: 'primary',
//     label: 'Hover Me',
//     tooltipText: 'This is a tooltip',
//     tooltipPlacement: 'bottom',
//   },
// };

// // Story with icon and badge
// export const WithIconAndBadge: Story = {
//   args: {
//     variant: 'success',
//     label: 'Notify',
//     badgeContent: 3,
//     startIcon: <i className="fa fa-bell" />,
//   },
// };

// export const LinkButton: Story = {
//   args: {
//     variant: 'primary',
//     label: 'Go to Google',
//     href: 'https://www.google.com',
//     tooltipText: 'Opens Google',
//     tooltipPlacement: 'top',
//   },
// };