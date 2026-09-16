import React from 'react';

interface IntegralXSealProps {
  className?: string;
  size?: number;
}

export default function IntegralXSeal({ className = 'w-24 h-24', size }: IntegralXSealProps) {
  return (
    <div
      className={`inline-flex items-center justify-center relative select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md hover:scale-105 transition-transform duration-300"
      >
        {/* Outer Fine Scalloped / Notched Ring */}
        <circle cx="120" cy="120" r="114" stroke="#09090b" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
        
        {/* Outer Solid Ring */}
        <circle cx="120" cy="120" r="110" stroke="#09090b" strokeWidth="3" />
        
        {/* Secondary Concentric Line */}
        <circle cx="120" cy="120" r="103" stroke="#27272a" strokeWidth="1" />
        
        {/* Circular Path for Text */}
        <defs>
          <path
            id="integralx-upper-arc"
            d="M 28 120 A 92 92 0 0 1 212 120"
            fill="none"
          />
          <path
            id="integralx-lower-arc"
            d="M 212 120 A 92 92 0 0 1 28 120"
            fill="none"
          />
          <linearGradient id="sealBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="50%" stopColor="#09090b" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>

        {/* Upper Arc Text: KONVERXA · EXCELENCIA INTEGRAL */}
        <text className="text-[11px] font-black uppercase tracking-[0.26em]" fill="#09090b">
          <textPath href="#integralx-upper-arc" startOffset="50%" textAnchor="middle">
            KONVERXA · ACREDITACIÓN
          </textPath>
        </text>

        {/* Lower Arc Text: OPERATIONAL EXCELLENCE */}
        <text className="text-[10px] font-black uppercase tracking-[0.24em]" fill="#52525b">
          <textPath href="#integralx-lower-arc" startOffset="50%" textAnchor="middle">
            ESTÁNDAR OPERATIVO · MOK
          </textPath>
        </text>

        {/* Inner Border Ring */}
        <circle cx="120" cy="120" r="78" stroke="#18181b" strokeWidth="2" />
        <circle cx="120" cy="120" r="74" stroke="#27272a" strokeWidth="1" strokeDasharray="2 2" />

        {/* Inner Solid Badge Center */}
        <circle cx="120" cy="120" r="70" fill="url(#sealBg)" />

        {/* Radial Subtle Sheen */}
        <circle cx="120" cy="120" r="69" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

        {/* Top 3 Stars (Representing Operativa, Organizacional, Ética) */}
        <g fill="#f4f4f5" opacity="0.95">
          {/* Center star */}
          <path d="M 120 74 L 121.5 78.5 L 126 78.5 L 122.5 81 L 124 85.5 L 120 83 L 116 85.5 L 117.5 81 L 114 78.5 L 118.5 78.5 Z" />
          {/* Left star */}
          <path d="M 104 78 L 105 81.5 L 108.5 81.5 L 105.7 83.5 L 106.8 87 L 104 85 L 101.2 87 L 102.3 83.5 L 99.5 81.5 L 103 81.5 Z" />
          {/* Right star */}
          <path d="M 136 78 L 137 81.5 L 140.5 81.5 L 137.7 83.5 L 138.8 87 L 136 85 L 133.2 87 L 134.3 83.5 L 131.5 81.5 L 135 81.5 Z" />
        </g>

        {/* Central Core: INTEGRALX Monogram & Wordmark */}
        {/* Stylized Monogram IX */}
        <g transform="translate(120, 114)">
          <rect x="-38" y="-12" width="76" height="2" fill="#71717a" opacity="0.4" />
          <rect x="-38" y="24" width="76" height="2" fill="#71717a" opacity="0.4" />
          
          <text
            x="0"
            y="7"
            textAnchor="middle"
            fill="#ffffff"
            className="font-black tracking-[0.12em]"
            style={{ fontSize: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            INTEGRAL<tspan fill="#d4d4d8">X</tspan>
            <tspan fontSize="12px" dy="-10">™</tspan>
          </text>

          <text
            x="0"
            y="20"
            textAnchor="middle"
            fill="#a1a1aa"
            className="font-bold tracking-[0.3em] uppercase"
            style={{ fontSize: '7.5px', fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            ACCREDITED
          </text>
        </g>

        {/* Verification Checkmark Shield below */}
        <g transform="translate(120, 161)">
          <path
            d="M 0 -8 L 10 -4 L 10 4 Q 10 11 0 15 Q -10 11 -10 4 L -10 -4 Z"
            fill="#27272a"
            stroke="#52525b"
            strokeWidth="1"
          />
          {/* Checkmark inside shield */}
          <path
            d="M -4 3 L -1 6 L 5 -1"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
