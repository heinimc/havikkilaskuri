import React from 'react';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import Content from '../Content/Content';
import './Chart.css';

function Chart(props) {

  const reducer = (groupedData, currentItem) => {
    const index = groupedData.findIndex(item => item.raakaaine === currentItem.raakaaine);
    if (index >=0) {
      groupedData[index].eurot = groupedData[index].eurot + currentItem.eurot;
    } else {
      groupedData.push({raakaaine:currentItem.raakaaine, eurot:currentItem.eurot});
    }
    return groupedData;
  }

let groupedData=props.data.reduce(reducer, []);


let doughnutData = {
  labels: groupedData.map(item => item.raakaaine),
  datasets:[{
    data:groupedData.map(item => item.eurot),
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#75f077'],
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
        <h3>Raaka-ainekohtaiset hävikit (€)</h3>
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