import React from "react";
import avatarImg from "../../assets/boy.png";
import TextChange from "../TextChange";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-white flex flex-col md:flex-row w-full justify-between items-center p-4 sm:p-6 md:p-16 lg:p-24 gap-8 md:gap-x-16 m-2 md:m-8"
    >
      <div className="w-full md:w-2/4 md:pt-10 flex flex-col space-y-4 sm:space-y-6 items-center md:items-start text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-xs sm:text-sm md:text-2xl tracking-tight max-w-md md:max-w-none">
          I am a MERN stack developer skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
        </p>
        <button
          className="mt-4 md:mt-10 text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => {
            const contactSection = document.getElementById('Footer');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Contact Me
        </button>
      </div>
      <div className="w-full flex justify-center md:justify-end mt-6 md:mt-0 hidden sm:flex">
        <img className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg" src={avatarImg} alt="" />
      </div>
    </motion.div>
  );
};

export default Home;
