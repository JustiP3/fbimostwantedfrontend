import React from 'react';
import WantedEntry from './WantedEntry.js'
import '../stylesheet.css'

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

        if (!!displayText && displayText !== "0") {
            const itemsList = this.state.apiResponse.items.map((item) => <WantedEntry item={item} key={item.uid}/>)
            return(            
            <div className="container">
                <div className="header">
                    <h1>FBI Most Wanted List</h1>
                </div>
                <div className="entry">
                    {itemsList}
                </div>                
            </div>
                )
            } else {
                return(            
                    <div className="container">
                       <div className="header">
                            <h1>FBI Most Wanted List</h1>
                        </div>
                        <div className="entry">
                            <p>No Response</p>
                        </div>                        
                    </div>
                )
            }
    }
}