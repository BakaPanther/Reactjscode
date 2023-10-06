import logo from './logo.svg';
import './App.css';
import Index from './components';
import ProductTypeOfType from './components/products-type';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Cart from './components/cart';
import './vendor/css/bootstrap.min.css';
import Register from './components/register';
import RePass from './components/re-pass';
import Thanhtoan from './components/thanh-toan';
import Detail from './components/detail';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/products' element={<ProductTypeOfType />}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/recover-password' element={<RePass/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/detail' element={<Detail/>}/>
    <Route path='/thanh-toan' element={<Thanhtoan/>}/>
    <Route path='/details'/>
    </Routes>
    </>
  );
}

export default App;
