import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AlertComponent from '../AlertComponent/AlertComponent';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import PostsContainer from '../PostsContainer/PostsContainer';

// Custom component import -- STARTS
import SearchContainer from '../SearchContainer/SearchContainer';
// Custom component import -- ENDS

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <>
                <Container>
                    <Row>
                        {/* <Col><SearchContainer /></Col> */}
                        <AlertComponent />
                        <Col><CategoryContainer /></Col>
                        <Col xs={12} md={8} lg={9}>
                            <SearchContainer />
                            <PostsContainer />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MainContainer;