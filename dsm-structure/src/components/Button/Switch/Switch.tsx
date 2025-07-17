import React from 'react';
import './Switch.css';

export interface SwitchProps {
    /** Name attribute for the switch input (used for identification) */
    name: string;
  
    /** Optional label to display next to the switch */
    label?: string;
  
    /** The current value (checked or not) of the switch */
    value?: boolean;
  
    /** Callback function called when the switch is toggled */
    handleChangeValue: () => void;
  }

const Switch = ({ name, label, value = false, handleChangeValue }: SwitchProps) => {
  return (
    <label className="switch-wrapper">
      <input
        type="checkbox"
        checked={value}
        onChange={handleChangeValue}
        name={name}
        data-testid={`${name}-switch`}
      />
      <span className="switch-slider" />
      {label && <span className="switch-label">{label}</span>}
    </label>
  );
};

export default Switch;