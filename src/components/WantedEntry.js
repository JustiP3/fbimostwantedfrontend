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

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    const images = props.item.images.map((image) => <a href={image.original} key={getRandomInt(10000)} target="_blank" rel="noopener noreferrer"><img src={image.thumb} alt={image.caption} ></img></a> )

    let misc = [];
    for (const [key, value] of Object.entries(props.item)) {
        
        if (!!props.item[key] && key !== "title" && key !== "uid" && key !== "files" && key !== "images" && key !== "details" && key !== "description" && key !== "path" && key !== "url" && key !== "@id") {
          
            if (typeof(value)=== 'string') {
                const cleanText = value.replace(/<\/?[^>]+(>|$)/g, "");
                misc.push(`${key}: ${cleanText}`)
            } else {
                misc.push(`${key}: ${value}`)
            }
            
        }
    }

    const miscList = misc.map(x => <p key={x}>{x}</p>) 
  
    return(
    <div className="entry">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
            {details}
        </div>
            {images}
        <div>            
            {miscList}            
        </div>
        
    </div>)
}

export default WantedEntry