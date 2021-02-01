import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Navbar, Products, Filter, Cart, Messenger } from './components';

import data from './data.json';

class App extends Component {
    state = {
        products: data.products,
        sort: '',
        search: '',
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    }

    sortProducts = (e) => {
        const sort = e.target.value;
        this.setState({
            sort: sort,
            products: this.state.products.sort((a, b) => (
                sort === "lowest" ? a.price - b.price :
                sort === "highest" ? b.price - a.price :
                b.id - a.id
            ))
        })
    }

    addToCart = (product) => {
        const cart = this.state.cart;
        let flag = false;
        cart.forEach((item) => {
            if (item.id === product.id) {
                item.count++;
                flag = true;
            }
        })
        if (!flag) {
            cart.push({...product, count: 1});
        }
        this.setState({
            cart: cart
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
        
    }

    removeFromCart = (product) => {
        const cart = this.state.cart.slice();
        this.setState({
            cart: cart.filter((item) => item.id !== product.id)          
        })
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    decrement = (product) => {
        let cart = this.state.cart;
        cart.forEach((item) => {
            if (item.id === product.id) {
                item.count--;
            }
        })
        this.setState({
            cart: cart
        })
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    increment = (product) => {
        const cart = this.state.cart;
        cart.forEach((item) => {
            if (item.id === product.id) {
                item.count++;
            }
        })
        this.setState({
            cart: cart
        })
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    render() {
        return (
            <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Filter 
                            products={this.state.products}
                            sort={this.state.sort}
                            search={this.state.search} 
                            sortProducts={this.sortProducts}
                        />
                        <Products 
                            products={this.state.products}
                            addToCart={this.addToCart}
                        />
                    </Route>
                    <Route path="/cart">
                        <Cart 
                            cart={this.state.cart} 
                            removeFromCart={this.removeFromCart}             
                            decrement={this.decrement}
                            increment={this.increment} 
                            total={this.state.total}  
                        />
                    </Route>
                </Switch>
                <Messenger />
            </div>
        )
    }
}

export default App;
