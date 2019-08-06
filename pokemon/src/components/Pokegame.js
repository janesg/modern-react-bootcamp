import React, { Component } from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

class Pokegame extends Component {

    static defaultProps = {
		pokemon : [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
    };

    render() {
        // Initialise 2 hands
        //  - randomly remove entries from hand2 and put in hand 1
        let hand1 = [];
        let hand2 = [...this.props.pokemon];

        while (hand1.length < hand2.length) {
            hand1.push(...hand2.splice(Math.floor(Math.random() * hand2.length), 1));
        }

        const hand1Total = hand1.reduce((sum, card) => sum + card.base_experience, 0);
        const hand2Total = hand2.reduce((sum, card) => sum + card.base_experience, 0);

        return (
            <div className="Pokegame">
                <Pokedex pokemon={ hand1 } expTotal={ hand1Total } isWinner={ hand1Total >= hand2Total } />
                <Pokedex pokemon={ hand2 } expTotal={ hand2Total } isWinner={ hand2Total >= hand1Total }/>
            </div>
        );
    }
}

export default Pokegame;