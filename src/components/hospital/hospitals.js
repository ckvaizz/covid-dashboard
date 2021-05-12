import React from 'react';
import './hospitals.css';


const Hospitalpage = () => {
    return(
        <div className="hospital-main">
            <h2>Hospitals</h2>
            <select>
            <option value="0">State</option>
                    <option value="1">kerala</option>
                    <option value="2">Tamilnadu</option>
                    <option value="3">Karnataka</option>
                    <option value="4">Goa</option>
                    <option value="1">kerala</option>
                    <option value="2">Tamilnadu</option>
                    <option value="3">Karnataka</option>
                    <option value="4">Goa</option>
            </select>
            
            <div className="card1">
                <div className="card1-sec1">
                    <h3>Hospital</h3>
                    <h5>Doctor</h5>
                    <h6>description of hospital</h6>
                    
                </div>
                <div className="card1-sec2">
                    
                       <h5>Availabilty</h5>
                       <h5>Bed Availabilty</h5>
                       <h5>Email</h5>
                       <h5>Contact</h5>
                       <h5>Status</h5>
                       <h5>State</h5>
                       <h5>District</h5>
                    
                </div>
            </div>
            <div className="card2">
                <div className="card2-sec1">
                    <h3>Hospital</h3>
                    <h5>Doctor</h5>
                    <h6>description of something </h6>
                    
                </div>
                <div className="card2-sec2">
                    
                       <h5>Availabilty</h5>
                       <h5>Bed Availabilty</h5>
                       <h5>Email</h5>
                       <h5>Contact</h5>
                       <h5>Status</h5>
                       <h5>State</h5>
                       <h5>District</h5>
                    
                </div>
            </div>
 

        </div>
    )
}



export default Hospitalpage;