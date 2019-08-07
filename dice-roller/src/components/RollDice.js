import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {

    state = {
        dice1Val: 1,
        dice2Val: 1,
        isRolling: false
    }

    randomDiceValue() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    handleClick = () => {
        this.startRolling();
        this.interval = setInterval(() => this.stopRolling(), 1000);
    }

    startRolling = () => {
        this.setState({ isRolling: true });
    }

    stopRolling = () => {
        clearInterval(this.interval);
        this.setState({ 
            dice1Val: this.randomDiceValue(),
            dice2Val: this.randomDiceValue(),
            isRolling: false 
        });
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-dice">
                    <Die value={ this.state.dice1Val } rolling={ this.state.isRolling } />
                    <Die value={ this.state.dice2Val } rolling={ this.state.isRolling } />
                </div>
                <button className="Rolldice-button" 
                        onClick={ this.handleClick }
                        disabled={ this.state.isRolling }
                        style={ this.state.isRolling ? {backgroundColor: 'darkgrey'} : {}}>
                            { this.state.isRolling ? "Rollin'..." : "Roll Dice" }
                </button>
            </div>
        );
    }
}

export default RollDice;