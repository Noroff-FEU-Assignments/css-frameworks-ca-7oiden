import "./sass/style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import News from "./components/pages/News";
import Footer from "./components/footer/Footer";
import NavbarCustomized from "./components/navbar/NavbarCustomized";

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <header>
            <NavbarCustomized />
          </header>
          <main>
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
          </main>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
