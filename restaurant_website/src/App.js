import './App.css';
import About from './Components/About Page/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
     <Routes>

       <Route path="/about" element={<About/>}></Route>
        
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
