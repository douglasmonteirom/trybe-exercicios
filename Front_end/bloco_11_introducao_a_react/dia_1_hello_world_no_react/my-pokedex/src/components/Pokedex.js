import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: [...this.props.pokemons],
            count: 0,
        }
        this.nextPokemon = this.nextPokemon.bind(this)
        this.nextPokemonType = this.nextPokemonType.bind(this)

    }

    nextPokemon() {
        if (this.state.count < this.state.pokemon.length - 1) {
            this.setState(state => ({
                pokemon: [...state.pokemon],
                count: state.count + 1,
            }))
        } else {
            this.setState(state => ({
                pokemon: [...state.pokemon],
                count: state.count * 0,
            }))
        }
    }

    disableBUtton(array) {
        if (array.length === 1) {
            document.querySelector('.btn-primary').disabled = true;
        }else{
            document.querySelector('.btn-primary').disabled = false;
        }
    }

    nextPokemonType(event) {
        const pokemonsType = this.props.pokemons
            .filter((pokemon) => pokemon.type === event.target.name)
        console.log(pokemonsType);
        if (pokemonsType.length === 0) {
            this.setState((state) => ({
                pokemon: [...this.props.pokemons],
                count: state.count * 0,
            }))
        } else {
            this.disableBUtton(pokemonsType)
            this.setState((state) => ({
                pokemon: [...pokemonsType],
                count: state.count * 0,
            }))
        }
    }

    render() {
        return (
            <section >
                <div className='pokedexClass'>
                    <Pokemon
                        key={this.state.pokemon[this.state.count].id}
                        pokemon={this.state.pokemon[this.state.count]}
                    />
                </div>
                <div className='pokedexBtn'>
                    <button className='btn btn-secondary' name='Fire' onClick={(event) => this.nextPokemonType(event)}>Fire</button>
                    <button className='btn btn-secondary' name='Psychic' onClick={(event) => this.nextPokemonType(event)}>Psychic</button>
                    <button className='btn btn-secondary' name='Electric' onClick={(event) => this.nextPokemonType(event)}>Electric</button>
                    <button className='btn btn-secondary' name='Bug' onClick={(event) => this.nextPokemonType(event)}>Bug</button>
                    <button className='btn btn-secondary' name='Poison' onClick={(event) => this.nextPokemonType(event)}>Poison</button>
                    <button className='btn btn-secondary' name='Normal' onClick={(event) => this.nextPokemonType(event)}>Normal</button>
                    <button className='btn btn-secondary' name='Dragon' onClick={(event) => this.nextPokemonType(event)}>Dragon</button>
                    <button className='btn btn-secondary' name='All' onClick={(event) => this.nextPokemonType(event)}>All Pokemons</button>

                    <button className='btn btn-primary' onClick={this.nextPokemon}>Próximo Pokemon</button>
                </div>
            </section>
        )
    }
}
export default Pokedex