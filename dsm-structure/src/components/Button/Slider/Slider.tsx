import React from 'react';
import './Slider.css';

export interface SliderProps {
  /** Current value of the slider */
  value: number;
  /** Minimum allowed value */
  min: number;
  /** Maximum allowed value */
  max: number;
  /** Optional step between values */
  step?: number;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Label for accessibility and testing */
  label: string;
  /** Callback to return the new value */
  getValueCallback: (value: number) => void;
}

const Slider = ({
  value,
  min,
  max,
  step = 1,
  disabled = false,
  label,
  getValueCallback,
}: SliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(e.target.value);
    getValueCallback(newVal);
  };

  return (
    <div className="slider-container">
      <label htmlFor={label} className="slider-label">
        {label}
      </label>
      <input
        type="range"
        id={label}
        className="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        data-testid={label}
      />
      <span className="slider-value">{value}</span>
    </div>
  );
};

export default Slider;