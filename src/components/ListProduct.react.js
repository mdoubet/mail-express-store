import React, {Component} from 'react'
import {GridTile} from 'material-ui/GridList'

export default class extends Component {

    render() {
        const product = this.props.product;
        console.log("current product at product level is " + product);
        return (
                <GridTile>
                    {product.title}
                    <img height = "75px" src={product.imageURL}/>
                </GridTile>

        );
    }
}


