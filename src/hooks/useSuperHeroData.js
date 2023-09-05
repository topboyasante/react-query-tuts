import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

// const fetchSuperHero = (id) => {
//   return axios.get(`http://localhost:4000/superheroes/${id}`);
// };

//or this:
const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export function useSuperHeroData(heroID) {
  const queryClient = useQueryClient();
  //   return useQuery(["super-hero",heroID],()=> fetchSuperHero(heroID))
  //or this:
  return useQuery(["super-hero", heroID], fetchSuperHero, {
    //InitialData in RQ
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroID));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
}
