import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiUserCheck } from "react-icons/fi";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await axios.get('/login', { headers: { 'Content-Type': 'application/json' } });

                if (isMounted) {
                    setUser(response.data);
                }
            } catch (error) {
                // Handle error here
                console.error('Error fetching user:', error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    const logoutHandler = () => {
        localStorage.clear();
        window.location.href('/');
    }

    return (
        <>
            {user === null ? (
                <Spinner />
            ) : (
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
                                    <span className={styles.dropdown_item}>
                                        Name: {user.fullname}
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.dropdown_item}>
                                        Email: {user.email}
                                    </span>
                                </li>
                                <li>
                                    <hr />
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        onClick={logoutHandler}
                                        className={styles.dropdown_item}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
