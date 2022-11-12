import './App.css';
import Landing from './Views/Landing';
import Home from './Views/Home/Home';
import {
  Router,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from 'react-router-dom';
import Error from './Views/Error/Error';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebase';
import ProtectedRoute from './Utils/Router/ProtectedRoute';
import { useEffect, useState } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: '/inicio',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} errorElement={<Error />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/inicio' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
