import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

function RQSuperHeroDetail() {
  const { id } = useParams();

  const { data, isLoading, error, isError } = useSuperHeroData(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <main className="container">
      <h1>{data?.data.name}</h1>
      <p>Alias: {data?.data.alias}</p>
      <p>Origin: {data?.data.origin}</p>
      <p>First Appearance: {data?.data.first_appearance}</p>

      <h2>Skills</h2>
      <ul>
        {
          data?.data.powers.map((item)=>{
            return(
              <li key={item}>{item}</li>
            )
          })
        }
      </ul>
    </main>
  );
}

export default RQSuperHeroDetail;
