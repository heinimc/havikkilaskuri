import React from 'react';
import Proteiinittest from '../Proteiinit/Proteiinittest';




import Content from '../Content/Content';

function Proteiinithistoria(props) {

  //filteröidään datasta vain ne lisäykset jotka koskevat proteiineja ja tehdään niistä oma taulukko, jonne menevät uudet proteiinihävikkilisäykset,
  //jokainen lisäys saa oman id:n,
  //jokainen lisäys on mahdollista poistaa

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
        <h3>Hävikinlisäykset/Proteiinit</h3>
        {rows}
      </Content>
    );
  }
  

  export default Proteiinithistoria;