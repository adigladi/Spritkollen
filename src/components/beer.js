import React, { Component } from 'react'
import { type } from 'os';
const API = 'https://api-extern.systembolaget.se/product/v1/product';
export class Beer extends Component {
    constructor(props){
        super(props);
        const DEFAULT_QUERY = '{10}';
    }
    componentDidMount(){
    }
    getSBData () {
        fetch("https://api-extern.systembolaget.se/product/v1/product", {
            method: 'GET',
            headers: "Ocp-Apim-Subscription-Key": 9d2cdc9937b843bd964f0adf60ee871e
            })
          .then(response => response.json())
          .then(parsedJSON => console.log(JSON.stringify(parsedJSON.results)))
          .catch(error => console.log('parsing failed', error));
    }

    render() {
        this.getSBData();
        return (
            <div>
            </div>
        )
    }

}

export default Beer
