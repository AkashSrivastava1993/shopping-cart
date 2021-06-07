import { Link } from "react-router-dom";

function OrderPlaced() {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Thank you, your order is placed.</h2>
            <Link to='/'>Shop Again</Link>
        </div>
    )
}

export default OrderPlaced;