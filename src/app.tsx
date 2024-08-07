  import { Route, Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { lazy, Suspense } from 'solid-js';
import './app.css';
const Catchall = lazy(() => import('./routes/[...index]'));

const Nav = lazy(() => import('~/components/Nav'));

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>
            <Nav />
            {props.children}
          </Suspense>
        </>
      )}
    >
      <Route path="*index" component={Catchall} />
    </Router>
  );
}
