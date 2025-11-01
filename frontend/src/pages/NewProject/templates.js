/*
  This file is your "Template Database".
  It's a global variable that both your React app and your editor can access.
*/

// We define a global variable on the window object
window.TEMPLATES_DB = {
  // --- TEMPLATES FOR 1:1 SQUARE POST (1080x1080) ---
  "square": {
    "name": "Square Posts (1:1)",
    "templates": [
      {
        "id": "tpl_modern_dark",
        "name": "Modern Dark",
        "thumbnail": "https://placehold.co/400x400/222222/ffffff?text=Modern\\nDark",
        "data": {
          "version": "5.3.0",
          "backgroundColor": "#222222",
          "objects": [
            { "type": "text", "left": 50, "top": 100, "width": 980, "fill": "#ffffff", "text": "Your Main Title Here", "fontSize": 100, "fontWeight": "bold", "fontFamily": "Arial", "name": "title_placeholder" },
            { "type": "text", "left": 50, "top": 350, "width": 980, "fill": "#eeeeee", "text": "Your catchy tagline or event details", "fontSize": 50, "fontFamily": "Arial", "name": "tagline_placeholder" },
            { "type": "rect", "left": 440, "top": 800, "width": 200, "height": 200, "fill": "#555", "stroke": "#fff", "strokeWidth": 2, "strokeDashArray": [10, 5], "name": "logo_placeholder", "selectable": false },
            { "type": "text", "left": 440, "top": 870, "width": 200, "fill": "#fff", "text": "Add Logo", "fontSize": 40, "name": "logo_placeholder_text", "selectable": false }
          ]
        }
      },
      {
        "id": "tpl_minimal_light",
        "name": "Minimal Light",
        "thumbnail": "https://placehold.co/400x400/f4f4f4/333333?text=Minimal\\nLight",
        "data": {
          "version": "5.3.0",
          "backgroundColor": "#f4f4f4",
          "objects": [
            { "type": "text", "left": 50, "top": 450, "width": 980, "fill": "#333333", "text": "A Simple, Clean Title", "fontSize": 90, "fontWeight": "bold", "fontFamily": "Georgia", "name": "title_placeholder" },
            { "type": "text", "left": 50, "top": 580, "width": 980, "fill": "#555555", "text": "Subtitle goes here", "fontSize": 45, "fontFamily": "Georgia", "name": "tagline_placeholder" }
          ]
        }
      }
    ]
  },
  
  // --- TEMPLATES FOR 9:16 STORY (1080x1920) ---
  "story": {
    "name": "Stories (9:16)",
    "templates": [
      {
        "id": "tpl_story_bright",
        "name": "Bright Story",
        "thumbnail": "https://placehold.co/400x711/34D399/1F2937?text=Bright\\nStory",
        "data": {
          "version": "5.3.0",
          "backgroundColor": "#34D399",
          "objects": [
            { "type": "text", "left": 50, "top": 700, "width": 980, "fill": "#1F2937", "text": "BIG NEWS", "fontSize": 120, "fontWeight": "bold", "fontFamily": "Arial", "name": "title_placeholder" }
          ]
        }
      }
    ]
  }
};

