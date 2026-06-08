import { NavLink } from "react-router-dom";
import { Navbar as NavbarComponent, Nav, Container } from "react-bootstrap";
import mainlogo from "../assets/decomax-logo1.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <NavbarComponent expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <NavbarComponent.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img src={mainlogo} alt="Decomax" className="main-logo" />
        </NavbarComponent.Brand>

        <NavbarComponent.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComponent.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </NavbarComponent.Collapse>
      </Container>
    </NavbarComponent>
  );
}
