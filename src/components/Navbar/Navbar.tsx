import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searchbar from '../Searchbar/Searchbar';
// import { Button } from 'react-bootstrap';

const NavbarComponent: React.FC = () => {
  // const [showSearch, setShowSearch] = React.useState(false);

  // functional toggleSearch - to avoid bugs with clicking
  // const toggleSearch = () => {
  //   setShowSearch(currentShowSearch => {
  //     if (currentShowSearch) return false;
  //     else return true;
  //   })
  // }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* permanent search bar in nav. */}
              {/* TODO: Add functionality */}
              <Searchbar />

              {/* if you don't want permanent search bar, implement toggle for search bar. */}
              {/* temporary button to toggle search bar */}
              {/* <Button className="primary" type="button" onClick={toggleSearch}>Search</Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* This will be used to place search bar underneath Nav
          Only use this if you plan to toggle the search bar
       */}
      {/* {showSearch && (
        <Searchbar />
      )} */}
    </>
  );
}

export default NavbarComponent;
