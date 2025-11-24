import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full-Stack Web Development Intern',
      company: 'Prodigy InfoTech',
      period: '2024',
      description: 'Built responsive full-stack apps, integrated REST APIs, and enhanced UI performance. Gained hands-on expertise in deploying and optimizing production-ready applications.',
      skills: ['React.js', 'Node.js', 'REST APIs', 'UI/UX', 'Deployment'],
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      title: 'Mobile Application Development',
      company: 'Elewayte',
      period: '2024',
      description: 'Completed a certified program focused on mobile app design, development, and deployment using modern frameworks and best practices.',
      skills: ['Mobile Development', 'App Design', 'Modern Frameworks', 'Best Practices'],
      gradient: 'from-neon-cyan to-neon-blue',
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-neon-cyan/5" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Real-world experience building impactful solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-purple transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8"
                whileHover={{ scale: 1.2 }}
              >
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} shadow-[0_0_20px_rgba(168,85,247,0.5)]`} />
                <div className={`absolute inset-0 w-8 h-8 -top-2 -left-2 rounded-full bg-gradient-to-r ${exp.gradient} opacity-20 animate-ping`} />
              </motion.div>

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <motion.div
                  className="glass-card p-6 hover-glow group"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Company Icon */}
                  <div className={`inline-flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.gradient}`}>
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-neon-cyan font-semibold">{exp.company}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {exp.title}
                  </h3>

                  <div className={`flex items-center gap-2 text-sm text-foreground/60 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full glass-card text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
