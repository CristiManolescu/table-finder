import { Utensils } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-ivory/90 backdrop-blur-md z-40 border-b border-gray-200 flex items-center justify-between px-6 lg:px-12 shadow-sm">
      <div className="flex items-center gap-4">
        <span className="font-script text-4xl lg:text-5xl text-gray-800 drop-shadow-sm">C&C</span>
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute left-0 w-5 h-5 border-[1.5px] border-gold rounded-full" />
          <div className="absolute right-0 w-5 h-5 border-[1.5px] border-gold rounded-full" />
        </div>
      </div>
      
      {onMenuClick && (
        <button
          onClick={onMenuClick}
          className="flex items-center gap-2 bg-sage hover:bg-sage/90 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Utensils className="w-5 h-5" />
          <span className="font-sans font-semibold">Meniu</span>
        </button>
      )}
    </header>
  );
};

export default Header;
