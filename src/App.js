import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import RoverInfo from './components/RoverInfo/RoverInfo.jsx';
import Gallery from './components/Gallery/Gallery.jsx';

import './App.css';

const API_KEY = '';

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
        this.changeDate = this.changeDate.bind(this);
        this.state = {
            images: [],
            selectedRover: null,
            selectedDate: null,
            rovers: null,
            displaySize: 1,
            tabs: []
        }
    };

    componentDidMount() {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    rovers: data.rovers,
                    selectedRover: data.rovers[0]
                });
            })
        .catch(error => { throw new Error(error) });
    }

    handleSubmit() {
        const { selectedDate: date, selectedRover: { name: roverName }, tabs } = this.state;

        if(roverName && date){
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                if(data && data.photos.length > 0){
                    const newTab = { date, images: data.photos, displaySize: 1 };
                    this.setState({ 
                        images: data.photos,
                        tabs: [...tabs, newTab]
                    });
                }
                else{
                    console.log(`No ${roverName} rover images for ${date}.`);
                }
            })
            .catch(error => { throw new Error(error)});
        }
    };

    changeDate(event) {
        this.setState({ selectedDate: event.target.value });
    }

    selectRover(roverId) {
        const selectedRover = this.state.rovers.find(rover => rover.id === roverId);
        selectedRover.roverImgSrc  = RoverImageSources.Curiousity;
        this.setState({selectedRover});
    };

    setDisplaySize(size) {
        if(size == 0){
            this.setState({ images: [] });
            return;
        }
        this.setState({ displaySize: size });
    };

    render(){
        const { selectedRover, images, displaySize, tabs } = this.state;

        return(
            <div className="app bg_mars">
                <Navbar selectRover={this.selectRover}/>
                <RoverInfo selectedRover={selectedRover}/>

                <input type="date" onChange={this.changeDate}/>
                <button onClick={this.handleSubmit}>Get Images!</button>

                <div>
                        {tabs.map((tab, index) => <button key={index} onClick={() => this.setState({ images: tab.images, displaySize: tab.displaySize })}>{tab.date}</button>)}
                </div>

                <div className="d-flex">
                    <button onClick={() => this.setDisplaySize(1)}>12</button>
                    <button onClick={() => this.setDisplaySize(3)}>4</button>
                    <button onClick={() => this.setDisplaySize(6)}>2</button>
                    <button onClick={() => this.setDisplaySize(0)}>clear</button> 
                </div>

                <Gallery displaySize={displaySize} images={images}/>
            </div>
        );
    };
}

export default App;