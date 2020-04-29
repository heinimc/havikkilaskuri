import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';
import './History.css';


function History (props){

  //Halutaan tallentaa kaikki tehdyt hävikinlisäykset kuukausittain ja näin nähdä paljonko hävikkiä kertyy kuukausitasolla

  // tehdään reducer-funktio, joka saa parametrikseen kkHävikki ja nykyHävikki. 
  //Indexillä käydään läpi päivät ja muutetaan tulos vuosi-kuukausi-muotoon.
  //Jos index on suurempi tai yhtäsuuri kuin 0 eli dataa löytyy, tallennetaan taulukkoon kkHävikki + nykyHävikki grammoista ja euroista, 
  //jos dataa ei ole, tallennetaan sillä hetkellä käsiteltävä nykyhävikki kkHävikkiin.
  // ja palautetaan kkHävikki.
  //samaa käytetään myös Chart-komponentissa kun tulostetaan donitsikaavio

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

  //kkHävikki saa reducen kanssa tyhjän taulukon, joka mäpätään uudeksi taulukoksi, joka sisältää päivät(jotka on koostettu ylempänä kuukaudeksi),
  //kyseisen kuukauden aikana hävikkiin mennet eurot ja grammat
 
 let kkHävikki = props.data.reduce(reducer, []);
 let rows = kkHävikki.map(item =>
  <div className="edeltäväkuukausi__row">
    <div>{item.päivä}</div>
    <div>{item.eurot.toFixed(2)} €</div>
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
