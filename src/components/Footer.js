import React from 'react'
import "../App.css"
import { IoIosCall } from "react-icons/io";
import { FaFacebookF, FaGlobe } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div style={{ color: "white" }} className='icon'>
                <span class="circle" style={{ marginRight: "5px" }}>
                    <IoIosCall />
                </span>
                Toll free 1800 200 1234
            </div>
            <div style={{ color: "white" }} className='icon'>
                <span class="circle" style={{ marginRight: "5px" }}>
                    <FaFacebookF />
                </span>
                www.facebook.com/cripumps
            </div>
            <div style={{ color: "white" }} className='icon'>
                <span class="globe" style={{ marginRight: "5px" }}>
                    <FaGlobe size={25} />
                </span>
                www.crigroups.com
            </div>
        </div>
    )
}

export default Footer