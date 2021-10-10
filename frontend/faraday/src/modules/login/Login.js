import React, { useState, useContext } from "react";
import axios from "axios";
import Context from "../../Context.js";
import Button from '@mui/material/Button';
import classnames from "classnames";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useHistory } from "react-router-dom"

const theme = createTheme();

const Login = () => {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const {store, setStore} = useContext(Context);

    const userData = {
        username,
        password
    };
    
    async function pushData(obj) {
        try {
            let res = await axios.post("/user/login", {
                username: obj.username,
                password: obj.password
            });
            if (res.data.success) {
                setErrors({});
                setUsername("");
                setPassword("");
                localStorage.setItem("user", obj.username);
                setStore({ user: res.data.username });
                history.push('/home/learning');
            } else if (res.data.username) {
              alert(res.data.username);
            } else if (res.data.password) {
              alert(res.data.password);
            }         
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const obj = {
          username: data.get('username'),
          password: data.get('password'),
        };
        pushData(obj);
        // Send data to the backend and await for the query
    }

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h1">
              Faraday
            </Typography>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}

export default Login;