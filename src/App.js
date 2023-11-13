import React, { useState } from 'react'
import Navbar from './components/Navbar'
 import TextForm from './components/TextForm'
import About from './components/About';
import Home from './components/Home'; 
import Audio from './components/Contactform';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
const[mode,setmode]=useState('white');
const togglemode=()=>
{
  if(mode==='white')
  {
    setmode('green');
    document.body.style.backgroundColor='green';
    document.body.style.width='100';
    
  }
    else
    {

    
    setmode('white')
    document.body.style.backgroundColor='white';

    }
}
  return (
    <>
    
      <Router>
     <Navbar mode={mode} togglemode={togglemode}/> 
    
     <div className="container" >
     <Routes>
    <Route path='/' element={<Home/>}/> 
   
    <Route path='/textform' element={<TextForm/>}/>     
    <Route path="/about" element={<About/>}/> 
    <Route path='/blog' element={<Blog/>}/>     
    <Route path="/Audio" element={<Audio/>}/> 
    <Route path="/login" element={<Login/>}/>  
    <Route path="/signup" element={<Signup/>}/>  
    </Routes>
  </div>
  <br/>
  </Router>


    </>

      

  );
}
export default App;