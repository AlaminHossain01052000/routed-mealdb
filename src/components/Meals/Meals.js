import { compose } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MealDescription from '../MealDescription/MealDescription';

const Meals = () => {
    const id = useParams();

    const idMeal = id?.mealsId;

    const [mealDetails, setMealDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals));
    }, [])

    console.log(mealDetails)


    return (
        <div>
            {
                mealDetails.map(m => <MealDescription meal={m}></MealDescription>)
            }
        </div>
    );
};

export default Meals;