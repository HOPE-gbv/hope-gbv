import { } from "react";
import Header from './Header.tsx';
import { Routes, Route } from "react-router-dom"; 
import Home  from './Pages/Home.tsx';  
import Pro from './Pages/Pro.bono';
import Faq  from './Pages/Faq.tsx';
import Footer  from './Footer.tsx';
import './index.css'

function App() {

  return (
    <>
      <Header/>
       <Routes>
         <Route index  element={<Home />} />
          <Route  path="Pro.bono"element= {<Pro />} />
          <Route path="Faq" element={<Faq />} />
       </Routes>
      <Footer/>    
    </>
  )
}

export default App


  
  