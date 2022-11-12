import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import logo from '../../logo.svg';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';
import Cookies from 'js-cookie';

export default function Home() {
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove('uid');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>NOS CHORIAMOS REACT HOME</p>
        <Button variant='contained' onClick={handleClickLogout}>
          SALIR
        </Button>
      </header>
    </div>
  );
}
