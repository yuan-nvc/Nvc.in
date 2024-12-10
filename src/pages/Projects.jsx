import { motion as m, useScroll, useTransform } from "framer-motion";
import PropTypes from 'prop-types';
import { HiExternalLink, HiCode } from "react-icons/hi";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiDocker, SiPython, SiTypescript, SiFirebase } from "react-icons/si";

const techIcons = {
  React: <SiReact />,
  Node: <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Tailwind: <SiTailwindcss />,
  Docker: <SiDocker />,
  Python: <SiPython />,
  TypeScript: <SiTypescript />,
  Firebase: <SiFirebase />
};

const ProjectCard = ({ project, index }) => {
  const { title, description, tech, demoLink, codeLink, image } = project;
  
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-black/40 to-black/20 rounded-3xl p-1
                backdrop-blur-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-500"
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/30 via-white/5 to-transparent
                    rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-black/50 rounded-[22px] p-6 h-full">
        {/* Image Section */}
        <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
          <m.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          {/* Tech stack floating badges */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {tech.slice(0, 3).map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full
                         bg-black/70 backdrop-blur-md border border-white/10
                         text-xs font-medium text-white/80 hover:border-[#89CFF0]/50
                         transition-all duration-300"
              >
                <span className="text-[#89CFF0]">{techIcons[item]}</span>
                {item}
              </m.div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <m.h3 
            className="text-2xl font-bold bg-gradient-to-r from-white via-white to-[#89CFF0]
                     text-transparent bg-clip-text group-hover:to-white transition-all duration-500"
          >
            {title}
          </m.h3>
          
          <p className="text-white/60 text-sm line-clamp-2 group-hover:text-white/80 transition-colors duration-500">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex items-center gap-3">
            <m.a
              href={demoLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl
                       bg-[#89CFF0] text-black font-medium text-sm
                       hover:bg-white transition-colors duration-300"
            >
              Live Demo
              <HiExternalLink className="w-4 h-4" />
            </m.a>
            
            <m.a
              href={codeLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl
                       bg-white/5 text-white/90 font-medium text-sm
                       hover:bg-white/10 border border-white/10
                       transition-colors duration-300"
            >
              Code
              <HiCode className="w-4 h-4" />
            </m.a>
          </div>
        </div>
      </div>
    </m.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

const StarField = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.7
          }}
        />
      ))}
    </div>
  );
};

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const projects = [
    {
      title: "Nex",
      description: "Voice-Activated Task Automation ai model that could be hosted locally",
      tech: [" Work in progress"],
      demoLink: "#",
      codeLink: "#",
      image: "./project1.webp"
    },
  ];

  return (
    <div className="relative min-h-screen bg-black">
      <StarField />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated gradient spheres */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] 
                      bg-gradient-radial from-[#89CFF0]/20 to-transparent 
                      rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] 
                      bg-gradient-radial from-[#89CFF0]/10 to-transparent 
                      rounded-full blur-3xl animate-float-delayed" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(137,207,240,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(137,207,240,0.05)_1px,transparent_1px)]
                     bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10">
        <m.div 
          className="max-w-7xl mx-auto px-6 py-24"
          style={{ y }}
        >
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20 space-y-4"
          >
            <m.div className="inline-block">
              <m.h1 
                className="text-8xl font-bold bg-gradient-to-r from-white via-[#89CFF0] to-white
                         text-transparent bg-clip-text relative z-10"
              >
              
              </m.h1>
              <div className="h-2 w-full bg-gradient-to-r from-transparent via-[#89CFF0] to-transparent 
                           blur-sm mt-2" />
            </m.div>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
             
            </p>
          </m.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Projects;
