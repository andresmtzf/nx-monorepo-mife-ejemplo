import React from 'react';
import { PrivateRoute } from '../components/routing/PrivateRoute';
import { PublicRoute } from '../components/routing/PublicRoute';
import { ErrorDisplay } from '../components/ui/ErrorDisplay';
import { Home } from '../components/ui/Home';
import { Login } from '../components/ui/Login';
import { Logout } from '../components/ui/Logout';
import { RemoteComponent } from '../components/ui/RemoteComponent';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Remote = React.lazy(() => import('remote/Module'));

const router = createBrowserRouter([
  {
    path: '/*',
    element: <PublicRoute />,
    errorElement: <ErrorDisplay />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'public-route/*',
        element: <RemoteComponent />,
        errorElement: <ErrorDisplay />,
      },
    ],
  },
  {
    path: '/*',
    element: <PrivateRoute />,
    children: [
      {
        path: 'home',
        index: true,
        element: <Home />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: 'private-remote/*',
        element: <Remote />,
        errorElement: <ErrorDisplay />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// const Remote = React.lazy(() => import('remote/Module'));
