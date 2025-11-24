import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Medal, Star, Award } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Hackathon Runner-Up',
      description: '2nd place in SA Engineering College Hackathon for an AI-driven solution addressing a real-world societal challenge.',
      year: '2024',
      gradient: 'from-neon-purple to-neon-pink',
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Recognition for innovation and excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 hover-glow group relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                {/* Icon */}
                <motion.div
                  className={`p-6 rounded-2xl bg-gradient-to-br ${achievement.gradient} shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-shadow`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">{achievement.icon}</div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                      {achievement.title}
                    </h3>
                    <span className="text-neon-cyan font-semibold">{achievement.year}</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Decorative Stars */}
              <div className="absolute top-4 right-4 flex gap-1 opacity-30 group-hover:opacity-70 transition-opacity">
                <Star className="w-4 h-4 text-neon-cyan fill-neon-cyan" />
                <Star className="w-4 h-4 text-neon-purple fill-neon-purple" />
                <Star className="w-4 h-4 text-neon-pink fill-neon-pink" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Additional Accomplishments</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Medal className="w-6 h-6" />, label: 'Technical Excellence', color: 'from-neon-purple to-neon-pink' },
              { icon: <Award className="w-6 h-6" />, label: 'AI Visionary', color: 'from-neon-cyan to-neon-blue' },
              { icon: <Star className="w-6 h-6" />, label: 'Problem Solver', color: 'from-neon-pink to-neon-purple' },
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 hover-glow group cursor-pointer flex flex-col items-center gap-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${badge.color}`}>
                  <div className="text-white">{badge.icon}</div>
                </div>
                <span className="text-sm font-medium text-center">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
