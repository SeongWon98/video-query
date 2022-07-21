import FilterForm from "../components/userInput/FilterForm";
import SearchForm from "../components/userInput/SearchForm";
import SliderBtn from "../components/userInput/SliderBtn";
import { useState } from "react";

function MainPage(props) {
  return (
    <section>
      <SearchForm />
      <SliderBtn />
      <FilterForm />
    </section>
  );
}

export default MainPage;
