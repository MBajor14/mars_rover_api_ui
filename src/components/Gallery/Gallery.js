import React, {Component} from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: []
        }
    };

    componentDidUpdate(prevProps){
        if(this.props.data !== prevProps.data){
            const photos = Object.values(this.props.data)[0];
            const newImages = [];
            console.table(photos);
            photos.forEach(photo => {
                // if(photo.camera.id === 20)
                    newImages.push({
                        id: photo.id,
                        img_src: photo.img_src
                    });
            });
            this.setState({ images: newImages });
        }
    }

    renderImages = (images) => {
        return images.map(image => <Thumbnail key={image.id} img_src={image.img_src} />);
    };

    render(){
        const { images } = this.state;

        return(
            <div className="row overflow-auto">
                {
                    images && this.renderImages(images)
                }
            </div>
        );
    };
}

export default Gallery;
