export interface TableData {
  id: number | 'prezidiu';
  position: { x: number; y: number };
  guests: string[];
}

export const bridalTableData: TableData = {
  id: 'prezidiu',
  position: { x: 500, y: 100 }, // Top center
  guests: [
    'Cristina & Cristian Manolescu (Miri)',
    'Denise & Alexandru Constantin (Nași)'
  ]
};

export const tablesData: TableData[] = [
  bridalTableData,
  {
    id: 1,
    position: { x: 200, y: 220 },
    guests: ['Valerica Manolescu', 'Horia Manolescu', 'Mirela Negoescu', 'Dan Negoescu', 'Bianca Negoescu', 'Gabriel Matei', 'Daniel Pandele', 'Elena Negoescu', 'Constantin Negoescu']
  },
  {
    id: 2,
    position: { x: 100, y: 350 },
    guests: ['Cosmin Danescu', 'Cristi Danescu', 'Mariana Danescu', 'Tantica Alexandru', 'Sorin Alexandru', 'Catalin Manole', 'Mirela Manole', 'Georgica Manole', 'Gabi Manole', 'Nicoleta Marinescu', 'Lucian Marinescu']
  },
  {
    id: 3,
    position: { x: 200, y: 480 },
    guests: ['Florina Negoescu', 'Catalin Negoescu', 'Catalina Negoescu', 'Alexandru Negoescu', 'Diana Tudose', 'Cristina Serban', 'Catalin Serban', 'Gabriela Enache', 'Constantin Enache', 'Ionuț Enache']
  },
  {
    id: 4,
    position: { x: 100, y: 610 },
    guests: ['Andreea Visan', 'Eugen Manolescu', 'Cristina Manolescu', 'Sanda Visan', 'Nicu Visan', 'Cristian Zaharescu', 'Cristina Zaharescu', 'Alexandra Manolescu', 'Adrian Manolescu']
  },
  {
    id: 5,
    position: { x: 800, y: 150 },
    guests: ['Mihai Sandu', 'Alexandra Patrascioiu', 'Alexandra Neacsu', 'Samuel Nitu', 'Cosmin Maga', 'Andreea Moghioroiu', 'Bogdan Moghioroiu', 'Alexandru Negoita', 'Elena Costin', 'Luiza Gogu', 'Marian Gogu']
  },
  {
    id: 6,
    position: { x: 920, y: 260 },
    guests: ['Ionut Frincu', 'Ioana Mirea', 'Razvan Geangu', 'Irina Ionescu', 'Andrei Harsia', 'Maria Sarpe', 'David Bitica', 'Veronica Dunga', 'Robert Alexandru', 'Ciprian Bucurica']
  },
  {
    id: 7,
    position: { x: 800, y: 380 },
    guests: ['Lavinia Cocioaba', 'Ana Constantin', 'Ana Alexandru', 'Cristina Sirbu', 'Amalia Gherghina', 'Albert Vorovenci', 'Bogdan Tarcau', 'Mina Oprea', 'Andrei Hoisan', 'Sebastian Oprea']
  },
  {
    id: 8,
    position: { x: 920, y: 500 },
    guests: ['Felicia Rada', 'Alin Rada', 'Andreea Mincu', 'Robert Mincu', 'Valentin Ene', 'Mihaela Angheloiu', 'Alexandru Angheloiu', 'Codrut Rada', 'Roxana Rada', 'Marian Anghel', 'Flori Anghel']
  },
  {
    id: 9,
    position: { x: 800, y: 620 },
    guests: ['Madalina Vladescu', 'Giulia Vladescu', 'Cristina Stefan', 'Nicu Stefan', 'Jasmine Stefan', 'Marina Savu', 'Ionel Lupu', 'Andrei Savu', 'Teodora Dobrescu']
  },
  {
    id: 10,
    position: { x: 900, y: 760 },
    guests: ['Vrancenii Band']
  }
];

export const extractAllGuests = (): { name: string; tableId: number | 'prezidiu' }[] => {
  const allGuests: { name: string; tableId: number | 'prezidiu' }[] = [];
  tablesData.forEach(table => {
    table.guests.forEach(guest => {
      allGuests.push({ name: guest, tableId: table.id });
    });
  });
  return allGuests;
};
