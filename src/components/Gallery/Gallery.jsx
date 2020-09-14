import React, { Fragment } from 'react';

const Gallery = (props) => {
    const { images, displaySize } = props;
    if(images.length === 0){
        return <Fragment/>;
    }

    return(
        <div className="container-fluid">
            <div className="row">
                {
                    images.map((image, index) => <img className={`img-thumbnail col-md-${displaySize}`} key={index} src={image.img_src}/>)
                }
            </div>
        </div>
    );
};

export default Gallery;