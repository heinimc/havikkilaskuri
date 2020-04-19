import React from 'react';
import Kasviksettest from '../Kasvikset/Kasviksettest';

import Content from '../Content/Content';

function Kasviksethistoria(props) {

let rows = props.data.map(lisäys => {
  
    return (
      <Kasviksettest data={lisäys} key={lisäys.id} onDeleteItem={props.onDeleteItem} />
    );
  }
  

  );
    return(
      <Content>
        <h2>Kasvikset historia</h2>
        {rows}
      </Content>
    );
  }

  export default Kasviksethistoria;