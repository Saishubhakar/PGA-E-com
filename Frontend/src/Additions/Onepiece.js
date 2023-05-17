import React from "react";
import { useState, useEffect } from "react";
import CardTemplate from "./CardTemplate";
import axios from "axios";
// import ProductList from "./ProductList";

const Onepiece = (props) => {
  const [products, Setproducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    getProducts();
    priceSort();
  }, []);

  const [Color, setColor] = useState({
    color: "#000000",
  });

  const darkmode = () => {
    let imgcontainer = document.getElementById("imgcontainer");
    imgcontainer.classList.toggle("bodyvisible");
    // These are the heading

    if (Color.color === "#000000") {
      setColor({
        color: "white",
      });
    } else {
      setColor({
        color: "#000000",
      });
    }
  };

  const getProducts = async (e) => {
    const url = "http://localhost:5000/api/v1/getproducts";
    let data = await fetch(url);
    let products = await data.json();
    console.log(products);
    Setproducts(products);
  };

  const priceSort = async (e) => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/getAllProducts"
    );
    Setproducts(response.data.prods);
  };

  const handleFilter = () => {
    const filteredProducts = products.filter((product) => {
      const price = product.price;
      return price >= parseInt(minPrice) && price <= parseInt(maxPrice);
    });
    // Update the state with filtered products
    Setproducts(filteredProducts);
  };

  const resetFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    priceSort();
  };

  return (
    <>
      <div className="imgcontainer" id="imgcontainer">
        <header className="mininav">
          <ul className="miniul">
            <li className="minili"><a href="/settings" id="settings">Usersettings</a></li>
            <li className="minili">SpecialOffers</li>

            <li className="minili" id="toggle">
              <div className="options" id="options">
                <div className="form-check form-switch" id="darkmode">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Darkmode
                  </label>
                  <input
                    className="form-check-input"
                    onClick={darkmode}
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </li>

          </ul>
        </header>

        <div className="filterContainer">

          <div className="priceContainer">

            <h3 className="priceHeading">Price Filter</h3>
            <div>
              <label className="minPriceLabel">Min Price:</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="minPrice"
              />
            </div>
            <div>
              <label className="maxPriceLabel">Max Price:</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="maxPrice"
              />
            </div>
            <button onClick={handleFilter} className="minPriceButton">
              Apply Filter
            </button>
            <button onClick={resetFilter} className="maxPriceButton">
              Reset Filter
            </button>
          </div>

        </div>

        <div className="container">
          <h1 className="heading" color={setColor}>
            Best products you will ever see
          </h1>
          <div className="row prodContainer" >
            {products.map((element) => {
              return (
                <div className="col md-4">
                  <CardTemplate
                    name={element.name}
                    description={element.description}
                    brand={element.brand}
                    price={element.price}
                    imageUrl={element.imageUrl}
                    color={darkmode}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Onepiece;
