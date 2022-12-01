import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Modal(){

    const [modal, setModal] = useState(false);

    return(
        <>
        <Container className="mt-5 modal_container">
            <Row className="modal_row">
                <Col className="justify-content-center d-flex">
                    <div className={`success_modal ${modal === true ? 'show': 'hide'}`}>
                        <Container className="main_modal_container">
                            <div>This is modal</div>
                            <Button onClick={()=> setModal(false)}>Close</Button>
                        </Container>
                    </div>
                    <Button onClick={()=> setModal(true)}>Click Me!!</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Modal;