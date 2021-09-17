import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import LogIn from './Components/Header/LogIn'
import Search from "./Components/Search";
import Header from "./Components/Header/Header";
import Profile from "./Profile";
import Donate from "./Components/donate/Donate";
import { withAuth0 } from "@auth0/auth0-react";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  // console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <Profile>
        <Header />
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/donate">
            {isAuthenticated && <Donate />}
          </Route>

        </Switch>
      </Profile>
    </BrowserRouter>
  );
}

export default App;
