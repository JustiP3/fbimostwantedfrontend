import React from 'react';
import WantedEntry from './WantedEntry.js'

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
        const itemsList = this.state.apiResponse.items.map((item) => <WantedEntry item={item} key={item.uid}/>)
        return(
            
        <div>
            <h1>Total Responses: {displayText}</h1>
            {itemsList}
        </div>
            )
    }
}