import "./App.css";
import Profile from "./Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./Components/Search";
import Header from "./Components/Header/Header";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/Homepage";
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
          
        </Switch>
      </Profile>
    </BrowserRouter>
  );
}

export default withAuth0(App);
