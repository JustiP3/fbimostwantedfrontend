import React, {Component} from 'react';

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "init" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => {
                if (!!res) {
                    this.setState({ apiResponse: res })
                } else {
                    console.log("no response")
                }
                
            }).catch((error) => console.log(error))
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return(<h1>Test</h1>)
    }
}