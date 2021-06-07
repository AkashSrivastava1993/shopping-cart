import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Oops, Please see you have typed the correct link.</h2>
            <Link to='/'>Shopping Cart</Link>
        </div>
    );
}
