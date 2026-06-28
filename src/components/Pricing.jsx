import React from 'react';

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 bg-white">
      
     
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 font-medium text-sm md:text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        
       
        <div className="card bg-base-100 border border-gray-100 shadow-xs rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">Perfect for getting started</p>
            
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-slate-900">$0</span>
              <span className="text-gray-400 text-sm">/Month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white w-full rounded-full border-none normal-case h-11 min-h-0">
            Get Started Free
          </button>
        </div>

      
        <div className="card bg-[#7C3AED] text-white shadow-xl rounded-2xl p-8 relative flex flex-col justify-between transform md:-translate-y-2 border border-[#7C3AED]">
          
          
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
            Most Popular
          </span>

          <div>
            <h3 className="text-xl font-bold mb-1">Pro</h3>
            <p className="text-purple-200 text-sm mb-6">Best for professionals</p>
            
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">$29</span>
              <span className="text-purple-200 text-sm">/Month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-purple-50 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <button className="btn bg-white hover:bg-gray-100 text-[#7C3AED] w-full rounded-full border-none normal-case h-11 min-h-0 font-bold">
            Start Pro Trial
          </button>
        </div>

        
        <div className="card bg-base-100 border border-gray-100 shadow-xs rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">For teams and businesses</p>
            
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-slate-900">$99</span>
              <span className="text-gray-400 text-sm">/Month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white w-full rounded-full border-none normal-case h-11 min-h-0">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;