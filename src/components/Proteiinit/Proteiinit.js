import React from 'react';

import moment from 'moment';

import Content from '../Content/Content';

import './Proteiinit.css';


function Proteiinit (props) {

  let kuukausi = moment(props.kuukausi);

  const grammat = props.data.filter(item => item.raakaaine === "proteiinit").reduce((total, item) => total + item.grammat, 0);
  const eurot = props.data.filter(item => item.raakaaine === "proteiinit").reduce((total, item) => total + item.eurot, 0);

  

    return(
      <Content>
      <div className="protskut"><h4>Proteiinit</h4>
      <div className="protskut__row">
        <div className="protskut__kuukausi">{kuukausi.format("MMMM")}</div>
      </div>
  
      <div className="protskut__row">
        <div className="protskut__grammat">{grammat ? grammat + " g" : " g"} </div>
        <div className="protskut__eurot">{eurot ? eurot + " €" : " €"} </div>
      </div>
      </div>
      

    </Content>

    );
  
  }

export default Proteiinit;