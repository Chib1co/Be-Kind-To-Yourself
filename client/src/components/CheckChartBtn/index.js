import React from 'react';
import "./CheckChart.css";


export default function CheckChartBtn(props) {
   
        return (
            <button className="check-chart" onClick={props.handleRouteCheckChart}>Check last 7 days score chart</button>
  
        )
    
}
