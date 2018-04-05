import React, {Component} from 'react'
import catalog from "../data/catalog";

export default class extends Component {
    render() {
        return (
            this.props.products.map(product =>  <Product product={product}/>)
        );
    }
}