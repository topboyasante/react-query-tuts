import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

function RQSuperHeroesPage() {
  function onSuccess(data) {
    console.log("Perform A Side Effect after Fetching data", data);
  }
  function onError(error) {
    console.log(
      "Perform A Side Effect after an error occurs while fetching data.",
      error
    );
  }

  const { data, isLoading, isError, error , isFetching } =
    useSuperHeroesData(onSuccess, onError);

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
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {data.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </main>
  );
}

export default RQSuperHeroesPage;
