import React from 'react';
import './ambulance.css';
import emergencyimg from '../../images/emergency5.jpg';


const Ambulance = () => {
    return(
        <div className="amb-main">
            <h2>Ambulance</h2>
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
            <div className="img-one">
            <img src={emergencyimg} alt="ll"/>
            </div>
            
            <div className="amb-card1">
            <div className="amb-card1-sec1">
                <h3>District</h3>
                <h4>Area</h4>
                <h4>Phone</h4>
            </div>
            <div className="amb-card1-sec2">
                <h4>Lorem ipsum, or lipsum as it is sometimes known,
                             is dummy text used in laying out print,</h4>
            </div>
            </div>

            <div className="amb-card2">
            <div className="amb-card2-sec1">
                <h3>District</h3>
                <h4>Area</h4>
                <h4>Phone</h4>
            </div>
            <div className="amb-card2-sec2">
                <h4>Lorem ipsum, or lipsum as it is sometimes known,
                             is dummy text used in laying out print,</h4>
            </div>
            </div>

            <div className="amb-card3">
            <div className="amb-card3-sec1">
                <h3>District</h3>
                <h4>Area</h4>
                <h4>Phone</h4>
            </div>
            <div className="amb-card3-sec2">
                <h4>Lorem ipsum, or lipsum as it is sometimes known,
                             is dummy text used in laying out print,</h4>
            </div>
            </div>
        </div>
    )
}


export default Ambulance;