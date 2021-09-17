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


import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/Homepage";
import FavBook from "./Components/FavBook/FavBook";
function App() {
  const { isAuthenticated } = useAuth0();
  // console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <Profile>
        <Header />
        <Switch>
        <Route exact path="/">
          <Homepage />
            </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/donate">
            {isAuthenticated && <Donate />}
          </Route>


          <Route exact path="/FavBook">
            <FavBook />
          </Route>

        </Switch>
      </Profile>
    </BrowserRouter>
  );
}

export default App;
