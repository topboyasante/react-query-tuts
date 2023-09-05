import { Link } from "react-router-dom";
import { useAddSuperHeroData, useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { useState } from "react";

function RQSuperHeroesPage() {
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");

  function onSuccess(data) {
    console.log("Perform A Side Effect after Fetching data", data);
  }
  function onError(error) {
    console.log(
      "Perform A Side Effect after an error occurs while fetching data.",
      error
    );
  }

  const { data, isLoading, isError, error, isFetching } = useSuperHeroesData(
    onSuccess,
    onError
  );

  const {mutate:addHero,} = useAddSuperHeroData()

  const handleAddHeroClick = () => {
    const hero = { name, alias }
    // console.log(hero)
    addHero(hero)
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <main className="container">
      <h2>Super Heroes Page - Data Fetched using React-Query</h2>
      {/* <button onClick={refetch}>Fetch Data</button> */}
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      {data?.data.map((hero) => {
        return (
          <Link key={hero.id} to={`/rq-super-heroes/${hero.id}`}>
            <div>{hero.name}</div>
          </Link>
        );
      })}

      {/* {data.map((item) => {
        return <div key={item}>{item}</div>;
      })} */}
    </main>
  );
}

export default RQSuperHeroesPage;
