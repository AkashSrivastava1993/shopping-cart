import React, {memo} from 'react';

function Header(props) {
  console.log("From Header");
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>
      </div>
    </header>
  );
}

export default memo(Header);