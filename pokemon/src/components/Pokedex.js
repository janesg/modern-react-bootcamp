import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {

    renderPokecard(pokeInfo) {
        /* JSX comment - numeric values have to be passed in brackets...or quotes as string 
                <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */
        return <Pokecard 
                    id={pokeInfo.id} 
                    name={pokeInfo.name} 
                    type={pokeInfo.type}
                    exp={pokeInfo.base_experience} />;
    }

    render() {
        let title = this.props.isWinner ?
            <h1 className="Pokedex-winner">Winning Hand</h1> :
            <h1 className="Pokedex-loser">Losing Hand</h1>;

        return (
            <div className="Pokedex">
                { title }
                <h4>Total Experience : { this.props.expTotal }</h4>
                <div className="Pokedex-cards">
                    { this.props.pokemon.map(p => this.renderPokecard(p)) }
                </div>
            </div>
        )
    }
}

export default Pokedex;