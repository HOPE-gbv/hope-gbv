import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* This will render the matched route component */}
      <Footer />
    </>
  );
}

export default App;
