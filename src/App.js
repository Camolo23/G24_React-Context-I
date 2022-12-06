import "./styles.css";
import MyContext from "./my-context";

// hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// components
import Navbar from "./components/Navbar";

// views
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";

  const [info, setInfo] = useState([]);
  const globalState = { info, setInfo }

  useEffect(() => {
    getFotos();
  }, []);

  const getFotos = async () => {
    const url = endpoint;
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data.photos);
  };

  return (
    <div className="App">
      <MyContext.Provider value={ globalState }>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
