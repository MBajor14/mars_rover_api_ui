import React, { Component } from 'react';
import './Navbar.css'
import { RoverEnum } from '../../App';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const { selectRover } = this.props
        return(
            <nav className="d-flex justify-content-between align-items-center">
                <h3 className="ml-3">nasa's mars api ui portal</h3>
                <ul className="navbar-item-list">
                    <li className="navbar-item px-3" onClick={() => selectRover(RoverEnum.Curiousity)}>curiosity</li>
                    <li className="navbar-item px-3" onClick={() => selectRover(RoverEnum.Opportunity)}>opportunity</li>
                    <li className="navbar-item px-3" onClick={() => selectRover(RoverEnum.Spirit)}>spirit</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;