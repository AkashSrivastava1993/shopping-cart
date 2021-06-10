import React, {memo} from 'react';
import { useHistory } from 'react-router-dom';
function Header(props) {
  const history = useHistory();
  console.log("From Header", history);
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
        {history.location.state ? "Hello Admin" : <a href="/signIn">Sign In</a>}
      </div>
    </header>
  );
}

export default memo(Header);