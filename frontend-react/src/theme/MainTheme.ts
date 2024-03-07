import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

createTheme

export const MainTheme=createTheme({

    palette:{
        mode:'light',
        primary:{
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#ffff',
        },
        secondary:{
            main:'#3e3e3e',
            light:'#666666',
            dark:'8e8e8e8e',
        },
        error:{
            main:red.A400
        }
    },
})