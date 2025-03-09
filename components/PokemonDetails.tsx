import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/queries";
import { useRouter } from "next/router";
import EvolutionChain from "./EvolutionChain";

interface Attack {
    name: string;
    damage: number;
  }
  

const PokemonDetails = () => {
  const router = useRouter();
  const { name } = router.query;
  const { data, loading, error } = useQuery(GET_POKEMON, { variables: { name } });

  if (loading) return <p>Loading...</p>;
  if (error || !data.pokemon) return <p>Pokémon not found</p>;

  return (
    <div>
      <h1>{data.pokemon.name}</h1>
      <img src={data.pokemon.image} alt={data.pokemon.name} />
      <p>Type: {data.pokemon.types.join(", ")}</p>
      <h3>Special Attacks:</h3>
      <ul>
        {data.pokemon.attacks.special.map((attack: Attack) => (
          <li key={attack.name}>{attack.name} - {attack.damage} damage</li>
        ))}
      </ul>
      <EvolutionChain evolutions={data.pokemon.evolutions} />
    </div>
  );
};

export default PokemonDetails;
