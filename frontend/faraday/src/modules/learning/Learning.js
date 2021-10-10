import React, {useState, useContext, useEffect} from 'react';
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
        "image": "https://miro.medium.com/max/1400/1*5hks5c7coEa_TvXSLKfu2A.jpeg",
        "desc": "Learn how to read candleplots",
        "url": "/home/page/candleplots"
    },
    {
        "title": "Trading Psychology",
        "image": "https://qph.fs.quoracdn.net/main-qimg-13d0a1107423fce4a2029892dae8ffbc",
        "desc": "Understand the minds behind the great trading methodology",
        "url": "/home/page/tradingpsych"
    },
    {
      "title": "Mathematics and Algorithm",
      "image": "https://miro.medium.com/max/1400/0*iiTB1dEpyQXWUgxA",
      "desc": "Thoughts about how different professions approach an algorithm",
      "url": "/home/page/mathematics"
    },
    {
      "title": "Quantitative Analysis",
      "image": "https://onlinelibrary.wiley.com/cms/asset/00c0c480-3493-4f8e-ae12-db482be391f5/cb1912-fig-0001-m.jpg",
      "desc": "",
      "url": "/home/page/quant"
    },
];

const theme = createTheme();

export default function Learning() {

  const {store, setStore} = useContext(Context);
  const [user, setUser] = useState('');

  useEffect(() => {
    const userRes = localStorage.getItem('user');
    setUser(userRes);
  });


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
              Welcome {user}!
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
