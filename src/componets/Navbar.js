import React from 'react'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logo  from '../images/logo.png';

function Navbar() {
    
  return (
    <>
        <Container>
            <Row className="align-items-center">
                <Col md={2}>
                <div className='logo'>
                    <Link to="/">
                        <img src={Logo} width={100} height={100} alt="logo" />
                    </Link>
                </div>
                </Col>
                <Col md={10}>
                <Nav as="ul">
                    {   
                        localStorage.getItem('data')  ? 
                        <>
                            <Nav.Item as="li"><Link to="/" className="px-3 text-decoration-none ">Home</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/blog" className="px-3 text-decoration-none">Blog</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/user" className="px-3 text-decoration-none">User</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/regular-expression" className="px-3 text-decoration-none">Regular-Exp</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/dynamic-array" className="px-3 text-decoration-none">Dynamic-array</Link></Nav.Item>
                            
                            <Nav.Item as="li"><Button onClick={e =>{window.localStorage.removeItem("data");window.location.href = "/login";}}>Logout</Button></Nav.Item>
                        </> 
                        : 
                        <>
                            <Nav.Item as="li"><Nav.Link to="/login">Login</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link to="/registration">Registration</Nav.Link></Nav.Item>
                        </>

                    }
                </Nav>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Navbar