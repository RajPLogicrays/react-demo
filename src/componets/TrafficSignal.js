import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

function TrafficSignal() {

    const [red, setRed] = useState('red');
    const [green, setGreen] = useState('green');
    const [blue, setBlue] = useState('blue');

    const onChange = () => {
        red === "red" ? setRed("green") : setRed("blue");
        green === "green" ? setGreen("blue") : setGreen("red");
        blue === "blue" ? setBlue("red") : setBlue("green");

        // red === "blue" ? setRed("green") : setRed("red");
        // green === "red" ? setGreen("blue") : setGreen("green");
        // blue === "green" ? setBlue("red") : setBlue("green");

        // red === "green" ? setRed("blue") : setRed("red");
        // green === "blue" ? setGreen("red") : setGreen("green");
        // blue === "red" ? setBlue("green") : setBlue("blue");
    }

    // setInterval(onChange, 1000)
    console.log(red, green, blue);

    return (
        <Container>
            <h2>Traffic Signal</h2>
            <h3>{red}</h3>
            <h3>{green}</h3>
            <h3>{blue}</h3>
            <button onClick={onChange}>Click to change</button>
        </Container>
    )
}

export default TrafficSignal
