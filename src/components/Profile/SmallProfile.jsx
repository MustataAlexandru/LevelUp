import { FiUserCheck } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
import { Button } from 'react-bootstrap';
import classes from './SmallProfile.module.css'

const SmallProfile = ({ user, isAdmin }) => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        window.location.reload();
        window.location.href = "/";
    }
    return (
        <>
            <div className={styles.user_details}>
                <div className={styles.dropdown} style={{ marginBottom: '10px' }}>
                    <Link style={{ fontSize: '1.5rem' }}
                        to="#"
                        className={styles.dropdown_toggle}
                        role="button"
                        onClick={() => { window.location.href = '/profile' }}
                        id="userDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <FiUserCheck />
                    </Link>
                    <ul className={styles.dropdown_menu} style={{ width: '14rem' }} aria-labelledby="userDropdown">

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
                                <Link to="./profile" style={{ textDecoration: 'none' }}>
                                    <span className={styles.dropdown_item} style={{ color: 'green' }}>
                                        Admin
                                    </span>
                                </Link>
                            )}
                        </li>
                        {isAdmin && (
                            <li>
                                <Button className={classes.btn} onClick={() => { navigate('/create') }} style={{ width: '100%' }}>Create course</Button>
                            </li>
                        )}
                        <li>
                            <Link
                                to="/"
                                onClick={logout}
                                className={`${styles.dropdown_item}  ${classes.logout}`}
                                style={{ color: 'red' }}
                            >
                                <p className='text-center'>Logout</p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default SmallProfile