import React from 'react';
import Proteiinittest from '../Proteiinit/Proteiinittest';




import Content from '../Content/Content';

function Proteiinithistoria(props) {

  let itemData= props.data.filter(item => item.raakaaine === "proteiinit");
  
let rows = itemData.map(lisäys => {
  
    return (
      <Proteiinittest data={lisäys}
                      key={lisäys.id} 
                      onDeleteItem={props.onDeleteItem} />
    );
  }
  
  );
    return(
      <Content>
        <h2>Proteiinit historia</h2>
        {rows}
      </Content>
    );
  }
  

  export default Proteiinithistoria;