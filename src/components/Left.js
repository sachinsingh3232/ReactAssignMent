import React from 'react'
import "../App.css"
import one from '../asserts/1.png';

const Left = () => {
    return (
        <div className='left'>
            <img src={one} className="trophy" alt="one" />
        </div>
    )
}

export default Left