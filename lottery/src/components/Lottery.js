import React, { Component } from 'react';
import './Lottery.css';
import LotteryBall from './LotteryBall';

class Lottery extends Component {

    state = {
        nums: []
    };

    componentDidMount() {
        this.generateNums();
    }

    generateNums = () => {
        const newNums = [];

        while (newNums.length < this.props.numBalls) {
            let newNum = Math.floor(Math.random() * this.props.maxValue) + 1;
            if (!newNums.includes(newNum)) {
                newNums.push(newNum);
            }
        }

        // To sort numerically rather than on string value need to use compare function
        this.setState({ nums: newNums.sort((a, b) => a - b) });
    }

    handleClick = () => {
        this.generateNums();
    }

    render() {
        return (
            <div className="Lottery">
                <h1>{ this.props.title }</h1>
                <div>
                    { this.state.nums.map(n => <LotteryBall num={ n } />)}
                </div>
                <button className="Lottery-button" onClick={ this.handleClick }>Generate</button>
            </div>
        )
    }
}

export default Lottery;