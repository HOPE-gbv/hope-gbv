import {  } from 'react';
import Header from './Header.tsx';
import { Routes, Route } from "react-router-dom";
import Home  from './Pages/Home.tsx';  
import Pro from './Pages/Pro.bono';
import Faq  from './Pages/Faq.tsx';
import Footer  from './Footer.tsx';
import './index.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
       <Routes>
         <Route path="/Home" element={<Home />} />
          <Route  path="Pro.bono"element= {<Pro />} />
          <Route path="Faq" element={<Faq />} />
       </Routes>
      <Footer/>    
    </>
  )
}

export default App


  
  