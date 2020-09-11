import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import RoverInfo from './components/RoverInfo/RoverInfo.jsx';
import Gallery from './components/Gallery/Gallery.jsx';

import './App.css';

const API_KEY = 'olSoXXK6OHWLWSUNNctUYDey38o7sMm2ViqAvpXW';

export const RoverEnum = {
    Curiousity: 5,
    Opportunity: 6,
    Spirit: 7
};

export const RoverImageSources = {
    Curiousity: { src: '../../img/Curiousity.jpg', alt: 'Curiousity Rover'},
    Opportunity: { src: '', alt: ''},
    Spirit: { src: '', alt: ''}
}

class App extends Component{
    constructor(props){
        super(props);
        this.selectRover = this.selectRover.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            images: [],
            selectedRover: null,
            rovers: null,
            displaySize: 1
        }
    };

    componentDidMount() {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.table(data.rovers);
                this.setState({ 
                    rovers: data.rovers,
                    selectedRover: data.rovers[0]
                });
            })
        .catch(error => { throw new Error(error) });
    }

    handleSubmit() {
        const roverName = this.state.selectedRover.name;
        // const date = event.target.elements.date.value;
        const date = '2020-03-05';

        if(roverName && date){
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                if(data && data.photos.length > 0){
                    this.setState({ 
                        images: data.photos,
                        page: 'images'
                    });
                }
                else{
                    console.log(`No ${roverName} rover images for ${date}.`);
                }
            })
            .catch(error => { throw new Error(error)});
        }
    };

    selectRover(roverId) {
        const selectedRover = this.state.rovers.find(rover => rover.id === roverId);
        selectedRover.roverImgSrc  = RoverImageSources.Curiousity;
        this.setState({selectedRover});
        console.log(selectedRover);
    };

    setDisplaySize(size) {
        this.setState({ displaySize: size });
    };

    render(){
        const { selectedRover, images, displaySize } = this.state;

        return(
            <div className="app bg_mars">
                <Navbar selectRover={this.selectRover}/>
                <RoverInfo selectedRover={selectedRover}/>

                <button onClick={this.handleSubmit}>Get Images!</button>

                <Gallery displaySize={displaySize} setDisplaySize={(size) => this.setDisplaySize(size)} images={images}/>
            </div>
        );
    };
}

export default App;