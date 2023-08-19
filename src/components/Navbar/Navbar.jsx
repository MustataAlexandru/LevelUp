import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SmallProfile from '../Profile/SmallProfile';
import logo from './logo.jpg';
import NavDropdown from "../NavDropdown/NavDropdown";

const Navbar = ({ profileData }) => {
    return (
        <>
            <nav className={styles.navbar}>
                <Link to='/'>
                    <img src={logo} alt='logo' style={{ width: '6rem', borderRadius: '50%', marginLeft: '2rem' }} />
                </Link>
                <ul>
                    <li>
                        <Form className="d-flex">
                            <Form.Control
                                style={{ width: '40rem', marginLeft: '18rem', marginTop: '1.4rem', }}
                                type="search"
                                placeholder="Search for courses"
                                className="me-2 searchBar"
                                aria-label="Search"
                            />
                        </Form>
                    </li>
                </ul>
                <Link className={styles.nav_links}
                    to="/about">
                    Meet The Team
                </Link>
                {profileData !== false && profileData.user !== null ? (
                    <SmallProfile style={{ fontSize: '100px' }} user={profileData.user} isAdmin={profileData.isAdmin} />
                ) : (
                    <Link className={styles.nav_links} to="/auth">
                        No account ?
                    </Link>
                )}
            </nav>
        </>
    );
};

export default Navbar;
