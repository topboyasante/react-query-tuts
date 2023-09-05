import axios from "axios";
import { useQuery,useMutation, useQueryClient } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes",hero);
};

export function useSuperHeroesData(onSuccess, onError) {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime:5000, //change the cache time, default is 5s
    // staleTime:30000, //how long the query remains fresh, default is 0s
    // refetchOnMount:true, //default is true, others: false and 'always'
    // refetchOnWindowFocus:'always', //default is true, refetches data when the tab is active or focsued on
    // refetchInterval:2000, // refetches data every 1 second, paused when the window loses focus
    // refetchIntervalInBackground:true //refetches interval in bakground
    // enabled: false, // diasables fetching on mount
    onSuccess: onSuccess,
    onError: onError,
    // onSuccess, ES6 Shortcut, used when the property and value have the same name
    // onError
    // select: (data) => {
    //   //used for data transformation, you can also use it to filter data and get specific info
    //   const superheroNames = data.data.map((hero) => hero.name);
    //   return superheroNames;
    // },
  });
}

export function useAddSuperHeroData(){
  const queryClient = useQueryClient()
  return useMutation(addSuperHero,{
    onSuccess: (data)=>{
      // queryClient.invalidateQueries("super-heroes") //query invalidation
      queryClient.setQueryData("super-heroes",(oldQueryData)=>{
        return {
          ...oldQueryData,
          data:[...oldQueryData.data, data.data]
        }
      })
    }
  })
}
