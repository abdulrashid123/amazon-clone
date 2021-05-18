import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CheckoutProduct } from './CheckoutProduct'
import './Payment.css'
export class Payment extends Component {
    render() {
        return (
            <div className='payment'>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{this.props.basket.user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    
                    <div className='payment__items'>
                        {this.props.basket.basketList?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
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


export default connect(mapStateToProps)(Payment)