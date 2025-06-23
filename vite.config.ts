import { Buffer } from "node:buffer";
import type { Plugin, TransformResult } from "vite";
import { defineConfig, normalizePath } from "vite";

function base64AssetPlugin(): Plugin {
  return {
    name: "vite-base64-asset",
    transform(code: string, id: string): TransformResult | null {
      if (!id.endsWith("?base64")) {
        return null;
      }
      const base64 = Buffer.from(code, "utf-8").toString("base64");
      return { code: `export default atob('${base64}');`, map: null };
    },
  };
}

export default defineConfig({
  resolve: {
    alias: {
      "@": normalizePath("./src"),
      "@sql": normalizePath("./sql"),
    },
  },
  plugins: [base64AssetPlugin()],
  build: {
    assetsDir: ".",
    lib: {
      entry: ["src/main.ts"],
      name: "dbsm",
      fileName: () => "dbsm.js",
      formats: ["iife"],
    },
    minify: false,
  },
});
