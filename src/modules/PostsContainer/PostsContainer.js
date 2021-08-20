import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { SubHeadingText } from '../../commons/Text';
import Posts from '../Posts/Posts';

class FilterPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 'latest'
        }
    }

    setKey = (key) => {
        this.setState({
            key: key
        });
    }

    render() {
        const { key } = this.state;

        return (
            <div className="padding8">
                <SubHeadingText label="Posts" />

                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => this.setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="latest" title="Latest">
                        <Posts />
                    </Tab>
                    <Tab eventKey="week" title="Week">
                        <Posts />
                    </Tab>
                    <Tab eventKey="month" title="Month">
                        <Posts />
                    </Tab>
                    <Tab eventKey="year" title="Year">
                        <Posts />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default FilterPost;