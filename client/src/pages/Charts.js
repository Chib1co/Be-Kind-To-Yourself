import React from 'react';
import { render } from 'react-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        <Container>
            <Row>
                <Col>
        <div className="chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={options} />
        </div>
        </Col>
        </Row>
        </Container>

    )
    
    

};

render(<Chart />, document.getElementById('root'));

