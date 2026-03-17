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
      items: ["Mezeluri", "Brânzeturi"]
    },
    {
      name: "Pește",
      items: ["Pește cu orez"]
    },
    {
      name: "Sarmale",
      items: ["Sarmale cu mămăligă"]
    },
    {
      name: "Friptură",
      items: ["Pulpă de pui la grătar", "Ceafă de porc la grătar"]
    }
  ],
  drinks: [
    {
      name: "Wine",
      items: [
        "Ayo Summer Day (alb - demisec, Cramele Dealu Mare)",
        "Ayo Summer Sunset (roze - demisec, Cramele Dealu Mare)",
        "Ayo Summer Night (roșu - demisec, Cramele Dealu Mare)"
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
