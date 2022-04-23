import React from "react";
import Charts from "./Charts";
import Navbar from "../DeliveryPage/Navbar";
import Header from "../DeliveryPage/Header";
import Filters from "../DeliveryPage/Filters";

function StatisticsPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Filters />
      <Charts />
    </>
  );
}

export default StatisticsPage;
