import Link from "next/link";

import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className="navbar-container">
        <div className="navbar-links">
          <Link href="#section1">Home</Link>
          <Link href="#section1">About</Link>
          <Link href="#section1">Contact</Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
