
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './compo/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
