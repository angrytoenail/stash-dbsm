import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const { Icon } = PluginApi.components;
  return (
    <NavLink className="nav-utility" to="/dbsm">
      <Button className="minimal d-flex align-items-center h-100 btn btn-primary">
        <Icon icon={faDatabase} />
      </Button>
    </NavLink>
  );
};
