import React from 'react';
import BurgerIngredients from './BurgerIngredients';
import styles  from './Burger.css';

const burger = (props) =>{ 
    // Transform object to Array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(item => {
            return [...Array(props.ingredients[item])].map((_, i) => {
                return <BurgerIngredients key={item + i} type={item}/>
            });
        })
        .reduce((arr, e) => {
            return arr.concat(e)
        }, []);

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please add ingredients</p>;
        }

    return (
        <div className={styles.Burger}>
            <BurgerIngredients type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom'/>          
        </div>
    );
}

export default burger;