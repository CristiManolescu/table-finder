import { TransformComponent } from 'react-zoom-pan-pinch';
import { motion } from 'framer-motion';
import { DoorOpen } from 'lucide-react';
import clsx from 'clsx';
import type { TableData } from '../data';

interface FloorPlanProps {
  tables: TableData[];
  selectedTableId: number | 'prezidiu' | null;
  onTableClick: (table: TableData) => void;
}

const FloorPlan = ({ tables, selectedTableId, onTableClick }: FloorPlanProps) => {
  return (
    <div className="w-full h-full bg-ivory/50 flex items-center justify-center overflow-hidden">
      <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
        <div className="relative w-[1000px] h-[1000px] bg-white shadow-2xl mx-auto my-auto rounded-3xl border border-gray-100 flex items-center justify-center">
          
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            {/* Intrare / Ieșire */}
            <path d="M 80 880 L 180 880" stroke="#2C352D" strokeWidth="6" strokeLinecap="round" className="opacity-50" />
            <g transform="translate(106, 820)" className="opacity-60 text-gray-800">
              <DoorOpen size={48} stroke="#2C352D" strokeWidth={1.5} />
            </g>
            <text x="130" y="905" textAnchor="middle" fill="#2C352D" className="font-sans text-xs font-bold tracking-widest uppercase opacity-60">
              Intrare/Ieșire
            </text>

            {/* Band */}
            <path d="M 250 880 Q 500 960 750 880" fill="transparent" stroke="#2C352D" strokeWidth="2" className="opacity-80" />
            <text x="500" y="910" textAnchor="middle" fill="#2C352D" className="font-serif text-3xl font-bold uppercase tracking-[0.2em] opacity-80">
              Band
            </text>

            {/* Foto Video */}
            <rect x="740" y="830" width="90" height="50" fill="#EADCD3" stroke="#D4AF37" strokeWidth="2" rx="8" className="opacity-80" />
            <text x="785" y="860" textAnchor="middle" fill="#2C352D" className="font-serif text-sm font-bold opacity-80">
              Foto/Video
            </text>

            {tables.map((table) => {
              const isSelected = selectedTableId === table.id;
              
              if (table.id === 'prezidiu') {
                return (
                  <g 
                    key={table.id} 
                    transform={`translate(${table.position.x}, ${table.position.y})`}
                    onClick={() => onTableClick(table)}
                    className="cursor-pointer group"
                  >
                    <motion.rect 
                      x="-200" 
                      y="-40" 
                      width="400" 
                      height="80" 
                      rx="40"
                      fill={isSelected ? "#9DC183" : "#FFFFF0"}
                      stroke={isSelected ? "#2C352D" : "#D4AF37"}
                      strokeWidth={isSelected ? "4" : "3"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={clsx(
                        "transition-colors duration-300 drop-shadow-md",
                        isSelected ? "shadow-sage" : "group-hover:drop-shadow-xl"
                      )}
                    />
                    {isSelected && (
                      <rect x="-208" y="-48" width="416" height="96" rx="48" fill="transparent" stroke="#9DC183" strokeWidth="2" strokeOpacity="0.5" className="animate-pulse" />
                    )}
                    <text
                      x="0"
                      y="8"
                      textAnchor="middle"
                      className={clsx(
                        "font-serif font-bold text-2xl transition-colors select-none",
                        isSelected ? "fill-white" : "fill-gray-800 group-hover:fill-sage"
                      )}
                    >
                      Masa de prezidiu
                    </text>
                  </g>
                );
              }

              // Normal round tables
              const r = 50;
              const ty = table.position.y;
              
              return (
                <g 
                  key={table.id} 
                  transform={`translate(${table.position.x}, ${ty})`}
                  onClick={() => onTableClick(table)}
                  className="cursor-pointer group"
                >
                  <motion.circle 
                    r={r} 
                    cx="0" 
                    cy="0"
                    fill={isSelected ? "#9DC183" : "#FFFFF0"}
                    stroke={isSelected ? "#2C352D" : "#D4AF37"}
                    strokeWidth={isSelected ? "4" : "3"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={clsx(
                      "transition-colors duration-300 drop-shadow-md",
                      isSelected ? "shadow-sage" : "group-hover:drop-shadow-xl"
                    )}
                  />
                  {isSelected && (
                     <circle r={r + 8} cx="0" cy="0" fill="transparent" stroke="#9DC183" strokeWidth="2" strokeOpacity="0.5" className="animate-pulse" />
                  )}

                  <text
                    x="0"
                    y="5"
                    textAnchor="middle"
                    className={clsx(
                      "font-serif font-bold text-2xl transition-colors select-none",
                      isSelected ? "fill-white" : "fill-gray-800 group-hover:fill-sage"
                    )}
                  >
                    {table.id}
                  </text>
                  <text
                    x="0"
                    y="25"
                    textAnchor="middle"
                    className={clsx(
                      "font-sans text-[10px] font-medium transition-colors select-none",
                      isSelected ? "fill-white/80" : "fill-gray-500"
                    )}
                  >
                    {table.guests.length} invitați
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </TransformComponent>
    </div>
  );
};

export default FloorPlan;
