import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authStore";
import classes from "./Header.module.css";

const Header = () => {
  const isAuthed = useSelector((state) => state.authReducer.authed);
  const DispatchLogout = useDispatch();

  const logoutHandler = () => {
    DispatchLogout(logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthed && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
