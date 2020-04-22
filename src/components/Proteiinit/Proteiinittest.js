import React from 'react';
import Delete from '@material-ui/icons/Delete';
import moment from 'moment';
import './Proteiinittest.css';

function Proteiinittest (props) {
   

  let päivä = moment(props.data.päivä);

    return(
      <div className="proteiinit">
        <div className="proteiinit__ryhma">
          <div className="proteiinit__rivi">
            <div className="proteiinit__paiva">{päivä.format("D.M.Y")}</div>
          </div>
    
          <div className="proteiinit__rivi">
           <div className="proteiinit__grammat">{props.data.grammat} g</div>
           <div className="proteiinit__eurot">{props.data.eurot.toFixed(2)}€</div>
          </div>
          </div>
          
            <div className="proteiinit__linkki">
              <Delete onClick={()=> props.onDeleteItem(props.data.id)}/>
            </div>
    </div>
    );
  
  }

  export default Proteiinittest;