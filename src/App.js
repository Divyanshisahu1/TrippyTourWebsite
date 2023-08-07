import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from "./components/Navbar/Navbar.js"
import { Home } from "./Routes/Home/Home";
import { About } from "./Routes/About/About";
import { Contact } from "./Routes/Contact/Contact";
import { Service } from "./Routes/Service/Service";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
        </Routes>
       
      </BrowserRouter>


    </>
  );
}

export default App;
