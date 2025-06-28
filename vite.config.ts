import tailwindcss from "@tailwindcss/vite";
import { Buffer } from "node:buffer";
import { resolve } from "node:path";
import type {
  OutputAsset,
  OutputBundle,
  OutputChunk,
  OutputOptions,
} from "rollup";
import {
  defineConfig,
  type Plugin,
  type PluginOption,
  type TransformResult,
  type UserConfig,
} from "vite";
import zipPack from "vite-plugin-zip-pack";
import yaml from "yaml";
import pkg from "./package.json" with { type: "json" };

const name = pkg.name;
const outDir = "dist";

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

function stashConfigGenerator(): Plugin {
  return {
    name: "vite-plugin-stash-config",
    enforce: "post",
    apply: "build",

    async generateBundle(_: OutputOptions, bundle: OutputBundle) {
      const cssFiles: string[] = [];
      const jsFiles: string[] = [];

      for (const fileName in bundle) {
        const file: OutputAsset | OutputChunk = bundle[fileName];
        if (file.type === "asset" && file.fileName.endsWith(".css")) {
          cssFiles.push(file.fileName);
        } else if (file.type === "chunk" && file.isEntry) {
          jsFiles.push(file.fileName);
        }
      }
      const pluginConfig: StashPluginConfig = {
        name: pkg.name || "Stash Plugin",
        description: pkg.description || "No description provided.",
        version: pkg.version || "0.0.0",
        url: pkg.repository.url.replace(/^(?:git\+)?(.*?)(?:\.git)?$/, "$1"),
        ui: {
          javascript: jsFiles,
          css: cssFiles.length > 0 ? cssFiles : undefined,
          assets: { "/": "." },
        },
      };

      this.emitFile({
        type: "asset",
        fileName: `${name}.yml`,
        source: yaml.stringify(pluginConfig),
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [
    tailwindcss(),
    importSQLPlugin(),
    stashConfigGenerator(),
  ];
  if (mode === "production") {
    plugins.push(zipPack({ outDir, outFileName: `${name}.zip` }));
  }
  const config: UserConfig = {
    base: `/plugin/${name}/assets/`,
    esbuild: { legalComments: "none" },
    plugins,
    define: {
      React: "PluginApi.React",
      "process.env": {},
    },
    publicDir: resolve(__dirname, "static"),
    resolve: {
      alias: {
        "@": resolve("./src"),
        "@sql": resolve("./sql"),
        "@static": resolve("./static"),
      },
    },
    build: {
      outDir,
      lib: {
        name: name.replace(/[^a-z]/, ""),
        formats: ["iife"],
        entry: [resolve(__dirname, "src/main.tsx")],
        fileName: name,
      },
      minify: mode === "production",
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
  };
  return config;
});
