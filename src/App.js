
import './App.css';
import Home from './Componenets/Home';
import Navbar from './Componenets/Navbar';
import Skills from './Componenets/Skills';
import Projects from './Componenets/Projects';
import Contact from './Componenets/Contact';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import About from './Componenets/About';


function App() {
  return (
    <>
    <div className='body'>
    <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skills/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
