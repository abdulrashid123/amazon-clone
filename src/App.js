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
import Payment from './component/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import Orders from './component/Orders';


const promise = loadStripe('pk_test_51H3IGGBENlFIyNJ36QtBplI3ilRDkx1UAoejPBD0nbZLcdzstjWRrdTIVBgsFuoNQEtvnsyt5ykmc671DCGjrXHc00XhImfjuQ')


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
          <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
              {/* <Payment stripe={stripe} elements={elements}/> */}
             <Payment/>
          </Elements>
            
          </Route>
          <Route exact path="/orders">
            <Orders/>
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
