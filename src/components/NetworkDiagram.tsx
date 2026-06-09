import React from 'react';

interface NetworkDiagramProps {
  targetNet: '195.150.100.0/28' | '200.100.100.5/28' | string;
}

export const ProgrammaticNetworkDiagram: React.FC<NetworkDiagramProps> = ({ targetNet }) => {
  const is24 = targetNet === "200.100.100.5/28";
  const labelText = is24 ? "Sohag Final 2024 Network Architecture Diagram" : "Sohag Final 2023 Network Architecture Diagram";
  const ipPrefix = is24 ? "200.100.100." : "195.150.100.";

  return (
    <div className="w-full bg-slate-900/90 border border-teal-500/40 rounded-2xl p-5 my-6 shadow-2xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping" />
          <span className="text-teal-400 font-bold text-xs uppercase tracking-widest font-mono">
            {labelText}
          </span>
        </div>
        <div className="bg-teal-500/10 border border-teal-500/20 text-teal-300 text-[11px] px-3 py-1 rounded-md font-mono">
          Mask Block Rule: {ipPrefix}0 /28
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-xl bg-slate-950/60 p-4 border border-slate-800/80">
        <svg viewBox="0 0 680 220" className="w-full min-w-[600px] h-auto block" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Backbone Ethernet Bus Wire */}
          <line x1="80" y1="110" x2="600" y2="110" stroke="#14b8a6" strokeWidth="3" strokeDasharray="1 1" />
          <line x1="80" y1="110" x2="600" y2="110" stroke="#0ea5e9" strokeWidth="1.5" />
          
          {/* Bus Terminators */}
          <rect x="74" y="98" width="6" height="24" rx="2" fill="#ef4444" />
          <rect x="600" y="98" width="6" height="24" rx="2" fill="#ef4444" />
          <text x="54" y="114" fill="#f87171" fontSize="9" className="font-mono">TERM</text>
          <text x="612" y="114" fill="#f87171" fontSize="9" className="font-mono">TERM</text>

          {/* Core Gateway Router */}
          <g transform="translate(120, 110)">
            <circle r="24" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
            <path d="M-10 -6 L10 6 M10 -6 L-10 6" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <circle r="4" fill="#0ea5e9" />
            <text x="0" y="-30" fill="#bae6fd" fontSize="11" fontWeight="bold" textAnchor="middle">Router R1</text>
            <text x="0" y="34" fill="#38bdf8" fontSize="9" textAnchor="middle" className="font-mono">GW: {ipPrefix}1</text>
          </g>

          {/* Subnet Node 1 */}
          <g transform="translate(260, 110)">
            <line x1="0" y1="0" x2="0" y2="-45" stroke="#64748b" strokeWidth="2" />
            <rect x="-35" y="-75" width="70" height="30" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="2" />
            <text x="0" y="-56" fill="#ccfbf1" fontSize="10" fontWeight="semibold" textAnchor="middle">Subnet .0</text>
            <text x="0" y="18" fill="#94a3b8" fontSize="9" textAnchor="middle" className="font-mono">Hosts: .2 - .14</text>
          </g>

          {/* Subnet Node 2 */}
          <g transform="translate(400, 110)">
            <line x1="0" y1="0" x2="0" y2="45" stroke="#64748b" strokeWidth="2" />
            <rect x="-35" y="45" width="70" height="30" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="2" />
            <text x="0" y="64" fill="#ccfbf1" fontSize="10" fontWeight="semibold" textAnchor="middle">Subnet .16</text>
            <text x="0" y="-12" fill="#94a3b8" fontSize="9" textAnchor="middle" className="font-mono">Hosts: .17 - .30</text>
          </g>

          {/* Subnet Node 3 */}
          <g transform="translate(540, 110)">
            <line x1="0" y1="0" x2="0" y2="-45" stroke="#64748b" strokeWidth="2" />
            <rect x="-35" y="-75" width="70" height="30" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="2" />
            <text x="0" y="-56" fill="#ccfbf1" fontSize="10" fontWeight="semibold" textAnchor="middle">Subnet .32</text>
            <text x="0" y="18" fill="#94a3b8" fontSize="9" textAnchor="middle" className="font-mono">Hosts: .33 - .46</text>
          </g>
        </svg>
      </div>
      <div className="mt-3 text-[11px] text-slate-400 italic leading-relaxed text-center">
        * Static representation generated natively via custom vector calculations to accurately reflect the Class C /28 sub-network architecture required by the Sohag Computer Networks Fundamentals criteria.
      </div>
    </div>
  );
};
