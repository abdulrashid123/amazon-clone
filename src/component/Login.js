import React, { Component } from 'react'
import { Link, withRouter  } from "react-router-dom";
import { auth } from '../firebase';
import './Login.css'
export class Login extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             email:'',
             password:''
        }
        this.register = this.register.bind(this)
        this.signIn = this.signIn.bind(this)
    }
    signIn(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((auth) => {
            if(auth){
                this.props.history.push('/')
            }
        })
        .catch((error) => alert(error.message))
        
    }
    register(e){
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((auth) => {
            if(auth){
                this.props.history.push('/')
            }
        })
        .catch((error) => alert(error.message))

    }
    render() {
        return (
            <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={this.state.email} onChange={e => this.setState({email:e.target.value})} />

                    <h5>Password</h5>
                    <input type='password' value={this.state.password} onChange={e => this.setState({password:e.target.value})} />

                    <button type='submit'onClick={(e) => this.signIn(e)}  className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={this.register}>Create your Amazon Account</button>
            </div>
        </div>
        )
    }
}

export default withRouter(Login)
