import React from "react";
import { useSelector } from "react-redux";
import Admin from "../../components/Dashboard/Admin";
import dashboardLinks from "../../components/Dashboard/links.json";
import Member from "../../components/Dashboard/Member";

const DashboardPage = () => {
  const { user, isMenuOpen, toggleDashboardMenu } = useSelector(
    (state) => state.user
  );

  return (
    <>
      {user.role === "ROLE_ADMIN" ? (
        <Admin
          isMenuOpen={isMenuOpen}
          links={dashboardLinks["ROLE_ADMIN"]}
          toggleMenu={toggleDashboardMenu}
        />
      ) : (
        <Member
          isMenuOpen={isMenuOpen}
          links={dashboardLinks["ROLE_MEMBER"]}
          toggleMenu={toggleDashboardMenu}
        />
      )}
    </>
  );
};

export default DashboardPage;
