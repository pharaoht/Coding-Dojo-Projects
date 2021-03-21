import axios from 'axios';
import Axios from 'axios';
import React, {useState, useEffect} from 'react';

const PokemonAxios = () =>{
    const[Pokemons, setPokemons] = useState([])

    const catchAllPokemon = (e) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000")
        .then(response =>{
            return response.json()
        
        }).then(response =>{
            setPokemons(response.results)
        })
        .catch(err => {
        console.log(err);
    })

    }
    return (
        <>
        <div>
            <button onClick={(e) => catchAllPokemon(e)}>Catch Pokemon</button>
        </div>
        <hr/>
        <div>
            <h1>All Pokemons</h1>
            {Pokemons.map((pokemon, id) =>{
                return <p id={id}>{pokemon.name}</p>
            })}
        </div>
        </>
    )
}

export default PokemonAxios;