import React from 'react'

const WantedEntry = function(props) {

    const images = props.item.images.map((image) => <img src={image.thumb} alt={image.caption}></img> )
    
    
    return(<div className='entry'>
        <h2>Title: {props.item.title}</h2>
        <h3>Description:</h3>
        <p>{props.item.description}</p>
        <div>
            {props.item.details.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
            {images}
        </div>)
}

export default WantedEntry