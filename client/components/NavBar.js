import React from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';

var NavBar = (props) => (
    <div className="nav-bar">
        <Nav bsStyle="pills" className="button-bar">
            <a href="/signup"><Button bsStyle="default" className="nav-button"> Sign Up </Button></a>
            <a href="/login"><Button bsStyle="default" className="nav-button"> Login </Button></a>
            <a href="/"><img className="logo-center" src='./logo.jpg'/></a>
            <a href={props.navLink}><Button bsStyle="default" className="nav-button float-right pad-right"> {props.navMessage} </Button></a>
            <a href="/about"><Button bsStyle="default" className="nav-button float-right"> About </Button></a>
        </Nav>
    </div>
);

export default NavBar;
