import React, {useState, useEffect} from 'react';
import { render} from 'react-dom';
import {useParams} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import API from "../utils/API"


export default function Chart() {
    const [options, setOptions] = useState({
        chart: {
            type: 'spline'
        },
        title: {
            text: "your emotion level "
        },
        series: [{ data: [] }]
    })

//    const {id} = useParams()

    useEffect((user_id) => {
    
        API.getResult(user_id)
        .then(res => {
            console.log(res)
            setOptions({ series: [{data: res.data.score}]})
        })
    }, [])

        // const options = {
        // chart: {
        //     type: 'spline'
        // },
        // title: {
        //     text: "your emotion level "
        // },
        // series: [
        //     {
        //         data: [1, 2, 3, 4, 5]
        //     }
        // ]
        // }


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

