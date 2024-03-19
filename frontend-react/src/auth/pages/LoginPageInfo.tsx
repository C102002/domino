import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useContext, useMemo } from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { StartGoogleSignIn, checkingAuth } from '../helpers/thunks';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormInput } from './interfaces/interface';
import { UserContext } from '../../contexts/UserContext';


export const LoginPageInfo = () => {

  const {user,setUser}=useContext(UserContext)
  const {register,handleSubmit,control,formState:{errors}}=useForm<LoginFormInput>();

  const {status,errorMessage,errorCode}=user;

  const isAuthenticated=useMemo(()=>status==='checking',[status])

  const onSubmintHandler:SubmitHandler<LoginFormInput>=(data:LoginFormInput)=>{
    console.log(data);
  }

  const onGoogleSignIn=()=>{
    
    checkingAuth(user,setUser);    

    StartGoogleSignIn(user,setUser);    
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmintHandler)}
      className='animate__animated animate__fadeIn'>
              <Grid container>
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
                      />
                    )}
                    />
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                  <Controller
                    name='password'
                    defaultValue=''
                    control={control}
                    render={({field})=>(
                      <TextField 
                      {...field}
                      label='Contraseña' 
                      type='password' 
                      placeholder='Contraseña'
                      fullWidth
                      />
                    )}
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
                    disabled={isAuthenticated}
                    variant='contained' 
                    fullWidth
                    type='submit'>
                      Login
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button 
                    disabled={isAuthenticated}
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
