import React, { Component } from 'react';
import { Form, Modal } from 'react-bootstrap';
import Editor from '../Editor/Editor';

class ReadMore extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    editMode = (event) => {
        this.setState({
            edit: event.target.checked
        });
    }

    render() {
        const { show, onHide } = this.props;
        const { edit } = this.state;

        return (
            <>
                <Modal
                    size="lg"
                    show={show}
                    onHide={() => onHide(false)}
                    dialogClassName="modal-100w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Algorithms and Data Structure
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Go to Edit Mode"
                                onChange={this.editMode}
                                value={edit}
                            />
                        </Form>
                        <br />
                        <Editor 
                            editMode={edit}
                        />
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default ReadMore;