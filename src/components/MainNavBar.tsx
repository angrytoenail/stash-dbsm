import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const { Icon } = PluginApi.components;

PluginApi.patch.before(
  "MainNavBar.UtilityItems",
  function (props: Record<string, any>) {
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
