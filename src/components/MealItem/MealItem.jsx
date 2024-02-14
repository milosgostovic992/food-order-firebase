import React from 'react'
import { currencyFormatter } from '../../util/currencyFormatter'
import Button from '../../UI/Button'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'

const MealItems = ({meal}) => {

    const ctx = useContext(CartContext);

    const {addItem} = ctx



const handleMealToCart = () => {
    addItem(meal);
};

  return (
   <li className='meal-item'>
    <article>
        <img src={meal.image} alt={meal.name} />
        <div>
            <h3>{meal.name}</h3>
            <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
            <p className='meal-item-description'>{meal.description}</p>
        </div>
    <p className='meal-item-actions'>
        <Button onClick={handleMealToCart}>Add to Cart</Button>
    </p>
    </article>
   </li>
  )
}

export default MealItems