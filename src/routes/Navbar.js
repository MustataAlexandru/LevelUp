import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiUserCheck } from "react-icons/fi";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Proffesors from './Proffesors';


const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await axios.get('/login', { headers: { 'Content-Type': 'application/json' } });
                if (isMounted) {
                    setUser(response.data.user);
                    setIsAdmin(response.data.admin);
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
        window.location.reload();
        window.location.href = "/";
    }
    return (
        <>
            {user === null ? (
                <Spinner />
            ) : (
                <nav className={styles.navbar}>
                    <Link to='/'>
                        <h3 className={styles.logo}>LevelUP</h3>
                    </Link>
                    <ul className={styles.nav_links}>
                        <li>
                            <Form className="d-flex">
                                <Form.Control
                                    style={{ width: '30rem' }}
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </li>
                    </ul>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to='/proffesors'>Teachers</Link>
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
                                    {isAdmin && (
                                        <span>Admin</span>
                                    )}
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
