
import React from 'react';

import './Maitotuotteet.css';

function Maitotuotteet (props) {
    return(
      <div className="maitotuotteet">Maitotuotteet
      <div className="maitotuotteet__rivi">
        <div className="maitotuotteet__kuukausi">Toukokuu</div>
      </div>
  
        <div className="maitotuotteet__rivi">
          <div className="maitotuotteet__grammat">g</div>
          <div className="maitotuotteet__eurot">€</div>
        </div>
      </div>
    );
  
  }

export default Maitotuotteet;