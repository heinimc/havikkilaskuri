import React from 'react';

import Content from '../Content/Content';
import Lomake from '../Lomake/Lomake';

import './Muokkaa.css';


function Muokkaa(props) {

    const index = props.data.findIndex(item => item.id === props.match.params.id);

    let itemData = props.data[index];

    return(
      <Content>

        <div className="muokkaa">

        <h2>Hävikin muokkaaminen</h2>
        <p> Match:{index}</p>

        <Lomake onFormSubmit={props.onFormSubmit} data={itemData} onDeleteItem={props.onDeleteItem} />

        </div>

      </Content>
    );
  }

  export default Muokkaa;