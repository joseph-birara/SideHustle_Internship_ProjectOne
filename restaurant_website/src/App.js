import './App.css';
import About from "./Components/About Page/About"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer"
import CallAll from './Components/HomePage/CallAll';
import Contact from './Components/Contact Page/Contact'
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';



function App() {
  return (
    <div className="App">
    
    {/* <CallAll/> */}
      <BrowserRouter>
      <Navbar />
    <Routes>
          <Route path='/' element={<CallAll />} />
          <Route path="/about" element={<About/>} />

          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} /> 
       </Routes>
     <Footer/>
  </BrowserRouter>
  
         
    </div>
  );
}

export default App;
