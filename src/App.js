
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './compo/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


function App() {
  const [authenticate,setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log(authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll/>}></Route>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />}></Route>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
