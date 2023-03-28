import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Accordion() {

    const accordionData = [
        {
            title: 'Section 1',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
            title: 'Section 2',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Section 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Accordion</h1>
                        <div className="accordion">
                            {accordionData.map(({ index, title, content }) => (
                                <div className="accordion_item" key={index}>
                                    <AccordionItem title={title} content={content} />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Accordion;

function AccordionItem({ title, content }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
                <h4>{title}</h4>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="accordion_content">{content}</div>}
        </>
    )
}