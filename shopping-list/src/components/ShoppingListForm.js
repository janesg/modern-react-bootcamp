import React, { Component } from 'react';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theName: '', theQty: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        this.props.addItem({ 
            name: this.state.theName,
            qty: this.state.theQty
        })

        this.setState({ theName: '', theQty: '' })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="nameId">Name</label>
                <input type="text"
                    id="nameId"
                    name="theName"
                    value={ this.state.theName }
                    placeholder="Name"
                    onChange={ this.handleChange } />
                <label htmlFor="qtyId">Quantity</label>
                <input type="text"
                    id="qtyId"
                    name="theQty"
                    value={ this.state.theQty }
                    placeholder="Quantity"
                    onChange={ this.handleChange } />
                <button>Add Item</button>
            </form>
        );
    }
}

export default ShoppingListForm;