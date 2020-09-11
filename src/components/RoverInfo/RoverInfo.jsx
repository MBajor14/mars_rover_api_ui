import React, { Fragment } from 'react';

const RoverInfo = (props) => {
    if(!props.selectedRover) return <Fragment/>; // if no props, return void markup
    const { selectedRover: { name, status, total_photos, launch_date, landing_date, max_date, max_sol, roverImgSrc } } = props;
    return(
        <div className="text-white">
            <div className="d-flex mb-3">
                <h4 className="mr-3">{name}</h4>
                <span className="label label-success">{status}</span>
            </div>
            {/* <img src="" alt="Curiousity Rover"/> */}

            <h4>photos: {total_photos}</h4>

            <h4>launch_date: {launch_date}</h4>
            <h4>landing_date: {landing_date}</h4>
            
            <h4>max_date: {max_date}</h4>
            <h4>max_sol: {max_sol}</h4>
        </div>
    );
};

export default RoverInfo;