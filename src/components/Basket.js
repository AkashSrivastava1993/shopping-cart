import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Basket(props) {
  const history = useHistory();
  const [to, setTo] = useState('');
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;

  // const totalPrice = () => {
  //   console.log("I am getting called");
  //   return itemsPrice + taxPrice + shippingPrice;
  // }

  // no re-rendering of the function will happen on action of other events.
  const totalPrice = useMemo(() => {
    console.log("useMEMO");
    return itemsPrice + taxPrice + shippingPrice
  }, [itemsPrice, taxPrice, shippingPrice]);

  const enterPhn = (e) => {
    console.log(e.target.value);
    setTo(e.target.value);
  }
  const handleClick = (e) => {
    e.preventDefault();
    let confirm = window.confirm("Are you sure you want to place the orders");
    if (confirm === true) {
      if(to !== '') {
      fetch('https://api.twilio.com/2010-04-01/Accounts/AC6135beb3be3d2796a797ce44ae616f95/Messages.json', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa('AC6135beb3be3d2796a797ce44ae616f95:87489ee0c55fe1f5525c24a4f5bbd75d')
        },
        body: new URLSearchParams({
          'To': '+919140271427',
          'Body': 'Item has been dispatched. It will be at your door soon from Shopping Cart.',
          'From': '+18325328070',
        })
      })
    }
      history.push('/ordered');
    }
  }
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">₹{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">₹{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ₹{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>₹{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div style={{ paddingBottom: '15px' }}><label for="phone">Enter Mobile Number:</label>
              <input type="text" id="phone" name="phone" placeholder="Please type your number with country code" onChange={(e) => enterPhn(e)}></input><br />
            </div>
            <div className="row">
              <button onClick={(e) => handleClick(e)}>Place Order</button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}