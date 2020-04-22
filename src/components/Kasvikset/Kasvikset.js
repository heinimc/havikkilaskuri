import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';

import './Kasvikset.css';

function Kasvikset (props) {
 
  let kuukausi = moment(props.kuukausi);

  const grammat = props.data.filter(item => item.raakaaine === "kasvikset").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "kasvikset").reduce((total, item) => total + item.eurot, 0);

  
  
    return(
      <Content>
          <div className="veget"><h4>Kasvikset</h4>
          <div className="veget__row">
            <div className="veget__kuukausi">{kuukausi.format("MMMM")}</div>
          </div>
    
          <div className="veget__row">
            <div className="veget__g">{grammat ? grammat + " g" : " g"} </div>
            <div className="veget__e">{eurot ? eurot + " €" : " €"} </div>
          </div>
      </div>

      

      </Content>
      
    );
  
  }
  export default Kasvikset;