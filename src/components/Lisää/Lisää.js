import React from 'react';

import Content from '../Content/Content';
import Lomake from '../Lomake/Lomake';

import './Lisää.css';


function Lisää(props) {
    return(
      <Content>

        <div className="lisää">

        <h2>Hävikin lisäys</h2>

        <Lomake onFormSubmit={props.onFormSubmit} onDeleteItem={props.onDeleteItem} />

        </div>

      </Content>
    );
  }

  export default Lisää;