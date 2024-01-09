import { NavLink } from 'react-router-dom';
import styles from "./Header.module.scss"

const Header = () => {
  return (
   <nav className="d-flex justify-content-between align-items-center bg-dark p-2 mb-3">
      <NavLink to="/" className="text-decoration-none text-white">
        <span className="fs-2">Class scheduling</span>
      </NavLink>
      <ul className={styles.ul}>
          <li className={styles.links}>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/search/class">
              Search class
            </NavLink>
          </li>
          <li>
            <NavLink to="/edit/class">
              Change
            </NavLink>
          </li>
          <li>
            <NavLink to="/register/class">
              Register
            </NavLink>
          </li>
          
      </ul>
   </nav>     
  )
}

export default Header