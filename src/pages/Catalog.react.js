import React, {Component} from 'react'
import {GridList} from 'material-ui/GridList'

import Product from '../components/Product.react'
import ListProduct from '../components/ListProduct.react'

import catalog from '../data/catalog'

export default class extends Component {
    render() {
        const renderProducts = () => {
            return catalog.map(product =>  <Product product={product}/>)

        }

        return (
            <div>
                <h1>Moving Supplies category</h1>
                <div>{renderProductCategory("moving-supplies")}</div>
                <h2>All products in catalog</h2>
                <GridList>{ProductList(catalog)}</GridList>
            </div>
        );
    }
}

const renderProductCategory = (category)=>{
    const products = catalog.filter((product) => {return (product.category === category)});
    return ProductList(products);
}

const ProductList = (products)=>{
    return (
      products.map(product => <ListProduct product={product}/>)
    );
}