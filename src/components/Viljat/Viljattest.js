import React from 'react';
import Delete from '@material-ui/icons/Delete';
import moment from 'moment';
import './Viljattest.css';

function Viljattest (props) {
   

  let päivä = moment(props.data.päivä);
 

    return(
      <div className="viljat">
        <div className="viljat__ryhma">
          <div className="viljat__rivi">
            <div className="viljat__paiva">{päivä.format("D.M.Y")}</div>
          </div>
    
          <div className="viljat__rivi">
           <div className="viljat__grammat">{props.data.grammat} g</div>
           <div className="viljat__eurot">{props.data.eurot.toFixed(2)}€</div>
          </div>
          </div>
          
            <div className="viljat__linkki">
              <Delete onClick={()=> props.onDeleteItem(props.data.id)}/>
            </div>
    </div>
    );
  
  }

  export default Viljattest;