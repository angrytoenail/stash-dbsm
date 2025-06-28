import React from "react";
import FrontPage from "@/components/FrontPage.tsx";
import PluginNavLink from "@/components/MainNavBar.tsx";
import PluginHome from "@/components/PluginHome.tsx";
import "./style.css";

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
