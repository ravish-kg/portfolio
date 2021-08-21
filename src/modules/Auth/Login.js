import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadingText from '../../commons/Text';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        // const form = event.target;

        console.log(this.state);
        localStorage.setItem('email', this.state.email);
        this.props.history.replace('/');
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="alignToCenter cardBoxShadow">
                <HeadingText label="Welcome to Verify Code"></HeadingText>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required onChange={this.handleChange} name="email" value={email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={this.handleChange} name="password" value={password} type="password" placeholder="Password" />
                    </Form.Group>

                    <Link to="/" className="noLinkStyle">Continue without signIn?</Link>
                    <div className="displayFlex">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Button variant="light">
                            <Link to="/createAccount" className="noLinkStyle">Create Account</Link>
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Login;