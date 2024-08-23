import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../compo/ProductCard";
import { Container,Row,Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
function ProductAll() {
  const [productList, setProductList] = useState("");

  const [query] = useSearchParams()
  const getProducts = useCallback(async()=>{
    let searchQuery = query.get('q') || ''
    console.log("커리값",searchQuery)
    let url = `https://my-json-server.typicode.com/josungwong/shoppingmolfinal/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("데이터",data)
    setProductList(data);
  },[query]) 

  useEffect(() => {
    getProducts();
  }, [getProducts,query]);
  return (
    <div>
      <Container>
        <Row>
          {productList && productList.map((menu)=>(<Col lg={3}><ProductCard item={menu}/></Col>))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductAll;
