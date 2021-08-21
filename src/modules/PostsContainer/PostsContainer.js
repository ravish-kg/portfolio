import React, { Component } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { SubHeadingText } from '../../commons/Text';
import Posts from '../Posts/Posts';
import CustomModal from '../../commons/CustomModal';
import Editor from '../Editor/Editor';

class FilterPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 'latest',
            open: false
        }
    }

    setKey = (key) => {
        this.setState({
            key: key
        });
    }

    openEditor = () => {
        this.setState({
            open: true
        });
    }

    closeEditor = () => {
        this.setState({
            open: false
        })
    }

    render() {
        const { key, open } = this.state;

        return (
            <div className="padding8">
                <div className="displayFlex">
                    <SubHeadingText label="Posts" />
                    <Button variant="primary" onClick={this.openEditor}>
                        Write a post
                    </Button>
                </div>


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

                <CustomModal show={open} onHide={this.closeEditor} title="Write a post" container={<Editor editMode />} />
            </div>
        );
    }
}

export default FilterPost;