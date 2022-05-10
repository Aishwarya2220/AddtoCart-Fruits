import "./styles.css";
import Cards from "./Cards";
import CardItems from "./CardItems";
import Cart from "./Cart";
export default function App() {
  function addCardItems(CardItems) {
    return (
      <>
        <Cards
          key={CardItems.id}
          img={CardItems.img}
          item={CardItems.item}
          price={CardItems.price}
        />
      </>
    );
  }
  return (
    <>
      <div className="App">
        {CardItems.map(addCardItems)} <Cart />
      </div>
    </>
  );
}
