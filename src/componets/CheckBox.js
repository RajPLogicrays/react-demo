import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function CheckBox() {

    const items = [
        { id: 1, name: 'Junagadh' },
        { id: 2, name: 'Somnath' },
        { id: 3, name: 'Saligao' },
        { id: 4, name: 'Margoa' },
        { id: 5, name: 'Canon City' },
        { id: 6, name: 'Holly' },
        { id: 7, name: 'Alvin' },
        { id: 8, name: 'Cedar Hill' },
    ];

    const [citys, setCitys] = useState(items);

    const deleteUser = (index) => {
        const newCitys = [...citys];
        // console.log(newCitys);
        newCitys.splice(index, 1);
        setCitys(newCitys);
    }

    return (
        <Container>
            <Row>
                <h1>Click To Check</h1>
                {citys.map((item, index) => {
                    return (
                        <Col key={item.id}>
                            <div>{item.name}</div>
                            <button onClick={() => deleteUser(index)} className="btn btn-primary">Delete</button>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default CheckBox;