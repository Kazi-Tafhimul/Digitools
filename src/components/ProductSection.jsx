import React, { useState } from 'react';
import productData from '../data/products.json';


import designToolIcon from '../assets/products/design-tool.png';
import operationIcon from '../assets/products/operation.png';
import portfolioIcon from '../assets/products/portfolio.png';
import socialMediaIcon from '../assets/products/social-media.png';
import writingIcon from '../assets/products/writing_2327400 1.png';
import rocketIcon from '../assets/products/rocket.png';


const iconMap = {
  'design-tool.png': designToolIcon,
  'operation.png': operationIcon,
  'portfolio.png': portfolioIcon,
  'social-media.png': socialMediaIcon,
  'writing_2327400 1.png': writingIcon,
  'rocket.png': rocketIcon,
};

const ProductSection = ({ onAddToCart, cartItems, onRemoveFromCart, onCheckout, cartTotal }) => {
  const [activeTab, setActiveTab] = useState('products'); 

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-base-content mb-2">Premium Digital Tools</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Choose from our curated collection of premium digital products designed to boost your performance.
        </p>
      </div>

    
      <div className="flex justify-center mb-12">
        <div className="join bg-base-200 p-1 rounded-full">
          <button 
            className={`btn join-item rounded-full px-8 border-none normal-case h-10 min-h-0 ${activeTab === 'products' ? 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]' : 'btn-ghost text-gray-500'}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button 
            className={`btn join-item rounded-full px-8 border-none normal-case h-10 min-h-0 ${activeTab === 'cart' ? 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]' : 'btn-ghost text-gray-500'}`}
            onClick={() => setActiveTab('cart')}
          >
            Cart ({cartItems.length})
          </button>
        </div>
      </div>

      
      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => {
            const isAdded = cartItems.some(item => item.id === product.id);
            
            return (
              <div key={product.id} className="card bg-base-100 border border-gray-100 shadow-sm rounded-2xl p-6 relative flex flex-col justify-between hover:shadow-md transition-shadow">
                
                
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-base-200 rounded-xl">
                    <img 
                      src={iconMap[product.iconName]} 
                      alt={product.name} 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className={`badge border-none text-xs font-semibold px-2.5 py-1 rounded-full 
                    ${product.tagType === 'warning' ? 'bg-amber-100 text-amber-700' : ''}
                    ${product.tagType === 'primary' ? 'bg-purple-100 text-[#7C3AED]' : ''}
                    ${product.tagType === 'success' ? 'bg-emerald-100 text-emerald-700' : ''}
                  `}>
                    {product.tag}
                  </span>
                </div>

                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-base-content mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-2xl font-extrabold text-base-content">${product.price}</span>
                    <span className="text-gray-400 text-sm">/{product.period}</span>
                  </div>

                
                  <div className="divider my-4 opacity-50"></div>

                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                
                <button 
                  onClick={() => onAddToCart(product)}
                  className={`btn w-full rounded-xl border-none normal-case font-semibold h-11 min-h-0 transition-all
                    ${isAdded ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'}
                  `}
                >
                  {isAdded ? 'Added to cart ✓' : 'Buy Now'}
                </button>

              </div>
            );
          })}
        </div>
      )}

      
      {activeTab === 'cart' && (
        <div className="max-w-2xl mx-auto bg-base-100 border border-gray-100 shadow-sm rounded-2xl p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 opacity-40">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <p className="text-lg font-medium">Your cart is completely empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-base-200/50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <img 
                      src={iconMap[item.iconName]} 
                      alt={item.name} 
                      className="w-10 h-10 object-contain p-1.5 bg-base-100 rounded-lg shadow-sm" 
                    />
                    <div>
                      <h4 className="font-bold text-base-content text-sm sm:text-base">{item.name}</h4>
                      <p className="text-xs text-gray-400">${item.price} / {item.period}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-base-content">${item.price}</span>
                    <button 
                      onClick={() => onRemoveFromCart(item.id)}
                      className="btn btn-ghost btn-xs btn-circle text-error hover:bg-error/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              
              <div className="border-t border-gray-100 pt-4 mt-6 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold text-base-content">
                  <span>Total Amount:</span>
                  <span>${cartTotal}</span>
                </div>
                <button 
                  onClick={onCheckout}
                  className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white w-full rounded-xl border-none normal-case h-12"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSection;