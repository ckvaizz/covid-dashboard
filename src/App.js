import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Homepage from './components/Home/homepage'
import Hospitalpage from './components/hospital/hospitals'
import Medicinepage from './components/medicine/medicine'
import {BrowserRouter as Router,
Switch,
Route,
Redirect,} from "react-router-dom";

function App() {
  return (
    <div >
     <Navbar />
     <Footer/>
     <Router>
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
     </Switch>
     </Router>
    </div>
  );
}

export default App;
