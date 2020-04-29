import React from 'react';
import Viljattest from '../Viljat/Viljattest';

import Content from '../Content/Content';


function Viljathistoria(props) {
  //filteröidään datasta vain ne lisäykset jotka koskevat viljoja ja tehdään niistä oma taulukko, jonne menevät uudet viljahävikkilisäykset,
  //jokainen lisäys saa oman id:n,
  //jokainen lisäys on mahdollista poistaa
  
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
        <h3>Hävikinlisäykset/Viljat</h3>
        {rows}
      </Content>
    );
  }
  
  export default Viljathistoria;