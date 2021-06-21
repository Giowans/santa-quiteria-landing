import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/Agave_Logo.png";
//Reveal Animations
import Flip from "react-reveal/Flip";

// React Bootstrap
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const CustomNavbar = ({ history, ...props }) => {
  const [activeLink, setActiveLink] = React.useState("Home");

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    setActiveLink(history.location.pathname);
  }, [history.location.pathname]);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="primary-back justify-content-around"
    >
      <Navbar.Brand
        className="ml-5"
        onClick={() => {
          history.push("/");
          setActiveLink("/");
        }}
      >
        <img
          className={"logo " + (activeLink === "/" ? " logo-active" : "")}
          style={{ cursor: "pointer" }}
          width={47}
          height={47}
          src={logo}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" style={{ flexGrow: 0 }}>
        <Flip right cascade>
          <Nav>
            <Nav.Link
              onClick={() => {
                setActiveLink("/personajes");
                history.push("/personajes");
              }}
              className={
                "linked mx-2" + (activeLink === "/personajes" ? " active" : "")
              }
            >
              Personajes
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setActiveLink("/cultura");
                history.push("/cultura");
              }}
              className={
                "linked mx-2" + (activeLink === "/cultura" ? " active" : "")
              }
            >
              Cultura
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setActiveLink("/zona-arqueológica");
                history.push("/zona-arqueológica");
              }}
              className={
                "linked mx-2" +
                (activeLink === "/zona-arqueológica" ? " active" : "")
              }
            >
              Zona Arqueológica
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setActiveLink("/proyecto");
                history.push("/proyecto");
              }}
              className={
                "linked mx-2" + (activeLink === "/proyecto" ? " active" : "")
              }
            >
              Proyecto
            </Nav.Link>
          </Nav>
        </Flip>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(CustomNavbar);
