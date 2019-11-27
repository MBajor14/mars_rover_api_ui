import React, { Component } from 'react';
// import Form from '../../Form/Form';
// import Gallery from '../../Gallery/Gallery';

import './App.css';

const API_KEY = '';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            selectedRover: null,
            rovers: null
        }
    };

    // componentDidMount() {
    //     // fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    //     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({
    //             selectedRover: data.rovers[0],
    //             rovers: data.rovers
    //             });
    //         })
    //         .catch(error => { throw new Error(error) });
    //     }

    // //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=jgK3mGLNeRRwtX4Ml9VWaaWvzigyZo3PZ3FUTr0s
    // handleSubmit = async event => {
    //     event.preventDefault();
    //     const
    //         rover_name = this.state.selectedRover,
    //         // rover_name = event.target.elements.rover.value,
    //         // date = event.target.elements.date.value,
    //         date = '2019-8-9',
    //         api_call = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?earth_date=${date}&api_key=${API_KEY}`),
    //         data = api_call.json()
    //         // data = await api_call.json()
    //         ;
    //     this.setState({data: data});
    // };

    // roverSelect = (roverID) => {
    //     const { rovers } = this.state;
    //     if(rovers && (rovers.id !== roverID)){
    //         const newSelectedRover = this.state.rovers.find(rover => rover.id === roverID);
    //         this.setState({ selectedRover: newSelectedRover });
    //     }
    // };

    render(){
        return(
            <div className="app bg_mars d-flex justify-content-center align-items-center">
                <div className="main-container d-flex flex-column text-white p-4">
                    <h1 className="text-center mt-3">Mars Rover Gallery</h1>
                    {/* <Form handleSubmit={this.handleSubmit} handleSelect={(roverID) => this.roverSelect(roverID)} selectedRover={this.state.selectedRover}/>
                    {
                        // this.state.data && <Gallery data={this.state.data} />
                    } */}
                </div>
            </div>
        );
    };
}

export default App;