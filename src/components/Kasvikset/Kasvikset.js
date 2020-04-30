import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';
import iconvegetables from '../images/icon-vegetables.png';

import './Kasvikset.css';

function Kasvikset (props) {
 
  let kuukausi = moment(props.kuukausi);

  //filtteröidään datasta ne hävikin lisäykset jotka koskevat kasviksia ja lasketaan niiden kokonaismäärä euroissa ja grammoissa yhteen

  const grammat = props.data.filter(item => item.raakaaine === "kasvikset").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "kasvikset").reduce((total, item) => total + item.eurot, 0);
  
    return(
      <Content>
      <div className="veget">
        <div className="veget__image">
        <Link to="/kasvikset"><div><img src = {iconvegetables}alt="kasvikset"/></div></Link>
        </div>
        <div className="veget__row">
          <div className="veget__kuukausi">{kuukausi.format("MMMM YYYY")}</div>
          <div className="veget__grammat">{grammat ? grammat + " g" : " g"} </div>
          <div className="veget__eurot">{eurot.toFixed(2) ? eurot.toFixed(2) + " €" : " €"} </div>
        
          
        </div>
      </div>

    

      </Content>
    );
  
  }
  export default Kasvikset;