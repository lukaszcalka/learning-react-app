import React from "react";
import { Navbar,Nav, Container } from "react-bootstrap";
import WeatherPage from './WeatherPage/WeatherPage';
import TranslatePage from "./TranslatePage/TranslatePage";
import BoredPage from "./BoredPage/BoredPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function BasicExample() {
  return (
    <Router>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
      <Container>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/weather">Weather</Nav.Link>
            <Nav.Link as={Link} to="/translate">Translate</Nav.Link>
            <Nav.Link as={Link} to="/bored">Bored?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/weather" element={<WeatherPage />}/>
          <Route exact path="/translate" element={<TranslatePage />}/>
          <Route exact path="/bored" element={<BoredPage />}/>
        </Routes>
      </Container>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h2>Welcome to my React testing page</h2>
      <br/>
      <div >
      Hi, this page is a simple web app created in React.js 
      for learning purposes and it contains three sub pages 
      working with external REST APIs. 
      Those subpages can be accesed via the navigation bar at the top. 
      </div>
    </div>
  );
}


