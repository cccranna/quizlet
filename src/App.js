import React, { useState } from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

function App(props) { //defines functional component called App, returns JSX
  const [cards, setCards] = useState([ //create a state variable named cards, stores data for cards
    { front: 'front', back: 'back' }, //cards will hold current state value, setCards is function called to update state
    { front: 'front1', back: 'back1' },
  ]);

  const [editor, setEditor] = useState(true); //create state variable editor, initialized with true, controls whether the CardEditor or CardViewer component is displayed
//useState(true) means editor state is true, showing CardEditor
  const addCard = (card) => { //defines add card function, adds new card to cards array
    const newCards = cards.slice().concat(card); //cards.slice() creates a copy of current cards array
    setCards(newCards);
  };

  const deleteCard = (index) => { //defines delete function
    const newCards = cards.slice();
    newCards.splice(index, 1); //removes element @ given index
    setCards(newCards);
  };

  const switchMode = () => { //defines switchmode function, toggle editor state between true and false
    setEditor(!editor); //updates editor state to opposite value
  };

  return ( //render JSX
    <div>
      {editor ? <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} /> : <CardViewer switchMode={switchMode} />}
    </div>
    //checks value of editor, valid function receives their specific props

  );
}

export default App;