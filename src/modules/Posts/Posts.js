import React, { Component } from 'react';
import SimpleCard from '../../commons/SimpleCard';
import ReadMore from '../ReadMore/ReadMore';

// Data
import data from '../../data/response.json';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    readMore = () => {
        this.setState({
            show: true
        });
    }

    onHide = () => {
        this.setState({
            show: false
        });
    }

    render() {
        const { show } = this.state;

        return (
            <>
                {
                    data.result.map(each => (
                        <div className="marginTopBottom">
                            <SimpleCard 
                                title={each.title} 
                                content={each.content} 
                                date={each.updatedOn} 
                                likes={each.likes} 
                                readMore={this.readMore} 
                                tags={each.tags}
                            />
                        </div>
                    ))
                }
                <ReadMore show={show} onHide={this.onHide} />
            </>
        );
    }
}

export default Posts;