import React, { Component } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';

import data from '../../data/categories.json';

class CategoriesList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <>
                <ListGroup as="ul">
                    {data.response.map(each => (<ListGroup.Item as="li" className="pointer" action>
                        {each.label}
                        <Badge className="badgeRight" bg="secondary">{each.postCount}</Badge>
                    </ListGroup.Item>))}
                </ListGroup>
            </>
        );
    }
}

export default CategoriesList;