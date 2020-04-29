import React from 'react';
import Button from '../buttons';

import './Header.css';


function Header (props) {
  return(
    <div className="header">
      <div>
      <h1>Hävikkilaskuri</h1>
    </div>
    <div>
    <Button onClick={props.onLogout}>logout</Button>
    </div>
    </div>
  );
}


export default Header;