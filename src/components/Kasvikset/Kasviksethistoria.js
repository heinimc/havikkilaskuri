import React from 'react';
import Kasviksettest from '../Kasvikset/Kasviksettest';

import Content from '../Content/Content';

function Kasviksethistoria(props) {

  //filteröidään datasta vain ne lisäykset jotka koskevat kasviksia ja tehdään niistä oma taulukko, jonne menevät uudet kasvishävikkilisäykset,
  //jokainen lisäys saa oman id:n
  //jokainen lisäys on mahdollista poistaa

let itemData= props.data.filter(item => item.raakaaine === "kasvikset");
  
let rows = itemData.map(lisäys => {
  
    return (
      <Kasviksettest data={lisäys}
                     key={lisäys.id} 
                     onDeleteItem={props.onDeleteItem}
                     />
    );
  }
  
  );
    return(
      <Content>
        <h3>Hävikinlisäykset/Kasvikset</h3>
        {rows}
      </Content>
    );
  }
  

  export default Kasviksethistoria;