import Header from './Header';
import Dashboard from './Dashboard';
import Basket from './Basket';
import {shoppingData} from '../Context';
import { useContext,  useState, useEffect } from 'react';
import ContactUs from './ContactUs';
function Main() {
  // const [products,setProducts] = useState(data.products); // use if not using context API
  useEffect(() => {
    setTimeout(() => {
      alert("Your session is about to expire");
  }, 1000)
  }, []);
  const [cartItems, setCartItems] = useState([]);
  const {products}=useContext(shoppingData);

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
  let info = "Contact us on 9140271427";
  console.log(cartItems, "cartItems");
  return (
    <div>
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