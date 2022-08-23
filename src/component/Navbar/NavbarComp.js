import React, { Component } from 'react'
import { Navbar,  Nav , Container,Form,Button} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddUser from '../AddUser/AddUser';
import Home from '../HomePage/Home';
import Logout from '../Logout/Logout';
import UpdateUser from '../UpdateUser/UpdateUser';
// icon use
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };

// library.add(faBars);

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div  >
                    <Navbar collapseOnSelect bg="dark" variant={"dark"} expand="lg">
                    
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav  className="me-auto">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                                <Nav.Link as={Link} to="/add">ADD</Nav.Link>
                                <Nav.Link as={Link} to="/logout">LOGOUT</Nav.Link>
                            </Nav>

                            <Nav>
                                <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                                <Nav.Link as={Link} to="/add">ADD</Nav.Link>
                                <Nav.Link as={Link} to="/logout">LOGOUT</Nav.Link>
                                
                            </Nav>
                            <Form className="d-flex">
                                            <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                    <Route path="/home">
                        <Home/>
                        </Route>
                    <Route path="/add">
                        <AddUser/>
                        </Route>
                    <Route path="/update">
                        <UpdateUser/>
                        </Route>
                    <Route path="/logout">
                        <Logout/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}