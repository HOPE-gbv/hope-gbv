import {  } from 'react';
import Header from './components/Header.tsx';
import { Routes, Route } from "react-router-dom";
import Home  from './Pages/Home.tsx';  
import Pro from './Pages/Pro-bono.tsx';
import Faq  from './Pages/Faq.tsx';
import Footer  from './components/Footer.tsx';
import './index.css'
// import Donate from './Pages/Donation.tsx';
import DonationPage from './Pages/donate.tsx';
import Community from './Pages/community.tsx';
import About from './Pages/about.tsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
       <Routes>
         <Route path="/" element={<Home />} />
          <Route  path="/pro-bono"element= {<Pro />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/community" element={<Community />} />
          <Route path="/donate" element={<DonationPage />} />
          {/* <Route path="/donate" element={<Donate />} /> */}
       </Routes>
      <Footer/>    
    </>
  )
}

export default App


  
  