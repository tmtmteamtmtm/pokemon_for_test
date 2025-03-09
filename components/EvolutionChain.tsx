import { useRouter } from "next/router";

interface Evolution {
  id: string;
  name: string;
  image: string;
}

interface EvolutionChainProps {
  evolutions?: Evolution[]; // Optional array of evolutions
}

const EvolutionChain: React.FC<EvolutionChainProps> = ({ evolutions }) => {
  const router = useRouter();

  return (
    <div>
      <h3>Evolutions:</h3>
      <ul>
        {evolutions?.map((evo) => (
          <li key={evo.id} onClick={() => router.push(`/${evo.name.toLowerCase()}`)}>
            <img src={evo.image} alt={evo.name} />
            {evo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EvolutionChain;
