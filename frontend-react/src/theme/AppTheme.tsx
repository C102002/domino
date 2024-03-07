import { ThemeProvider } from '@emotion/react'
import React, { Children } from 'react'
import { MainTheme } from './MainTheme'
import { CssBaseline } from '@mui/material';
import { props } from './interface/interface';

export const AppTheme:React.FC<props>=({children}) => {
  
  return (
    <ThemeProvider theme={MainTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>  )
}
