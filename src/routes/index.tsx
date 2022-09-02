import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import App from './../App'
import { PokedexHome } from "../pages/pokedexHome"

export function PokedexRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<PokedexHome />} />
      </Routes>
    </BrowserRouter>
  )
}