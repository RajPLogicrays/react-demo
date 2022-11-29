import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbar() {
    const adminDetail = localStorage.getItem("data");

    let admin = JSON.parse(window.localStorage.getItem("data"));
    const adminName = admin?.["data"].result.first_name;

    const navigate = useNavigate();

    const megamenus = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Blog",
            url: "/blog",
        },
        {
            title: "User",
            url: "/user",
        },
        {
            title: "Products",
            url: "/products",
            product: [
                {
                    title: "Filter RegExp",
                    url: "/filter-regular-expression",
                },
                {
                    title: "Dynamic array",
                    url: "/dynamic-array",
                },
                {
                    title: "Dynamic Form",
                    url: "/dynamic-form",
                },
            ],
        },
    ];

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <Container>
                <Row className="align-items-center">
                    <Col md={2}>
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} width={100} height={100} alt="logo" />
                            </Link>
                        </div>
                    </Col>
                    <Col md={10}>
                        <Nav as="ul">
                            {adminDetail ? (
                                <>
                                    {megamenus.map((menus, index) => {
                                        return (
                                            <div key={index}>
                                                {menus.product ? (
                                                    <>
                                                        <li>
                                                            {windowSize.innerWidth <= 393 && menus.product ? (
                                                                <>
                                                                    <Button
                                                                        to={menus.url}
                                                                        className="px-3 text-decoration-none"
                                                                    >
                                                                        {menus.title}
                                                                    </Button>
                                                                    <ul className={`dropdown sub_menu`}>
                                                                        {menus.product.map((menu, subindex) => {
                                                                            return (
                                                                                <li key={subindex}>
                                                                                    <Link
                                                                                        to={menu.url}
                                                                                        className="px-3 text-decoration-none"
                                                                                    >
                                                                                        {menu.title}
                                                                                    </Link>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Link
                                                                        to={menus.url}
                                                                        className="px-3 text-decoration-none"
                                                                    >
                                                                        {menus.title}
                                                                    </Link>
                                                                    <ul className={`dropdown sub_menu`}>
                                                                        {menus.product.map((menu, subindex) => {
                                                                            return (
                                                                                <li key={subindex}>
                                                                                    <Link
                                                                                        to={menu.url}
                                                                                        className="px-3 text-decoration-none"
                                                                                    >
                                                                                        {menu.title}
                                                                                    </Link>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </>
                                                            )}
                                                        </li>
                                                    </>
                                                ) : (
                                                    <>
                                                        <li>
                                                            <Link
                                                                className="px-3 text-decoration-none"
                                                                to={menus.url}
                                                            >
                                                                {menus.title}
                                                            </Link>
                                                        </li>
                                                    </>
                                                )}
                                            </div>
                                        );
                                    })}

                                    <div className="userName">Hello, {adminName}</div>
                                    <Nav.Item as="li">
                                        <Button
                                            onClick={(e) => {
                                                window.localStorage.removeItem("data");
                                                navigate("/login");
                                            }}
                                        >
                                            Logout
                                        </Button>
                                    </Nav.Item>
                                </>
                            ) : (
                                <>
                                    <Nav.Item as="li">
                                        <Link to="/login">Login</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="/registration">Registration</Link>
                                    </Nav.Item>
                                </>
                            )}
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Navbar;
