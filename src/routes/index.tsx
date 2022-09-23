import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'

import { PokedexLayout } from './../pages/pokedexLayout'
import { PokedexHome } from '../pages/pokedexHome'
import { PokedexDetails } from '../pages/pokedexDetails'

export function PokedexRoutes() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PokedexLayout />}>
					<Route path="/" element={<PokedexHome />} />
					<Route path=":pokedexId" element={<PokedexDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}