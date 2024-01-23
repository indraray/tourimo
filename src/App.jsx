import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Blogs from './Pages/Blogs/Blogs';
import PostBlog from './Pages/PostBlog/PostBlog';
import ContactUs from './Pages/ContactUs/ContactUs';
import Travel from './Pages/Travel/Travel';
import Gallery from './Pages/Gallery/Gallery';
import AboutUs from './Pages/AboutUs/AboutUs';

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
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/postblog' element={<PostBlog />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/travel' element={<Travel />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/gallery' element={<Gallery />} />



            </Routes>
          
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
