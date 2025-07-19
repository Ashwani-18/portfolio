import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="Projects"
      className="p-10 md:p-24 text-white "
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-8 md:gap-12">
        <ProjectCard
          title="E-commerce"
          main="A full-featured e-commerce web application with product listings, cart, and checkout. Built with modern web technologies."
          demo="https://mern-frontend-2-ffaa.onrender.com/"
        />
        <ProjectCard
          title="Text to Image Maker"
          main="An AI-powered tool that generates images from text prompts using advanced machine learning models."
          demo="https://imagefrontend-1.onrender.com"
        />
        <ProjectCard
          title="Astroverse"
          main="An astrology platform offering personalized horoscopes, birth chart analysis, and daily astrological insights."
          demo="https://astro-universe-frontend.vercel.app/"
        />
      </div>
    </motion.div>
  );
};

export default Projects;
