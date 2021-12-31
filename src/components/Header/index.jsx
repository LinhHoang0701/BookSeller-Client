import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink as ActiveLink, useHistory } from "react-router-dom";
import { logout } from "../../features/Auth/authSlice";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.user);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch({
      type: logout.type,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link
          className="navbar-brand col-12 order-1 col-sm-12 order-sm-1 col-md-3 order-md-1 col-lg-3 order-lg-1"
          to="/"
        >
          Book Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="pt-2 pt-lg-0 col-12 order-4 col-sm-12 order-sm-4 col-md-12 order-md-4 col-lg-5 order-lg-2">
          {token ? (
            <ReactSearchAutocomplete
              items={products}
              maxResults={15}
              onSelect={(item) => history.push(`/product/${item.slug}`)}
              placeholder="Enter the name or description of product"
              fuseOptions={{ keys: ["name", "description"] }}
              styling={{ zIndex: 1 }}
            />
          ) : (
            ""
          )}
        </div>
        <div
          className="col-12 order-2 col-sm-12 order-sm-2 col-md-9 order-md-1 col-lg-4 order-lg-3 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto justify-content-end">
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            {token ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome {user.lastName}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>

                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Log out!
                  </button>
                </div>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/register">
                    Sign up
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
