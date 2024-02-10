import { useState } from "react";
import "./App.css";

const cardArray = [
  { src: "public/img/image.jpg" },
  { src: "public/img/image3.jpg" },
  { src: "public/img/image3.jpg" },
];

function App() {
  const [cards, setcards] = useState([]);
  const [turns, setturns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardArray, ...cardArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setcards(shuffledCards);
    setturns(0);
  };

  return (
    <>
      <div className="App">
        <h1>Magic Match</h1>
        <button className="button">New Game</button>
      </div>
      <div className="grid">
        {cards.map((card)=>(
          <div className="card" key = {card.id}>
            <div></div></div>


        ))

      }</div>
    </>
  );
}

export default App;
