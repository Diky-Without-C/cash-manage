import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const setPathName = (dir: string) => {
  return new URL(dir, import.meta.url).pathname;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": setPathName("./src"),
      "@assets": setPathName("./src/assets"),
      "@components": setPathName("./src/components"),
      "@hooks": setPathName("./src/hooks"),
      "@layouts": setPathName("./src/layouts"),
      "@lib": setPathName("./src/lib"),
      "@pages": setPathName("./src/pages"),
      "@services": setPathName("./src/services"),
      "@utils": setPathName("./src/utils"),
    },
  },
});
