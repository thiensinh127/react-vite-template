import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from '../error-page';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home';
import Login from '../pages/login';
import PrivateRoute from '../components/PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route
        index
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        errorElement={<ErrorPage />}
      />
      <Route path="/login/*" element={<Login />} />
    </Route>,
  ),
);

export default router;
