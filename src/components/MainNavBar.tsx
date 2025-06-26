import api, { React, Bootstrap } from "@/api.ts";

api.patch.before(
  "MainNavBar.UtilityItems",
  function (props: Record<string, any>) {
    const { Icon } = api.components;
    const { Button } = Bootstrap;
    const { faDatabase } = api.libraries.FontAwesomeSolid;
    const { NavLink } = api.libraries.ReactRouterDOM;
    return [
      {
        children: (
          <>
            {props.children}
            <NavLink className="nav-utility" to="/plugin/dbsm">
              <Button className="minimal d-flex align-items-center h-100 btn btn-primary">
                <Icon icon={faDatabase} />
              </Button>
            </NavLink>
          </>
        ),
      },
    ];
  },
);
