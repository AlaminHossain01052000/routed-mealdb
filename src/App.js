
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Restaurent from './components/Restaurent/Restaurent';
import Home from './components/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NotFound from './components/NotFound/NotFound';
import Meals from './components/Meals/Meals';
import Categorie from './components/categorie/Categorie';
import Countries from './components/Countries/Countries';



function App() {

  const element = <FontAwesomeIcon icon={faBars} />
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar expand="lg">
          <Container fluid>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/home" className="btn btn-dark">Home</Link>
                <Link to="/restaurent" className="btn btn-dark" style={{ marginLeft: "10px" }}>Restaurent</Link>
                <NavDropdown className="btn btn-dark" title="Categories" id="navbarScrollingDropdown">

                  <NavDropdown.Item href="#action4"><Link to="/categorie"><button className="categorie-button">By  Food Type</button></Link></NavDropdown.Item>

                  <NavDropdown.Item href="#action4"><Link to="/countries"><button className="categorie-button">By  Country</button></Link></NavDropdown.Item>


                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/restaurent">
            <Restaurent></Restaurent>
          </Route>
          <Route path="/meals/:mealsId">
            <Meals ></Meals>
          </Route>
          <Route path="/categorie">
            <Categorie></Categorie>
          </Route>
          <Route path="/countries">
            <Countries></Countries>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
