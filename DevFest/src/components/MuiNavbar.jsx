import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material'
import GrassIcon from '@mui/icons-material/Grass';
import Avatar from '@mui/material/Avatar';
import React from 'react'
import { Link } from 'react-router-dom';

export default function MuiNavbar({stateChanger, loggedIn}) {

  return (
    <AppBar>
        <Toolbar>
            <Link to="/">
                <IconButton size="large" edge='start' color='inherit' aria-label="logo">
                    <GrassIcon/>
                </IconButton>
            </Link>    
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
               7oumti
            </Typography>
            <Stack direction='row' spacing={5} marginRight={10}>
                <Link to="/home"><Button color="inherit" variant="outlined"> Home </Button></Link>
                <Link to="/map"><Button color="inherit" variant="outlined"> Map</Button> </Link>
                <Link to="/chat"><Button color="inherit" variant="outlined">  City Chat </Button></Link>
                {!loggedIn && <Link to="/login"><Button color="inherit"  variant="outlined"> Login </Button></Link>}
                {loggedIn && <Link to="/profile"><Avatar alt="Remy Sharp" src="../src/assets/react.svg" /></Link>}
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
