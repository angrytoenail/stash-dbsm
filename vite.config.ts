import tailwindcss from "@tailwindcss/vite";
import { Buffer } from "node:buffer";
import path from "node:path";
import type { Plugin, TransformResult } from "vite";
import { defineConfig } from "vite";
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
  define: {
    React: "PluginApi.React",
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@sql": path.resolve("./sql"),
    },
  },
  plugins: [
    tailwindcss(),
    importSQLPlugin(),
    stashConfigGenerator({ env: import.meta.env }),
  ],
  esbuild: { legalComments: "none" },
  build: {
    minify: false,
    modulePreload: { polyfill: false },
    assetsDir: ".",
    lib: {
      formats: ["umd"],
      entry: ["./src/main.ts"],
      name: "DBSM",
      fileName: (format, entryName) => entryName.concat(".", format, ".js"),
      cssFileName: "style",
    },
    rollupOptions: {
      jsx: {
        mode: "automatic",
      },
      external: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-bootstrap",
        "@apollo/client",
        "@fortawesome/react-fontawesome",
        "@fortawesome/free-solid-svg-icons",
      ],
      output: {
        globals: {
          react: "PluginApi.React",
          "react-dom": "PluginApi.ReactDOM",
          "react-router-dom": "PluginApi.libraries.ReactRouterDOM",
          "react-bootstrap": "PluginApi.libraries.Bootstrap",
          "@apollo/client": "PluginApi.libraries.Apollo",
          "@fortawesome/free-regular-svg-icons":
            "PluginApi.libraries.FontAwesomeRegular",
          "@fortawesome/free-solid-svg-icons":
            "PluginApi.libraries.FontAwesomeSolid",
        },
      },
    },
  },
});
