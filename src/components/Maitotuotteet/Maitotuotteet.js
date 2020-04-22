import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';


import './Maitotuotteet.css';

function Maitotuotteet (props) {

  
  let kuukausi = moment(props.kuukausi);

  const grammat = props.data.filter(item => item.raakaaine === "maitotuotteet").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "maitotuotteet").reduce((total, item) => total + item.eurot, 0);

  
    return(
      <Content>
      <div className="maidot"><h4>Maitotuotteet</h4>
        <div className="maidot__row">
          <div className="maidot__kuukausi">{kuukausi.format("MMMM")}</div>
        </div>
  
        <div className="maidot__row">
          <div className="maidot__grammat">{grammat ? grammat + " g" : " g"} </div>
          <div className="maidot__eurot">{eurot ? eurot + " €" : " €"} </div>
        </div>
      </div>

    

      </Content>
    );
  
  }

export default Maitotuotteet;

  
  