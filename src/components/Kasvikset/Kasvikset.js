import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';
import iconvegetables from '../images/icon-vegetables.png';

import './Kasvikset.css';

function Kasvikset (props) {
 
  let vuosi = moment(props.vuosi);

  //filtteröidään datasta ne hävikin lisäykset jotka koskevat kasviksia ja lasketaan niiden kokonaismäärä euroissa ja grammoissa yhteen
  const grammat = props.data.filter(item => item.raakaaine === "kasvikset").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "kasvikset").reduce((total, item) => total + item.eurot, 0);

  //koodista puuttuu osa,jossa on otettu jokaisen raaka-aineen lisäykset vuosittain ja ne määrät näkyvät etusivulla. Nyt sivulla on vuosi 2020//
  //mutta se tulee sisältämään myös lisäykset ensi vuodelle. Tosiasiassa etusivulla on siis hävikin kokonaismäärä sovelluksen käyttöönotosta
  //alkaen

  
    return(
      <Content>
      <div className="veget">
        <div className="veget__image">
        <Link to="/kasvikset"><div><img src = {iconvegetables}alt="kasvikset"/></div></Link>
        </div>
        <div className="veget__row">
          <div className="veget__kuukausi">Vuosi {vuosi.format("YYYY")}</div>
          <div className="veget__grammat">{grammat ? grammat + " g" : " g"} </div>
          <div className="veget__eurot">{eurot.toFixed(2) ? eurot.toFixed(2) + " €" : " €"} </div>
        
          
        </div>
      </div>

    

      </Content>
    );
  
  }
  export default Kasvikset;