import React, { useMemo, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function MemoH() {

    const [count, setCount] = useState(0);
    
    const [price, setPrice] = useState(0);

    const mainDataUpdate = useMemo(
        function updateCount() {
            console.log("updateCount");
                return count;
        },[count]  // This is coundition for memo hooks,[count]
    )

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>This is Memo counter {mainDataUpdate}</h2>
                        <h2>This is Simpl counter {price}</h2>
                    </Col>
                    <Col>
                        <Button onClick={() => setCount(count + 1)} className="d-block mb-3">Update Count</Button>
                        <Button onClick={() => setPrice(price + 1)} >Update Price</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MemoH;