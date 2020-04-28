import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import './History.css';


function History (props){

  const reducer = (kkHävikki, nykyHävikki) => {
  const index = kkHävikki.findIndex(item => item.päivä ===  moment(nykyHävikki.päivä).format('YYYY-M'));

    if (index >=0) {
      kkHävikki[index].eurot = kkHävikki[index].eurot + nykyHävikki.eurot;
      kkHävikki[index].grammat = kkHävikki[index].grammat + nykyHävikki.grammat;
    } else {
      kkHävikki.push({päivä: moment(nykyHävikki.päivä).format('YYYY-M'), eurot:nykyHävikki.eurot, grammat:nykyHävikki.grammat});
    }
    return kkHävikki;
  }

 
 let kkHävikki = props.data.reduce(reducer, []);
 let rows = kkHävikki.map(item =>
  <div className="edeltäväkuukausi__row">
    <div>{item.päivä}</div>
    <div>{item.eurot} €</div>
    <div>{item.grammat} g</div>
  </div>
 )

 return(
   
  <Content>
    <div className="edeltäväkuukausi"><h3>Edellisten kuukausien kokonaishävikki</h3>
      {rows}
     </div>
  </Content>
 
);
}

 export default History;
