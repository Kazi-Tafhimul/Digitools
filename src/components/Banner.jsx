import React from "react";

import bannerImg from "../assets/banner.png";
import playIcon from "../assets/play.png";

const Banner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-100 max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 p-0">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={bannerImg}
            alt="Digital Workflow Illustration"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium border border-[#7C3AED]/20">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content leading-tight">
            Supercharge Your <br />
            <span className="text-[#7C3AED]">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-8 border-none normal-case h-12 shadow-md">
              Explore Products
            </button>
            <button className="btn btn-outline border-gray-300 hover:border-gray-400 rounded-full px-8 normal-case h-12 flex items-center gap-2">
              <img
                src={playIcon}
                alt="Play Icon"
                className="w-5 h-5 object-contain"
              />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
