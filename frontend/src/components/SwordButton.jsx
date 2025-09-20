import React from 'react';
export default function SwordButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-6 py-2 border-2 border-white rounded-full flex items-center gap-2 bg-black hover:bg-gray-900 transition-colors duration-200 sword-shape"
      style={{
        clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%)',
        fontFamily: 'Pirate',
      }}
    >
      <img src="/images/sword.svg" alt="Sword" className="h-5 mr-2" />
      {children}
    </button>
  );
}
