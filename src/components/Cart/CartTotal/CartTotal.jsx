import React, { Component } from 'react'
import PaypalButton from '../Paypal/Paypal';

export default class CartTotal extends Component {
    render() {
        const {cart} = this.props;
        let total = cart.reduce((a, c) => a + c.price * c.count, 0);
        return (
            <div className="cart-total text-left">
                Sub total: ${total}
                <PaypalButton total={total} />
            </div>
        )
    }

}
