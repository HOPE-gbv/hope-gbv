import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* Note : This will render the matched route component */}
      <Footer />
    </>
  );
}

export default App;