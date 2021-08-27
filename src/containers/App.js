import React, { Component } from "react";
import "babel-polyfill";
import GlobalStyle from "../globalStyles.js";
import { auth, handleUserProfile } from "../firebase/utils.js";
import ScrollToTop from "../components/ScrollToTop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

//Components
import AdminToolbar from "../components/AdminTool.jsx";

//HOC
import WithAuth from "../hoc/withAuth.js";

//Layouts
import MainLayout from "../layouts/MainLayout.js";
import HomepageLayout from "../layouts/HomepageLayout";

//Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register";
import Admin from "../pages/Admin/Admin.js";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }
  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }
  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout currentUser={currentUser}>
                <Home />{" "}
              </HomepageLayout>
            )}
          />
          <Route
            path="/register"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Register />
                </MainLayout>
              )
            }
          />
          <Route
            path="/login"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )
            }
          />
          <Route
            exact
            path="/admin"
            render={() => (
              <HomepageLayout currentUser={currentUser}>
                <Admin />
              </HomepageLayout>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
