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
            <rect x="350" y="240" width="300" height="150" fill="transparent" stroke="#D4AF37" strokeWidth="2" strokeDasharray="10 10" rx="20" />
            <text x="500" y="320" textAnchor="middle" fill="#D4AF37" className="font-serif text-3xl font-semibold opacity-80">
              Ring de dans
            </text>


            {/* Stage (Scenă) */}
            <rect x="300" y="80" width="400" height="100" fill="#EADCD3" stroke="#D4AF37" strokeWidth="3" rx="10" className="drop-shadow-md opacity-80" />
            <text x="500" y="137" textAnchor="middle" fill="#2C352D" className="font-serif text-3xl font-bold">
              Scenă
            </text>

            {/* Exit/Entrance Door */}
            <path d="M 850 50 L 950 50" stroke="#2C352D" strokeWidth="8" strokeLinecap="round" className="opacity-50" />
            <g transform="translate(876, 60)" className="opacity-60 text-gray-800">
              <DoorOpen size={48} stroke="#2C352D" strokeWidth={1.5} />
            </g>
            <text x="900" y="130" textAnchor="middle" fill="#2C352D" className="font-sans text-sm font-semibold tracking-widest uppercase opacity-60">
              Ieșire/Intrare
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
              const ty = table.position.y + 150; // Shifted all normal tables down by 150px
              
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
