import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import Login from "./login";
import Timestable from "./timestable";
export default class BNavbar extends Component{
    render(){
        return(
            <Router>
                <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            React App
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem componentClass={Link} to="/timestable" href="/timestable">
                                Timestable
                            </NavItem>
                            <NavItem componentClass={Link} to="/login" href="/login">
                                Login
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/timestable" component={Timestable}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
                </div>
            </Router>
        )
    }
}