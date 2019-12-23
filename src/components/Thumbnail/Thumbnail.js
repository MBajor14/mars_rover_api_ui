import React from 'react';
import './Thumbnail.css';

const Thumbnail = props => (
    <img src={props.img_src} className="thumbnail" alt="image from mars rover" onClick={() => props.galleryController('next', props.index)} />
);

export default Thumbnail;
