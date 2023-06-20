import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FiUserCheck} from "react-icons/fi";


const Navbar = () => {

    const logoutHandler = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <nav className={styles.navbar}>
            <h3 className={styles.logo}>Logo</h3>
            <ul className={styles.nav_links}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/tutorials">Tutorials</Link>
                </li>
            </ul>
            <div className={styles.user_details}>
                <div className={styles.dropdown}>
                    <Link
                        to="#"
                        className={styles.dropdown_toggle}
                        role="button"
                        id="userDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <FiUserCheck />
                    </Link>
                    <ul className={styles.dropdown_menu} aria-labelledby="userDropdown">
                        <li>
                            <Link className={styles.dropdown_item}>
                                Name: {}
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdown_item}>
                                Email: {}
                            </Link>
                        </li>
                        <li>
                            <hr />
                        </li>
                        <li>
                            <Link to="/" onClick={logoutHandler} className={styles.dropdown_item}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
