import "./styles.css";
function Cart(props) {
  return (
    <>
      <div className="cart-container">
        <h2 className="heading-cart">Cart Total</h2>
        <div className="cart-item">
          <h2 className="items">Item</h2>
          <h2 className="items">Item-name</h2>
          <h2 className="items">Price</h2>
        </div>
        <ul className="cart-item">
          <li>
            <img className="items img-cart" src={props.img} alt=""></img>
            <h4 className="items">{props.item}</h4>
            <h4 className="items">{props.price}</h4>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Cart;
