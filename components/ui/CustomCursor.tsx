import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check for theme under cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const themeSection = element?.closest('[data-theme]');
      
      if (themeSection) {
        const theme = themeSection.getAttribute('data-theme');
        setIsDarkTheme(theme !== 'light');
      } else {
        // Default to dark if no section found (e.g. header or modal)
        setIsDarkTheme(true); 
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          // On dark theme: White bg with difference mode = Inverts colors
          // On light theme: Black bg with normal mode = Simple black dot
          backgroundColor: isDarkTheme ? '#ffffff' : '#000000',
          mixBlendMode: isDarkTheme ? 'difference' : 'normal',
        }}
        animate={{
          x: mousePosition.x - (isDarkTheme ? 32 : 6),
          y: mousePosition.y - (isDarkTheme ? 32 : 6),
          width: isDarkTheme ? (isHovering ? 96 : 64) : (isHovering ? 24 : 12),
          height: isDarkTheme ? (isHovering ? 96 : 64) : (isHovering ? 24 : 12),
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
    </>
  );
};