import React, { useEffect, useState } from 'react';
import './ambulance.css';
import emergencyimg from '../../images/emergency5.jpg';
import Axios from 'axios';


const Ambulance = () => {
    const [apiData,setApiData] = useState([])
    const [allStates,setAllStates] = useState([])
    const [selectedState,setSelectedState] =useState('')

    useEffect( ()=>{
        Axios.get('https://life-api.coronasafe.network/data/ambulance_verified.json').then(async resp=>{
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
        <div className="amb-main">
            <h2>Ambulance</h2>
            <select onChange={stateChangeHandler}> 
            <option  value="">State</option>
            {
                allStates.length !==0?
                
                allStates.map((e,k)=>{
                    return<option key={k} value={e}>{e}</option>
                }):''
            }
                    
                   
            </select>
            <div className="img-one">
            <img src={emergencyimg} alt="ll"/>
            </div>
        <div className="amb-card-main">
        {
                    selectedState && apiData?
                    apiData.map(d=>{
                        return(
                            d.state === selectedState ?
                          <div className="amb-card">
                            <div className="amb-sec1">
                                <h3>{d.district}</h3>
                                <h4>{d.area!==null?d.area:''}</h4>
                                <h4>{d.phone1===null?d.phone2:d.phone1}</h4>
                            </div>
                            
                            <h4>{d.comment}
                            </h4>
                            
                            </div>

                            : console.log('no')
                        
                            )
                                
                            
                            
                        }):''
                    }

            

          

        </div>

            
        </div>
    )
}


export default Ambulance;