import React, { Component } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <>
                <InputGroup className="mb-3 padding8">
                    <FormControl
                        placeholder="Type in what you are looking for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </>
        );
    }
}

export default SearchContainer;