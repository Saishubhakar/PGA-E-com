import React from "react";
import { useState } from "react";

const CardTemplate = (props) => {
  const { imageUrl, name, brand, price, color } = props;

  return (
    
      <div className="container5 my-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="badges">
            <span className="position-absolute badge rounded-pill bg-danger">
              At Best Prices
              <span className="visually-visible"></span>
            </span>
          </div>
          <div className="buttonshover">
            <div className="buybutton">
              <a
                href="https://www.amazon.in/"
                target={"_blank"}
                className="shopbutton btn btn-primary"
              >
                Shop Now
              </a>
            </div>
            <div className="detailsbutton">
              <a
                href="https://www.amazon.in/"
                target={"_blank"}
                className="detailbutton btn btn-primary"
              >
                More details
              </a>
            </div>
          </div>
          <img src={imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h4 className="card-title" id="cardtitle13" color= {color}>
              {name}
            </h4>
            <div className="detail1">
              <p className="card-text" color= {color}>{brand}</p>
              <p className="card-text" color= {color}>60% off</p>
              <p className="card-text" color= {color}>{price}$</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CardTemplate;
