import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./Components/search/Search";
import Header from "./Components/Header/Header";
import Profile from "./Profile";
import Donate from "./Components/donate/Donate";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/Homepage";
import FavBook from "./Components/FavBook/FavBook";
import About from "./Components/abotus/About";
import Footer from "./Components/footer/Footer";
function App() {
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
            <Donate />
          </Route>
          <Route exact path="/FavBook">
            <FavBook />
          </Route>
          <Route exact path="/aboutUs">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Profile>
    </BrowserRouter>
  );
}

export default App;
