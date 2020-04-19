import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import Kasviksethistoria from '../Kasvikset/Kasviksethistoria';
import Kasviksettest from '../Kasvikset/Kasviksettest';
import Lomake from '../Lomake/Lomake';
import Lisää from '../Lisää/Lisää';

import './Kasvikset.css';

function Kasvikset (props) {
  //let rows = props.data.filter( item => item.grammat > props.grammat).map(lisäys => {

  let kuukausi = moment(props.kuukausi);
  //let grammat = (props.data.grammat);
  //let eurot = (props.data.eurot);
  
    return(
      <Content>
          <div className="veget"><h1>Kasvikset</h1>
          <div className="veget__row">
            <div className="veget__kuukausi">{kuukausi.format("MMMM")}</div>
          </div>
    
          <div className="veget__row">
            <div className="veget__g"></div>
            <div className="veget__e"></div>
          </div>
      </div>
      <Kasviksethistoria />
      <Kasviksettest />
      <Lomake />
      <Lisää />
      </Content>
    
      
    );
  
  }

  export default Kasvikset;