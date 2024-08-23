import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let { id } = useParams();

  const [detailProduct, setDetailProduct] = useState("");
  const getProductDetail = useCallback(async () => {
    let url = `https://my-json-server.typicode.com/josungwong/shoppingmolfinal/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("여기", data);
    setDetailProduct(data);
  }, [id]);

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);
  return (
    <Container>
      <Row>
        <Col>
          <img src={detailProduct?.img} alt="" className="detail-img"/>
        </Col>
        <Col>
          <h4>{detailProduct?.title}</h4>
          <h5>{detailProduct?.price} 원</h5>
          <DropdownButton id="dropdown-basic-button" title="size">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
          <p>
            {detailProduct?.new === true ? "신제품" : ""} /{" "}
            {detailProduct?.choice === true ? "Conscious choice" : ""}
          </p>
          <button className="buy-button">구매버튼</button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
