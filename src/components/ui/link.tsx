import * as Headless from "@headlessui/react";
import React, { forwardRef } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";

export const Link = forwardRef(function Link(
  props: NavLinkProps & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <Headless.DataInteractive>
      <NavLink {...props} ref={ref} />
    </Headless.DataInteractive>
  );
});
