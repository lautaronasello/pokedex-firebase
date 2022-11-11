import './App.css';
import Landing from './Views/Landing';
import Home from './Views/Home/Home';
import { Router, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Views/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: '/inicio',
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
