import React, { Component } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import { SubHeadingText } from '../../commons/Text';
// import CategoriesList from '../CategoriesList/CategoriesList';
import data from '../../data/categories.json';

class CategoryContainer extends Component {

    render() {
        const { onChange } = this.props;

        return(
            <div className="padding8">
                <SubHeadingText label="Categories" />
                {/* <CategoriesList /> */}
                <ListGroup as="ul">
                    {data.response.map(each => (<ListGroup.Item as="li" className="pointer" action onClick={onChange(each.label)} >
                        {each.label}
                        <Badge className="badgeRight" bg="secondary">{each.postCount}</Badge>
                    </ListGroup.Item>))}
                </ListGroup>
            </div>
        );
    }
}

export default CategoryContainer;