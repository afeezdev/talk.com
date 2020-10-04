import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";

class Header extends React.Component {
  constructor() {
    super();
  }
  loginClick(evt) {
    // show login form
    let login = document.getElementById("login");
    login.style.display = "block";
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Talk.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/features" onClick={this.loginClick}>
              LogIn
            </Nav.Link>
            <Nav.Link href="/pricing">
              Status
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
