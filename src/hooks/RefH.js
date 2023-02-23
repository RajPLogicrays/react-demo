import React, { useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function RefH() {
    const inputRef = useRef(null);

    const handleInput = () => {
        console.log(inputRef);
        inputRef.current.value = "Raju Bhai";
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "Red";
    }
    
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>RefH</h1>
                    </Col>
                    <Col>
                        <input type="text" ref={inputRef} />
                        <Button onClick={()=>handleInput()}>Click Me!</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RefH;