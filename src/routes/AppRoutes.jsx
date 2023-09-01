import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import SuperHeroesPage from "../components/SuperHeroesPage";
import RQSuperHeroesPage from "../components/RQSuperHeroesPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/super-heroes" element={<SuperHeroesPage/>}/>
      <Route path="/rq-super-heroes" element={<RQSuperHeroesPage/>}/>
    </Routes>
  )
}

export default AppRoutes