import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';


import './Maitotuotteet.css';

function Maitotuotteet (props) {

  
  let kuukausi = moment(props.kuukausi);

   //filtteröidään datasta ne hävikin lisäykset jotka koskevat maitotuotteita ja lasketaan niiden kokonaismäärä euroissa ja grammoissa yhteen

  const grammat = props.data.filter(item => item.raakaaine === "maitotuotteet").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "maitotuotteet").reduce((total, item) => total + item.eurot, 0);

  
    return(
      <Content>
      <div className="maidot"><h3>Maitotuotteet</h3>
        <div className="maidot__row">
          <div className="maidot__kuukausi">{kuukausi.format("MMMM YYYY")}</div>
        </div>
  
        <div className="maidot__row">
          <div className="maidot__grammat">{grammat ? grammat + " g" : " g"} </div>
          <div className="maidot__eurot">{eurot ? eurot + " €" : " €"} </div>
        
        <div className="maidot__row"></div>
          <Link to="/maitotuotteet">Maitotuotteet</Link>
        </div>
      </div>

    

      </Content>
    );
  
  }

export default Maitotuotteet;

  
  