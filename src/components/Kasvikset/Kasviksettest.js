import React from 'react';
import Delete from '@material-ui/icons/Delete';
import moment from 'moment';
import './Kasviksettest.css';

function Kasviksettest (props) {
   

  let päivä = moment(props.data.päivä);

    return(
      <div className="kasvikset">
        <div className="kasvikset__ryhma">
          <div className="kasvikset__rivi">
            <div className="kasvikset__päivä">{päivä.format("D.M.Y")}</div>
          </div>
    
          <div className="kasvikset__rivi">
           <div className="kasvikset__grammat">{props.data.grammat} g</div>
           <div className="kasvikset__eurot">{props.data.eurot.toFixed(2)}€</div>
          </div>
          </div>
          
            <div className="kasvikset__linkki">
              <Delete onClick={()=> props.onDeleteItem(props.data.id)}/>
            </div>
    </div>
    );
  
  }

  export default Kasviksettest;