import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class CustomModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { show, onHide } = this.props;

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
                            Custom Modal Styling
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </p>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default CustomModal;