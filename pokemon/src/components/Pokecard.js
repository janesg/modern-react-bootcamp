import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {

    generateId(id) {
        let result = "" + id;
        while (result.length < 3) {
            result = "0" + result;
        }

        return result;
    }

    render() {
        // let imgSrc = `${POKE_API}${this.props.id}.png`;
        let imgSrc = `${POKE_API}${this.generateId(this.props.id)}.png`;

        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{ this.props.name }</h1>
                <div className="Pokecard-image">
                    <img alt="" src={imgSrc} />
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Experience: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;