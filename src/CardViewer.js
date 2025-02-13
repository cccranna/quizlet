import React from 'react';
import CardEditor from './CardEditor';

function CardViewer(props) { //defines function component
    const { cards = [] } = props; //destructures props for easier access
    //initialized as empty array to avoid length error, but now cards are not properly being passed in
  


    return ( //returns JSX markup
    <div>
      <h2>card viewer</h2>
      <hr />
      <button type="button" onClick={() => props.switchMode()}>switch to card editor</button>

{/*check to make sure there are cards to render first */}
      {cards.length > 0 ? ( 
        cards.map((card) => (
            <div className ="front">
                <p>{card.front}</p> {/*display front of card in array */}
            </div>
        ))

    /* ":"acts as an else statement */
    ) : ( 
        <p>No cards available</p>
    )
    }
            
    </div>
  );
}

export default CardViewer;