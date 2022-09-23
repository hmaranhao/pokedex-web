import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { GET_POKEMON_BY_ID } from '../../graphql/querys'

export const PokedexDetails = () => {
	const params = useParams()
	const { data } = useQuery(GET_POKEMON_BY_ID, { variables: { id: params.pokedexId } })
	const pokemon = data?.pokemons[0]
	let sprites = []
	let photo = ''
	if(pokemon){
		sprites = JSON.parse(pokemon?.pokemon_v2_pokemonsprites[0]?.sprites)
		photo = sprites?.other?.home?.front_default
	}
	return (
		<div style={{ background: '#fff' }}>
			Detalhes do Pokemon #{params.pokedexId}
			<br />
			<br />
			<img src={photo} alt={pokemon?.name} />

		</div>
	)
}