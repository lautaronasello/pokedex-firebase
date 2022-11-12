import { onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';

export default function ProtectedRoute() {
  const [isLoggin, setIsLoggin] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setIsLoggin(true);
        const uid = user.uid;
        Cookies.set('uid', uid);
        // ...
      } else {
        // User is signed out
        // ...
        setIsLoggin(false);
      }
    });
  }, [auth]);
  return isLoggin ? <Outlet /> : <Navigate to='/' />;
}
