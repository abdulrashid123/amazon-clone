import React, { Component } from 'react'
import './SubTotal.css'
import CurrencyFormat from "react-currency-format";
import { connect } from 'react-redux';
export class SubTotal extends Component {
    constructor(props) {
        super(props)
        this.get_total = this.get_total.bind(this);
        
    }
    
    get_total(){
        
        let sum = this.props.basket.reduce((a,b) => {
            return a + b.price
        },0)
        return sum
    }


    render() {

        return (
           
            <div className="subtotal">
                      <CurrencyFormat
                        renderText={(value) => (
                        <>
                            <p>
                            {/* Part of the homework */}
                            Subtotal ({this.props.basket.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                            </small>
                                </>
                                )}
                            decimalScale={2}
                            value={this.get_total()} // Part of the homework
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />

                        <button>Proceed to Checkout</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        
        basket:state.basket.basketList,
    }
}

export default connect(mapStateToProps)(SubTotal)
