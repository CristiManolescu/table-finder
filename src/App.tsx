import { useState, useRef } from 'react';
import { TransformWrapper } from 'react-zoom-pan-pinch';
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FloorPlan from './components/FloorPlan';
import TableModal from './components/TableModal';
import MenuModal from './components/MenuModal';
import { tablesData } from './data';
import type { TableData } from './data';

function App() {
  const [selectedTable, setSelectedTable] = useState<TableData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const handleSelectGuest = (tableId: number | 'prezidiu') => {
    const table = tablesData.find(t => t.id === tableId);
    if (!table) return;

    setSelectedTable(table);

    if (transformComponentRef.current) {
      const x = table.position.x;
      const y = table.position.y;

      const { setTransform, instance } = transformComponentRef.current;
      const wrapper = instance.wrapperComponent;

      const vw = wrapper ? wrapper.offsetWidth : window.innerWidth;
      const vh = wrapper ? wrapper.offsetHeight : window.innerHeight;

      const isMobile = window.innerWidth < 768;
      const targetScale = isMobile ? 0.85 : 1.3;

      const tx = (vw / 2) - (x * targetScale);
      const ty = (vh / 2) - (y * targetScale);

      setTransform(tx, ty, targetScale, 600, "easeOut");
    }
  };

  const handleTableClick = (table: TableData) => {
    setSelectedTable(table);
  };

  const handleCloseModal = () => {
    setSelectedTable(null);
  };

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col pt-20 bg-[#FFFFF0]">
      <Header onMenuClick={() => setIsMenuOpen(true)} />

      <div className="w-full bg-[#FFFFF0]/95 backdrop-blur-md z-30 relative pt-2 pb-2 sm:pt-4 sm:pb-6 flex-shrink-0">
        <div className="flex flex-col items-center gap-2 sm:gap-3 w-full max-w-2xl mx-auto px-2 sm:px-4">
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide text-[#2C352D] text-center drop-shadow-sm">
            Găsește-ți locul la masă
          </h1>
          <div className="w-full max-w-md">
            <SearchBar onSelectGuest={handleSelectGuest} />
          </div>
        </div>
      </div>

      <main className="flex-1 w-full relative -mt-[18rem] sm:-mt-24 lg:-mt-4 xl:mt-0 z-10">
        <TransformWrapper
          ref={transformComponentRef}
          initialScale={window.innerWidth < 768 ? window.innerWidth / 1100 : 1}
          minScale={0.1}
          maxScale={4}
          centerOnInit={true}
          wheel={{ step: 0.1 }}
          doubleClick={{ disabled: true }}
          limitToBounds={false}
        >
          <FloorPlan
            tables={tablesData}
            selectedTableId={selectedTable?.id || null}
            onTableClick={handleTableClick}
          />
        </TransformWrapper>
      </main>

      <TableModal
        table={selectedTable}
        onClose={handleCloseModal}
      />
      
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
}

export default App;
