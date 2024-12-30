import React from "react";
import Link from "next/link";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  href?: string; // URL for redirection
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  className?: string;
  target?: "_blank" | "_self"; // To open links in a new tab if required
  icon?: React.ReactNode; // Icon to display
  iconPosition?: "left" | "right"; // Position of the icon
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  href,
  variant = "primary",
  disabled = false,
  className = "",
  target = "_self",
  icon,
  iconPosition = "left",
}) => {
  const baseStyles =
    "rounded-full px-6 py-3 text-md font-semibold transition duration-200 focus:outline-none inline-flex items-center justify-center gap-2";
  const variantStyles = {
    primary: "bg-pink-500 text-white hover:bg-purple-500",
    secondary: "bg-white text-pink-500 hover:bg-pink-500 hover:text-white",
    outline:
      "border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  // Conditional class assignment
  const classes = `${baseStyles} ${variantStyles[variant]} ${
    disabled ? disabledStyles : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  // Render a Link if href is provided and the button is not disabled
  if (href && !disabled) {
    return (
      <Link
        href={href}
        passHref
        className={classes}
        target={target} // Optional: open link in a new tab if target="_blank"
        rel={target === "_blank" ? "noopener noreferrer" : undefined} // Prevent security issues with _blank
      >
        {content}
      </Link>
    );
  }

  // Render a button otherwise
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
