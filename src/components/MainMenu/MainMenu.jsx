import styles from './main-menu.module.css';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container';
const MainMenu = () => {
    return (
        <Container>
            <nav>
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
                        <NavLink className={styles.link} to="/favorites">
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default MainMenu;
