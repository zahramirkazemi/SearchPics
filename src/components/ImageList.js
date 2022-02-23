import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
    const Images = props.Images.map( image =>{
        return <ImageCard key={image.id} image={image}/>
    })

    return ( <div className="image-list">
        {Images}
    </div> );
}
 
export default ImageList;