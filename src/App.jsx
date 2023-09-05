import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { QueryClientProvider,QueryClient } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-parallel">Parallel Query</Link>
            </li>
            <li>
              <Link to="/rq-dynamic-parallel">Dynamic Parallel Query</Link>
            </li>
            <li>
              <Link to="/rq-dependent">Dependent Query</Link>
            </li>
            <li>
              <Link to="/rq-paginated">Paginated Query</Link>
            </li>
            <li>
              <Link to="/rq-infinite">Infinite Query</Link>
            </li>
          </ul>
        </nav>
        <AppRoutes />
      </main>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  );
}

export default App;
