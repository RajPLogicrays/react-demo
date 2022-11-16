import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Dynamic_Array() {

    const [list, setList] = useState([Array.from({length: 10}, () => Math.floor(Math.random() * 10)+1)]);
    // const randomNum = Math.floor(Math.random() * 100)+1;
    const randomNum = Array.from({length: 10}, () => Math.floor(Math.random() * 10)+1);
    console.log(randomNum)
    
    const heandlsubmt = () =>{
        setList(randomNum);
    }

  return (
    <Container> 
        <Row>
            <Col>
                <h5>Type 1: {list.toString()}</h5>
                <h5>Type 2:</h5>
                <h5>Type 3:</h5>
                <h5>Type 4:</h5>
                <h5>Type 5:</h5>
                <Button onClick={heandlsubmt}>Click Me!!</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Dynamic_Array