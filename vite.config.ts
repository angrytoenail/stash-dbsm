import { Buffer } from "node:buffer";
import type { Plugin, TransformResult } from "vite";
import { defineConfig, normalizePath } from "vite";
import stashPluginConfigGenerator from "./helpers/rollup-plugin-stash-config-generator";
import pkg from "./package.json" with { type: "json" };

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
  plugins: [importSQLPlugin()],
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
      plugins: [stashPluginConfigGenerator({ pkg })],
    },
    lib: {
      entry: ["src/main.tsx"],
      name: "dbsm",
      formats: ["iife"],
      fileName: () => "dbsm.js",
    },
    minify: false,
  },
});
