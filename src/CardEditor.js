import React, { useState } from 'react'; 
 import './App.css';


function CardEditor(props) {
  const [front, setFront] = useState(''); //keeps track of the state of the front of the card, initializes it to an empty string
  const [back, setBack] = useState('');

  const addCard = (card) => {
    props.addCard(card);
    setFront('');
    setBack('');
  };

  const deleteCard = (index) => {
    props.deleteCard(index);
  };

  const cards = props.cards.map((card, index) => {
    return (
      <tr key={card.id}>
        <td>{card.front}</td>
        <td>{card.back}</td>
        <td><button type="button" onClick={() => deleteCard(index)}>delete card</button></td>
      </tr>
    );
  });

  return (
    //creates header
    <div className = "CardEditor"> 
      <h2> Card Editor</h2> 
      <div className= "input-table">
      <table>
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cards}
        </tbody>
      </table>
      </div>
      <br />
      <div className = "input-components">
        <input placeholder="front of card" value={front} onChange={(e) => setFront(e.target.value)} />
        <input placeholder="back of card" value={back} onChange={(e) => setBack(e.target.value)} />
        <button type="button" onClick={() => addCard({ front, back })}>add card</button>
        <hr />
      </div>
      <div className="card-mode-button">
        <button type="button" onClick={() => props.switchMode()}>switch to card viewer</button>
      </div>
    </div>

  );
}

export default CardEditor;