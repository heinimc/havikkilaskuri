import React from 'react';

import Maitotuotteet from '../Maitotuotteet/Maitotuotteet';
import Proteiinit from '../Proteiinit/Proteiinit';
import Kasvikset from '../Kasvikset/Kasvikset';
import Viljat from '../Viljat/Viljat';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';
import { FloatingButton } from '../buttons';


function Raakaaineet(props) {

    return(
      <Content>
          <div className="raakaaineet">
            <Kasvikset data={props.data} />
            <Maitotuotteet data={props.data} />
            <Proteiinit data={props.data} />
            <Viljat data={props.data} />
          </div>

        <Link to="/lisää"><FloatingButton secondary>+</FloatingButton></Link>
      </Content>
      
    );
  }

  export default Raakaaineet;