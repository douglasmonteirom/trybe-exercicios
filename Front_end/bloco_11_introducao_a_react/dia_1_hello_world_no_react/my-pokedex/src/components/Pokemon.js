import React from 'react';
import "./Pokemon.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, image, averageWeight } = this.props.pokemon;
        return (
            <div className='boxPokemon'>
                <div>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                <img src={image} alt=''></img>
            </div>
        )
    }
}

export default Pokemon
