import { Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./components/Header";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./features/Auth/Login/LoginPage";
import RegisterPage from "./features/Auth/Signup/RegisterPage";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";
import { getProfile } from "./features/User/userSlice";
import { useEffect } from "react";
import ProductPage from "./features/Product/ProductPage";
import { getToken } from "./features/Auth/authSlice";
import ProductDetail from "./features/Product/components/ProductDetail";
import DashboardPage from "./features/User/DashboardPage";

toast.configure();

function App() {
  const isLogin = useSelector((state) => state.auth.token);
  const isAuthenticated = localStorage.getItem("token");

  const dispatch = useDispatch();
  if (!isLogin && isAuthenticated) {
    dispatch({
      type: getToken.type,
      payload: isAuthenticated,
    });
  }
  useEffect(() => {
    if (isAuthenticated) {
      dispatch({
        type: getProfile.type,
      });
    }
  });

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="p-4">
          <div className="container">
            <Switch>
              <Redirect exact from="/" to="/home" />
              <PrivateRoute
                exact
                path="/home"
                isAuthenticated={isAuthenticated}
              >
                <ProductPage isAuthenticated={isAuthenticated} />
              </PrivateRoute>
              <PrivateRoute path="/dashboard" isAuthenticated={isAuthenticated}>
                <DashboardPage isAuthenticated={isAuthenticated} />
              </PrivateRoute>
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                path="/product/:slug"
              >
                <ProductDetail />
              </PrivateRoute>
              <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
                <LoginPage />
              </PublicRoute>
              <PublicRoute
                exact
                path="/register"
                isAuthenticated={isAuthenticated}
              >
                <RegisterPage />
              </PublicRoute>
              <PublicRoute path="/404" component={Page404} />
              <PublicRoute path="*" component={Page404} />
            </Switch>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
