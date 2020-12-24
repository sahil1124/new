
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="image">
          <img className=" responsive img" src="/images/logo.png" alt="logo" />
        </div>

        <div className="wrapper">
          <div className="item1">
            <img className=" responsive " src="/images/1.png" alt="logo" />
          </div>
          <div className="item2">
            <h6>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
            <div className="item2_inner">
              <ul>
                <li><p> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p></li>
                <li><p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </p></li>
              </ul>

              <img className="responsive" src="/images/2.png" alt="2" />
              <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
          </div>
        </div>

        <div className="wrapper2">
          <p className="para"> INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
          <br />
          <div className="machine">
            <img className="responsive " src="/images/3.png" alt="3" />
            <p className="para">
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          </div>
        </div>

        <hr className="hr" />

        <h6 className="h6">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
        <p className="operation">CHEMICALS & PROCESS <span>|</span> POWER <span>|</span>  WATER & WASTE WATER <span>|</span>  OILS & GAS PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span>  PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span>  METAL & MINING <span>|</span>  FOOD & BEVERAGE <span>|</span>  PETROCHEMICAL & REFINERIES <span>|</span>  SOLAR <span>|</span>  BUILDING <span>|</span>  HVAC <span>|</span>  FIRE <span>|</span>  FIGHTING <span>|</span>  AGRICULTURE & RESIDENTIAL</p>

        <div className="footer">
          <div className="one" style={{ "cursor": "pointer" }}>
            <i className="fas fa-phone"></i> Toll Free 1800 200 1234
          </div>
          <div className="two" style={{ "cursor": "pointer" }}>
            <i className="fab fa-facebook"></i> www.facebook.com/cripumps
          </div>
          <div className="three" style={{ "cursor": "pointer" }}>
            <i className="fas fa-globe"></i> www.crigroups.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
