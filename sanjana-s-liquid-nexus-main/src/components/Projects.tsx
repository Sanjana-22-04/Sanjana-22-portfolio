import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Smart Mental Healthcare System',
      description: 'An intelligent mental-health assistance platform built using Flask and Machine Learning to analyze emotional states from user text.',
      fullDescription:
        'An intelligent mental-health assistance platform built using Flask and Machine Learning to analyze emotional states from user text. Includes a Groq API-powered chatbot for real-time adaptive guidance and mental-health support.',
      tech: ['Flask', 'Machine Learning', 'Groq API', 'Python'],
      github: 'https://github.com/Sanjana-22-04', // add your repo later
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      title: 'Smart Education Platform',
      description: 'A fully responsive multi-portal learning ecosystem built using React.js + Flask + Firebase.',
      fullDescription:
        'A multi-portal education ecosystem built using React.js, Flask, and Firebase, featuring AI voice assistance, gamified modules, automated attendance, and secure cloud-based user management.',
      tech: ['React.js', 'Flask', 'Firebase', 'AI Voice'],
      github: 'https://github.com/Sanjana-22-04/scholaspace_responsive_education_platform', // add repo
      gradient: 'from-neon-cyan to-neon-blue',
    },
    {
      title: 'Blog & Event Management System',
      description: 'A scalable SERN-stack platform with secure authentication and Docker-based MySQL containerization.',
      fullDescription:
        'A full-stack SERN application with secure JWT authentication, custom event publishing, blog creation, Dockerized MySQL, responsive UI, and optimized backend routing.',
      tech: ['React', 'Express.js', 'Node.js', 'Docker', 'MySQL'],
      github: 'https://github.com/Sanjana-22-04', // add repo
      gradient: 'from-neon-pink to-neon-purple',
    },
    {
      title: 'Marine Debris Detection System',
      description: 'An advanced deep-learning model using YOLOv8 + Vision Transformers for underwater debris detection.',
      fullDescription:
        'An advanced deep-learning system powered by YOLOv8 and Vision Transformers to detect underwater marine debris, integrated with satellite imagery APIs for large-scale environmental monitoring.',
      tech: ['YOLOv8', 'Python', 'OpenCV'],
      github: 'https://github.com/Sanjana-22-04/trashdetection', // add repo
      gradient: 'from-neon-blue to-neon-cyan',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Innovative solutions powered by AI and modern web technologies
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card p-8 hover-glow group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text">
                  {project.title}
                </h3>

                <p className="text-foreground/70 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-muted text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="flex items-center gap-2 text-sm font-medium text-neon-cyan hover:text-neon-purple"
                    whileHover={{ x: 5 }}
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </motion.button>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-neon-cyan"
                    whileHover={{ x: 5 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </motion.a>
                </div>
              </div>

              <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="glass-card p-8 max-w-2xl w-full relative"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 glass-card hover-glow"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-bold gradient-text mb-4">
              {projects[selectedProject].title}
            </h3>

            <p className="text-foreground/80 mb-6">{projects[selectedProject].fullDescription}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {projects[selectedProject].tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${projects[selectedProject].gradient} text-white text-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ONLY View Code button */}
            <div className="flex gap-4">
              <motion.a
                href={projects[selectedProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-6 py-3 rounded-full font-semibold hover-glow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" /> View Code
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
