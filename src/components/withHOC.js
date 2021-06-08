import React from 'react'
import { Link } from "react-router-dom";
const withHOC = OriginalComponent => {
  class HOC extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
             <OriginalComponent/>
                <Link to='/'>Shopping Cart</Link>
            </div>
        );
    }
  }
  return HOC;
}

export default withHOC;