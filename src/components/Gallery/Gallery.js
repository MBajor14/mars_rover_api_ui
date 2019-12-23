import React, { Component, Fragment } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images : props.images,
            currImg : props.images[0],
            currImgIndx: 0,
            maxIndex : props.images.length - 1
        };
    }

    renderImages = (images) => {
        return images.map(image => <Thumbnail key={image.id} img_src={image.img_src} />);
    };

    galleryController = (command, index) => {
        const { maxIndex, currImgIndx, images } = this.state;
        let newCurrIndex = -1;
        let newCurrImg = null;

        switch(command){
            case 'next':
                if(index + 1 <= maxIndex){
                    newCurrIndex = currImgIndx + 1;
                    newCurrImg = images[newCurrIndex];
                }
                else    
                    this.galleryController('head', index);
                break;

            case 'previous':
                if(index - 1 >= 0){
                    newCurrIndex = currImgIndx - 1;
                    newCurrImg = images[newCurrIndex];
                }
                else    
                    this.galleryController('tail', index);
                break;

            case 'head':
                newCurrIndex = 0;
                newCurrImg = images[0];
                break;

            case 'tail':
                newCurrIndex = maxIndex;
                newCurrImg = images[newCurrIndex];
                break;
        }

        if(newCurrIndex != -1 && newCurrImg != null)
            this.setState({ 
                currImgIndx: newCurrIndex,
                currImg: newCurrImg
            });
    };

    render(){
        const { images, currImgIndx, currImg, maxIndex } = this.state;

        return(
            <div className="row overflow-auto">
                {
                    images && 
                    <Fragment>
                        <button className="btn btn-secondary" onClick={event => this.props.returnToMenu(event)} type="button">Back to menu...</button>
                        <div>
                            <button className="btn btn-secondary" onClick={() => this.galleryController('previous', currImgIndx)} type="button">{'<'}</button>
                            <Thumbnail index={currImgIndx} img_src={currImg.img_src} galleryController={this.galleryController}/>
                            <button className="btn btn-secondary" onClick={() => this.galleryController('next', currImgIndx)} type="button">{'>'}</button>
                        </div>
                        <h6>{currImgIndx + 1} of {maxIndex + 1}</h6>
                        {/* { renderImages(images) } */}
                    </Fragment>
                }
            </div>
        );
    };
}

export default Gallery;
