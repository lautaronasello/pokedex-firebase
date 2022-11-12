import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase';
import { Google } from '@mui/icons-material';
import Cookies from 'js-cookie';
export default function Landing() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const user = Cookies.get('uid');
  const handleClickLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      localStorage.setItem('token', token);
      // The signed-in user info.
      const user = result.user;
      localStorage.setItem('userInfo', {
        nombre: user.displayName,
        email: user.email,
        foto: user.photoURL,
      });

      navigate('/inicio');

      // ...
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    }
  };

  return user ? (
    <Navigate to='/inicio' />
  ) : (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'red',
      }}
    >
      <Grid container>
        <Grid justifyContent='center' display='flex' item xs={12} md={7}>
          UN MENSAJE ACA
        </Grid>
        <Grid justifyContent='center' display='flex' item xs={12} md={5}>
          <Paper
            sx={{
              minHeight: '60vh',
              width: '80%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: '1rem',
            }}
            elevation={3}
          >
            <Stack
              spacing={8}
              direction={'column'}
              justifyContent='center'
              alignItems={'center'}
              textAlign='center'
            >
              <Typography variant='h6'>Hola, bienvenido a pokeapp!</Typography>
              <Typography variant='subtitle1'>
                Para poder continuar inicia sesion con una cuenta de google.
              </Typography>
              <Button
                variant='contained'
                endIcon={<Google />}
                onClick={handleClickLogin}
              >
                google
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
