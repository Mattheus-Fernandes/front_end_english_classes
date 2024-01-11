import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
   <nav className="d-flex justify-content-between align-items-center bg-dark p-2 mb-3">
      <NavLink to="/" className="text-decoration-none text-white">
        <span className="fs-2">Class scheduling</span>
      </NavLink>
   </nav>     
  )
}

export default Header