import React from 'react';

import { Link } from 'react-router-dom';

import Maitotuotteet from '../Maitotuotteet/Maitotuotteet';
import Lihajakala from '../Lihajakala/Lihajakala';
import Kasvikset from '../Kasvikset/Kasvikset';
import Viljat from '../Viljat/Viljat';

import { FloatingButton } from '../buttons';
import Content from '../Content/Content';

function Raakaaineet(props) {

    return(
      <Content>
          <div className="raakaaineet">
          <Link to="/kasvikset"><div className="kasvikset__nappi">Kasvikset</div></Link>
        <Kasvikset />
        <Link to="/lihajakala"><div className="lihajakala__nappi">Liha ja kala</div></Link>
        <Lihajakala />
        <Link to="/maitotuotteet"><div className="maitotuotteet__nappi">Maitotuotteet</div></Link>
        <Maitotuotteet />
        <Link to="/viljat"><div className="viljat__nappi">Viljat</div></Link>
        <Viljat />
        </div>
        <Link to="/lisää"><FloatingButton secondary>+</FloatingButton></Link>
      </Content>
      
  
  
    );
  }

  export default Raakaaineet;