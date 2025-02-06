import React from 'react';

function CardViewer(props) { //defines function component
  return ( //returns JSX markup
    <div>
      <h2>card viewer</h2>
      <hr />
      <button type="button" onClick={() => props.switchMode()}>switch to card editor</button>
    </div>

  );
}

export default CardViewer;