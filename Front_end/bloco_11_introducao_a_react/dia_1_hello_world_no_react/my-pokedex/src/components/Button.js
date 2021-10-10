import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
    render() {
        const { pokemons } = this.props
        const types = pokemons.reduce((acumulator, { type }) => {
            if (!acumulator.includes(type)) {
                acumulator.push(type)
            }
            return acumulator;
        }, [])
        return (
            types.map((type) =>
                <button
                    key={type}
                    className='btn btn-secondary'
                    name={type}
                    onClick={(event) => this.props.cbk(event)}
                >{type}</button>
            )

        )
    }
}

export default Button
