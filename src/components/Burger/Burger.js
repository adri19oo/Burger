import React from 'react';
import BurgerIngredients from './BurgerIngredients';
import styles  from './Burger.css';

const burger = (props) =>{ 
    // Transform object to Array
    const transformedIngredients = Object.keys(props.ingredients)
        .map(item => {
            return [...Array(props.ingredients[item])].map((_, i) => {
                return <BurgerIngredients key={item + i} type={item}/>
            });
        });
    return (
        <div className={styles.Burger}>
            <BurgerIngredients type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom'/>          
        </div>
    );
}

export default burger;