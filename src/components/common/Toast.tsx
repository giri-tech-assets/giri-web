import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
  position?: "top" | "bottom";
  type?: "fixed" | "default";
  align?: "left" | "center" | "right";
}

export const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  position = "bottom",
  type = "default",
  align = "right"
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const baseClasses = "bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in";

  let positionClasses = "";
  if (type === "fixed") {
    positionClasses = `fixed ${position}-5 ${
      align === "left" ? "left-5" : align === "right" ? "right-5" : "left-1/2 transform -translate-x-1/2"
    }`;
  } else {
    positionClasses = `${
      align === "left" ? "self-start" : align === "right" ? "self-end" : "self-center"
    }`;
  }

  const className = `${baseClasses} ${positionClasses}`;

  return (
    <div className={className}>
      <p>{message}</p>
    </div>
  );
};
