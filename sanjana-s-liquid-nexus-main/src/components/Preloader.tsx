import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, delay: isLoading ? 0 : 0.3 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          const preloader = document.getElementById('preloader');
          if (preloader) preloader.style.display = 'none';
        }
      }}
    >
      <div className="relative">
        {/* Liquid Blob Animation */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full blur-3xl" />
        </motion.div>

        {/* Center Logo/Text */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-6xl font-bold gradient-text mb-4">AS</div>
          <motion.div
            className="flex gap-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-neon-pink"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-neon-cyan"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-neon-purple"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
