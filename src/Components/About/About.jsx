import React from "react";
import AboutImg from "../../assets/boy.png";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="About"
      className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#181c2a] via-[#232946] to-[#181c2a] shadow-2xl mx-auto my-8 rounded-3xl p-4 sm:p-6 md:p-12 border-2 border-blue-900/30 max-w-5xl w-full"
    >
      <div className="flex-1 flex justify-center items-center mb-6 md:mb-0 w-full">
        <img
          className="h-40 w-40 sm:h-56 sm:w-56 md:h-80 md:w-auto rounded-2xl shadow-lg border-4 border-blue-800/30 animate-float object-cover"
          src={AboutImg}
          alt="About img"
        />
      </div>
      <div className="flex-1 text-white md:pl-12 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-blue-200 drop-shadow text-center md:text-left">About Me</h2>
        <ul className="space-y-4 sm:space-y-6">
          <li className="flex gap-3 sm:gap-4 items-start bg-white/5 rounded-xl p-3 sm:p-4 shadow-md border-l-4 border-blue-500/40 flex-col sm:flex-row">
            <IoArrowForward size={24} className="sm:mt-1 text-blue-400" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-normal mb-1">Frontend Developer</h3>
              <p className="text-xs sm:text-sm md:text-md leading-tight opacity-90">
                I specialize in crafting responsive, user-friendly interfaces using React.js, ensuring seamless user experiences across devices. My skills include modern JavaScript, CSS frameworks, and efficient component-based UI development.
              </p>
            </div>
          </li>
          <li className="flex gap-3 sm:gap-4 items-start bg-white/5 rounded-xl p-3 sm:p-4 shadow-md border-l-4 border-purple-500/40 flex-col sm:flex-row">
            <IoArrowForward size={24} className="sm:mt-1 text-purple-400" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-normal mb-1">Full Stack Developer</h3>
              <p className="text-xs sm:text-sm md:text-md leading-tight opacity-90">
                As a MERN stack developer, I design and develop complete web applications from frontend to backend, leveraging React for UI, Node and Express for server logic, and MongoDB for data management. I aim to deliver efficient, scalable, and maintainable solutions.
              </p>
            </div>
          </li>
          <li className="flex gap-3 sm:gap-4 items-start bg-white/5 rounded-xl p-3 sm:p-4 shadow-md border-l-4 border-pink-500/40 flex-col sm:flex-row">
            <IoArrowForward size={24} className="sm:mt-1 text-pink-400" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-normal mb-1">Backend Developer</h3>
              <p className="text-xs sm:text-sm md:text-md leading-tight opacity-90">
                I build robust and scalable server-side applications using Node.js and Express.js, integrating secure APIs and managing data with MongoDB. I focus on performance, security, and clean architecture.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default About;
