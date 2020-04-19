import React from 'react';

import './Viljat.css';


function Viljat (props) {
    return(
      <div className="viljat">Viljatuotteet
        <div className="viljat__rivi">
          <div className="viljat__kuukausi">Toukokuu</div>
        </div>
  
        <div className="viljat__rivi">
          <div className="viljat__grammat">g</div>
          <div className="viljat__eurot">€</div>
        </div>
  
      </div>
    );
  
  }

  export default Viljat;