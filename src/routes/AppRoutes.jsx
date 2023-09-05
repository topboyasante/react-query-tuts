import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import SuperHeroesPage from "../components/SuperHeroesPage";
import RQSuperHeroesPage from "../components/RQSuperHeroesPage";
import RQSuperHeroDetail from "../components/RQSuperHeroDetail";
import ParallelQueries from "../components/ParallelQueries";
import DynamicParallelQuery from "../components/DynamicParallelQuery";
import DependentQueries from "../components/DependentQueries";
import { PaginatedQueries } from "../components/PaginatedQueries";
import { InfiniteQueriesPage } from "../components/InfiniteQueries";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/super-heroes" element={<SuperHeroesPage/>}/>
      <Route path="/rq-super-heroes" element={<RQSuperHeroesPage/>}/>
      <Route path="/rq-super-heroes/:id" element={<RQSuperHeroDetail/>}/>
      <Route path="/rq-parallel" element={<ParallelQueries/>}/>
      <Route path="/rq-dynamic-parallel" element={<DynamicParallelQuery heroIds={[1,3]}/>}/>
      <Route path="/rq-dependent" element={<DependentQueries email={`asantekwasi500@gmail.com`}/>}/>
      <Route path="/rq-paginated" element={<PaginatedQueries/>}/>
      <Route path="/rq-infinite" element={<InfiniteQueriesPage/>}/>
    </Routes>
  )
}

export default AppRoutes