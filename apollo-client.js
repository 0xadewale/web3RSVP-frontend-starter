import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/0xadewale/web3rsvp",
    cache: new InMemoryCache(),
});

export default client;