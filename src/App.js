import "./sass/style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CustomContainer from "./components/layout/CustomContainer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";
import Globalstyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";

import { StyledNavbar } from "./components/navbar/StyledNavbar";
import { StyledNavLink } from "./components/navbar/StyledNavbar";
import { StyledButton } from "./components/navbar/StyledNavbar";
import { StyledFormControl } from "./components/navbar/StyledNavbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/footer/Footer";
import FooterItem from "./components/footer/FooterItem";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <div className="wrapper">
        <Router>
          <div>
            <StyledNavbar className="navbar" variant="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#home" className="brand">
                  The YAY Company
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <StyledNavLink exact to="/">
                      Home
                    </StyledNavLink>
                    <StyledNavLink to="/News">News</StyledNavLink>
                    <StyledNavLink to="/Contact">Contact</StyledNavLink>
                  </Nav>
                  <Form className="d-flex">
                    <StyledFormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      aria-label="Search"
                    />
                    <StyledButton>Go</StyledButton>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </StyledNavbar>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <CustomContainer></CustomContainer>
      </div>
      <Footer>
        <CustomContainer>
          <FooterItem>Icons</FooterItem>
          <FooterItem>hello@yay.com</FooterItem>
          <FooterItem>Copyright 2020</FooterItem>
        </CustomContainer>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
