import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import styles from './NavDropdown.module.css'
function DropdownImplExample() {


    ///// TODO:query la toate categoriile si map in dropdown item cu link catre category_id /////

    return (
        <Dropdown className={styles.nav_links} as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Categories</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownImplExample;