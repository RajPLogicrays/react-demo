import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

class ComponentWillUnmount extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h5>componentWillUnmount</h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ComponentWillUnmount