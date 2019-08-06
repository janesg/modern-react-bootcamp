import React, { Component } from 'react';

class ClickMe extends Component {

    // Use class field declaration
    //  - initialise local state without use of class constructor
    state = {
        preVal: 0,
        val: 0
    };

    // Use fat arrow function to avoid need to bind event handler to 'this'
    handleClick = e => {
        // Generate random integer between 1 and 10 (inclusive)
        const randVal = Math.floor(Math.random() * 10) + 1;
        this.setState(prevState => (
            { 
                preVal: prevState.val, 
                val: randVal 
            }
        ));
    }

    buttonOrWin() {
        return this.state.val === 7 ?
            <h2>You're a winner</h2> :
            <button onClick={ this.handleClick }>Click Me</button>;
    }

    render() {
        return (
            <div>
                <h2>Value is : { this.state.val } (...previously : { this.state.preVal })</h2>
                { this.buttonOrWin() }
            </div>
        );
    }
}

export default ClickMe;