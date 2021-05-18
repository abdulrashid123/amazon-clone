import React, { Component } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './firebase';
import { setUser } from './redux';

export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleAuthentication = this.handleAuthentication.bind(this)
    }

    handleAuthentication(){
        if(this.props.basket.user){
            auth.signOut()
        }
    }
    
    render() {
        return (
            <div className="header" >
                <Link to="/">
                <img 
                className ="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                
                />
                </Link>
               
                <div className="header__search">
                    <input
                    className="header__searchInput"
                    type="text"
                    />
                    {/* Logo */}
                    <SearchIcon 
                    className="header__searchIcon"
                    />
                </div>
                <div className="header__nav">
                <Link to={!this.props.basket.user && "/login"}>
                    
                    <div className="header__option" onClick={this.handleAuthentication}>
                        <span className="header__optionLineOne">{this.props.basket.user ? this.props.basket.user.email : 'Hello guest'}</span>
                        {!this.props.basket.user?<span className="header__optionLinetwo">Sign In</span>:<span className="header__optionLinetwo">Sign Out</span>}
                    </div>
                </Link>
                    <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLinetwo">Order</span>

                    </div>
                    <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLinetwo">Prime</span>

                    </div>
                        <Link to="/checkout">
                            <div  className="header__optionBasket" >
                                <ShoppingBasketIcon />
                                <span className="header__optionLinetwo header__basketCount">{this.props.basket.basketList?.length}</span>
                            </div>
                        </Link>
                        
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        
        basket:state.basket,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: (user) => dispatch(setUser(user)),
  
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Header)
