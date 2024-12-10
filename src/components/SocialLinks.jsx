import { motion } from 'framer-motion';
import { 
  IconBrandDiscord, 
  IconBrandInstagram, 
  IconBrandLine,
  IconBrandTelegram,
  IconCircleDot,
  IconClock,
  IconDeviceLaptop,
  IconRobot,
  IconMicrophone
} from '@tabler/icons-react';

const SocialLinks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
      scale: 1.5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative space-y-8">
      <motion.h2 
        className="text-[#89CFF0] uppercase tracking-wider text-sm font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Connect With Me
      </motion.h2>

      {/* Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-[#89CFF0]/5 hover:border-[#89CFF0]/20 transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#89CFF0]/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#89CFF0]/10 to-transparent rounded-full blur-3xl transform translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative space-y-6">
          {/* Current Status */}
          <div className="flex items-center space-x-3">
            <IconCircleDot className="text-red-400 animate-pulse" size={24} />
            <span className="text-white/90 text-lg">Currently Unavailable for Projects</span>
          </div>

          {/* Current Focus */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/70">
                <IconDeviceLaptop size={20} />
                <span className="text-sm uppercase tracking-wider">Current Focus</span>
              </div>
              <p className="text-white/90">Full Stack Development with AI</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/70">
                <IconClock size={20} />
                <span className="text-sm uppercase tracking-wider">Response Time</span>
              </div>
              <p className="text-white/90">Within 12 hours</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/70">
                <IconRobot size={20} className="text-[#89CFF0]" />
                <span className="text-sm uppercase tracking-wider">Current Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white/90">NEX AI Assistant</span>
                <IconMicrophone size={16} className="text-[#89CFF0] animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/70">
                <IconBrandDiscord size={20} />
                <span className="text-sm uppercase tracking-wider">Best Contact</span>
              </div>
              <div className="flex items-center space-x-4 text-white/90">
                <IconBrandDiscord size={24} className="hover:text-[#89CFF0] transition-colors duration-300" />
                <IconBrandInstagram size={24} className="hover:text-[#89CFF0] transition-colors duration-300" />
                <IconBrandTelegram size={24} className="hover:text-[#89CFF0] transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links Grid */}
      <motion.div 
        className="grid grid-cols-2 gap-6 max-w-lg mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Discord */}
        <motion.a
          href="https://discord.gg/g6hDHz3jfc"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover="hover"
          className="group relative"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#5865F2] to-[#7289DA] opacity-0 rounded-xl blur-xl"
            variants={glowVariants}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            whileHover={{ opacity: 0.2, scale: 1.2 }}
          />
          <div className="relative p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-[#89CFF0]/5 group-hover:border-[#89CFF0]/20 transition-all duration-300 overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#89CFF0]/5 to-transparent rounded-full blur-2xl"
              animate={{
                x: [-10, 10],
                y: [-10, 10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="flex items-center justify-center"
              variants={iconVariants}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/30 group-hover:bg-black/50 transition-colors duration-300" style={{ color: '#5865F2' }}>
                <IconBrandDiscord size={32} stroke={1.5} />
              </div>
            </motion.div>
          </div>
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/ynvc0/profilecard/?igsh=OWMzbnA3dmZqbmc5"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover="hover"
          className="group relative"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] opacity-0 rounded-xl blur-xl"
            variants={glowVariants}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            whileHover={{ opacity: 0.2, scale: 1.2 }}
          />
          <div className="relative p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-[#89CFF0]/5 group-hover:border-[#89CFF0]/20 transition-all duration-300 overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#89CFF0]/5 to-transparent rounded-full blur-2xl"
              animate={{
                x: [-10, 10],
                y: [-10, 10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="flex items-center justify-center"
              variants={iconVariants}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/30 group-hover:bg-black/50 transition-colors duration-300" style={{ color: '#E4405F' }}>
                <IconBrandInstagram size={32} stroke={1.5} />
              </div>
            </motion.div>
          </div>
        </motion.a>

        {/* Telegram */}
        <motion.a
          href="https://t.me/ynvco"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover="hover"
          className="group relative"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#26A5E4] to-[#34B7F1] opacity-0 rounded-xl blur-xl"
            variants={glowVariants}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            whileHover={{ opacity: 0.2, scale: 1.2 }}
          />
          <div className="relative p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-[#89CFF0]/5 group-hover:border-[#89CFF0]/20 transition-all duration-300 overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#89CFF0]/5 to-transparent rounded-full blur-2xl"
              animate={{
                x: [-10, 10],
                y: [-10, 10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="flex items-center justify-center"
              variants={iconVariants}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/30 group-hover:bg-black/50 transition-colors duration-300" style={{ color: '#26A5E4' }}>
                <IconBrandTelegram size={32} stroke={1.5} />
              </div>
            </motion.div>
          </div>
        </motion.a>

        {/* Line */}
        <motion.a
          href="https://line.me/ti/p/lTbWFhnE6n"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover="hover"
          className="group relative"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#00B900] to-[#00E000] opacity-0 rounded-xl blur-xl"
            variants={glowVariants}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            whileHover={{ opacity: 0.2, scale: 1.2 }}
          />
          <div className="relative p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-[#89CFF0]/5 group-hover:border-[#89CFF0]/20 transition-all duration-300 overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#89CFF0]/5 to-transparent rounded-full blur-2xl"
              animate={{
                x: [-10, 10],
                y: [-10, 10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="flex items-center justify-center"
              variants={iconVariants}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/30 group-hover:bg-black/50 transition-colors duration-300" style={{ color: '#00B900' }}>
                <IconBrandLine size={32} stroke={1.5} />
              </div>
            </motion.div>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default SocialLinks;
