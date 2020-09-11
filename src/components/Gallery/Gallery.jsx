import React, { Fragment } from 'react';

const Gallery = (props) => {
    const { images, displaySize, setDisplaySize } = props;
    if(images.length === 0){
        return <Fragment/>;
    }

    return(
        <div className="container-fluid">
            <div className="d-flex">
                <button onClick={() => setDisplaySize(1)}>12</button>
                <button onClick={() => setDisplaySize(3)}>4</button>
                <button onClick={() => setDisplaySize(6)}>2</button>
            </div>
            <div className="row">
                {
                    images.map((image, index) => <img className={`img-thumbnail col-md-${displaySize}`} key={index} src={image.img_src}/>)
                }
            </div>
        </div>
    );
};

export default Gallery;