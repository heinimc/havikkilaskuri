import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';
import './Proteiinit.css';


function Proteiinit (props) {

  let kuukausi = moment(props.kuukausi);

   //filtteröidään datasta ne hävikin lisäykset jotka koskevat proteiineja ja lasketaan niiden kokonaismäärä euroissa ja grammoissa yhteen

  const grammat = props.data.filter(item => item.raakaaine === "proteiinit").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "proteiinit").reduce((total, item) => total + item.eurot, 0);

  

    return(
      <Content>
      <div className="protskut"><h3>Proteiinit</h3>
        <div className="protskut__row">
          <div className="protskut__kuukausi">{kuukausi.format("MMMM YYYY")}</div>
        </div>
  
        <div className="protskut__row">
          <div className="protskut__grammat">{grammat ? grammat + " g" : " g"} </div>
          <div className="protskut__eurot">{eurot ? eurot + " €" : " €"} </div>
        </div>
        <div className="protskut__row">
          <Link to="/proteiinit">Proteiinit</Link>
        </div>
      </div>
      

    </Content>

    );
  
  }

export default Proteiinit;