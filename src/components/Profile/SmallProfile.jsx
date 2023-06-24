import { FiUserCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
import { Spinner } from 'react-bootstrap';

const SmallProfile = ({ user, isAdmin }) => {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
        window.location.href = "/";
    }
    return (
        <>
            <div className={styles.user_details}>
                <div className={styles.dropdown}>
                    <Link
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
                                <span className={styles.dropdown_item} style={{ color: 'green' }}>
                                    Admin
                                </span>
                            )}
                        </li>
                        <li>
                            <hr />
                        </li>
                        <li>
                            <Link
                                to="/"
                                onClick={logout}
                                className={styles.dropdown_item}
                            >
                                Logout
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default SmallProfile