import React from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';
import { FloatingButton } from '../buttons';

import Content from '../Content/Content';
import Kasviksethistoria from '../Kasvikset/Kasviksethistoria';
import Lomake from '../Lomake/Lomake';
import Kasviksettest from '../Kasvikset/Kasviksettest';
import Lisää from '../Lisää/Lisää';

import './Proteiinit.css';


function Proteiinit (props) {

  let kuukausi = moment(props.kuukausi);

    return(
      <Content>
      <div className="protskut"><h4>Proteiinit</h4>
      <div className="protskut__row">
        <div className="protskut__kuukausi">{kuukausi.format("MMMM")}</div>
      </div>
  
      <div className="protskut__row">
        <div className="protskut__grammat">g</div>
        <div className="protskut__eurot">€</div>
      </div>
      </div>
      

<Link to="/lisää"><FloatingButton secondary>+</FloatingButton></Link>
</Content>

    );
  
  }

export default Proteiinit;