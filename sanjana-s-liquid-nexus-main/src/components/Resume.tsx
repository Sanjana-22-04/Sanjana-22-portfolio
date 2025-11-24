import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Download my detailed resume or view it online
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-12 hover-glow relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center mb-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink rounded-2xl blur-xl opacity-50 animate-pulse" />
                  <div className="relative p-8 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                </div>
              </motion.div>

              <h3 className="text-3xl font-bold mb-4">Professional Resume</h3>
              <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
                A comprehensive overview of my skills, experience, projects, and achievements in AI and web development.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/RESUME (3).pdf"
                  download
                  className="neon-button inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.a>
                <motion.a
  href="/RESUME (3).pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="glass-card px-8 py-3 rounded-full font-semibold hover-glow inline-flex items-center justify-center gap-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Eye className="w-5 h-5" />
  Preview Resume
</motion.a>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                {[
                  { label: 'Experience', value: '2+ Years' },
                  { label: 'Projects', value: '5+' },
                  { label: 'Technologies', value: '10+' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 border-2 border-neon-purple/20 rounded-full" />
            <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-neon-cyan/20 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
