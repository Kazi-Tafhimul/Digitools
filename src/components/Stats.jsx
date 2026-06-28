import React from 'react';

const Stats = () => {
  return (
    <div className="w-full bg-[#7C3AED] text-white py-10 my-8">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-white/20">
        
        
        <div className="space-y-1 py-4 md:py-0">
          <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
            50K+
          </div>
          <div className="text-white/80 font-medium text-sm md:text-base">
            Active Users
          </div>
        </div>

       
        <div className="space-y-1 py-4 md:py-0">
          <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
            200+
          </div>
          <div className="text-white/80 font-medium text-sm md:text-base">
            Premium Tools
          </div>
        </div>

        
        <div className="space-y-1 py-4 md:py-0">
          <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
            4.9
          </div>
          <div className="text-white/80 font-medium text-sm md:text-base">
            Rating
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;