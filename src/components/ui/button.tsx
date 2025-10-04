import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "primary";
  href?: string;
}

const baseStyles =
  "w-80 md:w-32 text-center px-4 py-2 rounded-lg border-2 transition-colors transition-transform duration-300 ease-in-out font-bold";

const variants = {
  default: "bg-white text-black border-black hover:bg-orange-300 transform hover:scale-105",
  primary: "bg-black text-white border-black hover:bg-white",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  href,
}) => {
  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
};

export default Button;
