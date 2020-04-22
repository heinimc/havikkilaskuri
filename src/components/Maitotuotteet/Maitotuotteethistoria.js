import React from 'react';
import Maitotuotteettest from '../Maitotuotteet/Maitotuotteettest';

import Content from '../Content/Content';


function Maitotuotteethistoria(props) {
  
let itemData= props.data.filter(item => item.raakaaine === "maitotuotteet");
  
let rows = itemData.map(lisäys => {
  
    return (
      <Maitotuotteettest data={lisäys} 
                     key={lisäys.id} 
                     onDeleteItem={props.onDeleteItem} />
    );
  }
  
  );
    return(
      <Content>
        <h2>Maitotuotteet historia</h2>
        {rows}
      </Content>
    );
  }
  
  export default Maitotuotteethistoria;