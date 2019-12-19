import React from 'react';
import './Form.css';

const Form = props => {
    const getCurrentDate = () => {
        const
            currentUnix = new Date(Date.now()),
            year = currentUnix.getUTCFullYear(),
            month = currentUnix.getUTCMonth() + 1,
            day = currentUnix.getUTCDate()
        ;

        console.log(`${year}-${month}-${day}`);

        return `${year}-${month}-${day}`;
    };

    return (
        <form className="d-flex flex-column" onSubmit={event => props.handleSubmit(event)}>
            <div className="flex-fill d-flex justify-content-around">
                <button type="button" id="curiosityBtn" className=" btn flex-fill text-white rounded-0" onClick={() => props.handleSelect(5)}>
                    Curiosity
                </button>
                <button type="button" id="opportunityBtn" className="btn flex-fill text-white rounded-0" onClick={() => props.handleSelect(6)}>
                    Opportunity
                </button>
                <button type="button" id="spiritBtn" className="btn flex-fill text-white rounded-0" onClick={() => props.handleSelect(7)}>
                    Spirit
                </button>
            </div>
            <div className="flex-fill d-flex flex-column">
                {
                    props.selectedRover &&
                    <div className="p-3 border rounded d-flex flex-column">
                        {/* put selected rover details here */}
                        <div className="d-flex align-items-baseline">
                            <h4 className="text-primary">{props.selectedRover.name}</h4>
                            <span className="ml-2">{props.selectedRover.status}</span>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <h5>Launch Date</h5>
                                <span className="ml-2 text-secondary">{props.selectedRover.launch_date}</span>
                            </div>
                            <div className="col-md-6 form-group">
                                <h5>Max Date</h5>
                                <span className="ml-2 text-secondary">{props.selectedRover.max_date}</span>
                            </div>
                            <div className="col-md-6">
                                <h5>Landing Date</h5>
                                <span className="ml-2 text-secondary">{props.selectedRover.landing_date}</span>
                            </div>
                            <div className="col-md-6">
                                <h5>Max Sol</h5>
                                <span className="ml-2 text-secondary">{props.selectedRover.max_sol}</span>
                            </div>
                        </div>
                    </div>
                }
                <div>
                    <h4>Choose a Date</h4>
                    <input type="date" name="date"  min="2018-04-01" max={getCurrentDate()}/>
                </div>

                <button className="btn btn-sm text-white">
                    Blast Off!
                </button>
            </div>
        </form>
    );
};

export default Form;

// Nasa's rovers on mars: Curiosity, Opportunity, Spirit
// Curiosity currently down?
