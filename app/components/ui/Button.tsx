"use client";

import React from 'react';
import { motion, HTMLMotionProps, useMotionValue, useSpring } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth, children, onMouseMove, onMouseLeave, ...props }, ref) => {
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const hX = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const hY = (e.clientY - rect.top - rect.height / 2) * 0.3;
      x.set(hX);
      y.set(hY);
      
      if (onMouseMove) onMouseMove(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      x.set(0);
      y.set(0);
      
      if (onMouseLeave) onMouseLeave(e);
    };

    const baseStyles = "inline-flex items-center justify-center font-serif font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden relative";
    
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
        style={{ x: mouseXSpring, y: mouseYSpring }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classes}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
