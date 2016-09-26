import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap/lib';

class Header extends React.Component {
  render() {
    const navbarInstance = (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Online Pic Browser</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="about">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    return navbarInstance;
  }
}

export default Header;