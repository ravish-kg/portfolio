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
            category: 'Algorithms'
        }
    }

    onChangeOfCategory = (category) => (event) => {
        this.setState({
            category
        })
    }

    render() {
        const { category } = this.state; 

        return (
            <>
                <Container>
                    <Row>
                        {/* <Col><SearchContainer /></Col> */}
                        <AlertComponent />
                        <Col><CategoryContainer onChange={this.onChangeOfCategory} /></Col>
                        <Col xs={12} md={8} lg={9}>
                            <SearchContainer />
                            <PostsContainer category={category} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MainContainer;