import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const nav = useNavigate();
  const toDetail = () => {
    nav(`/product/${item.id}`);
  };
  return (
    <div>
      <div className="card-hover" onClick={toDetail}>
        <img src={item?.img} alt="" className="card-img" />
        <div className="card-word">
          <div className="card-title">
            {item?.choice === true ? "Conscious choice" : ""}
          </div>
          <div>{item?.title}</div>
          <div>{item?.price} 원</div>
          <div>{item?.new === true ? "신제품" : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
