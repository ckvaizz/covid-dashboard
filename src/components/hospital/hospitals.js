import React, { useEffect, useState } from 'react';
import './hospitals.css';
import Axios from 'axios'
import Corona from '../../images/coro.gif'
import {Helmet} from 'react-helmet'
const Hospitalpage = () => {
    const [apiData,setApiData] = useState([])
    const [allStates,setAllStates] = useState([])
    const [selectedState,setSelectedState] =useState('')
    let dis=[]
    const allStateOBj = {
        "Andaman and Nicobar Islands":"AN","Andhra Pradesh":"AP","Arunachal Pradesh":"AR","Assam":"AS","Bihar":"BR","Chandigarh":"CH","Chhattisgarh":"CT",
        "Dadra and Nagar Haveli":"DN","Delhi":"DL","Goa":"GA","Gujarat":"GJ","Haryana":"HR","Himachal Pradesh":"HP","Jammu and Kashmir":"JK","Jharkhand":"JH",
        "Karnataka":"KA","Kerala":"KL","Lakshadweep":"LD","Madhya Pradesh":"MP","Maharashtra":"MH","Manipur":"MN","Meghalaya":"ML","Mizoram":"MZ","Nagaland":"NL","Odisha":"OR","Puducherry":"PY"
        ,"Punjab":"PB","Rajasthan":"RJ","Sikkim":"SK","Tamil Nadu":"TN","Telangana":"TG","Tripura":"TR","Uttar Pradesh":"UP","Uttarakhand":"UT","West Bengal":"WB"
    }
    useEffect( ()=>{
        Axios.get('https://life-api.coronasafe.network/data/hospital_clinic_centre_verified.json').then(async resp=>{
            setApiData(resp.data.data);
           
                await Promise.all(resp.data.data.map(async(d,k)=>{
                   // console.log(typeof(allStates[0]))
                   
                   setAllStates(arr=>[...arr,d.state])
                //    else console.log(existing)
                
                
                    
        }) )
       // setAllStates([...new Set(allStates)])
      
             
    })
             // setAllstate(Object.keys(allStateOBj))
      
    },[])

    const stateChangeHandler = e=>{
        if(e.target.value === "") return  setSelectedState('')
        setSelectedState(e.target.value)
    }
    return(
        <div className="hospital-main">
            <Helmet>
                <title>Hospitals</title>
                <meta name='description' content='All the news about corona hospitals' />
            </Helmet>
            <h2>Hospitals</h2>
            <select onChange={stateChangeHandler}> 
            <option  value="">State</option>
            {
                allStates.length !==0?
                
                allStates.map((e,k)=>{
                    return<option key={k} value={e}>{e}</option>
                }):''
            }
                    
                   
            </select>
            <div className="hos-card-main">
                {
                    selectedState && apiData?
                    apiData.map(d=>{
                        return(
                            d.state === selectedState ?
                            <div className="hos-card">
                            <h5>{d.availability}</h5>
                            <h5>Bed Availabilty</h5>
                            <h5>{d.email1===null?d.email2:d.email1}</h5>
                            <h5>{d.phone1===null?d.phone2:d.phone1}</h5>
                            <h5>{d.varificationStatus}</h5>
                            <h5>{d.state}</h5>
                            <h5>{d.district}</h5>   
                     <div className="card1">
                         <h3>{d.name}</h3>
                         <h4>{d.pointOfContact}</h4>
                         <h6>{d.comment}</h6>
                     </div>
                 </div>
                                
                            : ''
                        
                        )
                            
                        
                        
                    }): <div className="selectPlease"> 
                    <h2>Please select state .. </h2>
                                <img src={Corona} alt=""/>
                 </div>
                }
            </div>
            
            
        </div>
 

        
    )
}



export default Hospitalpage;