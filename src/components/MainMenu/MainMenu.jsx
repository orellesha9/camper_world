import styles from './main-menu.module.css';
import { NavLink } from 'react-router-dom';
import helper from '../../helpers/helpers.module.css';
const MainMenu = () => {
    return (
        <ul className={`${helper.container} ${styles.menu} `}>
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
                <NavLink className={styles.link} to="/favorites">
                    Favorites
                </NavLink>
            </li>
        </ul>
    );
};

export default MainMenu;
