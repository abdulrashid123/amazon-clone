import './App.css';
import Home from './component/Home';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOut from './component/CheckOut';
import Login from './component/Login';
import {useEffect} from 'react'
import { auth } from './firebase';
import { setUser } from './redux';
import { connect } from 'react-redux';

function App({setUser}) {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
          setUser(authUser)
      }
      else{
        setUser(null)
      }
    })

  }, [])
  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route exact path="/">
          <Header/>
            <Home/>
          </Route>
          <Route path="/checkout">
          <Header/>
            <CheckOut/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


const mapDispatchToProps = dispatch => {
  return {
      setUser: (user) => dispatch(setUser(user)),

  }
}
export default connect(null,mapDispatchToProps)(App);
