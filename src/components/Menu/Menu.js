import React from 'react';
import './Menu.css';

const Menu = (props) => (
    <div id="Menu" className="h-100">
        <div className="h-100 p-3 d-flex align-items-stretch">
            <a href="" className="rounded flex-fill d-flex leftOption" onClick={event => props.onMenuSelect(event, 0)}>
                <img className="image rounded" src="src\img\Curiousity.jpg" alt="Curiousity Rover"/>
            </a>
            <a href="" className="rounded mx-3 flex-fill d-flex middleOption" onClick={event => props.onMenuSelect(event, 1)}>
                <img className="image rounded" src="src\img\Curiousity.jpg" alt="Opportunity Rover"/>
            </a>
            <a href="" className="rounded flex-fill d-flex rightOption" onClick={event => props.onMenuSelect(event, 2)}>
                <img className="image rounded" src="src\img\Curiousity.jpg" alt="Spirit Rover"/>
            </a>
        </div>
    </div>
);

export default Menu;