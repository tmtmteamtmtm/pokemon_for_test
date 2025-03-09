import { render, screen } from "@testing-library/react";
import PokemonDetails from "../components/PokemonDetails";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POKEMON } from "../graphql/queries";
import { mockPokemonData } from "../__mocks__/pokemonMocks";

const mocks = [
  {
    request: {
      query: GET_POKEMON,
      variables: { name: "Bulbasaur" },
    },
    result: {
      data: mockPokemonData,
    },
  },
];

test("renders Pokémon details correctly", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PokemonDetails />
    </MockedProvider>
  );

  expect(await screen.findByText("Bulbasaur")).toBeInTheDocument();
  expect(await screen.findByText("Grass")).toBeInTheDocument();
  expect(await screen.findByText("Solar Beam - 120 damage")).toBeInTheDocument();
});
