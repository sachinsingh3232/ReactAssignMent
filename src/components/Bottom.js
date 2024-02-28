import React from 'react'
import "../App.css"
import three from '../asserts/3.png';

const Bottom = () => {
    return (
        <div className='bottom'>
            <img src={three} className="three" alt="three" />
            <span style={{ marginTop: "10px" }}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</span>
        </div>
    )
}

export default Bottom