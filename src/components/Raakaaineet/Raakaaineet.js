import React from 'react';

import { Link } from 'react-router-dom';

import Maitotuotteet from '../Maitotuotteet/Maitotuotteet';
import Proteiinit from '../Proteiinit/Proteiinit';
import Kasvikset from '../Kasvikset/Kasvikset';
import Viljat from '../Viljat/Viljat';
import Content from '../Content/Content';

function Raakaaineet(props) {

    return(
      <Content>
          <div className="raakaaineet">
          <Link to="/kasvikset"><div className="kasvikset__nappi">Kasvikset</div></Link>
        <Kasvikset data={props.data} />
        <Link to="/maitotuotteet"><div className="maitotuotteet__nappi">Maitotuotteet</div></Link>
        <Maitotuotteet />
        <Link to="/proteiinit"><div className="proteiinit__nappi">Proteiinit</div></Link>
        <Proteiinit data={props.data} />
        <Link to="/viljat"><div className="viljat__nappi">Viljat</div></Link>
        <Viljat />
        </div>
      </Content>
      
  
  
    );
  }

  export default Raakaaineet;