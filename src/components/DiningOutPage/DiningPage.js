import React from "react";
import Navbar from "../DeliveryPage/Navbar";
import Header from "../DeliveryPage/Header";
import DiningCarousel from "./DiningCarousel";
import Filters from "../DeliveryPage/Filters";
import ExploreSection from "./ExploreSection";
import { dining } from "../../data/dining.js";
import Footer from "../DeliveryPage/Footer.js";

function DiningPage() {
  return (
    <>
      <Navbar />
      <Header />
      <DiningCarousel />
      <Filters />
      <ExploreSection
        data={dining}
        sectionName="Dine-Out Restaurants in Bangalore City"
      />
      <Footer />
    </>
  );
}

export default DiningPage;
