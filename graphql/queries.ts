import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types
      image
      attacks {
        special {
          name
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`;
