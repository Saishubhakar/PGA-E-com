import React from "react";
import { useState, useEffect } from "react";
import CardTemplate from "./CardTemplate";
import axios from "axios";

const PGA = (props) => {
  const [products, Setproducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const [Color, setColor] = useState({
    color: "#000000",
  });

  function alert(message) {
    window.alert(message);
  }

  useEffect(() => {
    alert("LoggedIn Successfully");
  }, [1]);

  const darkmode = () => {
    let imgcontainer = document.getElementById("imgcontainer");
    imgcontainer.classList.toggle("bodyvisible");
    
    if (Color.color === "#000000") {
      console.log(Color.color  , "if")
      setColor({
        color: "white",
      });
    } else {
      console.log(Color.color, "else")
      setColor({
        color: "#000000",
      });
    }
  };

  const getProducts = async (e) => {
    const url = "http://localhost:5000/api/v1/getproducts";
    let data = await fetch(url);
    let prods = await data.json();
    console.log(prods);
    Setproducts(prods);
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
    setSearch("");
    getProducts();
  };

  const searchFilter = () => {
    const filterProds = products.filter((product) => {
      const naming = product.name.toLowerCase();
      const searchTerm = search.toLowerCase();
      const result = [];
      result.push(naming);
      console.log(searchTerm);

      if (result.includes(searchTerm)) {
        return searchTerm;
      }
    });
    Setproducts(filterProds);
  };

  return (
    <>
      <div className="imgcontainer" id="imgcontainer">
        <header className="mininav">
          <ul className="miniul">
            <li className="minili">
              <a href="/settings" id="settings">
                Usersettings
              </a>
            </li>
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

            <div className="buttonsection">
              <button onClick={handleFilter} className="minPriceButton">
                Apply
              </button>
              <button onClick={resetFilter} className="maxPriceButton">
                Reset
              </button>
            </div>
          </div>

          <div className="searchContainer">
            <div>
              <div>
              <label className="SearchLabel">Search:</label>
              <input
                type="string"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="searchBar"
              />

              </div>
            </div>

            <div className="buttonsection">
              <button onClick={searchFilter} className="searchButton">
                Search
              </button>

              <button onClick={resetFilter} className="resetButton">
                Reset
              </button>

            </div>
            
          </div>
        </div>

        <div className="container">
          <h1 className="heading" color={setColor}>
            Best products you will ever see
          </h1>
          <div className="row prodContainer">
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

export default PGA;
