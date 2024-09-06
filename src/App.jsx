import './App.css'
import { GiStrawberry } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import NavBar from './components/NavBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


function App() {

  const [showNavBar,setShowNavBar] = useState(false);

  return (
   <div className="myApp">
      <header id='main-header'> 
          <div id='AiOutlineMenu'>
            <AiOutlineMenu onClick={() => setShowNavBar(!showNavBar)}/>
          </div>
          <GiStrawberry />
      </header>
    <NavBar show = {showNavBar}/>
    <Outlet/>
   </div>

   
  )
}

export default App
