  
import React, { useState, useEffect } from 'react';
import './Orders.css'

import { connect } from 'react-redux';
import { db } from '../firebase';
import Order from './Order';

function Orders({ basket }) {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(basket?.user) {
        db
        .collection('users')
        .doc(basket?.user?.uid)
        .collection('orders')
        .orderBy('amount', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [basket?.user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
        basket:state.basket,
    }
}
export default connect(mapStateToProps)(Orders)