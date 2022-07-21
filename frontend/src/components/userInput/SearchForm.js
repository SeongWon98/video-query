import classes from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";

function SearchForm() {
  return (
    <div className={classes.search}>
      <FaSearch className={classes.icon} />
      <div className={classes.text}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={classes.actions}>
        <button> Search </button>
      </div>
    </div>
  );
}

export default SearchForm;
