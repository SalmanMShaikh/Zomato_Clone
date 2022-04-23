import React from "react";
import Navbar from "../DeliveryPage/Navbar";
import Header from "../DeliveryPage/Header";
import NightLifeCarousel from "./NightLifeCarousel";
import Filters from "../DeliveryPage/Filters";
import ExploreSection from "../DiningOutPage/ExploreSection";
import { nightLife } from "../../data/nightLife.js";
import Footer from "../DeliveryPage/Footer.js";

function DiningPage() {
  return (
    <>
      <Navbar />
      <Header />
      <NightLifeCarousel />
      <Filters />
      <ExploreSection
        data={nightLife}
        sectionName="NightLife Restaurants in Bengaluru City"
      />
      <Footer />
    </>
  );
}

export default DiningPage;
