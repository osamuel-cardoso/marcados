import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cltyidm3q059n08uhw0k6xx2h/master',
    cache: new InMemoryCache(),
})
