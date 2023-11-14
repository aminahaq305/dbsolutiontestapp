import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Trains from "./pages/Trains";
import Passengers from "./pages/Passengers";
import Subscriptions from "./pages/Subscriptions";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <div className="links">
          <a href="/trains">Trains</a>
          <a href="/passengers">Passengers</a>
          <a href="/subscriptions">Subscriptions</a>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/passengers" element={<Passengers />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
