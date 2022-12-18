import logo from './logo.svg';
import './App.css';
import Header from './Components/ShearedPages/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/ShearedPages/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About/About';
import Service from './Components/Pages/Service/Service';
import Contact from './Components/Pages/Contact/Contact';
import Blog from './Components/Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/our-service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>

      {/* <Home></Home> */}

      <Footer></Footer>
     
    </div>
  );
}

export default App;
