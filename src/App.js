import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Homepage from './components/Home/homepage'
import Hospitalpage from './components/hospital/hospitals'
import Medicinepage from './components/medicine/medicine'
import Ambulancepage from './components/ambulance/ambulance'
import Moredatapage from './components/moredata/more'
import {BrowserRouter as Router,
Switch,
Route,
Redirect,} from "react-router-dom";
import {Helmet} from 'react-helmet'
function App() {
  return (
    <div >
     
     <Footer/>
     <Router>
     <Navbar />
     <Helmet>
       <title>Covid-dashboard</title>
       <meta name='description' content='Get all leatest new about covid-19 ' />
     <meta name='keyword' content='Covid status,corona hospitals ,corona medicines , corona cases,all states in india ,latest covid update' />
     </Helmet>
      <Switch>
        <Route path="/" exact>
         <Homepage />
        </Route>
        <Route path="/hospital" exact>
          <Hospitalpage />
        </Route>
        <Route path="/medicine" exact>
          <Medicinepage />
        </Route>
        <Route path="/ambulance" exact>
          <Ambulancepage />
        </Route>
        <Route path="/more" exact>
          <Moredatapage />
        </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
