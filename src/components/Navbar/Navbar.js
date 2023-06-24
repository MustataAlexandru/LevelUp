import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SmallProfile from '../Profile/SmallProfile'
import { useEffect } from 'react';
const Navbar = ({ profileData }) => {
    return (
        <>
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
                <SmallProfile user={profileData.user} isAdmin={profileData.isAdmin} />
            </nav>
        </>
    );
};

export default Navbar;
