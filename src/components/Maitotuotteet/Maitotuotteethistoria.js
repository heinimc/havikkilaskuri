import React from 'react';
import Maitotuotteettest from '../Maitotuotteet/Maitotuotteettest';

import Content from '../Content/Content';


function Maitotuotteethistoria(props) {

  //filteröidään datasta vain ne lisäykset jotka koskevat maitotuotteita ja tehdään niistä oma taulukko, jonne menevät uudet maitotuotteidenhävikkilisäykset,
  //jokainen lisäys saa oman id:n,
  //jokainen lisäys on mahdollista poistaa
  
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
        <h3>Hävikinlisäykset/Maitotuotteet</h3>
        {rows}
      </Content>
    );
  }
  
  export default Maitotuotteethistoria;