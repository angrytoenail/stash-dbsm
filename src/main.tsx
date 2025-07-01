import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import FrontPage from "@/components/FrontPage.tsx";
import PluginNavLink from "@/components/MainNavBar.tsx";
import PluginHome from "@/components/PluginPage";
import NavBar from "@/components/NavBar.tsx";
import "./style.css";

if (import.meta.env.PROD) {
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
  ReactDOM.render(
    <ApolloProvider client={client}>
      <NavBar />
      <PluginHome />
    </ApolloProvider>,
    document.getElementById("plugin")!,
  );
}
