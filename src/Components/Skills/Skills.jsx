import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap, FaServer, FaRobot } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="Skills"
      className="p-10 md:p-24"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap justify-center gap-8 md:gap-10 py-10">
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <FaHtml5 color="#E34F26" size={50} />
          <span className="text-white text-base mt-4 font-semibold">HTML</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <FaCss3 color="#1572B6" size={50} />
          <span className="text-white text-base mt-4 font-semibold">CSS</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <FaJs color="#F7DF1E" size={50} />
          <span className="text-white text-base mt-4 font-semibold">JavaScript</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <FaReact color="#61DAFB" size={50} />
          <span className="text-white text-base mt-4 font-semibold">React</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <FaNodeJs color="#3C873A" size={50} />
          <span className="text-white text-base mt-4 font-semibold">Node.js</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <SiMongodb color="#47A248" size={50} />
          <span className="text-white text-base mt-4 font-semibold">MongoDB</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <FaServer color="#fff" size={50} />
          <span className="text-white text-base mt-4 font-semibold">Express</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <SiTailwindcss color="#38BDF8" size={50} />
          <span className="text-white text-base mt-4 font-semibold">Tailwind</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <FaBootstrap color="#7952B3" size={50} />
          <span className="text-white text-base mt-4 font-semibold">Bootstrap</span>
        </span>
        <span className="flex flex-col items-center p-6 bg-zinc-950 rounded-2xl w-36 h-36 justify-center shadow-lg">
          <SiPostman color="#FF6C37" size={50} />
          <span className="text-white text-base mt-4 font-semibold">Postman</span>
        </span>
      </div>
      {/* Fancy dark-themed AI card below all skills */}
      <div className="flex justify-center mt-8">
        <span className="flex flex-col items-center p-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 rounded-2xl w-56 h-28 justify-center shadow-2xl border-2 border-blue-500/30 animate-pulse">
          <FaRobot size={36} className="text-blue-400 drop-shadow-lg mb-2" />
          <span className="text-white text-lg font-bold text-center tracking-wide drop-shadow">Great hand on AI</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Skills;
