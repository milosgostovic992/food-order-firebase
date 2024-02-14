import React from 'react'
import { useContext } from 'react';
import Modal from '../../UI/Modal';
import CartContext from '../../store/CartContext';
import { currencyFormatter } from '../../util/currencyFormatter';
import Button from '../../UI/Button';
import UserProgressContext from '../../store/userProgressContext';




const Cart = () => {

const ctxCart = useContext(CartContext);
const {items, addItem, removeItem} = ctxCart;

const ctxUser = useContext(UserProgressContext);
const {progress, hideCart, showCheckout} = ctxUser;

const hideCartHandler = () => {
    hideCart();
};
console.log("cart", progress === 'cart');

const handleGoToCheckout = () => {
    showCheckout();
}

const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
return (
   <Modal classname='cart' open={progress === 'cart'} onClose={progress === 'cart' ? hideCartHandler : null}> 
    <h2>Your Cart</h2>
    {/* <ul>
        {items.map(item => 
           <CartItem 
           key={item.key}
           onDecrease={() => removeItem(item.id)}
           onIncrease={() => addItem(item)}
           {...item}
           />
        )}
    </ul> */}
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <p className="modal-actions">
        <Button onClick={hideCartHandler} textOnly>Close</Button>
       {items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
    </p>
   </Modal>
  )
}

export default Cart