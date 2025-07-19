import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="Footer"
      className="flex flex-col md:flex-row justify-center md:justify-between bg-[#465697] text-white p-10 md:p-12 items-center gap-8 md:gap-0"
    >
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
        <h3 className="text-md md:text-2xl font-normal opacity-90">Feel Free To Reach Out!</h3>
      </div>
      <div className="bg-white/10 rounded-2xl shadow-lg px-8 py-6 flex flex-col gap-4 min-w-[260px]">
        <div className="flex items-center gap-3">
          <MdOutlineEmail size={24} className="text-yellow-200" />
          <span className="text-lg font-medium select-all">ashwanirajput1800@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt size={20} className="text-green-200" />
          <span className="text-lg font-medium select-all">9149058581</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
