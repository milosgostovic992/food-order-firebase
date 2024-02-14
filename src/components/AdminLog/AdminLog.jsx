import React from 'react'
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import { updateCurrentUser } from 'firebase/auth';
import UserProgressContext from '../../store/userProgressContext';
import LoginContext from '../../store/LoginContext';
import Modal from "../../UI/Modal"
import Login from '../Login/Login';


const AdminLog = () => {

const ctxCart = useContext(CartContext);
const {items, addItem, removeItem} = ctxCart;

const ctxUser = useContext(UserProgressContext);
const {progress, hideCart} = ctxUser;

const hideCartHandler = () => {
    hideCart();
};

const showAdminPanel = () => {
  showAdminPanel();
}

const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
console.log("admin", progress === 'Admin');
  return (
   <Modal classname='cart' open={progress === 'Admin'} onClose={progress === 'Admin' ? hideCartHandler : null}> 
    <h2>Login to Admin Panel</h2>
      <Login />
   </Modal>
  )
}

export default AdminLog