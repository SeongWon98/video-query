import { FaSlidersH } from "react-icons/fa";
import classes from "./SliderBtn.module.css";

function SliderBtn() {
  return (
    <button className={classes.slider}>
      <FaSlidersH />
    </button>
  );
}

export default SliderBtn;
