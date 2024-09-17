import './App.css';
// import Rating from './Components/Component/Rating';
import Gloseries from './Components/Component/Gloseries';
import Nav from './Components/Component/Nav';
import Home from './Components/Page/Home';
import {  Routes, Route, useLocation } from 'react-router-dom';
import Signin from './Components/Page/Signin';
import Login from './Components/Page/Login';
import Cart from './Components/Component/Cart';
import Everything from './Components/Component/Everything';
import Oats from './Components/Component/Oats'
import Payment from './Components/Component/Payment';
import EveryId from './Components/Component/EveryId';
import Orders from './Components/Component/Orders';
import Search from './Components/Component/Search';
import Contact from './Components/Component/Contact';
import About from './Components/Component/About';
import Footer from './Components/Component/Footer';
import Sidebar from './Components/Admin/Sidebar';
import AddProducta from './Components/Admin/AddProducta';
import Allproducts from './Components/Admin/Allproducts';
import Editproduct from './Components/Admin/Editproduct';
import Allusers from './Components/Admin/Allusers';
import Dashboard from './Components/Admin/Dashboard';
import UserDetails from './Components/Admin/UserDetails';
import AdminOrder from './Components/Admin/AdminOrder';

function App() {
  const location = useLocation();
  const shouldHiddenNavbar = location.pathname === '/login' || location.pathname === '/signin' || location.pathname.startsWith('/admin');
  return (
   
  
    <div>
     
     {!shouldHiddenNavbar && <Nav />}
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/every' element={<Everything/>}/>
      <Route path='/every/:id' element={<EveryId/>}/>
      <Route path="/groceries" element={<Gloseries/>} />
      <Route path="/groceries/:id" element={<EveryId/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path='/Oats' element={<Oats/>}/>
      <Route path='/Oats/:id' element={<EveryId/>}/>
      <Route path='/pay' element={<Payment/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin/*' element={<Sidebar/>}>
      <Route index element={<Dashboard />} />
      <Route path="addproducts" element={<AddProducta />} />
      <Route path="allproducts" element={<Allproducts/>} />
      <Route path="allproducts/:id" element={<Editproduct/>} />
      <Route path="allusers" element={<Allusers/>} />
      <Route path="allusers/:id" element={<UserDetails/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="adminorders" element={<AdminOrder/>} />
      </Route>
     
    </Routes>
    {!shouldHiddenNavbar && <Footer/>}
    </div>
  );
}

export default App;