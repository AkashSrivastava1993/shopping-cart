import React from 'react'

const withHOC = OriginalComponent => {
  class HOC extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
             <OriginalComponent/>
                <a href='/'>Shopping Cart</a>
            </div>
        );
    }
  }
  return HOC;
}

export default withHOC;