import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query GET_POKEMONS {
    pokemons: pokemon_v2_pokemon(limit: 10, offset: 0) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`