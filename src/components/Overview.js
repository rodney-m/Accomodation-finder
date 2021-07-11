import React, { useState, useEffect } from "react";
import PieChart from './PieChart'
import "./Overview.css"
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux"
import {increment} from '../actions'
function Overview() {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/hostels/')
            .then(response => {
                setData(response.data)
            })

    })
   
    return (
        <div className="Overview">
            {data.length > 0 &&
            <div className="pieCharts">
            <div><PieChart data={data[0]} /></div>
            <div><PieChart data={data[1]} /></div>
            <div><PieChart data={data[2]} /></div>
            <div><PieChart data={data[3]} /></div>
            {counter}
            <button onClick={() => dispatch(increment())}>+</button>
            </div>
            }      
        </div>
    )
}

export default Overview;