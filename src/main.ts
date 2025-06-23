import "./style.css";
import sql from "@sql/example.sql?base64";

const PluginApi = window.PluginApi;
if (!PluginApi) {
  throw new Error("PluginApi not not found.");
}

document.querySelector<HTMLDivElement>("body")!.innerHTML = `
  <div>
    <h1>SQL Query!</h1>
    <pre><code>${sql}</code></pre>
  </div>
`;
