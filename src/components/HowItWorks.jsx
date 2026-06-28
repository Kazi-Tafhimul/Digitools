import React from 'react';


import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png'; 
import rocketIcon from '../assets/products/rocket.png';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: userIcon,
    },
    {
      number: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: packageIcon,
    },
    {
      number: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: rocketIcon,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 bg-white">
      
      
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 font-medium text-sm md:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="card bg-base-100 border border-gray-100/80 shadow-xs rounded-2xl p-8 relative flex flex-col items-center text-center hover:shadow-md transition-all duration-200"
          >
           
            <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-xs">
              {step.number}
            </div>

           
            <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mb-6 mt-2">
              <img 
                src={step.icon} 
                alt={step.title} 
                className="w-12 h-12 object-contain"
              />
            </div>

           
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {step.step_title || step.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              {step.description}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
};

export default HowItWorks;