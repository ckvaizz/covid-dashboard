import React from 'react';
import './homepage.css';
import Banner from "../../images/covid3.jpg"
const Homepage = () => {
    return(
       <div>
       <div className="H-main">
           <div className="H-img">
        <img src={Banner} alt=""/>
          <div className="H-img-text">
              <h1>
                  Stay Safe 
              </h1>
              <h1>Save Life</h1>
          </div>
        
           </div>
           <div className="H-dailyUpdate">
        <div >


           </div>
           <div className="H-btn">
           <div className="H-btn-hos"><p>Hospital</p></div>
           <div className="H-btn-med"><p>Medicine</p></div>
           <div className="H-btn-amb"><p>Ambulance</p></div>
           <div className="H-btn-mr"><p>More</p></div>
       
           </div>
           </div>
       </div>
       </div>

    )
}

export default Homepage;