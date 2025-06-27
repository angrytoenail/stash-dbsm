/// <reference types="vite/client" />

declare module "*.sql" {
  const content: string;
  export default content;
}

declare global {
  interface Window {
    PluginApi: typeof PluginApi;
  }
}
