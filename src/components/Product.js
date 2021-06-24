import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  const prodDetails = (product) => {
    if (product) {
      let url = window.location.origin === "http://localhost:3000" ? '/#/prodDetails' : 'https://akashsrivastava1993.github.io/shopping-cart/#/prodDetails';
      let abc = window.open(url);
      abc.image = product.image;
      abc.name = product.name;
      abc.price = product.price;
    }
  }
  console.log(window.location.origin, "JMS");
  return (
    <div>
      <img className="small" src={window.image || product.image} alt={window.name || product.name} onClick={() => prodDetails(product)} />
      <h3>{window.name || product.name}</h3>
      <div>₹{window.price || product.price}</div>
      <div>
        {product ? <button onClick={() => onAdd(product)}>Add To Cart</button> : ""}
      </div>
    </div>
  );
}