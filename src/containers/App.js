import React from "react";
import GlobalStyle from "../globalStyles.js";
import ScrollToTop from "../components/ScrollToTop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Layouts
import MainLayout from "../layouts/MainLayout.js";
//Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      {/* <Navbar /> */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Home />{" "}
            </MainLayout>
          )}
        />
        <Route
          path="/register"
          render={() => (
            <MainLayout>
              <Register />
            </MainLayout>
          )}
        />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
