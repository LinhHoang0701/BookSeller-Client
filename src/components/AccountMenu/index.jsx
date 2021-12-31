/**
 *
 * AccountMenu
 *
 */
import { NavLink } from "react-router-dom";
import { Collapse, Navbar } from "reactstrap";

import Button from "../Common/Button";

const AccountMenu = (props) => {
  const { isMenuOpen, links, toggleMenu } = props;

  return (
    <div className="panel-sidebar">
      <Button
        text="Dashboard Menu"
        className={`${isMenuOpen ? "menu-panel" : "menu-panel collapse"}`}
        ariaExpanded={isMenuOpen ? "true" : "false"}
        onClick={toggleMenu}
      />
      <h3 className="panel-title">Account</h3>
      <Navbar className="dashboard-nav" color="light" light expand="md">
        <Collapse isOpen={isMenuOpen} navbar>
          <ul className="panel-links">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={"/dashboard" + link.to}
                  activeClassName="active-link"
                  exact
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AccountMenu;
