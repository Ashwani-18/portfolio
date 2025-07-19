import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main, demo }) => {
  return (
    <div className="p-0 md:p-1 flex flex-col w-80 bg-gradient-to-br from-[#181c2a] via-[#232946] to-[#181c2a] rounded-3xl shadow-2xl hover:scale-105 hover:shadow-blue-700/40 transition-transform duration-300 border border-blue-900/30">
      <div className="rounded-3xl overflow-hidden">
        <img className="w-full h-40 object-cover bg-[#232946]" src={bannerImg} alt="" />
      </div>
      <div className="flex flex-col flex-1 justify-between p-6">
        <h3 className="text-2xl font-bold leading-normal mb-2 text-white drop-shadow-lg">{title}</h3>
        <p className="text-md text-slate-200 leading-tight mb-6 min-h-[60px]">{main}</p>
        <div className="flex justify-center">
          {demo ? (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white font-semibold rounded-full shadow-lg hover:from-purple-800 hover:to-blue-900 hover:shadow-blue-500/40 transition-all duration-300 border border-blue-800/40">
                Demo
              </button>
            </a>
          ) : (
            <button className="px-6 py-2 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white font-semibold rounded-full shadow-lg border border-blue-800/40">
              Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
