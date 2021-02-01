import React, { Component } from 'react'
import Select from '@material-ui/core/Select';

export default class Filter extends Component {
    render() {
        const {products, sort} = this.props;
        return (
            <div className="row filter p-3">
                <div className="col-4 text-center">{products.length} Products</div>
                <div className="col-4 text-center">
                    Sort{" "}
                        <Select value={sort} onChange={this.props.sortProducts}>
                            <option value="latest">Latest</option>
                            <option value="highest">Highest</option>
                            <option value="lowest">Lowest</option>
                        </Select>
                </div>
                <div className="col-4">
                    Search{" "}
                    <input type="text"/>
                </div>
            </div>
        )
    }
}
