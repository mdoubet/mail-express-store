import React, {Component} from 'react'
import Paper from 'material-ui/Paper'


export default class extends Component {
    // constructor(props){
    //     super(props);
    //
    // }
    render() {
        const product = this.props.product;
        console.log("current product at product level is " + product);
        return (
            <Paper>
                <div>
                    <h2>{product.title}</h2>
                    <img width = "200px" src={product.imageURL}/>
                </div>
            </Paper>
        );
    }
}


