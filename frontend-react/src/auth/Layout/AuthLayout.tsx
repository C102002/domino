import { Grid, Typography } from '@mui/material'
import React from 'react'
import { props } from '.'
import { useTheme } from '@emotion/react'
import './AuthLayout.css'
import { LockOutlined } from '@mui/icons-material'
import Background from '../../../public/Domino.jpg'

//TODO: ponerlo con la imagen del proyecto y no la de internet


export const AuthLayout:React.FC<props> = ({children,title}) => {
    
    const theme=useTheme();
    const BackgroundImage='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQN8M8H8_r3DzSaDMr9Ufgu2Xu5rfNzBnsA5lylRIIpG1mcW5lAwPKlGlo9-qa9VENT'
    
    // const GetBackgroundColor=():string=>{
    //     if (theme.palette.mode==='light') return (`'common.white'`);
    //     else return (`'common.black'`); 
    // }    
    // const BackgroundColor=GetBackgroundColor();
    
  return (
  <>
        <Grid
            container
            spacing={0}
            direction='row'
            alignItems='center'
            justifyContent='space-around'
            // NT: sx es un style extended
            sx={{minHeight:'100vh',backgroundColor:'primary.main', padding:4}}>
            
            <Grid item
            className='box-shadow-img'
            xs={7} //Tamaño de la caja
            sx={{
                height:{sm:525},
                width:{sm:800},
                backgroundColor:'common.white',
                backgroundImage:`url(${Background})`,
                padding:3,
                borderRadius:2,
            }}
            // xs={{
            //     height:{sm:525},
            //     width:{sm:800},
            //     backgroundColor:'common.white',
            //     backgroundImage:`url(${BackgroundImage})`,
            //     padding:3,
            //     borderRadius:2,
            // }}
            >
            </Grid>

            <Grid item
            className='box-shadow'
            alignContent='center'
            alignItems='center'
            xs={4} //Tamaño de la caja
            sx={{
                width:{sm:450},
                backgroundColor:'common.white',
                padding:3,
                borderRadius:2,
            }} //Extension del estilo
            >
                <Grid container 
                alignContent='center'
                alignItems='center'
                direction='column'
                flexWrap='wrap'
                >
                    <LockOutlined/>
                    <Typography variant='h5' align='center' sx={{mb:1}}>{title}</Typography>
                </Grid>
                {children}
            </Grid>
        </Grid>
  </>
  )
}