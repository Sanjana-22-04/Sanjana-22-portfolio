import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Brain, Users } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-neon-purple to-neon-pink',
    },
    {
      title: 'Frameworks',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Flask', 'React.js', 'Express.js', 'Node.js'],
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      title: 'AI/Tools',
      icon: <Database className="w-6 h-6" />,
      skills: ['Docker', 'GitHub', 'Postman', 'OpenCV', 'Tesseract OCR'],
      color: 'from-neon-pink to-neon-purple',
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      skills: ['Leadership', 'Collaboration', 'Problem Solving', 'Communication'],
      color: 'from-neon-blue to-neon-cyan',
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            A diverse tech stack powering innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">{category.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground/80">{skill}</span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Bubbles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['MySQL', 'Firebase', 'REST APIs','AI','UI/UX'].map((skill, index) => (
            <motion.div
              key={skill}
              className="glass-card px-6 py-3 rounded-full hover-glow cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <span className="text-sm font-medium gradient-text">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
