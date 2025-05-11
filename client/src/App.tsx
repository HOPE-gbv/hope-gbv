import {  } from 'react'
import Header from './Header.tsx';
//import Home  from './Pages/Home.tsx';  
//import Pro  from './Pages/Pro.tsx';
import Faq  from './Pages/Faq.tsx';
import Footer  from './Footer.tsx';
import './index.css'
import Home from './Pages/Home.tsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <Header/> 
     <Home/>
     {/*<Home/>
     <Pro/>*/}
     <Faq/>
     <Footer/>    
    </>
  )
}

export default App


