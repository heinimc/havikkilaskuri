import React from 'react';
import Content from '../Content/Content';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import stringHash from 'string-hash';
import './Chart.css';

function Chart(props) {

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


let doughnutData = {
  labels: kkHävikki.map(item => item.päivä),
  datasets:[{
    data:kkHävikki.map(item => item.eurot),
    backgroundColor:kkHävikki.map(item => "hsl(" + (stringHash(item.päivä) % 360) + ", 80%, 70%)"),
  }
]
}


  let linedata= props.data.map(item => ({x: item.päivä, y: item.grammat}) );

    let data = {
      datasets: [
        {
          label: "hävikit",
          data: linedata,
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