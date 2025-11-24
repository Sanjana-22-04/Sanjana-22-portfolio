import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Name */}
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            A. Sanjana
          </motion.div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((link) => (
              <motion.button
                key={link}
                onClick={() => {
                  const element = document.getElementById(link.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {link}
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <motion.div
            className="flex items-center gap-2 text-sm text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>© 2024 A. Sanjana.  Designed and Developed with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" />
            </motion.div>
            <span>React</span>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="glass-card p-3 rounded-full hover-glow mt-4"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
