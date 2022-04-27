import logo from './logo.svg';
import './App.css';
import About from './Components/About Page/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer"
import Contact from './Components/Contact Page/Contact'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
    <Routes>
    
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          
      
       </Routes>
     <Footer/>
  </BrowserRouter>

         
    </div>
  );
}

export default App;
