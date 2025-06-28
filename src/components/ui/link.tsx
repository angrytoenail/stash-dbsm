import * as Headless from "@headlessui/react";
import React, { forwardRef } from "react";
import { NavLink, type LinkProps } from "react-router-dom";

export const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <Headless.DataInteractive>
      <NavLink {...props} ref={ref} />
    </Headless.DataInteractive>
  );
});
