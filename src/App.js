import "./sass/style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";

// import { StyledNavbar } from "./components/navbar/StyledNavbar";
// import { StyledNavLink } from "./components/navbar/StyledNavbar";
// import { StyledButton } from "./components/navbar/StyledNavbar";
// import { StyledForm } from "./components/navbar/StyledNavbar";
// import { StyledFormControl } from "./components/navbar/StyledNavbar";

import Footer from "./components/footer/Footer";
//import FooterItem from "./components/footer/FooterItem";
import NavbarCustomized from "./components/navbar/NavbarCustomized";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <NavbarCustomized />
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
        </Router>
      </div>
      <Footer> </Footer>
    </>
  );
}

export default App;
