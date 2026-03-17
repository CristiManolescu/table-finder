import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { TableData } from '../data';

interface TableModalProps {
  table: TableData | null;
  onClose: () => void;
}

const TableModal = ({ table, onClose }: TableModalProps) => {
  return (
    <AnimatePresence>
      {table && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none" style={{ height: '100dvh' }}>
            <motion.div
              drag
              dragMomentum={false}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden pointer-events-auto border border-gray-100 max-h-[85vh] flex flex-col cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'none' }}
            >
              <div className="bg-gradient-to-br from-ivory to-sage/20 px-5 py-4 flex justify-between items-center border-b border-gray-100">
                <h3 className="font-serif text-[1.35rem] text-gray-800 font-semibold select-none">
                  {table.id === 'prezidiu' ? 'Masa de prezidiu' : `Masa ${table.id}`}
                </h3>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                  style={{ touchAction: 'auto' }}
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div 
                className="p-4 sm:p-5 overflow-y-auto cursor-auto" 
                style={{ touchAction: 'auto' }}
                onPointerDown={(e) => e.stopPropagation()} 
              >
                <ul className="space-y-0.5">
                  {(table.id === 'prezidiu' ? table.guests : table.guests.slice().sort((a,b) => a.localeCompare(b))).map((guest, idx) => (
                    <li key={idx} className="flex flex-col">
                      <div className="py-2">
                        <span className="font-sans text-gray-700 font-medium text-sm sm:text-base leading-tight">
                          {guest}
                        </span>
                      </div>
                      {idx !== table.guests.length - 1 && (
                        <hr className="border-gray-50" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TableModal;
