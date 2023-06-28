import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SmallProfile from '../Profile/SmallProfile';
import logo from './logo.jpg'


const Navbar = ({ profileData }) => {
    return (
        <>
            <nav className={styles.navbar}>
                <Link to='/'>
                    <img src={logo} alt ='logo' style={{width: '6rem', borderRadius: '50%', marginLeft: '2rem'}}/>
                </Link>
                <ul className={styles.nav_links}>
                    <li>
                        <Form className="d-flex">
                            <Form.Control
                                style={{ width: '40rem' ,marginLeft: '18rem' ,marginTop:'1.4rem'}}
                                type="search"
                                placeholder="Search for courses"
                                className="me-2 searchBar"
                                aria-label="Search"
                            />
                        </Form>
                    </li>
                </ul>
                <Link className={styles.nav_links}
                      style={{
                          textDecoration: 'none',
                          border:'1px solid transparent',
                          borderRadius: '10px',
                          width: '10rem',
                          backgroundColor: 'white',
                          color: 'black',
                          padding: '4px'
                      }}
                      to="/about">
                    Who we are
                </Link>
                <SmallProfile style={{fontSize: '100px'}} user={profileData.user} isAdmin={profileData.isAdmin} />
            </nav>
        </>
    );
};

export default Navbar;
