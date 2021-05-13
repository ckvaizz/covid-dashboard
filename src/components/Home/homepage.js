import React, { useEffect, useState } from 'react';
import './homepage.css';
import Banner from "../../images/covid3.jpg"
import Axios from 'axios'
import MapImg from "../../images/map-gif.gif"
import CoronaGif from "../../images/corona-gif.gif"
import {Redirect,useHistory} from 'react-router-dom';
 const Homepage = () => {
    //To store user's state and districts
    const [Userdata,setUserData] = useState("")
    const [searchState,setSearchState]= useState([])
    const [SelectedUserState,setSelecteduserState]=useState("")
    const [showingDiv,setShowingDiv]= useState('')
    const [apiData,setApiData] = useState([])
    const [filtered,SetFiltered] = useState([])
    const [districts,setDistricts] = useState([])
    const [toDayUpdate,setTodayUpdate]= useState(false)
    const [stateCode,setStateCode] = useState('')
    const [AllStates,setAllstates]=useState([])
 
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
            getLocalUserdata();
            setAllstates(Object.keys(allStateOBj))

            })
        },[])
        
        

       
        //to get local user data from locally
          function  getLocalUserdata(){
            if(localStorage.getItem("stateData") !== null) {
                setUserData( JSON.parse(localStorage.getItem("stateData")))
                setShowingDiv('dis')
                setStateCode(allStateOBj[JSON.parse(localStorage.getItem("stateData")).state])
                setTodayStatus()
            }
        }
        //
        const inputStateHandler= e =>{
            if(e.target.value === "") return setSearchState([])
             setSearchState(AllStates.filter(s=>s.includes(e.target.value)))
            
        }
        //
        const selectedStateHandler= state=>{
            setSelecteduserState(state)
            searchState.length=0;
               SetFiltered(apiData[allStateOBj[state]])
              
        }
        const DisArrayHandler=()=>{
            if(filtered.length ===0) return alert("Select your state first !!")
            setDistricts(Object.keys(filtered.districts))
        }
        const selecteddistrictHandler=district=>{
            localStorage.setItem("stateData",JSON.stringify({state:SelectedUserState,district:district}))
            setUserData({state:SelectedUserState,district:district})
            setShowingDiv("dis")
            setStateCode(allStateOBj[JSON.parse(localStorage.getItem("stateData")).state])
            setTodayStatus()
            
        }
        const divNextHandler=()=>{
            if(showingDiv === 'dis') setShowingDiv('sta')
            else if(showingDiv=== 'sta') setShowingDiv('tod')
            else setShowingDiv('dis')
        }
       function setTodayStatus(){
           let today = new Date().toDateString()
           let updatedDay = apiData[stateCode]?new Date(apiData[stateCode].meta.last_updated).toDateString():setTimeout(()=>{setTodayStatus()},2000)
           
           if(today===updatedDay) return setTodayUpdate(true)
            
           
       }
       
       
        
        
     


    const history=useHistory()
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
               <div className={Userdata!=""?"H-nextbtn":"div-disable"} onClick={divNextHandler}> next  &#10145;</div>
           {/* H-selectState */}
            <div className={Userdata == ""?" H-selectState":"div-disable"}>
                <span>
                <input type="text" name="state" id="" onChange={inputStateHandler} autoComplete="off" value={SelectedUserState!=""?SelectedUserState:null} placeholder="Select Your State"/>
                <input type="text"  name="district" onClick={DisArrayHandler} autoComplete="off" placeholder="Select Your District"/>
                </span>
                <div className={searchState.length==0 ?"div-disable":"H-searchreslt"}>
                   {searchState.length != 0 ?
                   searchState.map(d=>{
                      return  <h3 onClick={()=> selectedStateHandler(d) }>{d}</h3>
                   }):''

                }
                </div>
                <div className={districts.length !=0 ?"H-searchdistrict":"div-disable"}>
                   {
                       districts.length != 0 ?
                       districts.map(d=> {
                           return <h3 onClick={()=>selecteddistrictHandler(d)}>{d}</h3>
                       } ):''
                   }
                </div>
                <h1>
                    Please select your state and district to continue.
                </h1>
                <img src={MapImg} alt=""/> 

            </div>
            
            {/* H-districtNews */}
            <div className={showingDiv==="dis"?"H-districtNews":"div-disable"}>
                <div className="H-disNewsText">
                    <h1>{Userdata.district}</h1>
                    <h5>Total-cases</h5>
                </div>
                <div className="H-disCards">
                    <div className="H-cardConfirmed">
                    <div>
                       <h3>Confirmed</h3>
                    </div>
                    {/* {console.log(apiData[stateCode]?apiData[stateCode].districts[Userdata.district]:'',"koii")}  */}
                    <h5>{apiData[stateCode]?apiData[stateCode].districts[Userdata.district].total.confirmed:''}.</h5>
                    </div>
                    <div className="H-cardRecoverd">
                    <div><h3>Recovered</h3></div>
                    <h5>{apiData[stateCode]?apiData[stateCode].districts[Userdata.district].total.recovered:''}.</h5>
                    </div>
                    <div className="H-cardDead">
                       <div> <h3>Death</h3></div>  
                       <h5>{apiData[stateCode]?apiData[stateCode].districts[Userdata.district].total.deceased:''}.</h5>

                    </div>
                </div>
            </div>
            {/* .H-stateNews */}
            <div className={showingDiv==="sta"?"H-stateNews":"div-disable"}>
                <div className="H-stateNewsText">
                    <h1>{Userdata.state}</h1>
                    <h5>Total-cases</h5>
                </div>
                <div className="H-disCards">
                    <div className="H-cardConfirmed">
                    <div>
                       <h3>Confirmed</h3>
                    </div>
                    <h5>{apiData[stateCode]?apiData[stateCode].total.confirmed:''}.</h5>
                    </div>
                    <div className="H-cardRecoverd">
                    <div><h3>Recovered</h3></div>
                    <h5>{apiData[stateCode]?apiData[stateCode].total.recovered:''}.</h5>
                    </div>
                    <div className="H-cardDead">
                       <div> <h3>Death</h3></div>
                       <h5>{apiData[stateCode]?apiData[stateCode].total.deceased:''}.</h5>

                    </div>
                </div>
            </div>
            {/* H-dailycase */} 
            {console.log(apiData[stateCode]?apiData[stateCode].districts:'k')}
            {apiData[stateCode] && apiData[stateCode].districts[Userdata.district].delta ?
            <div className={showingDiv === "tod"?"H-dailycase":"div-disable"}>
                <h1>{toDayUpdate?"Today":"Yesterday"}-cases</h1>
                   <p style={{color:'red'}}>Todays-cases will update soon..</p> 
                <div className="H-dailydistrict">
                    <h4>{Userdata?Userdata.district:''}</h4>
                    
                    <h5 >Confirmed : {apiData[stateCode] ?apiData[stateCode].districts[Userdata.district].delta.confirmed:''},</h5>
                    <h5 style={{color:'red'}}>Death : {apiData[stateCode]?apiData[stateCode].districts[Userdata.district].delta.deceased:''},</h5>
                    <h5>Recoverd : {apiData[stateCode]?apiData[stateCode].districts[Userdata.district].delta.recovered:''}.</h5>
                </div>
                <div className="H-dailystate">
                <h4>{Userdata?Userdata.state:''}</h4>
                <h5 >Confirmed : {apiData[stateCode]?apiData[stateCode].delta.confirmed:''},</h5>
                    <h5 style={{color:'red'}}>Death : {apiData[stateCode]?apiData[stateCode].delta.deceased:''},</h5>
                    <h5>Recoverd : {apiData[stateCode]?apiData[stateCode].delta.recovered:''}.</h5>
                </div>
            </div> 
        :<div className={showingDiv==='tod'?'H-dailyloading':'div-disable'}>
        <h1>Daily-cases not updated , Please check after some TIMES..</h1>
        <img src={CoronaGif} alt=""/>
    </div>
}
            
            
           
            </div>
        
           <div className="H-btn">
           <div className="H-btn-hos" onClick={ () => history.push("/hospital")}><p>Hospital</p></div>
           <div className="H-btn-med" onClick={ () => history.push("/medicine")}><p>Medicine</p></div>
           <div className="H-btn-amb" onClick={ () => history.push("/ambulance")}><p>Ambulance</p></div>
           <div className="H-btn-mr" onClick={ () => history.push("/more")}><p>More</p></div>
       
           </div>
           
           </div>
           
       </> 
       

    )
}

export default Homepage;