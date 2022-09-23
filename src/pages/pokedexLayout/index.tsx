import { Container } from '@mui/material'
import App from './../../App'

import './pokedexLayout.css'

export const PokedexLayout = () => {

	return (
		<div className="container">
			<Container maxWidth="md">
				<App />
			</Container>
		</div>
	)
}