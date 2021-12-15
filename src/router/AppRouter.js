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
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRouter>
              <About />
            </PrivateRouter>
          }
        />
        <Route
          path="/details"
          element={
            <PrivateRouter>
              <Details />
            </PrivateRouter>
          }
        />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
