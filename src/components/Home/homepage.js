import React, { useEffect } from 'react';
import './homepage.css';
import Banner from "../../images/covid3.jpg"
import Axios from 'axios'
import MapImg from "../../images/map-gif.gif"
const Homepage = () => {
    const AllStates = [
        "Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh",
        "Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand",
        "Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry"
        ,"Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
   
        useEffect(()=>{
            Axios.get(' https://api.covid19india.org/v4/min/data.min.json').then(resp=>{
                console.log(Object.keys(resp.data))
            })
        },[])
     
    return(
       <>
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
           {/* H-selectState */}
            <div className="div-disable">
                <span>
                <input type="text" name="state" id="" autoComplete="off" placeholder="Select Your State"/>
                <input type="text"  name="district" autoComplete="off" placeholder="Select Your District"/>
                </span>
                <h1>
                    Please select your state and district to continue.
                </h1>
                <img src={MapImg} alt=""/>

            </div>
            {/* H-districtNews */}
            <div className="div-disable">
                <div className="H-disNewsText">
                    <h1>Kozhikode</h1>
                    <h5>Total-cases</h5>
                </div>
                <div className="H-disCards">
                    <div className="H-cardConfirmed">
                    <div>
                       <h3>Confirmed</h3>
                    </div>
                    <h5>12345678910.</h5>
                    </div>
                    <div className="H-cardRecoverd">
                    <div><h3>Recovered</h3></div>
                    <h5>12345678910.</h5>
                    </div>
                    <div className="H-cardDead">
                       <div> <h3>Death</h3></div>
                       <h5>12345678910.</h5>

                    </div>
                </div>
            </div>
            {/* .H-stateNews */}
            <div className="div-disable">
                <div className="H-stateNewsText">
                    <h1>kerala</h1>
                    <h5>Total-cases</h5>
                </div>
                <div className="H-disCards">
                    <div className="H-cardConfirmed">
                    <div>
                       <h3>Confirmed</h3>
                    </div>
                    <h5>0987654321.</h5>
                    </div>
                    <div className="H-cardRecoverd">
                    <div><h3>Recovered</h3></div>
                    <h5>0987654321.</h5>
                    </div>
                    <div className="H-cardDead">
                       <div> <h3>Death</h3></div>
                       <h5>0987654321.</h5>

                    </div>
                </div>
            </div>
            {/* H-dailycase */}
            <div className="div-disable">
                <h1>Today-cases</h1>
                <div className="H-dailydistrict">
                    <h4>Kozhikode</h4>
                    <h5 >Confirmed : 12345678,</h5>
                    <h5 style={{color:'red'}}>Death : 123456,</h5>
                    <h5>Recoverd : 1234567833.</h5>
                </div>
                <div className="H-dailystate">
                <h4>andamanniko bar iceland</h4>
                <h5 >Confirmed : 12345678,</h5>
                    <h5 style={{color:'red'}}>Death : 123456,</h5>
                    <h5>Recoverd : 1234567833.</h5>
                </div>
            </div>
            <div className="H-dailyloading">
                <h1>Daily update is waiting , Please check after some TIMES..</h1>
            </div>
            
            </div>
        
           <div className="H-btn">
           <div className="H-btn-hos"><p>Hospital</p></div>
           <div className="H-btn-med"><p>Medicine</p></div>
           <div className="H-btn-amb"><p>Ambulance</p></div>
           <div className="H-btn-mr"><p>More</p></div>
        
           </div>
           </div>
           
       </>
    )
}

export default Homepage;