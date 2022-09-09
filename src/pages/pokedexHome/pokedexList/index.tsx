import { useLazyQuery } from "@apollo/client"
import { Button, Grid } from "@mui/material"
import { useEffect, useState } from "react"

import { GET_POKEMONS } from "../../../graphql/querys"
import { PokemonCard } from "./components/pokemonCard"

export function PokedexList() {
  const [pokemons, setPokemons] = useState<any>([])
  const [loadPokemons, { loading, error, data }] = useLazyQuery(GET_POKEMONS)

  useEffect(() => {
    loadPokemons()
  }, [])

  useEffect(() => {
    if (data) {
      setPokemons((currentPokemons: any) => ([
        ...currentPokemons,
        ...data.pokemons
      ]))
    }
  }, [data])

  return (
    <Grid container spacing={1}>      
      {pokemons?.map((pokemon: any, idx: number) => {
        return (
          <PokemonCard
            key={idx}
            pokemon={pokemon}
          />
        )
      })}
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => loadPokemons({ variables: { offset: pokemons.length } })}
          fullWidth
        >
          + 10
        </Button>
      </Grid>
    </Grid>
  )
}