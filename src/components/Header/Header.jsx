import React from 'react'
import logo from "../../assets/logo.jpg"
import Button from '../../UI/Button.jsx'
import { useContext } from 'react'
import CartContext from '../../store/CartContext.jsx'
import UserProgressContext from '../../store/userProgressContext.jsx'
import LoginContext from '../../store/LoginContext.jsx'
import AdminLog from "../AdminLog/AdminLog.jsx"

const Header = () => {



    const ctxCart = useContext(CartContext)
    const { items } = ctxCart;

    const ctxUser = useContext(UserProgressContext)
    const { showCart, showAdminPanel } = ctxUser;

    const totalCartItems = items.reduce((totalNumberOfitems, item) => {
        return totalNumberOfitems + item.quantity;
    }, 0);

    const handleShowCart = () => {
        showCart();
    }

    const handleAdminLogin = () => {
        showAdminPanel();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>Food App</h1>
            </div>
            <nav>
                <Button onClick={handleAdminLogin}>Admin Panel</Button>
                <Button onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}

export default Header