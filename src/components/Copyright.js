import ReactDOM from 'react-dom';

export default function Copyright() {
    return(
        ReactDOM.createPortal(
        <footer>Copyright © 2021 Shoping Cart</footer>,
        document.getElementById('portal-root'))
    );
}