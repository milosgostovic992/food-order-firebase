import React, { useEffect } from 'react';
import { useState } from 'react';
import MealItem from '../MealItem/MealItem';

const Home = () => {
    const [menuItems, setMenuItems] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://food-order-app-5afa4-default-rtdb.firebaseio.com/.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const resData = await response.json();
                setMenuItems(resData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);
  
    return (
        <ul id='meals'>
          {menuItems.map((meal) => (
             <MealItem 
             key={meal.id} 
             meal={meal}
             />
          ))}
        </ul>

    );
  };
  
  export default Home;