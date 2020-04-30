import React from 'react';
import Content from '../Content/Content';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import stringHash from 'string-hash';
import './Chart.css';

//Donitsikaavioon tehdäänn redusoinnilla kuukausittainen hävikin määrä euroissa ja Line-kaaviossa esitetään hävikin määrä päiväkohtaisest 
//grammoissa.

function Chart(props) {

  //käytetään samaa funktiota kuin History-komponentissa

const reducer = (kkHävikki, nykyHävikki) => {
  const index = kkHävikki.findIndex(item => item.päivä ===  moment(nykyHävikki.päivä).format('YYYY-M'));

    if (index >=0) {
      kkHävikki[index].eurot = kkHävikki[index].eurot + nykyHävikki.eurot;
    } else {
      kkHävikki.push({päivä: moment(nykyHävikki.päivä).format('YYYY-M'), eurot:nykyHävikki.eurot});
    }
    return kkHävikki;
  }


 let kkHävikki = props.data.reduce(reducer, []);

//tehdään kkHävikki muuttujasta redusoimalla taulukko, jossa euromäärät näkyvät kuukausittain ja saatetaan ne donistikaavioon
//käytetään string-hashiä koska 12 eri väriä tarvitaan

let doughnutData = {
  labels: kkHävikki.map(item => item.päivä),
  datasets:[{
    data:kkHävikki.map(item => item.eurot),
    backgroundColor:kkHävikki.map(item => "hsl(" + (stringHash(item.päivä) % 360) + ", 80%, 70%)"),
  }
]
}

//tehdään viivakaavio, joka piirtää hävikin määrän päivien ja grammojen mukaan, mukaan reduceri, joka laskee kaikki saman päivän
//lisäykset yhdeksi merkinnäksi aikajanalle.


const reducer1 = (grammatTotal, currentItem) => {
  const index = grammatTotal.findIndex(item => item.päivä === moment(currentItem.päivä).format('YYYY-M'));

    if (index >=0) {
      grammatTotal[index].grammat = grammatTotal[index].grammat + currentItem.grammat;
    } else {
      grammatTotal.push({päivä: moment(currentItem.päivä).format('YYYY-M'), grammat:currentItem.grammat});
    }
    return grammatTotal;
  }


 let grammatTotal = props.data.reduce(reducer1, []);

    let data = {
      datasets: [
        {
          label: "hävikit",
          data: grammatTotal.map(item => ({x: item.päivä, y: item.grammat}) ),
          fill: false,
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderColor: 'rgba (0,0,0,0.2)'
        }
      ]
    }

    let options = {
      reponsive: true,
      maintainAspectRatio: false,
      scales:{
        xAxes:[
          {
            type: "time",
            time: {
              displayFormats: {
                day: 'D.M.Y',
                month: 'M.Y'
              }
            }
          }
        ]
      }
    }

    return(
      <Content>
        <div className="chart">
        <h3>Kuukausikohtaiset hävikit (€)</h3>
          <div className="chart__doughnutgraph">
            <Doughnut data={doughnutData} />
          </div>
          <h3>Päiväkohtaiset hävikit (g)</h3>
          <div className="chart__linegraph">
            <Line data={data} options={options} />
          </div>
        </div>
      </Content>
    );
  }

  export default Chart;