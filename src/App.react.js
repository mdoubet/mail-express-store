import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router} from 'react-router-dom'

// import Product from './Product.react'
import Catalog from './pages/Catalog.react'
import Routing from './config/Routing.react'

export default class extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <main>
                        <Routing/>

                    </main>
                </MuiThemeProvider>
            </Router>
        );
    }
}