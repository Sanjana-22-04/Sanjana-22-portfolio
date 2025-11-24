import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-8 h-8 border-2 border-neon-purple rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 750,
          damping: 35,
        }}
      >
        <div className="w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
      </motion.div>

      {/* Liquid Blob Follower */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 60,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 blur-2xl" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
