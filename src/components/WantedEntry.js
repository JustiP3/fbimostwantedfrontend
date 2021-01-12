import React from 'react'

export default function(props) {
    
    return(<div className='entry'>
        <h2>Title: {props.item.title}</h2>
        <h3>Description:</h3>
        <p>{props.item.description}</p>
        <div>
            {props.item.details.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
        </div>)
}