import React from "react";
import styles from './Navbar.module.css'
import { Link, Router } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className={styles.navbar}>
            <h3 className={styles.logo}>Logo</h3>
            <ul className={styles.nav_links}>

                <li>
                    <Link to='/'><li>Home</li></Link>
                </li>
                <li>
                    <Link to='/about'><li>About</li></Link>
                </li>
                <li>
                    <Link to='/skills'><li>Skills</li></Link>
                </li>
                <li>
                    <Link to='/tutorials'><li>Tutorials</li></Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;