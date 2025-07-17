import React from "react";
import "./Button.css";

interface ButtonProps {
  /** The visual style of the button */
  variant?: "primary" | "secondary" | "default" | "danger" | "success";

  /** Optional custom background color (overrides default variant color)*/
  backgroundColor?: string;

  /** Size of the button */
  size?: "small" | "medium" | "large";

  /** Text content inside the button */
  label?: string;

  /** Callback function triggered when the button is clicked */
  onClick?: () => void;

  /** Whether the button is disabled and non-interactive */
  disabled?: boolean;

  /** Text to be shown in a tooltip on hover */
  tooltipText?: string;

  /** Position of the tooltip relative to the button */
  tooltipPlacement?: "top" | "bottom" | "left" | "right";

  /** Icon or element to render before the button text */
  startIcon?: React.ReactNode;

  /** Shows a badge with the number inside the button */
  badgeContent?: number;

  /** The HTML button type */
  type?: "button" | "submit" | "reset";

  /** Additional CSS class names to apply to the button */
  className?: string;

  /** `id` attribute for identifying the button in DOM or tests */
  id?: any;

  /** href for redirection */
  href?: any;

  /** If want to add any custom style */
  style?: any;
}

const Button = ({
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
  style,
}: ButtonProps) => {
  const baseClasses = [
    "btn",
    `btn-${size}`,
    `btn-${variant}`,
    disabled && "btn-disabled",
    className,
  ]
    .join(" ");

  const renderContent = () => (
    <>
      {startIcon && <span className="start-icon">{startIcon}</span>}
      {label}
      {badgeContent > 0 && <span className="badge">{badgeContent}</span>}
    </>
  );

  return (
    <div
      className={tooltipText ? `tooltip tooltip-${tooltipPlacement}` : ""}
      data-tooltip={tooltipText}
    >
      {href ? (
        <a
          href={href}
          id={id}
          className={baseClasses}
          onClick={onClick}
          aria-disabled={disabled}
        >
          {renderContent()}
        </a>
      ) : (
        <button
          type={type}
          id={id}
          className={baseClasses}
          style={{ backgroundColor }}
          onClick={onClick}
          disabled={disabled}
        >
          {renderContent()}
        </button>
      )}
    </div>
  );
};

export default Button;
