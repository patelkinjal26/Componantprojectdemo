import React from "react";
import wp from './whatsupp.png'
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router,Routes,Route , Link } from "react-router-dom";

function App(){
  var a=40
  var b=30
  return(
    <div>
  
     <Home/>
     <About/>
     <img src={wp} width={50} style={{backgroundColor:'white'}}/><br/>
     A value is {a}<br/>
     B value is {b}<br/>
     C value is {a + b}<br/>
     <Router>
      <Link to='/home'>Home</Link>|
      <Link to='/about'>About</Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>

     </Router>
    </div>
  )
}   
export default App;  