import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="device_view" style={{backgroundImage:`url("")`}}>
        <div className="device_content">
          <Navbar />
          
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register/>}/>

            </Routes>
          
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
