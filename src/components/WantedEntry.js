import React from 'react'


const WantedEntry = function(props) {

    const images = props.item.images.map((image) => <a href={image.original} key={image.caption}><img src={image.thumb} alt={image.caption} ></img></a> )

    let details = [];
    for (const [key, value] of Object.entries(props.item)) {
        
        if (!!props.item[key] && key !== "title" && key !== "uid" && key !== "files" && key !== "images" && key !== "details" && key !== "description" && key !== "path" && key !== "url" && key !== "@id") {
            details.push(`${key}: ${value}`)
        }
    }

    const detailsList = details.map(x => <li key={x}>{x}</li>)
    
  
    
    return(
    <div className='entry'>
        <h2>Title: {props.item.title}</h2>
        <p>{props.item.description}</p>
        <div>
            {props.item.details.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
            {images}
        <div>
            <ul>
                {detailsList}
            </ul>
        </div>
        
    </div>)
}

export default WantedEntry