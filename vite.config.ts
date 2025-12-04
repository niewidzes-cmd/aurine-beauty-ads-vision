import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Sprawdź, czy używasz własnej domeny
const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";

export default defineConfig(({ mode }) => ({
  base: isCustomDomain ? "/" : "/aurine-beauty-ads-vision/", // "/" dla własnej domeny
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
