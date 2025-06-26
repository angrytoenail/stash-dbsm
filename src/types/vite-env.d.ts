/// <reference types="vite/client" />

declare module "*?base64" {
  const content: string;
  export default content;
}

declare global {
  interface Window {
    PluginApi: IPluginApi;
  }
}
