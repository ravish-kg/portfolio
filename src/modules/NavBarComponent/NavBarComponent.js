import React, { Component } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavBarContentText } from '../../commons/Text';
import { logout } from '../Utility';

class NavBarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getUserDetails = () => {
        if (localStorage.getItem('email')) {
            return true;
        }

        return false;
    }

    getUserEmail = () => {
        return localStorage.getItem('email');
    }

    render() {

        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Verify Code</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {!this.getUserDetails() ? (
                                <Nav className="me-auto-left">
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link eventKey={2} href="/createAccount">
                                        Create Account
                                    </Nav.Link>
                                </Nav>) : (
                                <Nav className="me-auto-left">
                                    {/* <NavBarContentText label={`Welcome ${this.getUserEmail()}`} />
                                    <Button variant="link" className="noLinkStyle" onClick={logout}>
                                        Logout
                                    </Button> */}
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title={`Welcome ${this.getUserEmail()}`}
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            )}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavBarComponent;