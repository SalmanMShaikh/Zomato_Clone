import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import DeliveryCarousel from "./DeliveryCarousel";
import ExploreSection from "./ExploreSection";
import { restaurants } from "../../data/restaurants.js";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Filters />
      <DeliveryCarousel />
      <ExploreSection
        data={restaurants}
        sectionName="Delivery Restaurants in Bangalore City"
      />
      <Footer />
    </>
  );
}

export default HomePage;
