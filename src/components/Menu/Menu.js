import React from 'react';
import './Menu.css';

const Menu = (props) => (
    <div id="Menu" className="h-100">
        <div className="h-100 p-3 d-flex align-items-stretch">
            <a href="" className="rounded flex-fill d-flex flex-column leftOption" onClick={event => props.onMenuSelect(event, 5)}>
                <img className="image rounded" src="src\img\Curiousity.jpg" alt="Curiousity Rover"/>
                <h4>Curiousity</h4>
            </a>
            <a href="" className="rounded mx-3 flex-fill d-flex flex-column middleOption" onClick={event => props.onMenuSelect(event, 6)}>
                <img className="image rounded" src="src\img\Curiousity.jpg" alt="Opportunity Rover"/>
                <h4>Opportunity</h4>
            </a>
            <a href="" className="rounded flex-fill d-flex flex-column rightOption" onClick={event => props.onMenuSelect(event, 7)}>
                <img className="image rounded" src="src\img\Curiousity.jpg" alt="Spirit Rover"/>
                <h4>Spirit</h4>
            </a>
        </div>
    </div>
);

export default Menu;