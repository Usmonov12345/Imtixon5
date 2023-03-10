import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Like from './Components/Mahsulotlar/Like/Like';
function App() {
  return (
    <div className="App">
    
          <Header/>
            <Routes >
            <Route path='/' element={<Main/>}/>
            <Route path='/Mahsulotlar' element={<Like/>}/>
            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
