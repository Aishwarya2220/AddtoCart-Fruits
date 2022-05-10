import { useState } from "react";
import "./styles.css";
import Cart from "./Cart";
function Cards(props) {
  const [listofitems, additems] = useState([]);
  function addItem(id, img, item, price) {
    const initialState = [...listofitems];
    initialState.push({
      id: id,
      img: img,
      item: item,
      price: price
    });
    console.log(initialState);
    return additems(initialState);
  }
  return (
    <>
      <div className="CardItemSet">
        <div className="container">
          <div className="item">
            <img src={props.img} alt="" />
            <h2>{props.item}</h2>
            <h3>{props.price}</h3>
            <button
              className="btn-grad"
              onClick={() =>
                addItem(props.id, props.img, props.item, props.price)
              }
            >
              Add to Cart
            </button>
          </div>
          {/* <div className="item">
            <img src={props.img} alt="" />
            <h2>{props.item}</h2>
            <h3>{props.price}</h3>
            <button className="btn-grad">Add to Cart</button>
          </div>
          <div className="item">
            <img src={props.img} alt="" />
            <h2>{props.item}</h2>
            <h3>{props.price}</h3>
            <button className="btn-grad">Add to Cart</button>
          </div> */}
          {listofitems.map((key, id) => {
            const { img, item, price } = key;
            return <Cart img={img} item={item} price={price} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Cards;
