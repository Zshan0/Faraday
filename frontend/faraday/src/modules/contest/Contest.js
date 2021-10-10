import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import List from './List';
import axios from "axios";

const theme = createTheme();

export default function Contest() {
  const [user, setUser] = useState('');
  const [contests, setContests] = useState([]);
  const [tempFlag, setTempFlag] = useState(false);

  useEffect(() => {
    const userRes = localStorage.getItem('user');
    setUser(userRes);

    if(!tempFlag) {
      async function fetchAPI() {
        axios.post('/contest/fetch_all').then(x => {
          console.log(x);
          setContests(x.data.message);
          setTempFlag(true);
        });
      }
      fetchAPI();
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
                Contests 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Welcome {user}!
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <List contests={contests} username={user}/>
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
    </ThemeProvider>
  );
}
