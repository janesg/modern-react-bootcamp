import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faDiceOne, 
    faDiceTwo, 
    faDiceThree, 
    faDiceFour, 
    faDiceFive, 
    faDiceSix
} from '@fortawesome/free-solid-svg-icons';
import './Die.css';

const diceIcon = [
    faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix 
];

class Die extends Component {

    renderDie() {
        return (
            <FontAwesomeIcon 
                size="7x" 
                icon={ diceIcon[this.props.value - 1] } />
        );
    }

    render() {
        return (
            <div className={`Die-icon ${ this.props.rolling && 'shake-it' }`}>
                { this.renderDie() }
            </div>
        );
    }
}

export default Die;