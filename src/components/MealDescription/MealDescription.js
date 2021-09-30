import React from 'react';
import { Container } from 'react-bootstrap';
import "./MealDescription.css";

const MealDescription = props => {

    const { strMealThumb, strMeal, strInstructions, strYoutube } = props.meal;



    return (
        <Container>
            <div className="meal-description">
                <div className="description-img">
                    <img width="100%" src={strMealThumb} alt="" />
                    <h3>{strMeal}</h3>
                </div>
                <div className="description-details">
                    <p>{strInstructions}</p>
                    <a href={strYoutube} target="_blank" className="description-icon"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </Container>
    );
};

export default MealDescription;