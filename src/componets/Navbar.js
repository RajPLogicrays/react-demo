import React from 'react'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import Logo  from '../images/logo.png';


function Navbar() {
    
    const adminDetail = localStorage.getItem('data');

    let admin = JSON.parse(window.localStorage.getItem('data'));
    const adminName = admin?.['data'].result.first_name;

    const navigate = useNavigate();


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
                        adminDetail  ? 
                        <>
                            <Nav.Item as="li"><Link to="/" className="px-3 text-decoration-none ">Home</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/blog" className="px-3 text-decoration-none">Blog</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/user" className="px-3 text-decoration-none">User</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/filter-regular-expression" className="px-3 text-decoration-none">Fil-RegExp</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/dynamic-array" className="px-3 text-decoration-none">Dynamic-array</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/dynamic-form" className="px-3 text-decoration-none">Dynamic Form</Link></Nav.Item>
                            
                            <div className="userName">
                                Hello, {adminName}
                            </div>
                            <Nav.Item as="li"><Button onClick={e =>{window.localStorage.removeItem("data");navigate("/login");}}>Logout</Button></Nav.Item>
                        </> 
                        :
                        <>
                            <Nav.Item as="li"><Link to="/login">Login</Link></Nav.Item>
                            <Nav.Item as="li"><Link to="/registration">Registration</Link></Nav.Item>
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