import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';

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
            <Aux>
                <Burger ingredients={ingredients}/>
                <div>Build Controls</div>                
            </Aux>
            
        );
    }
}

export default BugerBuilder;