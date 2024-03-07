import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'


export const LoginPageInfo = () => {

  const errorMessage='';

  const onSubmint=()=>{
    console.log('pepe');
  }
  const onGoogleSignIn=()=>{
    console.log('GoogleSignIn');
  }
  return (
    <>
      <form onSubmit={onSubmint}
      className='animate__animated animate__fadeIn'>
              <Grid container>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField 
                  label='Correo' 
                  type='email' 
                  placeholder='alfredo@google.com'
                  fullWidth
                  name='email'
                  // value={email}
                  // onChange={onInputChange}
                  />
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                  <TextField 
                  label='Contraseña' 
                  type='password' 
                  placeholder='Contraseña'
                  fullWidth
                  name='password'
                  // value={password}
                  // onChange={onInputChange}
                  />
                </Grid>

                <Grid item xs={12} sx={{mt:2}} display={!!errorMessage ? '' : 'none'}>
                    <Alert severity='error'>
                      {errorMessage}
                    </Alert>
                </Grid>

                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                  <Grid item xs={12} sm={6}>
                    <Button
                    disabled={false}
                    variant='contained' 
                    fullWidth>
                      Login
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button 
                    disabled={false}
                    variant='contained' 
                    fullWidth
                    onClick={onGoogleSignIn}>
                      <Google/>
                      <Typography sx={{ml:1}}>
                        Google
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Link component={RouterLink}color='inherit' to='/auth/register'>
                    Crear una cuenta
                  </Link>
                </Grid>
              </Grid>
            </form>
    </>
    )
}