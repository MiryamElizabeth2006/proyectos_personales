import './App.css';
import {Testimonio} from './components/testimonio';

function App() {
  return (
    <div className="App">
      <div className = 'container-principal'>
        <h1>Acerca de Pikachu y sus amigos</h1>

        <Testimonio 
        nombre='Pikachu'
        power='Electricidad'
        imagen='pikachu' 
        descripcion='Pikachu es un Pokémon de tipo eléctrico conocido por su habilidad para generar electricidad y su apariencia adorable.' 
        />
      
        <Testimonio
          nombre='Charmander'
          power='Llamas'
          imagen='pecursor'
          descripcion='Charmander es un Pokémon de tipo fuego que tiene una llama en la punta de su cola, la cual indica su estado de salud y emociones.'
        />

        <Testimonio
        nombre='niguno'
        power = 'niguno'
        imagen='pokeamigo'
        descripcion='los pokemones son criaturas fantásticas que habitan en el mundo de los videojuegos y la serie animada, cada uno con habilidades y características únicas.'
        />

      </div>
    </div>
  );
}

export default App;
