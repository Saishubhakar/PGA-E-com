import React, { useState } from "react";

const ProductCreate = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [brand, setbrand] = useState("");
  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");
  const [isFeatured, setisFeatured] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  async function CreateProd(event) {
    const response = await fetch("http://localhost:5000/api/v1/createproducts", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        description,
        brand,
        price,
        rating,
        isFeatured,
        imageUrl,
      }),
    });

    console.log(response)
  }

  return (
    <div className="contact">
      <div className="Contactcontainer">
        <h1 className="contactHeading">Sell Your Product</h1>

        <form onSubmit={CreateProd} className="Form">
          <input
            type={"text"}
            className="contactinput"
            placeholder={"name"}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <input
            type={"text"}
            className="contactinput"
            name=""
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          ></input>
          <input
            type={"text"}
            className="contactinput"
            name=""
            placeholder="brand"
            onChange={(e) => setbrand(e.target.value)}
          ></input>
          <input
            type={"text"}
            className="contactinput"
            name=""
            placeholder="Price"
            onChange={(e) => setprice(e.target.value)}
          ></input>
          
          <input
            type={"text"}
            className="contactinput"
            name=""
            placeholder="Rating"
            onChange={(e) => setrating(e.target.value)}
          ></input>
          
          <input
            type={"text"}
            className="contactinput"
            name=""
            placeholder="IsFeatured"
            onChange={(e) => setisFeatured(e.target.value)}
          ></input>
          
          <input
            type={"text"}
            className="contactinput"
            name=""
            placeholder="imageUrlLink"
            onChange={(e) => setimageUrl(e.target.value)}></input>

          <button className="signButton" type="submit" id="createProdButton">
            CreateProduct
          </button>

        </form>

      </div>
    </div>
  );
};

export default ProductCreate;