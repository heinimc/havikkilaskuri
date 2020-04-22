import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';

import './Viljat.css';

function Viljat (props) {
 
  let kuukausi = moment(props.kuukausi);

  const grammat = props.data.filter(item => item.raakaaine === "viljat").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "viljat").reduce((total, item) => total + item.eurot, 0);

  
  
    return(
      <Content>
          <div className="wheat"><h4>Viljat</h4>
          <div className="wheat__row">
            <div className="wheat__kuukausi">{kuukausi.format("MMMM")}</div>
          </div>
    
          <div className="wheat__row">
            <div className="wheat__g">{grammat ? grammat + " g" : " g"} </div>
            <div className="wheat__e">{eurot ? eurot + " €" : " €"} </div>
          </div>
      </div>

      </Content>
      
    );
  
  }
  export default Viljat;