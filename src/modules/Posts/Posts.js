import React, { Component } from 'react';
import SimpleCard from '../../commons/SimpleCard';
import { ContentText } from '../../commons/Text';
import ReadMore from '../ReadMore/ReadMore';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            data: {}
        }
    }

    readMore = (data) => {
        this.setState({
            show: true,
            data
        });
    }

    onHide = () => {
        this.setState({
            show: false
        });
    }

    onClick = (post) => {
        console.log(post);
    }

    render() {
        const { posts } = this.props;
        const { show, data } = this.state;

        return (
            <>
                {
                    posts.map(each => (
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
                {
                    posts.length === 0 && (
                        <ContentText label="No Data Available" />
                    )
                }
                <ReadMore show={show} onHide={this.onHide} data={data} />
            </>
        );
    }
}

export default Posts;