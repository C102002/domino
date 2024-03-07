import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from '..'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

export const RegisterPageInfo = () => {
  const onSubmint=()=>{
    console.log('onsubmit');
  }
  return (
<>
      <form 
      onSubmit={onSubmint}
      className='animate__animated animate__fadeIn'>
              <Grid container>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField 
                  label='Nombre Completo' 
                  type='text' 
                  placeholder='Nombre Completo'
                  fullWidth
                  name='displayName'
                  // value={displayName}
                  // onChange={onInputChange}
                  // error={!!displayNameValid && formSubmitted}
                  // helperText={displayNameValid}
                  />
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                  <TextField 
                  label='Correo' 
                  type='email' 
                  placeholder='alfredo@google.com'
                  fullWidth
                  name='email'
                  // value={email}
                  // onChange={onInputChange }
                  // error={!!emailValid && formSubmitted}
                  // helperText={emailValid}
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
                  // error={!!passwordValid && formSubmitted}
                  // helperText={passwordValid}
                  />
                </Grid>

                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                  {/* NT: Desplegar condicionalmente el error */}
                {/* <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                  <Alert 
                  severity='error'
                   >
                    {errorMessage}
                  </Alert>
                  </Grid> */}

                  <Grid item xs={12}>
                    <Button
                    // disabled={isCheckingAuthentication}
                    variant='contained' 
                    fullWidth>
                      Crear Cuenta
                    </Button>
                  </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                  <Link component={RouterLink}color='inherit' to='/auth/login'>
                     Ingresar
                  </Link>
                </Grid>
              </Grid>
            </form>
    </>  )
}
