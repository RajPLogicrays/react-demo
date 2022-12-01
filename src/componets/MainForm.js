import React, { useState } from 'react';
import { Button, Col, Container, FormGroup, FormSelect, Row } from 'react-bootstrap';

function MainForm(){

    const [student, setStudent] = useState({
        fname: "",
        myBike: "",
    })

    const formHandel = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setStudent({...setStudent, [name]: value})
    }

    const submit = (e) =>{
        e.preventDefault();
        console.log(student);
        setStudent({...setStudent,fname:"",myBike:"", });
    }

    return(
        <Container>
            <Row>
                <Col md={6} >
                <form onSubmit={submit}>
                    <FormGroup>
                        <input type="text" name="fname" value={student.fname} onChange={formHandel} placeholder="Enter your name" />
                    </FormGroup>
                    <FormGroup>
                        <FormSelect name="myBike" value={student.myBike} onChange={formHandel}>
                            <option value="bike-1" >Bike 1</option>
                            <option value="bike-2" >Bike 2</option>
                            <option value="bike-3" >Bike 3</option>
                        </FormSelect>
                    </FormGroup>
                    <br/>
                    <Button type="submit">Submit</Button>
                </form>
                </Col>
                <Col md={6}>
                    <h1>List</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default MainForm;