import "../css/App.css";
import HomePage from "./DeliveryPage/HomePage.js";
import DiningPage from "./DiningOutPage/DiningPage.js";
import NightLifePage from "./NightLifePage/NightLifePage.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatisticsPage from "./Statistics/StatisticsPage";
import SearchPage from "./SearchPage/SearchPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dining" element={<DiningPage />} />
        <Route exact path="/nightLife" element={<NightLifePage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/stats" element={<StatisticsPage />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
