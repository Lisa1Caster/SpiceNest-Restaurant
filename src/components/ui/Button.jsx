import React from 'react';

/**
 * Reusable Button component supporting button and anchor modes.
 * Adheres to single-line controls, zero-slop styling, and WCAG AA contrast.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'whatsapp'
  size = 'md',        // 'sm' | 'md' | 'lg'
  isExternal = false,
  className = '',
  type = 'button',
  icon,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-sans font-medium whitespace-nowrap rounded-[8px] transition-all duration-200 ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-3.5 text-base md:text-lg min-h-[48px]",
  };

  const variantStyles = {
    primary: "bg-[#D4AF37] hover:bg-[#BF9B2D] text-[#072018] font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-[#0B3D2E] hover:bg-[#07261D] text-[#FAF8F5] border border-[#0B3D2E] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    outline: "bg-transparent text-[#FAF8F5] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#072018] hover:-translate-y-0.5 active:translate-y-0",
    outlineDark: "bg-transparent text-[#0B3D2E] border border-[#0B3D2E]/30 hover:border-[#0B3D2E] hover:bg-[#0B3D2E]/5",
    whatsapp: "bg-[#1E7E34] hover:bg-[#155D27] text-white font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
