import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Details from "../components/details/Details";
import About from "../components/about/About";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {
  const isAuth = localStorage.getItem("isAuth");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            isAuth ? (
              <PrivateRouter>
                <Home />
              </PrivateRouter>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/about"
          exact
          element={
            isAuth ? (
              <PrivateRouter>
                <About />
              </PrivateRouter>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/details"
          exact
          element={
            isAuth ? (
              <PrivateRouter>
                <Details />
              </PrivateRouter>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
