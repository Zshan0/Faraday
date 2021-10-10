import React, {useState, useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Context from "../../Context.js"
import { Redirect } from "react-router-dom"

const cards = [
    {
        "title": "Candle Plots",
        "image": "https://source.unsplash.com/random",
        "desc": "Learn how to read candleplots",
        "url": "/home/page/candleplots"
    },
    {
        "title": "Trading Psychology",
        "image": "https://source.unsplash.com/random",
        "desc": "This is a short description for the module.",
        "url": "/home/page/tradingpsychology"
    },
    {
      "title": "Mathematics and Algorithm",
      "image": "https://source.unsplash.com/random",
      "desc": "Thoughts about how different professions approach an algorithm",
      "url": "/home/page/mathematics"
    },
];

const theme = createTheme();

export default function Learning() {

  const {store, setStore} = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
         <Toolbar component="nav"
             variant="dense"
             sx={{ justifyContent: 'space-between' }}
         >
         </Toolbar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
                Learning Modules
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Below is a collection which will help you learn all about Stock Trading and the Math and CS involved.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.title} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardActionArea href={card.url}>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                    </Typography>
                    <Typography>
                        {card.desc}
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
            Faraday.inc 
        </Typography>
      </Box>
      <div>
      </div>
    </ThemeProvider>
  );
}
