import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, TrendingUp } from 'lucide-react';

const Responsibilities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const responsibilities = [
    {
      title: 'Executive Commander',
      period: '2023 - Present',
      icon: <Users className="w-6 h-6" />,
      description: 'Led departmental events, managed technical workshops, and mentored peers, strengthening leadership and collaboration.',
      highlights: ['Event Leadership', 'Workshop Management', 'Peer Mentorship', 'Team Collaboration'],
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      title: 'Placement Coordinator',
      period: '2023 - 2025',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Streamlined communication between students, faculty, and placement teams while organizing recruitment-related events.',
      highlights: ['Communication Bridge', 'Event Organization', 'Recruitment Support', 'Team Coordination'],
      gradient: 'from-neon-cyan to-neon-blue',
    },
  ];

  return (
    <section id="responsibilities" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Leadership Roles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Driving impact through leadership and collaboration
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {responsibilities.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 hover-glow group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-r ${role.gradient} shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">{role.icon}</div>
                  </motion.div>
                  <span className="text-sm text-neon-cyan font-semibold">{role.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {role.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground/80 mb-2">Key Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {role.highlights.map((highlight, idx) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.gradient}`} />
                        <span className="text-foreground/70">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${role.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
