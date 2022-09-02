import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import { PokedexRoutes } from './routes'
import { api } from './apollo/api'

import 'animate.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider  client={api}>
      <PokedexRoutes />
    </ApolloProvider>
  </React.StrictMode>
)
