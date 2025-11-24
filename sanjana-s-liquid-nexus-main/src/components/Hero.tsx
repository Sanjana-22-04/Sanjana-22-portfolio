import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'AI & Web Development Enthusiast';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-neon-purple/30 to-neon-pink/30 rounded-full blur-3xl liquid-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-neon-cyan/30 to-neon-blue/30 rounded-full blur-3xl liquid-blob"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >


            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">A. Sanjana</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-foreground/80 mb-8 h-8 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span>{text}</span>
              {!isTypingComplete && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-neon-cyan ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-foreground/60 mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Passionate about building intelligent systems and visually stunning web experiences.
              Specializing in AI, Machine Learning, and Full-Stack Development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <a
                href="/RESUME (3).pdf"
                download
                className="neon-button inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <button
                onClick={scrollToProjects}
                className="glass-card px-8 py-3 rounded-full font-semibold hover-glow"
              >
                View Projects
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Profile */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan p-1 animate-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Profile Circle */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card flex items-center justify-center animate-float"
              >
                <img
  src="/formal passport 1.jpg"
  alt="Profile"
  className="w-full h-full object-cover"
/>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card p-3 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
