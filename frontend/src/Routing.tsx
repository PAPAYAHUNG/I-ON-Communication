import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import Admin from './pages/Admin';

export const router = createBrowserRouter([
  { path: '*', element: <ErrorPage /> },
  {
    path: '/',
    element: <Admin />,
  },

]);
