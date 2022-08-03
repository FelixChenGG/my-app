import React, { Component } from 'react'
import { Navbar,  Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddUser from '../AddUser/AddUser';
import Home from '../HomePage/Home';


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">CURD Project</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '200px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                                {/* <Nav.Link as={Link} to="/add">ADD</Nav.Link> */}
                            </Nav>

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
                    </Switch>
                </div>
            </Router>
        )
    }
}