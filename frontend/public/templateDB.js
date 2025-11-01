// public/templateDB.js
window.TEMPLATES_DB = {
  square: {
    name: "Square Posts (1:1)",
    templates: [
      {
        id: "tpl_modern_dark",
        name: "Modern Dark",
        thumbnail:
          "https://placehold.co/400x400/222222/ffffff?text=Modern\\nDark",
        data: {
          version: "5.3.0",
          backgroundColor: "#222222",
          objects: [
            {
              type: "text",
              left: 50,
              top: 100,
              width: 980,
              fill: "#ffffff",
              text: "Your Main Title Here",
              fontSize: 100,
              fontWeight: "bold",
              fontFamily: "Arial",
            },
            {
              type: "text",
              left: 50,
              top: 350,
              width: 980,
              fill: "#eeeeee",
              text: "Your catchy tagline or event details",
              fontSize: 50,
              fontFamily: "Arial",
            },
          ],
        },
      },
    ],
  },
};
