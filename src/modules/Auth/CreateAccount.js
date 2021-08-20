import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadingText from '../../commons/Text';

class CreateAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            address: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        const form = event.target;

        console.log(this.state);
        this.props.history.replace('/');
    }

    render() {
        const { name, email, password, address } = this.state;

        return (
            <div className="alignToCenter cardBoxShadow">
                <HeadingText label="Welcome to Verify Code"></HeadingText>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control required onChange={this.handleChange} name="name" value={name} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required onChange={this.handleChange} name="email" value={email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={this.handleChange} name="password" value={password} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required onChange={this.handleChange} name="address" value={address} type="text" placeholder="Enter Address" />
                    </Form.Group>

                    <div className="displayFlex">
                        <Button variant="primary" type="submit">
                            Create Account
                        </Button>
                        <Button variant="light">
                            <Link to="/login" className="noLinkStyle">Already have an account?</Link>
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default CreateAccount;