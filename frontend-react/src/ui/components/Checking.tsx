import { CircularProgress, Grid, Typography } from '@mui/material'
import './Checking.css'
import { UserContext } from '../../contexts/UserContext'
import { useContext, useEffect } from 'react';
import BackgroundImage from '../../../public/DominoPiecesLoading.png'

export const Checking = () => {
  const {user}=useContext(UserContext);
  const {status}=user;
  console.log('checking'+JSON.stringify(user));
  
  useEffect(() => {
  }, [status])
  
  return (
    <Grid
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    // NT: sx es un style extended
    sx={{minHeight:'100vh',backgroundColor:'primary.main', padding:8}}
    >

    <Grid container
    direction='row'
    justifyContent='center'
    className='loader'
    >
      <Grid item
        justifyContent='center'
        justifyItems='center'
        className='loader'
        sx={{
          height:{sm:200},
          width:{sm:200},
          padding:3,
          borderRadius:200,
          backgroundColor:'primary.light'
      }} //Tamaño de la caja
      >
        <img className='image' src={BackgroundImage} alt='No Image'/>
      </Grid>
    </Grid>

    <Grid container
    direction='row'
    justifyContent='center'
    >
    <Typography fontWeight="bold" fontSize={24} color='secondary.main'> Cargando </Typography>
    </Grid>
</Grid>  )
}