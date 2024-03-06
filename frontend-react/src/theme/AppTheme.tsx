import { ThemeProvider } from '@emotion/react'
import React, { Children } from 'react'
import { MainTheme } from './MainTheme'
import { CssBaseline } from '@mui/material';

export const AppTheme = () => {
    const theme=MainTheme;
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
    </ThemeProvider>  )
}
