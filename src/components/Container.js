import React from 'react';

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: {total:0, items:[]} };
    }
    
    callAPI() {
        fetch("http://localhost:9000/")
            .then(res => res.json())
            .then(res => {
                if (!!res) {                    
                    console.log(res.total)
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
        const displayText = this.state.apiResponse.total
        return(
            
        <div>
            <h1>Test</h1>
            <p>{displayText}</p>
        </div>
            )
    }
}