import { 
  ApolloClient, 
  InMemoryCache 
} from '@apollo/client'

export const api = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta/',
  cache: new InMemoryCache(),
});