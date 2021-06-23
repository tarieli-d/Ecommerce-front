import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./style.css";
import Products from "./components/Products";
import Contact from "./components/Contact.js";
import Delivery from "./components/Delivery.js";
import About from "./components/About.js";


const App=()=>{
  return (
    <Router>
    <div>
  <header>
  <div className='menu'>
    <div className='options'><Link to="/">მთავარი</Link></div>
    <div className='options'><Link to="/products">პროდუქცია</Link></div>
    <div className='options'><Link to="/delivery">მიწოდების სერვისი</Link></div>
    <div className='options'><Link to="/about">ჩვენ შესახებ</Link></div>
    <div className='options'><Link to="/contact">საკონტაქტო ინფორმაცია</Link></div>
   </div>
  </header>

  <Switch>
         
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/delivery">
            <Delivery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

    <footer><div className='copyright'>©2021 ყველა უფლება დაცულია. ტარიელ დუიშვილი </div></footer>
   
    
  </div>
  </Router>
  );
}
export default App;
