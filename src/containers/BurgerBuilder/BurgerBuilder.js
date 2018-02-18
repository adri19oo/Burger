import React, { Component } from 'react';
import Wrap from '../../helpers/Wrap';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

class BugerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        const {ingredients} = this.state
        return(
            <Wrap>
                <Burger ingredients={ingredients}/>               
                <BuildControls/>
                </Wrap>
            
        );
    }
}

export default BugerBuilder;