import React, { useEffect, useState } from 'react';
import './medicine.css';
import Axios from 'axios'

const Medicine = () =>{ 
    const [apiData,setApiData] = useState([])
    const [allStates,setAllStates] = useState([])
    const [selectedState,setSelectedState] =useState('')

    useEffect( ()=>{
        Axios.get('https://life-api.coronasafe.network/data/medicine_verified.json').then(async resp=>{
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
        <div className="med-main">
            <div className="med-head-select">
            <h2>Medicine</h2>
            <select onChange={stateChangeHandler}> 
            <option  value="">State</option>
            {
                allStates.length !==0?
                
                allStates.map((e,k)=>{
                    return<option key={k} value={e}>{e}</option>
                }):''
            }
                    
                   
            </select>
            </div>
            <div className="medi-card-main">
            {
                    selectedState && apiData?
                    apiData.map(d=>{
                        return(
                            d.state === selectedState ?
                            <div className="medi-card1">
                
                    <div className="top-curve1">
                        <h2>{d.name}</h2>
                        <h5>{d.address}
                            </h5>

                    </div>
                    <h4>{d.comment}</h4>
                    <h4>{d.district}</h4>
                    
                    <h4>{d.emailId}</h4>
                    <h4>{d.phone1}</h4>
                </div>
                            : console.log('no')
                        
                            )
                                
                            
                            
                        }):''
                    }
                

               
            </div>

                
                
        </div>
    )
}

export default Medicine;