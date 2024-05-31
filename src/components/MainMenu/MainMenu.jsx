import styles from './main-menu.module.css';
import { NavLink } from 'react-router-dom';
const MainMenu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink className={styles.link} to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/catalog">
                    Catalog
                </NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/favorite">
                    Favorite
                </NavLink>
            </li>
            {/* <li>
        <NavLink className={styles.link} to="/movies/:movieId">
          MovieDetails
        </NavLink>
      </li> */}
        </ul>
    );
};

export default MainMenu;
