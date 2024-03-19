import React, { useContext, useMemo } from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from '..'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { RegisterFormInput } from './interfaces/interface';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../contexts/UserContext';
import { Login } from '@mui/icons-material';
import { StartCreatingUserWithEmailAndPassword, checkingAuth } from '../helpers/thunks';

export const RegisterPageInfo = () => {

  const {user,setUser}=useContext(UserContext);
  const {errorMessage='',status}=user;

  const isAuthenticated=useMemo(()=>status==='checking',[status])


  const {register,handleSubmit,control,formState:{errors}}=useForm<RegisterFormInput>();

  
  const onSubmit:SubmitHandler<RegisterFormInput>=(data:RegisterFormInput)=>{
    console.log('onsubmit'+JSON.stringify(data));
    checkingAuth(user,setUser);    
    StartCreatingUserWithEmailAndPassword(user,setUser,data);
  }


  return (
<>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className='animate__animated animate__fadeIn'>
              <Grid container>
                <Grid item xs={12} sx={{mt:2}}>
                  <Controller
                    name='displayName'
                    control={control}
                    defaultValue=''
                    render={({field})=>(
                      <TextField 
                      {...field}
                      label='Nombre Completo' 
                      type='text' 
                      placeholder='Nombre Completo'
                      fullWidth
                      //error={!!displayNameValid}
                      //helperText={displayNameValid}
                      />
                    )}>
                    </Controller>
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                <Controller
                    name='email'
                    control={control}
                    defaultValue=''
                    render={({field})=>(
                      <TextField 
                      {...field}
                      label='Correo' 
                      type='email' 
                      placeholder='correo@google.com'
                      fullWidth
                      // error={!!emailValid && formSubmitted}
                      // helperText={emailValid}
                      />
                    )}/>
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    render={({field})=>(
                      <TextField 
                      {...field}
                      label='Contraseña' 
                      type='password' 
                      placeholder='Contraseña'
                      fullWidth
                      // value={password}
                      // onChange={onInputChange}
                      // error={!!passwordValid && formSubmitted}
                      // helperText={passwordValid}
                      />)}
                    />
                </Grid>

                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                  {/* NT: Desplegar condicionalmente el error */}
                <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                  <Alert 
                  severity='error'
                   >
                    {errorMessage}
                  </Alert>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                    disabled={isAuthenticated}
                    type='submit'
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
