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

const validateLogin = async (props) => {
  return {
    'response': 'success'
  }
}

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
    

    async function pushData() {
        try {
            let res = await axios.post("http://localhost:5000/users/login", {
                username: userData.username,
                password: userData.password
            });
            if (res.status == 200) {
                setErrors({});
                setUsername("");
                setPassword("");
                localStorage.setItem("token", res.data.token);
                setStore({
                    token: res.data.token,
                    user: res.data.user
                });
                console.log()
            } else if (res.data.username) {
                setErrors({ username: res.data.username });
            } else if (res.data.email) {
                setErrors({ password: res.data.password });
            } else {
                setErrors({ someError: res.data.someError });
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
        // Send data to the backend and await for the query
        const responseData = await validateLogin(obj);
        if(responseData.response == 'success') {
          // add props to the details or use context or local storage to keep track of user
          history.push('home/learning');
        } else if(responseData.response == 'not found') {
          console.log("account not found");
        } else if(responseData.response == 'incorrect password') {
          console.log("incorrect password");
        } else {
          console.log("error occured, please try again");
        }
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
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