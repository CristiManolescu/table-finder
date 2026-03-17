import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import clsx from 'clsx';
import { extractAllGuests } from '../data';

interface SearchBarProps {
  onSelectGuest: (tableId: number | 'prezidiu') => void;
}

const allGuests = extractAllGuests();

const SearchBar = ({ onSelectGuest }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredGuests = query.trim() === ''
    ? []
    : allGuests.filter(guest => guest.name.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (guest: { name: string; tableId: number | 'prezidiu' }) => {
    setQuery(guest.name);
    setIsOpen(false);
    onSelectGuest(guest.tableId);
    setTimeout(() => setQuery(''), 500);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative group shadow-lg rounded-full overflow-hidden bg-white/80 backdrop-blur-md border border-gray-100 transition-all hover:shadow-xl focus-within:shadow-xl focus-within:border-sage/40">
        <div className="flex items-center px-4 py-3">
          <Search className="w-5 h-5 text-gray-400 group-focus-within:text-sage transition-colors" />
          <input
            type="text"
            className="w-full bg-transparent border-none outline-none px-3 text-gray-700 placeholder:text-gray-400 font-sans"
            placeholder="Introduceți numele..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>
      </div>

      {isOpen && filteredGuests.length > 0 && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-64 overflow-y-auto z-40">
          <ul className="py-2">
            {filteredGuests.map((guest, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  className={clsx(
                    "w-full text-left px-4 py-3 hover:bg-sage/10 transition-colors cursor-pointer",
                    "flex items-center justify-between"
                  )}
                  onClick={() => handleSelect(guest)}
                >
                  <span className="font-sans text-gray-800">{guest.name}</span>
                  <span className="text-xs text-sage font-medium bg-sage/10 px-2 py-1 rounded-full">
                    Masa {guest.tableId}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
