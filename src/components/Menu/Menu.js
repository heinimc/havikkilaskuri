import React from 'react';
import { Link } from 'react-router-dom';

import ViewList from '@material-ui/icons/ViewList';
import History from '@material-ui/icons/History';
import PieChart from '@material-ui/icons/PieChart';


import './Menu.css';


    function Menu (props) {
    return(
      <div className="menu">
        <Link to="/"><div className="menu__nappi"><ViewList htmlColor="#fff" /></div></Link>
        <Link to="/history"><div className="menu__nappi"><History htmlColor="#fff"/></div></Link>
        <Link to="/chart"><div className="menu__nappi"><PieChart htmlColor="#fff" /></div></Link>
      </div>
    );
  }

export default Menu;