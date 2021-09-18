import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./Components/search/Search";
import Header from "./Components/Header/Header";
import Profile from "./Profile";
import Donate from "./Components/donate/Donate";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/Homepage";
import FavBook from "./Components/FavBook/FavBook";
function App() {
  const { isAuthenticated } = useAuth0();
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
