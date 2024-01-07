import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="device_view">
        <div className="device_content">
          <Navbar />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>

        </div>
      </div>
    </div>
  );
}

export default App;
