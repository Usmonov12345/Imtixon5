import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import OneSection from './Components/Main/OneSection/OneSection';
import Mahsulotlar from './Components/Main/Mahsulotlar/Mahsulotlar';
import Twosection from './Components/Main/Twosection/Twosection';
function App() {
  return (
    <div className="App">
          <Header/>
            <Routes >
            <Route path='/' element={<Main/>}/>
            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
