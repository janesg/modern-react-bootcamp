import React, { Component } from 'react';

class ClickMeWithoutBabelMagic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            val: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const randVal = Math.floor(Math.random() * 10);
        this.setState({ val: randVal })
    }

    buttonOrWin() {
        return this.state.val === 7 ?
            <h2>You're a winner</h2> :
            <button onClick={ this.handleClick }>Click Me</button>;
    }

    render() {
        return (
            <div>
                <h1>Value is : { this.state.val }</h1>
                { this.buttonOrWin() }
            </div>
        );
    }
}

export default ClickMeWithoutBabelMagic;