import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromBasketItem } from '../redux'
import './CheckoutProduct.css'
export class CheckoutProduct extends Component {
    constructor(props) {
        super(props)
        this.removeFromBasket = this.removeFromBasket.bind(this)
    }
    
    removeFromBasket() {
        this.props.removeFromBasketItem(this.props.id)
    }
    render() {
        return (
            <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={this.props.image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{this.props.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{this.props.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(this.props.rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={this.removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromBasketItem: (id) => dispatch(removeFromBasketItem(id)),

    }
}


export default connect(null,mapDispatchToProps)(CheckoutProduct)
