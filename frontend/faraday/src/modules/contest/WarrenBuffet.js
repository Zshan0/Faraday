import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Context from '../../Context.js'

const WarrenBuffet = () => {
    const {store, setStore} = useContext(Context);

    return(
        <Container component="main" maxWidth="xs">
            <Box sx={{height: 400, width: 500}}>
                <Box sx={{display: 'flex'}}>
                    <Fade in={true}>
                        Hey
                    </Fade>
                </Box>
            </Box>
        </Container>
    )
}

export default WarrenBuffet;