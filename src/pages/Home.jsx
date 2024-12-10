import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import TypewriterText from '../components/TypewriterText';
import { FaGlobeAsia, FaCode, FaClock, FaCalendarAlt, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { SiReact, SiVuedotjs, SiTailwindcss, SiSvelte, SiNodedotjs, SiPython, SiMysql, SiTensorflow, 
         SiTypescript, SiDocker } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import SocialLinks from '../components/SocialLinks';
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from 'react';

const IconWrapper = ({ children, className = "", size = "w-8 h-8" }) => (
  <div 
    className={`${size} flex items-center justify-center bg-black/30 rounded-lg border border-[#89CFF0]/20 text-[#89CFF0] ${className}`}
  >
    {children}
  </div>
);

IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string
};

IconWrapper.defaultProps = {
  className: "",
  size: "w-8 h-8"
};

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const timelineData = [
    {
      year: '2024',
      title: 'Full Stack Developer',
      location: 'Remote',
      company: 'Nvc',
      description: 'Leading development of digital tools and AI',
      duration: '2 year',
      type: 'Full-time',
      achievements: [
        'Created a company for AI automation like jarvis',
        'Developed simulation software for industrial controllers',
        'Implemented AI-driven management systems',
        'Optimized workflow automation processes'
      ],
      skills: ['React', 'Node.js', 'Python', 'TensorFlow', 'C#'],
      highlight: 'Currently focusing on AI integration and team leadership'
    },
    {
      year: '2022',
      title: 'AI Developer',
      location: 'Gangnam-gu, Seoul, Korea',
      company: 'Freelance Projects',
      description: 'Building intelligent solutions and automation systems',
      duration: '2 year',
      type: 'Freelance',
      achievements: [
        'Customized Pretrained AI models for clients',
        'Created automated testing frameworks',
        'Integrated AI search engine agents',
        'Optimized ML model performance'
      ],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'Docker'],
      highlight: 'Specialized in NLP and automation solutions'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      location: 'Tokyo, Japan',
      company: 'Educational Projects',
      description: 'Creating responsive web applications with modern frameworks',
      duration: '2 years',
      type: 'Education',
      achievements: [
        'Implemented modern UI/UX designs in websites',
        'Developed UI/UX designs in andorid apps',
        'Built responsive web applications',
        'Participated in CS50x program'
      ],
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Git'],
      highlight: 'Focus on modern web technologies and UI/UX'
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <Helmet>
        <title>NvC</title>
        <meta name="description" content="Full Stack Developer specializing in AI and Machine Learning. Based in Bavaria, Germany." />
        <meta name="keywords" content="Full Stack Developer, AI, Machine Learning, React, TypeScript, Next.js" />
        <meta property="og:title" content="NvC" />
        <meta property="og:description" content="Full Stack Developer specializing in AI and Machine Learning" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#89CFF0" />
      </Helmet>

      <div className="min-h-screen bg-black pt-24 pb-16 text-white selection:bg-[#89CFF0]/30 selection:text-[#89CFF0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden group/hero">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#89CFF0]/20 via-[#89CFF0]/5 to-transparent rounded-[100%] blur-[100px] transform translate-x-1/3 -translate-y-1/2 group-hover/hero:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#89CFF0]/10 via-[#89CFF0]/5 to-transparent rounded-[100%] blur-[100px] transform -translate-x-1/3 translate-y-1/2 group-hover/hero:scale-110 transition-transform duration-700"></div>
            </div>
            
            {/* Main Content with Better Animation Container */}
            <div className="relative z-10 text-center">
              <div className="relative p-8 rounded-2xl group/container">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#89CFF0]/5 to-transparent opacity-0 group-hover/container:opacity-100 blur-xl transition-all duration-700"></div>
                
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#89CFF0]/20 rounded-tl-2xl group-hover/container:border-[#89CFF0]/30 group-hover/container:scale-105 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#89CFF0]/20 rounded-br-2xl group-hover/container:border-[#89CFF0]/30 group-hover/container:scale-105 transition-all duration-500"></div>

                {/* Content */}
                <m.h1 
                  className="text-5xl md:text-7xl font-bold mb-4 relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-[#89CFF0] via-white to-[#89CFF0]/50 text-transparent bg-clip-text relative z-10">
                    Nvc.in
                  </span>
                </m.h1>

                <m.div
                  className="text-lg md:text-xl text-[#89CFF0]/80 mb-8 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="relative inline-block px-4">
                    Full Stack Developer & AI Engineer
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#89CFF0]/30 to-transparent transform scale-x-0 group-hover/container:scale-x-100 transition-transform duration-700"></div>
                  </span>
                </m.div>

                <m.p
                  className="max-w-2xl mx-auto text-white/60 group-hover/container:text-white/70 transition-colors duration-500 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                 Bringing Fantasy to Reality through next generation AI model, Nex.
                </m.p>

                {/* Integrated Connection Line */}
                <div className="relative h-24">
                  <div className="absolute left-1/2 -translate-x-1/2 w-px h-full">
                    <div className="w-full h-full bg-gradient-to-b from-[#89CFF0]/30 to-transparent group-hover/container:scale-y-125 transition-transform duration-700 origin-top"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 group-hover/hero:translate-y-[-40%] group-hover/hero:translate-x-[-40%] transition-transform duration-1000">
                <div className="relative animate-float">
                  <SiReact className="w-8 h-8 text-[#89CFF0] animate-spin-slow" />
                  <div className="absolute inset-0 bg-[#89CFF0]/20 blur-xl animate-pulse-soft scale-150"></div>
                </div>
              </div>

              <div className="absolute top-1/3 right-1/4 transform group-hover/hero:translate-x-[40%] group-hover/hero:translate-y-[-20%] transition-transform duration-1000">
                <div className="relative animate-float-delay">
                  <SiTypescript className="w-6 h-6 text-[#89CFF0]" />
                  <div className="absolute inset-0 bg-[#89CFF0]/20 blur-lg animate-pulse-soft scale-150"></div>
                </div>
              </div>

              <div className="absolute bottom-1/3 left-1/3 transform group-hover/hero:translate-y-[40%] group-hover/hero:translate-x-[-30%] transition-transform duration-1000">
                <div className="relative animate-float-reverse">
                  <SiPython className="w-10 h-10 text-[#89CFF0]" />
                  <div className="absolute inset-0 bg-[#89CFF0]/20 blur-xl animate-pulse-soft scale-150"></div>
                </div>
              </div>

              <div className="absolute top-1/2 right-1/3 transform group-hover/hero:translate-x-[30%] group-hover/hero:translate-y-[20%] transition-transform duration-1000">
                <div className="relative animate-float-slow">
                  <SiDocker className="w-7 h-7 text-[#89CFF0]" />
                  <div className="absolute inset-0 bg-[#89CFF0]/20 blur-lg animate-pulse-soft scale-150"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {/* Main Content Grid with Center Line */}
            <div className="relative">
              {/* Center line with improved styling */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full">
                {/* Solid base line */}
                <div className="absolute inset-0 bg-[#89CFF0]/30"></div>
                
                {/* Glow effects wrapper - positioned behind the main line */}
                <div className="absolute inset-0 -z-10">
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-[#89CFF0]/20 blur-[8px]"></div>
                  {/* Animated pulse glow */}
                  <div className="absolute inset-0 bg-[#89CFF0]/10 blur-[4px] animate-pulse-soft"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* About Me Section with Connection */}
                <div className="section-box relative">
                  <div className="connection-dot"></div>
                  <div className="connection-line"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#89CFF0]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#89CFF0]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <h2 className="text-white/70 uppercase tracking-wider text-sm font-medium mb-8">ABOUT ME</h2>
                  <div className="space-y-8">
                    <h1 className="text-6xl font-bold tracking-tight font-space hover:scale-105 transition-transform duration-500">
                      Hi, I&apos;m <TypewriterText className="gradient-text" />
                    </h1>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 hover:-translate-x-2 transition-transform">
                        <IconWrapper>
                          <FaGlobeAsia className="w-4 h-4" />
                        </IconWrapper>
                        <span className="text-white/70">Chinese</span>
                      </div>
                      <div className="flex items-center space-x-3 hover:-translate-x-2 transition-transform">
                        <IconWrapper className="animate-delay-500">
                          <FaClock className="w-4 h-4" />
                        </IconWrapper>
                        <span className="text-white/70">17 Years Old</span>
                      </div>
                      <div className="flex items-center space-x-3 hover:-translate-x-2 transition-transform">
                        <IconWrapper className="animate-delay-1000">
                          <FaCode className="w-4 h-4" />
                        </IconWrapper>
                        <span className="text-white/70">Full Stack Developer</span>
                      </div>
                      <div className="flex items-center space-x-3 hover:-translate-x-2 transition-transform">
                        <IconWrapper className="animate-delay-1500">
                          <FaCalendarAlt className="w-4 h-4" />
                        </IconWrapper>
                        <span className="text-white/70">4 Year Experience</span>
                      </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mt-12">
                      <style>
                        {`
                        @keyframes float {
                          0% { transform: translateY(0px); }
                          50% { transform: translateY(-5px); }
                          100% { transform: translateY(0px); }
                        }
                        @keyframes pulse {
                          0% { box-shadow: 0 0 0 0 rgba(137, 207, 240, 0); }
                          50% { box-shadow: 0 0 10px 3px rgba(137, 207, 240, 0.2); }
                          100% { box-shadow: 0 0 0 0 rgba(137, 207, 240, 0); }
                        }
                        .skill-icon {
                          animation: float 3s ease-in-out infinite;
                        }
                        .skill-icon:hover {
                          animation: pulse 2s ease-in-out infinite;
                        }
                        .skill-1 { animation-delay: 0s; }
                        .skill-2 { animation-delay: 0.4s; }
                        .skill-3 { animation-delay: 0.8s; }
                        .skill-4 { animation-delay: 1.2s; }
                        .skill-5 { animation-delay: 1.6s; }
                        .skill-6 { animation-delay: 2.0s; }
                        .skill-7 { animation-delay: 2.4s; }
                        .skill-8 { animation-delay: 2.8s; }
                        `}
                      </style>
                      <div className="grid grid-cols-4 gap-6">
                        {/* Frontend */}
                        <m.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="group flex flex-col items-center"
                        >
                          <div className="skill-icon skill-1 w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#61DAFB]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <SiReact className="w-8 h-8 text-white/60 group-hover:text-[#61DAFB] transition-colors duration-300" />
                          </div>
                          <span className="mt-3 text-sm text-white/60 group-hover:text-[#61DAFB] transition-colors duration-300">React</span>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="group flex flex-col items-center"
                        >
                          <div className="skill-icon skill-2 w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#42b883]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <SiVuedotjs className="w-8 h-8 text-white/60 group-hover:text-[#42b883] transition-colors duration-300" />
                          </div>
                          <span className="mt-3 text-sm text-white/60 group-hover:text-[#42b883] transition-colors duration-300">Vue</span>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="group flex flex-col items-center"
                        >
                          <div className="skill-icon skill-3 w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <SiTailwindcss className="w-8 h-8 text-white/60 group-hover:text-[#38bdf8] transition-colors duration-300" />
                          </div>
                          <span className="mt-3 text-sm text-white/60 group-hover:text-[#38bdf8] transition-colors duration-300">Tailwind</span>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="group flex flex-col items-center"
                        >
                          <div className="skill-icon skill-4 w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF3E00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <SiSvelte className="w-8 h-8 text-white/60 group-hover:text-[#FF3E00] transition-colors duration-300" />
                          </div>
                          <span className="mt-3 text-sm text-white/60 group-hover:text-[#FF3E00] transition-colors duration-300">Svelte</span>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="group flex flex-col items-center"
                        >
                          <div className="skill-icon skill-5 w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3C873A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <SiNodedotjs className="w-8 h-8 text-white/60 group-hover:text-[#3C873A] transition-colors duration-300" />
                          </div>
                          <span className="mt-3 text-sm text-white/60 group-hover:text-[#3C873A] transition-colors duration-300">Node.js</span>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="group flex flex-col items-center"
                        >
                          <div className="skill-icon skill-6 w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4B8BBE]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <SiPython className="w-8 h-8 text-white/60 group-hover:text-[#4B8BBE] transition-colors duration-300" />
                          </div>
                          <span className="mt-3 text-sm text-white/60 group-hover:text-[#4B8BBE] transition-colors duration-300">Python</span>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="group flex flex-col items-center"
                        >
                          <div className="skill-icon skill-7 w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFCC]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <SiMysql className="w-8 h-8 text-white/60 group-hover:text-[#00FFCC] transition-colors duration-300" />
                          </div>
                          <span className="mt-3 text-sm text-white/60 group-hover:text-[#00FFCC] transition-colors duration-300">Database</span>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="group flex flex-col items-center"
                        >
                          <div className="skill-icon skill-8 w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <SiTensorflow className="w-8 h-8 text-white/60 group-hover:text-[#FF00FF] transition-colors duration-300" />
                          </div>
                          <span className="mt-3 text-sm text-white/60 group-hover:text-[#FF00FF] transition-colors duration-300">AI/ML</span>
                        </m.div>
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                      <button
                        onClick={() => window.open('https://github.com/yuan-nvc', '_blank')}
                        className="w-full md:w-auto px-8 py-3 rounded-full border border-[#89CFF0]/20 hover:border-[#89CFF0]/40 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#89CFF0]/10 hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FaGithub className="text-xl" />
                          <span>View Projects</span>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => window.open('mailto:envc8704@gmail.com')}
                        className="w-full md:w-auto px-8 py-3 rounded-full border border-[#89CFF0]/20 hover:border-[#89CFF0]/40 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#89CFF0]/10 hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div className="relative">
                            <FaEnvelope className="text-xl" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#89CFF0] rounded-full animate-ping opacity-75" />
                          </div>
                          <span>Get in Touch</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social Links Section with Connection */}
                <div className="section-box relative">
                  <div className="connection-dot"></div>
                  <div className="connection-line"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#89CFF0]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#89CFF0]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <SocialLinks />
                </div>
              </div>

              {/* Timeline Section */}
              <div className="relative mt-20">
                {/* Glowing line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5">
                  <div className="h-full bg-gradient-to-b from-[#89CFF0] via-[#89CFF0]/50 to-transparent"></div>
                  <div className="absolute inset-0 blur-sm bg-gradient-to-b from-[#89CFF0] via-[#89CFF0]/30 to-transparent"></div>
                </div>

                {timelineData.map((item, index) => (
                  <m.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.21, 0.45, 0.27, 0.9]
                      }
                    }}
                    viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } mb-24`}
                  >
                    {/* Content */}
                    <div className={`w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                          opacity: 1,
                          transition: {
                            duration: 1,
                            ease: "easeOut"
                          }
                        }}
                        whileHover={{
                          scale: 1.01,
                          transition: {
                            duration: 0.3,
                            ease: "easeOut"
                          }
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-lg rounded-2xl p-6 border border-[#89CFF0]/10 hover:border-[#89CFF0]/20 transition-all duration-500 will-change-transform before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:shadow-[0_0_30px_2px_rgba(255,255,255,0.05)] after:transition-shadow after:duration-500 group-hover:after:shadow-[0_0_30px_2px_rgba(255,255,255,0.1)] section-box"
                      >
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Content wrapper */}
                        <div className="relative space-y-4">
                          <m.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ 
                              opacity: 1, 
                              y: 0,
                              transition: {
                                duration: 0.5,
                                delay: 0.2
                              }
                            }}
                            viewport={{ once: true }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="text-[#89CFF0] font-bold text-2xl">{item.year}</div>
                              <div className="text-[#89CFF0]/30">•</div>
                              <div className="text-[#89CFF0]/50 text-sm">{item.duration}</div>
                            </div>

                            <h3 className="text-white text-xl font-semibold group-hover:text-[#89CFF0] transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-white/60">{item.company}</p>
                            {item.type && (
                              <p className="text-[#89CFF0]/70 text-sm">{item.type}</p>
                            )}
                          </m.div>

                          {item.highlight && (
                            <m.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                  duration: 0.5,
                                  delay: 0.3
                                }
                              }}
                              viewport={{ once: true }}
                              className="bg-[#89CFF0]/5 border border-[#89CFF0]/10 rounded-lg p-3"
                            >
                              <p className="text-[#89CFF0]/90 text-sm">{item.highlight}</p>
                            </m.div>
                          )}
                          
                          {/* Achievements */}
                          <div className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <m.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ 
                                  opacity: 1, 
                                  y: 0,
                                  transition: {
                                    duration: 0.5,
                                    delay: 0.4 + (i * 0.1)
                                  }
                                }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 group/item"
                              >
                                <span className="text-[#89CFF0] transform transition-transform duration-200 group-hover/item:translate-x-1">
                                  →
                                </span>
                                <span className="text-white/60 group-hover/item:text-white/80 transition-colors duration-200">
                                  {achievement}
                                </span>
                              </m.div>
                            ))}
                          </div>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                              <m.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ 
                                  opacity: 1, 
                                  y: 0,
                                  transition: {
                                    duration: 0.5,
                                    delay: 0.5 + (i * 0.05)
                                  }
                                }}
                                viewport={{ once: true }}
                                className="px-3 py-1 rounded-full text-xs bg-[#89CFF0]/5 text-[#89CFF0]/80 border border-[#89CFF0]/10 hover:bg-[#89CFF0]/10 hover:border-[#89CFF0]/30 transition-all duration-200"
                              >
                                {skill}
                              </m.span>
                            ))}
                          </div>
                        </div>
                      </m.div>
                    </div>

                    {/* Spacer */}
                    <div className="w-[calc(50%-2rem)]"></div>
                  </m.div>
                ))}
              </div>

              {/* What I Offer Section */}
              <div className="relative mt-32">
                {/* Top Connection Line */}
                <div className="relative left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-[#89CFF0]/30 to-transparent group">
                  {/* Animated Dot */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 animate-pulse-soft">
                    <div className="absolute inset-0 rounded-full bg-[#89CFF0]/20 border border-[#89CFF0]/40 group-hover:bg-[#89CFF0]/30 group-hover:border-[#89CFF0]/60 transition-colors duration-300"></div>
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#89CFF0]/10"></div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#89CFF0]/20 to-transparent blur-sm"></div>
                  </div>
                </div>
                
                {/* Title Section with Enhanced Animations */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative max-w-4xl mx-auto mt-16 section-box group/title"
                >
                  {/* Enhanced Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-xl rounded-2xl transition-all duration-300 group-hover/title:from-black/70"></div>
                  <div className="absolute inset-0 bg-mesh-gradient opacity-10 rounded-2xl group-hover/title:opacity-15 transition-opacity duration-300"></div>
                  
                  {/* Content Container with Enhanced Hover Effects */}
                  <div className="relative p-8 border border-[#89CFF0]/20 rounded-2xl overflow-hidden group-hover/title:border-[#89CFF0]/30 transition-colors duration-300">
                    {/* Animated Corner Decorations */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#89CFF0]/30 rounded-tl-2xl transition-all duration-300 group-hover/title:scale-110 group-hover/title:border-[#89CFF0]/40"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#89CFF0]/30 rounded-br-2xl transition-all duration-300 group-hover/title:scale-110 group-hover/title:border-[#89CFF0]/40"></div>
                    
                    {/* Title with Enhanced Hover Effects */}
                    <div className="text-center mb-12">
                      <m.h3 
                        className="text-3xl font-bold inline-block relative group/heading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <span className="bg-gradient-to-r from-[#89CFF0] via-white to-[#89CFF0]/50 text-transparent bg-clip-text relative z-10">
                          Services
                        </span>
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-[#89CFF0]/0 group-hover/heading:bg-[#89CFF0]/5 blur-xl transition-all duration-300 -z-10"></div>
                      </m.h3>
                      
                      {/* Animated Underline */}
                      <div className="relative mt-2 mx-auto">
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#89CFF0]/30 to-transparent group-hover/title:via-[#89CFF0]/40 transition-all duration-300"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#89CFF0]/20 to-transparent animate-pulse-soft"></div>
                      </div>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Service Cards */}
                      <m.div 
                        className="group relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <div className="p-6 rounded-xl bg-black/40 border border-[#89CFF0]/10 hover:border-[#89CFF0]/30 transition-all duration-300 group-hover:translate-y-[-2px]">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-2.5 rounded-lg bg-[#89CFF0]/10 group-hover:bg-[#89CFF0]/20 transition-colors duration-300">
                              <SiReact className="w-6 h-6 text-[#89CFF0] animate-spin-slow" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">Web Development</h4>
                          </div>
                          <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
                            Website made by React at low cost with high performance for fractional cost
                          </p>
                        </div>
                      </m.div>

                      <m.div 
                        className="group relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <div className="p-6 rounded-xl bg-black/40 border border-[#89CFF0]/10 hover:border-[#89CFF0]/30 transition-all duration-300 group-hover:translate-y-[-2px]">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-2.5 rounded-lg bg-[#89CFF0]/10 group-hover:bg-[#89CFF0]/20 transition-colors duration-300">
                              <TbBrain className="w-6 h-6 text-[#89CFF0] animate-pulse-soft" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">AI Models</h4>
                          </div>
                          <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
                            Custom or pre-trained AI models for your needs
                          </p>
                        </div>
                      </m.div>

                      <m.div 
                        className="group relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <div className="p-6 rounded-xl bg-black/40 border border-[#89CFF0]/10 hover:border-[#89CFF0]/30 transition-all duration-300 group-hover:translate-y-[-2px]">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-2.5 rounded-lg bg-[#89CFF0]/10 group-hover:bg-[#89CFF0]/20 transition-colors duration-300">
                              <SiNodedotjs className="w-6 h-6 text-[#89CFF0]" />
                            </div>
                            <h4 className="text-xl font-semibold text-white"> Application Development</h4>
                          </div>
                          <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
                          Perfect small scalable applications quickly and easily
                          </p>
                        </div>
                      </m.div>

                      <m.div 
                        className="group relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <div className="p-6 rounded-xl bg-black/40 border border-[#89CFF0]/10 hover:border-[#89CFF0]/30 transition-all duration-300 group-hover:translate-y-[-2px]">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-2.5 rounded-lg bg-[#89CFF0]/10 group-hover:bg-[#89CFF0]/20 transition-colors duration-300">
                              <SiDocker className="w-6 h-6 text-[#89CFF0]" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">Hosting</h4>
                          </div>
                          <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
                            Modern cloud infrastructure for game servers with high performance
                          </p>
                        </div>
                      </m.div>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#89CFF0]/20 to-transparent"></div>
                  </div>
                </m.div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  
                ].map((stat, index) => (
                  <div key={stat.label} className="stat-box" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Enhanced Connection Line */}
          <div className="relative mt-16">
            {/* Top Connection */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px">
              {/* Dot */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6">
                <div className="absolute inset-0 bg-[#89CFF0]/10 rounded-full animate-pulse-soft"></div>
                <div className="absolute inset-[2px] bg-black rounded-full border border-[#89CFF0]/30"></div>
                <div className="absolute inset-0 bg-[#89CFF0]/20 rounded-full animate-ping opacity-75"></div>
              </div>
              
              {/* Line Gradient */}
              <div className="h-32 bg-gradient-to-b from-[#89CFF0]/30 via-[#89CFF0]/20 to-transparent">
                {/* Animated Glow */}
                <div className="absolute inset-x-0 h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#89CFF0]/0 via-[#89CFF0]/30 to-[#89CFF0]/0 animate-moveGradient-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to top button */}
      <m.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        className={`fixed right-8 bottom-8 p-3 rounded-full bg-[#89CFF0]/10 border border-[#89CFF0]/20 text-[#89CFF0] hover:bg-[#89CFF0]/20 transition-all duration-300 backdrop-blur-sm ${
          showScrollTop ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp className="w-6 h-6" />
      </m.button>
    </LazyMotion>
  );
};

export default Home;
