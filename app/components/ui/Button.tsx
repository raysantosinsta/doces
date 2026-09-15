"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-serif font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-chocolate text-cream hover:bg-chocolate-light focus:ring-chocolate",
      secondary: "bg-gold text-chocolate hover:bg-gold-light focus:ring-gold",
      outline: "border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-cream focus:ring-chocolate",
      "outline-light": "border-2 border-cream text-cream hover:bg-cream hover:text-chocolate focus:ring-cream",
      ghost: "text-chocolate hover:bg-cream-dark focus:ring-chocolate-light",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
