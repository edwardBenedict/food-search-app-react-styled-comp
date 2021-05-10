import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../components/login/Login";
import Main from "../components/recipe/Main";
import Details from "../components/details/Details";
import About from "../components/about/About";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/login" component={Login} exact />
        <Route path="/details" component={Details} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
