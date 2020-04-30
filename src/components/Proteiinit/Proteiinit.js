import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';
import iconproteins from '../images/icon-proteins.png';
import './Proteiinit.css';


function Proteiinit (props) {

  let kuukausi = moment(props.kuukausi);

   //filtteröidään datasta ne hävikin lisäykset jotka koskevat proteiineja ja lasketaan niiden kokonaismäärä euroissa ja grammoissa yhteen

  const grammat = props.data.filter(item => item.raakaaine === "proteiinit").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "proteiinit").reduce((total, item) => total + item.eurot, 0);

  

    return(
      <Content>
      <div className="protskut">
        <div className="protskut__image">
        <Link to="/proteiinit"><div><img src = {iconproteins}alt="proteiinit"/></div></Link>
        </div>
        <div className="protskut__row">
          <div className="protskut__kuukausi">{kuukausi.format("MMMM YYYY")}</div>
          <div className="protskut__grammat">{grammat ? grammat + " g" : " g"} </div>
          <div className="protskut__eurot">{eurot.toFixed(2) ? eurot.toFixed(2) + " €" : " €"} </div>        
        </div>
      </div>
      

    </Content>

    );
  
  }

export default Proteiinit;