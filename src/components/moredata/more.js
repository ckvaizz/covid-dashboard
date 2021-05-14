import React, { useEffect, useState } from 'react';
import './more.css';
import Axios from 'axios'
import Corona from '../../images/coro.gif'
const Moredata = () => {
   const [userData,setuserData] = useState({})
   const [apiData,setApiData] = useState({})
   const [allStates,setAllStates]= useState([])
   const [stateCode,setStateCode] = useState('')
   const [filteredData,setFilteredData] = useState([])
   const [selectedState,setSelectedState] = useState('')
   const [districts,setDistricts] = useState([])
   const [selectToday,setSelectToday] = useState(false)
      const allStateOBj = {
      "andaman and Nicobar Islands":"AN","andhra Pradesh":"AP","arunachal Pradesh":"AR","assam":"AS","bihar":"BR","chandigarh":"CH","chhattisgarh":"CT",
      "dadra and Nagar Haveli":"DN","delhi":"DL","goa":"GA","gujarat":"GJ","haryana":"HR","himachal Pradesh":"HP","jammu and Kashmir":"JK","jharkhand":"JH",
      "karnataka":"KA","kerala":"KL","lakshadweep":"LD","madhya Pradesh":"MP","maharashtra":"MH","manipur":"MN","meghalaya":"ML","mizoram":"MZ","nagaland":"NL","odisha":"OR","puducherry":"PY"
      ,"punjab":"PB","rajasthan":"RJ","sikkim":"SK","tamil Nadu":"TN","telangana":"TG","tripura":"TR","uttar Pradesh":"UP","uttarakhand":"UT","west Bengal":"WB"
  }

   useEffect(()=>{
      Axios.get(' https://api.covid19india.org/v4/min/data.min.json').then(resp=>{
                console.log(resp.data)
                setApiData(resp.data)
            
            setAllStates(Object.keys(allStateOBj))
            getLocaldata()
            })
   },[])


   function getLocaldata(){
      if(localStorage.getItem("stateData") !== null){
         setuserData( JSON.parse(localStorage.getItem("stateData")))
         
      } 
   }

   const selectionHandler = e =>{
      if(e.target.value === '') return setDistricts([''])
      setSelectedState(e.target.value)
         setStateCode(allStateOBj[e.target.value])
     setDistricts(Object.keys(apiData[allStateOBj[e.target.value]].districts))
   }
   const changeListdata=()=>{
      if(selectedState=='') return alert('Select state first')
     if(apiData[stateCode].delta) setSelectToday(true)
     else alert("Todays news not updated ... ")

     
   }
    return(
        <div className="more-main">
            <h2>Detailed List</h2>
            <select onChange={selectionHandler} >
                    <option value='' >Select state</option>
                     {
                        allStates?allStates.map(s=>{
                           return <option value={s}>{s}</option>
                        }):''
                     }
            </select>
            <div className="more-SelectToday" onClick={()=>{selectToday?setSelectToday(false):changeListdata()}}>{selectToday?"show total":'show todays'}</div> 
            <div className="more-table">
           
            {
               districts.length !==0?
            
                <table>
                <tr >
                   <th>Districts</th>
                    <th>Total Cases</th>
                    <th>Recovered</th>
                    <th>Tested</th>
                    <th>Vaccinated</th>
                    <th>Death</th>
                   
                </tr>
               {
                  
                  districts.map((data,key)=>{
                     return(
                        <tr>
                        <td>{data}</td>
                        <td>{selectToday?apiData[stateCode].districts[data].delta.confirmed:apiData[stateCode].districts[data].total.confirmed}</td>
                        <td>{selectToday?apiData[stateCode].districts[data].delta.recovered:apiData[stateCode].districts[data].total.recovered}</td>
                        <td>{selectToday?"Not available":apiData[stateCode].districts[data].total.tested?apiData[stateCode].districts[data].total.tested:'Not in collection'}</td>
                        <td>{selectToday?"Not available":apiData[stateCode].districts[data].total.vaccinated?apiData[stateCode].districts[data].total.vaccinated:'Not in collection'}</td>
                        <td>{selectToday?apiData[stateCode].districts[data].delta.deceased:apiData[stateCode].districts[data].total.deceased}</td>
                     </tr>
                     )
                  })
               }
                
               
                </table>
: <div className="selectPlease"> 
   <h2>Please select state .. </h2>
               <img src={Corona} alt=""/>
</div>
}
            </div>

        </div>
    )
}

export default Moredata;