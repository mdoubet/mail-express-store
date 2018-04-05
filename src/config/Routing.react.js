import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import AllProducts from '../pages/AllProducts.react'
import Boxes from '../pages/Boxes.react'
import PackagingSupplies from '../pages/PackagingSupplies.react'

export default class extends Component {
    render() {
        return (
            <div>
                <Route exact path ='/' component={AllProducts}/>
                <Route exact path ='/boxes' component={Boxes}/>
                <Route exact path ='/packaging-supplies' component={PackagingSupplies}/>

            </div>
        );
    }
}