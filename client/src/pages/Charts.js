import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


export default function Chart() {

    
        const options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: "your emotion level "
        },
        series: [
            {
                data: [1, 2, 3, 4, 5]
            }
        ]
        }


    return (
        <div className="chart">
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={options} />
        </div>

    )
    
    

};

render(<Chart />, document.getElementById('root'));

