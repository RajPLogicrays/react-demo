import React, { useMemo, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function MemoH() {

    const [count, setCount] = useState(5);
    const [price, setPrice] = useState(10);


    const mainDataUpdate = useMemo(
        function updateCount() {
            console.log("updateCount");
            return count + 5;
        },[count]  // This is coundition for memo hooks,[count]
    )

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>This is Memo count {count}</h2>
                        <h2>This is Memo count {price}</h2>
                        <h2>{mainDataUpdate}</h2>
                    </Col>
                    <Col>
                        <Button onClick={() => setCount(count + 1)} className="d-block mb-3">Update Count</Button>
                        <Button onClick={() => setPrice(price * 2)} >Update Price</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MemoH;