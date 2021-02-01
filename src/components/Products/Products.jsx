import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        const {products} = this.props;
        return (
                <div className="row products p-2">
                    {products.map((product) => (
                        <div className="col-xs-12 col-md-6 col-lg-3 text-center product" key={product.id}>
                            <img src={product.image} alt={product.name}/>
                            <p className="product-name">{product.name}</p>
                            <div className="ds-flex product-desc">
                                <p className="product-price">${product.price}</p>
                                <button 
                                    type="button" 
                                    className="btn btn-lg btn-primary"
                                    onClick={() => this.props.addToCart(product)}    
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

        )
    }
}
