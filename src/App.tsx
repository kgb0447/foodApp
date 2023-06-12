import { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";
import Footer from "./components/footer/Footer";
import sanityClient from "./food-app-cms/sanity";

function App() {
  const [isShow, setIsShow] = useState(false);
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
      const res = await sanityClient.fetch(
        `*[_type == "dish"] {
          ...,
          }`
      );
      console.log(res, "@@@@@@");
    })();
  }, []);
  console.log("first");
  // const PATHS = ["/", "/signin", "/login", "/entry/signin", "entry/signup"];

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
