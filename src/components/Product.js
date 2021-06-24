import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  const prodDetails = (product) => {
    if (product) {
      let abc = window.open('/#/prodDetails')
      abc.image = product.image;
      abc.name = product.name;
      abc.price = product.price;
    }
  }
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