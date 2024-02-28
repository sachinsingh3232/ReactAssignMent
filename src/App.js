import './App.css';
import Right from './components/Right';
import Left from './components/Left';
import Bottom from './components/Bottom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Left />
        <Right />
      </div>
      <span>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</span>
      <Bottom />
      <hr style={{ width: "90%", color: "red", marginTop: "10px", marginBottom: "10px" }} />
      <Footer />
    </div>
  );
}

export default App;
