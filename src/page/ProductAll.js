import React, { useEffect, useState } from "react";
import ProductCard from "../compo/ProductCard";
import { Container,Row,Col } from "react-bootstrap";
function ProductAll() {
  const [productList, setProductList] = useState("");

  console.log(productList);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
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
