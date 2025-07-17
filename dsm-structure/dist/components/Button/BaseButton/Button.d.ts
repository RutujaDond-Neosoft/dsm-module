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
declare const Button: ({ variant, size, backgroundColor, label, onClick, disabled, tooltipText, tooltipPlacement, startIcon, badgeContent, type, className, id, href, style, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
