import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Main from "./components/recipe/Main";
import Details from "./components/details/Details";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/login" component={Login} exact />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
