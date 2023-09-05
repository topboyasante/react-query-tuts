import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFamilyGuyCast = () => {
  return axios.get("http://localhost:4000/family_guy");
};

function ParallelQueries() {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: familyGuyCast } = useQuery("family-guy", fetchFamilyGuyCast);
  return (
    <main className="container">
      <div>ParallelQueries</div>
    </main>
  );
}

export default ParallelQueries;
