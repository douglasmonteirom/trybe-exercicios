import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';


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
        } else {
            document.querySelector('.btn-primary').disabled = false;
        }
    }

    nextPokemonType(event) {
        const pokemonsType = this.props.pokemons
            .filter((pokemon) => pokemon.type === event.target.name)
        if (pokemonsType.length === 0) {
            this.disableBUtton(pokemonsType)
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
                    <Button pokemons={this.props.pokemons} cbk={this.nextPokemonType} />
                    <button className='btn btn-secondary' name='All' onClick={(event) => this.nextPokemonType(event)}>All Pokemons</button>
                    <button className='btn btn-primary' onClick={this.nextPokemon}>Próximo Pokemon</button>
                </div>
            </section>
        )
    }
}
export default Pokedex
