import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import FrontPage from "@/components/FrontPage.tsx";
import PluginNavLink from "@/components/MainNavBar.tsx";
import PluginHome from "@/components/PluginHome.tsx";
import "./style.css";

if (import.meta.env.PROD) {
  PluginApi.React.useId = () => crypto.randomUUID();
  PluginApi.register.route("/dbsm", PluginHome);
  PluginApi.patch.instead("FrontPage", FrontPage);
  PluginApi.patch.before("MainNavBar.UtilityItems", (props) => [
    {
      children: (
        <>
          {props.children}
          <PluginNavLink />
        </>
      ),
    },
  ]);
} else {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_URI,
    cache: new InMemoryCache(),
  });
  const root = createRoot(document.getElementById("root")!);
  root.render(
    <ApolloProvider client={client}>
      <PluginHome />
    </ApolloProvider>,
  );
}
