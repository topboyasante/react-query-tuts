import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

function DynamicParallelQuery({ heroIds }) {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
//   console.log({ queryResults });
  return (
    <main className="container">
      <div>DynamicParallelQuery</div>
    </main>
  );
}

export default DynamicParallelQuery;
