import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import Data from '../assets/data.csv';
import Papa from 'papaparse';

const Warehouse = () => {

    const [dataX, setDataX] = useState()
    const [dataY, setDataY] = useState()

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

    const trace = {
        x: dataX,
        y: dataY,
        // mode:'markers',
        type: "lines",
    }
    const data3 = [trace];
    return (
        <>
            <Plot
                data={data3}
                layout={{ title: 'A Fancy Plot' }}
            />    
            </>

    )
}

export default Warehouse