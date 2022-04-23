import React from "react";
import Navbar from "../DeliveryPage/Navbar";
import Header from "../DeliveryPage/Header";
import Footer from "../DeliveryPage/Footer";
import Filters from "../DeliveryPage/Filters";
import DeliveryCarousel from "../DeliveryPage/DeliveryCarousel";
import SearchSection from "./SearchSection";
import { restaurants } from "../../data/restaurants.js";

function SearchPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Filters />

      <SearchSection
        data={restaurants}
        sectionName="Search Delivery Restaurants in Bangalore City "
      />
      <Footer />
    </>
  );
}

export default SearchPage;
