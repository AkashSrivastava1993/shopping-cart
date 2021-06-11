import Header from './Header';
import Dashboard from './Dashboard';
import Basket from './Basket';
import { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import ContactUs from './ContactUs';
// import {shoppingData} from '../Context';

function Main() {

  // Don't Remove these comments
  // For getting data we used three approaches here:

  // 1) directly importing and using it in useState like below:
  // const { products } = data; //import data from stub and use
  // const [products,setProducts] = useState(data.products); use if not using context API or useEffect to fetch data

  // 2) Context API by using useContext like below:
  // const {products}=useContext(shoppingData);

  // 3) The way we used in real world projects by useEffect and then storing and setting the value like below:


  // JS fetch()
  // useEffect(() => {
  //   fetch("products.json") //here the actual API will be targeted
  //   .then(resp => {
  //     return resp.json();
  //   })
  //   .then(data => {
  //     setProducts(data.products);
  //   })
  // }, []);
  // const [cartItems, setCartItems] = useState([]);

  //async/await syntax below:
  useEffect(() => getProducts(), []);
  const [cartItems, setCartItems] = useState([]);

  const getProducts = async () => {
    let res = await fetch("products.json");
    let data = await res.json();
    return setProducts(data.products);
  }

  const [products, setProducts] = useState([]);
  const [layoutEffect, setLayout] = useState("");

  useLayoutEffect(() => {
    if (products.length === 0) {
      setLayout("LOADING.....................................................................................");
    } else {
      setLayout("");
    };
  }, [products.length]);

  // In this example, the <ContactUs /> child component is re-rendered because the info prop is passed a new callback with a new reference.

  // Note that even though the ContactUs child component uses React.memo to optimize performance, it is still re-rendered.

  // How can this be fixed to prevent <ContactUs /> from re-rendering needlessly? -> By useCallback
  const contactInfo = "Contact us on 9140271427";
  const info = useCallback(() => {
    return contactInfo;
  }, [contactInfo]);


  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    console.log(exist, "Exist");
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div>
      {layoutEffect}
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Dashboard products={products} onAdd={onAdd}></Dashboard>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
      <ContactUs info={info}></ContactUs>
    </div>
  );
}

export default Main;