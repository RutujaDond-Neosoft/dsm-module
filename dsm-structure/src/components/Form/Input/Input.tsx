import React from "react";
import "./Input.css";
import Typography from "../../Typography/Typography";

export interface InputProps {
  /** The text alignment of the input field */
  align?: "left" | "center" | "right";

  /** Auto capitalise the input */
  capitalise?: boolean;

  /** Id of the form the field is linked to */
  formId?: string;

  /** Input mode of the field */
  keyboardMode?: "numeric" | "text" | "email";

  /** Field label text - defaults to placeholder */
  label?: string;

  /** Always show the field label */
  labelAlwaysShow?: boolean;

  /** Input mask type */
  mask?: "number" | "date" | "thousands-spaced";

  /** Input mask separator override */
  maskSeparator?: string;

  /** Limit the number of characters the user is allowed to input */
  maxlength?: number;

  /** Name of the field in the form */
  name: string;

  /** Hint text which appears under form input field */
  hintText?: string;

  /** The placeholder value for the input field */
  placeholder?: string;

  /** Show the placeholder text as label when label text not present */
  placeholderAsLabel?: boolean;

  /** Used to determine whether the input field is required. */
  required?: boolean;

  /** The size of the input field */
  size?: "small" | "medium" | "large" | "full";

  /** Used to determine whether the element is disabled or has state */
  state?: "debouncing-error" | "untouched" | "error" | "valid" | "disabled";

  /** Input field type */
  type?: "text" | "password" | "email";

  /** Value typed in the field */
  value: string;

  /** OnChange handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** Show floating label */
  floatingLabel?: boolean;
}

const Input: React.FC<InputProps> = ({
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
  floatingLabel,
}) => {
  const showFloating = floatingLabel && label;

  return (
    <div
      className={`input-wrapper input-${size} state-${state} ${
        showFloating ? "floating" : ""
      }`}
    >
      <div className="input-field-wrapper">
        {!showFloating && (
          <label htmlFor={name} className="input-label">
            {label} {required && <span className="required-asterisk">*</span>}
          </label>
        )}
        <input
          id={name}
          form={formId}
          name={name}
          type={type}
          inputMode={keyboardMode}
          value={capitalise ? value.toUpperCase() : value}
          onChange={onChange}
          className={`input-field align-${align}`}
          placeholder={showFloating ? " " : placeholder}
          maxLength={maxlength}
          disabled={state === "disabled"}
          required={required}
        />
        {showFloating && (
          <label htmlFor={name} className="floating-label">
           <Typography variant="body1"> {label}</Typography> {required && <span className="required-asterisk">*</span>}
          </label>
        )}
      </div>
      
      {hintText && <div className="input-hint">{hintText}</div>}
    </div>
  );
};

export default Input;