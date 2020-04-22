import React from 'react';
import Viljattest from '../Viljat/Viljattest';

import Content from '../Content/Content';


function Viljathistoria(props) {
  
  let itemData= props.data.filter(item => item.raakaaine === "viljat");
  
  let rows = itemData.map(lisäys => {

  
    return (
      <Viljattest data={lisäys} 
                     key={lisäys.id} 
                     onDeleteItem={props.onDeleteItem} />
    );
  }
  
  );
    return(
      <Content>
        <h2>Viljat historia</h2>
        {rows}
      </Content>
    );
  }
  
  export default Viljathistoria;