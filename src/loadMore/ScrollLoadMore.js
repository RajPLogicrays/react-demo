import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component';

function ScrollLoadMore() {

  const [items, setItems] = useState([]);

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((data) => setItems(data));
  });
  
  fetchData = () => {
    setItems(items.concat(items));
  }

  return (
    <Container>
      <Row>
        <h2>On Scroll LoadMore</h2>
        <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {items}
        </InfiniteScroll>
      </Row>
    </Container>
  )
}

export default ScrollLoadMore
