import React from 'react';
import './Title.css';

const Title = props => {
    if(props.title.length > 0){
        const title = props.title.toUpperCase().split('');
        // var titleArr = title.split('');
        
        var buildTitle = () => {
            return title.map((letter, i) => <span className="letter" key={i}>{letter}</span>);
        };
    }

    return(
        <div>
            <h1>{buildTitle()}</h1>
        </div>
    );
}

export default Title;