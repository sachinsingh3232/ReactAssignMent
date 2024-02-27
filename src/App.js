import logo from './asserts/logo.png';
import one from './asserts/1.png';
import two from './asserts/2.png';
import three from './asserts/3.png';
import './App.css';
import { IoIosCall } from "react-icons/io";
import { FaFacebookF ,FaGlobe } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className='top'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='main'>
        <div className='left'>
          <img src={one} className="trophy" alt="one" />
        </div>
        <div className='right'>
          <span className='head'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</span>
          <div className='content'>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            <img src={two} className="photo" alt="two" />
            <span>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</span>
          </div>
        </div>
      </div>
      <span>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</span>
      <div className='bottom'>
        <img src={three} className="three" alt="three" />
        <span style={{ marginTop: "10px" }}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</span>
      </div>
      <hr style={{ width: "90%", color: "red", marginTop: "10px", marginBottom: "10px" }} />
      <div className='info'>
        <span className='head'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</span>
        <span className='line'>CHEMICALS & PROCESS <span className='vertical'>|</span> POWER <span className='vertical'>|</span> WATER & WASTE WATER <span className='vertical'>|</span> OILS & GAS <span className='vertical'>|</span> PHARMA <span className='vertical'>|</span> SUGARS & DISTILLERIES <span className='vertical'>|</span> PAPER & PULP <span className='vertical'>|</span> MARINE & DEFENCE <span className='vertical'>|</span> METAL & MINING <span className='vertical'>|</span> FOOD & BEVERAGE <span className='vertical'>|</span> PETROCHEMICAL & REFINERIES <span className='vertical'>|</span> SOLAR <span className='vertical'>|</span> BUILDING <span className='vertical'>|</span> HVAC <span className='vertical'>|</span> FIRE FIGHTING <span className='vertical'>|</span> AGRICULTURE & RESIDENTIAL</span>
      </div>
      <div className='footer'>
        <div style={{ color: "white" }} className='icon'>
          <span class="circle" style={{marginRight:"5px"}}>
            <IoIosCall />
          </span>
          Toll free 1800 200 1234
        </div>
        <div style={{ color: "white" }} className='icon'>
          <span class="circle" style={{marginRight:"5px"}}>
            <FaFacebookF />
          </span>
          www.facebook.com/cripumps
        </div>
        <div style={{ color: "white" }} className='icon'>
          <span class="globe" style={{marginRight:"5px"}}>
            <FaGlobe size={25} />
          </span>
          www.crigroups.com
        </div>
      </div>
    </div>
  );
}

export default App;
