import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';

import './App.css';

const API_KEY = '';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Mars Rover Station',
            page: 'menu',
            images: [],
            roverEnum: [ { id: 5, name: 'Curiousity' }, { id: 6, name: 'Opportunity' }, { id: 7, name: 'Spirit' }],
            selectedRover: null,
            rovers: null
        }
    };

    componentDidMount() {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log('rovers: ', {data});
                this.setState({ 
                selectedRover: null,
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

        console.log('date', event.target.elements.date.value);
        console.log('selected rover ', this.state.selectedRover);

        const rover_name = this.state.selectedRover.name;
        const date = event.target.elements.date.value;
        // const date = '2019-09-05';

        if(rover_name.length > 0 && date){
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?earth_date=${date}&api_key=${API_KEY}`)
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
                    console.log('No images for this date.');
                }
            })
            .catch(error => { throw new Error(error)});
        }
    };

    menuSelect = (event, roverId) => {
        event.persist();
        event.preventDefault();

        const { rovers, selectedRover } = this.state;

        if(rovers){
            this.setState({ selectedRover: rovers.find(rover => rover.id === roverId) });
        }

        this.setState({ 
            page: 'form'
        });

        console.log('menu select executed');
        console.log('event', event);
        console.log('rover id', roverId);
        console.log('selected rover', selectedRover);
    };

    returnToMenu = (event) => {
        event.persist();
        event.preventDefault();
        console.log('%c returnToMenu()', 'color:magenta;');
        console.log('%c event', 'color:cyan;', event);
        this.setState({ page: 'menu' });
    }

    render(){
        const { title, page, selectedRover, images } = this.state;

        return(
            <div className="app bg_mars">
                <Navbar/>
            </div>
        );
    };
}

export default App;