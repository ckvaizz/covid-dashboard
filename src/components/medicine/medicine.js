import React from 'react';
import './medicine.css';


const Medicine = () =>{
    return(
        <div className="med-main">
            <h2>Medicine</h2>
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
                <div className="medi-card1">
                    <div className="top-curve1">
                        <h2>Name</h2>
                        <h5>Lorem ipsum, or lipsum as it is sometimes known,
                             is dummy text used in laying out print, graphic or web designs.
                             The passage is attributed to an unknown 
                            </h5>

                    </div>
                    <h4>Address</h4>
                    <h4>District</h4>
                    <h4>City</h4>
                    <h4>Email</h4>
                    <h4>Phone</h4>
                </div>


                <div className="medi-card2">
                    <div className="top-curve2">
                        <h2>Name</h2>
                        <h5>Lorem ipsum, or lipsum as it is sometimes known,
                             is dummy text used in laying out print, graphic or web designs.
                             The passage is attributed to an unknown 
                            </h5>

                    </div>
                    <h4>Address</h4>
                    <h4>District</h4>
                    <h4>City</h4>
                    <h4>Email</h4>
                    <h4>Phone</h4>
                </div>

                <div className="medi-card3">
                    <div className="top-curve3">
                        <h2>Name</h2>
                        <h5>Lorem ipsum, or lipsum as it is sometimes known,
                             is dummy text used in laying out print, graphic or web designs.
                             The passage is attributed to an unknown 
                            </h5>

                    </div>
                    <h4>Address</h4>
                    <h4>District</h4>
                    <h4>City</h4>
                    <h4>Email</h4>
                    <h4>Phone</h4>
                </div>
        </div>
    )
}

export default Medicine;