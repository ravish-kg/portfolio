import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class CustomModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { show, onHide, container, title } = this.props;

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
                            {title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {container}
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default CustomModal;