import React, { Component } from 'react'
import CartItem from './CartItem/CartItem';
import CartTotal from './CartTotal/CartTotal';

export default class Cart extends Component {
    render() {
        const {cart} = this.props;
        return (
            <div>
                <div>
                    { cart.length === 0 ? (
                        <div>cart is empty</div>
                    ) : (
                        <div>you have {cart.length} items</div>
                    )}
                </div>
                <div>
                    <div className="cart">
                        {cart.map((item) => (
                            <CartItem 
                                key={item.id}
                                item={item} 
                                removeFromCart={this.props.removeFromCart}
                                decrement={this.props.decrement}
                                increment={this.props.increment}
                            />
                        ))}
                        <CartTotal 
                            total={this.props.total}
                            cart={cart}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
