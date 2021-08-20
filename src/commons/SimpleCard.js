import React, { Component } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';

class SimpleCard extends Component {

    render() {
        const { title, content, likes, date, tags, readMore } = this.props;

        return (
            <>
                <Card>
                    {/* <Card.Header as="h5">Algorithms</Card.Header> */}
                    <Card.Body>
                        <Card.Subtitle><h6>{title}</h6><p style={{ fontSize: '12px' }}>{date}</p></Card.Subtitle>
                        <Card.Text>
                            {content}
                        </Card.Text>
                        <div className="divMargin">
                            {tags.map(each => (
                                <Badge pill bg="warning" text="dark" className="badgeMargin">
                                    {each}
                                </Badge>
                            ))}
                        </div>
                        <hr />
                        <div className="flex spaceBw">
                            <div className='marginAuto0 pointer'>{likes} <Heart /></div>
                            <Button variant="light" className="floatRight" onClick={readMore} >Read More</Button>
                        </div>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default SimpleCard;