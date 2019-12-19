import React, { Component } from 'react';
import Form from './components/Form/Form';
import Menu from './components/Menu/Menu';
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

    componentDidMount() {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log('rovers: ', data);
                this.setState({
                selectedRover: data.rovers[0],
                rovers: data.rovers
                });
            })
            .catch(error => { throw new Error(error) });
        }

    handleSubmit = event => {
        event.persist();
        event.preventDefault();
        console.log('handle submit: ', event);
        console.log('handle submit: ', event.target);

        // const
        //     rover_name = this.state.selectedRover,
        //     // rover_name = event.target.elements.rover.value,
        //     // date = event.target.elements.date.value,
        //     date = '2019-8-9',
        //     api_call = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?earth_date=${date}&api_key=${API_KEY}`),
        //     data = api_call.json()
        //     ;
        // this.setState({data: data});
    };

    roverSelect = (roverID) => {
        const { rovers } = this.state;
        if(rovers && (rovers.id !== roverID)){
            const newSelectedRover = this.state.rovers.find(rover => rover.id === roverID);
            this.setState({ selectedRover: newSelectedRover });
        }
    };

    render(){
        return(
            <div className="app bg_mars d-flex justify-content-center align-items-center">
                <div className="main-container d-flex flex-column text-white p-3">
                    <h1 className="text-center mt-3">Mars Rover Gallery</h1>

                    <Menu />

                    {/* <Form handleSubmit={this.handleSubmit} handleSelect={(roverID) => this.roverSelect(roverID)} selectedRover={this.state.selectedRover}/> */}
                    {
                        // this.state.data && <Gallery data={this.state.data} />
                    }
                </div>
            </div>
        );
    };
}

export default App;