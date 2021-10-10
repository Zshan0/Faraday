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
        "desc": "This is a short description for the module.",
        "url": "/page/candleplots"
    },
    {
        "title": "Trading Psychology",
        "image": "https://source.unsplash.com/random",
        "desc": "This is a short description for the module.",
        "url": "/page/tradingpsychology"
    },
];

const theme = createTheme();

export default function Learning() {

  const {store, setStore} = useContext(Context);
  const [load, setLoad] = useState(false);

  const handleClick = (card) => {
    console.log("handleClick", card);
    setLoad(true);
    setStore({ ...store, title:card.title})
  }

  const callPage = () => {
    if (load) {
      return <Redirect to='/page'></Redirect>
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
         <Toolbar component="nav"
             variant="dense"
             sx={{ justifyContent: 'space-between' }}
         >
             {cards.map((card) => (
             <Link
                 color="inherit"
                 noWrap
                 key={card.title}
                 variant="body2"
                 href={card.url}
                 sx={{ p: 1, flexShrink: 0 }}
             >
                 {card.title}
             </Link>
             ))}
         </Toolbar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
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
              Lorem Ipsum and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
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
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
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
        {callPage()}
      </div>
    </ThemeProvider>
  );
}
