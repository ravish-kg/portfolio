import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Editor from '../Editor/Editor';

class ReadMore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }

    editMode = (event) => {
        this.setState({
            edit: event.target.checked
        });
    }

    render() {
        const { show, onHide, data } = this.props;
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
                            {data.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Edit Mode"
                                onChange={this.editMode}
                                checked={edit}
                            />
                        </Form>
                        <br />
                        <Editor
                            editMode={edit}
                            content={data.content}
                        />
                        {edit && (<>
                            <hr />
                            <Button variant="primary">
                                Save
                            </Button></>
                        )}
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default ReadMore;