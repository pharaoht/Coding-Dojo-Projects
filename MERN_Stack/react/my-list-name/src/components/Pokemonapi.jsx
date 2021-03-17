import React, {useState} from 'react'

const Pokemonapi = () => {
    const catchAllPokemon = (e) =>{

        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
        .then(response =>{
        var data = response.json()
        console.log(data)
        }).catch(err => {
        console.log(err);
    })

    }
    return (
        <>
        <div>
            <button onClick={(e) => catchAllPokemon(e)}>Catch Pokemon</button>
        </div>
        </>
    )
}

export default Pokemonapi;