
import React from 'react';
import "./Meal.css";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = props => {

    const { strMeal, strMealThumb, idMeal, strInstructions } = props.meal
    return (

        <Card className="card">
            <Card.Img variant="top" src={strMealThumb} className="card-image" />
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>{strMeal}</Card.Title>
                <Card.Text>
                    {strInstructions.slice(0, 120)}
                </Card.Text>
            </Card.Body>
            <Card.Footer>

                <Link to={`/meals/${idMeal}`}>See More</Link>
            </Card.Footer>
        </Card>

    );
};

export default Meal;