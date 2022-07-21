import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <h3>UVideo</h3>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li className={classes.item}>
              <Link to="/auth"> Login </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className={classes.item}>
              <Link to="/my-page"> My Page </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
