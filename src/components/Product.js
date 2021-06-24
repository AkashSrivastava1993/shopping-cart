import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Product(props) {
  const { product, onAdd } = props;
  const history = useHistory();
  
  useEffect(() => {
    let prodAdd = document.getElementById("prodAdd");
    prodAdd && prodAdd.addEventListener("click", function(){
      window.alert("Product has been added in the cart");
    }, false);

  })
  const prodDetails = (product, onAdd) => {
    if (product) {
      let url = window.location.origin === "http://localhost:3000" ? '/#/prodDetails' : 'https://akashsrivastava1993.github.io/shopping-cart/#/prodDetails';
      let newWindow = window.open(url);
      newWindow.image = product.image;
      newWindow.name = product.name;
      newWindow.price = product.price;
      newWindow.click = product;
      newWindow.onAdd = onAdd;
    }
  }
  console.log(window.location.origin, "JMS");
  return (
    <div>
      <img className="small" src={window.image || product.image} alt={window.name || product.name} onClick={() => prodDetails(product, onAdd)} />
      <h3>{window.name || product.name}</h3>
      <div>₹{window.price || product.price}</div>
      <div>
       {product ? <button onClick={() => onAdd(product || window.click)}>Add To Cart</button> :
       <button id = "prodAdd" onClick={() => window.onAdd(window.click)}>Add To Cart</button>}
      </div>
    </div>
  );
}