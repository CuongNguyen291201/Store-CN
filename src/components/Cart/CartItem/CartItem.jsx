import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="row my-2 text-center">
                <div className="col-10 col-lg-2 mx-auto">
                    <img 
                        src={item.image} 
                        alt={item.name}
                        style={{ width: "5rem", height: "5rem"}}
                    />
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    {item.name}
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    ${item.price}
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <span 
                        className="btn btn-black mx-1 p-1"
                        onClick={() => this.props.decrement(item)}
                    >
                        -    
                    </span>
                    <span className="btn btn-black mx-1 p-1">{item.count}</span>
                    <span 
                        className="btn btn-black mx-1 p-1"
                        onClick={() => this.props.increment(item)}    
                    >
                        +
                    </span>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <div 
                        className="cart-remove"
                        onClick={() => this.props.removeFromCart(item)}    
                    >
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <strong>Item total: ${item.price * item.count}</strong>
                </div>
            </div>
        )
        
    }
}
