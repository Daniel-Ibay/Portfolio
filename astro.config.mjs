// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      // Fuerza a Vite a resolver las rutas sin inyectar bytes nulos
      preserveSymlinks: true,
    },
    // Deshabilita la caché de optimización de dependencias
    cacheDir: undefined,
    plugins: [tailwindcss()],
  },
});
