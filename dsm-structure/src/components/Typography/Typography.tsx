import React from "react";
import "./Typography.css";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "caption";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "success"
  | "default";

export interface TypographyProps {

  /**  Specifies the HTML element or visual style to render */
  variant: TypographyVariant;

  /** Color theme for the text */
  color?: TypographyColor;

  /** The content to be displayed inside the typography component */
  children: React.ReactNode;

  /**  Class names to apply for custom styling */
  className?: string;

  /**  On Click handler */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const VariantProps: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  caption: "span",
};

const Typography = ({
  variant,
  color = "primary",
  children,
  className = "",
  onClick,
}: TypographyProps) => {
  const Tag: React.ElementType = VariantProps[variant];

  return (
    <Tag
      className={`typography-${variant} typography-${color} ${className}`}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

export default Typography;
