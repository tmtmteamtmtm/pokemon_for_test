import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import PokemonDetails from "../components/PokemonDetails";

const PokemonPage = () => {
  return (
    <ApolloProvider client={client}>
      <PokemonDetails />
    </ApolloProvider>
  );
};

export default PokemonPage;
