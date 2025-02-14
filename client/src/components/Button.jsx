import React from "react";

const Button = ({
  children = "button",
  backgroundColor = "bg-amber-400",
  padding = "py-1 px-2",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`${backgroundColor} text-white ${padding} rounded-lg cursor-pointer transition-all duration-200 hover:opacity-70 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
