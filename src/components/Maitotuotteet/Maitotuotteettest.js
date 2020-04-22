import React from 'react';
import Delete from '@material-ui/icons/Delete';
import moment from 'moment';
import './Maitotuotteettest.css';

function Maitotuotteettest (props) {
   

  let päivä = moment(props.data.päivä);
 

    return(
      <div className="maitotuotteet">
        <div className="maitotuotteet__ryhma">
          <div className="maitotuotteet__rivi">
            <div className="maitotuotteet__paiva">{päivä.format("D.M.Y")}</div>
          </div>
    
          <div className="maitotuotteet__rivi">
           <div className="maitotuotteet__grammat">{props.data.grammat} g</div>
           <div className="maitotuotteet__eurot">{props.data.eurot.toFixed(2)}€</div>
          </div>
          </div>
          
            <div className="maitotuotteet__linkki">
              <Delete onClick={()=> props.onDeleteItem(props.data.id)}/>
            </div>
    </div>
    );
  
  }

  export default Maitotuotteettest;