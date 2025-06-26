import type { OutputAsset, OutputBundle, OutputChunk, Plugin } from "rollup";
import yaml from "yaml";

/**
 * @description A configuration object that adheres to the Stash plugin schema.
 */
interface StashPluginConfig {
  name: string;
  description?: string;
  version?: string;
  url?: string;
  errLog?: "none" | "trace" | "debug" | "info" | "warning" | "error";
  interface?: "js" | "raw" | "rpc";
  exec?: string[];
  ui?: {
    css?: string[];
    javascript?: string[];
    requires?: string[];
    assets?: Map<string, string>;
    csp?: {
      "script-src": string[];
      "style-src": string[];
      "connect-src": string[];
    };
  };
  settings?: {
    name: {
      displayName: string;
      description?: string;
      type: "BOOLEAN" | "STRING" | "NUMBER";
    };
  };
  tasks?: {
    name: string;
    description?: string;
    defaultArgs: object;
  }[];
  hooks?: {
    name: string;
    triggeredBy: string[];
    defaultArgs?: object;
  }[];
}

/**
 * Creates a Vite/Rollup plugin that generates a Stash plugin YAML configuration file.
 *
 * This plugin inspects the build's output bundle to populate the `ui.javascript` and `ui.css`
 * fields. It also reads `package.json` to populate the top-level `name`, `version`,
 * `description`, and `url` fields.
 *
 * @returns {Plugin} A Vite plugin object.
 */
export default function stashPluginConfigGenerator({ pkg }): Plugin {
  return {
    name: "vite-plugin-stash-config-generator",

    /**
     * @description This hook is called after the bundle is generated. It creates the YAML config file.
     * @param {object} options - The Rollup output options.
     * @param {OutputBundle} bundle - The generated bundle.
     */
    async generateBundle(options, bundle: OutputBundle) {
      const cssFiles: string[] = [];
      const jsFiles: string[] = [];
      const otherFiles: Map<string, string> = new Map();

      for (const fileName in bundle) {
        const file: OutputAsset | OutputChunk = bundle[fileName];
        if (file.type === "asset" && file.fileName.endsWith(".css")) {
          cssFiles.push(file.fileName);
        } else if (file.type === "chunk" && file.isEntry) {
          jsFiles.push(file.fileName);
        } else {
          otherFiles.set("/", file.fileName);
        }
      }
      const config: StashPluginConfig = {
        name: pkg.name || "Stash Plugin",
        description: pkg.description || "No description provided.",
        version: pkg.version || "0.0.0",
        url:
          pkg.homepage ||
          (pkg.repository && typeof pkg.repository === "object"
            ? pkg.repository.url
            : ""),
        ui: {
          javascript: jsFiles,
          css: cssFiles.length > 0 ? cssFiles : undefined,
          assets: otherFiles.size > 0 ? otherFiles : undefined,
        },
      };

      const yamlConfig = yaml.stringify(config);
      const outputFileName = `${pkg.name || "plugin"}.yml`;

      this.emitFile({
        type: "asset",
        fileName: outputFileName,
        source: yamlConfig,
      });
    },
  };
}
