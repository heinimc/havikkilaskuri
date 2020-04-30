import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';
import iconpiece from '../images/icon-piece.png';

import './Viljat.css';

function Viljat (props) {
 
  let kuukausi = moment(props.kuukausi);

   //filtteröidään datasta ne hävikin lisäykset jotka koskevat viljoja ja lasketaan niiden kokonaismäärä euroissa ja grammoissa yhteen

  const grammat = props.data.filter(item => item.raakaaine === "viljat").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "viljat").reduce((total, item) => total + item.eurot, 0);

      return(
      <Content>
      <div className="wheat">
        <div className="wheat__image">
        <Link to="/viljat"><div><img src = {iconpiece}alt="viljat"/></div></Link>
        </div>
        <div className="wheat__row">
          <div className="wheat__kuukausi">{kuukausi.format("MMMM YYYY")}</div>
          <div className="wheat__grammat">{grammat ? grammat + " g" : " g"} </div>
          <div className="wheat__eurot">{eurot.toFixed(2) ? eurot.toFixed(2) + " €" : " €"} </div>
        </div>
      </div>
      </Content>
      
    );
  
  }
  export default Viljat;