type StashPluginConfig = {
  name: string;
  description: string;
  version: string;
  url: string;
  errLog?: "none" | "trace" | "debug" | "info" | "warning" | "error" = "error";
  interface?: "js" | "raw" | "rpc";
  exec?: string[];
  ui?: {
    css?: string[];
    javascript?: string[];
    requires?: string[];
    assets?: Record<string, string>;
    csp?: {
      "script-src"?: string[];
      "style-src"?: string[];
      "connect-src"?: string[];
    };
  };
  settings?: Record<string, Setting>;
  tasks?: Task[];
  hooks?: Hook[];
};

type Setting = {
  displayName: string;
  description?: string;
  type: "BOOLEAN" | "STRING" | "NUMBER";
};
type Task = {
  name: string;
  description?: string;
  defaultArgs: object;
};
type Hook = {
  name: string;
  triggeredBy: string[];
  defaultArgs: Record<string, string>;
};
