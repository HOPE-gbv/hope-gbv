/* 
import {  } from 'react'
import Header from './Header.tsx';
//import Home  from './Pages/Home.tsx';  
//import Pro  from './Pages/Pro.tsx';
import Faq  from './Pages/Faq.tsx';
import Footer  from './Footer.tsx';
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <Header/> 
     <BrowserRouter>
     <Route path='/' element={<Home />} />
     <Faq/>
     </BrowserRouter>
     <Footer/>    
    </>
  )
}

export default App
*/


import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header.tsx';
import Footer  from './Footer.tsx';
import Home from './Pages/Home';
import Donate from './Pages/Donation.tsx';



function App () {
  return (
  
  <>
    <Header/>
    <BrowserRouter>
    <Route path='/' element={<Home />} />
    <Route path='donate' element={<Donate />} />
      <p>hello world</p>
      </BrowserRouter>
      <Footer />
      </>
  )
}
export default App



