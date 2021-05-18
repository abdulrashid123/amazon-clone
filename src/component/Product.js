import React, { Component } from 'react'
import './Product.css'
import { connect } from 'react-redux';
import {addBasket} from '../redux'
import { AnimationWrapper } from 'react-hover-animation'
export class Product extends Component {
    constructor(props) {
        super(props)
        this.addToBasket = this.addToBasket.bind(this);
    }
    
    
    addToBasket() {
   
        this.props.addBasket({id:this.props.id ,title:this.props.title,image:this.props.image,price:this.props.price,rating:this.props.rating})
    }
    render() {
        return (
            <AnimationWrapper className="product">
    
                 
                <div className="product__info">
                    <p>{this.props.title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{this.props.price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(this.props.rating).fill().map((_,i) => (
                            <p>⭐</p>
                        ) )}



                    </div>
                   
                </div>
                <img src={this.props.image} alt="" />
                <button onClick={() => this.addToBasket()}>Add to Basket</button>
                
            </AnimationWrapper>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        
        basket:state.basket.basketList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBasket: (item) => dispatch(addBasket(item)),

    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Product)
