import React from 'react';
import './Thumbnail.css';

const Thumbnail = props => (
    <div className="thumbnail col-2">
        <img src={props.img_src} alt=""/>
    </div>
);

export default Thumbnail;
