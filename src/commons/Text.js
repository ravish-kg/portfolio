import React, { Component } from 'react';

export default class HeadingText extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { label } = this.props;

        return (
            <h4>{label}</h4>
        );
    }
}

export class SubHeadingText extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { label } = this.props;

        return (
            <h5>{label}</h5>
        );
    }
}

export class ContentText extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { label } = this.props;

        return (
            <h6>{label}</h6>
        );
    }
}
