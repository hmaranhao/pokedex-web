import { useLazyQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { GET_POKEMONS } from '../../../graphql/querys'
import { PokemonCard } from './components/pokemonCard'
import GIF_POKEBOLA from './../../../gif_pokebola.gif'

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

	let currentAnimation = 0
	const setNumberAnimation = (index: number) => {
		if (index % 5 === 0) {
			currentAnimation = 0
		} else {
			currentAnimation++
		}
	}
	return (
		<InfiniteScroll
			dataLength={pokemons.length}
			next={() => loadPokemons({ variables: { offset: pokemons.length } })}
			hasMore={true}
			loader={
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					Loading...
				</div>
			}
			style={{ overflow: 'hidden' }}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Você chegou ao fim da lista!!</b>
				</p>
			}
		>
			<Grid container spacing={1} justifyContent="center">
				{pokemons?.map((pokemon: any, idx: number) => {
					setNumberAnimation(idx)
					return (
						<PokemonCard
							key={idx}
							pokemon={pokemon}
							currentAnimation={currentAnimation}
						/>
					)

				})}
			</Grid>
		</InfiniteScroll>

	)
}