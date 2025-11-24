import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    { year: '2022', title: 'Started My AI Journey', icon: <Target className="w-5 h-5" /> },
    { year: '2023', title: 'Full-Stack Development Foundation', icon: <GraduationCap className="w-5 h-5" /> },
    { year: '2024', title: 'Professional Growth & Skill Expansion', icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 hover-glow">
              <p className="text-foreground/80 leading-relaxed">
                I am a passionate and forward-thinking IT student specializing in
                <span className="text-neon-purple font-semibold"> Artificial Intelligence</span>,
                <span className="text-neon-cyan font-semibold"> Deep Learning</span>, and
                <span className="text-neon-pink font-semibold"> Full-Stack Web Development</span>.  
                I have hands-on experience building intelligent systems for education, healthcare,
                and environmental sustainability.
              </p>
            </div>

            <div className="glass-card p-8 hover-glow">
              <p className="text-foreground/80 leading-relaxed">
                I have strong problem-solving abilities, modern development skills, 
                and a keen eye for clean, user-centric design. I aim to create meaningful 
                technological solutions powered by AI and practical innovation.
              </p>
            </div>

            <div className="glass-card p-8 hover-glow">
              <p className="text-foreground/80 leading-relaxed">
                I enjoy building visually engaging digital experiences, scalable backend systems, 
                and continuously exploring emerging technologies that inspire creativity and impact.
              </p>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 relative"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Academic Journey</h3>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <motion.div
                  className="glass-card p-4 rounded-xl group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-neon-cyan">{milestone.icon}</div>
                </motion.div>

                <div className="flex-1 glass-card p-6 hover-glow">
                  <div className="text-neon-purple font-bold mb-1">{milestone.year}</div>
                  <div className="text-foreground/80">{milestone.title}</div>
                </div>
              </motion.div>
            ))}

            {/* Decorative Line */}
            <div className="absolute left-[60px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-neon-purple to-transparent hidden md:block" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '5+', label: 'Projects' },
            { number: '2+', label: 'Internships' },
            { number: '10+', label: 'Technologies' },
            { number: '3+', label: 'Years Learning' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center hover-glow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
