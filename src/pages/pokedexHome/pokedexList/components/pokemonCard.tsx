import { Card, Chip, Grid } from '@mui/material'

import './pokemonCard.css'

interface PokemonCardProps {
  pokemon: any,
	currentAnimation: number
}

const dictionaryAnimate: any = {
	0: 'animate__fadeInLeft',
	1: 'animate__fadeInUp',
	2: 'animate__fadeInDown',
	3: 'animate__fadeInUp',
	4: 'animate__fadeInRight'
}

export function PokemonCard({
	pokemon,
	currentAnimation
}: PokemonCardProps) {
	const sprites = JSON.parse(pokemon?.pokemon_v2_pokemonsprites[0]?.sprites)
	const photo = sprites?.other?.home?.front_default
	const types = pokemon?.pokemon_v2_pokemontypes?.map((pokemonType: any) => {
		return pokemonType?.pokemon_v2_type?.name
	})

	return (
		<Grid item>
			<Card
				className={`animate__animated ${dictionaryAnimate[currentAnimation]} animate__delay-0.5s pokemon-item`}
			>
				<Grid container spacing={1}>
					<Grid item xs={12}>
            #{pokemon?.id}
					</Grid>
					<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
						<img src={photo} alt={pokemon?.name} style={{ maxWidth: '85%' }} />
					</Grid>
					<Grid item xs={12}>
						{pokemon?.name}
					</Grid>
					<Grid item xs={12} container spacing={1}>
						{types?.map((type: string, idx: number) => (
							<Grid item key={type + idx}>
								<Chip size="small" label={type} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Card>
		</Grid>
	)
}