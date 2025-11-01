var TEMPLATES_DB = {
  
  "group_modern_dark": {
    "name": "Modern Dark",
    "thumbnail": "https://placehold.co/400x400/222222/ffffff?text=Modern\\nDark",
    "variants": {
      "tpl_modern_dark_insta": {
        "name": "Instagram Post",
        "dimensions": "1080x1080",
        "thumbnail": "https://placehold.co/400x400/222222/ffffff?text=Modern\\nInsta",
        "data": {
          "version": "5.3.0",
          "backgroundColor": "#222222",
          "objects": [
            {
              "type": "text", "version": "5.3.0", "originX": "left", "originY": "top",
              "left": 50, "top": 100, "width": 980, "height": 113.01, "fill": "#ffffff",
              "text": "Your Main Title Here", "fontSize": 100, "fontWeight": "bold",
              "fontFamily": "Arial", "name": "title_placeholder"
            },
            {
              "type": "text", "version": "5.3.0", "originX": "left", "originY": "top",
              "left": 50, "top": 350, "width": 980, "height": 56.5, "fill": "#eeeeee",
              "text": "Your catchy tagline or event details", "fontSize": 50,
              "fontFamily": "Arial", "name": "tagline_placeholder"
            },
            {
              "type": "rect", "version": "5.3.0", "originX": "left", "originY": "top",
              "left": 440, "top": 800, "width": 200, "height": 200, "fill": "#555",
              "stroke": "#fff", "strokeWidth": 2, "strokeDashArray": [10, 5],
              "name": "logo_placeholder", "selectable": false
            },
            {
              "type": "text", "version": "5.3.0", "originX": "left", "originY": "top",
              "left": 440, "top": 870, "width": 200, "height": 45.2, "fill": "#fff", "text": "Add Logo",
              "fontSize": 40, "name": "logo_placeholder_text", "selectable": false
            }
          ]
        }
      },
      "tpl_modern_dark_fb_banner": {
        "name": "Facebook Banner",  
        "dimensions": "820x312",
        "thumbnail": "https://placehold.co/400x152/222222/ffffff?text=Modern\\nFB+Banner",
        "data": {
           "version": "5.3.0", "backgroundColor": "#222222", "objects": [
             { "type": "text", "left": 50, "top": 50, "fill": "#ffffff", "text": "Your Main Title (FB)", "fontSize": 70, "fontFamily"                   : "Arial" },
             { "type": "text", "left": 50, "top": 150, "fill": "#eeeeee", "text": "Your catchy tagline", "fontSize": 30, "fontFamily": "Arial" }
           ]
        }
      }
    }
  },
  
  "group_bright_light": {
    "name": "Bright Light",
    "thumbnail": "https://placehold.co/400x400/eeeeee/333333?text=Bright\\nLight",
    "variants": {
      "tpl_bright_light_insta": {
        "name": "Instagram Post",
        "dimensions": "1080x1080",
        "thumbnail": "https://placehold.co/400x400/eeeeee/333333?text=Bright\\nInsta",
        "data": {
          "version": "5.3.0",
          "backgroundColor": "#eeeeee",
          "objects": [
            {
              "type": "text", "version": "5.3.0", "originX": "left", "originY": "top",
              "left": 50, "top": 120, "width": 980, "height": 113.01, "fill": "#333333",
              "text": "A Bright & Bold Title", "fontSize": 100, "fontWeight": "bold",
              "fontFamily": "Georgia", "name": "title_placeholder"
            },
            {
              "type": "text", "version": "5.3.0", "originX": "left", "originY": "top",
              "left": 50, "top": 250, "width": 980, "height": 56.5, "fill": "#555555",
              "text": "Your subtitle goes here.", "fontSize": 50,
              "fontFamily": "Georgia", "name": "tagline_placeholder"
            },
            {
              "type": "rect", "version": "5.3.0", "originX": "left", "originY": "top",
              "left": 50, "top": 850, "width": 980, "height": 10, "fill": "#007bff",
              "name": "accent_bar", "selectable": false
            }
          ]
        }
      }
    }
  }

};