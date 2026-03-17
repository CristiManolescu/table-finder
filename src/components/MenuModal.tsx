import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Utensils, Wine } from 'lucide-react';
import { menuData } from '../menuData';
import clsx from 'clsx';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccordionItem = ({ title, items }: { title: string; items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-3 hover:bg-black/5 transition-colors rounded-lg focus:outline-none"
      >
        <span className="font-sans font-semibold text-gray-800 text-[1.1rem]">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="pb-4 px-4 space-y-3 pt-1">
              {items.map((item, idx) => (
                <li key={idx} className="font-sans text-gray-600 text-[1rem] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-sage flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');

  return (
    <AnimatePresence>
      {isOpen && (
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
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto border border-gray-100 max-h-[85vh] flex flex-col"
            >
              <div className="bg-gradient-to-br from-ivory to-sage/20 px-5 py-4 flex justify-between items-center border-b border-gray-100 flex-shrink-0">
                <h3 className="font-serif text-[1.4rem] text-gray-800 font-bold select-none flex items-center gap-2">
                  Meniu
                </h3>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex px-4 pt-4 shrink-0 border-b border-gray-100 bg-gray-50/50">
                <button
                  className={clsx(
                    "flex-1 flex items-center justify-center gap-2 pb-3 font-bold transition-colors duration-200 border-b-2 text-[1.1rem]",
                    activeTab === 'food' 
                      ? "text-sage border-sage" 
                      : "text-gray-400 border-transparent hover:text-gray-600"
                  )}
                  onClick={() => setActiveTab('food')}
                >
                  <Utensils className="w-5 h-5 mb-0.5" />
                  Mâncare
                </button>
                <button
                  className={clsx(
                    "flex-1 flex items-center justify-center gap-2 pb-3 font-bold transition-colors duration-200 border-b-2 text-[1.1rem]",
                    activeTab === 'drinks' 
                      ? "text-sage border-sage" 
                      : "text-gray-400 border-transparent hover:text-gray-600"
                  )}
                  onClick={() => setActiveTab('drinks')}
                >
                  <Wine className="w-5 h-5 mb-0.5" />
                  Băutură
                </button>
              </div>

              {/* Accordion Content */}
              <div className="overflow-y-auto px-3 py-2 flex-1 relative" style={{ touchAction: 'auto' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: activeTab === 'food' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: activeTab === 'food' ? 20 : -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col"
                  >
                    {(activeTab === 'food' ? menuData.food : menuData.drinks).map((category, idx) => (
                      <AccordionItem key={idx} title={category.name} items={category.items} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuModal;
