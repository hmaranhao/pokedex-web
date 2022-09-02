import { useQuery } from "@apollo/client"
import { Grid } from "@mui/material"

import { GET_POKEMONS } from "../../../graphql/querys"
import { PokemonCard } from "./components/pokemonCard"

export function PokedexList() {
  const { loading, error, data } = useQuery(GET_POKEMONS)
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <Grid container spacing={1}>
      {data?.pokemons?.map((pokemon: any) => {
        return (
          <PokemonCard 
            key={pokemon?.id}
            pokemon={pokemon}
          />
        )
      })}
    </Grid>
  )
}