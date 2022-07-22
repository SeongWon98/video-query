import FilterForm from "../components/userInput/FilterForm";
import SearchForm from "../components/userInput/SearchForm";
// import SliderBtn from "../components/userInput/SliderBtn";
import { FaSlidersH } from "react-icons/fa";
import classes from "./MainPage.module.css";

import { useState } from "react";

function MainPage(props) {
  const [btnIsClick, setBtnIsClick] = useState(false);

  function btnHandler() {
    setBtnIsClick((prevState) => !prevState);
  }

  return (
    <section>
      <SearchForm />
      <button onClick={btnHandler} className={classes.slider}>
        <FaSlidersH />
      </button>
      {btnIsClick && <FilterForm />}
    </section>
  );
}

export default MainPage;
