import React from 'react'
import { Document } from 'react-pdf'

const WantedEntry = function(props) {

    const images = props.item.images.map((image) => <a href={image.original} key={image.caption}><img src={image.thumb} alt={image.caption} ></img></a> )
    
    
    return(<div className='entry'>
        <h2>Title: {props.item.title}</h2>
        <p>{props.item.description}</p>
        <div>
            {props.item.details.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
            {images}
        </div>)
}

export default WantedEntry