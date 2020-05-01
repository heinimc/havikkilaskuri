import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';
import iconmilk from '../images/icon-milk.png';


import './Maitotuotteet.css';

function Maitotuotteet (props) {
  
  let vuosi = moment(props.vuosi);

  //filtteröidään datasta ne hävikin lisäykset jotka koskevat kasviksia ja lasketaan niiden kokonaismäärä euroissa ja grammoissa yhteen
  const grammat = props.data.filter(item => item.raakaaine === "maitotuotteet").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "maitotuotteet").reduce((total, item) => total + item.eurot, 0);

  //koodista puuttuu osa,jossa on otettu jokaisen raaka-aineen lisäykset vuosittain ja ne määrät näkyvät etusivulla. Nyt sivulla on vuosi 2020//
  //mutta se tulee sisältämään myös lisäykset ensi vuodelle. Tosiasiassa etusivulla on siis hävikin kokonaismäärä sovelluksen käyttöönotosta
  //alkaen

  
    return(
      <Content>
      <div className="maidot">
        <div className="maidot__image">
        <Link to="/maitotuotteet"><div><img src = {iconmilk}alt="maitotuotteet"/></div></Link>
        </div>
        <div className="maidot__row">
          <div className="maidot__kuukausi">Vuosi {vuosi.format("YYYY")}</div>
          <div className="maidot__grammat">{grammat ? grammat + " g" : " g"} </div>
          <div className="maidot__eurot">{eurot.toFixed(2) ? eurot.toFixed(2) + " €" : " €"} </div>
        
          
        </div>
      </div>

    

      </Content>
    );
  
  }

export default Maitotuotteet;

  
  