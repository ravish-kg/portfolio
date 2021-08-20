import React, { Component } from 'react';
import { SubHeadingText } from '../../commons/Text';
import CategoriesList from '../CategoriesList/CategoriesList';

class CategoryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return(
            <div className="padding8">
                <SubHeadingText label="Categories" />
                <CategoriesList />
            </div>
        );
    }
}

export default CategoryContainer;