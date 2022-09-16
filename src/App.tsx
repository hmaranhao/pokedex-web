import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

function App() {

	return (
		<Container maxWidth="md">
			<Outlet />
		</Container>
	)
}

export default App
