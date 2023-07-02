import { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";
import Footer from "./components/footer/Footer";
import { client } from "./client";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 2000);

    return () => {
      setIsShow(false);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const res = await client.fetch(
        `*[_type == "restaurant"] {
          ...,
          }`
      );
      setDishes(res);
    })();
  }, []);
  // const PATHS = ["/", "/signin", "/login", "/entry/signin", "entry/signup"];
  console.log(dishes, "dishes");
  if (!isShow) {
    return (
      <img
        src={require("./assets/img/splash@2x.png")}
        className={"splash"}
        alt=""
      />
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
