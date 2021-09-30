import React from 'react';
import "./Country.css";

const Country = props => {
    const { strMealThumb, strMeal } = props.country;
    return (
        <div className="country">
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
        </div>
    );
};

export default Country;