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
    const [checked, setChecked] = useState({});

    const deleteUser = (index) => {
        const newCitys = [...citys];
        newCitys.splice(index, 1);
        setCitys(newCitys);
        setChecked({});
    };

    const checkedInput = (index) => {
        setChecked((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Click To Check</h1>
                    <ul>
                        {citys.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <div className="g-4">
                                        <input type="checkbox" onClick={() => checkedInput(index)} value={item.name} defaultChecked={checked[index] || false} />
                                        <h3>{item.name}</h3>
                                        {checked[index] && (
                                            <button onClick={() => deleteUser(index)} className="btn btn-primary">
                                                Delete {item.name}
                                            </button>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default CheckBox;
