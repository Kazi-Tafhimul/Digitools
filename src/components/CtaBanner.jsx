import React from 'react';

const CtaBanner = () => {
  return (
    <div className="w-full bg-[#7C3AED] text-white py-16 text-center px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        
       
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        
       
        <p className="text-sm md:text-base font-medium text-white/90 max-w-xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.<br className="hidden md:block" /> Start your free trial today.
        </p>
        
      
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button className="btn bg-white text-[#7C3AED] hover:bg-gray-100 rounded-full px-8 border-none normal-case font-bold h-12 shadow-md">
            Explore Products
          </button>
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#7C3AED] hover:border-white rounded-full px-8 normal-case h-12">
            View Pricing
          </button>
        </div>

        
        <p className="text-xs text-white/70 font-medium pt-2">
          14-day free trial . No credit card required . Cancel anytime
          </p>
      </div>
    </div>
  );
};

export default CtaBanner;