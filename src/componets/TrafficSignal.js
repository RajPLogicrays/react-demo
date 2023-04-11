import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'

function TrafficSignal() {

    const [signalStatus, setSignalStatus] = useState("red");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeout(() => {
                setSignalStatus("yellow");
            }, 3000)
            setTimeout(() => {
                setSignalStatus("green");
            }, 6000)
            setTimeout(() => {
                setSignalStatus("red");
            }, 9000);
        }, 1000*10);

        const counterTimer = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            clearInterval(counterTimer);
        };
    }, []);


    console.log(signalStatus, counter)

    return (
        <Container>
            <Row>
                <h2>Traffic Signal</h2>
                {signalStatus}{counter}
            </Row>
        </Container>
    )
}

export default TrafficSignal
