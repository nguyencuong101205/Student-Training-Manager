import React from 'react';

export default function UttLogo({ className = "h-10", light = false }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Stylized UTT Bridge Icon */}
      <div className="relative flex items-center justify-center w-11 h-9 flex-shrink-0">
        <svg viewBox="0 0 100 80" className="w-full h-full">
          {/* Bridge arch styling in vibrant orange/gold */}
          <path
            d="M 5,20 L 95,20 L 95,30 L 75,30 L 75,45 C 65,35 35,35 25,45 L 25,30 L 5,30 Z"
            fill="#ea580c"
          />
          <path
            d="M 25,50 C 35,40 65,40 75,50 L 80,68 C 65,58 35,58 20,68 Z"
            fill="#f97316"
          />
          <path
            d="M 5,20 L 15,68 L 25,68 L 15,20 Z"
            fill="#c2410c"
          />
          <path
            d="M 95,20 L 85,68 L 75,68 L 85,20 Z"
            fill="#c2410c"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`text-[11px] font-bold tracking-wider uppercase ${light ? 'text-white' : 'text-slate-800'}`}>
          UNIVERSITY OF
        </span>
        <span className={`text-[12px] font-extrabold tracking-wider uppercase text-amber-500`}>
          TRANSPORT
        </span>
        <span className={`text-[11px] font-bold tracking-wider uppercase ${light ? 'text-slate-200' : 'text-slate-700'}`}>
          TECHNOLOGY
        </span>
      </div>
    </div>
  );
}
