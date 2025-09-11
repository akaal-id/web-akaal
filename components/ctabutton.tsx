"use client";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'purple' | 'teal' | 'white';
}

export default function CTAButton({ children, className = "", onClick, variant = 'purple' }: CTAButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'teal':
        return {
          className: `inline-flex items-center justify-center whitespace-nowrap rounded-full text-16px font-normal px-6 py-3 ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white border-0 shadow-[inset_0px_6px_10px_rgba(42,207,234,1)] hover:shadow-[inset_0_-10px_10px_rgba(42,207,234,1.2),0_4px_20px_rgba(34,166,187,0.3)] ${className}`,
          style: {
            background: 'linear-gradient(to bottom, #115C68, #22A6BB)'
          }
        };
      case 'white':
        return {
          className: `inline-flex items-center justify-center whitespace-nowrap rounded-full text-16px font-normal px-6 py-3 ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black border-0 shadow-[inset_0px_6px_10px_rgba(151,71,255,0.25)] hover:shadow-[inset_0_-10px_10px_rgba(151,71,255,0.25),0_4px_20px_rgba(151,71,255,0.3)] ${className}`,
          style: {
            background: 'linear-gradient(to bottom, #FEFEFF, #D9D9D9)'
          }
        };
      default: // purple
        return {
          className: `inline-flex items-center justify-center whitespace-nowrap rounded-full text-16px font-normal px-6 py-3 ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white border-0 shadow-[inset_0px_6px_10px_rgba(255,255,255,0.25)] hover:shadow-[inset_0_-10px_10px_rgba(255,255,255,0.25),0_4px_20px_rgba(101,67,236,0.3)] ${className}`,
          style: {
            background: 'linear-gradient(to bottom, #392686, #6543EC)'
          }
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <button 
      className={variantStyles.className}
      style={variantStyles.style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
