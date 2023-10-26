import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const DoughnutChart = ({ answers }) => {

    const data = {
        labels: [],
        datasets: [{
            label: 'Answers',
            cutout: "70%",
            data: [answers, 15 - answers],
            backgroundColor: ["#438AF6", "rgba(67, 138, 246, 0.1)"]
        }]
    }

    const options = {
        responsive: true,
        legend: {
            display: false,
        }
    }
    const centerIconContainerStyle = {
        position: "relative",
        width: "200px", 
        height: "200px", 
      };
    
    const centerIconStyle = {
        width: "50px",
        height: "50px",
        position: "relative",
        bottom: "60%",
        left: "45%",
      };

    return (
        <div className={centerIconContainerStyle}>
            <Doughnut
                data={data}
                options={options}
            ></Doughnut>
            <img src='/images/score.png' style={centerIconStyle}/>
        </div>
    )
}

export default DoughnutChart