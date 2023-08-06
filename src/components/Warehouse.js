import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import Data from '../assets/data.csv';
import Papa from 'papaparse';
import Header from './Header';
import '../App.css';
import Sidebar from './Sidebar';


const Warehouse = () => {

    const [dataX, setDataX] = useState();
    const [dataY, setDataY] = useState();

    useEffect(() => {
        Papa.parse(Data, {
            download: true,
            header: true,
            dynamicTyping: true,
            delimiter: "",
            complete: ((result) => {
                console.log(result.data);
                setDataX(result.data.map((item, index) => item[`CodingHours`]));
                setDataY(result.data.map((item, index) => item[`CoffeeCupsPerDay`]));
            })
        })
    }, [])


    const pieData = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
    }];

    const trace = {
        x: dataX,
        y: dataY,
        mode: 'markers+lines',
        type: "lines",
    }

    const dotTrace = {
        x: dataX,
        y: dataY,
        mode: 'markers',
        type: "lines",
    }
    const dotTraceData = [dotTrace]
    const traceData = [trace];
    return (
        <>
            <Header/>
            {/* <Sidebar/> */}

            <div className='right-panel'>
                <div className='graph'>


                    <Plot
                        data={traceData}
                        layout={{
                            autosize: false,
                            width: 800,
                            height: 350,
                            margin: {
                                l: 30,
                                r: 30,
                                b: 50,
                                t: 50,
                                pad: 4
                            },
                        }}
                    />
                </div>


            </div>
            <div className='left-panel'>
                <div className='pie-chart'>
                    <Plot
                        data={dotTraceData}
                        layout={{
                            autosize: false,
                            width: 700,
                            height: 350,
                            margin: {
                                l: 30,
                                r: 30,
                                b: 50,
                                t: 50,
                                pad: 4
                            },
                        }}
                    />
                </div>
            </div>

            <div className='pie'>
                {/* <Plot
                    style={{ paddingLeft: '20rem', paddingTop: '3rem' }}
                    data={pieData}
                    layout={{
                        autosize: false,
                        width: 500,
                        height: 300,
                        margin: {
                            l: 10,
                            r: 10,
                            b: 10,
                            t: 10,
                            pad: 4
                        },
                    }}
                /> */}


            </div>




        </>

    )
}

export default Warehouse