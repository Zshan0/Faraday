import React, { useState, useEffect } from "react";
import Context from "./Context.js";
import axios from "axios";
import Topbar from "./modules/utils/Topbar.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Learning from "./modules/learning/Learning.js";
import Login from "./modules/login/Login.js";
import Register from "./modules/login/Register.js"
import CandlePlots from "./modules/learning/CandlePlots.js"
import Contest from "./modules/contest/Contest.js";
import Mathematics from "./modules/learning/Mathematics.js";
import WarrenBuffet from "./modules/contest/WarrenBuffet.js";

const App = () => {
  const [store, setStore] = useState({
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async() => {
      let token = localStorage.getItem('token');
      if (token == null) {
        localStorage.setItem('token', '');
        token = '';
      } else {
        try {
          const res = await axios.post('http://localhost:5000/users/profile', {
            token
          });

          if (res.status === 200) {
            setStore({
              token: token,
              user: res.data.user
            })
          } else {
            console.log("F");
          }
        } catch (err) {
          console.log(err.message);
        }
      } 
    }
  }, []);

  return (
    <Router>
      <Context.Provider value= {{store, setStore}}>
      <div className="App">
        <Route path="/home" component={Topbar} />
        <Route exact path="/">
          <p>Hello World</p>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home/learning" component={Learning} />
        <Route exact path="/home/contests" component={Contest} />
        <Route exact path="/home/page/candleplots" component={CandlePlots} />
        <Route exact path="/home/page/mathematics" component={Mathematics} />
        <Route exact path="/home/contests/warrenbuffet" component={WarrenBuffet} />
      </div>
      </Context.Provider>
    </Router>
  )
}

export default App;