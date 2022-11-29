import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Props from './Filter';

export default function Blog() {

  const [count, setCount] = useState(0);
  const increment = () => {
    // count += 1; 
    setCount(count + 1) // correct 
  }
  const decrement = () => {
    // count -= 1; 
    setCount(count - 1); // correct 
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://awagindia.org/wp-json/wp/v2/posts').then((item) => {
      setPosts(item.data);
    })
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1>Blog</h1>
          {/* <Props name="Raj" id="1" /> */}
          <div>
            <Button color="primary" variant="outlined" onClick={decrement}>-</Button>
            <p>You clicked {count} times</p>
            <Button color="primary" variant="outlined" onClick={increment}>+</Button>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            {posts && posts?.map((post, index) =>
              <div className='col-12' key={index}>
                <h1><Link to={`single/${post.id}`}>{post.title.rendered}</Link></h1>
                <div className='post-info' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

// import React from 'react'

// const Props = (props) => {
//   return (
//     <>
//         <h1>My Name {props.name}</h1>
//         <h1>My Id {props.id}</h1>
//     </>
//   )
// }

// export default Props

// <Blog name="raj" />