import { SNavbar } from "./StyledComponents"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <SNavbar>
      <div className="logo">
        <NavLink to="/">CHECKADIGS</NavLink>
      </div>
      <div className="nav__links">
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </SNavbar>
  )
}

export default Navbar