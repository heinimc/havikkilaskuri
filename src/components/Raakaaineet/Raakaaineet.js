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
          <Link to="/kasvikset"><div className="kasvikset__nappi">Kasvikset</div></Link>
        <Kasvikset data={props.data} />
        <Link to="/maitotuotteet"><div className="maitotuotteet__nappi">Maitotuotteet</div></Link>
        <Maitotuotteet data={props.data} />
        <Link to="/proteiinit"><div className="proteiinit__nappi">Proteiinit</div></Link>
        <Proteiinit data={props.data} />
        <Link to="/viljat"><div className="viljat__nappi">Viljat</div></Link>
        <Viljat data={props.data} />
        </div>

        <Link to="/lisää"><FloatingButton secondary>+</FloatingButton></Link>


      </Content>
      
  
  
    );
  }

  export default Raakaaineet;