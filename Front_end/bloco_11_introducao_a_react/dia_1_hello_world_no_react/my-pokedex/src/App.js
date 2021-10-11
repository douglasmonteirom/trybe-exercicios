import React from "react";
import Pokedex from "./components/Pokedex";
import pokemons from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


class App extends React.Component {
  // Usa pokeapi com fetch api
  // componentDidMount() {
  //   const apiUrl = "https://pokeapi.co/api/v2/pokemon/500/";
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const result = data;
  //       console.log('This is your data', result);
  //     });
  // }

  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </div>

    )
  }
}

export default App;
