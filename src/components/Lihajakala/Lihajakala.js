import React from 'react';

import './Lihajakala.css';


function Lihajakala (props) {
    return(
      <div className="lihajakala">Liha-ja kalatuotteet
      <div className="lihajakala__rivi">
        <div className="lihajakala__kuukausi">Toukokuu</div>
      </div>
  
      <div className="lihajakala__rivi">
        <div className="lihajakala__grammat">g</div>
        <div className="lihajakala__eurot">€</div>
      </div>
      </div>
    );
  
  }

export default Lihajakala;