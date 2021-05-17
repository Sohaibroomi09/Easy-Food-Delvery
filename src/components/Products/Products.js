import React, { useEffect } from "react";
import axios from "../../axios";

import "./Products.css";

const Products = ({ heading, data }) => {
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/home/fooditems");

      //  setPeople(req.data);
    }

    fetchData();
  }, []);

  return (
    <div className="ProductsContainer">
      <div className="ProductsHeading">{heading}</div>
      <div className="ProductWrapper">
        {data.map((product, index) => {
          return (
            <div className="ProductCard" key={index}>
              <img className="ProductImg" src={product.img} alt={product.alt} />
              <div className="ProductInfo">
                <div className="ProductTitle">{product.name}</div>
                <div className="ProductDesc">{product.desc}</div>
                <div className="ProductPrice">{product.price}</div>
                <div className="ProductButton">{product.button}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;