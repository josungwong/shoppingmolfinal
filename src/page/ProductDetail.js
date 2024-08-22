import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
// import { useParams } from "react-router-dom";

function ProductDetail() {
  // let {id} = useParams()
  // const getProductDetail = async()=>{
  //   let url = `http://localhost:5000/products/${id}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console
  

  useEffect(()=>{
    // getProductDetail()
  },[])
  return (
    <div>
      <Container>
      <div className="detail-box">
        <img src="https://noona-hnm.netlify.app/pattern-jacket.jpeg" alt=""/>
        <div className="detail-word">
        <h4>이름</h4>
        <h5>가격</h5>
        <p>신상인가? Conscious choice?</p>
        <button className="buy-button">
          구매버튼
        </button>
        </div>
      </div>
      </Container>
      
    </div>
  );
}

export default ProductDetail;
