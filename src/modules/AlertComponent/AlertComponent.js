import React from 'react';
import { Component } from 'react';
import { Alert } from 'react-bootstrap';

import data from '../../data/alert.json';

class AlertComponent extends Component {

    render() {

        return (
            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    {data.response}
                </p>
                <hr />
                <p className="mb-0">
                    Currently working on a new website, check out my old <Alert.Link href="https://codetrays.blogspot.in">blog</Alert.Link>
                </p>
            </Alert>
        );
    }
}

export default AlertComponent;