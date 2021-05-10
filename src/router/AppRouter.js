import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../components/login/Login";
import Main from "../components/recipe/Main";
import Details from "../components/details/Details";
import About from "../components/about/About";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);

  const AuthContainer = () => (
    <div>
      <Navbar />
      <PrivateRouter isAuth={isAuth} exact path="/" component={Main} />
      <PrivateRouter isAuth={isAuth} path="/details" component={Details} />
      <PrivateRouter isAuth={isAuth} path="/about" component={About} />
    </div>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} exact setIsAuth={setIsAuth} />
        <Route component={AuthContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
