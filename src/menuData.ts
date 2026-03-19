export type MenuItem = {
  name: string;
  items: string[];
};

export type MenuData = {
  food: MenuItem[];
  drinks: MenuItem[];
};

export const menuData: MenuData = {
  food: [
    {
      name: "Aperitiv",
      items: [
        "Cosulet cu salata de cruditati",
        "Rulada de cascaval cu sunca si mousse de branza cu marar",
        "Rafaello cu verdeata",
        "Ardei gras cu mousse de branza fina",
        "Frigaruie chorizo si salam de Sibiu",
        "Muschi file",
        "Chiftelute traditionale",
        "Salata de vinete coapte",
        "Icre de crap pe pandispan sarat",
        "Rulou de castravete si rosii cherry",
        "Frigaruie masline",
        "Pui shanhai"
      ]
    },
    {
      name: "Pește",
      items: ["File de Salau in crusta de ierburi aromatice servit cu orez indian si Sos Lemon Butter"]
    },
    {
      name: "Sarmale",
      items: ["Sărmăluţe în foi de varză pe pat de mămăliguţa, bacon crocant, smântâna naturală şi ardei iute"]
    },
    {
      name: "Friptură",
      items: ["Ceafa de porc si pulpa de pui dezosata la grill cu cartofi gratinati, sos brun si salată de ardei copţi pe plită"]
    }
  ],
  drinks: [
    {
      name: "Wine",
      items: [
        "Crama Mosia de la Tohani - Vin alb,roze si rosu",
        "Special Reserve:Feteasca Regala,Rose si Feteasca Neagra",
        "Crama Recas-Castel Huniade - Vin alb,roze si rosu",
        "Feteasca Regala, Rose si Feteasca Neagra"
      ]
    },
    {
      name: "Whisky",
      items: ["Johnnie Walker Red Label", "J&B"]
    },
    {
      name: "Cognac",
      items: ["Jidvei Vinars"]
    },
    {
      name: "Vodka",
      items: ["Smirnoff Red", "Tazovsky"]
    },
    {
      name: "Rom",
      items: ["Pampero"]
    },
    {
      name: "Gin",
      items: ["Beefeater"]
    },
    {
      name: "Liqueur Crème",
      items: ["Baileys"]
    },
    {
      name: "Cafea",
      items: [
        "Espresso Scurt / Lung",
        "Espresso Decofeinizat",
        "Cappuccino",
        "Cappuccino Decofeinizat"
      ]
    },
    {
      name: "Soft Drinks",
      items: [
        "Apa Minerala Plata Izvorul Alb 750 ml",
        "Apa Minerala Carbogazoasa Dorna 750 ml",
        "Coca-Cola / Coca-Cola Zero 250 ml",
        "Fanta 250 ml",
        "Sprite 250 ml",
        "Schweppes Kinley 250 ml",
        "Fuzetea Piersica/Lamaie/Verde 250 ml"
      ]
    },
    {
      name: "Natural Juice",
      items: ["Granini Nectar: portocale, mere roșii, ananas, piersică, grapefruit"]
    },
    {
      name: "Long Drinks",
      items: [
        "Campari Orange",
        "Gin Tonic",
        "Vodka Orange",
        "Vodka Apple",
        "Vodka Tonic",
        "Aperol Spritz",
        "Cuba Libre",
        "Hugo"
      ]
    },
    {
      name: "Alcoholic Cocktails",
      items: [
        "Manhattan",
        "Cosmopolitan",
        "Apple Martini",
        "Mojito"
      ]
    },
    {
      name: "Non Alcoholic Cocktails",
      items: ["Green Apple", "Safe Sex", "Bahamas"]
    }
  ]
};
