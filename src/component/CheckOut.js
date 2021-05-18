import React, { Component } from 'react'
import './CheckOut.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
import { connect } from 'react-redux';


export class CheckOut extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="checkout__left">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""  className="checkout_ad"/>
               
                    <div>
                        <h3 >Hello {this.props.basket?.user?.email} </h3>
                        <h2 className="checkout__title">
                            Your shopping Basket
                        </h2>
                        {this.props.basket?.basketList.map(item => (
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
                
                <div className="ckeckout__right">
                    <SubTotal/>
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
export default connect(mapStateToProps)(CheckOut)
