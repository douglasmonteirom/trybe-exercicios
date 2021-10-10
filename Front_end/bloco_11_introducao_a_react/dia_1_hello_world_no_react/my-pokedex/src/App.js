import Pokedex from "./components/Pokedex";
import pokemons from './data';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
