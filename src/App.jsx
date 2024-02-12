import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import './App.css'
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Cars from "./pages/Cars";
import LoginPage from "./pages/LoginPage";
import Servise from "./pages/Servise";

function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>

     <Route path="/" element={<Layout/>}>
           <Route  path="service" element={<Servise/>} />
         <Route path="" element={<HomePage/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="cars" element={<Cars/>}/>

     </Route>
     <Route path="/login" element={<LoginPage/>}/>

  </Routes>
  </BrowserRouter>
     
    </>
  )
}

export default App
