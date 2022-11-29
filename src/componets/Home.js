import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product";

function Home() {

  const megamenus = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: 'Products',
      url: '/Products',
      product: [
        {
          title: 'Product 1',
          url: '/products-1',
        },
        {
          title: 'Product 2',
          url: '/products-2',
        }
      ],
    },
    {
      title: 'Blog',
      url: '/blog',
      product: [
        {
          title: 'Product 3',
          url: '/products-3',
        },
        {
          title: 'Product 4',
          url: '/products-4',
        }
      ],
    },
    {
      title: 'User',
      url: '/user',

    }
  ];

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // console.log(`Window Width is - ${windowSize.innerWidth}`);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Home</h1>
            <ul className="main_menu_flex">
              {
                megamenus.map((menus, index) => {
                  return (
                    <div key={index}>
                      {menus.product ? (
                        <>
                          <li>
                            {
                              windowSize.innerWidth <= 393 && menus.product ?
                                (
                                  <>
                                    <Button to={menus.url} className="px-3 text-decoration-none">{menus.title}</Button>
                                    <ul className={`dropdown sub_menu`}>
                                      {menus.product.map((menu, subindex) => {
                                        return (
                                          <li key={subindex}>
                                            <Link to={menu.url} className="px-3 text-decoration-none" >{menu.title}</Link>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  </>
                                )
                                :
                                <>
                                  <Link to={menus.url} className="px-3 text-decoration-none">{menus.title}</Link>
                                  <ul className={`dropdown sub_menu`}>
                                    {menus.product.map((menu, subindex) => {
                                      return (
                                        <li key={subindex}>
                                          <Link to={menu.url} className="px-3 text-decoration-none" >{menu.title}</Link>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </>
                            }
                          </li>
                        </>
                      )
                        :
                        <>
                          <li>
                            <Link className="px-3 text-decoration-none" to={menus.url}>{menus.title}</Link>
                          </li>
                        </>
                      }
                    </div>
                  )
                })
              }
            </ul>
          </Col>
        </Row>
        <Row> 
          {/* Parent */}
          <Product name="Google Home" description="Your AI assistant" price={59.99} />

          {/* {megamenus.map((Pname,i)=>{
            return (
              <Product key={i} name={Pname.title} description="Your AI assistant" price={59.99} />
            )
            })} */}

        </Row>
      </Container>
    </>
  );
}

export default Home;

