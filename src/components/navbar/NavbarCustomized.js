import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { NavLink, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavbarCustom() {
  return (
    <Navbar expand="lg">
      <div className="nav-container">
        <Link exact to="/" className="brand-link">
          <Navbar.Brand className="brand">The YAY Company</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/News">News</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </Nav>
          <Form className="d-flex navbar-form">
            <FormControl
              type="search"
              placeholder="Search"
              className="navbar-form-input"
              aria-label="Search"
            />
            <Button className="navbar-button">Go</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarCustom;
