
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import { LoginContextProvider } from './store/LoginContext'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { UserProgressContextProvider } from './store/userProgressContext';
import { CartContextProvider } from './store/CartContext';
import AdminLog from './components/AdminLog/AdminLog';
import Cart from './components/Cart/Cart';

function App() {


  return (
    <BrowserRouter>
    <CartContextProvider>
    <LoginContextProvider>
    <UserProgressContextProvider>
      <AdminLog/>
      <Cart/>
        <Header/>
        <Home/>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
        
    </UserProgressContextProvider>
      </LoginContextProvider>
    </CartContextProvider>
      
    </BrowserRouter>
  )
}

export default App
