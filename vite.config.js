import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig({
  plugins: [react(), yextSSG()],
  // files at /public/prefix/assets
  // publicDir: "/public",
  build: {
    assetsDir: "locations/assets",
    // assetsInclude: ['**/*.ico'] // Include all .ico files as they are
  }
});
