import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Briefcase, MapPin } from 'lucide-react';

const teamMembers = [
  {
    name: "Tharuka Samath",
    role: "Team Leader",
    location: "Sri Lanka",
    experience: "2+ years",
    image: "/pictures/ishan.jpg", 
    bio: "Product strategist focused on delivering value through user-centric solutions and data-driven decisions.",
    social: {
      github: "https://github.com/iansamathgit123",
      linkedin: "https://www.linkedin.com/in/tharuka-ishan-947b7a294/",
      email: "tharuka.20231498@iit.ac.lk"
    }
  },
  {
    name: "Navod Chamil",
    role: "Team member",
    location: "Sri Lanka",
    experience: "2+ years",
    image: "/pictures/navod.jpg", 
    bio: "Computer Science student with a solid foundation in industrial applications, backend, and frontend development.",
    social: {
      github: "https://github.com/navodchamil",
      linkedin: "https://www.linkedin.com/in/navod-senarathna-202206293/",
      email: "navodsenarathna8@gmail.com"
    }
  },
  {
    name: "Yuwan Kavindu",
    role: "Team member",
    location: "Sri Lanka",
    experience: "2+ years",
    image: "/pictures/yuwan.jpg",
    bio: "Full-stack developer with a passion for creating scalable web applications and mentoring junior developers.",
    social: {
      github: "https://github.com/yuwankavi",
      linkedin: "https://www.linkedin.com/in/yuwan-kavindu-026147333",
      email: "Yuwan.20231080@iit.ac.lk"
    }
  },
  {
    name: "Dasun Batheegama",
    role: "Team member",
    location: "Sri Lanka",
    experience: "2+ years",
    image: "/pictures/dasun.jpg",
    bio: "Passionate about understanding user behavior and creating intuitive digital experiences through research-driven design.",
    social: {
      github: "https://github.com/DasunBatheegama",
      linkedin: "https://www.linkedin.com/in/dasun-batheegama-781342295",
      email: "dasun.20231969@iit.ac.lk"
    }
  },
  {
    name: "Nadun Deepamal",
    role: "Team member",
    location: "Sri Lanka",
    experience: "2+ years",
    image: "/pictures/nadun.jpg",
    bio: "Creative developer specializing in building beautiful, responsive web interfaces with modern technologies.",
    social: {
      github: "https://github.com/nadunD12",
      linkedin: "https://www.linkedin.com/in/nadun-deepamal-57b129292",
      email: "nadun.20221130@iit.ac.lk"
    }
  },
  {
    name: "Beyan Mark Sulakshana ",
    role: "Team member",
    location: "Sri Lanka",
    experience: "3+ years",
    image: "/pictures/beyan.jpg",
    bio: "Systems architect with expertise in building scalable cloud infrastructure and microservices architecture.",
    social: {
      github: "https://github.com/BMSz88",
      linkedin: "https://www.linkedin.com/feed/?trk=404_page",
      email: "beyan.20220083@iit.ac.lk"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

function App() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-4">
                The Dream Team
              </div>
              <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-purple-200">
                Meet Our Experts
              </h1>
            </motion.div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bringing together the brightest minds in design, development, and strategy to create exceptional digital experiences
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <motion.div
                  className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700/50 relative overflow-hidden"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={hoveredMember === member.name ? { scale: 1.1 } : { scale: 1 }}
                  />
                  
                  <div className="relative">
                    <div className="relative mb-8 group">
                      <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-44 h-44 rounded-full mx-auto object-cover border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    </div>

                    <div className="space-y-4">
                      <motion.h3 
                        className="text-2xl font-bold text-center text-purple-100"
                        whileHover={{ scale: 1.02 }}
                      >
                        {member.name}
                      </motion.h3>
                      <p className="text-purple-400 text-center font-medium">{member.role}</p>
                      
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <MapPin size={16} className="text-purple-400" />
                        <span>{member.location}</span>
                        <span className="mx-2">•</span>
                        <Briefcase size={16} className="text-purple-400" />
                        <span>{member.experience}</span>
                      </div>

                      <p className="text-gray-300 text-center leading-relaxed">{member.bio}</p>

                      <motion.div 
                        className="flex justify-center space-x-5 pt-4"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {member.social.twitter && (
                          <motion.a
                            href={member.social.twitter}
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            <Twitter size={22} />
                          </motion.a>
                        )}
                        {member.social.github && (
                          <motion.a
                            href={member.social.github}
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            <Github size={22} />
                          </motion.a>
                        )}
                        {member.social.linkedin && (
                          <motion.a
                            href={member.social.linkedin}
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            <Linkedin size={22} />
                          </motion.a>
                        )}
                        {member.social.email && (
                          <motion.a
                            href={`mailto:${member.social.email}`}
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            <Mail size={22} />
                          </motion.a>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
