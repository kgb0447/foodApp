import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/routes';
import Footer from './components/footer/Footer';

function App() {
  const [isShow,setIsShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true)
    },2000)
   
    
    return () => {
      setIsShow(false)
    }
  }, [])
  
  const PATHS = ["/","/signin","/login"];

  if(!isShow){
    return <img src={require('./assets/img/splash@2x.png')} className={"splash"} alt=""/>
  }
  
  return (
    <div className="App">
     <BrowserRouter>
        <Routes/>
        {
          PATHS.includes(window.location.pathname) ? null : (<Footer/>)
        }
        
     </BrowserRouter>
    </div>
  );
}

export default App;
