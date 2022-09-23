import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query GET_POKEMONS($offset: Int) {
    pokemons: pokemon_v2_pokemon(limit: 20, offset: $offset) {
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

export const GET_POKEMON_BY_ID = gql`
  query GET_POKEMON_BY_ID($id: Int) {
    pokemons: pokemon_v2_pokemon(where: {id: {_eq: $id }}) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`