import { Buffer } from "node:buffer";
import { resolve } from "node:path";
import type { Plugin, TransformResult } from "vite";
import { defineConfig, normalizePath } from "vite";
import stashConfigGenerator from "./helpers/rollup-plugin-stash-config-generator";

function importSQLPlugin(): Plugin {
  return {
    name: "vite-plugin-encode-sql",
    transform(code: string, id: string): TransformResult | null {
      if (!id.endsWith(".sql")) {
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
  plugins: [importSQLPlugin(), stashConfigGenerator()],
  build: {
    assetsDir: ".",
    rollupOptions: {
      external: ["api", "React", "Apollo", "GQL", "gql"],
      output: {
        globals: {
          "window.PluginApi": "api",
          "api.React": "React",
          "api.Apollo": "Apollo",
          "Apollo.gql": "gql",
          "api.libraries.GQL": "GQL",
        },
      },
    },
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "DBSM",
      formats: ["iife"],
      fileName: (format, entryName) => entryName.concat(".js"),
      cssFileName: "style",
    },
    minify: false,
  },
});
