import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <nav className="d-flex justify-content-between align-items-center">
                <h3 className="ml-3">nasa's mars api ui portal</h3>
                <ul className="navbar-item-list">
                    <li className="navbar-item px-3">curiosity</li>
                    <li className="navbar-item px-3">opportunity</li>
                    <li className="navbar-item px-3">spirit</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;