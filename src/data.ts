export interface TableData {
  id: number | 'prezidiu';
  position: { x: number; y: number };
  guests: string[];
}

export const bridalTableData: TableData = {
  id: 'prezidiu',
  position: { x: 500, y: 920 }, // Bottom center, where the exit was
  guests: [
    'Cristina & Cristian Manolescu (Miri)',
    'Denise & Alexandru Constantin (Nași)'
  ]
};

export const tablesData: TableData[] = [
  bridalTableData,
  {
    id: 1,
    position: { x: 300, y: 250 },
    guests: ['Popescu Andrei', 'Ionescu Maria', 'Radu Mihai', 'Vasilescu Ana', 'Constantinescu Elena', 'Dumitru Ionut']
  },
  {
    id: 2,
    position: { x: 500, y: 250 },
    guests: ['Stan Cristian', 'Munteanu Ioana', 'Toma Alexandru', 'Nita Andreea', 'Avram Gabriel', 'Gheorghe Mihaela']
  },
  {
    id: 3,
    position: { x: 700, y: 250 },
    guests: ['Ilie Florin', 'Matei Alina', 'Petrescu Daniel', 'Nicolae Cristina', 'Grigore Bogdan', 'Badea Roxana']
  },
  {
    id: 4,
    position: { x: 400, y: 450 },
    guests: ['Ciobanu Marian', 'Tudor Stefania', 'Rusu Valentin', 'Stefan Claudia', 'Marin Gabriel', 'Olteanu Simona', 'Manea Lucian']
  },
  {
    id: 5,
    position: { x: 600, y: 450 },
    guests: ['Dima Catalin', 'Lazar Oana', 'Pascu Dragos', 'Voinea Laura', 'Neagu Razvan', 'Stoica Madalina']
  },
  {
    id: 6,
    position: { x: 500, y: 650 },
    guests: ['Mircea Vasile', 'Iacob Carmen', 'Pavel Sorin', 'Vlad Adriana', 'Balan Silviu', 'Cojocaru Diana', 'Lungu Stefan']
  }
];

export const extractAllGuests = (): { name: string; tableId: number | 'prezidiu' }[] => {
  const allGuests: { name: string; tableId: number | 'prezidiu' }[] = [];
  tablesData.forEach(table => {
    table.guests.forEach(guest => {
      allGuests.push({ name: guest, tableId: table.id });
    });
  });
  return allGuests.sort((a, b) => a.name.localeCompare(b.name));
};
