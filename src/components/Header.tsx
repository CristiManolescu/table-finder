const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-ivory/90 backdrop-blur-md z-40 border-b border-gray-200 flex items-center justify-center px-6 lg:px-12 shadow-sm">
      <div className="flex items-center gap-4">
        <span className="font-script text-4xl lg:text-5xl text-gray-800 drop-shadow-sm">C&C</span>
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute left-0 w-5 h-5 border-[1.5px] border-gold rounded-full" />
          <div className="absolute right-0 w-5 h-5 border-[1.5px] border-gold rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
