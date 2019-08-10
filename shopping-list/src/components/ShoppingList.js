import React, { Component } from 'react';
import uuid from 'uuid/v4';
import ShoppingListForm from './ShoppingListForm';

class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: "Eggs", qty: "3 dozen", id: uuid() },
                { name: "Chickens", qty: "2", id: uuid() }
            ]
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        item.id = uuid();
        this.setState(currentState => (
            { items: [...currentState.items, item] }
        ));
    }

    render() {
        return (
            <div>
                <h1>Shopping List :</h1>
                <ul>
                { 
                    this.state.items.map(({name, qty, id}) =>
                        <li key={ id }>{ name } : { qty }</li>
                    ) 
                }
                </ul>
                <ShoppingListForm addItem={ this.addItem } />
            </div>
        );
    }
}

export default ShoppingList;