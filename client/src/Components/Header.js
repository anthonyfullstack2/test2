import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const dcuser = useSelector((state) => state.users.currentUser);
  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <img src={logo} />
          </NavItem>

          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>

          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>

          <NavItem>
            <NavLink href="#">Logout</NavLink>
          </NavItem>

          <NavItem>Hi {dcuser}!</NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
