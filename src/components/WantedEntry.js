import React from 'react'


const WantedEntry = function(props) {

    let title;
    if (!!props.item.title) {
        title = props.item.title;
    } else {
        title = "untitled"
    }

    let description;
    if (!!props.item.description) {
        description = props.item.description
    } else {
        description = ""
    }

    let details;
    if (!!props.item.details) {
        details = props.item.details.replace(/<\/?[^>]+(>|$)/g, "")
    } else {
        details = ""
    }

    const images = props.item.images.map((image) => <a href={image.original} key={image.caption} target="_blank" rel="noopener noreferrer"><img src={image.thumb} alt={image.caption} ></img></a> )

    let misc = [];
    for (const [key, value] of Object.entries(props.item)) {
        
        if (!!props.item[key] && key !== "title" && key !== "uid" && key !== "files" && key !== "images" && key !== "details" && key !== "description" && key !== "path" && key !== "url" && key !== "@id") {
            misc.push(`${key}: ${value}`)
        }
    }

    const miscList = misc.map(x => <li key={x}>{x}</li>) 
  
    return(
    <div className='entry'>
        <h2>Title: {title}</h2>
        <p>{description}</p>
        <div>
            {details}
        </div>
            {images}
        <div>
            <ul>
                {miscList}
            </ul>
        </div>
        
    </div>)
}

export default WantedEntry