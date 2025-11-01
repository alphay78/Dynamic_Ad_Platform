// src/global.d.ts
export {};

declare global {
  interface Window {
    TEMPLATES_DB: {
      [key: string]: {
        name: string;
        templates: {
          id: string;
          name: string;
          thumbnail: string;
          data: any;
        }[];
      };
    };
  }
}
