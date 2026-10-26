import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import MainLayout from './pages/MainLayout';
const HomePage = lazy(()=> import ('./HomePage'));
const AboutPage = lazy(()=> import ('./AboutPage'));
import BlogsPage from './BlogsPage';
import { PostRoutes } from './PostRoutes';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          {PostRoutes.map((post, index) => {
            const Component = lazy(() => import(`./${post.component}`));
            return (
              <Route
                key={index}
                path={post.path}
                element={<BlogsPage postComponent={<Component />} />}
              />
            );
          })}
        </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

