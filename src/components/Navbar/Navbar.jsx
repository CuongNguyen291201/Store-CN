import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
                <div className="row Navbar">
                    <div className="col-3">
                        <Link to="/">
                            <h1 className="text-center p-2">
                                Store
                            </h1>
                        </Link>
                    </div>
                    <div className="col-9 nav">
                        <div className="col-2 text-center">
                            <Link to="/">
                                <i className="fas fa-house-damage py-3 nav-item"/>
                            </Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/user">
                                <i className="fas fa-user-circle py-3 nav-item"/>
                            </Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/cart">
                                <i className="fas fa-shopping-cart py-3 nav-item"/>
                            </Link>
                        </div>                    
                    </div>
                </div>
        )
    }
}
