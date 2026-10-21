import React from 'react';

export default function UttLogo({ className = "h-10", light = false, compact = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Modern High-End Emblem Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 p-0.5 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
        <div className="w-full h-full bg-[#0a1e3b] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle glow / beam effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
          
          <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
            {/* Academic Cap / Shield / Bridge Fusion */}
            <path
              d="M20 6L33 13L20 20L7 13L20 6Z"
              fill="url(#goldGrad)"
            />
            <path
              d="M11 16.5V23.5C11 27.5 14.5 31 20 33C25.5 31 29 27.5 29 23.5V16.5L20 21.5L11 16.5Z"
              fill="url(#orangeGrad)"
            />
            {/* Bridge arch cutout line */}
            <path
              d="M15 25C17 23 23 23 25 25"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Center star */}
            <circle cx="20" cy="20" r="1.5" fill="#ffffff" />

            <defs>
              <linearGradient id="goldGrad" x1="7" y1="6" x2="33" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCD34D" />
                <stop offset="1" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="orangeGrad" x1="11" y1="16" x2="29" y2="33" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FB923C" />
                <stop offset="1" stopColor="#EA580C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {!compact && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-black tracking-wider bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              UTT
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              PORTAL
            </span>
          </div>
          <span className={`text-[11px] font-extrabold uppercase tracking-wide mt-0.5 ${light ? 'text-white' : 'text-slate-800'}`}>
            ĐẠI HỌC CÔNG NGHỆ GTVT
          </span>
          <span className={`text-[9px] font-medium tracking-tight mt-0.5 ${light ? 'text-blue-200/80' : 'text-slate-500'}`}>
            University of Transport Technology
          </span>
        </div>
      )}
    </div>
  );
}
