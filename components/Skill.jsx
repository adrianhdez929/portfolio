import React from 'react';
import PropTypes from 'prop-types'

export default function Skill(props) {
    
    function renderStars() {
        let stars = []
        let half = false;

        for (let i = 1; i <= 5; i++) {
            if (i <= props.stars)
                stars.push(<Star key={i} fill='full' color={ props.color } />);
            else
                stars.push(<Star key={i} fill='empty' />);
        }
        return stars;
    }

    return(
        <div className="inline-flex items-center mx-3">
            { renderStars(props.stars) }
        </div>
    );
};

const Star = ({ fill, color }) => {
    console.log(color)
    return fill === 'full' ? 
        (<div className={"bg-"+ color + " w-4 h-4 border border-gray-500 rounded-full mx-0.5"}></div>) :
            (<div className="w-4 h-4 border border-gray-500 rounded-full mx-0.5"></div>)
};

Skill.propTypes = {
    stars : PropTypes.number,
    color : PropTypes.string,
};
